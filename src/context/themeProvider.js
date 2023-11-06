'use client';
import { useState, useEffect, useRef } from "react";
import ThemeContext from "./themeContext";

function ThemeProviderContext({ children }) {
  const [themeColor, setThemeColor] = useState("dark");

  const clickSoundRef = useRef(new Audio('/clickTurnOn.wav'));
  const clickSound2Ref = useRef(new Audio('/clickTurnOff.wav'));

  function toggleTheme() {
    setThemeColor((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }

  // Adicione um useEffect para reproduzir o som quando o tema é alterado
  useEffect(() => {
    const clickSound = clickSoundRef.current;
    const clickSound2 = clickSound2Ref.current;

    if (themeColor === "light") {
      clickSound.play();
    } else {
      clickSound2.play();
    }
  }, [themeColor]);

  return (
    <ThemeContext.Provider value={{ color: themeColor, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProviderContext;
