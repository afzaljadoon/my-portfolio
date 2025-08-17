"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutSection() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        imageRef.current,
        { opacity: 0, x: -150, rotateY: 90, transformOrigin: "left center" },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 1.5,
          ease: "power3.out",
        }
      ).fromTo(
        textRef.current,
        { opacity: 0, x: 150, rotateY: -90, transformOrigin: "right center" },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 1.5,
          ease: "power3.out",
        },
        "-=1"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 px-6 md:px-12 bg-card relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-card/50 to-background/50 opacity-20 z-0"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary drop-shadow-md">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div
            ref={imageRef}
            className="w-full md:w-1/3 flex-shrink-0 relative group perspective-1000"
          >
            <img
              src="/placeholder.svg?height=400&width=400"
              alt="Professional Portrait"
              className="rounded-xl w-72 h-72 object-cover mx-auto border-4 border-primary shadow-2xl transform transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3"
            />
            <div className="absolute inset-0 rounded-xl border-4 border-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 transform translate-x-4 translate-y-4"></div>
          </div>
          <div
            ref={textRef}
            className="w-full md:w-2/3 text-lg leading-relaxed text-foreground/90 font-light"
          >
            <p className="mb-6">
              Hello! I'm{" "}
              <span className="text-primary font-medium">Mir Afzal khan</span>,
              a dedicated web developer with a profound passion for crafting
              dynamic, intuitive, and visually stunning digital experiences. My
              journey in web development began 1+ year ago when I was captivated
              by the endless possibilities of bringing ideas to life on the
              internet.
            </p>
            <p className="mb-6">
              I specialize in building cutting-edge web applications using
              modern technologies such as{" "}
              <span className="text-secondary font-medium">React</span>,{" "}
              <span className="text-secondary font-medium">Next.js</span>, and{" "}
              <span className="text-secondary font-medium">Tailwind CSS</span>.
              I thrive on solving complex challenges, optimizing performance,
              and continuously exploring new tools and techniques to push the
              boundaries of what's possible.
            </p>
            <p>
              Beyond the lines of code, I enjoy watching cricket.. I am a firm
              believer in clean, maintainable code, pixel-perfect design, and a
              user-centric approach to development. Let's collaborate and create
              something truly extraordinary!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
