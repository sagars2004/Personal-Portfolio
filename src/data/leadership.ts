export interface Leadership {
  id: string;
  title: string;
  organization: string;
  description: string;
  startDate: string;
  endDate: string;
}

export const leadership: Leadership[] = [
  {
    id: "rcos",
    title: "Member",
    organization: "Rensselaer Center for Open Source (RCOS)",
    description:
      "Contributing to open-source projects and collaborating with fellow students on software development initiatives.",
    startDate: "2023",
    endDate: "Present",
  },
  {
    id: "gdg",
    title: "Member",
    organization: "Google Developer Groups on Campus",
    description:
      "Participating in developer community events, workshops, and hackathons focused on Google technologies.",
    startDate: "2023",
    endDate: "Present",
  },
  {
    id: "tep",
    title: "Member",
    organization: "Tau Epsilon Phi Fraternity",
    description:
      "Active member contributing to brotherhood, community service, and leadership development activities.",
    startDate: "2022",
    endDate: "Present",
  },
];
