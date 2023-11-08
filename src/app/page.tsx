import About from "@/components/About";
import AnimatedSocial from "@/components/AnimatadeSocial";
import Carousel from "@/components/Carousel";
import ChatButton from "@/components/ChatButton";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HeaderNavbar from "@/components/HeaderNav";
import ScrollTop from "@/components/ScrollToTopArrow";



export default function Home() {
  return (
<>
<HeaderNavbar />
<About />
<Carousel />
<Contact />
<Footer />
<ChatButton />
<ScrollTop />
</>
  )
}
