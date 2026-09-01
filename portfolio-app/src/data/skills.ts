export interface SkillGroup {
  category: string;
  icon: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    icon: "Code2",
    skills: ["Python", "C", "SQL"],
  },
  {
    category: "AI / Machine Learning",
    icon: "Brain",
    skills: [
      "Scikit-learn",
      "Data Preprocessing",
      "Feature Engineering",
      "Model Evaluation",
      "LLMs",
    ],
  },
  {
    category: "Data & Analytics",
    icon: "BarChart3",
    skills: [
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Power BI",
      "Microsoft Excel",
      "EDA",
    ],
  },
  {
    category: "Backend & APIs",
    icon: "Server",
    skills: ["FastAPI", "Streamlit", "REST APIs"],
  },
  {
    category: "Frontend",
    icon: "Layout",
    skills: ["Next.js", "React", "TypeScript"],
  },
  {
    category: "Databases",
    icon: "Database",
    skills: ["Neo4j", "CouchDB", "PgAdmin", "PostgreSQL"],
  },
  {
    category: "Tools & DevOps",
    icon: "Wrench",
    skills: ["Git", "GitHub", "Linux", "NetworkX"],
  },
  {
    category: "DSA",
    icon: "GitBranch",
    skills: [
      "Arrays",
      "Linked Lists",
      "Trees",
      "Graphs",
      "Dynamic Programming",
    ],
  },
];
