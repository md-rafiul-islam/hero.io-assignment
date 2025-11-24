import React from "react";
import imgForAppError from "../assets/App-Error.png";

const ErrorApp = () => {
  return (
    <div className="flex justify-center items-center mt-6">
      <img className="h-64" src={imgForAppError} alt="" />
    </div>
  );
};

export default ErrorApp;
