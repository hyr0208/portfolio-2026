import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { SectionHeading } from "./SectionHeading";
import { CERTIFICATIONS, CERT_CATEGORY_LABEL } from "../data/certification";
import type { CertCategory } from "../data/types";

const CATEGORIES = Array.from(new Set(CERTIFICATIONS.map((c) => c.category))) as CertCategory[];

export function Certification() {
  const [filter, setFilter] = useState<"all" | CertCategory>("all");

  const filtered = useMemo(
    () => (filter === "all" ? CERTIFICATIONS : CERTIFICATIONS.filter((c) => c.category === filter)),
    [filter],
  );

  return (
    <section id="certification" className="mx-auto max-w-6xl px-6 py-28 sm:px-10">
      <SectionHeading
        index="04"
        kicker="Certification"
        title="Certification"
        description="보유하고 있는 자격증 목록입니다."
      />

      <div className="mb-8 flex flex-wrap gap-2">
        <button
          onClick={() => setFilter("all")}
          className={clsx(
            "rounded-full px-4 py-1.5 text-sm font-semibold transition-colors",
            filter === "all" ? "bg-ink text-paper" : "border border-line text-muted",
          )}
        >
          All
        </button>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={clsx(
              "rounded-full px-4 py-1.5 text-sm font-semibold transition-colors",
              filter === cat ? "bg-ink text-paper" : "border border-line text-muted",
            )}
          >
            {CERT_CATEGORY_LABEL[cat]}
          </button>
        ))}
      </div>

      <div className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-card">
        {filtered.map((cert, i) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.03 }}
            className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
          >
            <div className="flex items-center gap-3">
              <span className="w-14 shrink-0 rounded-full bg-sage-dim px-2.5 py-1 text-center text-xs font-semibold text-sage">
                {CERT_CATEGORY_LABEL[cert.category]}
              </span>
              <span className="text-sm font-semibold text-ink sm:text-base">{cert.name}</span>
            </div>
            <div className="flex items-center gap-4 pl-[4.25rem] text-xs text-muted sm:pl-0">
              <span>{cert.issuer}</span>
              <span className="tabular-nums text-faint">{cert.date}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
