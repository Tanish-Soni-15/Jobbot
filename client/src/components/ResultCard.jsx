import { useState, useEffect } from 'react'

function ResultCard({ title, score, description, animate }) {
  const [displayScore, setDisplayScore] = useState(0)
  
  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        let current = 0
        const increment = score / 50
        const interval = setInterval(() => {
          current += increment
          if (current >= score) {
            current = score
            clearInterval(interval)
          }
          setDisplayScore(Math.round(current))
        }, 20)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [animate, score])

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-600'
    if (score >= 60) return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <div className="card p-6 text-center">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      <div className="mb-4">
        <div className={`text-4xl font-bold ${getScoreColor(score)}`}>
          {displayScore}%
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
          <div
            className={`h-2 rounded-full transition-all duration-1000 ease-out ${
              score >= 80 ? 'bg-green-600' : score >= 60 ? 'bg-yellow-600' : 'bg-red-600'
            }`}
            style={{ width: `${displayScore}%` }}
          ></div>
        </div>
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )
}

export default ResultCard