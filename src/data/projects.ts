export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "Personal Portfolio Website",
    description:
      "A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS featuring smooth animations and a clean design.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    githubUrl: "https://github.com/sagars2004/personal-portfolio",
    featured: true,
  },
  {
    id: "ml-classifier",
    title: "ML Stress Contour Classifier",
    description:
      "Machine learning algorithm using PyTorch to classify elastic stress contour images of barrier coating microstructures for materials science research.",
    technologies: ["Python", "PyTorch", "JupyterLab", "NumPy", "Matplotlib"],
    featured: true,
  },
  {
    id: "neural-network",
    title: "Neural Network Training Software",
    description:
      "C software designed to train artificial neural networks for regression, data compression, and backpropagation tasks.",
    technologies: ["C", "Neural Networks", "Data Compression"],
    featured: true,
  },
  {
    id: "financial-simulation",
    title: "Monte Carlo Financial Simulator",
    description:
      "Predictive data visualization tool using Monte Carlo probability simulations to assess wealth accumulation and risk management strategies.",
    technologies: ["Python", "Monte Carlo", "Data Visualization", "Pandas"],
    featured: false,
  },
  {
    id: "property-management",
    title: "Property Management Platform",
    description:
      "Full-stack property management platform automating rent collection and maintenance requests for landlords and property investors.",
    technologies: ["React", "Node.js", "MongoDB", "Express.js"],
    featured: true,
  },
];
