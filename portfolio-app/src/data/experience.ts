export interface Experience {
  id: string;
  role: string;
  company: string;
  type: string;
  period: string;
  description: string[];
}

export const experiences: Experience[] = [
  {
    id: "excelerate",
    role: "Data Visualization Trainee",
    company: "Early Remote Internship",
    type: "Internship",
    period: "2025",
    description: [
      "Performed data cleaning, analysis, and visualization on real-world datasets using Microsoft Excel",
      "Gained practical exposure to data-driven decision making and presentation techniques",
    ],
  },
];
