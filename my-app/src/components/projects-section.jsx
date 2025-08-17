"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Quantum Commerce",
    description:
      "High-performance e-commerce: real-time inventory, secure payments, dynamic catalog, and blazing fast UX.",
    image: "/placeholder.svg?height=320&width=560",
    tech: ["Next.js", "JavaScript", "Tailwind", "Stripe", "PostgreSQL"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 2,
    title: "AuraFlow Task Manager",
    description:
      "Intuitive tasking with collaboration, drag-and-drop, notifications, and real-time sync.",
    image: "/placeholder.svg?height=320&width=560",
    tech: ["React", "Redux", "Firebase", "GSAP", "WebSockets"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 3,
    title: "Synthetica Portfolio",
    description:
      "A cinematic portfolio showcasing animations, performance, and creative code.",
    image: "/placeholder.svg?height=320&width=560",
    tech: ["Next.js", "Tailwind", "GSAP", "MDX"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 4,
    title: "Chronicle Blog Platform",
    description:
      "Rich publishing with markdown, editor, media, and advanced SEO.",
    image: "/placeholder.svg?height=320&width=560",
    tech: ["Next.js", "GraphQL", "Prisma", "Apollo", "AWS S3"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 5,
    title: "DataViz Dashboard",
    description:
      "An interactive data visualization dashboard for analyzing complex datasets with dynamic charts and filters.",
    image: "/placeholder.svg?height=320&width=560",
    tech: ["React", "D3.js", "Chart.js", "Python (Flask)", "REST"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 6,
    title: "AI Chatbot Interface",
    description:
      "A sleek and responsive user interface for an AI-powered chatbot, supporting multiple conversation modes.",
    image: "/placeholder.svg?height=320&width=560",
    tech: ["Next.js", "Tailwind", "WebSockets", "AI API"],
    liveLink: "#",
    githubLink: "#",
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const [flipped, setFlipped] = useState(() => projects.map(() => false));

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      cardRefs.current.forEach((ref, i) => {
        if (!ref) return;
        gsap.fromTo(
          ref,
          {
            opacity: 0,
            y: 120,
            rotateY: -15,
            scale: 0.96,
            transformOrigin: "center bottom",
          },
          {
            opacity: 1,
            y: 0,
            rotateY: 0,
            scale: 1,
            duration: 1.1,
            ease: "power3.out",
            delay: i * 0.06,
            scrollTrigger: {
              trigger: ref,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleFlip = (idx) => {
    setFlipped((prev) => prev.map((f, i) => (i === idx ? !f : f)));
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 px-6 md:px-12 bg-card relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-card/50 to-background/50 opacity-20 z-0"></div>
      <div className="container mx-auto max-w-7xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary drop-shadow-md">
          Signature Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => {
            const isFlipped = flipped[index];
            return (
              <div
                key={project.id}
                ref={(el) => (cardRefs.current[index] = el)}
                className="group [perspective:1400px]"
              >
                <div
                  role="button"
                  aria-label={`Project card ${project.title}`}
                  onClick={() => toggleFlip(index)}
                  className={[
                    "relative h-[380px] w-full cursor-pointer duration-700",
                    "[transform-style:preserve-3d]",
                    "rounded-2xl border border-border shadow-xl",
                    "bg-gradient-to-br from-background to-background/90",
                    "transition-all",
                    "md:group-hover:[transform:rotateY(180deg)]",
                    isFlipped ? "[transform:rotateY(180deg)]" : "",
                  ].join(" ")}
                >
                  {/* Glow border */}
                  <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

                  {/* Front Face */}
                  <div className="absolute inset-0 [backface-visibility:hidden] overflow-hidden rounded-2xl">
                    <div className="h-44 w-full overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={560}
                        height={320}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-semibold text-foreground mb-2">
                        {project.title}
                      </h3>
                      <p className="text-foreground/75 text-sm leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.tech.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="bg-primary/15 text-primary text-xs px-3 py-1 rounded-full border border-primary/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <p className="mt-4 text-xs text-foreground/50 md:hidden">
                        Tap to flip for details
                      </p>
                    </div>
                  </div>

                  {/* Back Face */}
                  <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-card/90 to-background/90"></div>
                    <div className="relative h-full w-full p-6 flex flex-col justify-between">
                      <div>
                        <h4 className="text-xl font-semibold text-primary mb-2">
                          {project.title}
                        </h4>
                        <p className="text-foreground/80 text-sm leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="bg-secondary/15 text-secondary text-xs px-3 py-1 rounded-full border border-secondary/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-4 pt-4">
                        <Button
                          asChild
                          className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2 rounded-full text-sm shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
                        >
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" /> Live
                          </a>
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          className="border-secondary text-secondary hover:bg-secondary/10 px-5 py-2 rounded-full text-sm shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 bg-transparent"
                        >
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4 mr-2" /> Code
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-xs text-foreground/50 text-center md:hidden">
                  Tap to {isFlipped ? "flip back" : "flip"}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
