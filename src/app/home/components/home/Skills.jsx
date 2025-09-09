"use client";
import React from "react";
import Image from "next/image";

const skills = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
];

export default function Skills() {
  return (
    <section className="skillsSection flex flex-col justify-center items-center min-h-screen bg-gray-900 text-white">
      <div className="skillsContent text-center mb-10">
        <h3 className="heading-2 text-3xl font-bold">Skills</h3>
      </div>

      <div className="circle-container relative w-[400px] h-[400px] flex flex-wrap justify-center items-center gap-6">
        {skills.map((src, i) => (
          <Image key={i} src={src} alt={`skill-${i}`} width={80} height={80} />
        ))}
      </div>
    </section>
  );
}
