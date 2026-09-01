export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  approach: string;
  techChallenge: string;
  learned: string;
  stack: string[];
  githubUrl?: string;
  demoUrl?: string;
  isFlagship: boolean;
  category: "ai-ml" | "fullstack" | "data" | "hackathon";
  pipeline?: string[];
}

export const featuredProject: Project = {
  id: "argus",
  title: "ARGUS",
  subtitle: "Digital Twin-Based Process Drift Detection & Sustainability Assessment",
  description:
    "Developed a Digital Twin framework for semiconductor manufacturing to monitor multi-stage process data and detect gradual and sudden process drift while supporting sustainability assessment.",
  problem:
    "Manufacturing teams need a way to identify subtle process drift early enough to prevent yield loss, quality instability, and excessive resource waste across complex production lines.",
  approach:
    "Built a digital twin architecture integrating CUSUM and LSTM Autoencoder models for hybrid anomaly and drift detection. I connected the model outputs to root-cause analysis, impact assessment, and dynamic sustainability tracking through a real-time operations dashboard.",
  techChallenge:
    "Combining time-series drift detection with explainable operational insights and linking anomalies to process impact, maintenance prioritization, and lifecycle sustainability without overwhelming users.",
  learned:
    "How to build end-to-end AI systems for industrial monitoring, connect model outputs to business-critical impact metrics, and present complex operational analytics through a product-focused dashboard.",
  stack: [
    "Python",
    "PyTorch",
    "FastAPI",
    "React",
    "TypeScript",
    "PostgreSQL",
    "Docker",
    "Digital Twin",
    "LSTM Autoencoder",
    "CUSUM",
    "LCA",
  ],
  isFlagship: true,
  category: "ai-ml",
  pipeline: [
    "Data Ingestion",
    "Digital Twin Modeling",
    "CUSUM + LSTM Detection",
    "Root-Cause Analysis",
    "Sustainability Tracking",
    "Dashboard Insights",
  ],
};

export const projects: Project[] = [
  {
    id: "interviewai",
    title: "InterviewAI",
    subtitle: "AI-Powered Adaptive Interview Preparation System",

    description:
      "Built an AI-powered interview preparation platform that analyzes resumes and job descriptions to generate personalized questions and simulate adaptive multi-agent interviews.",

    problem:
      "Candidates often prepare with generic interview questions that do not reflect their resume, target role, or evolving performance during an interview.",

    approach:
      "Developed an adaptive interview system using LLMs and a NetworkX-based knowledge graph to connect candidate skills, job requirements, and interview topics. Implemented multi-agent interview simulations covering technical, system design, and HR rounds.",

    techChallenge:
      "Designing an adaptive interview flow where questions dynamically evolve based on candidate responses while maintaining context across different interview agents and connecting questions to relevant skills and job requirements.",

    learned:
      "How to build LLM-powered applications, integrate knowledge graphs with AI workflows, design multi-agent systems, and develop personalized user experiences around real-world interview scenarios.",

    stack: [
      "Python",
      "LLMs",
      "FastAPI",
      "Next.js",
      "TypeScript",
      "NetworkX",
      "Knowledge Graph",
      "Multi-Agent AI"
    ],

    isFlagship: false,
    category: "ai-ml",

    pipeline: [
      "Resume + JD Analysis",
      "Knowledge Graph Construction",
      "Adaptive Question Generation",
      "Multi-Agent Interview",
      "Response Analysis",
      "Personalized Feedback"
    ],
  },
  {
    id: "purchase-intent",
    title: "Purchase Intent Prediction",
    subtitle: "ML-Based Online Shopping Behavior Predictor",
    description:
      "A machine learning web application that predicts online shopping purchase intent using visitor behavior data. Features real-time predictions, data visualizations, and an intuitive web interface.",
    problem:
      "E-commerce platforms need to predict which visitors are likely to make a purchase to optimize marketing and user experience in real-time.",
    approach:
      "Developed an ML pipeline with data preprocessing, feature engineering, and model evaluation. Built a Streamlit interface for real-time prediction and result visualization.",
    techChallenge:
      "Handling imbalanced purchase/non-purchase data and engineering behavioral features (session duration, page values, bounce rates) that meaningfully predict intent.",
    learned:
      "End-to-end ML pipeline development from data cleaning to deployment, and how feature engineering decisions directly impact model accuracy.",
    stack: ["Python", "Scikit-learn", "Streamlit", "Machine Learning"],
    githubUrl: "https://github.com/Manojn476/Purchase-Intent-ML",
    isFlagship: false,
    category: "ai-ml",
  },
  {
    id: "social-resistance-network",
    title: "Social Resistance Network Analyzer",
    subtitle: "Urban Amenity Accessibility & Equity Mapping",
    description:
      "A network-based system that uses resistance modeling and isolation metrics to assess urban amenity accessibility and equity. Features a two-layer graph system with interactive geospatial visualization.",
    problem:
      "Urban infrastructure distribution is often inequitable — some neighborhoods lack access to essential amenities. Measuring this inequity requires modeling spatial relationships, not just distances.",
    approach:
      "Built a two-layer graph system using resistance modeling and isolation metrics. Developed an interactive web app with real-time mapping to visualize infrastructure distribution and service viability across cities.",
    techChallenge:
      "Implementing resistance-based network metrics on geospatial data and building interactive visualizations that communicate complex graph analytics to non-technical users.",
    learned:
      "Graph-based geospatial analysis, how network science concepts apply to real urban planning problems, and building interactive data applications with Streamlit.",
    stack: ["Python", "NetworkX", "Streamlit", "Geospatial Analysis"],
    githubUrl: "https://github.com/Manojn476/Amenity-Equity-Mapping",
    isFlagship: false,
    category: "data",
  },
  {
    id: "pixelminds",
    title: "PixelMinds",
    subtitle: "XCEL Hackathon Project",
    description:
      "A project developed during the BMSCE XCEL COE Hackathon, combining creative problem-solving with rapid prototyping under time constraints.",
    problem: "Hackathon challenge requiring innovative solutions under tight deadlines.",
    approach: "Rapid prototyping and iterative development during the hackathon sprint.",
    techChallenge: "Building a functional product under hackathon time constraints while maintaining code quality.",
    learned: "Working under pressure, rapid prototyping, and collaborative development in a competitive environment.",
    stack: ["Python"],
    githubUrl: "https://github.com/Manojn476/PixelMinds",
    isFlagship: false,
    category: "hackathon",
  },
];

export const flagshipProject = featuredProject;
