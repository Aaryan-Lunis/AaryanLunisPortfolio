export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectEntry {
  id: string;
  title: string;
  year: string;
  tagline: string;
  description: string; // used for short summary
  shortDescription: string;
  longDescription: string;
  tech: string[];
  github?: string;
  live?: string;
  images: string[];
  challenges: string[];
  architecture: string;
  learnings: string[];
  metrics: ProjectMetric[];
  timeline: string;
  featured: boolean;
  visualizerType: "market" | "network" | "wellness" | "cinematic";
  status: "Production" | "Beta" | "Research" | "Archive";
  caseStudy?: {
    challenge: string;
    solution: string;
    architectureDetails?: string;
    metrics?: ProjectMetric[];
  };
}

export const projectsData: ProjectEntry[] = [
  {
  id: "alphacross",

  title: "AlphaCross",

  year: "2025",

  tagline:
    "AI-powered trading signal analyzer for NSE 500 stocks",

  description:
    "An end-to-end machine learning platform that analyzes historical market data to generate bullish and bearish trading signals using ensemble classification models.",

  shortDescription:
    "ML-based stock signal analyzer with FastAPI backend, backtesting engine, and interactive dashboards.",

  longDescription:
    "Built a full-stack quantitative trading analysis platform focused on identifying moving average crossover opportunities across NSE 500 stocks. The system combines feature-engineered market indicators, XGBoost-based classification models, EMA backtesting logic, and interactive React dashboards to evaluate short-term directional trends and visualize trade performance.",

  tech: [
    "FastAPI",
    "React",
    "XGBoost",
    "Python",
    "pandas",
    "yfinance",
    "Chart.js"
  ],

  github:
    "https://github.com/Aaryan-Lunis/AlphaCross-An-AI-Powered-Moving-Average-Crossover-and-Market-Insight-Platform.git",

  live:
    "https://alpha-cross-an-ai-powered-moving-av.vercel.app/",

  images: [
    "/projects/alphacross/hero.png"
  ],

  challenges: [
    "Preventing lookahead bias and leakage in time-series financial datasets.",
    "Designing reliable backtesting logic for moving average crossover strategies.",
    "Optimizing API response times while processing large historical stock datasets."
  ],

  architecture:
    "Structured as a modular FastAPI and React application with separate pipelines for feature generation, model inference, EMA backtesting, and dashboard visualization.",

  learnings: [
    "Learned how time-series validation differs significantly from traditional ML train-test workflows.",
    "Improved understanding of feature engineering using technical indicators and rolling averages.",
    "Built stronger intuition around model reliability, backtesting accuracy, and financial data preprocessing."
  ],

  metrics: [
    { label: "Prediction Accuracy", value: "78%" },
    { label: "Stocks Analyzed", value: "NSE 500" },
    { label: "Forecast Horizon", value: "3 Days" }
  ],

  timeline:
    "Jan 2025 - Mar 2025",

  featured: true,

  visualizerType: "market",

  status: "Production",

  caseStudy: {
    challenge:
      "Financial datasets are highly noisy and prone to misleading evaluation results when future information leaks into training pipelines.",

    solution:
      "Implemented strict time-series validation, engineered technical indicators, and trained XGBoost classifiers to predict bullish and bearish crossover movements within short trading windows.",

    architectureDetails:
      "FastAPI handled model inference and trading signal generation, while React dashboards visualized historical trends, EMA crossover events, and backtesting outputs through interactive charts.",

    metrics: [
      { label: "Prediction Accuracy", value: "78%" },
      { label: "Forecast Window", value: "3 Days" },
      { label: "Market Coverage", value: "NSE 500" }
    ]
  }
},

  {
  id: "habit-mood-tracker",
  title: "Habit & Mood Tracker",
  year: "2025",
  tagline: "Android app for habit tracking, mood logging, and AI-powered wellness insights",
  description: "A production-grade Android application with a Python ML backend, Firebase cloud sync, and a Gemini RAG chatbot for context-aware wellness guidance.",
  shortDescription: "Android habit and mood tracker with KMeans/RandomForest ML backend, Firebase, and Gemini AI chatbot achieving 86% classification accuracy.",
  longDescription: "Built a full-stack Android application in Java for daily habit tracking, mood logging, and gratitude journaling. A Python ML backend processes 500+ data points per user using KMeans clustering and RandomForest classification at 86% accuracy to surface real behavioral patterns. A Gemini RAG chatbot provides context-aware insights across 200+ conversation threads with 92% relevance score and sub-1s response time. Firebase handles authentication, Firestore cloud sync, and 10K+ queries through a microservices layer.",
  tech: ["Java", "Android", "Firebase", "Google Gemini API", "Python", "KMeans", "RandomForest", "Room Database", "Gradle"],
  github: "https://github.com/Aaryan-Lunis/Habit-Mood-Tracker-App",
  images: ["/projects/habit/hero.png"],
  challenges: [
    "Building a reliable ML pipeline that surfaces genuine habit-mood correlations without overfitting to sparse early user data.",
    "Architecting a microservices layer on Firebase capable of handling 10K+ queries while keeping chatbot response time under 1s.",
    "Integrating Gemini RAG with conversation history across 200+ threads while maintaining relevance and avoiding context drift."
  ],
  architecture: "Android frontend in Java communicates with Firebase Firestore for cloud sync and Room Database for local persistence. A Python ML backend runs KMeans clustering and RandomForest classification on user habit-mood data. The Gemini RAG chatbot retrieves context from cached conversation history and delivers responses through a Firebase microservices layer.",
  learnings: [
    "Learned how RAG architecture improves chatbot relevance significantly over vanilla prompt-response patterns.",
    "Improved understanding of behavioral clustering and how KMeans can segment habit patterns into actionable mood correlations.",
    "Gained experience designing Android apps that balance local-first storage with real-time cloud sync without sacrificing UX."
  ],
  metrics: [
    { label: "ML Accuracy", value: "86%" },
    { label: "Chatbot Relevance", value: "92%" },
    { label: "Response Time", value: "< 1s" }
  ],
  timeline: "Nov 2024 - Jan 2025",
  featured: false,
  visualizerType: "wellness",
  status: "Production",
  caseStudy: {
    challenge: "Most habit apps track behavior in isolation without connecting it to mood or mental state. The ML layer needed to process noisy, sparse user data early on and still produce meaningful correlations without overfitting.",
    solution: "Built a Python ML backend using KMeans to cluster behavioral patterns and RandomForest to classify mood trajectories at 86% accuracy. The Gemini RAG chatbot caches conversation context across sessions, achieving 92% relevance score and sub-1s response time across 200+ threads.",
    architectureDetails: "Firebase Firestore handles cloud sync and 10K+ query load through a microservices layer. Room Database provides offline-first local persistence. The ML backend runs independently and pushes insights back to the app. Gemini API key is injected at build time via local.properties and never committed.",
    metrics: [
      { label: "ML Classification Accuracy", value: "86%" },
      { label: "Chatbot Relevance Score", value: "92%" },
      { label: "Chatbot Response Time", value: "< 1s" }
    ]
  }
},
  {
    id: "emosound",
    title: "EmoSound",
    year: "2024",
    tagline: "Transformer-based emotion detection with Spotify music recommendations",
    description: "A multimodal AI platform that classifies emotions from text and voice using DistilRoBERTa, then maps detected states to Spotify tracks via audio feature matching.",
    shortDescription: "Speech-to-emotion pipeline achieving 89% accuracy with real-time Spotify playlist generation.",
    longDescription: "Built a full-stack emotion-aware music discovery platform using DistilRoBERTa for NLP-based emotion classification and Google Speech API for voice input. The system achieves 89% multi-class accuracy at ~1.2s inference and integrates with the Spotify Web API via OAuth to generate real-time, emotion-matched playlists. A hybrid recommendation algorithm combines content-based filtering, collaborative filtering, and learned user preferences to improve recommendations over time.",
    tech: ["Python", "DistilRoBERTa", "Transformers", "Streamlit", "Spotify API", "Librosa", "SQLite", "Plotly"],
    github: "https://github.com/Aaryan-Lunis/EmoSound_Streamlit_Version",
    images: ["/projects/emosound/hero.png"],
    challenges: [
      "Achieving reliable multi-class emotion classification across 10 emotion categories with high confidence scores.",
      "Mapping detected emotions to Spotify audio features (valence, energy, danceability) in a meaningful way.",
      "Building a feedback loop that adapts recommendations based on user like/dislike signals without overfitting."
    ],
    architecture: "Streamlit unified frontend and backend with separate modules for emotion detection, audio processing, Spotify API integration, and a SQLite-backed user preference engine. DistilRoBERTa runs inference locally with HuggingFace Transformers.",
    learnings: [
      "Learned how transformer fine-tuning on emotion-labeled datasets differs from general-purpose NLP tasks.",
      "Improved understanding of hybrid recommendation systems and how content-based and collaborative signals can be weighted effectively.",
      "Gained experience integrating OAuth-based third-party APIs (Spotify) into a real-time ML application."
    ],
    metrics: [
      { label: "Emotion Accuracy", value: "89%" },
      { label: "Inference Time", value: "~1.2s" },
      { label: "Emotion Classes", value: "10" }
    ],
    timeline: "Jun 2024 - Sep 2024",
    featured: false,
    visualizerType: "wellness",
    status: "Production",
    caseStudy: {
      challenge: "Traditional music platforms recommend based on listening history alone, missing the user's current emotional state — which is the strongest real-time signal for music preference.",
      solution: "Built a real-time emotion detection pipeline using DistilRoBERTa on text and voice inputs, then mapped classified emotions to Spotify audio features for matched track retrieval. A feedback system refines preferences per interaction.",
      architectureDetails: "DistilRoBERTa handles text classification; Librosa and Google Speech API handle audio preprocessing and transcription. Spotify OAuth enables playlist access and recommendation delivery. SQLite stores user emotion logs, song history, and feedback for the adaptive preference engine.",
      metrics: [
        { label: "Emotion Detection Accuracy", value: "89%" },
        { label: "Response Time", value: "~1.2s" },
        { label: "Recommendation Relevance", value: "78%" }
      ]
    }
  },
  {
  id: "box-office-revenue",

  title: "Box Office Revenue Prediction",

  year: "2024",

  tagline: "Ensemble learning pipeline for movie revenue forecasting",

  description:
    "A machine learning system trained on 4,880 films to predict box office revenue using ensemble regression models and engineered financial features.",

  shortDescription:
    "Predictive ML pipeline for estimating movie revenue using ensemble learning and feature engineering.",

  longDescription:
    "Built an end-to-end machine learning workflow to forecast movie box office revenue using historical film metadata, financial indicators, and audience engagement metrics. The project focused heavily on feature engineering, regression model evaluation, and comparative analysis across ensemble algorithms including Gradient Boosting and Random Forest. Deployed a Streamlit dashboard with 100+ scenario-based predictions, reducing analysis time by 60%. Published at the DACS 2025 Conference with interactive visualizations.",

  tech: [
  "Python",
  "Scikit-Learn",
  "Gradient Boosting",
  "Random Forest",
  "Pandas",
  "NumPy",
  "Streamlit",
  "Matplotlib",
  "Cross-Validation",
  "Feature Engineering"
],

  github:
    "https://github.com/Aaryan-Lunis/Box-Office-Revenue-Prediction",

  images: ["/projects/revenue/hero.png"],

  challenges: [
    "Handling heavily skewed revenue distributions caused by blockbuster outliers.",
    "Cleaning inconsistent metadata across thousands of film records.",
    "Engineering meaningful numerical features from sparse categorical movie attributes."
  ],

  architecture:
    "Structured as a modular ML workflow with preprocessing, feature engineering, model training, evaluation, and Streamlit-based prediction interfaces.",

  learnings: [
     "Learned how ensemble regression models capture non-linear relationships more effectively than traditional linear methods.",
     "Improved understanding of feature engineering, cross-validation, and regression evaluation metrics.",
     "Discovered the importance of data cleaning and transformation when working with real-world datasets.",
     "Built a Streamlit dashboard supporting 100+ scenario-based predictions, cutting analysis time by 60%."
  ],

  metrics: [
    { label: "Movies Analyzed", value: "4,880" },
    { label: "Best R² Score", value: "" },
    { label: "MAE", value: "$45.1M" }
  ],

  timeline: "May 2024 - Aug 2024",

  featured: false,

  visualizerType: "cinematic",

  status: "Archive",

  caseStudy: {
    challenge:
      "Movie revenue data contains significant imbalance and high variance due to extreme commercial successes.",

    solution:
      "Applied feature engineering, log transformations, and ensemble regression models to stabilize predictions and improve generalization. Deployed a Streamlit dashboard with 100+ interactive predictions, reducing analysis time by 60%. Work was published at the DACS 2025 Conference with scenario-based visualizations.",

    architectureDetails:
      "Pipeline included preprocessing scripts, exploratory analysis, feature engineering, model training modules, and evaluation dashboards built with Scikit-Learn and Streamlit.",

    metrics: [
      { label: "Dataset Size", value: "4,880 Films" },
      { label: "Best R² Score", value: "0.7639" },
      { label: "MAE", value: "$45.1M" }
    ]
  }
}
];
