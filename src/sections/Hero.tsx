import { Github, Linkedin, ArrowUpRight, ChevronDown } from "lucide-react";
import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import { useEffect, useRef } from "react";

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Motion values for premium mouse parallax tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs to dampen mouse inputs for that expensive "lagged cinematic depth"
  const smoothMouseX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  // Layer translations (parallax multipliers)
  const layer1X = useTransform(smoothMouseX, [-300, 300], [-15, 15]);
  const layer1Y = useTransform(smoothMouseY, [-300, 300], [-15, 15]);
  const layer2X = useTransform(smoothMouseX, [-300, 300], [8, -8]);
  const layer2Y = useTransform(smoothMouseY, [-300, 300], [8, -8]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate delta from center of the hero section
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      id="hero-section"
      className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 py-20 md:py-36 overflow-hidden select-none"
    >
      {/* 3D ambient layered light following mouse */}
      <motion.div
        className="absolute w-[450px] h-[450px] rounded-full dark:bg-white/[0.015] bg-neutral-900/[0.015] mix-blend-overlay blur-[90px] pointer-events-none top-[15%] left-[10%]"
        style={{ x: layer2X, y: layer2Y }}
      />
      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full dark:bg-[#eaeaea]/[0.01] bg-neutral-900/[0.01] mix-blend-overlay blur-[120px] pointer-events-none bottom-[20%] right-[15%]"
        style={{ x: layer1X, y: layer1Y }}
      />

      {/* Hero content container */}
      <div className="max-w-4xl mx-auto w-full flex flex-col items-start text-left space-y-12 md:space-y-16 relative z-10">
        
        {/* Simple & refined availability node with spring entry */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="flex items-center gap-2.5 self-start text-xs font-sans text-neutral-500 dark:text-neutral-400 font-medium bg-neutral-100/40 dark:bg-neutral-900/45 border border-neutral-255/10 dark:border-white/5 px-4 py-1.5 rounded-full backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-neutral-400 dark:bg-neutral-500 opacity-75 animate-ping"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-800 dark:bg-neutral-200"></span>
          </span>
          <span className="font-sans font-light tracking-wide">Currently exploring machine learning &amp; systems engineering</span>
        </motion.div>

        {/* Powerful Editorial Typography with Staggered Characters/Words reveals */}
        <div className="space-y-6 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-semibold tracking-tight leading-[1.1] text-neutral-900 dark:text-[#F5F5F5]"
          >
            Building thoughtful systems through{" "}
            <span className="font-serif italic font-normal text-neutral-500 dark:text-neutral-450 pr-1 block sm:inline">
              engineering,
            </span>{" "}
            machine learning, and curiosity.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-neutral-600 dark:text-[#B8B8B8] max-w-2xl leading-relaxed font-sans font-light"
          >
           Hello, I'm Aaryan Lunis. I specialize in applied artificial intelligence, data analytics, and decision intelligence, building systems that help organizations make smarter, faster, and more informed decisions. My experience spans machine learning research, AI engineering, intelligent automation, and large language model applications, with a focus on translating cutting-edge technology into scalable solutions that deliver real-world value.

          </motion.p>
        </div>

        {/* CTA Actions Bar - Apple-style, premium magnetic buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-4 self-start w-full sm:w-auto"
        >
          {/* Interactive Resume Portal Button (Updated Label) */}
          <button
            id="open-cv-hero-btn"
            onClick={onOpenResume}
            className="w-full sm:w-auto cursor-pointer group flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-sans font-medium bg-neutral-900 dark:bg-[#F5F5F5] text-neutral-50 dark:text-neutral-950 hover:scale-[1.03] active:scale-[0.97] hover:bg-neutral-800 dark:hover:bg-white transition-all border border-neutral-950 dark:border-white/10 shadow-lg shadow-neutral-900/10 dark:shadow-none"
          >
            <span>Resume PDF</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-550 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </button>

          {/* Clean GitHub link */}
          <a
            id="hero-github-link"
            href="https://github.com/Aaryan-Lunis"
            target="_blank"
            referrerPolicy="no-referrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-sans font-medium border border-neutral-250 dark:border-white/10 hover:border-neutral-400 dark:hover:border-white/25 hover:bg-neutral-100/30 dark:hover:bg-white/5 transition-all text-neutral-700 dark:text-[#EAEAEA]"
          >
            <Github className="w-4 h-4 text-neutral-400 dark:text-neutral-500" />
            <span>GitHub</span>
          </a>

          {/* Clean LinkedIn link */}
          <a
            id="hero-linkedin-link"
            href="https://linkedin.com/in/aaryan-lunis"
            target="_blank"
            referrerPolicy="no-referrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-sans font-medium border border-neutral-250 dark:border-white/10 hover:border-neutral-400 dark:hover:border-white/25 hover:bg-neutral-100/30 dark:hover:bg-white/5 transition-all text-neutral-700 dark:text-[#EAEAEA]"
          >
            <Linkedin className="w-4 h-4 text-neutral-400 dark:text-neutral-500" />
            <span>LinkedIn</span>
          </a>
        </motion.div>
      </div>

      {/* Subtle scrolling down indicator with fade-loop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.45, 0] }}
        transition={{ delay: 1.5, repeat: Infinity, duration: 2.2 }}
        className="absolute bottom-10 right-12 hidden md:flex items-center gap-2.5 pointer-events-none select-none text-neutral-400 dark:text-neutral-600 font-sans"
      >
        <span className="text-[10px] uppercase tracking-widest font-mono">Scroll to explore</span>
        <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
      </motion.div>
    </section>
  );
}
