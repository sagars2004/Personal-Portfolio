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
    tagline: "Distraction-Aware Productivity and Focus Tool",
    description:
      "Developing a local-first Chrome extension AI layer that passively captures behavioral signals to model personalized focus fingerprints with React and SQLite endpoints. Building real-time pattern recognition with Llama 3.1 inference to detect distraction loops and generate feedback.",
    technologies: [],
    githubUrl: "https://github.com/sagars2004/Flowstate",
  },
  {
    id: "rentpad",
    title: "RentPad Homes",
    tagline: "Intelligent Property Management",
    description:
      "Contributing to early-stage startup development of a full-stack platform to refine property management for small-to-mid-size landlords and investors, providing enhanced tools to manage automated payments, maintenance requests, and tenant communication. More coming soon...",
    technologies: [],
    githubUrl: "https://www.linkedin.com/company/rentpad-homes/",
  },
  {
    id: "openplaybook",
    title: "OpenPlaybook",
    tagline: "CV-Powered Sports Analytics",
    description:
      "Built an open-source application enabling computer vision pipeline using Python's supervision and inference libraries to ingest sports video data, apply object detection and tracking, and extract structured insights for deeper, context-aware understanding of in-game actions through OpenCV.",
    technologies: [],
    githubUrl: "https://github.com/sagars2004/OpenPlaybook",
  },
  {
    id: "iq",
    title: "IQ",
    tagline: "AI-Powered Customer Intent Engine for Prioritization",
    description:
      "Spearheaded ideation of a queueing interface to triage customer intent and enhance appointment flow for automotiveretail stores, built a prototype using React, Express and SQLite, and led 4 fellow interns to pitch against 75+ teams in the 2025 Innovation Garage hackathon.",
    technologies: [],
    githubUrl: "https://github.com/sagars2004/innovation-garage-25",
  },
  {
    id: "dinder",
    title: "Dinder",
    tagline: "Social Dining Companion for Group Coordination",
    description:
      "Launched a full-stack web app to aid RPI students with indecision on group dining and restaurant discovery, used the MERN stack, Javascript, and Google API services to provide intelligent preference ranking, interactive real-time websocket sessions, and personal matches.",
    technologies: [],
    githubUrl: "https://github.com/sagars2004/Dinder",
  },
];
