import React from "react";
import { NavLink, Link } from "react-router-dom";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <header className="bg-bgOffWhite py-2 sticky top-0">
        <ul className="flex items-center gap-32 bg-white w-fit m-auto pl-2 pr-[17px] py-2 rounded-full text-lightBlack">
          <li className="w-1/3 flex items-center justify-between gap-40 font-jakartaSans">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink
              to="/experience"
              className="nav-link hover:bg-blueOnHover transition-all duration-300 ease-in-out"
            >
              Experience
            </NavLink>
          </li>
          <li className="w-1/3 flex items-center group justify-center gap-2 font-jakartaSans text-xl cursor-pointer">
            <span>
              <MdOutlineLightMode className="bg-blue text-white w-[40px] h-[40px] p-[6px] rounded-full" />
            </span>
            <span className="relative">
              <p className="text-xs absolute -top-[10px] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                Made By
              </p>
              <p className="transform transition-all duration-300 ease-in-out group-hover:translate-y-1 text-[23px] font-semibold">
                Tanay
              </p>
            </span>
          </li>
          <li className="w-1/3 flex items-center justify-between gap-40 font-jakartaSans">
            <NavLink
              to="/project"
              className="nav-link  hover:bg-blueOnHover transition-all duration-300 ease-in-out"
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className="nav-link hover:bg-blueOnHover transition-all duration-300 ease-in-out"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Navbar;
