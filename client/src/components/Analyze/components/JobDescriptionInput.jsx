function JobDescriptionInput({ value, onChange }) {
  return (
    <div className="w-full">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Paste the job description here...

Example:
We are looking for a skilled React Developer to join our team. The ideal candidate should have:
- 3+ years of React.js experience
- Strong JavaScript/TypeScript skills
- Experience with Node.js and Express
- Knowledge of RESTful APIs
- Familiarity with Git version control
- Bachelor's degree in Computer Science or related field"
        className="w-full h-80 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none transition-colors duration-200"
      />
      <div className="flex justify-between items-center mt-2">
        <p className="text-sm text-gray-500">
          {value.length} characters
        </p>
        <button
          onClick={() => onChange('')}
          className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200"
        >
          Clear
        </button>
      </div>
    </div>
  )
}

export default JobDescriptionInput