import React from "react";
import errorImage from "../assets/error-404.png";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="text-center space-y-2">
      <img className="h-56 mx-auto" src={errorImage} alt="" />
      <h1 className="font-bold text-4xl">Oops, page not found!</h1>
      <p className="text-sm text-gray-500">
        The page you are looking for in not available
      </p>
      <Link to={"/"}>
        <button className="bg-purple-500 px-2 py-1 text-white rounded">
          Go Back
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
