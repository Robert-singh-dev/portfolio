"use client";

import React, { useEffect, useRef } from "react";
import styles from "./Experiences.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Experiences() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

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

      // Experiences items stagger
      const items = listRef.current?.querySelectorAll(`.${styles.item}`);
      if (items && items.length > 0) {
        gsap.fromTo(items,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: listRef.current,
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
    <section className={styles.section} id="experience">
      <h2 className={styles.title} ref={headingRef}>Experiences</h2>
      
      <div className={styles.list} ref={listRef}>
        {/* Honeycomb Design */}
        <div className={styles.item}>
          <h3 className={styles.itemTitle}>
            <span className={styles.thin}>Honeycomb</span> <span className={styles.bold}>Design and Digital</span>
          </h3>
          <ul className={styles.bullets}>
            <li className={styles.bullet}>
              Developed custom WordPress themes using a component-based architecture with reusable ACF-driven modules and standardized development workflows.
            </li>
            <li className={styles.bullet}>
              Created Custom Post Types, Taxonomies, and Advanced Custom Fields to build flexible and scalable content management solutions.
            </li>
            <li className={styles.bullet}>
              Implemented dynamic content rendering using WP_Query, custom templates, and WordPress theme development best practices.
            </li>
            <li className={styles.bullet}>
              Delivered responsive, SEO-friendly websites from Figma designs while maintaining performance, accessibility, and cross-browser compatibility.
            </li>
          </ul>
        </div>

        {/* Supercode Design */}
        <div className={styles.item}>
          <h3 className={styles.itemTitle}>
            <span className={styles.thin}>Supercode</span> <span className={styles.bold}>Design</span>
          </h3>
          <ul className={styles.bullets}>
            <li className={styles.bullet}>
              Developed and maintained custom WordPress themes for B2B websites using Advanced Custom Fields (ACF), delivering responsive, SEO-friendly, and scalable web solutions.
            </li>
            <li className={styles.bullet}>
              Built headless CMS applications using WordPress as the backend and Next.js/React as the frontend, integrating dynamic content through REST APIs.
            </li>
            <li className={styles.bullet}>
              Implemented smooth, interactive user experiences using GSAP and ScrollTrigger, creating engaging animations and dynamic UI interactions across web applications.
            </li>
            <li className={styles.bullet}>
              Implemented immersive 3D web experiences using Three.js, enhancing website interactivity and visual storytelling.
            </li>
          </ul>
        </div>

        {/* Beeleaf Technologies */}
        <div className={styles.item}>
          <h3 className={styles.itemTitle}>
            <span className={styles.thin}>Beeleaf</span> <span className={styles.bold}>Technologies</span>
          </h3>
          <ul className={styles.bullets}>
            <li className={styles.bullet}>
              Worked on designing and building websites, learning production-level flow from sketch/idea to website.
            </li>
            <li className={styles.bullet}>
              Created layouts and templates in Figma to turn design concepts into web pages.
            </li>
            <li className={styles.bullet}>
              Worked with wordpress for web design, development, and CMS management.
            </li>
          </ul>
        </div>
      </div>
      
      <hr className={styles.divider} />
    </section>
  );
}
