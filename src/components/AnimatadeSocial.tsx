import FramerMotion from "@/utils/FramerMotion";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const AnimatedSocial = () => {

  return (
    
    <div className="flex flex-col gap-8">
<FramerMotion>

      <div className="border-none lg:border-l-2 mt-14 ml-3 lg:ml-10 lg:mt-12 lg:border-solid border-purple-600">

        <a href="https://www.linkedin.com/in/pablolandimdesadev/" target="_blank" rel="noreferrer"
          className="mx-2 mt-1 text-xl lg:text-3xl text-cyan-500 transition-transform duration-300 hover:text-blue-600"
        >
          <BsLinkedin />
        </a>

        <a href="https://github.com/PabloLSa" target="_blank" rel="noreferrer"
          className="mx-2 mt-1 text-2xl lg:text-4xl text-cyan-500 transition-transform duration-300 hover:text-gray-600"
        >
          <BsGithub />
        </a>

      </div>
      </FramerMotion>

    </div>
  );
}
export default AnimatedSocial;