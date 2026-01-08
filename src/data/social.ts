export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: "github" | "linkedin" | "email" | "twitter";
}

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/sagars2004",
    icon: "github",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sagarsahu0301/",
    icon: "linkedin",
  },
];

export const githubUsername = "sagars2004";

export const resumeUrl = "/resume.pdf"; // Add your resume PDF to the public folder

export const location = "Troy, NY";

export const email = "contact@sagarsahu.com"; // Update with your actual email
