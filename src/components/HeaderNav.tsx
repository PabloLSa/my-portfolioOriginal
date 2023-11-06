'use client';
import React, { useEffect, useContext, useState } from 'react';
import ThemeContext from '../context/themeContext';
import { MdOutlineFlashlightOff, MdOutlineFlashlightOn } from 'react-icons/md';
import MenuHambuger from './MenuHambuger';
import CloseMenu from './CloseMenu';
import MenuMotion from '@/utils/MenuMotion';


function HeaderNavbar() {
  const theme = useContext(ThemeContext);

  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState("headerdark");
  const[h1light, setH1Light] = useState("text-white");

  useEffect(() => {

    setIsDark(theme.color === 'light' ? 'headerlight' : 'headerdark');

    setH1Light(theme.color === 'light' ? 'text-blue-950' : 'text-white');


  }, [theme.color]);

  useEffect(() => {

    setIsDark(theme.color === 'light' ? 'headerlight' : 'headerdark');

    setH1Light(theme.color === 'light' ? 'text-blue-950' : 'text-white');


  }, [theme.color]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav id="header" className={`lg:px-16 px-6 ${isDark} flex flex-wrap items-center lg:py-0 py-2`}>
      <div className="flex-1 flex justify-between items-center">
        <div className="flex text-lg font-semibold backdrop-filter">
          <div className="flex mt-6 items-center py-2 lg:py-0">
            <MenuMotion>
            <span className={`text-3xl lg:text-4xl mt-5 ${h1light} hover:text-[#C850C0]`}>
            <button onClick={() => theme.toggleTheme()}>
              {theme.color === 'dark' ? <MdOutlineFlashlightOff /> : <MdOutlineFlashlightOn />}
              </button>

            </span>
            </MenuMotion>

          </div>
          <div className='flex flex-col mt-4 justify-center ml-5 lg:ml-10'>
            <h1 className={`texto-digitado font-bold text-xl lg:text-4xl ${h1light}`}
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
      <label htmlFor="menu-toggle" className= "cursor-pointer mt-3 ml-2 lg:hidden block" onClick={toggleMenu}
       
      >

        <button className="group relative"
         style={{
          boxShadow: '0px 0px 10px rgba(136, 35, 106, 0.774)',
          padding: '0.3em',
          borderRadius: '0.5em',
          whiteSpace: 'nowrap'
        }}
         onClick = {() => toggleMenu()}>{menuOpen ? <CloseMenu /> : <MenuHambuger />}

<div className="absolute inset-0 h-full scale-0 rounded-lg transition-all duration-100 group-hover:scale-75 group-hover:bg-[#C850C0]/40"></div>
        </button>
      </label>
      <input className="hidden" type="checkbox" id="menu-toggle" />
      <div className={`lg:flex lg:items-center lg:w-auto w-full ${menuOpen ? 'block' : 'hidden'}`} id="menu-toogle">
        <nav>
          <ul className="text-xl text-l items-center gap-x-5 pt-4 md:gap-x-4 lg:text-lg lg:flex  lg:pt-0">

            <li className="py-2 lg:py-0 ">
              <a
                className="flex items-center text-transparent bg-gradient-to-br from-blue-500 via-purple-500 to bg-purple-400 bg-clip-text hover:text-[#C850C0] font-semibold rounded-lg hover:px-2 py-1"
                href="#about" onClick={toggleMenu}
              >
                <div className="w-3 mr-1 h-3 xl:w-4 xl:h-4 bg-gradient-to-br from-fuchsia-950 via-fuchsia-500 via-45% to-cyan-500 rounded-full"></div>

                Sobre mim
              </a>
            </li>
            <li className="py-2 lg:py-0">
              <a
                className="flex items-center text-transparent bg-gradient-to-br from-blue-500 via-purple-500 to bg-purple-400 bg-clip-text hover:text-[#C850C0] font-semibold rounded-lg hover:px-2 py-1"
                href="#project" onClick={toggleMenu}
              >
                <div className="w-3 mr-1 h-3 xl:w-4 xl:h-4 bg-gradient-to-br from-fuchsia-950 via-fuchsia-500 via-45% to-cyan-500 rounded-full"></div>

                Projetos
              </a>
            </li>
            <li className="py-2 lg:py-0">
              <a
                className="flex items-center text-transparent bg-gradient-to-br from-blue-500 via-purple-500 to bg-purple-400 bg-clip-text hover:text-[#C850C0] font-semibold rounded-lg hover:px-2 py-1"
                href="#contact" onClick={toggleMenu}
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
