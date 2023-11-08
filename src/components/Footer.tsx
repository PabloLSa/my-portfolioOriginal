
'use client';
import themeContext from "@/context/themeContext";
import Image from "next/image";
import { useContext, useState, useEffect, use } from 'react';
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  const theme = useContext(themeContext);
  const [isDark, setIsDark] = useState("bg-gradient-to-br from-zinc-900 to-zinc-800");

  useEffect(() => {
    setIsDark(theme.color === 'light' ? 'bg-gradient-to-l from-white via-cyan-300 to-white' : 'bg-gradient-to-br from-zinc-900 to-zinc-800');
  }
    , [theme.color]);

  return (

    <footer className={`footer h-20 w-full p-4 ${isDark}`}>
    
      <div className="text-center flex text-sm mt-3 ml-5 lg:ml-60 text-purple-600">
        © 2023 por Pablo Landim.
      </div>

  </footer>
  

  )
}

export default Footer;