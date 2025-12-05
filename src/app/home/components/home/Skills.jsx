"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap"

const skills = [
  "/assets/figma-icon.svg",
  "/assets/html-1.svg", 
  "/assets/css-3.svg",
  "/assets/javascript-1.svg", 
  "/assets/react-2.svg",
  "/assets/next-js.svg", 
  "/assets/nodejs-icon.svg", 
  "/assets/wordpress-icon-1.svg",
  "/assets/gsap-greensock.svg",
  "/assets/threejs-1.svg", 
  "/assets/php-6.svg",
  "/assets/mysql-3.svg", 
];

export default function Skills() {
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    gsap.set(".circle-container", { x: isMobile ? -60 : -70 });
    const icons = document.querySelectorAll(".circle-container img");
    const radius = window.innerWidth < 768 ? 150 : 280;

    // Position all icons in a circle
    icons.forEach((icon, i) => {
      const angle = (i / icons.length) * Math.PI * 2;
      gsap.set(icon, {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)"
      });
    });

    // Create a timeline to rotate container AND keep icons upright
    const tl = gsap.timeline({ repeat: -1 });
    tl.to(".circle-container", {
      rotation: 360,
      transformOrigin: "50% 50%",
      duration: 12,
      ease: "linear",
      onUpdate: () => {
        // Calculate counter rotation for each icon
        const containerRotation = gsap.getProperty(".circle-container", "rotation");
        icons.forEach((icon) => {
          gsap.set(icon, { rotation: -containerRotation });
        });
      }
    });
  }, []);

  return (
    <section className="skillsSection flex flex-col justify-center items-center min-h-screen bg-gray-900 text-white" id="skills">
      <div className="skillsContent text-center mb-10">
        <h3 className="heading-2 text-3xl font-bold color-7 animate-lr">Skills</h3>
      </div>

      <div className="circle-container relative w-[400px] h-[400px]">
        {skills.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={`skill-${i}`}
            width={70}
            height={70}
            className="rounded-full"
          />
        ))}
      </div>
    </section>
  );
}
