import React from "react";

const Button = ({ children, handleOnClick, className }) => {
  return (
    <button
      className={`px-5 py-2 rounded-lg text-sm text-whitetransition linear duration-300 ${className}`}
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};

export default Button;
