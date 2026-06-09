export interface ExperienceEntry {
  company: string;
  role: string;
  location: string;
  period: string;
  tech: string[];
  impactPoints: string[];
  lessonsLearned: string;
  narrative: string;
}

export const experienceData: ExperienceEntry[] = [
  {
    company: "Finifi",
    role: "AI Development & Engineering Intern",
    location: "Remote",
    period: "May 2026 - Aug 2026",

    tech: [
      "Python",
      "NLP",
      "OCR",
      "REST APIs",
      "FastAPI",
      "Machine Learning"
    ],

    impactPoints: [
      "Developed NLP classification and OCR post-processing pipelines for invoice and purchase-order document workflows, improving routing accuracy across enterprise accounts payable systems.",

      "Built and deployed ML inference services via REST APIs, enabling real-time document intelligence within ERP-integrated procurement and finance workflows.",

      "Designed preprocessing pipelines for structured and unstructured financial documents, standardizing extraction-ready datasets for downstream model training and validation."
    ],

    lessonsLearned:
      "Production AI systems require far more than a working model. Data quality, pipeline reliability, and clean API design determine whether a system actually holds up in real enterprise environments. The engineering surrounding the model matters as much as the model itself.",

    narrative:
      "Working inside a live fintech product taught me how AI is deployed in practice rather than in isolation. It shifted my thinking from building models to building systems — where reliability, integration, and data consistency define real-world impact far more than benchmark accuracy."
  },
  {
    company: "Suvidha Foundation",
    role: "ML Research Intern",
    location: "Remote",
    period: "Aug 2025 - Oct 2025",

    tech: [
      "PyTorch",
      "HuggingFace Transformers",
      "LangChain",
      "Python"
    ],

    impactPoints: [
      "Assisted in testing prompt pipelines and evaluating model responses to improve consistency, structure, and overall output quality.",

      "Built modular utilities for processing academic documents and converting them into searchable vector-based formats for faster retrieval workflows.",

      "Performed comparative experiments across different model and pipeline configurations to analyze response accuracy, reliability, and error behavior."
    ],

    lessonsLearned:
      "Machine learning systems depend heavily on data quality, evaluation methodology, and clear implementation details. Small improvements in preprocessing and structure often have a larger impact than complex model changes.",

    narrative:
      "This internship gave me practical exposure to how machine learning systems are actually developed and evaluated. It shifted my perspective from viewing ML as purely model-focused to understanding the importance of experimentation, data preparation, and reliable engineering workflows."
  },
  {
    company: "JSH Architects",
    role: "Web Architecture Intern",
    location: "Mumbai, India",
    period: "May 2024 - Jul 2024",

    tech: [
      "React.js",
      "Tailwind CSS",
      "Figma",
      "Web Performance"
    ],

    impactPoints: [
      "Developed responsive portfolio pages for architectural projects, focusing on clean layouts, performance, and accessibility across devices.",

      "Optimized media assets and page structures to improve loading speed, usability, and overall Lighthouse performance metrics.",

      "Worked alongside design teams to translate architectural principles such as spacing, hierarchy, and symmetry into modern web interfaces."
    ],

    lessonsLearned:
      "Good digital experiences rely heavily on clarity and restraint. Working with architectural layouts taught me how spacing, balance, and pacing influence how users process information.",

    narrative:
      "This internship introduced me to the relationship between architecture and interface design. Observing how architects think about structure, flow, and visual balance helped me approach frontend development with greater attention to detail and user experience."
  },
  {
    company: "IETE MPSTME Student Chapter",
    role: "Marketing Executive",
    location: "Mumbai, India",
    period: "Jul 2022 - Jun 2023",

    tech: [
      "Communication",
      "Event Coordination",
      "Sponsorship Outreach",
      "Campaign Planning"
    ],

    impactPoints: [
      "Supported outreach and communication efforts for student-led hackathons and technical events, helping improve participation and external engagement.",

      "Coordinated promotional activities, schedules, and event communication across multiple student teams and organizing members.",

      "Maintained clean and consistent presentation standards for event decks, invitations, and social media creatives."
    ],

    lessonsLearned:
      "Strong technical work still depends on collaboration, communication, and consistency. Working with teams taught me how to organize ideas clearly and adapt quickly when plans changed.",

    narrative:
      "Stepping briefly outside pure technical work exposed me to the operational side of building communities and events. It taught me how coordination, communication, and reliability quietly shape successful projects."
  }
];