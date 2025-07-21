function FeatureCard({ icon, title, description }) {
  return (
    <div className="card p-8 text-center animate-slide-up">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default FeatureCard