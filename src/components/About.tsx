"use client";
import Image from "next/image";
import themeContext from "@/context/themeContext";
import { useContext, useState, useEffect } from "react";
import AboutFramer from "@/utils/AboutFramer";
import Carousel from "./Carousel";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const About = () => {
  const theme = useContext(themeContext);
  const [isDark, setIsDark] = useState("bg-gradient-to-br from-zinc-900 to-zinc-800");
  const [textlight, setH1Light] = useState("text-white");
  const [themeText, setThemeText] = useState("text-transparent bg-gradient-to-br from-blue-700 via-purple-500 to-blue-800 bg-clip-text");

  useEffect(() => {

    setIsDark(theme.color === 'light' ? 'bg-gradient-to-l from-white via-purple-300' : 'bg-gradient-to-br from-zinc-900 to-zinc-800');

    setH1Light(theme.color === 'light' ? 'text-black' : 'text-white');

    setThemeText(
      theme.color === 'light'
        ? 'text-transparent bg-gradient-to-br from-blue-700 via-purple-500 to-blue-800 bg-clip-text'
        : 'text-transparent bg-gradient-to-br from-fuchsia-950 via-fuchsia-500 via-45% to-cyan-500 bg-clip-text'
    );

  }, [theme.color]);

  return (
    <>
      <div className={`flex h-auto flex-col md:flex-row items-center justify-center ${isDark}`} id="about"> 
      

        <div className="flex w-full md:w-1/2">

          <div className="mx-auto m-5">

            <Image
              src="/myphoto.png"
              alt="Minha Foto"
              width={200}
              height={200}
              className="rounded-full"
            />


          </div>
        </div>

        <div className="w-full md:w-1/2 text-left">
          <h1 className={`font-bold text-2xl m-5 mb-0 texto-digitado ${themeText}`}>Desenvolvedor Web</h1>
          <AboutFramer>
          <span className={`font-semibold text-xl m-5 ${themeText}`}> Campinas, São Paulo
          </span>
          <p className={`text-left font-semibold m-5 ${textlight}`}>
            Sou um desenvolvedor Full Stack, com paixão pelo design de  Front-end. Em agosto de 2022, realizei uma transição de carreira e me juntei à Trybe, onde através de projetos desafiadores e envolventes, tornei-me um especialista completo.
            Minha jornada nesse universo de programação tem sido incrível, hoje me sinto capaz de criar interfaces de usuário que são não apenas atraentes, mas também responsivas e funcionais!!
          </p>
          <span className="span">
          <span className={`ml-2 text-center ${themeText}`}
          >Conecte-se</span>
          <a href="https://www.linkedin.com/in/pablolandimdesadev/" target="_blank" rel="noreferrer"
            className="mx-2 text-xl text-purple-600 transition-transform duration-300 hover:text-blue-600 hover:scale-125"
          >
            <BsLinkedin />
          </a>
          <a href="https://github.com/PabloLSa" target="_blank" rel="noreferrer"
            className="mx-2 text-xl text-purple-600 transition-transform duration-300 hover:text-gray-600 hover:scale-125"
          >
            <BsGithub />
          </a>
        </span>
          </AboutFramer>
        </div>
      </div>
    </>
  );
}

export default About;
