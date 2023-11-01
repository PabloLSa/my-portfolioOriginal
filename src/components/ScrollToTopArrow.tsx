import React, { useState, useEffect } from 'react';

const ScrollTop: React.FC = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimer: NodeJS.Timeout;

    const handleScroll = () => {
      setIsScrolling(true);

      // Configurar um temporizador para esconder o botão após um período
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        setIsScrolling(false);
      }, 2000); // Altere o valor (em milissegundos) conforme necessário

      // Remova o temporizador anterior se o usuário continuar a rolar
      if (scrollTimer) {
        clearTimeout(scrollTimer);
      }
    };

    // Adicione um event listener para o evento de rolagem
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Remova o event listener ao desmontar o componente
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {isScrolling && (
          <a className="fixed bottom-32 right-16 z-20 flex flex-col justify-around mb-5 mr-1 text-purple-500 rounded-lg shrink-0 grow-0 lg:mr-5 lg:mb-5 xl:mr-10 xl:mb-10" href="#start">



          <svg
            className="w-10 h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
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
  );
};

export default ScrollTop;










