import { useMemo, useState } from "react";
import clsx from "clsx";
import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { PROJECTS } from "../data/projects";
import type { ProjectItem } from "../data/types";

const FILTERS: { key: "all" | ProjectItem["category"]; label: string }[] = [
  { key: "all", label: "All" },
  { key: "work", label: "Work" },
  { key: "team", label: "Team" },
  { key: "single", label: "Single" },
];

const PAGE_SIZE = 6;

export function Projects() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["key"]>("all");
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState<ProjectItem | null>(null);

  const filtered = useMemo(
    () => (filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter],
  );

  const visible = expanded ? filtered : filtered.slice(0, PAGE_SIZE);
  const remaining = filtered.length - visible.length;

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28 sm:px-10">
      <SectionHeading
        index="03"
        kicker="Project"
        title="Projects"
        description="회사, 팀, 개인으로 진행한 프로젝트들입니다."
      />

      <div className="mb-10 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => {
              setFilter(f.key);
              setExpanded(false);
            }}
            className={clsx(
              "rounded-full px-5 py-2 text-sm font-semibold transition-colors",
              filter === f.key
                ? "bg-clay text-paper"
                : "border border-line text-muted hover:border-clay hover:text-clay",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={() => setSelected(project)} />
        ))}
      </div>

      {filtered.length > PAGE_SIZE && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setExpanded((v) => !v)}
            className="rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-clay hover:text-clay"
          >
            {expanded ? "접기" : `더보기 (${remaining})`}
          </button>
        </div>
      )}

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
