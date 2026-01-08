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
  degree: "Bachelor of Science (B.S.) in Computer Science",
  concentration: "Artificial Intelligence and Data",
  minor: "Economics of Banking & Finance",
  school: "Rensselaer Polytechnic Institute - School of Science",
  location: "Troy, NY",
  startDate: "Sep 2022",
  endDate: "May 2026",
  logo: "/RPI_logo.png",
  coursework: [
    "Intro to AI",
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
  ],
  extracurriculars: [
    "Rensselaer Center for Open Source",
    "Google Developer Groups on Campus",
    "Tau Epsilon Phi",
  ],
  honors: [
    "Dean's Honor List (S24, F24, S25)",
    "RPI Leadership and Recognition Award",
  ],
  certifications: [
    "Google Cloud Data Analytics Certificate",
    "J.P. Morgan Chase Software Engineering Job Experience",
    "Walmart Global Tech SWE Experience",
  ],
};
