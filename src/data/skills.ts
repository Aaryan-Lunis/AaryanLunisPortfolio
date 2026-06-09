export interface SkillItem {
  name: string;
  level: "Advanced" | "Exploring" | "Fluent" | "Conceptual";
  type: "technical" | "human" | "tool";
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export const skillsData: SkillCategory[] = [
  {
    id: "ai-ml",
    title: "AI / ML",
    description: "Developing machine learning models to identify patterns and generate insights from complex datasets.",
    skills: [
      { name: "PyTorch", level: "Fluent", type: "technical" },
      { name: "XGBoost", level: "Advanced", type: "technical" },
      { name: "Scikit-Learn", level: "Advanced", type: "technical" },
      { name: "Supervised Learning", level: "Advanced", type: "technical" },
      { name: "Unsupervised Learning", level: "Fluent", type: "technical" },
      { name: "Transformers", level: "Exploring", type: "technical" },
      { name: "LangChain", level: "Exploring", type: "technical" },
      { name: "NLP", level: "Fluent", type: "technical" },
      { name: "Model Evaluation", level: "Fluent", type: "technical" }
    ]
  },
  {
    id: "full-stack",
    title: "Full Stack",
    description: "Building responsive, modern user interfaces and organizing reliable web backends that connect seamlessly.",
    skills: [
      { name: "React.js", level: "Advanced", type: "technical" },
      { name: "TypeScript", level: "Fluent", type: "technical" },
      { name: "FastAPI", level: "Advanced", type: "technical" },
      { name: "Tailwind CSS", level: "Advanced", type: "technical" },
      { name: "Node.js", level: "Fluent", type: "technical" },
      { name: "Express.js", level: "Fluent", type: "technical" },
      { name: "Python", level: "Advanced", type: "technical" },
      { name: "SQL", level: "Fluent", type: "technical" },
      { name: "HTML / CSS", level: "Advanced", type: "technical" }
    ]
  },
  {
    id: "data-engineering",
    title: "Data Engineering",
    description: "Cleaning, preparing, and transforming raw information into highly structured, reliable formats ready for analysis.",
    skills: [
      { name: "Pandas", level: "Advanced", type: "technical" },
      { name: "NumPy", level: "Advanced", type: "technical" },
      { name: "ETL Pipelines", level: "Fluent", type: "technical" },
      { name: "Data Aggregation", level: "Advanced", type: "technical" },
      { name: "Matplotlib", level: "Fluent", type: "tool" },
      { name: "Seaborn", level: "Fluent", type: "tool" },
      { name: "JSON & CSV Processing", level: "Advanced", type: "technical" }
    ]
  },
  {
    id: "research",
    title: "Research",
    description: "Reading academic literature, running analytical experiments, and preparing structured reports and documentation.",
    skills: [
      { name: "Technical Writing", level: "Fluent", type: "technical" },
      { name: "Literature Scanning", level: "Fluent", type: "technical" },
      { name: "Experimental Setup", level: "Fluent", type: "technical" },
      { name: "Ablation Testing", level: "Exploring", type: "technical" },
      { name: "Report Drafting", level: "Fluent", type: "technical" }
    ]
  },
  {
    id: "product-thinking",
    title: "Product Thinking",
    description: "Designing layout flows with user-centered empathy, ensuring strong readability, speed, and clear storytelling.",
    skills: [
      { name: "UI/UX Architecture", level: "Exploring", type: "technical" },
      { name: "SEO Optimization", level: "Fluent", type: "technical" },
      { name: "Information Hierarchy", level: "Advanced", type: "technical" },
      { name: "User Empathy", level: "Advanced", type: "human" },
      { name: "Visual Restraint", level: "Advanced", type: "human" },
      { name: "Responsive Layouts", level: "Advanced", type: "technical" }
    ]
  }
];
