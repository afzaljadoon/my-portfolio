import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const ctaRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const decorativeElementRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(TextPlugin, ScrollToPlugin);

    const ctx = gsap.context(() => {
      // Background gradient animation
      gsap.to(heroRef.current, {
        backgroundPosition: "100% 50%",
        duration: 20,
        ease: "none",
        repeat: -1,
        yoyo: true,
      });

      // Text splitting for heading
      const headingText = headingRef.current.innerText;
      headingRef.current.innerText = "";
      const headingChars = headingText.split("").map((char) => {
        const span = document.createElement("span");
        span.innerText = char === " " ? "\u00A0" : char;
        span.className = "inline-block opacity-0 translate-y-full";
        headingRef.current.appendChild(span);
        return span;
      });

      // Text splitting for subheading
      const subheadingText = subheadingRef.current.innerText;
      subheadingRef.current.innerText = "";
      const subheadingWords = subheadingText.split(" ").map((word) => {
        const span = document.createElement("span");
        span.innerText = word + "\u00A0";
        span.className = "inline-block opacity-0 translate-y-full";
        subheadingRef.current.appendChild(span);
        return span;
      });

      const tl = gsap.timeline({ delay: 0.5 });

      tl.to(headingChars, {
        y: 0,
        opacity: 1,
        stagger: 0.03,
        duration: 0.6,
        ease: "power3.out",
      })
        .to(
          subheadingWords,
          {
            y: 0,
            opacity: 1,
            stagger: 0.05,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, scale: 0.8, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" },
          "-=0.5"
        )
        .fromTo(
          scrollIndicatorRef.current,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.3"
        )
        .to(scrollIndicatorRef.current, {
          y: 10,
          repeat: -1,
          yoyo: true,
          duration: 0.8,
          ease: "power1.inOut",
        });

      // Mouse follow for decorative element
      const handleMouseMove = (e) => {
        gsap.to(decorativeElementRef.current, {
          x: e.clientX * 0.05,
          y: e.clientY * 0.05,
          rotationX: e.clientY * 0.02,
          rotationY: e.clientX * 0.02,
          duration: 1,
          ease: "power2.out",
        });
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, heroRef);

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
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden
                 bg-gradient-to-br from-background via-card to-background bg-[length:200%_200%] animate-gradient-shift perspective-1000"
    >
      <div
        ref={decorativeElementRef}
        className="absolute inset-0 flex items-center justify-center z-0 opacity-10"
      >
        <div className="w-96 h-96 rounded-full bg-primary/30 blur-3xl animate-pulse-slow"></div>
        <div className="w-72 h-72 rounded-full bg-secondary/30 blur-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-slow-reverse"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <h1
          ref={headingRef}
          className="text-5xl md:text-7xl lg:text-7xl font-extrabold leading-tight mb-4 text-foreground drop-shadow-lg"
        >
          Hello, I'm <span className="text-primary">Mir Afzal khan</span>
        </h1>
        <p
          ref={subheadingRef}
          className="text-lg md:text-2xl lg:text-3xl text-foreground/80 mb-10 font-light"
        >
          Crafting{" "}
          <span className="text-secondary font-medium">
            Sublime Digital Experiences
          </span>{" "}
          with Code and Creativity.
        </p>
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Button
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
            onClick={() => scrollToSection("projects")}
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            className="border-secondary text-secondary hover:bg-secondary/10 px-8 py-3 text-lg rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl bg-transparent"
            onClick={() => scrollToSection("contact")}
          >
            Get In Touch
          </Button>
        </div>
      </div>
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/70"
      >
        <ChevronDown className="h-10 w-10 animate-bounce" />
      </div>
    </section>
  );
}
