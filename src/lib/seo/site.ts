import { about, personalInfo } from "@/data/portfolio";

const siteUrl = "https://prabhdeep.portfolio";
export const ogLocale = "en_IN";

export const siteConfig = {
  siteUrl,
  homeUrl: `${siteUrl}/`,
  resumeUrl: `${siteUrl}${personalInfo.resumeUrl}`,
  updatedAt: new Date().toISOString(),
  siteName: "Prabhdeep Singh Portfolio",
  title: `${personalInfo.name} — Full-Stack & AI Engineer`,
  description: personalInfo.tagline,
  author: personalInfo.name,
  creator: personalInfo.name,
  email: personalInfo.email,
  github: personalInfo.github,
  linkedin: personalInfo.linkedin,
  locale: "en-IN",
  ogLocale,
  ogImage: "/og-image.svg",
  keywords: [
    "Prabhdeep Singh",
    "Full-Stack Engineer",
    "Software Development Intern",
    "NestJS Developer",
    "React.js Developer",
    "AI Engineer",
    "Agentic AI",
    "n8n Automation",
    "Node.js",
    "Spring Boot",
    "Docker",
    "PostgreSQL",
    "ElderConnect",
    "DermaSense",
    "AI Automation",
    "Full-Stack Development",
  ],
  geo: {
    region: "IN-HR",
    placename: "Gurugram, Haryana, India",
    latitude: 28.4595,
    longitude: 77.0266,
    position: "28.4595;77.0266",
    icbm: "28.4595, 77.0266",
  },
  sameAs: [personalInfo.github, personalInfo.linkedin],
  aboutSummary: about.summary,
} as const;

export const canonicalPages = [siteConfig.homeUrl] as const;
