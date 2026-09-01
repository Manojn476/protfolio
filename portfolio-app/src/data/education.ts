export interface Education {
  institution: string;
  degree: string;
  field: string;
  period: string;
  cgpa: string;
  cgpaNote: string;
  location: string;
}

export const education: Education = {
  institution: "B.M.S College of Engineering",
  degree: "Bachelor of Engineering",
  field: "Artificial Intelligence and Data Science",
  period: "Aug 2023 – May 2027",
  cgpa: "8.41/10",
  cgpaNote: "",
  location: "Bengaluru, India",
};

export interface Certification {
  title: string;
  issuer: string;
}

export const certifications: Certification[] = [
  { title: "Artificial Intelligence for All", issuer: "Infosys Springboard" },
  { title: "Machine Learning", issuer: "Simplilearn" },
  { title: "Mastering The Art of Prompting", issuer: "IBM SkillsBuild" },
  {
    title: "Nutanix Certified Associate 6 (NHCF)",
    issuer: "Nutanix University",
  },
];
