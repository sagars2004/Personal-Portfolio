export interface Education {
  id: string;
  degree: string;
  concentration: string;
  minor: string;
  school: string;
  location: string;
  startDate: string;
  endDate: string;
  logo: string;
  coursework: string[];
  extracurriculars: string[];
  honors: string[];
  certifications: string[];
}

export const education: Education = {
  id: "rpi",
  degree: "B.S. in Computer Science",
  concentration: "Concentration: AI/ML and Data Science",
  minor: "Economics of Banking and Finance",
  school: "Rensselaer Polytechnic Institute - School of Science",
  location: "Troy, NY",
  startDate: "August 2022",
  endDate: "December 2025",
  logo: "/logos/rpi.png",
  coursework: [
    "Artificial Intelligence",
    "Software Design & Documentation",
    "Database Systems",
    "Principles of Software",
    "Data Structures",
    "Algorithms",
    "Programming Languages",
    "Operating Systems",
    "Computer Organization",
    "Foundations of CS",
    "Money and Banking",
    "Microeconomic Theory",
    "Differential Equations",
    "Multivariable Calculus and Matrix Algebra",
    "Intro to Logic-Based AI",
    
  ],
  extracurriculars: [
    "Rensselaer Center for Open Source",
    "Google Developer Groups on Campus",
    "Tau Epsilon Phi Fraternity"
  ],
  honors: [
    "Dean's Honor List (2024, 2025)",
    "RPI Leadership and Recognition Award",
  ],
  certifications: [
    "Google Cloud Data Analytics Certificate",
    "J.P. Morgan Chase Software Engineering Job Experience"
  ],
};
