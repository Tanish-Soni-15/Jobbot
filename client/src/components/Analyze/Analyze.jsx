import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FileUpload from "./components/FileUpload";
import JobDescriptionInput from "./components/JobDescriptionInput";
import LikeUpload from "./components/LikeUpload";
import Text from "./components/Text";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Analyze({isMenuOpen}) {
  const [step, setstep] = useState(1);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [LinkedInlink, setLinkedInlink] = useState("");
  const [Info, setInfo] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const navigate = useNavigate();

  const handleClick = (data) => {
    setstep(data);
  };
  const handleFileUpload = (file) => {
    setUploadedFile(file);
  };

  const handleAnalyze = async () => {
    if (!uploadedFile || !jobDescription.trim()) {
      alert("Please upload a resume and enter a job description.");
      return;
    }

    if (
      !jobDescription ||
      jobDescription.length < 30 ||
      /[asdf]{5,}/i.test(jobDescription)
    ) {
      console.log("");

      toast.error("Job description looks invalid or incomplete.", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: true,
        theme: "colored",
      });
    } else {
      setIsAnalyzing(true);

      // Simulate analysis process
      const formData = new FormData();
      formData.append("resume", uploadedFile);
      formData.append("jobDescription", jobDescription);
      formData.append("linkedInURL", LinkedInlink);
      formData.append("info", Info);

      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/analyze`, {
        method: "POST",
        body: formData, // ✅ Automatically sets multipart/form-data
      });
      const res = await response.json();
      const result = res.result;

      await new Promise((resolve) => setTimeout(resolve, 3000));

      setIsAnalyzing(false);

      navigate("/results", {
        state: {
          result,
          analysisComplete: true,
        },
      });
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 py-7  sm:py-12 ">
      {!isMenuOpen&&
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" mb-12">
          <h1 className="sm:text-4xl text-3xl  font-bold text-gray-900 mb-4">
            Analyze Your Career History
          </h1>
          <p className="text-xl  text-gray-600">
            Import your information from an existing resume, LinkedIn profile or
            add it manually and provide the job description to get detailed
            analysis.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {/* File Upload Section */}
          <div className=" ">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              How would you like to add your career information?
            </h2>
            <div className="w-full text-center  p-1 rounded-lg flex mb-4 justify-between border-[1px] border-gray-300 ">
              <div
                onClick={(e) => handleClick(1)}
                className={`w-full cursor-pointer font-semibold rounded-lg py-2 ${
                  step == 1 && " text-black border-2 border-black bg-gray-300"
                }`}
              >
                Resume File
              </div>
              <div
                onClick={(e) => handleClick(2)}
                className={`w-full cursor-pointer font-semibold rounded-lg py-2 ${
                  step == 2 && " text-black border-2 border-black bg-gray-300"
                }`}
              >
                LinkedIn Import
              </div>
              <div
                onClick={(e) => handleClick(3)}
                className={`w-full cursor-pointer font-semibold rounded-lg py-2 ${
                  step == 3 && " text-black border-2 border-black bg-gray-300"
                }`}
              >
                Paste Text
              </div>
            </div>
            {step == 1 && (
              <div className="">
                <FileUpload onFileUpload={handleFileUpload} />
                {uploadedFile && (
                  <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      <span className="text-green-800 font-medium">
                        {uploadedFile.name}
                      </span>
                    </div>
                    <p className="text-green-600 text-sm mt-1">
                      Resume uploaded successfully
                    </p>
                  </div>
                )}
              </div>
            )}
            {step == 2 && (
              <div className="">
                <LikeUpload value={LinkedInlink} onChange={setLinkedInlink} />
              </div>
            )}
            {step == 3 && (
              <div className="">
                <Text value={Info} onChange={setInfo} />
              </div>
            )}
          </div>

          {/* Job Description Section */}
          <div className=" ">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Job Description
            </h2>
            <JobDescriptionInput
              value={jobDescription}
              onChange={setJobDescription}
            />
          </div>
        </div>

        {/* Analysis Button */}
        <div className="mt-12 text-center">
          <button
            onClick={handleAnalyze}
            disabled={isAnalyzing || !uploadedFile || !jobDescription.trim()}
            className={`text-white bg-[#2F3E46] font-semibold  rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-primary-300 text-lg px-12 py-4 ${
              isAnalyzing || !uploadedFile || !jobDescription.trim()
                ? "opacity-50 cursor-not-allowed transform-none"
                : ""
            }`}
          >
            {isAnalyzing ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                Analyzing...
              </div>
            ) : (
              "Analyze Resume"
            )}
          </button>

          {(!uploadedFile || !jobDescription.trim()) && (
            <p className="text-gray-500 mt-4">
              Please upload a resume and enter a job description to continue
            </p>
          )}
        </div>
      </div>
}
    </div>
  );
}

export default Analyze;
