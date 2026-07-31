"use client";

import React, { useEffect, useRef, useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import ThreeCube from "./components/ThreeCube/ThreeCube";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experiences from "./components/Experiences/Experiences";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import { gsap } from "gsap";

export default function Home() {
  const contentRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Hide content layout initially on client mount
    gsap.set(contentRef.current, { opacity: 0 });

    // Fade content in after background WebGL expansion completes
    gsap.to(contentRef.current, {
      opacity: 1,
      duration: 1.2,
      ease: "power2.out",
      delay: 2.2,
    });

    // High performance cursor spotlight tracking using GSAP quickTo
    const xTo = gsap.quickTo(spotlightRef.current, "x", { duration: 0.8, ease: "power2.out" });
    const yTo = gsap.quickTo(spotlightRef.current, "y", { duration: 0.8, ease: "power2.out" });

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX - 300);
      yTo(e.clientY - 300);
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Scroll progress bar indicator
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="text-white min-h-screen flex flex-col font-sans select-none relative overflow-hidden">
      {/* Top scroll progress indicator */}
      <div 
        className="fixed top-0 left-0 h-[2px] bg-[#00d2ff] z-[9999] transition-all duration-75 ease-out" 
        style={{ width: `${scrollProgress}%` }}
      />

      <ThreeCube />

      {/* Spotlight backdrop element */}
      <div 
        ref={spotlightRef}
        className="fixed top-0 left-0 pointer-events-none rounded-full"
        style={{
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(0, 210, 255, 0.045) 0%, rgba(0, 0, 0, 0) 70%)",
          zIndex: -1,
        }}
      />

      <div ref={contentRef} style={{ opacity: 0 }}>
        <Header />
        <main className="flex-grow">
          <Hero />
          <About />
          <Skills />
          <Experiences />
          <Projects />
        </main>
        <Footer />
      </div>
    </div>
  );
}
