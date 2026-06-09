export interface CertificationEntry {
  title: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
  topic: "machine-learning" | "data-analytics" | "software-engineering" | "prompt-engineering";
  skillsLearned: string[];
}

export const certificationsData: CertificationEntry[] = [
  {
    title: "Supervised & Unsupervised Machine Learning",
    issuer: "Coursera / Stanford Online",
    year: "2026",
    credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/27OQYI2LJMBZ",
    topic: "machine-learning",
    skillsLearned: ["Regression Models", "Supervised Learning", "Decision Trees", "Classification Setup"]
  },
  {
    title: "Microsoft Power BI Data Analyst",
    issuer: "Microsoft / PL-300",
    year: "2026",
    credentialUrl: "https://www.udemy.com/certificate/UC-f2c32907-2c8f-4b0c-aaf8-b6132c5eddc8/",
    topic: "data-analytics",
    skillsLearned: ["Data Modeling", "DAX Queries", "Dashboard Visualization", "Data Wrangling"]
  },
  {
    title: "Techniverse Hackathon Winner",
    issuer: "DataMavericks / Techniverse",
    year: "2025",
    credentialUrl: "https://drive.google.com/file/d/1RZeA6d5UyuouHSxk46tepBCVOtGF-pl_/view?usp=sharing",
    topic: "machine-learning",
    skillsLearned: ["Problem Solving", "API Integration", "Rapid Prototyping", "Decision Making Under Time Constraints"]
  },
  {
  title: "Research Paper Presentation & Publication",
  issuer: "Data Analytics and Cyber Security Conference",
  year: "2025",
  credentialUrl: "https://drive.google.com/file/d/1M2X7FC6dfcQqM4P_dN3jpI8GKUgxE_3S/view?usp=sharing",
  topic: "machine-learning",
  skillsLearned: [
    "Feature Engineering",
    "Ensemble Learning",
    "Predictive Modeling",
    "Data Analysis",
    "Model Evaluation",
    "Research Writing"
  ]
},
  {
    title: "Data Visualization & Analytics",
    issuer: "TATA Virtual Experience",
    year: "2025",
    credentialUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/MyXvBcppsW2FkNYCX_ifobHAoMjQs9s6bKS_R3h6zb4NpmJheScLu_1748868429727_completion_certificate.pdf",
    topic: "data-analytics",
    skillsLearned: ["Business Charts", "Metric Exploration", "Executive Presentation"]
  },
  {
    title: "Generative AI Systems & Consulting",
    issuer: "Boston Consulting Group (BCG)",
    year: "2025",
    credentialUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/SKZxezskWgmFjRvj9/gabev3vXhuACr48eb_SKZxezskWgmFjRvj9_R3h6zb4NpmJheScLu_1749131879196_completion_certificate.pdf",
    topic: "prompt-engineering",
    skillsLearned: ["Real-World AI Use Cases", "Functional Deployment", "Value Strategy"]
  },
  {
    title: "Advanced Programming in Python Essentials",
    issuer: "Python Institute",
    year: "2025",
    credentialUrl: "https://www.oneroadmap.io/skills/python/certificate/CERT-F01E8BFA",
    topic: "software-engineering",
    skillsLearned: ["Object-Oriented Coding", "Basic Concurrency", "File Operations"]
  },
  {
    title: "Prompt Engineering for Developers",
    issuer: "DeepLearning.AI",
    year: "2025",
    credentialUrl: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI0NzU3IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODQyMzk0NV84Nzg1OTY4MTc0ODk1NjI0NDU3OC5wbmciLCJ1c2VybmFtZSI6IkFhcnlhbiBMdW5pcyJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F7750%2FIntroduction-to-Prompt-Engineering-with-GitHub-Copilot%2Fcertificate%2Fdownload-skillup&%24web_only=true",
    topic: "prompt-engineering",
    skillsLearned: ["Structured Formatting", "System Instructions", "Iterative Prompts"]
  },
  {
    title: "Advanced C++ Basics & Optimizations",
    issuer: "Technical Foundations Org",
    year: "2023",
    credentialUrl: "https://www.linkedin.com/in/aaryan-lunis/details/certifications/",
    topic: "software-engineering",
    skillsLearned: ["Pointers & References", "Algorithmic Efficiency", "Memory Profiling"]
  },
];
