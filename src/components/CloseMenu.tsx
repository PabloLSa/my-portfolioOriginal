import MenuMotion from '@/utils/MenuMotion';
import { PiArrowElbowRightUpLight } from 'react-icons/pi';
const CloseMenu = () => {


  return (
    <MenuMotion>
    <span className="hover:shadow-xl text-[#C850C0] group-hover:text-cyan-500 transition-all duration-100"><PiArrowElbowRightUpLight /></span>
  
   </MenuMotion>
  );
}

export default CloseMenu;