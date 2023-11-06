'use client';
import { useState, useEffect } from "react";
import ThemeContext from "./themeContext";

function ThemeProviderContext({ children }) {
  const [themeColor, setThemeColor] = useState("dark");
  const [clickSound, setClickSound] = useState(null);
  const [clickSound2, setClickSound2] = useState(null);

  // Verifique se o código está sendo executado no navegador antes de criar os objetos Audio
  useEffect(() => {
    if (typeof window !== "undefined") {
      setClickSound(new Audio("/clickTurnOn.wav"));
      setClickSound2(new Audio("/clickTurnOff.wav"));
    }
  }, []);

  function toggleTheme() {
    setThemeColor((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));

    if (themeColor === "light") {
      clickSound2.play();
    } else {
      clickSound.play();
    }
  }

  return (
    <ThemeContext.Provider value={{ color: themeColor, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProviderContext;
