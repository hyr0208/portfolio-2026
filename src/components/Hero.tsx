import { motion } from "framer-motion";
import yerinImg from "../assets/images/yerin.png";

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="dot-texture pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-clay/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-10 h-72 w-72 rounded-full bg-sage/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 sm:px-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="mb-5 text-sm font-semibold tracking-[0.3em] text-clay uppercase">
            안녕하세요
          </p>
          <h1 className="text-5xl leading-[1.05] font-black tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Front-End
            <br />
            Developer
          </h1>
          <p className="typewriter mt-6 max-w-xs border-r-2 border-clay pr-1 text-xl font-semibold text-muted sm:text-2xl">
            프론트엔드 개발자 한예린입니다
          </p>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
            따뜻한 사용자 경험을 만들어가는 프론트엔드 개발자입니다. 꾸준한 사이드
            프로젝트로 새로운 기술을 익히고, 실제 서비스로 완성하는 것을 좋아합니다.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <a
              href="https://github.com/hyr0208"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5"
            >
              GitHub
            </a>
            <a
              href="mailto:hhyr0208@gmail.com"
              className="rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 hover:border-clay hover:text-clay"
            >
              Email
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="animate-float relative">
            <div className="absolute inset-6 rounded-[3rem] bg-gradient-to-br from-clay/20 to-sage/20" />
            <img
              src={yerinImg}
              alt="한예린 프로필 일러스트"
              className="relative w-full drop-shadow-xl"
            />
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs font-medium text-muted"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        Scroll
        <span className="block h-8 w-px bg-muted" />
      </motion.button>
    </section>
  );
}
