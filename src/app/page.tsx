import Jumbotron from "@/components/Jumbotron";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Porfolio from "@/components/Porfolio";
import Testimonials from "@/components/Testimonials";
import Expercise from "@/components/Expercise";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <About />
      <Skills />
      <Expercise />
      <Porfolio />
      <Testimonials />
      <Contact />
    </div>
  );
}
