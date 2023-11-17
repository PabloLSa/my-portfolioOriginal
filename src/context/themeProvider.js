'use client';
import { useState, useEffect } from "react";
import ThemeContext from "./themeContext";


function ThemeProviderContext({ children }) {
  const isLocalStorageAvailable = typeof localStorage !== 'undefined';
  // Retrieve themeColor from local storage on component mount
  const savedTheme = isLocalStorageAvailable ? localStorage.getItem("themeColor") : null;
  const [themeColor, setThemeColor] = useState(savedTheme || "dark");
  // const [clickSound, setClickSound] = useState(null);
  const [clickSound2, setClickSound2] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // setClickSound(new Audio("/clickTurnOn.wav"));
      setClickSound2(new Audio("/clickTurnOff.wav"));
    }
  }, []);

  // Update local storage when themeColor changes
  useEffect(() => {
    localStorage.setItem("themeColor", themeColor);
  }, [themeColor]);

  function toggleTheme() {
    setThemeColor((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));

    if (themeColor === "light") {
      clickSound2.play();
    } else {
      clickSound2.play();
    }
  }

  return (
    <ThemeContext.Provider value={{ color: themeColor, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProviderContext;
