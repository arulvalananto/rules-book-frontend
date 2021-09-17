import React from "react";

const Input = ({
  type,
  placeholder,
  value,
  changeHandler,
  required,
  name,
  error,
}) => {
  return (
    <div className="my-4">
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-3 py-1 focus:outline-none focus:ring focus:border-primary rounded min-w-250"
        value={value}
        name={name}
        onChange={changeHandler}
        required={required}
      />
      <p className="text-xs ml-1 text-red-500 font-normal mt-0.5">{error}</p>
    </div>
  );
};

export default Input;
