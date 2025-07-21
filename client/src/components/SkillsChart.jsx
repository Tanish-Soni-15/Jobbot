function SkillsChart({ title, skills, type }) {
  const isMatched = type === 'matched'
  
  return (
    <div className="card p-8">
      <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
        <span className={`mr-2 ${isMatched ? 'text-green-600' : 'text-orange-600'}`}>
          {isMatched ? '✓' : '!'}
        </span>
        {title}
      </h3>
      <div className="space-y-3">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center">
            <span
              className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                isMatched
                  ? 'bg-green-100 text-green-800'
                  : 'bg-orange-100 text-orange-800'
              }`}
            >
              {skill}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <p className="text-sm text-gray-600">
          {isMatched 
            ? `${skills.length} skills match the job requirements`
            : `${skills.length} skills mentioned in job description but not found in resume`
          }
        </p>
      </div>
    </div>
  )
}

export default SkillsChart