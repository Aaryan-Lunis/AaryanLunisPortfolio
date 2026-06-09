import { X, Download, Mail, Linkedin, Github, Award } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ResumeViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeViewer({ isOpen, onClose }: ResumeViewerProps) {
  const resumeUrl = "/AaryanLunisPortfolio/AaryanLunis____resume.pdf";
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-4xl max-h-[88vh] overflow-hidden rounded-2xl bg-[#0C0C0A] border border-[#222220] shadow-2xl flex flex-col z-10"
            style={{ fontFamily: "'SF Pro Displays', sans-serif" }}
          >
            {/* ── HEADER ── */}
            <div className="sticky top-0 z-10 bg-[#FEFEFE] border-b border-[#120101] px-8 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#C8A96E] animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.16em] text-[#0C0C0A]">
                  Aaryan Lunis — Resume
                </span>
              </div>
              <div className="flex items-center gap-3">
                <a
                   href={resumeUrl}
                   download="AaryanLunis_Resume.pdf"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-[11px] tracking-wide bg-[#C8A96E] text-[#0C0C0A] font-medium hover:bg-[#D4B97E] transition-colors"
            >
                  <Download className="w-3.5 h-3.5" />
                  Download PDF
                </a>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg text-[#4A4540] hover:text-[#E8E2D9] hover:bg-[#1A1A18] transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* ── BODY ── */}
            <div className="flex-1 overflow-y-auto px-10 py-10 space-y-10 select-text">

              {/* NAME + CONTACT */}
              <div className="flex flex-col md:flex-row justify-between items-start gap-6 pb-8 border-b border-[#1E1E1C]">
                <div>
                  <h1
                    className="text-[42px] font-light tracking-[-0.03em] text-[#F0EAE0] leading-none"
                    style={{ fontFamily: "'SF Pro Display', serif" }}
                  >
                    Aaryan Lunis
                  </h1>
                  <p className="text-[13px] text-[#FFFFFF] mt-2 tracking-[0.06em] uppercase">
                    AI Engineer &amp; ML Systems Builder
                  </p>
                </div>
                <div className="flex flex-col items-start md:items-end gap-2 text-[12px] text-[#FFFFFF]">
                  <span className="flex items-center gap-2 hover:text-[#C8A96E] transition-colors">
                    <Mail className="w-3.5 h-3.5" /> lunisaaryan@gmail.com
                  </span>
                  <span className="flex items-center gap-2 hover:text-[#C8A96E] transition-colors">
                    <Github className="w-3.5 h-3.5" /> github.com/Aaryan-Lunis
                  </span>
                  <span className="flex items-center gap-2 hover:text-[#C8A96E] transition-colors">
                    <Linkedin className="w-3.5 h-3.5" /> linkedin.com/in/aaryan-lunis
                  </span>
                </div>
              </div>

              {/* ── EDUCATION ── */}
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#FFFFFF] border-b border-[#1E1E1C] pb-3">
                  Education
                </p>
                {[
                  {
                    school: "SVKM's NMIMS — Mukesh Patel School of Technology Management & Engineering",
                    degree: "Bachelor of Technology (B.Tech) · Computer Engineering",
                    period: "2024 — 2027",
                    grade: "CGPA 3.48 / 4.00",
                    note: "Data Structures · DBMS · Machine Learning · Data Analytics",
                    tags: ["Machine Learning", "SQL", "Applied AI"],
                  },
                  {
                    school: "SVKM's NMIMS — Mukesh Patel School of Technology Management & Engineering",
                    degree: "Diploma · Computer Engineering",
                    period: "2021 — 2024",
                    grade: "CGPA 3.23 / 4.00",
                    note: "Programming Fundamentals · Computer Systems · Industry Coursework",
                    tags: ["Python", "HTML5"],
                  },
                  {
                    school: "St. Francis ICSE School",
                    degree: "Indian Certificate of Secondary Education (ICSE)",
                    period: "2009 — 2021",
                    grade: "Grade: 93",
                    note: "",
                    tags: ["Time Management", "Team Leadership"],
                  },
                ].map((e, i, arr) => (
                  <div key={i} className={`py-6 ${i < arr.length - 1 ? "border-b border-[#181816]" : ""}`}>
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <h3
                        className="text-[20px] font-light text-[#E8E2D9] leading-tight tracking-[-0.01em]"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {e.school}
                      </h3>
                      <span className="text-[13px] text-[#FFFFFF] whitespace-nowrap tracking-[0.04em] mt-1">
                        {e.period}
                      </span>
                    </div>
                    <p className="text-[12px] text-[#8A837A] mb-2">{e.degree}</p>
                    <div className="flex items-center gap-4 flex-wrap">
                      <span className="text-[11px] font-medium text-[#C8A96E] tracking-[0.04em]">{e.grade}</span>
                      {e.note && <span className="text-[12px] text-[#FCFBFC] italic">{e.note}</span>}
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {e.tags.map((t) => (
                        <span key={t} className="text-[10px] uppercase tracking-[0.06em] px-2 py-[3px] border border-[#2A2820] text-[#6A6460] rounded-sm">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* ── EXPERIENCE ── */}
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#FFFFFF] border-b border-[#1E1E1C] pb-3">
                  Experience
                </p>
                {[
                  {
                    company: "Finifi",
                    role: "AI Development & Engineering Intern",
                    period: "May 2026 — Aug 2026",
                    bullets: [
                      "Developed NLP classification and OCR post-processing pipelines for invoice and PO workflows, improving document routing accuracy across enterprise P2P systems.",
                      "Built ML inference services via REST APIs enabling real-time document intelligence in ERP-integrated finance workflows.",
                      "Designed preprocessing pipelines for structured and unstructured financial data, standardizing datasets for downstream model training and validation.",
                    ],
                  },
                  {
                    company: "Suvidha Foundation",
                    role: "Machine Learning Research Intern",
                    period: "Aug 2025 — Oct 2025",
                    bullets: [
                      "Researched and optimized transformer attention mechanisms for emergent language modeling within cognitive AI project \"NeuroGenesisLM,\" achieving 18% improvement in syntactic accuracy over baseline.",
                      "Built modular utilities for processing academic documents into searchable vector formats for faster retrieval workflows.",
                      "Conducted comparative experiments across model configurations to analyze response accuracy and error behavior.",
                    ],
                  },
                  {
                    company: "JSH Architects",
                    role: "Web Architecture Intern",
                    period: "May 2024 — Jul 2024",
                    bullets: [
                      "Developed responsive portfolio pages for architectural projects, focusing on clean layouts, performance, and cross-device accessibility.",
                      "Optimized media assets and page structures to improve loading speed and Lighthouse performance metrics.",
                    ],
                  },
                ].map((e, i, arr) => (
                  <div key={i} className={`py-6 ${i < arr.length - 1 ? "border-b border-[#181816]" : ""}`}>
                    <div className="flex justify-between items-start gap-4 mb-1.5">
                      <div>
                        <h3 className="text-[16px] font-medium text-[#E8E2D9] tracking-[-0.01em]">{e.company}</h3>
                        <p className="text-[11px] text-[#C8A96E] tracking-[0.04em] uppercase mt-0.5">{e.role}</p>
                      </div>
                      <span className="text-[13px] text-[#FFFFFF] whitespace-nowrap tracking-[0.04em] mt-1">
                        {e.period}
                      </span>
                    </div>
                    <ul className="mt-3 space-y-2">
                      {e.bullets.map((b, j) => (
                        <li key={j} className="flex gap-3 text-[13px] text-[#9A9490] leading-relaxed">
                          <span className="text-[#C8A96E] mt-[3px] shrink-0">—</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* ── PROJECTS ── */}
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#FFFFFF] border-b border-[#1E1E1C] pb-3">
                  Key Projects
                </p>
                {[
                  {
                    name: "AlphaCross — AI Trading Signal Analyzer",
                    year: "2025",
                    badge: "Data Mavericks Hackathon Winner",
                    desc: "End-to-end trading signal platform for NSE 500 stocks. XGBoost classifier predicts bullish/bearish crossovers within a 3-day horizon at ~78% accuracy. FastAPI backend with EMA-based backtesting engine and integrated GenAI chatbot for contextual market explanations.",
                  },
                  {
                    name: "Box Office Revenue Prediction",
                    year: "2025",
                    badge: "Published at DACS 2025",
                    desc: "ML ensemble pipeline predicting revenue for 4,880 films across 15+ features. Tuned XGBoost achieved R² = 0.77, MAE $43.9M. Streamlit dashboard with 100+ live predictions, reducing analysis time 60%.",
                  },
                ].map((p, i, arr) => (
                  <div key={i} className={`py-6 ${i < arr.length - 1 ? "border-b border-[#181816]" : ""}`}>
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <h3 className="text-[15px] font-medium text-[#E8E2D9] tracking-[-0.01em]">{p.name}</h3>
                      <span className="text-[13px] text-[#FFFFFF] whitespace-nowrap tracking-[0.04em]">{p.year}</span>
                    </div>
                    <span className="inline-block text-[10px] uppercase tracking-[0.08em] px-2.5 py-1 bg-[#C8A96E]/10 text-[#C8A96E] border border-[#C8A96E]/20 rounded-sm mb-3">
                      {p.badge}
                    </span>
                    <p className="text-[13px] text-[#9A9490] leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>

              {/* ── TECHNICAL CORE ── */}
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#4A4540] border-b border-[#1E1E1C] pb-3 mb-6">
                  Technical Core
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.1em] text-[#C8A96E] mb-2">// Machine Learning & AI</p>
                    <p className="text-[12px] text-[#9A9490] leading-relaxed">
                      PyTorch · XGBoost · TensorFlow · Scikit-Learn · Transformers · LangChain · RAG · NLP · LSTM
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.1em] text-[#C8A96E] mb-2">// Systems & Software</p>
                    <p className="text-[12px] text-[#9A9490] leading-relaxed">
                      Python · SQL · C++ · Java · JavaScript · React · FastAPI · Streamlit · Firebase · Pandas · NumPy
                    </p>
                  </div>
                </div>
              </div>

              {/* ── ACHIEVEMENTS ── */}
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#4A4540] border-b border-[#1E1E1C] pb-3 mb-6">
                  Achievements
                </p>
                <div className="space-y-4">
                  {[
                    { title: "IEEE Published Researcher", sub: "DACS 2025 & OTCON 2026 Conference" },
                    { title: "1st Place — Data Mavericks Hackathon", sub: "2025" },
                    { title: "Top 10 / 500 — Analytika Datathon", sub: "2025" },
                  ].map((a, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Award className="w-4 h-4 text-[#C8A96E] shrink-0" />
                      <span className="text-[13px] font-medium text-[#E8E2D9]">{a.title}</span>
                      <span className="text-[13px] text-[#FCFBFC]">— {a.sub}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* ── FOOTER ── */}
            <div className="sticky bottom-0 bg-[#0C0C0A] border-t border-[#1E1E1C] py-3 text-center">
              <span className="text-[10px] uppercase tracking-[0.12em] text-[#FFFFFF]">
                Aaryan Lunis — AI Engineer & ML Systems Builder
              </span>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}