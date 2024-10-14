import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Retrieve initial theme from localStorage or default to 'light'
  const [mode, setMode] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  // Apply background color based on the theme
  useEffect(() => {
    if (mode === "light") {
      document.body.style.backgroundColor = "#f6f6f6";
    } else {
      document.body.style.backgroundColor = "#000d18";
    }
  }, [mode]);

  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("theme", newMode); // Store the new theme in localStorage
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
