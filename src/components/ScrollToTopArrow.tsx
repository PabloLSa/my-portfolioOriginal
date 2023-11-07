'use client';
import FramerMotion from '@/utils/FramerMotion';
import React, { useState, useEffect } from 'react';

const ScrollTop: React.FC = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimer: NodeJS.Timeout;

    const handleScroll = () => {
      setIsScrolling(true);

      // Configuração de um temporizador para esconder o botão após um período
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        setIsScrolling(false);
      }, 1200); // Alterar o valor (em milissegundos) conforme necessário

    };

    // Adicionando um event listener para o evento de rolagem
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Removendo o event listener ao desmontar o componente
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
<FramerMotion>
    <div>
      {isScrolling && (

        <a className="fixed bottom-32 right-16 z-20 flex flex-col justify-around mb-5 mr-1 text-purple-600 rounded-lg shrink-0 grow-0 lg:mr-5 lg:mb-5 xl:mr-10 xl:mb-10" href="#header">



          <svg
            className="w-10 h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16"
            fill="currentColor"
            viewBox="0 0 16 16"
            stroke-width="0.3"
            stroke="#00B3A4" 
          >
            <path
              fillRule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
              clip-rule="evenodd"
            ></path>
          </svg>

        </a>



)}
    </div>
</ FramerMotion>
  );
};

export default ScrollTop;










