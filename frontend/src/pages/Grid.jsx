import React from "react";
import ProfileImage from "../assets/profile.jpg";
import random from "../assets/randome.jpg";

export default function Grid() {
  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/harshit_1573/", "_blank");
  };

  return (
    <div
      className="h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: `url(${random})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="p-8 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 max-w-lg w-full backdrop-blur-lg bg-white/30 border border-white/10 flex flex-col items-center">
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={ProfileImage}
            alt="Profile"
            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
          />
        </div>

        <div className="text-center mt-6">
          <h2
            className="text-white text-3xl font-bold tracking-wider mb-2"
            style={{
              fontFamily: "YourCustomFont",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            Harshit Parmar
          </h2>
          <p
            className="text-white font-bold text-2xl tracking-wide"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
          >
            Registration Number: 20233141
          </p>
        </div>

        <button
          onClick={handleInstagramClick}
          className="mt-8 bg-gradient-to-r from-[#FF2E6D] to-[#FF922B] text-white px-12 py-4 rounded-full 
                 hover:from-[#FF922B] hover:to-[#FF2E6D] transition-all duration-500
                 focus:outline-none focus:ring-4 focus:ring-[#FF2E6D] focus:ring-opacity-50
                 shadow-lg hover:shadow-2xl transform hover:-translate-y-1
                 text-lg font-semibold tracking-wide animate-pulse"
        >
          Follow Me on Instagram
        </button>
      </div>
    </div>
  );
}
