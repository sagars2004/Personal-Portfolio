export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: "flowstate",
    title: "Flowstate",
    tagline: "Deep work productivity app",
    description:
      "A productivity and focus application designed to help users achieve deep work states and manage their time effectively.",
    technologies: ["React", "TypeScript", "Node.js"],
    githubUrl: "https://github.com/sagars2004/Flowstate",
  },
  {
    id: "rentpad",
    title: "Rentpad Homes",
    tagline: "Smart Property Management Platform",
    description:
      "An open-source playbook platform for sharing and collaborating on strategies, workflows, and best practices.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    githubUrl: "",
  },
  {
    id: "openplaybook",
    title: "OpenPlaybook",
    tagline: "Collaborative strategy platform",
    description:
      "An open-source playbook platform for sharing and collaborating on strategies, workflows, and best practices.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    githubUrl: "https://github.com/sagars2004/OpenPlaybook",
  },
  {
    id: "iq",
    title: "IQ",
    tagline: "AI-Powered Customer Intent Engine for Prioritization",
    description:
      "An intelligent question-answering system leveraging AI and natural language processing for insightful responses.",
    technologies: ["Python", "OpenAI", "FastAPI"],
    githubUrl: "https://github.com/sagars2004/innovation-garage-25",
  },
  {
    id: "dinder",
    title: "Dinder",
    tagline: "Social Dining Companion for Group Coordination",
    description:
      "Launched a full-stack web app to aid RPI students with indecision on group dining and restaurant discovery, used Javascript and Google API services to provide intelligent preference ranking, interactive real-time websocket sessions, and personal matches.",
    technologies: ["MongoDB", "Node.js", "Socket.io", "React", "Express.js"],
    githubUrl: "https://github.com/sagars2004/Dinder",
  },
];
