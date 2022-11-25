import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const useAnimateOnScroll = <T extends HTMLElement>(
  animationType: "slide-up" | "slide-right" | "slide-left" | "opacity"
) => {
  const animatedElement = useRef<T>(null!);
  const isInView = useInView(animatedElement, { once: true });

  useEffect(() => {
    animatedElement.current.classList.add(`${animationType}-transition`);
  }, [animationType]);

  useEffect(() => {
    if (isInView) animatedElement.current.classList.add(`${animationType}-transition-inview`);
  }, [isInView, animationType]);

  return { animatedElement, isInView };
};

export default useAnimateOnScroll;
