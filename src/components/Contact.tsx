import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-night py-28 text-paper">
      <div className="dot-texture pointer-events-none absolute inset-0 opacity-10" />
      <div className="pointer-events-none absolute top-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-clay/20 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-6 text-center sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-faint uppercase">
            06 / Contact
          </p>
          <h2 className="text-5xl font-black tracking-tight sm:text-6xl">Thank You</h2>
          <p className="mt-4 text-lg font-semibold text-clay">봐주셔서 감사합니다 :)</p>
          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-faint">
            더 나은 사용 경험을 만들기 위해
            <br className="hidden sm:block" /> 기술은 깊게, 마음은 따뜻하게 성장하겠습니다.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/hyr0208"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-paper px-7 py-3 text-sm font-semibold text-night transition-transform hover:-translate-y-0.5"
            >
              GitHub
            </a>
            <a
              href="mailto:hhyr0208@gmail.com"
              className="rounded-full border border-night-line px-7 py-3 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5 hover:border-clay hover:text-clay"
            >
              Email
            </a>
          </div>
        </motion.div>

        <div className="mt-20 flex flex-col items-center gap-1 border-t border-night-line pt-8 text-xs text-faint">
          <p>Copyright 2026. hanyerin all rights reserved.</p>
          <p>React, Tailwind CSS 기반으로 제작된 사이트입니다.</p>
        </div>
      </div>
    </section>
  );
}
