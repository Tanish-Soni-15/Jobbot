import React from "react";
import { NavLink, Link } from "react-router-dom";
import FeatureCard from "./FeatureCard";

export default function Main({user}) {
  console.log("hello");

  return (
    <section className="w-full h-screen overflow-y-scroll">
      <div className="h-[90vh] w-full flex flex-col items-center justify-center px-6  bg-gradient-to-b from-white to-gray-100">
        <div className="text-center border-2 rounded-3xl p-4 sm:p-16 bg-white max-w-2xl">
          <h1 className="text-4xl mb-0.5 md:text-5xl font-extrabold text-[#2F3E46]">
            {`Welcome,${user&&user?.name}! 👋 `}
          </h1>

          <p className=" text-lg text-gray-600">
            You're using JobBot AI in guest mode. Start matching your resume
            with job descriptions and explore smart suggestions without creating
            an account.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink
              to="/analyze"
              className="hover:bg-[#2F3E46] text-black hover:text-white px-6 py-3 rounded-full font-semibold bg-[#2978CC] transition duration-300"
            >
              Start Matching
            </NavLink>

            <NavLink
              to="/about"
              className="border  px-6 py-3 rounded-full font-semibold  hover:border-[#2F3E46] hover:text-[#2F3E46] border-gray-300 text-gray-700 transition duration-300"
            >
              Learn More
            </NavLink>
          </div>
        </div>
    
      </div>
      <div className="">
            <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose JobBot?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our advanced AI technology helps you understand exactly what
                employers are looking for
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon="🎯"
                title="Smart Matching"
                description="Advanced algorithms analyze your resume against job descriptions to identify compatibility and gaps."
              />
              <FeatureCard
                icon="📊"
                title="Detailed Analytics"
                description="Get comprehensive reports with match scores, keyword analysis, and actionable improvement suggestions."
              />
              <FeatureCard
                icon="⚡"
                title="Instant Results"
                description="Upload your resume and get detailed analysis results in seconds, not hours."
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-xl text-gray-600">
                Get started in just three simple steps
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 shadow-lg">
                  1
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Upload Resume
                </h3>
                <p className="text-gray-600 text-lg">
                  Upload your resume in PDF or DOC format. Our system supports
                  all major file types.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 shadow-lg">
                  2
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Add Job Description
                </h3>
                <p className="text-gray-600 text-lg">
                  Paste the job description you're interested in. Include all
                  requirements and qualifications.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 shadow-lg">
                  3
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Get Analysis
                </h3>
                <p className="text-gray-600 text-lg">
                  Receive detailed insights, match scores, and personalized
                  recommendations instantly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">10K+</div>
                <div className="text-primary-200">Resumes Analyzed</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">85%</div>
                <div className="text-blue-200">Success Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-blue-200">Available</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">Free</div>
                <div className="text-blue-200">To Use</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Optimize Your Resume?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of job seekers who have improved their chances with
              JobBot
            </p>
            <Link to="/analyze" className="btn-pri text-lg px-12 py-4">
              Start Your Analysis Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
