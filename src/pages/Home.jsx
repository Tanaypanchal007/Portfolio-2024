import { React, useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import HeroSection from "../components/HeroSection";

HeroSection;
const Home = () => {
  const { mode } = useContext(ThemeContext);

  return (
    <section
      className={`
        mode === "light" ? "bg-light-BodyBackground" : "bg-dark-BodyBackground"  `}
    >
      <HeroSection />
    </section>
  );
};

export default Home;
