
import React from "react";


export const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`px-5 py-1 text-sm  rounded-full transition-colors duration-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
