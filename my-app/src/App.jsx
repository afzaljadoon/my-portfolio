import "./index.css";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import HeroSection from "./components/hero-section";
import AboutSection from "./components/about-section";
import SkillsSection from "./components/skills-section";
import ProjectsSection from "./components/projects-section";
import ContactSection from "./components/contact-section";
import MouseFollower from "./components/mouse-follower";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <MouseFollower />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
