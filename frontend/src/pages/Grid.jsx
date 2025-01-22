import React from "react";
import ProfileImage from "../assets/profile.jpg";
import random from "../assets/random.png";

export default function Grid() {
  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/harshit_1573/", "_blank");
  };

  return (
    <div
      className="h-screen flex items-center justify-center p-4 relative"
      style={{
        backgroundImage: `url(${random})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative p-8 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300 max-w-md w-full">
        <div
          className="absolute"
          style={{
            top: "200px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-black shadow-lg">
            <img
              src={ProfileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center absolute flex flex-col justify-between items-center mt-32">
            <h2 className="text-white text-2xl font-bold mb-2">
              Harshit Parmar
            </h2>
            <p className="text-[#00FF75] mb-4">Registration Number: 20233141</p>

            <button
              onClick={handleInstagramClick}
              className="bg-gradient-to-r from-[#FF2E6D] to-[#FF922B] text-white px-8 py-3 rounded-full 
                     hover:from-[#FF922B] hover:to-[#FF2E6D] transition-all duration-300
                     focus:outline-none focus:ring-2 focus:ring-[#FF2E6D] focus:ring-opacity-50
                     shadow-lg hover:shadow-xl"
            >
              Follow on Instagram
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
