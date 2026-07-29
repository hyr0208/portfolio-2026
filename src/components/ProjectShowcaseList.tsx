import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import type { ProjectItem } from "../data/types";

const CATEGORY_LABEL: Record<ProjectItem["category"], string> = {
  work: "Work",
  team: "Team",
  single: "Single",
};

interface ProjectShowcaseListProps {
  projects: ProjectItem[];
  onOpen: (project: ProjectItem) => void;
}

export function ProjectShowcaseList({
  projects,
  onOpen,
}: ProjectShowcaseListProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const hovered = projects.find((p) => p.id === hoveredId) ?? null;

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springX = useSpring(cursorX, {
    stiffness: 300,
    damping: 30,
    mass: 0.5,
  });
  const springY = useSpring(cursorY, {
    stiffness: 300,
    damping: 30,
    mass: 0.5,
  });

  return (
    <div
      className="relative"
      onMouseMove={(e) => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
      }}
    >
      <div className="border-t border-line">
        {projects.map((project, i) => (
          <button
            key={project.id}
            onClick={() => onOpen(project)}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() =>
              setHoveredId((cur) => (cur === project.id ? null : cur))
            }
            className="group flex w-full items-center gap-4 border-b border-line py-6 text-left transition-[padding] duration-300 hover:pl-3 sm:gap-6 sm:py-8"
          >
            <span className="w-7 shrink-0 text-xs font-semibold tabular-nums text-clay sm:w-10 sm:text-sm">
              {String(i + 1).padStart(2, "0")}
            </span>

            <div className="h-12 w-16 shrink-0 overflow-hidden rounded-lg bg-paper-dim sm:hidden">
              <img
                src={project.image}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>

            <h3 className="min-w-0 flex-1 truncate text-xl leading-tight font-extrabold tracking-tight text-ink transition-colors group-hover:text-clay sm:text-2xl lg:text-3xl">
              {project.title}
            </h3>

            <span className="hidden shrink-0 text-xs font-semibold tracking-[0.2em] text-faint uppercase sm:block">
              {CATEGORY_LABEL[project.category]}
            </span>

            <span className="ml-1 shrink-0 text-xl text-faint opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:text-clay group-hover:opacity-100">
              ↗
            </span>
          </button>
        ))}
      </div>

      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-50 hidden w-72 overflow-hidden rounded-2xl border border-line shadow-2xl sm:block"
        style={{
          x: springX,
          y: springY,
          translateX: "24px",
          translateY: "-60%",
        }}
        animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.92 }}
        transition={{ duration: 0.2 }}
      >
        <AnimatePresence mode="wait">
          {hovered && (
            <motion.img
              key={hovered.id}
              src={hovered.image}
              alt=""
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="aspect-video w-full bg-paper-dim object-cover"
            />
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
