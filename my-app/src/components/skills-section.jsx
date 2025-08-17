"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Code,
  Layout,
  Palette,
  Database,
  Cloud,
  GitBranch,
  Zap,
  Lightbulb,
} from "lucide-react";

const skills = [
  {
    name: "Frontend Development",
    icon: Code,
    description: "React, Next.js, JavaScript, HTML5, CSS3",
    level: 90,
  },
  {
    name: "UI/UX Design",
    icon: Palette,
    description: "Tailwind CSS, shadcn/ui, Figma, Responsive Design",
    level: 85,
  },
  {
    name: "Backend Development",
    icon: Database,
    description: "Node.js, Express, REST APIs, GraphQL, PostgreSQL, MongoDB",
    level: 80,
  },
  {
    name: "Cloud & Deployment",
    icon: Cloud,
    description: "Vercel, Netlify, AWS (S3, Lambda), Docker (basics)",
    level: 75,
  },
  {
    name: "Version Control",
    icon: GitBranch,
    description: "Git, GitHub, GitLab",
    level: 90,
  },
  {
    name: "Performance Optimization",
    icon: Zap,
    description: "Web Vitals, Lighthouse, Code Splitting, Caching",
    level: 82,
  },
  {
    name: "Problem Solving",
    icon: Lightbulb,
    description: "Algorithms, Data Structures, Debugging",
    level: 88,
  },
  {
    name: "Other Tools",
    icon: Layout,
    description: "VS Code, npm, Yarn, Postman, Webpack, Vite",
    level: 78,
  },
];

export default function SkillsSection() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const [flipped, setFlipped] = useState(() => skills.map(() => false));

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRefs.current,
        {
          opacity: 0,
          y: 100,
          rotateX: -20,
          scale: 0.9,
          transformOrigin: "center bottom",
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          duration: 1,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleFlip = (idx) => {
    setFlipped((prev) => prev.map((f, i) => (i === idx ? !f : f)));
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 px-6 md:px-12 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-tl from-background/50 to-card/50 opacity-20 z-0"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary drop-shadow-md">
          My Expertise
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const isFlipped = flipped[index];
            return (
              <div
                key={skill.name}
                ref={(el) => (cardRefs.current[index] = el)}
                className="group [perspective:1200px]"
              >
                <div
                  role="button"
                  aria-label={`Skill card ${skill.name}`}
                  onClick={() => toggleFlip(index)}
                  className={[
                    "relative h-56 w-full cursor-pointer duration-500",
                    "[transform-style:preserve-3d]",
                    "rounded-xl border border-border shadow-xl",
                    "bg-gradient-to-br from-card to-card/90",
                    "hover:shadow-2xl",
                    "transition-all",
                    "md:group-hover:[transform:rotateY(180deg)]",
                    isFlipped ? "[transform:rotateY(180deg)]" : "",
                  ].join(" ")}
                >
                  {/* Front */}
                  <div className="absolute inset-0 p-6 flex flex-col items-center justify-center gap-3 [backface-visibility:hidden]">
                    <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                    <Icon className="h-12 w-12 text-secondary group-hover:text-primary transition-colors duration-300" />
                    <h3 className="text-xl font-semibold text-foreground text-center">
                      {skill.name}
                    </h3>
                    <p className="text-foreground/70 text-sm text-center">
                      {skill.description}
                    </p>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 p-6 flex flex-col items-center justify-center gap-4 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <h4 className="text-lg font-medium text-primary">
                      Proficiency
                    </h4>
                    <div className="w-full">
                      <div className="h-2 w-full bg-background rounded-full overflow-hidden border border-border">
                        <div
                          className="h-full bg-gradient-to-r from-secondary to-primary"
                          style={{ width: `${skill.level || 75}%` }}
                        />
                      </div>
                      <p className="text-xs text-foreground/60 mt-2 text-center">
                        {skill.level || 75}%
                      </p>
                    </div>
                    <p className="text-foreground/80 text-xs text-center">
                      Always improving with real-world projects and continuous
                      learning.
                    </p>
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
