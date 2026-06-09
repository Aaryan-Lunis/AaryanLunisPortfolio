import { motion } from "motion/react";
import { timelineData } from "../data/timeline";

export default function Timeline() {
  // We reverse the data to show the story chronologically from earliest to most recent,
  // or keep latest first. Let's display latest first (reverse of original) or keep as-is.
  // Standard list layout: chronologically ordered.
  const displayData = [...timelineData].reverse();

  return (
    <section id="timeline-section" className="py-32 px-6 md:px-12 relative border-t border-neutral-200/50 dark:border-white/5 bg-[#FAFAF8] dark:bg-[#080808]/40">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Heading with breathing whitespace */}
        <div className="space-y-4 mb-24 md:mb-32">
          <span className="font-serif italic text-lg text-neutral-500 dark:text-neutral-400 block">
            The Chronicle
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-semibold tracking-tight text-neutral-900 dark:text-[#F5F5F5]">
            Evolution of a Builder
          </h2>
          <p className="text-sm md:text-base text-neutral-600 dark:text-[#B8B8B8] max-w-xl leading-relaxed font-light">
            An organic record of lessons, setbacks, and systems built. Documented chronologically to measure academic milestones, industry exposure, and evolving paradigms.
          </p>
        </div>

        {/* Chronological stream (staggered editorial list) */}
        <div className="space-y-24 md:space-y-36">
          {displayData.map((item, idx) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative"
            >
              {/* Year indicator (large, elegant serif) */}
              <div className="md:col-span-3 flex md:flex-col items-baseline md:items-start gap-3">
                <span className="font-serif italic text-4xl md:text-5xl text-neutral-350 dark:text-neutral-700 leading-none">
                  {item.year}
                </span>
                <span className="text-xs font-sans font-medium tracking-tight text-neutral-450 dark:text-neutral-500">
                  {item.phase}
                </span>
              </div>

              {/* Body narrative */}
              <div className="md:col-span-9 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-sans font-semibold tracking-tight text-neutral-900 dark:text-[#EAEAEA]">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-neutral-600 dark:text-[#B8B8B8] leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                {/* Sub-details (milestones and tools) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-neutral-200/50 dark:border-white/5">
                  <div className="space-y-2">
                    <span className="text-xs font-sans font-medium text-neutral-800 dark:text-neutral-300">Milestones</span>
                    <ul className="space-y-2">
                      {item.projectsBuilt.map((proj, idx) => (
                        <li key={idx} className="text-xs text-neutral-550 dark:text-[#B8B8B8] font-light flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-800 mt-1.5 shrink-0" />
                          <span>{proj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-sans font-medium text-neutral-800 dark:text-neutral-300">Technical Context</span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-white/4 text-neutral-600 dark:text-neutral-300 border border-neutral-200/40 dark:border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Growth Reflection Quote (Warm white paper vibe / dark silver card) */}
                <div className="p-5 rounded-2xl bg-[#F5F2EC]/40 dark:bg-[#0B0B0B]/80 text-neutral-600 dark:text-[#EAEAEA] border border-neutral-250/20 dark:border-white/5 font-serif italic text-sm leading-relaxed">
                  &ldquo;{item.mindsetShift}&rdquo;
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
