export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  type: "work" | "research";
  logo?: string;
  skills?: string[];
}

export const experiences: Experience[] = [
  {
    id: "incoming",
    title: "To be announced",
    company: "Incoming",
    location: "TBD",
    startDate: "",
    endDate: "",
    description:
      "Stay tuned...",
    type: "work",
    logo: "",
    skills: [],
  },
  {
    id: "craft",
    title: "Undergraduate Researcher",
    company: "Center for Research Toward Advancing Financial Technology",
    location: "Troy, NY",
    startDate: "Sep 2025",
    endDate: "Dec 2025",
    description:
      "Engineered a hybrid bidirectional traceability system using Sentence Transformers and Pandas, implementing a dual-index architecture that maps unstructured PDF contract clauses to FOL representations via vector embeddings and cosine similarity. Enchanced transparency of computable contract data by developing a deterministic pipeline to classify modifications with explainable logic, validating the system's ability to align with original requirements through extensive testing on financial datasets.",
    type: "work",
    logo: "/logos/craft.png",
    skills: ["SBERT", "Pandas", "Hugging Face"],
  },
  {
    id: "carmax",
    title: "Software Engineer Intern",
    company: "CarMax, Inc",
    location: "Richmond, VA",
    startDate: "Jun 2025",
    endDate: "Aug 2025",
    description:
      "Deployed a production-wide E2E automation pipeline using Python and C# to associate 3,600+ Oracle Invoice records, reducing a 4-step audit process with a 20x speedup by leveraging RESTful API integrations and backend validation through Postman and PL/SQL. Configured a full-stack web application built on OCI services to streamline 3rd-party vendor onboarding, enable secure data exchange via SaaS/PaaS tools, and optimize registration workflows for high-visibility suppliers by cutting manual entry time by 70%.",
    type: "work",
    logo: "/logos/carmax.png",
    skills: ["Python", "C#", "Oracle Cloud", "SQL"],
  },
  {
    id: "rpi",
    title: "Machine Learning Research Intern",
    company: "Rensselaer Polytechnic Institute",
    location: "Troy, NY",
    startDate: "Jan 2024",
    endDate: "Jul 2024",
    description:
      "Independently developed a machine learning algorithm using Scikit-learn and PyTorch to classify elastic stress contour images of barrier coating microstructures, assisted in postdoctoral research under RPI's department of Aerospace Engineering for optimal material selection. Employed convolutional neural networks (CNNs) to assess thermal images of materials within combustion chambers, resulting in a 250% workflow acceleration by replacing finite element simulations with ML-based predictions.",
    type: "work",
    logo: "/logo.png",
    skills: ["PyTorch", "Scikit-learn", "CNNs"],
  },
  {
    id: "northwestern",
    title: "Financial Representative Intern",
    company: "Northwestern Mutual",
    location: "Albany, NY",
    startDate: "Jun 2023",
    endDate: "Nov 2024",
    description:
      "Leveraged Monte Carlo probability simulations in Microsoft Dynamics and curated Power BI dashboards to manage growth-oriented business plans for 200+ prospects, enabled client retention by 300% through data-driven insights in the wealth accumulation, risk management, and retirement planning arenas. Operated as a Series 17-55 licensed financial representative, providing comprehensive financial planning and advisory services in the insurance space to clients.",
    type: "work",
    logo: "/logos/northwestern.png",
    skills: ["Power BI", "Monte Carlo Probability"],
  },
];
