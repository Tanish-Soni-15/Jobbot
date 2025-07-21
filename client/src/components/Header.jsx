import { Menu } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const Header = ({ user }) => {
  console.log(user);
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header
      className="sticky top-0 left-0 right-0 z-50 
    bg-white border-gray-200 border-b-1"
    >
      <div className="flex items-center justify-between h-17 p-2 px-2 sm:px-5">
        <div className="flex ml-5 gap-[2px]">
          <div className="text-3xl font-bold text-[#2F3E46]">JobBot</div>
          <img src="/logo.png" alt="logo" className="w-10 h-10" />
        </div>

        {!user && (
          <>
            <div className="mr-6 hidden sm:flex gap-2">
              <NavLink
                to="/register"
                className="  px-4 py-[7px]  bg-[#2978CC] text-black rounded-full font-semibold text-lg  hover:bg-[#2F3E46] hover:text-white  transition-all duration-300 "
              >
                Sign up
              </NavLink>
              <NavLink
                to="/login"
                className=" px-4 py-[7px] border-2 border-gray-300 text-gray-700 rounded-full font-semibold text-lg hover:border-[#2F3E46] hover:text-[#2F3E46] transition-all duration-300 hover:shadow-lg"
              >
                Log in
              </NavLink>
            </div>
            <div className="block sm:hidden">
              <Menu className="mr-3 w-7 h-7"  onClick={() => setIsMenuOpen(!isMenuOpen)}/>
              {isMenuOpen&&
                <div className=" h-36 animate-slide-up absolute right-6 dropdown bg-[#262626] text-[#767676] p-4 flex flex-col gap-2   w-32 z-10">
                  <NavLink
                    to="/register"
                    className="text-gray-400 hover:text-white hover:cursor-pointer hover:border-b-white w-full h-[30px] mb-[2px] border-b-[1px] text-sm border-b-gray-400"
                  >
                    Sign up
                  </NavLink>

                  <NavLink
                    to="/login"
                    className="text-gray-400 hover:text-white hover:cursor-pointer hover:border-b-white w-full h-[30px] mb-[2px] border-b-[1px] text-sm border-b-gray-400"
                  >
                    Log in
                  </NavLink>
                  <NavLink
                    to="/"
                    className="text-gray-400 hover:text-white hover:cursor-pointer hover:border-b-white w-full h-[30px] mb-[2px] border-b-[1px] text-sm border-b-gray-400"
                  >
                    Others
                  </NavLink>
                </div>
              }
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
