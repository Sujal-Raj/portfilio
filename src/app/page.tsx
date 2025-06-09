import { Contact } from "lucide-react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// import Portfolio from  "./pages/Home";
// import AboutSection from "./pages/About";
// import ProjectsSection from "./pages/Projects";
// import ServiceCard from "./pages/Services";
import Portfolio from "./pages/Home";
// import HeroSection from './components/HeroSection'


export default async function Home() {
  return (
    <>
    <Navbar />
    <Portfolio/>
    <Footer />
      
    </>
  );
}
