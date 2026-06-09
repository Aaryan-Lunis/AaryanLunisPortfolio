import { Sun, Moon } from "lucide-react";
import { motion } from "motion/react";

interface ThemeSwitcherProps {
  theme: "dark" | "light";
  toggleTheme: () => void;
}

export default function ThemeSwitcher({ theme, toggleTheme }: ThemeSwitcherProps) {
  const isLight = theme === "light";

  return (
    <button
      id="theme-switcher-btn"
      onClick={toggleTheme}
      className="relative flex items-center justify-between bg-neutral-200/50 dark:bg-white/[0.04] border border-neutral-300/40 dark:border-white/5 rounded-full p-[3px] cursor-pointer select-none w-14 h-7 hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 group shadow-inner"
      aria-label="Toggle theme color"
    >
      {/* Sliding high-fidelity premium background slider indicator */}
      <motion.div
        className="absolute top-[2px] bottom-[2px] left-[2px] w-[22px] bg-white dark:bg-[#111111] rounded-full border border-neutral-300/30 dark:border-white/10 shadow-md pointer-events-none"
        animate={{
          x: isLight ? 0 : 26,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 26 }}
      />
      
      {/* Sun Icon */}
      <span className="flex items-center justify-center w-5.5 h-5.5 z-10 transition-colors duration-300 pl-0.5">
        <Sun className={`w-3.5 h-3.5 ${isLight ? "text-neutral-900 font-bold" : "text-neutral-500 group-hover:text-neutral-400"}`} />
      </span>

      {/* Moon Icon */}
      <span className="flex items-center justify-center w-5.5 h-5.5 z-10 transition-colors duration-300 pr-0.5">
        <Moon className={`w-3.5 h-3.5 ${!isLight ? "text-neutral-100 font-bold" : "text-neutral-450 group-hover:text-neutral-350"}`} />
      </span>
    </button>
  );
}
