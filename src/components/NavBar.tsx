import { useEffect, useState } from "react";
import clsx from "clsx";
import { useActiveSection } from "../hooks/useActiveSection";

const LINKS = [
  { id: "about", label: "About" },
  { id: "career", label: "Career" },
  { id: "projects", label: "Project" },
  { id: "certification", label: "Cert." },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(LINKS.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "bg-paper/85 backdrop-blur-md border-b border-line"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <button
          onClick={() => scrollTo("hero")}
          className="text-lg font-extrabold tracking-tight text-ink"
        >
          yyyerin<span className="text-clay">.</span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={clsx(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                active === link.id
                  ? "bg-ink text-paper"
                  : "text-muted hover:text-ink",
              )}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="메뉴 열기"
        >
          <span
            className={clsx(
              "h-0.5 w-5 bg-ink transition-transform",
              open && "translate-y-2 rotate-45",
            )}
          />
          <span
            className={clsx(
              "h-0.5 w-5 bg-ink transition-opacity",
              open && "opacity-0",
            )}
          />
          <span
            className={clsx(
              "h-0.5 w-5 bg-ink transition-transform",
              open && "-translate-y-2 -rotate-45",
            )}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line bg-paper px-6 pb-4 md:hidden">
          {LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={clsx(
                "rounded-lg px-4 py-3 text-left text-sm font-medium",
                active === link.id ? "bg-ink text-paper" : "text-muted",
              )}
            >
              {link.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
