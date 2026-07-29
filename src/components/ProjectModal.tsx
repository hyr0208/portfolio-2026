import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { ProjectItem } from "../data/types";
import { SKILLS } from "../data/skills";

const CATEGORY_LABEL: Record<ProjectItem["category"], string> = {
  work: "회사 프로젝트",
  team: "팀 프로젝트",
  single: "개인 프로젝트",
};

const DURATION_LABEL: Record<ProjectItem["duration"], string> = {
  "long-term": "장기 프로젝트",
  side: "사이드 프로젝트",
};

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/60 p-4 backdrop-blur-sm sm:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[88vh] w-full max-w-2xl overflow-hidden rounded-3xl bg-card shadow-2xl"
          >
            <button
              onClick={onClose}
              aria-label="닫기"
              className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-paper/90 text-ink shadow"
            >
              ✕
            </button>

            <div className="modal-scroll max-h-[88vh] overflow-y-auto">
              <div className="aspect-video w-full overflow-hidden bg-paper-dim">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
              </div>

              <div className="p-6 sm:p-8">
                <div className="mb-3 flex flex-wrap items-center gap-2 text-xs font-semibold">
                  <span className="rounded-full bg-clay/10 px-3 py-1 text-clay">
                    {CATEGORY_LABEL[project.category]}
                  </span>
                  <span className="rounded-full bg-sage-dim px-3 py-1 text-sage">
                    {DURATION_LABEL[project.duration]}
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-ink">{project.title}</h3>

                <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                {project.apis && project.apis.length > 0 && (
                  <div className="mt-6">
                    <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-faint uppercase">
                      APIs
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.apis.map((api) => (
                        <span
                          key={api}
                          className="rounded-full border border-line px-3 py-1 text-xs font-medium text-muted"
                        >
                          {api}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-6">
                  <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-faint uppercase">
                    Tech Highlights
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techHighlights.map((h) => (
                      <span
                        key={h}
                        className="rounded-full bg-paper-dim px-3 py-1 text-xs font-medium text-ink"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-faint uppercase">
                    Stack
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.skills.map((key) => (
                      <div
                        key={key}
                        className="flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-xs font-medium text-ink"
                      >
                        <img src={SKILLS[key].icon} alt="" className="h-3.5 w-3.5" />
                        {SKILLS[key].label}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-faint uppercase">
                    주요 기능
                  </p>
                  <ul className="space-y-2">
                    {project.mainFeatures.map((f) => (
                      <li key={f} className="flex gap-2 text-sm leading-relaxed text-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-clay" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {(project.githubUrl || project.siteUrl) && (
                  <div className="mt-8 flex flex-wrap gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper"
                      >
                        Github 바로가기
                      </a>
                    )}
                    {project.siteUrl && (
                      <a
                        href={project.siteUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-ink hover:border-clay hover:text-clay"
                      >
                        사이트로 이동
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
