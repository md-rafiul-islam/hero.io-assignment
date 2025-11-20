import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import { IoLogoGithub } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  color: isActive ? "purple" : "black",
                  textDecoration: isActive ? "underline" : "none",
                })}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/apps"
                style={({ isActive }) => ({
                  color: isActive ? "purple" : "black",
                  textDecoration: isActive ? "underline" : "none",
                })}
              >
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/installation"
                style={({ isActive }) => ({
                  color: isActive ? "purple" : "black",
                  textDecoration: isActive ? "underline" : "none",
                })}
              >
                Installation
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to="/">
          <div className="flex items-center">
            <img className="h-8" src={logo} alt="" />
            <p className="font-bold text-purple-600">HERO.IO</p>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold">
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "purple" : "black",
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/apps"
              style={({ isActive }) => ({
                color: isActive ? "purple" : "black",
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Apps
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/installation"
              style={({ isActive }) => ({
                color: isActive ? "purple" : "black",
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Installation
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          to="https://github.com/md-rafiul-islam"
          className="flex items-center gap-1 bg-linear-to-r from-purple-600 to-purple-400 p-1.5 rounded text-white font-bold"
        >
          <IoLogoGithub></IoLogoGithub>
          Contribute
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
