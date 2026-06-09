import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { stiffness: 400, damping: 28 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const glowXSpring = useSpring(cursorX, { stiffness: 220, damping: 35 });
  const glowYSpring = useSpring(cursorY, { stiffness: 220, damping: 35 });

  useEffect(() => {
    // Disable on mobile/touch interfaces
    const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (hasTouch) return;

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 6);
      cursorY.set(e.clientY - 6);
    };

    const handleMouseOver = (e: MouseEvent) => {
      // Find if clicking target is a matching interactive node
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("interactive-node")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Precision Core Pointer */}
      <motion.div
        id="custom-cursor-core"
        className="fixed top-0 left-0 w-2 h-2 bg-neutral-900 dark:bg-neutral-100 rounded-full pointer-events-none z-50 hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          scale: isHovered ? 2.2 : 1,
        }}
      />
      
      {/* Outer Atmospheric Aura */}
      <motion.div
        id="custom-cursor-glow"
        className="fixed top-0 left-0 w-10 h-10 border border-neutral-350 dark:border-neutral-800 rounded-full pointer-events-none z-50 hidden md:block"
        style={{
          x: glowXSpring,
          y: glowYSpring,
          transform: "translate(-16px, -16px)", // Centering
        }}
        animate={{
          scale: isHovered ? 1.4 : 1,
          borderColor: isHovered 
            ? "rgba(17, 17, 17, 0.25)" 
            : "rgba(128, 128, 128, 0.12)"
        }}
        transition={{ type: "spring", stiffness: 220, damping: 35 }}
      />
    </>
  );
}
