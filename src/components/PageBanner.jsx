// components/PageBanner.jsx
import React from "react";
import defaultBg from "../assets/BackgroundBanner.png"; // shared default image

const PageBanner = ({ title, subtitle, background = defaultBg }) => {
  return (
    <div
      className="bg-cover bg-center rounded-lg mx-8 mt-6 relative"
      style={{
        backgroundImage: `url(${background})`,
        minHeight: "220px",
      }}
    >
      <div className="bg-opacity-40 absolute inset-0 rounded-lg"></div>
      <div className="relative z-10 p-8 text-white">
        <h1 className="text-3xl font-semibold mb-1">{title}</h1>
        <p className="text-sm opacity-80">{subtitle}</p>
      </div>
    </div>
  );
};

export default PageBanner;
