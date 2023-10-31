import About from "@/components/About";
import Carousel from "@/components/Carousel";
import ChatButton from "@/components/ChatButton";
import Contact from "@/components/Contact";
import HeaderNavbar from "@/components/HeaderNav";



export default function Home() {
  return (
<>
<HeaderNavbar />
<About />
<Carousel />
<Contact />
<ChatButton />
</>
  )
}
