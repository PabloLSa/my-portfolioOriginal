
'use client';
import themeContext from "@/context/themeContext";
import FramerMotion from "@/utils/FramerMotion";
import Image from "next/image";
import { useContext, useState, useEffect, use } from 'react';
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
      <div className="text-left text-sm mt-2 lg:mt-3 ml-5 md:ml-40 lg:ml-60">
  <div className="rounded-full">
    {/* Imagem para telas pequenas (oculta em telas md e lg) */}
    <Image
      src="/pl.png"
      alt="logotipo"
      width={20}
      height={20}
      className="inline md:hiddem lg:inline xl:hidden"
    />
    {/* Imagem para telas md e lg (oculta em telas pequenas) */}
    <Image
      src="/pl.png"
      alt="logotipo"
      width={35}  
      height={35}  
      className="hidden md:hidden lg:inline xl:inline"
    />
  </div>
</div>

      </FramerMotion>
      <FramerMotion>
        <div className="text-left font-serif flex text-sm md:text-xl lg:text-2xl mt-3 lg:mt-4 ml-2 lg:mr-5 text-purple-600">
          © 2023 por Pablo Landim.

        <a href="" className="text-right text-sm lg:text-2xl mt-0 md:text-xl lg:mt-1 ml-2 md:ml-40 lg:ml-80 text-purple-600 hover:text-fuchsia-500">
          <FaInstagram />
        </a>
        </div>
      </FramerMotion>
      
      

    </footer>


  )
}

export default Footer;