import React from "react";
import { NavLink } from "react-router-dom";
import { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
import { User, Home, Info, Sparkle, BarChart3, Menu } from "lucide-react";
const SideHeader = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location=useLocation();
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup on unmount
    return () => document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen]);
  const pageTitles = {
  "/": "Home",
  "/analyze": "Start Matching",
  "/results": "Your Results",
  "/about": "About Us",
  "/help": "Help Center",
  "/account": "Your Account",
};
const title = pageTitles[location.pathname] || "JobBot AI";
const handleclick=()=>{
  setIsMenuOpen(!isMenuOpen);
  
  props?.setIsMenuopen(!isMenuOpen);
}
  return (
    <>
      <header
        className="sticky sm:block hidden top-0 left-0 right-0 z-50 
    bg-[#f7f7f7] border-gray-200 border-r-1 h-screen w-[180px] min-w-[180px] md:w-[200px] md:min-w-[200px]"
      >
        <div className="flex justify-between flex-col  h-full  p-2  pb-4">
          <div className="flex flex-col gap-4">
            <div className="flex  gap-[2px]">
              <div className="text-3xl font-bold text-[#2F3E46]">JobBot</div>
              <img src="/logo.png" alt="logo" className="w-10 h-10" />
            </div>
            <div className="text-gray-500 flex flex-col gap-1.5">
              <div className="flex flex-col gap-2">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `flex cursor-pointer font-semibold items-center rounded-sm gap-1 p-1 
    hover:bg-gray-200 ${isActive ? "bg-gray-200 text-[#2F3E46]" : ""}`
                  }
                >
                  <Home className="w-4 h-4" />
                  Home
                </NavLink>
                <hr className="text-gray-300" />
              </div>
              <NavLink
                to="/analyze"
                className={({ isActive }) =>
                  `flex cursor-pointer font-semibold items-center rounded-sm gap-1 p-1 
    hover:bg-gray-200 ${isActive ? "bg-gray-200 text-[#2F3E46]" : ""}`
                }
              >
                <Sparkle className="w-4 h-4" />
                Start Matching
              </NavLink>
              <NavLink
                to="/results"
                className={({ isActive }) =>
                  `flex cursor-pointer font-semibold items-center rounded-sm gap-1 p-1 
    hover:bg-gray-200 ${isActive ? "bg-gray-200 text-[#2F3E46]" : ""}`
                }
              >
                <BarChart3 className="w-4 h-4" />
                Your Result
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `flex cursor-pointer font-semibold items-center rounded-sm gap-1 p-1 
    hover:bg-gray-200 ${isActive ? "bg-gray-200 text-[#2F3E46]" : ""}`
                }
              >
                <Info className="w-4 h-4" />
                About Us
              </NavLink>
            </div>
          </div>
          <div className="text-gray-500 flex flex-col gap-1.5 ">
            <NavLink
              to="/help"
              className={({ isActive }) =>
                `flex cursor-pointer font-semibold items-center rounded-sm gap-1 p-1 
    hover:bg-gray-200 ${isActive ? "bg-gray-200 text-[#2F3E46]" : ""}`
              }
            >
              <Info className="w-4 h-4" />
              Help Center
            </NavLink>
            <NavLink
              to="/account"
              className={({ isActive }) =>
                `flex cursor-pointer font-semibold items-center rounded-sm gap-1 p-1 
    hover:bg-gray-200 ${isActive ? "bg-gray-200 text-[#2F3E46]" : ""}`
              }
            >
              <User className="w-4 h-4" />
              Your Account
            </NavLink>
          </div>
        </div>
      </header>

      <header className="w-full sm:hidden block  h-12 bg-[#f7f7f7] sticky top-0 border-gray-200 border-t-1 border-b-1">
        <div className="flex w-full text-gray-500 font-semibold items-center gap-1 h-full px-3">
          <Menu
            onClick={() => handleclick()}
            className="w-6 h-6 cursor-pointer text-gray-500 text-[12px]"
          />
         <span>{title}</span>
        </div>
        {isMenuOpen && (
          <div className="flex  animate-slide-up h-[93vh] border-gray-200 border-t-1 bg-[#f7f7f7] w-full justify-between flex-col  p-3  pb-4">
            <div className="flex flex-col gap-4">
              <div className="text-gray-500 flex flex-col gap-2">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `flex cursor-pointer font-semibold items-center rounded-sm gap-1 p-1 
    hover:bg-gray-200 ${isActive ? "bg-gray-200 text-[#2F3E46]" : ""}`
                  }
                >
                  <Home className="w-4 h-4" />
                  Home
                </NavLink>

                <NavLink
                  to="/analyze"
                  className={({ isActive }) =>
                    `flex cursor-pointer font-semibold items-center rounded-sm gap-1 p-1 
    hover:bg-gray-200 ${isActive ? "bg-gray-200 text-[#2F3E46]" : ""}`
                  }
                >
                  <Sparkle className="w-4 h-4" />
                  Start Matching
                </NavLink>
                <NavLink
                  to="/results"
                  className={({ isActive }) =>
                    `flex cursor-pointer font-semibold items-center rounded-sm gap-1 p-1 
    hover:bg-gray-200 ${isActive ? "bg-gray-200 text-[#2F3E46]" : ""}`
                  }
                >
                  <BarChart3 className="w-4 h-4" />
                  Your Result
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `flex cursor-pointer font-semibold items-center rounded-sm gap-1 p-1 
    hover:bg-gray-200 ${isActive ? "bg-gray-200 text-[#2F3E46]" : ""}`
                  }
                >
                  <Info className="w-4 h-4" />
                  About Us
                </NavLink>
                <NavLink
                  to="/help"
                  className={({ isActive }) =>
                    `flex cursor-pointer font-semibold items-center rounded-sm gap-1 p-1 
    hover:bg-gray-200 ${isActive ? "bg-gray-200 text-[#2F3E46]" : ""}`
                  }
                >
                  <Info className="w-4 h-4" />
                  Help Center
                </NavLink>
                <NavLink
                  to="/account"
                  className={({ isActive }) =>
                    `flex cursor-pointer font-semibold items-center rounded-sm gap-1 p-1 
    hover:bg-gray-200 ${isActive ? "bg-gray-200 text-[#2F3E46]" : ""}`
                  }
                >
                  <User className="w-4 h-4" />
                  Your Account
                </NavLink>
              </div>
            </div>

            <div className="flex border-gray-200 justify-between border-t-1 pt-2 gap-[2px]">
              <div className="flex gap-0.5">
                <div className="text-3xl font-bold text-[#2F3E46]">JobBot</div>
                <img src="/logo.png" alt="logo" className="w-10 h-10" />
              </div>
<NavLink to='/account' className="w-8 flex justify-center items-center h-8 rounded-full border-2 text-gray-500 text-center text-xl  border-gray-500  ">
<User/>
</NavLink>
              </div>
          </div>
        )}
      </header>
    </>
  );
};

export default SideHeader;
