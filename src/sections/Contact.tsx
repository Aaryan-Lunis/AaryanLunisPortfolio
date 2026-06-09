interface ContactProps {
  onOpenResume: () => void;
}

export default function Contact({ onOpenResume }: ContactProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact-section"
      className="py-32 px-6 md:px-12 border-t border-neutral-200/40 dark:border-[#141414] relative bg-[#FAFAF8] dark:bg-[#050505] transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto space-y-24">

        {/* MAIN CONTACT SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">

          {/* LEFT SIDE */}
          <div className="md:col-span-7 space-y-6">

            <span className="font-serif italic text-xl text-[#7A746C] dark:text-[#C7BFB2] block">
              Connect
            </span>

            <h2 className="text-4xl md:text-6xl leading-[0.95] tracking-[-0.05em] text-[#111111] dark:text-[#FAF7F2]">
              Let’s build something
              <br />
              <span className="font-serif italic font-normal text-[#7A746C] dark:text-[#C7BFB2]">
                thoughtful and meaningful.
              </span>
            </h2>

            <p className="text-[#5E5A55] dark:text-[#9F978B] text-[15px] leading-relaxed max-w-lg">
              I am always receptive to intellectual discourse, research inquiries,
              technical reviews, or full-time opportunities.
            </p>

          </div>

          {/* RIGHT SIDE */}
          <div className="md:col-span-5 pt-8 md:pt-16">

            <div className="divide-y divide-neutral-200/40 dark:divide-[#1A1A1A]">

              {/* EMAIL */}
              <a
                href="mailto:lunisaaryan@gmail.com"
                className="flex items-center justify-between py-5 group transition-all duration-300"
              >
                <span className="text-[#111111] dark:text-[#F4EFE7] text-lg">
                  Email
                </span>

                <span className="text-sm text-[#6F6A63] dark:text-[#D2CABD] group-hover:text-white transition-colors duration-300">
                  lunisaaryan@gmail.com
                </span>
              </a>

              {/* LINKEDIN */}
              <a
                href="https://linkedin.com/in/aaryan-lunis"
                target="_blank"
                referrerPolicy="no-referrer"
                className="flex items-center justify-between py-5 group transition-all duration-300"
              >
                <span className="text-[#111111] dark:text-[#F4EFE7] text-lg">
                  LinkedIn
                </span>

                <span className="text-sm text-[#6F6A63] dark:text-[#D2CABD] group-hover:text-white transition-colors duration-300">
                  /in/aaryan-lunis
                </span>
              </a>

              {/* GITHUB */}
              <a
                href="https://github.com/Aaryan-Lunis"
                target="_blank"
                referrerPolicy="no-referrer"
                className="flex items-center justify-between py-5 group transition-all duration-300"
              >
                <span className="text-[#111111] dark:text-[#F4EFE7] text-lg">
                  GitHub
                </span>

                <span className="text-sm text-[#6F6A63] dark:text-[#D2CABD] group-hover:text-white transition-colors duration-300">
                  github.com/aaryanlunis
                </span>
              </a>

              {/* RESUME */}
              <button
                onClick={onOpenResume}
                className="w-full flex items-center justify-between py-5 text-left group transition-all duration-300"
              >
                <span className="text-[#111111] dark:text-[#F4EFE7] text-lg">
                  Resume PDF
                </span>

                <span className="text-sm text-[#6F6A63] dark:text-[#D2CABD] group-hover:text-white transition-colors duration-300">
                  view & download pdf
                </span>
              </button>

            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#8A847B] dark:text-[#B0A89B]">

          <p>
            © {currentYear} Aaryan Lunis. Executed with complete design restraint.
          </p>

          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7A746C] dark:bg-[#C7BFB2]" />
            <span>Documenting the evolution</span>
          </div>

        </div>

      </div>
    </footer>
  );
}