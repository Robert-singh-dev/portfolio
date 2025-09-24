// utils/animations.js
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export const initTextAnimations = () => {
  const elements = document.querySelectorAll(".animate");

  elements.forEach((element) => {
    // Split text into lines
    const typeSplit = new SplitType(element, {
      types: "lines",
      tagName: "span",
    });

    // Animate lines
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
};
