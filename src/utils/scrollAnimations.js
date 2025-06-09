// utils/scrollAnimations.js
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateFromBottom = (target, delay = 0.2) => {
  gsap.from(target, {
    y: 50,
    opacity: 0,
    duration: 1,
    delay,
    ease: "power4.out",
    scrollTrigger: {
      trigger: target,
      start: "top 80%",
    },
  });
};
