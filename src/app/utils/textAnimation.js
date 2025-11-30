// utils/animations.js
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export const initTextAnimations = () => {
  // ---- Animation 1: Lines from bottom (.animate) ----
  const elements = document.querySelectorAll(".animate");

  elements.forEach((element) => {
    const typeSplit = new SplitType(element, {
      types: "lines",
      tagName: "span",
    });

    gsap.from(element.querySelectorAll(".line"), {
      y: "100%",
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  });

  // ---- Animation 2: Letters left → right (.animate-lr) ----
  const letterElements = document.querySelectorAll(".animate-lr");

  letterElements.forEach((el) => {
    const split = new SplitType(el, {
      types: "chars",
      tagName: "span",
    });

    gsap.from(el.querySelectorAll(".char"), {
      x: -40,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.03,
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });
};
