import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { SKILLS } from "../data/skills";
import type { SkillKey } from "../data/types";

const FRONTEND_SKILLS: SkillKey[] = [
  "react",
  "vite",
  "tailwind",
  "electron",
  "html",
  "css",
  "js",
  "ts",
];
const TOOL_SKILLS: SkillKey[] = ["github", "discord", "figma", "zeplin"];

function SkillRow({ title, skills }: { title: string; skills: SkillKey[] }) {
  return (
    <div>
      <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-faint uppercase">
        {title}
      </p>
      <div className="flex flex-wrap gap-3">
        {skills.map((key) => (
          <div
            key={key}
            className="flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2 text-sm font-medium text-ink shadow-sm"
          >
            <img src={SKILLS[key].icon} alt="" className="h-4 w-4" />
            {SKILLS[key].label}
          </div>
        ))}
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28 sm:px-10">
      <SectionHeading index="01" kicker="About" title="About me" />

      <div className="grid grid-cols-1 gap-16 md:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="md:col-span-3"
        >
          <p className="text-2xl leading-relaxed font-semibold text-ink sm:text-3xl">
            따뜻한 사용자 경험을 만들어가는
            <br />
            프론트엔드 개발자 <span className="text-clay">한예린</span>입니다.
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
            2021년부터 저축은행 도메인의 프론트엔드 개발자로 일하며 대형
            시스템의 공통 컴포넌트 설계부터 데스크톱 애플리케이션 배포까지
            폭넓게 경험했습니다. 사이드 프로젝트로 실제 사용자가 있는 서비스를
            꾸준히 만들며 기술은 깊게, 마음은 따뜻하게 성장하고 있습니다.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-8 md:col-span-2"
        >
          <SkillRow title="Front-End" skills={FRONTEND_SKILLS} />
          <SkillRow title="Tools" skills={TOOL_SKILLS} />
        </motion.div>
      </div>
    </section>
  );
}
