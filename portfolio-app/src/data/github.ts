export interface GithubRepo {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
}

export const githubProfile = {
  username: "Manojn476",
  url: "https://github.com/Manojn476",
  avatarUrl: "https://avatars.githubusercontent.com/u/202397318?v=4",
  bio: "Creative",
  publicRepos: 6,
  followers: 1,
  following: 2,
  location: "Bangalore",
};

export const featuredRepos: GithubRepo[] = [
  {
    name: "Purchase-Intent-ML",
    description:
      "A machine learning web application that predicts online shopping purchase intent using visitor behavior data. Features real-time predictions, data visualizations, and an intuitive web interface.",
    language: "JavaScript",
    stars: 0,
    forks: 0,
    url: "https://github.com/Manojn476/Purchase-Intent-ML",
  },
  {
    name: "Amenity-Equity-Mapping",
    description:
      "Network-based techniques to analyze city connectivity across transportation, economics, and infrastructure. Models cities as nodes and interactions as edges using graph analysis and ML.",
    language: "Python",
    stars: 0,
    forks: 0,
    url: "https://github.com/Manojn476/Amenity-Equity-Mapping",
  },
  {
    name: "PixelMinds",
    description: "XCEL Hackathon project — creative problem-solving with rapid prototyping.",
    language: "Python",
    stars: 0,
    forks: 0,
    url: "https://github.com/Manojn476/PixelMinds",
  },
  {
    name: "Devops-",
    description:
      "Repository for DevOps Workshop on Big Data, featuring hands-on exercises, scripts, and examples covering data pipeline automation and CI/CD for big data applications.",
    language: "Python",
    stars: 0,
    forks: 0,
    url: "https://github.com/Manojn476/Devops-",
  },
];
