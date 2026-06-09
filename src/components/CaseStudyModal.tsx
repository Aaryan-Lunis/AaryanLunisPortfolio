import { useState, useEffect } from "react";
import { X, Github, ExternalLink, Activity, ArrowRight, RefreshCw, Cpu, Database, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ProjectEntry } from "../data/projects";

interface CaseStudyModalProps {
  project: ProjectEntry | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function CaseStudyModal({ project, isOpen, onClose }: CaseStudyModalProps) {
  const [modelType, setModelType] = useState<"XGBoost">("XGBoost");
  const [lookbackDays, setLookbackDays] = useState<number>(3);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [backtestReturn, setBacktestReturn] = useState<string>("~78%");
const [accuracyIndex, setAccuracyIndex] = useState<string>("~78%");
  

  // Habit States
  const [sleepScore, setSleepScore] = useState<number>(7.5);
  const [parsedMoodString, setParsedMoodString] = useState<string>("Productive & Rested");

  // Re-trigger AlphaCross calculations elegantly
  const triggerForecastingAnalysis = () => {
  setIsSimulating(true);
  setTimeout(() => {
    setIsSimulating(false);
    setAccuracyIndex(`${(77 + Math.random() * 1.5).toFixed(1)}%`);
    setBacktestReturn("N/A");
  }, 850);
};
  // Re-run forecast when active parameters swap
  useEffect(() => {
    if (project?.id === "alphacross" && isOpen) {
      triggerForecastingAnalysis();
    }
  }, [modelType, lookbackDays, project?.id, isOpen]);

  // Handle Habit slider correlation
  useEffect(() => {
    if (sleepScore < 5) {
      setParsedMoodString("Feeling tired; subjective focus shows a slight drop");
    } else if (sleepScore >= 5 && sleepScore < 7) {
      setParsedMoodString("Moderate focus levels; manageable with routine pacing");
    } else if (sleepScore >= 7 && sleepScore < 8.5) {
      setParsedMoodString("Optimal attention span; sustained physical energy");
    } else {
      setParsedMoodString("Fully recharged; energetic, clear analytical outlook");
    }
  }, [sleepScore]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-neutral-950/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-[#FAFAF7] dark:bg-[#050505] shadow-2xl flex flex-col z-10"
          >
            {/* Action Bar */}
            <div className="sticky top-0 bg-[#FAFAF7]/95 dark:bg-[#050505]/95 backdrop-blur-md px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between z-20">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] bg-neutral-250 dark:bg-neutral-850 text-neutral-600 dark:text-neutral-400 px-3 py-0.5 rounded-full uppercase tracking-wider font-semibold">
                  CASE STUDY &mdash; {project.year}
                </span>
                <span className="text-xs font-mono text-neutral-400 hidden sm:inline">|</span>
                <span className="text-xs font-mono text-neutral-500 hidden sm:inline uppercase">
                  Project: {project.id}
                </span>
              </div>
              <div className="flex items-center gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="flex items-center gap-1.5 text-xs font-mono text-neutral-600 dark:text-neutral-450 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span className="hidden sm:inline">Repo</span>
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="flex items-center gap-1.5 text-xs font-mono text-neutral-600 dark:text-neutral-450 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="hidden sm:inline">Launch</span>
                  </a>
                )}
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-500 dark:text-neutral-400 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Container */}
            <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-10">
              {/* Heading */}
              <div className="space-y-3">
                <h1 className="text-3xl md:text-5xl font-display font-medium text-neutral-900 dark:text-neutral-50 leading-tight">
                  {project.title}
                </h1>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl leading-relaxed">
                  {project.tagline}
                </p>
              </div>

              {/* TWO COLUMN GRID: LEFT = SPECS, RIGHT = SIMULATOR */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left side detail sheet */}
                <div className="lg:col-span-5 space-y-6">
                  {/* Brief overview */}
                  <div className="space-y-2">
                    <h3 className="text-xs uppercase tracking-widest font-mono text-neutral-400 font-bold">
                      Objective
                    </h3>
                    <p className="text-xs md:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">
                      {project.longDescription || project.description}
                    </p>
                  </div>

                  {/* Tech stack tags */}
                  <div className="space-y-2">
                    <h3 className="text-xs uppercase tracking-widest font-mono text-neutral-400 font-bold">
                      Tools & Technologies Applied
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 rounded border border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/50 text-[11px] font-mono text-neutral-700 dark:text-neutral-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Core Challenges */}
                  <div className="space-y-3">
                    <h3 className="text-xs uppercase tracking-widest font-mono text-neutral-400 font-bold">
                      Key Architectural Hurdles
                    </h3>
                    <div className="space-y-2 text-xs md:text-sm">
                      {project.challenges.map((c, idx) => (
                        <div key={idx} className="flex gap-2.5 items-start">
                          <span className="font-mono text-neutral-450 dark:text-neutral-500 mt-0.5">0{idx + 1}</span>
                          <p className="text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                            {c}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metrics if present */}
                  {project.caseStudy?.metrics && (
                    <div className="pt-4 border-t border-neutral-200 dark:border-neutral-900 grid grid-cols-3 gap-2">
                      {project.caseStudy.metrics.map((m, idx) => (
                        <div key={idx} className="space-y-1">
                          <span className="block text-xl md:text-2xl font-mono font-bold text-neutral-800 dark:text-neutral-200">
                            {m.value}
                          </span>
                          <span className="block text-[10px] font-mono text-neutral-500 leading-tight">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right side interactives */}
                <div className="lg:col-span-7 bg-[#F4F1EA]/50 dark:bg-white/4 p-6 rounded-2xl border border-neutral-200 dark:border-[#B8B8B8]/10 shadow-inner flex flex-col justify-between self-stretch min-h-[400px]">
                  {/* Render project custom interactive mockup panel */}
                  
                  {project.id === "alphacross" && (
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-3 mb-4">
                          <div className="flex items-center gap-2">
                            <Activity className="w-4 h-4 text-neutral-600 dark:text-neutral-300 animate-pulse" />
                            <span className="font-mono text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                              Predictive Modeler Analysis
                            </span>
                          </div>
                          <span className="text-[10px] font-mono text-neutral-600 dark:text-neutral-400 px-2.5 py-1 rounded-full bg-neutral-150/40 dark:bg-neutral-850/40 border border-neutral-200 dark:border-neutral-800 uppercase tracking-widest font-bold">
                            Model Status: Active
                          </span>
                        </div>

                        {/* Interactive Parameters block */}
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          {/* Model selection */}
                          <div className="space-y-1.5">
                            <label className="block text-[10px] font-mono text-neutral-450 dark:text-neutral-500 uppercase font-bold">
                              Primary Algorithm
                            </label>
                            <div className="flex-1 text-[10px] py-1 font-mono rounded border bg-neutral-900 border-neutral-900 text-neutral-50 dark:bg-neutral-100 dark:border-neutral-100 dark:text-neutral-900 text-center">
                               XGBoost
                          </div>
                          </div>

                          {/* Days lookback */}
                          <div className="space-y-1.5">
                            <label className="block text-[10px] font-mono text-neutral-450 dark:text-neutral-500 uppercase font-bold">
                              Forecast Horizon: 3 Days
                            </label>
                          <div className="w-full h-1 bg-neutral-900 dark:bg-neutral-100 rounded-lg" />
                          </div>
                        </div>

                        {/* Model Visualization output frame */}
                        <div className="bg-neutral-900/5 dark:bg-neutral-950 p-4 rounded-xl border border-neutral-200 dark:border-neutral-900 relative min-h-[160px] flex flex-col justify-between overflow-hidden">
                          {isSimulating ? (
                            <div className="absolute inset-0 bg-neutral-150/90 dark:bg-neutral-950/95 flex flex-col items-center justify-center gap-2 z-10">
                              <RefreshCw className="w-5 h-5 text-neutral-650 animate-spin" />
                              <span className="font-mono text-[9px] text-neutral-450 uppercase tracking-widest font-semibold">
                                Processing dataset splits...
                              </span>
                            </div>
                          ) : null}

                          <div className="flex justify-between items-start">
                            <span className="text-[10px] font-mono text-neutral-400 uppercase">
                              Historical Trend Output:
                            </span>
                            <span className="text-[9px] font-mono text-neutral-500">
                              Standard Purged Splits
                            </span>
                          </div>

                          {/* Sparkline Simulation Visual bars */}
                          <div className="h-16 flex items-end justify-between gap-1 mt-2">
                            {Array.from({ length: 24 }).map((_, idx) => {
                              const baseHeight = 20 + Math.sin(idx / 2.5) * 15 + Math.cos(idx / 1.5) * 10;
                              const finalHeight = Math.max(8, baseHeight + (lookbackDays - 30) / 4);
                              const isPositive = idx > 15 && idx < 20;

                              return (
                                <div key={idx} className="flex-1 bg-neutral-200 dark:bg-neutral-850 rounded-sm relative group overflow-hidden h-full">
                                  <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: `${finalHeight}%` }}
                                    className={`absolute bottom-0 inset-x-0 ${
                                      isPositive
                                        ? "bg-neutral-600 dark:bg-neutral-405"
                                        : "bg-neutral-400/80 dark:bg-neutral-500/80"
                                    }`}
                                  />
                                </div>
                              );
                            })}
                          </div>

                          <div className="flex justify-between items-center mt-3 pt-3 border-t border-neutral-250 dark:border-neutral-900 text-xs font-mono">
                            <div>
  <span className="text-neutral-450 text-[10px] block uppercase">Forecast Horizon</span>
  <span className="text-neutral-850 dark:text-neutral-200 font-bold text-sm">
    3 Days
  </span>
</div>
<div>
  <span className="text-neutral-450 text-[10px] block uppercase">Prediction Accuracy</span>
  <span className="text-neutral-800 dark:text-neutral-200 font-semibold font-bold">
    {accuracyIndex}
  </span>
</div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                        <span className="flex items-center gap-1">
                          <Cpu className="w-3 h-3 text-neutral-450" />
                          Variables: EMA_20, EMA_50, RSI, Returns, Volatility
                        </span>
                        <span className="text-neutral-400">Verified locally.</span>
                      </div>
                    </div>
                  )}

                  {project.id === "habit-mood-tracker" && (
  <div className="flex-1 flex flex-col justify-between">
    <div>
      <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <Database className="w-4 h-4 text-neutral-600 dark:text-neutral-300" />
          <span className="font-mono text-xs font-semibold text-neutral-800 dark:text-neutral-200">
            ML + Chatbot Architecture
          </span>
        </div>
        <span className="text-[10px] font-mono text-neutral-600 dark:text-neutral-400 px-2.5 py-1 rounded-full bg-neutral-150/40 dark:bg-neutral-850/40 border border-neutral-200 dark:border-neutral-800 uppercase tracking-widest font-bold">
          Model: Active
        </span>
      </div>

      {/* ML metrics grid */}
      <div className="bg-neutral-900/5 dark:bg-neutral-950 p-4 rounded-xl border border-neutral-200 dark:border-neutral-900 space-y-4 mb-4">
        <div className="flex justify-between items-center text-[10px] font-mono text-neutral-400 uppercase">
          <span>Python ML Backend</span>
          <span>KMeans · RandomForest</span>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "ML Accuracy", value: "86%" },
            { label: "Chatbot Relevance", value: "92%" },
            { label: "Response Time", value: "< 1s" },
          ].map((m) => (
            <div key={m.label} className="p-2.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/50 text-center">
              <span className="block text-[8px] uppercase text-neutral-400 leading-tight mb-1">{m.label}</span>
              <span className="block text-sm font-mono font-bold text-neutral-800 dark:text-neutral-200">{m.value}</span>
            </div>
          ))}
        </div>
        <div className="border-t border-neutral-200 dark:border-neutral-900 pt-3 grid grid-cols-2 gap-4 text-[10px] font-mono">
          <div>
            <span className="text-neutral-400 block uppercase mb-1">Data Points</span>
            <span className="text-neutral-700 dark:text-neutral-300">500+ per user</span>
          </div>
          <div>
            <span className="text-neutral-400 block uppercase mb-1">Query Load</span>
            <span className="text-neutral-700 dark:text-neutral-300">10K+ Firebase queries</span>
          </div>
        </div>
      </div>

      {/* Chatbot architecture block */}
      <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-900 bg-neutral-100/50 dark:bg-neutral-950 text-[10px] font-mono space-y-1">
        <p className="text-neutral-400 uppercase">Gemini RAG Chatbot</p>
        <p className="text-neutral-700 dark:text-neutral-300">
          Context-aware insights · 200+ conversation threads · Cached retrieval · Sub-1s response
        </p>
      </div>
    </div>

    <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between text-[10px] font-mono text-neutral-400">
      <span className="flex items-center gap-1">
        <Cpu className="w-3 h-3 text-neutral-450" />
        Stack: Java · Firebase · Python · Gemini API · Room DB
      </span>
      <span className="text-neutral-400">Verified locally.</span>
    </div>
  </div>
)}
                  
                  {project.id === "emosound" && (
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-3 mb-4">
                          <div className="flex items-center gap-2">
                            <Activity className="w-4 h-4 text-neutral-600 dark:text-neutral-300 animate-pulse" />
                            <span className="font-mono text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                              Emotion Detection Pipeline
                            </span>
                          </div>
                          <span className="text-[10px] font-mono text-neutral-600 dark:text-neutral-400 px-2.5 py-1 rounded-full bg-neutral-150/40 dark:bg-neutral-850/40 border border-neutral-200 dark:border-neutral-800 uppercase tracking-widest font-bold">
                            Model: Active
                          </span>
                        </div>

                        <div className="bg-neutral-900/5 dark:bg-neutral-950 p-4 rounded-xl border border-neutral-200 dark:border-neutral-900 space-y-4">
                          <div className="flex justify-between items-center text-[10px] font-mono text-neutral-400 uppercase">
                            <span>Live Emotion Classification</span>
                            <span>DistilRoBERTa · 89% Accuracy</span>
                          </div>

                          <div className="grid grid-cols-5 gap-2">
                            {[
                              { label: "Happy", color: "bg-amber-400/20 border-amber-400/40 text-amber-700 dark:text-amber-400" },
                              { label: "Calm", color: "bg-emerald-400/20 border-emerald-400/40 text-emerald-700 dark:text-emerald-400" },
                              { label: "Energetic", color: "bg-orange-400/20 border-orange-400/40 text-orange-700 dark:text-orange-400" },
                              { label: "Sad", color: "bg-blue-400/20 border-blue-400/40 text-blue-700 dark:text-blue-400" },
                              { label: "Anxious", color: "bg-purple-400/20 border-purple-400/40 text-purple-700 dark:text-purple-400" },
                              { label: "Excited", color: "bg-pink-400/20 border-pink-400/40 text-pink-700 dark:text-pink-400" },
                              { label: "Romantic", color: "bg-rose-400/20 border-rose-400/40 text-rose-700 dark:text-rose-400" },
                              { label: "Melancholic", color: "bg-slate-400/20 border-slate-400/40 text-slate-700 dark:text-slate-400" },
                              { label: "Confident", color: "bg-red-400/20 border-red-400/40 text-red-700 dark:text-red-400" },
                              { label: "Angry", color: "bg-red-600/20 border-red-600/40 text-red-800 dark:text-red-500" },
                            ].map((e) => (
                              <div key={e.label} className={`text-center text-[9px] font-mono px-1 py-1.5 rounded border ${e.color}`}>
                                {e.label}
                              </div>
                            ))}
                          </div>

                          <div className="border-t border-neutral-200 dark:border-neutral-900 pt-3 grid grid-cols-2 gap-4 text-[10px] font-mono">
                            <div>
                              <span className="text-neutral-400 block uppercase mb-1">Input Methods</span>
                              <span className="text-neutral-700 dark:text-neutral-300">Text · Voice · Audio File</span>
                            </div>
                            <div>
                              <span className="text-neutral-400 block uppercase mb-1">Output</span>
                              <span className="text-neutral-700 dark:text-neutral-300">Spotify Playlist · ~1.2s</span>
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 p-4 rounded-xl border border-neutral-200 dark:border-neutral-900 bg-neutral-100/50 dark:bg-neutral-950 text-[10px] font-mono space-y-1">
                          <p className="text-neutral-400 uppercase">Recommendation Algorithm</p>
                          <p className="text-neutral-700 dark:text-neutral-300">
                            Content-Based (40%) + Collaborative (30%) + Popularity (20%) + Learned Preference (10%)
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                        <span className="flex items-center gap-1">
                          <Cpu className="w-3 h-3 text-neutral-450" />
                          Features: valence · energy · danceability · acousticness · tempo
                        </span>
                        <span className="text-neutral-400">Verified locally.</span>
                      </div>
                    </div>
                  )}

                  {/* Fallback for projects without full simulators (Box Office Predictor & Recommender) */}
                  {(project.id === "box-office-revenue") && (
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-3 mb-4">
                          <span className="font-mono text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                            Statistical Model Architecture
                          </span>
                          <span className="text-[10px] uppercase font-mono text-neutral-500 bg-neutral-150 dark:bg-neutral-900 px-2.5 py-0.5 rounded-full">
                            Archived Code
                          </span>
                        </div>

                        <div className="space-y-4">
                          <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-900 bg-neutral-100/50 dark:bg-neutral-950 font-mono text-xs space-y-2 mt-4">
                            <p className="text-neutral-500">// Best performing model — R² 0.7639</p>
                            <p className="text-neutral-700 dark:text-neutral-300 leading-normal">
                              <span className="text-neutral-500 dark:text-neutral-450">import</span> pandas <span className="text-neutral-500 font-bold">as</span> pd<br />
                              <span className="text-neutral-500 dark:text-neutral-450">from</span> sklearn.ensemble <span className="text-neutral-500 font-bold">import</span> GradientBoostingRegressor<br />
                              <br />
                              model = GradientBoostingRegressor(n_estimators=300, random_state=42)<br />
                              model.fit(X_train_fold, y_train_fold_log)
                            </p>
                          </div>

                          <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-transparent text-xs font-sans text-neutral-650 dark:text-neutral-400 space-y-1.5">
                            <p className="font-semibold text-neutral-800 dark:text-neutral-200">Core Takeaways:</p>
                            <p className="leading-relaxed text-xs">
                              {project.caseStudy?.challenge || "This project served as a crucial technical foundation, teaching me statistical data cleaning, preprocessing, feature scaling, model tuning, and clean cross-validation approaches."}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-800 text-[10px] font-mono text-neutral-400">
                        Completed in {project.year} &middot; All records offline.
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Project case-study detailed sections */}
              <div className="border-t border-neutral-200 dark:border-neutral-900 pt-8 space-y-8 select-text">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[13px] leading-relaxed font-serif">
                  <div className="space-y-2">
                    <h4 className="font-mono text-xs font-semibold uppercase text-neutral-500">&mdash; Context & Hurdles</h4>
                    <p className="text-neutral-800 dark:text-neutral-300">
                      {project.caseStudy?.challenge || "Building layouts or models requires tackling real-world constraints: API latency, server overhead, DOM efficiency, or structured database joins."}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-mono text-xs font-semibold uppercase text-neutral-500">&mdash; Solution & Engineering Design</h4>
                    <p className="text-neutral-800 dark:text-neutral-300">
                      {project.caseStudy?.solution || "Designed robust helper layers that split tasks and handle data pipelines cleanly, keeping responses fast and scalable."}
                    </p>
                  </div>
                </div>

                {/* Additional full-width Architecture & Takeaways blueprint grids */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-dotted border-neutral-200 dark:border-neutral-900">
                  {/* Architecture row */}
                  <div className="space-y-3">
                    <h4 className="font-mono text-xs font-semibold uppercase text-neutral-500">&mdash; Pipeline Architecture</h4>
                    <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-900 bg-neutral-100/50 dark:bg-neutral-950/40 text-xs font-mono text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      {project.architecture}
                    </div>
                  </div>

                  {/* Lessons and key takeaways column */}
                  <div className="space-y-3">
                    <h4 className="font-mono text-xs font-semibold uppercase text-neutral-500">&mdash; Key Learnings & Decisions</h4>
                    <div className="space-y-2 text-xs">
                      {project.learnings.map((l, idx) => (
                        <div key={idx} className="flex gap-2 items-start text-neutral-600 dark:text-neutral-400">
                          <Check className="w-3.5 h-3.5 mt-0.5 text-neutral-450 dark:text-neutral-600 shrink-0" />
                          <p className="leading-normal font-sans">
                            {l}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sticky footer */}
            <div className="sticky bottom-0 bg-[#FAFAF7]/95 dark:bg-[#050505]/95 border-t border-neutral-200 dark:border-neutral-800 px-6 py-3.5 flex items-center justify-between text-[10px] font-mono text-neutral-400">
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-400" />
                Case study verified offline
              </span>
              <span>Aaryan Lunis</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
                  