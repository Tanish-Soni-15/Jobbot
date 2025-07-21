import pkg from "pdf-parse";
import dotenv from "dotenv";
dotenv.config();
const pdfParse = pkg.default || pkg;
import mammoth from "mammoth";
import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({ apiKey: process.env.GOGGLE_GEMINI_KEY });

const analyze = async (req, res) => {
  try {
    const { jobDescription, linkedInURL } = req.body;

    const resumeFile = req.file;

    if (!resumeFile) {
      return res.status(400).json({ error: "Resume file is required" });
    }

    // 1. Extract text from resume
    let resumeText;
    if (resumeFile.mimetype === "application/pdf") {
      resumeText = await pdfParse(resumeFile.buffer).then((d) => d.text);
    } else if (
      resumeFile.mimetype ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      resumeText = await mammoth
        .extractRawText({ buffer: resumeFile.buffer })
        .then((d) => d.value);
    } else {
      return res.status(400).json({ error: "Unsupported file format" });
    }

    // 2. Construct prompt for OpenAI
    const prompt = `
You are an expert resume analyzer.

Compare the following candidate's resume and job description to evaluate fit.

Resume:
${resumeText}

Job Description:
${jobDescription}

${linkedInURL ? `Candidate's LinkedIn Profile: ${linkedInURL}` : ""}

Please provide the output as a JSON object with the following keys:

{
  "match_score": number (0 to 100),
  "missing_skills": [list of up to 3 important skills missing from the resume],
  "suggestions": [list of actionable suggestions to improve the resume]
}

Return only valid JSON with no extra text.
`;
  const instruction = `
You are a strict and highly accurate ATS-style Resume Analyzer and Recruiter AI with over 7 years of technical hiring experience.

Your task is to **deeply compare and match** a given resume against a job description — ONLY using actual content from both. If either input is invalid or lacks relevant content, assign a score of 0.

---

## 🔍 Your Core Tasks:

1. Parse both the **resume** and **job description** carefully. If either is non-technical, irrelevant, or contains random/unrelated text, return all scores as **0**.
2. Extract and compare:
   - **keywords**: job titles, technologies, certifications, responsibilities
   - **skills**: hard/soft skills relevant to the role
   - **experience**: roles, years of work, companies, projects, domain relevance

3. Calculate scores (0–100):
   - **keywordMatch**: shared tools, roles, or terms
   - **skillsMatch**: technical or behavioral overlap
   - **experienceMatch**: depth + relevance of past roles
   - **matchScore**: weighted average of the above

4. Extract meaningful insights:
   - **strengths**: strong alignments from the resume
   - **improvements**: **at least 4 realistic suggestions** to align better
   - **missingSkills**: skills from JD not in resume
   - **matchedSkills**: skills present in both

---

## 📦 Output Format: JSON only

{
  "matchScore": number,                  
  "keywordMatch": number,                
  "experienceMatch": number,            
  "skillsMatch": number,                

  "strengths": [List real resume strengths based on JD match],
  "improvements": [At least 4 real, helpful, resume improvement tips],
  "missingSkills": [Skills in JD but not in resume/LinkedIn],
  "matchedSkills": [Skills present in both resume/LinkedIn and JD]
}

---

## ⚠️ Strict Validation Rules:

- DO NOT guess or hallucinate skills or matches.
- Reject meaningless inputs (random lines, lorem ipsum, etc.)
- Only extract what actually exists — no assumptions.
- If no valid overlap exists, assign **0 for all scores**.
- If either input is too short (<100 characters), assume it's invalid.
- Enforce realism — do not inflate scores.

---

## 👁️ Notes:

- If a LinkedIn URL is present, treat its content as part of the resume.
- Never return placeholder data. Only return what is **strictly matched**.
- Ensure the "improvements" section is personalized and practical.
`;

    const Geminires = await ai.models.generateContent({
      model: "gemini-1.5-flash",
      contents: `${instruction}\n\n${prompt}`,
    });

    // Extract raw text
    let rawText = Geminires.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!rawText) {
      return res.status(500).json({ error: "No AI response generated" });
    }
    rawText = rawText.trim();
    if (rawText.startsWith("```json")) {
      rawText = rawText
        .replace(/^```json\s*/, "")
        .replace(/```$/, "")
        .trim();
    }

    let parsedResult;

    parsedResult = JSON.parse(rawText);
    res.status(200).json({ success: true, result: parsedResult });
  } catch (err) {
    console.error("❌ Error in /analyze:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
};
export { analyze };
