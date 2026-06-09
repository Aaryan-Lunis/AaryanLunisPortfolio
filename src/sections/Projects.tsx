import { useState, useEffect } from "react";
import { ArrowRight, CalendarRange, Cpu, LineChart, Film, Activity, Music, Github } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { projectsData, ProjectEntry } from "../data/projects";

interface ProjectsProps {
  onSelectProject: (project: ProjectEntry) => void;
  onHoverProject?: (id: string | null) => void;
}

export default function Projects({ onSelectProject, onHoverProject }: ProjectsProps) {
  const [filterType, setFilterType] = useState<"all" | "ml" | "systems">("all");
  const [hoveredIdx, setHoveredIdx] = useState<string>("alphacross");

  const filteredProjects = projectsData.filter((proj) => {
    if (filterType === "systems")
      return proj.tech.some(
        (t) =>
          t.includes("React") ||
          t.includes("D3") ||
          t.includes("HTML") ||
          t.includes("CSS") ||
          t.includes("WebSockets")
      );
    if (filterType === "ml")
      return proj.tech.some(
        (t) =>
          t.includes("XGBoost") ||
          t.includes("PyTorch") ||
          t.includes("Pandas") ||
          t.includes("Forest") ||
          t.includes("Learn") ||
          t.includes("Transformers") ||
          t.includes("DistilRoBERTa")
      );
    return true;
  });

  useEffect(() => {
    if (filteredProjects.length > 0) {
      const exists = filteredProjects.some((p) => p.id === hoveredIdx);
      if (!exists) {
        const defaultId = filteredProjects[0].id;
        setHoveredIdx(defaultId);
        onHoverProject?.(defaultId);
      }
    }
  }, [filterType, filteredProjects, hoveredIdx, onHoverProject]);

  useEffect(() => {
    onHoverProject?.(hoveredIdx);
  }, [hoveredIdx, onHoverProject]);

  return (
    <section
      id="projects-section"
      className="py-32 px-6 md:px-12 border-t border-neutral-200/30 dark:border-white/5 relative bg-transparent"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-24">
          <div className="space-y-4">
            <span className="font-serif italic text-lg text-neutral-500 dark:text-neutral-450 block font-light">
              Selected Work
            </span>
            <h2 className="text-3xl md:text-5xl font-sans font-semibold tracking-tight text-neutral-900 dark:text-[#F5F5F5]">
              Experience &amp; Milestones
            </h2>
            <p className="text-sm text-neutral-505 dark:text-neutral-400 max-w-md font-sans font-light leading-relaxed">
              Hover over a project to explore its live system visualizer, or click to open the full case study.
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs font-sans border-b border-neutral-200/20 dark:border-white/5 pb-2 shrink-0">
            {[
              { id: "all", label: "All Work" },
              { id: "ml", label: "Intelligence" },
              { id: "systems", label: "Systems & UI" },
            ].map((tab) => (
              <button
                id={`project-filter-${tab.id}`}
                key={tab.id}
                onClick={() => setFilterType(tab.id as any)}
                className={`transition-all cursor-pointer pb-2 relative font-medium ${
                  filterType === tab.id
                    ? "text-neutral-950 dark:text-[#F5F5F5]"
                    : "text-neutral-400 dark:text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-300"
                }`}
              >
                <span>{tab.label}</span>
                {filterType === tab.id && (
                  <motion.span
                    layoutId="activeFilterUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-neutral-900 dark:bg-white"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="divide-y divide-neutral-200/30 dark:divide-white/5">
          {filteredProjects.map((project) => {
            const isActive = hoveredIdx === project.id;
            return (
              <div
                id={`project-card-${project.id}`}
                key={project.id}
                onMouseEnter={() => {
                  setHoveredIdx(project.id);
                  onHoverProject?.(project.id);
                }}
                className="group py-8 md:py-10 transition-all duration-300 relative"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                  {/* Left: project info */}
                  <div
                    onClick={() => onSelectProject(project)}
                    className={`lg:col-span-6 cursor-pointer rounded-xl px-4 transition-all duration-300 border-l-2 ${
                      isActive
                        ? "bg-neutral-150/40 dark:bg-white/[0.015] border-neutral-400 dark:border-neutral-700"
                        : "hover:bg-neutral-150/10 dark:hover:bg-white/[0.003] border-transparent"
                    }`}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start py-4">
                      <div className="md:col-span-3 space-y-1">
                        <span className="font-serif italic text-xl text-neutral-450 dark:text-neutral-500">
                          {project.year}
                        </span>
                        <p className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest block font-medium">
                          {project.status}
                        </p>
                      </div>

                      <div className="md:col-span-9 space-y-3">
                        <div>
                          <h3 className="text-lg md:text-xl font-sans font-semibold text-neutral-900 dark:text-[#F5F5F5] flex items-center gap-2">
                            <span>{project.title}</span>
                            {isActive && (
                              <motion.span
                                layoutId="activeDot"
                                className="w-1.5 h-1.5 rounded-full bg-neutral-800 dark:bg-neutral-300"
                              />
                            )}
                          </h3>
                          <p className="text-xs font-sans font-medium text-neutral-550 dark:text-neutral-455 mt-1 leading-relaxed">
                            {project.tagline}
                          </p>
                        </div>

                        <p className="text-xs text-neutral-600 dark:text-[#B8B8B8] leading-relaxed font-light">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {project.tech.map((tool, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-200/50 dark:bg-white/5 text-neutral-600 dark:text-neutral-400 border border-neutral-300/25 dark:border-white/5"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>

                        <span className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-neutral-900 dark:text-[#F5F5F5] group-hover:translate-x-1 transition-transform pt-1">
                          <span>Open Case Study</span>
                          <ArrowRight className="w-3 h-3 text-neutral-400 dark:text-neutral-500" />
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right: visualizer inline beside project */}
                  <div className="lg:col-span-6">
                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.div
                          key={project.id}
                          initial={{ opacity: 0, x: 12, scale: 0.97 }}
                          animate={{ opacity: 1, x: 0, scale: 1 }}
                          exit={{ opacity: 0, x: 12, scale: 0.97 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="rounded-2xl border border-neutral-250/30 dark:border-white/5 bg-neutral-100/30 dark:bg-[#080808]/75 backdrop-blur-md p-5 select-none overflow-hidden shadow-lg"
                        >
                          <div className="flex items-center justify-between border-b border-neutral-200/40 dark:border-white/5 pb-3 mb-4">
                            <div className="flex items-center gap-2">
                              <Activity className="w-3.5 h-3.5 text-neutral-450 dark:text-neutral-550 animate-pulse" />
                              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                                Live Visualizer
                              </span>
                            </div>
                            <div className="flex items-center gap-1 font-mono text-[9px] text-[#A3A3A3] dark:text-[#525252]">
                              <span className="w-1.5 h-1.5 rounded-full bg-neutral-350 dark:bg-neutral-600 animate-ping" />
                              <span>LIVE</span>
                            </div>
                          </div>
                          <EmbedSimulation indexId={project.id} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                </div>
              </div>
            );
          })}

          {/* GitHub link */}
          <div className="pt-8 pb-2 px-4">
            <a
              href="https://github.com/Aaryan-Lunis?tab=repositories"
              target="_blank"
              referrerPolicy="no-referrer"
              className="inline-flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors group"
            >
              <Github className="w-3.5 h-3.5" />
              <span>View all projects on GitHub</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function EmbedSimulation({ indexId }: { indexId: string }) {
  const [ticks, setTicks] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTicks((prev) => prev + 1);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  if (indexId === "alphacross") {
    return (
      <div className="w-full flex flex-col justify-between space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-medium text-neutral-800 dark:text-neutral-200 inline-flex items-center gap-1">
            <LineChart className="w-3.5 h-3.5 text-neutral-555" />
            <span>ALPHACROSS COHERENCE</span>
          </span>
          <span className="text-[10px] font-mono py-0.5 px-1.5 rounded dark:bg-white/5 bg-neutral-150 text-neutral-500">
            Accuracy: {(78 + Math.sin(ticks * 0.4) * 1.5).toFixed(1)}%
          </span>
        </div>
        <div className="h-28 w-full border border-neutral-250/30 dark:border-white/5 rounded-xl bg-neutral-100/40 dark:bg-black/25 relative overflow-hidden flex items-end">
          <svg className="w-full h-full absolute inset-0 text-neutral-300 dark:text-neutral-800 opacity-60">
            <line x1="0" y1="56" x2="350" y2="56" stroke="currentColor" strokeDasharray="3 3" strokeWidth="1" />
            <path
              d={`M 0 85 Q 70 ${40 + Math.sin(ticks) * 15} 140 ${65 + Math.cos(ticks) * 10} T 280 ${35 - Math.sin(ticks) * 12}`}
              fill="none"
              stroke="rgba(180, 140, 90, 0.7)"
              strokeWidth="2.5"
            />
            <circle cx="210" cy="45" r="5.5" className="fill-amber-500/20 dark:fill-amber-400/20 animate-ping" />
            <circle cx="210" cy="45" r="3" className="fill-amber-600 dark:fill-amber-400" />
          </svg>
          <div className="absolute bottom-2 left-3 font-mono text-[9px] text-neutral-400 dark:text-neutral-600">
            [3-DAY PREDICTIVE HORIZON ACTIVE]
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
          <div className="p-2 border border-neutral-150/40 dark:border-white/5 rounded bg-neutral-100/30 dark:bg-neutral-950/20">
            <span className="text-neutral-450 block pb-0.5">Primary Model</span>
            <span className="text-neutral-800 dark:text-neutral-200 font-medium">XGBoost Classifier</span>
          </div>
          <div className="p-2 border border-neutral-150/40 dark:border-white/5 rounded bg-neutral-100/30 dark:bg-neutral-950/20">
            <span className="text-neutral-450 block pb-0.5">Forecast Window</span>
            <span className="text-neutral-800 dark:text-neutral-200 font-medium">3-Day Horizon</span>
          </div>
        </div>
      </div>
    );
  }

  if (indexId === "habit-mood-tracker") {
    return (
      <div className="w-full flex flex-col justify-between space-y-4">
        <span className="text-xs font-mono font-medium text-neutral-800 dark:text-neutral-200 inline-flex items-center gap-1">
          <CalendarRange className="w-3.5 h-3.5 text-neutral-555" />
          <span>WELLNESS MATRIX</span>
        </span>
        <div className="grid grid-cols-7 gap-1 p-2.5 border border-neutral-250/30 dark:border-white/5 rounded-xl bg-neutral-100/40 dark:bg-black/25">
          {Array.from({ length: 28 }).map((_, i) => {
            const activeCoeff = (i % 3 === 0 ? 0.9 : i % 5 === 0 ? 0.25 : 0.6) + Math.sin(ticks + i) * 0.15;
            return (
              <div
                key={i}
                className="aspect-square rounded-[3px] bg-rose-400/80 dark:bg-rose-500/70 transition-all duration-700"
                style={{ opacity: Math.max(0.12, Math.min(0.95, activeCoeff)) }}
              />
            );
          })}
        </div>
        <div className="flex items-center justify-between text-[10px] font-mono text-neutral-450">
          <span>ML Accuracy:</span>
          <span className="text-neutral-800 dark:text-[#EAEAEA] font-mono font-bold">86%</span>
          <span>Chatbot Relevance:</span>
          <span className="text-neutral-800 dark:text-neutral-200 font-bold">92%</span>
        </div>
      </div>
    );
  }

  if (indexId === "emosound") {
    const emotions = ["Happy", "Calm", "Energetic", "Sad", "Anxious", "Excited"];
    const activeEmotion = emotions[ticks % emotions.length];
    const emotionColors: Record<string, string> = {
      Happy: "text-amber-600 dark:text-amber-400 border-amber-500",
      Calm: "text-emerald-600 dark:text-emerald-400 border-emerald-500",
      Energetic: "text-orange-600 dark:text-orange-400 border-orange-500",
      Sad: "text-blue-600 dark:text-blue-400 border-blue-500",
      Anxious: "text-purple-600 dark:text-purple-400 border-purple-500",
      Excited: "text-pink-600 dark:text-pink-400 border-pink-500",
    };

    return (
      <div className="w-full flex flex-col justify-between space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-medium text-neutral-800 dark:text-neutral-200 inline-flex items-center gap-1">
            <Music className="w-3.5 h-3.5 text-neutral-555" />
            <span>EMOSOUND PIPELINE</span>
          </span>
          <span className="text-[10px] font-mono py-0.5 px-1.5 rounded dark:bg-white/5 bg-neutral-150 text-neutral-500">
            Accuracy: 89%
          </span>
        </div>
        <div className="h-28 w-full border border-neutral-250/30 dark:border-white/5 rounded-xl bg-neutral-100/40 dark:bg-black/25 relative overflow-hidden p-3 flex flex-col justify-between">
          <div className="flex flex-wrap gap-1.5">
            {emotions.map((e) => (
              <span
                key={e}
                className={`text-[9px] font-mono px-1.5 py-0.5 rounded border transition-all duration-500 ${
                  e === activeEmotion
                    ? emotionColors[e]
                    : "text-neutral-400 dark:text-neutral-600 border-neutral-200 dark:border-neutral-800"
                }`}
              >
                {e}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-[9px] font-mono text-neutral-400">Detected:</span>
            <span className={`text-[10px] font-mono font-bold transition-all duration-500 ${emotionColors[activeEmotion]}`}>
              {activeEmotion}
            </span>
            <span className="text-[9px] font-mono text-neutral-400 ml-auto">→ Spotify match</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
          <div className="p-2 border border-neutral-150/40 dark:border-white/5 rounded bg-neutral-100/30 dark:bg-neutral-950/20">
            <span className="text-neutral-450 block pb-0.5">Model</span>
            <span className="text-neutral-800 dark:text-neutral-200 font-medium">DistilRoBERTa</span>
          </div>
          <div className="p-2 border border-neutral-150/40 dark:border-white/5 rounded bg-neutral-100/30 dark:bg-neutral-950/20">
            <span className="text-neutral-450 block pb-0.5">Inference</span>
            <span className="text-neutral-800 dark:text-neutral-200 font-medium">~1.2s</span>
          </div>
        </div>
      </div>
    );
  }

  // Fallback: box-office-revenue
  return (
    <div className="w-full flex flex-col justify-between space-y-4">
      <span className="text-xs font-mono font-medium text-neutral-800 dark:text-neutral-200 inline-flex items-center gap-1">
        <Film className="w-3.5 h-3.5 text-neutral-555" />
        <span>REVENUE PREDICTION MODEL</span>
      </span>
      <div className="h-28 w-full border border-neutral-250/30 dark:border-white/5 rounded-xl bg-neutral-100/40 dark:bg-black/25 relative overflow-hidden flex items-end px-3 pb-3">
        <div className="w-full flex items-end gap-1 h-full">
          {Array.from({ length: 16 }).map((_, i) => {
            const h = 30 + Math.abs(Math.sin((i + ticks * 0.3) / 2)) * 65;
            return (
              <div
                key={i}
                className="flex-1 bg-neutral-300 dark:bg-neutral-700 rounded-sm transition-all duration-700"
                style={{ height: `${h}%` }}
              />
            );
          })}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
        <div className="p-2 border border-neutral-150/40 dark:border-white/5 rounded bg-neutral-100/30 dark:bg-neutral-950/20">
          <span className="text-neutral-450 block pb-0.5">R² Score</span>
          <span className="text-neutral-800 dark:text-neutral-200 font-medium">0.77</span>
        </div>
        <div className="p-2 border border-neutral-150/40 dark:border-white/5 rounded bg-neutral-100/30 dark:bg-neutral-950/20">
          <span className="text-neutral-450 block pb-0.5">Dataset</span>
          <span className="text-neutral-800 dark:text-neutral-200 font-medium">4,880 Films</span>
        </div>
      </div>
    </div>
  );
}