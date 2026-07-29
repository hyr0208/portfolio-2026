import type { SkillKey } from "./types";

import iconHtml from "../assets/images/icon_html.svg";
import iconCss from "../assets/images/icon_css.svg";
import iconJs from "../assets/images/icon_javascript.svg";
import iconTs from "../assets/images/ts.png";
import iconReact from "../assets/images/react.png";
import iconTailwind from "../assets/images/tailwind.png";
import iconElectron from "../assets/images/electron.png";
import iconGithub from "../assets/images/icon_github.svg";
import iconFigma from "../assets/images/icon_figma.svg";
import iconZeplin from "../assets/images/zeplin.png";
import iconDiscord from "../assets/images/icon_discord.svg";
import iconReactQuery from "../assets/images/ReactQuery.png";
import iconStorybook from "../assets/images/storybook-icon.svg";
import iconAxios from "../assets/images/axios.png";
import iconFirebase from "../assets/images/firebase.png";
import iconVite from "../assets/images/Vite.svg";
import iconDocker from "../assets/images/docker.png";
import iconJenkins from "../assets/images/jenkins.png";
import iconOffice from "../assets/images/office.png";
import iconAccounting from "../assets/images/accounting.png";
import iconPs from "../assets/images/Photoshop.png";
import iconIll from "../assets/images/illustrator.png";

export const SKILLS: Record<SkillKey, { label: string; icon: string }> = {
  html: { label: "HTML5", icon: iconHtml },
  css: { label: "CSS3", icon: iconCss },
  js: { label: "JavaScript", icon: iconJs },
  ts: { label: "TypeScript", icon: iconTs },
  react: { label: "React", icon: iconReact },
  tailwind: { label: "Tailwind CSS", icon: iconTailwind },
  electron: { label: "Electron", icon: iconElectron },
  github: { label: "GitHub", icon: iconGithub },
  figma: { label: "Figma", icon: iconFigma },
  zeplin: { label: "Zeplin", icon: iconZeplin },
  discord: { label: "Discord", icon: iconDiscord },
  reactquery: { label: "React Query", icon: iconReactQuery },
  storybook: { label: "Storybook", icon: iconStorybook },
  axios: { label: "Axios", icon: iconAxios },
  firebase: { label: "Firebase", icon: iconFirebase },
  vite: { label: "Vite", icon: iconVite },
  docker: { label: "Docker", icon: iconDocker },
  jenkins: { label: "Jenkins", icon: iconJenkins },
  office: { label: "OA / Office", icon: iconOffice },
  accounting: { label: "회계", icon: iconAccounting },
  ps: { label: "Photoshop", icon: iconPs },
  ill: { label: "Illustrator", icon: iconIll },
};
