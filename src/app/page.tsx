import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Ecosystem from "@/components/Ecosystem";
import Community from "@/components/Community";
import Socials from "@/components/Socials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <a className="skip" href="#main">Lewati ke konten</a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Ecosystem />
        <Community />
        <Socials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
