import About from "@/components/About";
import Carousel from "@/components/Carousel";
import ChatButton from "@/components/ChatButton";
import Contact from "@/components/Contact";
import HeaderNavbar from "@/components/HeaderNav";
import ScrollTop from "@/components/ScrollToTopArrow";



export default function Home() {
  return (
<>
<HeaderNavbar />
<About />
<Carousel />
<Contact />
<ScrollTop />

<ChatButton />
</>
  )
}
