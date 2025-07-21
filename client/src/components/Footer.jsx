import React from 'react';
import { Bot, Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#262c2f] border-t border-gray-800 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src="/logo.png" alt="logo" className='w-10 h-10' />
              <div>
                <h3 className="inline text-xl font-bold bg-white p-0.5 text-[#2F3E46]">JobBot AI</h3>
                <p className="text-sm text-gray-400">Resume & Job Description Analyzer</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Leverage the power of AI to optimize your resume and increase your chances of landing your dream job. 
              Get instant analysis and personalized recommendations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">How it Works</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 JobBot AI. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-sm text-gray-400 mt-4 md:mt-0">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>for job seekers worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;