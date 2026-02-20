export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "finsh",
    title: "Finsh iOS App",
    tagline: "Finance & Budgeting Tool",
    description: "Finsh is a local-first mobile app that helps new graduates and early-career professionals make sense of their first paycheck. It breaks down salary, taxes, and benefits in clear, simple terms, showing exactly where your money goes and how to make smarter financial choices. With interactive insights, easy-to-read visuals, and long-term planning strategies, Finsh empowers users to plan, prioritize, and take control of their finances from day one, before their money hits the bank. Additionally, it is extremely efficient and scalable with a serverless backend, client-side computation, and on-device state management. Currently available for free on iPhone and iPad.",
    technologies: [],
    githubUrl: "https://sagars2004.github.io/Finsh/",
    featured: true,
    image: "/logos/finsh_mockup2.png",
  },
  {
    id: "ibm-hackathon",
    title: "Silent Bottleneck Detector",
    tagline: "Real-Time Engineering Performance Orchestration",
    description: "Pitched an AI-driven platform that autonomously detects and resolves hidden workflow inefficiencies using IBM watsonx.ai (Granite 4.0) and Langflow agents. Designed IBM Cloudant and Flask API integrations, enabling real-time cognitive analysis of team health signals, workload rebalancing, and self-healing via watsonx Orchestrate.",
    technologies: [],
    githubUrl: "https://drive.google.com/file/d/1ZVkswYWpIkXS5gArC29n2Zfsv4r8n5Tn/view?usp=sharing",
  },
  {
    id: "portfolio",
    title: "Developer Portfolio",
    tagline: "Modern Personal Website",
    description: "Built a high-performance personal portfolio using Next.js 14, TypeScript, and Tailwind CSS to showcase my skills, experience, and projects. Implemented Framer Motion animations and glassmorphism UI with a backdrop-filter and particle system, and optimized with server components and dynamic imports.",
    technologies: [],
    githubUrl: "https://github.com/sagars2004/personal-portfolio",
  },
  {
    id: "flowstate",
    title: "Flowstate",
    tagline: "Distraction-Aware Productivity Extension",
    description:
      "Developed a local Chrome extension AI layer that passively captures behavioral signals to model personalized focus fingerprints with React and SQLite endpoints. Built a real-time pattern recognition prototype with Llama 3.1 inference to detect distraction loops and generate feedback.",
    technologies: [],
    githubUrl: "https://github.com/sagars2004/Flowstate",
  },
  {
    id: "openplaybook",
    title: "OpenPlaybook",
    tagline: "CV-Powered Sports Analytics Simulation",
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
