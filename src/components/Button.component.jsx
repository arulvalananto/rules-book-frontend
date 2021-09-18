import React from "react";

const Button = ({ children }) => {
  return (
    <button className="bg-secondary font-title text-white px-5 py-2 rounded-lg hover:bg-opacity-80  active:bg-opacity-80 w-full mb-3 max-w-250">
      {children}
    </button>
  );
};

export default Button;
