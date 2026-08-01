"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./Experiences.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiencesData = [
  {
    company: "Honeycomb Design",
    companyThin: "Honeycomb",
    companyBold: "Design and Digital",
    bullets: [
      "Developed custom WordPress themes using a component-based architecture with reusable ACF-driven modules and standardized development workflows.",
      "Created Custom Post Types, Taxonomies, and Advanced Custom Fields to build flexible and scalable content management solutions.",
      "Implemented dynamic content rendering using WP_Query, custom templates, and WordPress theme development best practices.",
      "Delivered responsive, SEO-friendly websites from Figma designs while maintaining performance, accessibility, and cross-browser compatibility."
    ]
  },
  {
    company: "Supercode Design",
    companyThin: "Supercode",
    companyBold: "Design",
    bullets: [
      "Developed and maintained custom WordPress themes for B2B websites using Advanced Custom Fields (ACF), delivering responsive, SEO-friendly, and scalable web solutions.",
      "Built headless CMS applications using WordPress as the backend and Next.js/React as the frontend, integrating dynamic content through REST APIs.",
      "Implemented smooth, interactive user experiences using GSAP and ScrollTrigger, creating engaging animations and dynamic UI interactions across web applications.",
      "Implemented immersive 3D web experiences using Three.js, enhancing website interactivity and visual storytelling."
    ]
  },
  {
    company: "beleaf Technologies",
    companyThin: "beleaf",
    companyBold: "Technologies",
    bullets: [
      "Worked on designing and building websites, learning production-level flow from sketch/idea to website.",
      "Created layouts and templates in Figma to turn design concepts into web pages.",
      "Worked with WordPress for web design, development, and CMS management."
    ]
  }
];

export default function Experiences() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(activeIndex);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Keep index ref updated for interval callback closure
  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  // Autoplay manager
  const resetAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
    autoplayRef.current = setInterval(() => {
      const nextIndex = (activeIndexRef.current + 1) % experiencesData.length;
      changeSlide(nextIndex);
    }, 6000); // Transition every 6 seconds
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading entrance animation
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

      // Card container entrance animation
      gsap.fromTo(containerRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          }
        }
      );
    });

    // Start autoplay
    resetAutoplay();

    return () => {
      ctx.revert();
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, []);

  const changeSlide = (newIndex: number) => {
    if (newIndex === activeIndexRef.current) return;

    // Reset autoplay interval on click
    resetAutoplay();

    const isNext = newIndex > activeIndexRef.current;
    const exitX = isNext ? -30 : 30;
    const enterX = isNext ? 30 : -30;

    const tl = gsap.timeline();

    // Slide and fade out
    tl.to(cardRef.current, {
      opacity: 0,
      x: exitX,
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => {
        setActiveIndex(newIndex);
        gsap.set(cardRef.current, { x: enterX });
      }
    });

    // Slide and fade in
    tl.to(cardRef.current, {
      opacity: 1,
      x: 0,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleNext = () => {
    const nextIdx = (activeIndex + 1) % experiencesData.length;
    changeSlide(nextIdx);
  };

  const handlePrev = () => {
    const prevIdx = (activeIndex - 1 + experiencesData.length) % experiencesData.length;
    changeSlide(prevIdx);
  };

  const activeExp = experiencesData[activeIndex];

  return (
    <section className={styles.section} id="experience">
      <h2 className={styles.title} ref={headingRef}>Experiences</h2>

      <div className={styles.container} ref={containerRef}>
        {/* Navigation Tabs */}
        <div className={styles.tabsContainer}>
          <div className={styles.tabs}>
            {experiencesData.map((exp, idx) => (
              <button
                key={idx}
                className={`${styles.tab} ${idx === activeIndex ? styles.activeTab : ""}`}
                onClick={() => changeSlide(idx)}
              >
                {exp.companyThin}
              </button>
            ))}
          </div>
        </div>

        {/* Swiper Content Layout */}
        <div className={styles.swiperWrapper}>
          <button 
            className={`${styles.navArrow} ${styles.prevArrow}`} 
            onClick={handlePrev} 
            aria-label="Previous slide"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className={styles.card} ref={cardRef}>
            <h3 className={styles.itemTitle}>
              <span className={styles.thin}>{activeExp.companyThin}</span>{" "}
              <span className={styles.bold}>{activeExp.companyBold}</span>
            </h3>

            <ul className={styles.bullets}>
              {activeExp.bullets.map((bullet, idx) => (
                <li key={idx} className={styles.bullet}>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>

          <button 
            className={`${styles.navArrow} ${styles.nextArrow}`} 
            onClick={handleNext} 
            aria-label="Next slide"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Pagination Indicators */}
        <div className={styles.pagination}>
          {experiencesData.map((_, idx) => (
            <button
              key={idx}
              className={`${styles.dot} ${idx === activeIndex ? styles.activeDot : ""}`}
              onClick={() => changeSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      <hr className={styles.divider} />
    </section>
  );
}
