export type SkillKey =
  | "html"
  | "css"
  | "js"
  | "ts"
  | "react"
  | "tailwind"
  | "electron"
  | "github"
  | "figma"
  | "zeplin"
  | "discord"
  | "reactquery"
  | "storybook"
  | "axios"
  | "firebase"
  | "vite"
  | "docker"
  | "jenkins"
  | "office"
  | "accounting"
  | "ps"
  | "ill";

export interface CareerItem {
  period: string;
  company: string;
  role: string;
  bullets: string[];
  skills: SkillKey[];
}

export interface EducationItem {
  school: string;
  major: string;
  degree: string;
  period: string;
  status: string;
  description: string;
}

export type CertCategory = "accounting" | "design" | "office";

export interface CertificationItem {
  id: number;
  name: string;
  issuer: string;
  date: string;
  category: CertCategory;
}

export type ProjectCategory = "work" | "team" | "single";
export type ProjectDuration = "long-term" | "side";

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  skills: SkillKey[];
  apis?: string[];
  techHighlights: string[];
  category: ProjectCategory;
  duration: ProjectDuration;
  githubUrl?: string;
  siteUrl?: string;
  hasDetail: boolean;
  mainFeatures: string[];
}
