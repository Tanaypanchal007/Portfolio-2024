import { React, useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import HeroImage from "../asset/hero-img.svg";
import { FaRegDotCircle } from "react-icons/fa";

const HeroSection = () => {
  const { mode } = useContext(ThemeContext);

  return (
    <>
      <section
        className={`flex max-lg:flex-col max-lg:pt-[10px] max-lg:px-[20px] justify-between items-center pt-[50px] px-[50px] font-jakartaSans`}
      >
        <div
          className={`w-1/2 space-y-4 max-lg:space-y-3 max-lg:w-full max-lg:mb-10`}
        >
          <div className="space-y-1">
            <p
              className={`text-[30px] font-semibold ${
                mode === "light"
                  ? "text-light-SpecialColor"
                  : "text-dark-Secondary"
              }`}
            >
              Hello, I am
            </p>
            <h1
              className={`text-[45px] ml-[10px] font-semibold relative max-lg:text-[40px] ${
                mode === "light" ? "text-light-Primary" : "text-dark-Primary"
              } name-line z-0`}
            >
              <span className="absolute -left-2.5 top-0 h-full w-[3px] bg-[#4682B4] rounded-[10px] "></span>
              Tanay Panchal
            </h1>
          </div>

          <div>
            <p
              className={`${
                mode === "light" ? "text-light-Text" : "text-dark-Text"
              } text-[18px] max-md:text-[15px]`}
            >
              Driven to build impactful solutions through sustainable and
              scalable systems, blending social and technical innovation to
              create lasting change.
            </p>
          </div>

          <div
            className={`flex items-center space-x-2 ${
              mode === "light"
                ? "bg-light-Secondary text text-light-Text"
                : "bg-dark-Secondary text-light-Text"
            } w-fit px-3 py-1 rounded-full`}
          >
            <FaRegDotCircle className="text-xs" />
            <p className="text-xs">Available for Work</p>
          </div>

          <div className={`flex gap-5`}>
            <button
              aria-label="Let's Work Together"
              className={`${
                mode === "light"
                  ? "bg-light-Primary text-dark-Text"
                  : "bg-dark-Primary text-dark-Text"
              } px-3 py-2 rounded-md`}
            >
              Let's Work Together
            </button>
            <button
              aria-label="View Resume"
              className={`${
                mode === "light"
                  ? "text-light-Primary border-[2px] border-light-Primary"
                  : "text-dark-Primary border-[2px] border-light-Primary"
              } px-5 py-2 rounded-md`}
            >
              Resume
            </button>
          </div>
        </div>
        <div>
          <img src={HeroImage} alt="Tanay Panchal's portrait" loading="lazy" />{" "}
          {/* Descriptive alt text */}
        </div>
      </section>
    </>
  );
};

export default HeroSection;
