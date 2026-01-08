export interface Technology {
  name: string;
  icon: string;
  category: "language" | "library" | "tool";
}

export const technologies: Technology[] = [
  // Languages
  { name: "Java", icon: "java", category: "language" },
  { name: "Python", icon: "python", category: "language" },
  { name: "JavaScript", icon: "javascript", category: "language" },
  { name: "TypeScript", icon: "typescript", category: "language" },
  { name: "C", icon: "c", category: "language" },
  { name: "C++", icon: "cplusplus", category: "language" },
  { name: "HTML", icon: "html5", category: "language" },
  { name: "CSS", icon: "css3", category: "language" },
  { name: "PostgreSQL", icon: "postgresql", category: "language" },
  { name: "R", icon: "r", category: "language" },
  { name: "Bash", icon: "bash", category: "language" },

  // Libraries & Frameworks
  { name: "React", icon: "react", category: "library" },
  { name: "Next.js", icon: "nextjs", category: "library" },
  { name: "Node.js", icon: "nodejs", category: "library" },
  { name: "Express.js", icon: "express", category: "library" },
  { name: "PyTorch", icon: "pytorch", category: "library" },
  { name: "TensorFlow", icon: "tensorflow", category: "library" },
  { name: "Pandas", icon: "pandas", category: "library" },
  { name: "NumPy", icon: "numpy", category: "library" },
  { name: "Scikit-Learn", icon: "scikitlearn", category: "library" },

  // Tools
  { name: "Git", icon: "git", category: "tool" },
  { name: "MongoDB", icon: "mongodb", category: "tool" },
  { name: "Docker", icon: "docker", category: "tool" },
  { name: "Linux", icon: "linux", category: "tool" },
  { name: "Postman", icon: "postman", category: "tool" },
  { name: "Jira", icon: "jira", category: "tool" },
  { name: "BigQuery", icon: "googlecloud", category: "tool" },
];
