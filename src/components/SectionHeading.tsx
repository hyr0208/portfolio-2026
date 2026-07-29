import { motion } from "framer-motion";

interface SectionHeadingProps {
  index: string;
  kicker: string;
  title: string;
  description?: string;
  dark?: boolean;
}

export function SectionHeading({ index, kicker, title, description, dark }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-14 sm:mb-20"
    >
      <div className="mb-3 flex items-center gap-3">
        <span className="text-sm font-semibold tabular-nums text-clay">{index}</span>
        <div className={`h-px w-10 ${dark ? "bg-night-line" : "bg-line"}`} />
        <p
          className={`text-xs font-semibold tracking-[0.3em] uppercase ${
            dark ? "text-faint" : "text-muted"
          }`}
        >
          {kicker}
        </p>
      </div>
      <h2
        className={`text-3xl font-extrabold tracking-tight sm:text-4xl ${
          dark ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-3 max-w-xl text-sm leading-relaxed ${dark ? "text-faint" : "text-muted"}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
