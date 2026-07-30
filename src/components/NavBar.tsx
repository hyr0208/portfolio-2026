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

const MOBILE_LINKS = [
  { id: "hero", label: "Home", icon: "⌂" },
  { id: "about", label: "About", icon: "○" },
  { id: "career", label: "Career", icon: "◇" },
  { id: "projects", label: "Project", icon: "□" },
  { id: "contact", label: "Contact", icon: "↗" },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection([...new Set([...LINKS, ...MOBILE_LINKS].map((l) => l.id))]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={clsx(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
          scrolled
            ? "border-b border-line bg-paper/85 backdrop-blur-md"
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

          <span
            aria-hidden
            className="rounded-full border border-line bg-card/80 px-3 py-1.5 text-[11px] font-semibold tracking-wide text-muted md:hidden"
          >
            PORTFOLIO
          </span>
        </div>
      </header>

      <nav
        aria-label="모바일 주요 메뉴"
        className="mobile-tab-bar fixed inset-x-3 bottom-3 z-50 grid grid-cols-5 rounded-[1.4rem] border border-white/70 bg-card/92 px-1.5 pt-1.5 shadow-[0_12px_40px_rgba(34,31,26,0.18)] backdrop-blur-xl md:hidden"
      >
        {MOBILE_LINKS.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollTo(link.id)}
            aria-current={active === link.id ? "page" : undefined}
            className={clsx(
              "flex min-h-12 flex-col items-center justify-center gap-0.5 rounded-2xl text-[10px] font-semibold transition-all active:scale-95",
              active === link.id ? "bg-ink text-paper" : "text-muted",
            )}
          >
            <span className="text-base leading-none" aria-hidden>{link.icon}</span>
            <span>{link.label}</span>
          </button>
        ))}
      </nav>
    </>
  );
}
