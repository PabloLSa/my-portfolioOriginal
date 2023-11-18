import LeftMotion from "@/utils/LeftMotion";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { useEffect, useState, useContext, use } from "react";
import themeContext from "@/context/themeContext";

const AnimatedSocial = () => {

  const theme = useContext(themeContext);
  const [isDark, setIsDark] = useState(theme.color === 'light' ? 'text-purple-600' : 'text-cyan-500');

  useEffect(() => {
      
      setIsDark(theme.color === 'light' ? 'text-purple-600' : 'text-cyan-500');
  
    }, [theme.color]);


  return (
    
    <div className="flex flex-col gap-8">
<LeftMotion>

      <div className="border-none lg:border-l-2 mt-14 ml-3 lg:ml-10 lg:mt-12 lg:border-solid border-purple-600">

        <a href="https://www.linkedin.com/in/pablolandimdesadev/" target="_blank" rel="noreferrer"
          className={`mx-2 mt-1 text-xl lg:text-3xl ${isDark} transition-transform duration-300 hover:text-blue-600`}
        >
          <BsLinkedin />
        </a>

        <a href="https://github.com/PabloLSa" target="_blank" rel="noreferrer"
          className={`mx-2 mt-1 text-2xl lg:text-4xl ${isDark} transition-transform duration-300 hover:text-gray-600`}
        >
          <BsGithub />
        </a>

      </div>
      </LeftMotion>

    </div>
  );
}
export default AnimatedSocial;