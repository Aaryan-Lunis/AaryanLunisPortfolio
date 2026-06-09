import { useState, useEffect } from "react";
import { Sparkles, Cpu, Layers } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Ported Modular Sections
import Hero from "./sections/Hero";
import Timeline from "./sections/Timeline";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";

// Unified Auxiliary Components
import ThemeSwitcher from "./components/ThemeSwitcher";
import ResumeViewer from "./components/ResumeViewer";
import CaseStudyModal from "./components/CaseStudyModal";
import CustomCursor from "./components/CustomCursor";
import AmbientCanvasBg from "./components/AmbientCanvasBg";
import { ProjectEntry } from "./data/projects";

export default function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<ProjectEntry | null>(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [hoveredProjectId, setHoveredProjectId] = useState<string>("alphacross");

  // Initialize theme from persistence
  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") as "dark" | "light" | null;
    const initialTheme = savedTheme || "dark";
    setTheme(initialTheme);
    
    // Set immediate class tag on server/root layer
    document.documentElement.className = initialTheme;

    // Scroll tracker
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync theme status to root class on change
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
  };

  // Jump smoothly to viewport headers
  const jumpToSection = (elementId: string) => {
    const target = document.getElementById(elementId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className={theme}>
      {/* Outer viewport boundary */}
      <div className="min-h-screen relative font-sans dark:bg-[#050505] dark:text-[#EAEAEA] bg-[#FAFAF7] text-[#111111] transition-colors duration-500 overflow-x-hidden">
        
        {/* Cinematic atmospheric 3D-like particle & glow background */}
        <AmbientCanvasBg activeProjectId={hoveredProjectId} />

        {/* Dynamic customized monochrome interaction cursor */}
        <CustomCursor />

        {/* Soft layout grid underlay */}
        <div className="absolute inset-0 ambient-grid pointer-events-none z-0 opacity-30 dark:opacity-20" />

        {/* Dynamic sticky Navigation Menu header */}
        <header
          id="main-nav-header"
          className={`fixed top-0 inset-x-0 z-45 transition-all duration-300 ${
            isScrolled
              ? "py-3 bg-[#FAFAF7]/80 dark:bg-[#050505]/80 border-b border-neutral-200/20 dark:border-white/5 shadow-sm backdrop-blur-md"
              : "py-6 bg-transparent"
          }`}
        >
          <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
            {/* Branding Name Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 hover:opacity-75 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer group select-none font-sans"
            >
              <span
                className="text-sm tracking-tight text-neutral-900 dark:text-[#F5F5F5]"
                style={{
                  fontStyle: "normal",
                  fontWeight: "bold",
                  textDecorationLine: "none",
                  fontFamily: "Georgia, serif"
                }}
              >
                Aaryan Lunis
              </span>
            </button>

            {/* Quick action section links */}
            <nav className="hidden md:flex items-center gap-6 justify-center">
              {[
                { id: "timeline-section", label: "Journey", color: "#B8AFA2" },
                { id: "projects-section", label: "Projects", color: "#E8E2D8" },
                { id: "skills-section", label: "Core Index" },
                { id: "experience-section", label: "Experience", color: "[#B7C7D9" },
                { id: "certifications-section", label: "Credentials", color: "#C9BDD9" },
                { id: "contact-section", label: "Connect", color: "#CFC4A1" },
              ].map(sec => (
                <button
                  key={sec.id}
                  onClick={() => jumpToSection(sec.id)}
                  className="text-xs font-normal transition-colors cursor-pointer select-none font-sans relative group py-1 animate-fadeIn"
                >
                  <span style={sec.color ? { color: sec.color } : undefined} className={!sec.color ? "text-neutral-500 dark:text-[#B8B8B8] hover:text-neutral-900 dark:hover:text-[#F5F5F5]" : "opacity-85 hover:opacity-100 transition-opacity"}>
                    {sec.label}
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-neutral-900 dark:bg-[#F5F5F5] transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </nav>

            {/* Floating theme switch buttons */}
            <div className="flex items-center gap-3">
              <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
              
              <button
                id="header-cv-btn"
                onClick={() => setIsResumeOpen(true)}
                className="hidden sm:inline-flex items-center gap-1 px-4 py-1.5 rounded-full text-xs font-sans font-medium bg-neutral-900 dark:bg-[#F5F5F5] text-neutral-50 dark:text-neutral-950 hover:scale-[1.03] active:scale-[0.97] hover:bg-neutral-800 dark:hover:bg-white transition-all cursor-pointer shadow-sm border border-neutral-950 dark:border-white/10"
              >
                <span>Resume PDF</span>
              </button>
            </div>
          </div>
        </header>

        {/* Spacer to push content under sticky top */}
        <div className="h-[95px] w-full" />

        {/* MAIN BODY SECTIONS WRAPPER */}
        <main className="relative z-10 w-full">
          {/* Section 01: Hero and Title Core Greeting */}
          <Hero onOpenResume={() => setIsResumeOpen(true)} />

          {/* Section 02: Cinematic Scroll-Node Timeline */}
          <Timeline />

          {/* Section 03: Interactive Projects Showcase Selector */}
          <Projects onSelectProject={(project) => setSelectedProject(project)} onHoverProject={(id) => setHoveredProjectId(id || "alphacross")} />

          {/* Section 04: Grouped Explored Skills Grid */}
          <Skills />

          {/* Section 05: Editorial Career Experience */}
          <Experience />

          {/* Section 06: Verified academic certifications listings */}
          <Certifications />

          

          {/* Section 08: Unified Social Interface Footer */}
          <Contact onOpenResume={() => setIsResumeOpen(true)} />
        </main>

        {/* MODAL PORTALS & ANIMATION OVERLAYS */}
        
        {/* Full-screen Academic CV Viewer */}
        <ResumeViewer isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

        {/* Real-time Case Study Simulator Drawer */}
        <CaseStudyModal
          project={selectedProject}
          isOpen={selectedProject !== null}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </div>
  );
}
