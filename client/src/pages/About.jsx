import SideHeader from "../components/SideHeader";

function About() {
  return (
    <div className="sm:flex">
     
        <SideHeader />
     
      <div className="min-h-screen w-full bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" text-center sm:text-left mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              About JobBot
            </h1>
            <p className="text-xl text-gray-600">
              Your AI-powered career companion
            </p>
          </div>

          <div className="card p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              JobBot is designed to help job seekers optimize their resumes and
              increase their chances of landing their dream jobs. We use
              advanced AI technology to analyze resumes against job descriptions
              and provide actionable insights.
            </p>
            <p className="text-gray-700 text-lg">
              Our goal is to make the job search process more efficient and
              effective by providing data-driven recommendations that help you
              stand out from the competition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="card p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                🎯 What We Do
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Analyze resume-job description compatibility</li>
                <li>• Provide detailed match scores and insights</li>
                <li>• Identify missing keywords and skills</li>
                <li>• Suggest improvements for better matching</li>
                <li>• Help optimize your job search strategy</li>
              </ul>
            </div>

            <div className="card p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                🚀 How It Helps
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Save time on manual resume optimization</li>
                <li>• Increase your chances of getting interviews</li>
                <li>• Understand employer expectations better</li>
                <li>• Improve your professional presentation</li>
                <li>• Make data-driven career decisions</li>
              </ul>
            </div>
          </div>

          <div className="card p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Upload Resume
                </h4>
                <p className="text-gray-600 text-sm">
                  Upload your resume in PDF or DOC format for analysis
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Add Job Description
                </h4>
                <p className="text-gray-600 text-sm">
                  Paste the job description you want to analyze against
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Get Insights
                </h4>
                <p className="text-gray-600 text-sm">
                  Receive detailed analysis and improvement recommendations
                </p>
              </div>
            </div>
          </div>

          <div className="card p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Privacy & Security
            </h2>
            <p className="text-gray-700 mb-4">
              We take your privacy seriously. Your resume and personal
              information are:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Processed securely and never stored permanently</li>
              <li>• Used only for analysis purposes</li>
              <li>• Never shared with third parties</li>
              <li>• Automatically deleted after analysis</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
