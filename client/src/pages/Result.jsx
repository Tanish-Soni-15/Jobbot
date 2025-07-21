import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ResultCard from "../components/ResultCard";
import SkillsChart from "../components/SkillsChart";
import { Target } from "lucide-react";
import SideHeader from "../components/SideHeader";

function Result() {
  const location = useLocation();
  const [animateCards, setAnimateCards] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setTimeout(() => setAnimateCards(true), 100);
  }, []);
  const { result, analysisComplete } = location.state || {};
  const getScoreColor = (score) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreBgColor = (score) => {
    if (score >= 80) return "bg-green-50 border-green-200";
    if (score >= 60) return "bg-yellow-50 border-yellow-200";
    return "bg-red-50 border-red-200";
  };

  const getScoreText = (score) => {
    if (score >= 80) return "Excellent Match";
    if (score >= 60) return "Good Match";
    return "Needs Improvement";
  };
  // Mock analysis results

  const [mockResults, setmockResults] = useState(null);
  useEffect(() => {
    if (result) {
      const a = {
        matchScore: result.matchScore,
        keywordMatch: result.keywordMatch,
        experienceMatch: result.experienceMatch,
        skillsMatch: result.skillsMatch,
        strengths: result.strengths,
        improvements: result.improvements,
        missingSkills: result.missingSkills,
        matchedSkills: result.matchedSkills,
      };
      setmockResults(a);
    }
  }, [result]);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
  if (!analysisComplete || !result) {
    return (
      <div className="sm:flex block">

      <SideHeader/>
       
        <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              No Analysis Data Found
            </h1>
            <p className="text-gray-600 mb-8">
              Please go back and complete the analysis process.
            </p>
            <Link
              to="/analyze"
              className="text-white bg-[#2978CC]  hover:bg-[#2F3E46] font-semibold py-3 px-6 rounded-lg  transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Start Analysis
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="sm:flex block">
      
      <SideHeader setIsMenuopen={setIsMenuOpen}/>
   
      {mockResults && !isMenuOpen &&(
        <div className="min-h-screen bg-gray-50 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className=" mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Analysis Results
              </h1>
              <p className="text-xl text-gray-600">
                Here's how your resume matches the job requirements
              </p>
            </div>

            {/* Overall Match Score */}
            <div className="mb-12">
              <div className={`card p-8 ${getScoreBgColor(result.matchScore)}`}>
                <div className="flex flex-col lg:flex-row items-center justify-between">
                  <div className="text-center lg:text-left mb-8 lg:mb-0">
                    <div className="flex items-center justify-center lg:justify-start mb-4">
                      <Target className="w-8 h-8 text-blue-600 mr-3" />
                      <h2 className="text-3xl font-bold text-gray-900">
                        Overall Match Score
                      </h2>
                    </div>
                    <p className="text-gray-600 text-lg">
                      Based on comprehensive analysis of your resume
                    </p>
                  </div>

                  <div className="relative">
                    <div className="w-32 h-32 relative">
                      <svg
                        className="w-32 h-32 transform -rotate-90"
                        viewBox="0 0 120 120"
                      >
                        <circle
                          cx="60"
                          cy="60"
                          r="50"
                          stroke="#e5e7eb"
                          strokeWidth="8"
                          fill="none"
                        />
                        <circle
                          cx="60"
                          cy="60"
                          r="50"
                          stroke={
                            result.matchScore >= 80
                              ? "#10b981"
                              : result.matchScore >= 60
                              ? "#f59e0b"
                              : "#ef4444"
                          }
                          strokeWidth="8"
                          fill="none"
                          strokeLinecap="round"
                          strokeDasharray={`${2 * Math.PI * 50}`}
                          strokeDashoffset={`${
                            2 * Math.PI * 50 * (1 - result.matchScore / 100)
                          }`}
                          className="transition-all duration-2000 ease-out"
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span
                          className={`text-3xl font-bold ${getScoreColor(
                            result.matchScore
                          )}`}
                        >
                          {result.matchScore}%
                        </span>
                        <span className="text-sm text-gray-600 font-medium">
                          {getScoreText(result.matchScore)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Scores */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <ResultCard
                title="Keyword Match"
                score={mockResults.keywordMatch}
                description="How well your resume keywords match the job description"
                animate={animateCards}
              />
              <ResultCard
                title="Experience Match"
                score={mockResults.experienceMatch}
                description="Alignment between your experience and job requirements"
                animate={animateCards}
              />
              <ResultCard
                title="Skills Match"
                score={mockResults.skillsMatch}
                description="Technical and soft skills compatibility"
                animate={animateCards}
              />
            </div>

            {/* Skills Analysis */}
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <SkillsChart
                title="Matched Skills"
                skills={mockResults.matchedSkills}
                type="matched"
              />
              <SkillsChart
                title="Missing Skills"
                skills={mockResults.missingSkills}
                type="missing"
              />
            </div>

            {/* Strengths and Improvements */}
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div className="card p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                  <span className="text-green-600 mr-2">💪 </span>
                  Strengths
                </h3>
                <ul className="space-y-3">
                  {mockResults.strengths.map((strength, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">✓</span>
                      <span className="text-gray-700">{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                  <span className="text-orange-600 mr-2">🎯</span>
                  Improvements
                </h3>
                <ul className="space-y-3">
                  {mockResults.improvements.map((improvement, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-orange-600 mr-2 mt-1">•</span>
                      <span className="text-gray-700">{improvement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/analyze" className="btn-pri">
                  Analyze Another Resume
                </Link>
                <button className="btn-sec">Download Report</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Result;
