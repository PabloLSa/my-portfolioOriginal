
'use client';
import themeContext from "@/context/themeContext";
import FramerMotion from "@/utils/FramerMotion";
import RightMotion from "@/utils/RightMotion";
import Image from "next/image";
import { useContext, useState, useEffect, use } from 'react';
import { BsLinkedin } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  const theme = useContext(themeContext);
  const [isDark, setIsDark] = useState("bg-zinc-900");

  useEffect(() => {
    setIsDark(theme.color === 'light' ? 'bg-gradient-to-l from-white via-cyan-300 to-white' : 'bg-zinc-900');
  }
    , [theme.color]);

  return (

    <footer className={`footer flex h-20 w-full p-4 ${isDark}`}>

      <FramerMotion>
        <div className="text-left text-sm mt-3 ml-5 md:ml-40 lg:ml-60">

          <div className="rounded-full">

            <Image
              src="/pl.png"
              alt="logotipo"
              width={20}
              height={20}
            />

          </div>
        </div>
      </FramerMotion>
      <FramerMotion>
        <div className="text-left font-serif flex text-sm mt-3 ml-2 lg:mr-5 text-purple-600">
          © 2023 por Pablo Landim.

        <a href="" className="text-right text-sm lg:text-xl mt-1 lg:mt-0 ml-2 md:ml-40 lg:ml-96 text-purple-600 hover:text-fuchsia-500">
          <FaInstagram />
        </a>
        </div>
      </FramerMotion>
      
      

    </footer>


  )
}

export default Footer;