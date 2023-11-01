import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  const [isMouseMoving, setIsMouseMoving] = useState(false);

  useEffect(() => {
    const handleMouseMove = () => {
      setIsMouseMoving(true);
    };

    const handleMouseStop = () => {
      setIsMouseMoving(false);
    };

    // Adicione event listeners para os eventos de movimento do mouse
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseMove); // Você pode adicionar outros eventos, como 'mousedown', 'touchstart', etc.

    // Adicione um event listener para detectar quando o mouse parou de se mover
    window.addEventListener('mouseout', handleMouseStop);

    return () => {
      // Remova os event listeners ao desmontar o componente
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseStop);
    };
  }, []);

  return (
    <div>
      {isMouseMoving && (
        <a className="fixed bottom-32 right-16 z-20 flex flex-col justify-around mb-5 mr-1 text-purple-500 rounded-lg shrink-0 grow-0 lg:mr-5 lg:mb-5 xl:mr-10 xl:mb-10" href="#start">
        
        
        
          <svg
                  className="w-10 h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
        
        </a>
      )}
    </div>
  );
};

export default App;
