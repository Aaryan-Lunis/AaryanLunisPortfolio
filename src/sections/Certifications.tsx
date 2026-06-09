import { ArrowUpRight } from "lucide-react";
import { certificationsData } from "../data/certifications";

export default function Certifications() {
  return (
    <section id="certifications-section" className="py-32 px-6 md:px-12 relative border-t border-neutral-200/50 dark:border-white/5 bg-[#FAFAF7] dark:bg-[#050505] transition-colors">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="space-y-4 mb-24 max-w-xl">
          <span className="font-serif italic text-lg text-neutral-500 dark:text-neutral-400 block font-light">
            Verified Credentials
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-semibold tracking-tight text-neutral-900 dark:text-[#F5F5F5]">
            Academic Certifications
          </h2>
          <p className="text-sm md:text-base text-neutral-600 dark:text-[#B8B8B8] leading-relaxed font-light">
            Complementing formal engineering coursework with specialized syllabi in artificial intelligence, computer models, and data analytics.
          </p>
        </div>

        {/* Tabular Layout List */}
        <div className="divide-y divide-neutral-200/50 dark:divide-white/5 border-b border-neutral-200/50 dark:border-white/5">
          {certificationsData.map((cert, index) => {
            return (
              <div
                id={`cert-card-${index}`}
                key={index}
                className="py-6 sm:py-8 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 hover:opacity-90 transition-opacity"
              >
                {/* Issuer and Title Column */}
                <div className="space-y-2 max-w-lg">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-450 dark:text-neutral-500">
                      {cert.issuer}
                    </span>
                    <span className="hidden sm:inline text-neutral-300 dark:text-neutral-700 text-xs">·</span>
                    <span className="text-xs font-sans text-neutral-400 dark:text-neutral-500 font-light">
                      {cert.year}
                    </span>
                  </div>
                  <h3 className="text-base font-sans font-medium text-neutral-900 dark:text-[#EAEAEA]">
                    {cert.title}
                  </h3>
                  
                  {/* Skill Context Bullets */}
                  <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-neutral-500 dark:text-[#B8B8B8] font-light">
                    {cert.skillsLearned.map((skill, sIdx) => (
                      <span key={sIdx} className="inline-flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-800" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Verification Action Item */}
                {cert.credentialUrl && (
                  <a
                    id={`cert-link-${index}`}
                    href={cert.credentialUrl}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="inline-flex items-center gap-1 text-xs font-sans font-medium text-neutral-900 dark:text-[#F5F5F5] border-b border-neutral-900/10 dark:border-white/10 pb-0.5 hover:border-neutral-950 dark:hover:border-white cursor-pointer select-none transition-all pr-1 self-start sm:self-center shrink-0"
                  >
                    <span>Verify Credential</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
                  </a>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
