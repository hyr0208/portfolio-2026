import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { CAREER } from "../data/career";
import { SKILLS } from "../data/skills";

export function Career() {
  return (
    <section id="career" className="mx-auto max-w-6xl px-6 py-28 sm:px-10">
      <SectionHeading index="02" kicker="Career" title="Career" description="경력 사항입니다." />

      <div className="relative space-y-14 border-l border-line pl-8 sm:pl-12">
        {CAREER.map((item, i) => (
          <motion.div
            key={item.company}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative"
          >
            <span className="absolute top-1.5 -left-9.25 h-2.5 w-2.5 rounded-full bg-clay ring-4 ring-paper sm:-left-13.25" />

            <p className="text-sm font-semibold text-clay">{item.period}</p>
            <h3 className="mt-1 text-xl font-bold text-ink sm:text-2xl">{item.company}</h3>
            <p className="mt-1 text-sm font-medium text-muted">{item.role}</p>

            <ul className="mt-5 space-y-2">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2 text-sm leading-relaxed text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-faint" />
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {item.skills.map((key) => (
                <span
                  key={key}
                  className="flex items-center gap-1.5 rounded-full bg-sage-dim px-3 py-1 text-xs font-medium text-sage"
                >
                  <img src={SKILLS[key].icon} alt="" className="h-3.5 w-3.5" />
                  {SKILLS[key].label}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
