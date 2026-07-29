import { motion } from "framer-motion";
import type { ProjectItem } from "../data/types";

interface ProjectCardProps {
  project: ProjectItem;
  onOpen: () => void;
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const firstLine = project.description.split("\n")[0];

  return (
    <motion.button
      layout
      onClick={onOpen}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-card text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="aspect-video w-full overflow-hidden bg-paper-dim">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-base font-bold text-ink">{project.title}</h3>
        <p className="line-clamp-2 flex-1 text-sm leading-relaxed text-muted">{firstLine}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-sage-dim px-2.5 py-1 text-xs font-medium text-sage"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.button>
  );
}
