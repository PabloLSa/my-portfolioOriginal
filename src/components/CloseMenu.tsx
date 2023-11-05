import FramerMotion from '@/utils/FramerMotion';
import { PiArrowElbowRightUpLight } from 'react-icons/pi';
const CloseMenu = () => {


  return (
    <FramerMotion>
    <span className="hover:shadow-xl text-[#C850C0] group-hover:text-cyan-500 transition-all duration-100"><PiArrowElbowRightUpLight /></span>
  
   </FramerMotion>
  );
}

export default CloseMenu;