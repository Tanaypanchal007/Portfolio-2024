import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import "./App.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeProvider";
import AnimatedCursor from "./components/AnimatedCursor"; // Import the AnimatedCursor component

const App = () => {
  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <Navbar />
          {/* <AnimatedCursor /> Add the animated cursor here */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
