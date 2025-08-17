"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function MouseFollower() {
  const dotRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;

    const handleMouseMove = (e) => {
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="fixed top-0 left-0 w-4 h-4 rounded-full bg-primary opacity-70 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
      style={{ filter: "blur(4px)" }}
    ></div>
  );
}
