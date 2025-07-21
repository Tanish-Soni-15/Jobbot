import { useState } from "react";

function FileUpload({ onFileUpload }) {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFileChange(files[0]);
    }
  };

  const handleFileChange = (file) => {
    if (
      file &&
      (file.type === "application/pdf" ||
        file.type === "application/msword" ||
        file.type ===
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
    ) {
      setUploadedFile(file);
      
      onFileUpload(file);
    } else {
      alert("Please upload a PDF or DOC file.");
    }
  };

  const handleInputChange = (e) => {
    const file = e.target.files[0];
    
    if (file) {
      handleFileChange(file);
    }
  };

  return (
    <div className="w-full">
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-200 ${
          dragActive
            ? "border-primary-500 bg-primary-50"
            : "border-gray-300 hover:border-primary-400 hover:bg-gray-50"
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleInputChange}
          className="hidden"
          id="file-upload"
        />

        <div className="text-center">
          <div className="text-6xl mb-4">📄</div>
          <p className="text-lg font-medium text-gray-900 mb-2">
            Drop your resume here or click to browse
          </p>
          <p className="text-gray-600 mb-6">
            Supports PDF, DOC, and DOCX files
          </p>
          <label
            htmlFor="file-upload"
            className="text-white bg-[#2563eb] hover:bg-[#1d4ed8] font-semibold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-primary-300 cursor-pointer inline-block"
          >
            {!uploadedFile?"Choose File":uploadedFile.name}
          </label>
        </div>
      </div>

   
    </div>
  );
}

export default FileUpload;
