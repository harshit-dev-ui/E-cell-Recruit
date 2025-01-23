import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const isGridPage = location.pathname === "/grid";

  const handleHomeClick = () => {
    navigate("/home");
  };

  const handleGridClick = () => {
    navigate("/grid");
  };

  const handleLinkedInClick = () => {
    window.open(
      "https://www.linkedin.com/in/harshit-parmar-428724173",
      "_blank"
    );
  };

  return (
    <div
      className={`flex flex-col md:flex-row items-center px-6 py-2 text-black shadow-md transition-all duration-300`}
      style={{
        height: navbarOpen ? "140px" : "56px",
        fontFamily: isGridPage ? "YourCustomFont" : "inherit",
      }}
    >
      {/* Toggle Button */}
      <div className="flex justify-end w-full md:hidden">
        <button
          className="text-black text-xl focus:outline-none"
          style={{ display: navbarOpen ? "none" : "inline" }}
          onClick={() => setNavbarOpen(true)}
        >
          &#9776;
        </button>
        <button
          className="text-black text-xl focus:outline-none text-bold"
          style={{ display: navbarOpen ? "inline" : "none" }}
          onClick={() => setNavbarOpen(false)}
        >
          X
        </button>
      </div>

      <div
        className={`${
          navbarOpen ? "block" : "hidden"
        } w-full mt-0 md:mt-0 md:flex md:items-center md:justify-between md:ml-auto md:w-auto`}
      >
        <div className="flex flex-col mt-0 md:flex-row md:gap-4">
          <button
            className="block mt-0 md:mt-0 hover:text-gray-500 transition duration-200"
            onClick={handleHomeClick}
          >
            Home
          </button>
          <button
            className="block mt-0 md:mt-0 hover:text-gray-500 transition duration-200"
            onClick={handleGridClick}
          >
            Grid
          </button>
          <button
            className="block mt-0 md:mt-0 hover:text-gray-500 transition duration-200"
            onClick={handleLinkedInClick}
          >
            LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
