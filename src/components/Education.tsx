import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { EDUCATION } from "../data/education";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-28 sm:px-10">
      <SectionHeading
        index="05"
        kicker="Education"
        title="Education"
        description="학력 정보입니다."
      />

      <div className="space-y-6">
        {EDUCATION.map((edu) => (
          <motion.div
            key={edu.school}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-line bg-card p-6 sm:p-8"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="text-sm font-semibold text-clay">{edu.period}</p>
                <h3 className="mt-1 text-xl font-bold text-ink">{edu.school}</h3>
                <p className="mt-1 text-sm font-medium text-muted">
                  {edu.major} · {edu.degree} · {edu.status}
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
