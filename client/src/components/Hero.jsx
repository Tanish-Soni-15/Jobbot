import React from "react";
import { NavLink } from "react-router-dom";

const Hero = (props) => {
  return (
    <div className="w-full h-[90vh] flex flex-col gap-2 items-center justify-center ">
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 text-[#2F3E46] ">
        Smarter Resume.
        <br />
        Perfect Matches. Better Results.
      </div>
      <p className="text-xl text-center md:text-2xl text-gray-600 mb-8 w-[80%] sm:w-[50%] mx-auto">
        Simplify your job hunt and boost your chances with JobBot AI’s smart
        resume-matching tools.
      </p>
      <div className="mr-6 text-center flex sm:flex-row  flex-col gap-3.5 sm:gap-2">
        <NavLink
          to="/login"
          className="  px-4 sm:py-[7px] py-2.5 bg-[#2978CC] text-black rounded-full font-semibold sm:text-xl  hover:bg-[#2F3E46] hover:text-white  transition-all duration-300 "
        >
          Sign Up! - It's 100% Free!
        </NavLink>
        <div
          onClick={() => props.setuser({name:"Guest"})}

          className="  px-4 py-[7px] border-2 border-gray-300 text-gray-700  rounded-full font-semibold text-lg hover:border-[#2F3E46] hover:text-[#2F3E46] transition-all duration-300 hover:shadow-lg"
        >
          Continue as Guest
        </div>
      </div>
    </div>
  );
};

export default Hero;
