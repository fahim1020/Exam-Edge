import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar bg-[#624646] text-white font-bold sticky top-0 z-50">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
            <li>
              <Link to={"/gallery"}>Gallery</Link>
            </li>
            <li>
              <Link to={"/blog"}>Blog</Link>
            </li>
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-xl font-[serif]">
          EVENTLYTIC
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/"}>HOME</Link>
          </li>
          <li>
            <Link to={"/about"}>ABOUT</Link>
          </li>
          <li>
            <Link to={"/contact"}>CONTACT</Link>
          </li>
          <li>
            <Link to={"/gallery"}>GALLERY</Link>
          </li>
          <li>
            <Link to={"/blog"}>BLOG</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to={"/get-ticket"} className="btn  bg-red-500 text-white font-bold hover:bg-white hover:text-black duration-300">
          GET TICKET
        </Link>
      </div>
    </div>
  );
};
