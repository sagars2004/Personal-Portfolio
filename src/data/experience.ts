export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  type: "work" | "research";
}

export const experiences: Experience[] = [
  {
    id: "carmax",
    title: "Technology Intern",
    company: "CarMax, Inc.",
    location: "Richmond, VA",
    startDate: "Jun 2025",
    endDate: "Present",
    description:
      "Spearheading configuration and implementation of an Oracle ERP supplier portal built on Java and HTML to enable streamlined vendor onboarding, automated communication, and improved procurement for third-party supplier registration.",
    type: "work",
  },
  {
    id: "rentpad",
    title: "Lead AI & Applications Developer",
    company: "RentPad Homes",
    location: "Remote",
    startDate: "Jun 2025",
    endDate: "Present",
    description:
      "Contributing to early-stage startup development of a full-stack property management platform to automate rent collection and streamline maintenance requests for small-to-mid-size investors and landlords through automation and tenant-centric tools.",
    type: "work",
  },
  {
    id: "rpi-software",
    title: "Undergraduate Software Research Assistant",
    company: "Rensselaer Polytechnic Institute",
    location: "Troy, NY",
    startDate: "Sep 2024",
    endDate: "Jan 2025",
    description:
      "Designed C software to train artificial neural networks for various regression, data compression, and backpropagation tasks, supporting undergraduate course teaching for RPI's Biomedical Engineering department.",
    type: "research",
  },
  {
    id: "rpi-ml",
    title: "Machine Learning Research Intern",
    company: "Rensselaer Polytechnic Institute",
    location: "Troy, NY",
    startDate: "Jan 2024",
    endDate: "Jul 2024",
    description:
      "Independently developed a machine learning algorithm using JupyterLab and PyTorch to classify elastic stress contour images of barrier coating microstructures, assisting in postdoctoral research under RPI's department of Mechanical Engineering.",
    type: "research",
  },
  {
    id: "northwestern",
    title: "Financial Representative Intern",
    company: "Northwestern Mutual",
    location: "Albany, NY",
    startDate: "Jun 2023",
    endDate: "Nov 2024",
    description:
      "Leveraged Monte Carlo probability simulations and predictive data visualization tools to assess wealth accumulation, asset allocation, and risk management strategies and enhance decision-making for financial portfolio construction.",
    type: "work",
  },
];
