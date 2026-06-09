import { motion } from "motion/react";
import { experienceData } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience-section" className="py-32 px-6 md:px-12 relative border-t border-neutral-200/50 dark:border-white/5 bg-[#FAFAF7] dark:bg-[#050505] transition-colors">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-4 mb-24 max-w-xl"
        >
          <span className="font-serif italic text-lg text-neutral-500 dark:text-neutral-400 block font-light">
            Experience
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-semibold tracking-tight text-neutral-900 dark:text-[#F5F5F5]">
            Experience &amp; Milestones
          </h2>
          <p className="text-sm md:text-base text-neutral-600 dark:text-[#B8B8B8] leading-relaxed font-light">
            Selected internships and student leadership positions exploring analytical models, architectural web design, and functional team alignment.
          </p>
        </motion.div>

        {/* Vertical Stack - Narrative Journal format */}
        <div className="space-y-24 md:space-y-32">
          {experienceData.map((exp, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative"
            >
              
              {/* Left sidebar info (Role, company, period) */}
              <div className="md:col-span-4 space-y-2">
                <span className="font-serif italic text-sm text-neutral-405 dark:text-neutral-500 block">
                  {exp.period}
                </span>
                <h3 className="text-lg font-sans font-semibold text-neutral-900 dark:text-[#F5F5F5]">
                  {exp.role}
                </h3>
                <p className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  {exp.company}
                </p>
                <div className="text-[11px] text-neutral-400 font-sans font-light">
                  {exp.location}
                </div>
              </div>

              {/* Main content body (Aesthetic quote and bullet impacts) */}
              <div className="md:col-span-8 space-y-6">
                
                {/* Immersive quote/narrative */}
                <p className="text-sm md:text-base text-neutral-700 dark:text-[#EAEAEA] italic font-serif leading-relaxed pl-4 border-l-2 border-neutral-300 dark:border-[#B8B8B8]/35">
                  &ldquo;{exp.narrative}&rdquo;
                </p>

                {/* Substantive outcomes bullet points */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-sans font-medium text-neutral-800 dark:text-neutral-300 uppercase tracking-wider block">
                    Contributions &amp; Actions
                  </span>
                  <ul className="space-y-3.5">
                    {exp.impactPoints.map((point, idx) => (
                      <li key={idx} className="text-sm text-neutral-600 dark:text-[#B8B8B8] leading-relaxed font-light flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-800 mt-2 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical stack & bottom card */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-dotted border-neutral-200 dark:border-white/5">
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-sans font-medium text-neutral-500 dark:text-neutral-400 tracking-wider">Applied Toolkit</span>
                    <div className="flex flex-wrap gap-1">
                      {exp.tech.map((tool) => (
                        <span
                          key={tool}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-white/4 text-neutral-600 dark:text-neutral-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F4F1EA]/55 dark:bg-[#0B0B0B]/90 border border-neutral-200/40 dark:border-white/5 space-y-1">
                    <span className="text-[10px] font-sans font-medium text-neutral-450 dark:text-neutral-500 tracking-wider block">Key Takeaway</span>
                    <p className="text-xs text-neutral-600 dark:text-[#B8B8B8] italic font-serif leading-relaxed">
                      &ldquo;{exp.lessonsLearned}&rdquo;
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
