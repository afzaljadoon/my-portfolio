"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      );
    }, navRef);
    return () => ctx.revert();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: element, offsetY: 80 },
        ease: "power2.inOut",
      });
      setIsOpen(false);
    }
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md shadow-lg py-4 px-6 md:px-12 border-b border-border"
    >
      <div className="container mx-auto flex justify-between items-center">
        <a
          href="#"
          className="text-3xl font-extrabold text-primary tracking-wider hover:text-secondary transition-colors duration-300"
        >
          {"<Dev />"}
        </a>
        <div className="hidden md:flex space-x-8">
          <Button
            variant="link"
            className="text-foreground hover:text-primary text-lg font-medium transition-colors duration-300"
            onClick={() => scrollToSection("hero")}
          >
            Home
          </Button>
          <Button
            variant="link"
            className="text-foreground hover:text-primary text-lg font-medium transition-colors duration-300"
            onClick={() => scrollToSection("about")}
          >
            About
          </Button>
          <Button
            variant="link"
            className="text-foreground hover:text-primary text-lg font-medium transition-colors duration-300"
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </Button>
          <Button
            variant="link"
            className="text-foreground hover:text-primary text-lg font-medium transition-colors duration-300"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </Button>
          <Button
            variant="link"
            className="text-foreground hover:text-primary text-lg font-medium transition-colors duration-300"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </Button>
        </div>
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="text-primary"
          >
            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </Button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center space-y-4 bg-card/90 py-4 rounded-lg shadow-xl">
          <Button
            variant="link"
            className="text-foreground hover:text-primary text-lg font-medium"
            onClick={() => scrollToSection("hero")}
          >
            Home
          </Button>
          <Button
            variant="link"
            className="text-foreground hover:text-primary text-lg font-medium"
            onClick={() => scrollToSection("about")}
          >
            About
          </Button>
          <Button
            variant="link"
            className="text-foreground hover:text-primary text-lg font-medium"
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </Button>
          <Button
            variant="link"
            className="text-foreground hover:text-primary text-lg font-medium"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </Button>
          <Button
            variant="link"
            className="text-foreground hover:text-primary text-lg font-medium"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </Button>
        </div>
      )}
    </nav>
  );
}
