"use client";

import React, { useEffect, useRef } from "react";
import styles from "./Skills.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const techLogos = [
  { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "WordPress", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg" },
  { name: "PHP", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
  { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "GSAP", src: "https://cdn.simpleicons.org/greensock" },
  { name: "Three.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg", isThreeJs: true },
  { name: "Figma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" }
];

const brandColors: Record<string, string> = {
  "HTML5": "rgba(227, 76, 38, 0.25)",
  "CSS3": "rgba(38, 77, 228, 0.25)",
  "JavaScript": "rgba(240, 219, 79, 0.25)",
  "React": "rgba(97, 219, 251, 0.25)",
  "Next.js": "rgba(255, 255, 255, 0.2)",
  "WordPress": "rgba(33, 117, 155, 0.25)",
  "PHP": "rgba(119, 123, 180, 0.25)",
  "MySQL": "rgba(0, 117, 143, 0.25)",
  "GSAP": "rgba(136, 206, 2, 0.25)",
  "Three.js": "rgba(0, 210, 255, 0.3)",
  "Figma": "rgba(242, 78, 30, 0.25)"
};

// Duplicate the list of logos to create a seamless infinite scrolling effect
const carouselLogos = [...techLogos, ...techLogos];

export default function Skills() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(headingRef.current,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 1.0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          }
        }
      );

      // Carousel animation
      gsap.fromTo(carouselRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: carouselRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          }
        }
      );

      // Grid Rows animation
      const rows = gridRef.current?.querySelectorAll(`.${styles.row}`);
      if (rows && rows.length > 0) {
        gsap.fromTo(rows,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            }
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.section} id="skills">
      <h2 className={styles.title} ref={headingRef}>Skills</h2>
      
      {/* Infinite Logo Carousel */}
      <div className={styles.carouselContainer} ref={carouselRef}>
        <div className={styles.carouselTrack}>
          {carouselLogos.map((logo, index) => {
            const isHovered = hoveredIndex === index;
            const borderCol = brandColors[logo.name]?.replace('0.25', '0.5').replace('0.2', '0.4').replace('0.3', '0.6') || 'rgba(255, 255, 255, 0.15)';
            const glowStyle = isHovered ? {
              boxShadow: `0 0 20px ${brandColors[logo.name] || 'rgba(0, 210, 255, 0.2)'}`,
              borderColor: borderCol,
              transform: 'translateY(-4px)',
              background: '#0d0d0d'
            } : {};

            return (
              <div 
                className={styles.logoItem} 
                key={`${logo.name}-${index}`}
                style={glowStyle}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className={`${styles.logoImage} ${logo.isThreeJs ? styles.threeJsLogo : ""}`}
                  loading="lazy"
                />
                <span className={styles.logoName}>{logo.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.grid} ref={gridRef}>
        <div className={styles.row}>
          <div className={styles.label}>
            <span className={styles.thin}>Front</span> <span className={styles.bold}>End :</span>
          </div>
          <p className={styles.description}>
            Semantic HTML5 structure and modular CSS layouts utilizing Flexbox & Grid for highly responsive, reusable components. Advanced ES6+ JavaScript engineered for complex UI development, including custom DOM operations, state management, and scalable modular interfaces with React & Next.js.
          </p>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>
            <span className={styles.bold}>Animations :</span>
          </div>
          <p className={styles.description}>
            Interactive GSAP scroll-triggered animations and high-performance WebGL 3D rendering with Three.js.
          </p>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>
            <span className={styles.thin}>Back</span> <span className={styles.bold}>End :</span>
          </div>
          <p className={styles.description}>
            Server-side engineering utilizing PHP and Node.js. Building custom WordPress architectures from scratch, handling database connectivity, querying, and relational data structures.
          </p>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>
            <span className={styles.bold}>API :</span>
          </div>
          <p className={styles.description}>
            Designing and integrating RESTful and GraphQL APIs, specializing in custom WordPress REST API development to power headless CMS configurations.
          </p>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>
            <span className={styles.bold}>Server :</span>
          </div>
          <p className={styles.description}>
            Cloud infrastructure hosting on DigitalOcean VPS (Nginx configuration) and Vercel serverless deployments.
          </p>
        </div>
      </div>
      
      <hr className={styles.divider} />
    </section>
  );
}
