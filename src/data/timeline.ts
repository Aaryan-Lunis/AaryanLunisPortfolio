export interface TimelineEntry {
  year: string;
  phase: string;
  title: string;
  description: string;
  projectsBuilt: string[];
  lessonsLearned: string;
  mindsetShift: string;
  technologies: string[];
}

export const timelineData: TimelineEntry[] = [
  {
    year: "2021",
    phase: "Discovering Programming",
    title: "Learning How Software Logic Works",
    description: "Built simple games like Tic Tac Toe and command line utilities. Discovered the absolute thrill of writing instructions and watching a computer execute them step by step.",
    projectsBuilt: ["Classic Tic-Tac-Toe Game", "Interactive Command Line Utilities", "Core Matrix Math Calculators"],
    lessonsLearned: "Syntax is just a tool. The real magic of software is breaking down a large, intimidating problem into simple, logical steps that anyone can follow.",
    mindsetShift: "Realizing that computers aren't magical black boxes—they are completely controllable systems that do exactly what you tell them to.",
    technologies: ["Python", "Basic Algorithms", "Command Line Interface"]
  },
  {
    year: "2022",
    phase: "Learning Communication",
    title: "Sponsorship Outreach & Branding at IETE MPSTME",
    description: "Stepped outside the screen and terminal. Joined the student chapter to manage sponsor relations, coordinate digital and print branding, and organize major technical events.",
    projectsBuilt: ["Corporate Sponsorship Presentations", "Event Coordination Dashboards", "Outreach Planning Sheets"],
    lessonsLearned: "Even the most advanced technical systems are useless without strong human collaboration. Rejection in outreach is just a prompt to refine your message and try again.",
    mindsetShift: "Moving from purely individual coding to understanding how communication, human trust, and branding drive successful projects.",
    technologies: ["Public Speaking", "Corporate Communication", "Branding Design", "Event Operation"]
  },
  {
    year: "2023",
    phase: "Building Technical Foundations",
    title: "Low-Level Optimization & System Basics",
    description: "Dived deeply into C and C++ to comprehend pointers, memory, and performance. Transitioned from high-level scripting to writing custom game loops and physical simulators.",
    projectsBuilt: ["2D Physics Simulator", "CLI Compression Tool", "Custom Memory Allocation Sandbox"],
    lessonsLearned: "Pointers, stacks, and heaps might seem intimidating at first, but mastering them teaches you true efficiency and removes any fear of complex systems.",
    mindsetShift: "Transitioning from writing code that just 'works' to writing code that is memory-efficient, lightning-quick, and structured with intent Hook by Hook.",
    technologies: ["C", "C++", "Memory Management", "Data Structures", "Game Loop Architecture"]
  },
  {
    year: "2024",
    phase: "First Real-World Engineering Exposure",
    title: "Web Maintenance Intern at JSH Architects",
    description: "Worked on real production portfolios for architectural clients. Learned the beauty of negative space, elegant pacing, SEO crawler optimization, and professional UI layout.",
    projectsBuilt: ["Architectural Portfolio Engine", "Google Search SEO Analyzer", "Interactive Image Galleries"],
    lessonsLearned: "Good design is about what you leave out. White space is active design space—it creates room, focus, and elegance.",
    mindsetShift: "Experiencing real-world collaboration and grasping that complex problems require robust, data-driven, and user-centric systems.",
    technologies: ["React.js", "Tailwind CSS", "JavaScript", "SEO Optimization", "User Experience Design"]
  },
  {
    year: "2025",
    phase: "Exploring Intelligent Systems",
    title: "Machine Learning & Autonomous Building",
    description: "Started building robust predictive pipelines, won hackathons, and focused deeply on training machine learning models that make highly useful real-world decisions.",
    projectsBuilt: ["AlphaCross Predictive Model", "AEGIS Observability Panel", "Habit & Mood Tracker"],
    lessonsLearned: "Machine learning models aren't magic—they are statistical representations of data. The best systems combine simple math, clean datasets, and robust engineering pipelines.",
    mindsetShift: "Believing that tomorrow's software is built with both strict imperative logic and smart, adaptive data-driven models.",
    technologies: ["PyTorch", "XGBoost", "Python", "FastAPI", "React", "Data Engineering"]
  }
];
