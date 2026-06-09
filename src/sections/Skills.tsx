import { skillsData } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills-section" className="py-32 px-6 md:px-12 relative border-t border-neutral-200/50 dark:border-white/5 bg-[#FAFAF7] dark:bg-[#050505] transition-colors">
      <div className="max-w-4xl mx-auto">
        
        {/* Editorial Section Header */}
        <div className="space-y-4 mb-24 max-w-xl">
          <span className="font-serif italic text-lg text-neutral-500 dark:text-neutral-400 block font-light">
            Technical Core
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-semibold tracking-tight text-neutral-900 dark:text-[#F5F5F5]">
            Engineering &amp; Research Index
          </h2>
          <p className="text-sm md:text-base text-neutral-600 dark:text-[#B8B8B8] leading-relaxed font-light">
            A granular map of languages, methodologies, and frameworks curated through academic literature review, direct industrial application, and personal side-projects.
          </p>
        </div>

        {/* Clean Grid Layout - Category list, no interactive tabs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 pt-8">
          {skillsData.map((category) => (
            <div key={category.id} className="space-y-4">
              <div className="space-y-1.5 pb-3 border-b border-neutral-200/50 dark:border-white/5">
                <span className="font-serif italic text-sm text-neutral-450 dark:text-neutral-500 block">
                  {category.title === "AI / ML" ? "Intelligence" : category.title}
                </span>
                <h3 className="text-lg font-sans font-medium text-neutral-900 dark:text-[#EAEAEA]">
                  {category.title}
                </h3>
              </div>
              
              <p className="text-xs text-neutral-500 dark:text-[#B8B8B8] leading-relaxed font-light">
                {category.description}
              </p>

              {/* Skills taxonomy list */}
              <div className="flex flex-wrap gap-1.5 pt-3">
                {category.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="text-xs font-mono text-neutral-700 dark:text-[#EAEAEA] bg-neutral-100/60 dark:bg-white/4 border border-neutral-200/40 dark:border-white/5 px-2.5 py-1 rounded-md"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
