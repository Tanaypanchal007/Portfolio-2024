import { React, useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeProvider";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const { mode, toggleMode } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  const menuOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* This section is for Desktop and Tab view */}
      <header
        className={`${
          mode === "light"
            ? "bg-light-BodyBackground"
            : "bg-dark-BodyBackground"
        } font-jakartaSans sticky top-0 p-2 max-lg:py-3 z-50 max-md:hidden`} // Ensure the header stays above other elements
      >
        <div
          className={`${
            mode === "light"
              ? "bg-light-NavbarBackground text-light-Text shadow-3xl"
              : "bg-dark-NavbarBackground text-dark-Text shadow-4xl"
          } w-fit mx-auto flex justify-between items-center px-2 py-2 max-2xl:gap-24 max-lg:gap-8 max-md:px-4 rounded-full `}
        >
          {/* Left Section */}
          <div
            className={`flex justify-between items-center gap-20 max-lg:gap-6 max-md:gap-4 py-2`}
          >
            <div>
              <NavLink
                to={`/`}
                className={({ isActive }) =>
                  `nav-link ${
                    isActive
                      ? "bg-light-Primary text-light-ActiveLinkText"
                      : mode === "light"
                      ? "hover:bg-light-NavbarLinkHover hover:text-light-Text"
                      : "hover:bg-dark-NavbarLinkHover hover:text-dark-Text"
                  }`
                }
              >
                Home
              </NavLink>
            </div>
            <div>
              <NavLink
                to={`/experience`}
                className={({ isActive }) =>
                  `nav-link ${
                    isActive
                      ? "bg-light-Primary text-light-ActiveLinkText"
                      : mode === "light"
                      ? "hover:bg-light-NavbarLinkHover hover:text-light-Text"
                      : "hover:bg-dark-NavbarLinkHover hover:text-dark-Text"
                  }`
                }
              >
                Experience
              </NavLink>
            </div>
          </div>

          {/* Center Section - Toggle and Name */}
          <div
            className={`flex justify-between items-center gap-2 group cursor-pointer`}
          >
            {mode === "light" ? (
              <MdOutlineDarkMode
                className="bg-dark-NavbarBackground text-light-NavbarBackground w-9 h-9 p-1.5 rounded-full max-md:w-8 max-md:h-8"
                aria-label="Toggle Dark Mode"
                onClick={toggleMode}
              />
            ) : (
              <MdOutlineLightMode
                className="bg-light-Primary text-white w-9 h-9 p-1.5 rounded-full max-md:w-8 max-md:h-8"
                aria-label="Toggle Light Mode"
                onClick={toggleMode}
              />
            )}
            <span className="relative">
              <p className="text-[10px] absolute -top-[4px] opacity-0 group-hover:opacity-100 transition-all duration-300 max-md:text-[8px]">
                Made By
              </p>
              <p className="transform transition-all duration-300 group-hover:translate-y-1 text-xl font-semibold max-md:text-[18px] max-md:font-[700]">
                Tanay
              </p>
            </span>
          </div>

          {/* Right Section */}
          <div
            className={`flex justify-between items-center gap-20 max-lg:gap-6 max-md:gap-4`}
          >
            <div>
              <NavLink
                to={`/projects`}
                className={({ isActive }) =>
                  `nav-link ${
                    isActive
                      ? "bg-light-Primary text-light-ActiveLinkText"
                      : mode === "light"
                      ? "hover:bg-light-NavbarLinkHover hover:text-light-Text"
                      : "hover:bg-dark-NavbarLinkHover hover:text-dark-Text"
                  }`
                }
              >
                Projects
              </NavLink>
            </div>
            <div>
              <NavLink
                to={`/contact`}
                className={({ isActive }) =>
                  `nav-link ${
                    isActive
                      ? "bg-light-Primary text-light-ActiveLinkText"
                      : mode === "light"
                      ? "hover:bg-light-NavbarLinkHover hover:text-light-Text"
                      : "hover:bg-dark-NavbarLinkHover hover:text-dark-Text"
                  }`
                }
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </header>

      {/* This section is for Mobile view */}
      <header
        className={`${
          mode === "light"
            ? "bg-light-BodyBackground"
            : "bg-dark-BodyBackground"
        } font-jakartaSans sticky top-0 p-2 max-lg:py-3 z-50 max-md:hidden`}
      >
        {/* ... (rest of the desktop view code remains unchanged) ... */}
      </header>

      {/* This section is for Mobile view */}
      <header
        className={`hidden max-md:block ${
          mode === "light"
            ? "bg-light-BodyBackground"
            : "bg-dark-BodyBackground"
        } font-jakartaSans sticky top-0 p-2 z-50`}
      >
        <div
          className={`${
            mode === "light"
              ? "bg-light-NavbarBackground text-light-Text shadow-3xl"
              : "bg-dark-NavbarBackground text-dark-Text shadow-4xl"
          } rounded-full px-3 py-3 flex justify-between items-center`}
        >
          <div className={`flex gap-1 group`}>
            {mode === "light" ? (
              <MdOutlineDarkMode
                className="bg-dark-NavbarBackground text-light-NavbarBackground w-9 h-9 p-1.5 rounded-full"
                aria-label="Toggle Dark Mode"
                onClick={toggleMode}
              />
            ) : (
              <MdOutlineLightMode
                className="bg-light-Primary text-white w-9 h-9 p-1.5 rounded-full"
                aria-label="Toggle Light Mode"
                onClick={toggleMode}
              />
            )}
            <span className="relative">
              <p className="text-[11px] absolute -top-[3px] opacity-0 group-hover:opacity-100 transition-all duration-300">
                Made By
              </p>
              <p className="transform transition-all duration-300 group-hover:translate-y-1 text-xl font-semibold pt-1">
                Tanay
              </p>
            </span>
          </div>
          <div>
            <FaBars
              className="text-[27px] mr-2"
              onClick={() => setOpen(!open)}
            />
          </div>
          <ul
            className={` ${
              mode === "light"
                ? "bg-light-NavbarBackground text-light-Text"
                : "bg-dark-NavbarBackground text-dark-Text"
            } fixed top-0 left-0 h-screen w-full transition-all duration-500 ease-in-out space-y-5 z-50 ${
              open ? "translate-x-0" : "translate-x-[-100%]"
            }`}
          >
            <li>
              <IoClose
                className={`absolute right-3 top-3 text-5xl ${
                  mode === "light" ? "shadow-3xl" : "shadow-4xl"
                } rounded-full p-2`}
                onClick={menuOpen}
              />
            </li>
            <li className="flex items-center gap-2 group mt-[1rem] ml-[1rem]">
              {mode === "light" ? (
                <MdOutlineDarkMode
                  className="bg-dark-NavbarBackground text-light-NavbarBackground  p-1.5 rounded-full text-5xl"
                  aria-label="Toggle Dark Mode"
                  onClick={toggleMode}
                />
              ) : (
                <MdOutlineLightMode
                  className="bg-light-Primary text-dark-Text p-1.5 rounded-full text-5xl"
                  aria-label="Toggle Light Mode"
                  onClick={toggleMode}
                />
              )}
              <span className="relative">
                <p className="text-[11px] absolute -top-[7px] opacity-0 group-hover:opacity-100 transition-all duration-300 ">
                  Made By
                </p>
                <p className="transform transition-all duration-300 group-hover:translate-y-1 text-2xl font-semibold ">
                  Tanay
                </p>
              </span>
            </li>

            <li className="ml-[1rem]">
              <Link to="/" className={`text-xl`} onClick={menuOpen}>
                Home
              </Link>
            </li>
            <li className="ml-[1rem]">
              <Link to="/experience" className={`text-xl`} onClick={menuOpen}>
                Experience
              </Link>
            </li>
            <li className="ml-[1rem]">
              <Link to="/projects" className={`text-xl`} onClick={menuOpen}>
                Projects
              </Link>
            </li>
            <li className="ml-[1rem]">
              <Link to="/contact" className={`text-xl`} onClick={menuOpen}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
