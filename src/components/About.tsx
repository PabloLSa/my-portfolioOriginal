"use client";
import Image from "next/image";
import themeContext from "@/context/themeContext";
import { useContext, useState, useEffect } from "react";
import AboutFramer from "@/utils/AboutFramer";
import AnimatedSocial from "./AnimatadeSocial";
import MenuMotion from "@/utils/MenuMotion";
import AboutFramerTwo from "@/utils/AboutFramerTwo";


const About = () => {
  const theme = useContext(themeContext);
  const [isDark, setIsDark] = useState("bg-gradient-to-br from-zinc-900 to-zinc-800");
  const [textlight, setH1Light] = useState("text-white");
  const [themeText, setThemeText] = useState("text-transparent bg-gradient-to-br from-blue-700 via-purple-500 to-blue-900 bg-clip-text");

  useEffect(() => {

    setIsDark(theme.color === 'light' ? 'bg-gradient-to-l from-white via-cyan-300' : 'bg-gradient-to-br from-zinc-900 to-zinc-800');

    setH1Light(theme.color === 'light' ? 'text-blue-950' : 'text-white');

    setThemeText(
      theme.color === 'light'
        ? 'text-transparent bg-gradient-to-br from-blue-700 via-fuchsia-500 to-fuchsia-500 bg-clip-text'
        : 'text-transparent bg-gradient-to-br from-fuchsia-950 via-fuchsia-500 via-45% to-cyan-500 bg-clip-text'
    );

  }, [theme.color]);

  return (
    <>
      <div className={`flex h-auto flex-col md:flex-row items-center justify-center ${isDark}`} id="about">


        <div className="flex w-full md:w-1/2">

          <div className="mx-auto flex m-5">
            <Image
              src="/myphoto.png"
              alt="Minha Foto"
              width={200}
              height={200}
              className="rounded-full"
            />
            <AnimatedSocial />


            
          </div>


        </div>

        <div className="w-full md:w-1/2 text-left">
          <AboutFramerTwo>
          <h1 className={`font-bold text-2xl m-5 mb-0 ${themeText}`}>Desenvolvedor Web</h1>
          </AboutFramerTwo>
          <AboutFramer>

            <div className={`font-semibold text-xl m-5 ${themeText}`}> Campinas, São Paulo

              <button className={`group relative text-sm ml-3 hover:px-5 rounded-xl border p-2 border-solid border-purple-600 ${themeText}`}>

                <div className="absolute inset-0 h-full scale-0 rounded-lg transition-all duration-700 group-hover:scale-75 group-hover:bg-[#C850C0]/40"></div>
                Dowload CV
              </button>
            </div>
            <p className={`text-left flex flex-col font-semibold m-5 ${textlight}`}>
              Sou um desenvolvedor Full Stack, com paixão pelo design Front-end. Em agosto de 2022, realizei uma transição de carreira e me juntei à Trybe, onde através de projetos desafiadores e envolventes, tornei-me um especialista completo.
              <br />
              Minha jornada no universo de programação tem sido incrível, hoje sou capaz de criar interfaces para usuário que são não apenas atraentes, mas também responsivas e funcionais!!
            </p>
          </AboutFramer>
        </div>
      </div>
    </>
  );
}

export default About;
