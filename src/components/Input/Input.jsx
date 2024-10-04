import React from "react";

const Input = ({ user, placeholder, type }) => {
  const typecheck = ["Name", "Phone Number", "Email Address"];
  return (
    <>
      {typecheck.includes(placeholder) ? (
        <div className="relative w-full">
          <input
            type={type}
            className="rounded-md shadow-md h-11 w-full pl-10 "
            placeholder={placeholder}
          />
          <span className="absolute left-2 top-1/2 transform -translate-y-1/2">
            <img src={user} alt="user icon" className="h-4 w-4 " />
          </span>
        </div>
      ) : (
        <textarea
          placeholder={placeholder}
          rows="6"
          cols="5"
          className="rounded-md shadow-md w-full pl-3 "
        />
      )}
    </>
  );
};

export default Input;
