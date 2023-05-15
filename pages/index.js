import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Service from "@/components/Service";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Service />
      <Contact />
      <Footer/>
    </>
  );
}
