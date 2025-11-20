import React from "react";
import heroPng from "../assets/hero.png";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaAppStoreIos } from "react-icons/fa";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div>
      <div className="flex flex-col text-center space-y-8 mt-3">
        <div className="space-y-4">
          <h1 className="text-6xl font-extrabold">
            We Build <br></br>
            <span className="bg-linear-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
              Productive
            </span>{" "}
            Apps
          </h1>
          <p className="w-3/5 mx-auto text-gray-600">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting.Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>
          <div className="flex justify-center gap-3">
            <Link to="https://play.google.com/store/games?hl=en">
              <button className="btn shadow">
                <BiLogoPlayStore /> Google Play
              </button>
            </Link>
            <Link to="https://www.apple.com/app-store/">
              <button className="btn shadow">
                <FaAppStoreIos /> App Store
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col mx-auto">
          <img className="h-80 w-fit" src={heroPng} alt="" />
        </div>
      </div>

      <div className="flex flex-col gap-7 text-center text-white  py-12 bg-linear-to-r from-purple-700 via-purple-500 to-purple-600 ">
        <h className="text-4xl font-bold">Trusted By Millions, Built For You</h>
        <div className="flex sm:flex-col md:flex-row lg:flex:row justify-center items-center gap-10 ">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-gray-200">Total Downloads</p>
            <h1 className="text-5xl font-bold">29.6M</h1>
            <p className="text-sm text-gray-200">21% More Than Last Month</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-gray-200">Total Review</p>
            <h1 className="text-5xl font-bold">906K</h1>
            <p className="text-sm text-gray-200">46% More Than Last Month</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-gray-200">Active Apps</p>
            <h1 className="text-5xl font-bold">132+</h1>
            <p className="text-sm text-gray-200">31 More Will Lunch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
