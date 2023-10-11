'use client';
import React, { useEffect, useContext, useState } from 'react';
import ThemeContext from '../context/themeContext';
import { MdOutlineFlashlightOff, MdOutlineFlashlightOn } from 'react-icons/md';


function HeaderNavbar() {
  const theme = useContext(ThemeContext);

  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState("headerdark");
  const[h1light, setH1Light] = useState("text-white");

  useEffect(() => {

    setIsDark(theme.color === 'light' ? 'headerlight' : 'headerdark');

    setH1Light(theme.color === 'light' ? 'text-black' : 'text-white');


  }, [theme.color]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`lg:px-16 px-6 ${isDark} flex flex-wrap items-center lg:py-0 py-2`}>
      <div className="flex-1 flex justify-between items-center">
        <div className="flex text-lg font-semibold backdrop-filter">
          <div className="flex items-center py-2 lg:py-0">
            <span className={`text-3xl lg:text-4xl mt-5 ${h1light} hover:text-[#C850C0]`}>
            <button onClick={() => theme.toogleTheme()}>
              {theme.color === 'dark' ? <MdOutlineFlashlightOff /> : <MdOutlineFlashlightOn />}
              </button>

            </span>

          </div>
          <div className='flex flex-col mt-4 justify-center ml-2 md:ml-10'>
            <h1 className={`font-bold text-2xl lg:text-4xl ${h1light}`}
              style={{
                boxShadow: '0px 0px 10px rgba(136, 35, 106, 0.774)',
                padding: '0.3em',
                borderRadius: '0.5em',
                whiteSpace: 'nowrap'
              }}
            >
              Pablo Landim de Sá
            </h1>
          </div>
        </div>
      </div>
      <label htmlFor="menu-toggle" className="cursor-pointer mt-3 lg:hidden block" onClick={toggleMenu}
        style={{
          boxShadow: '0px 0px 10px rgba(136, 35, 106, 0.774)',
          padding: '0.3em',
          borderRadius: '0.5em',
          whiteSpace: 'nowrap'
        }}
      >
        <svg
          className="fill-current opacity-10 text-[#C850C0] hover:opacity-100"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </label>
      <input className="hidden" type="checkbox" id="menu-toggle" />
      <div className={`lg:flex lg:items-center lg:w-auto w-full ${menuOpen ? 'block' : 'hidden'}`} id="menu-toogle">
        <nav>
          <ul className="text-xl text-l items-center gap-x-5 pt-4 md:gap-x-4 lg:text-lg lg:flex  lg:pt-0">

            <li className="py-2 lg:py-0 ">
              <a
                className="flex items-center text-transparent bg-gradient-to-br from-blue-500 via-purple-500 to bg-purple-400 bg-clip-text hover:text-[#C850C0] font-semibold rounded-lg hover:px-2 py-1"
                href="#about"
              >
                <div className="w-3 mr-1 h-3 xl:w-4 xl:h-4 bg-gradient-to-br from-fuchsia-950 via-fuchsia-500 via-45% to-cyan-500 rounded-full"></div>

                Sobre mim
              </a>
            </li>
            <li className="py-2 lg:py-0">
              <a
                className="flex items-center text-transparent bg-gradient-to-br from-blue-500 via-purple-500 to bg-purple-400 bg-clip-text hover:text-[#C850C0] font-semibold rounded-lg hover:px-2 py-1"
                href="#pricing"
              >
                <div className="w-3 mr-1 h-3 xl:w-4 xl:h-4 bg-gradient-to-br from-fuchsia-950 via-fuchsia-500 via-45% to-cyan-500 rounded-full"></div>

                Projetos
              </a>
            </li>
            <li className="py-2 lg:py-0">
              <a
                className="flex items-center text-transparent bg-gradient-to-br from-blue-500 via-purple-500 to bg-purple-400 bg-clip-text hover:text-[#C850C0] font-semibold rounded-lg hover:px-2 py-1"
                href="#contact"
              >
                <div className="w-3 mr-1 h-3 xl:w-4 xl:h-4 bg-gradient-to-br from-fuchsia-950 via-fuchsia-500 via-45% to-cyan-500 rounded-full"></div>
                Contato
              </a>
            </li>

          </ul>

        </nav>
      </div>
    </nav>
  );
};

export default HeaderNavbar;
