"use client";

import React, { useEffect, useRef } from 'react'
import styles from './About.module.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const headingRef = useRef<HTMLHeadingElement>(null);
    const paragraphRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
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

            gsap.fromTo(paragraphRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.0,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: paragraphRef.current,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    }
                }
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <section className={styles.section} id="about">
            <h2 className={styles.title} ref={headingRef}>About Me</h2>
            <div className={styles.content}>
                <p className={styles.paragraph} ref={paragraphRef}>
                  I am Robert. Based in Bangalore and currently working at Honeycomb, my core focus is building custom WordPress themes from scratch without using any page builders, as well as developing modern headless CMS architectures. I particularly enjoy working with decoupled React/Next.js frontends integrated with headless CMS backends, optimizing modern developer workflows, and standardizing robust coding solutions.
                  <br /><br />
                  With 2+ years of experience, I focus on building clean, responsive, and well-structured web experiences. 
                  I enjoy solving real problems through development and continuously improving my workflow, learning new tools, 
                  and staying updated with modern web technologies.
                </p>
            </div>
            <hr className={styles.divider} />
        </section>
    )
}
