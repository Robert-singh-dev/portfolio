"use client";

import React, { useEffect, useRef } from "react";
import styles from "./Projects.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          }
        }
      );

      // Projects list items stagger
      const rows = gridRef.current?.querySelectorAll(`.${styles.row}`);
      if (rows && rows.length > 0) {
        gsap.fromTo(rows,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.2,
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
    <section className={styles.section} id="projects">
      <h2 className={styles.title} ref={headingRef}>Workflow Solutions</h2>

      <div className={styles.grid} ref={gridRef}>
        {/* NextJS WordPress Headless CMS */}
        <div className={styles.row}>
          <div className={styles.projectHeader}>
            <div className={styles.name}>
              <span className={styles.thin}>NextJS</span> <span className={styles.bold}>WP Headless</span>
            </div>
          </div>
          <div className={styles.projectContent}>
            <p className={styles.description}>
              Developed a Headless CMS architecture utilizing Next.js (React) as the modern frontend and WordPress 
              as the content management backend. Displays full capability in implementing REST API/GraphQL content 
              deliveries, statically pre-rendering dynamic layouts, and deploying ultra-fast decoupled web solutions.
            </p>
            <a
              href="https://github.com/Robert-singh-dev/nextjs-wp"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              github.com/Robert-singh-dev/nextjs-wp
            </a>
          </div>
        </div>

        {/* ACF Component Generator */}
        <div className={styles.row}>
          <div className={styles.projectHeader}>
            <div className={styles.name}>
              <span className={styles.thin}>ACF</span> <span className={styles.bold}>Generator</span>
            </div>
          </div>
          <div className={styles.projectContent}>
            <p className={styles.description}>
              Developed a specialized utility to automate WordPress Advanced Custom Fields (ACF) component generation. 
              This tool significantly improves development workflow and team professionalism by reducing boilerplate code, 
              preventing manual configuration errors, and providing a standardized foundation for building custom theme layouts.
            </p>
            <a
              href="https://github.com/Robert-singh-dev/acf-component-generator"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              github.com/Robert-singh-dev/acf-component-generator
            </a>
          </div>
        </div>

        {/* ACF Layout Preview */}
        <div className={styles.row}>
          <div className={styles.projectHeader}>
            <div className={styles.name}>
              <span className={styles.thin}>ACF Layout</span> <span className={styles.bold}>Preview</span>
            </div>
          </div>
          <div className={styles.projectContent}>
            <p className={styles.description}>
              Created an interactive preview extension for Advanced Custom Fields. 
              This project directly solves the challenge of content editors visualizing layout blocks before publish. 
              By injecting dynamic component-level preview layers into the WordPress backend, it streamlines editing workflows 
              and ensures high-fidelity design mapping across web platforms.
            </p>
            <a
              href="https://github.com/Robert-singh-dev/acf-layout-preview"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              github.com/Robert-singh-dev/acf-layout-preview
            </a>
          </div>
        </div>
      </div>

      <hr className={styles.divider} />
    </section>
  );
}
