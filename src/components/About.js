import React from "react";
import { motion } from "framer-motion";

const skills = [
  "React",
  "JavaScript (ES6+)",
  "TypeScript",
  "Angular",
  "Tailwind CSS",
  "Redux / RTK",
  "REST / APIs",
  "HTML5 & CSS3",
  "Responsive Design",
  "UI Architecture",
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const skillParent = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.2 },
  },
};

const skillItem = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

function About() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* soft glow blobs */}
      <div className="pointer-events-none">
        <div className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-purple-600/30 blur-3xl" />
        <div className="absolute top-1/3 -right-10 h-80 w-80 rounded-full bg-indigo-500/25 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-pink-500/20 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-20 flex flex-col gap-16">
        {/* Title + small breadcrumb */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="space-y-3"
        >
          <p className="inline-flex items-center gap-2 text-xs md:text-sm uppercase tracking-[0.25em] text-slate-400">
            <span className="h-[1px] w-8 bg-slate-500" />
            About
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Frontend Engineer
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-violet-400 to-indigo-400">
              crafting clean, scalable interfaces.
            </span>
          </h1>
        </motion.div>

        {/* Main layout: left intro, right profile/stats */}
        <div className="grid md:grid-cols-[1.6fr_1.2fr] gap-10 lg:gap-14 items-start">
          {/* LEFT: intro + text + highlights + skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-10"
          >
            <section className="space-y-4 text-base md:text-lg text-slate-200 leading-relaxed">
              <p>
                I’m a frontend developer focused on building reliable, maintainable, and
                visually refined interfaces using <span className="font-semibold">React</span>,{" "}
                <span className="font-semibold">TypeScript</span>,{" "}
                <span className="font-semibold">Angular</span> and modern CSS frameworks.
              </p>
              <p>
                My work is centered around clean architecture, reusable UI patterns, and
                performance-driven engineering. I enjoy taking products from rough idea to
                polished, production-ready experiences that feel fast and intuitive.
              </p>
              <p>
                I care deeply about developer experience and team collaboration—writing
                readable code, documenting decisions, and keeping the UI layer predictable
                and easy to extend.
              </p>
            </section>

            {/* Highlights */}
            <section className="grid sm:grid-cols-3 gap-4 md:gap-6">
              {[
                {
                  label: "Experience",
                  value: "3+ yrs",
                  desc: "Building production UIs",
                },
                {
                  label: "Specialization",
                  value: "Frontend",
                  desc: "React • Angular • TS",
                },
                {
                  label: "Focus",
                  value: "Performance",
                  desc: "Clean, scalable code",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 180, damping: 14 }}
                  className="rounded-2xl border border-slate-700/80 bg-slate-900/70 px-5 py-4 shadow-[0_18px_45px_rgba(15,23,42,0.8)]"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    {item.label}
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-slate-50">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs text-slate-400">{item.desc}</p>
                </motion.div>
              ))}
            </section>

            {/* Skills */}
            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4 flex items-center gap-2">
                Core Skills
                <span className="h-[1px] flex-1 bg-gradient-to-r from-pink-500/60 via-violet-500/60 to-transparent" />
              </h2>

              <motion.div
                variants={skillParent}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-wrap gap-3"
              >
                {skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    variants={skillItem}
                    whileHover={{
                      y: -2,
                      scale: 1.04,
                      boxShadow: "0 14px 40px rgba(15,23,42,0.8)",
                    }}
                    className="px-4 py-2 rounded-full text-sm border border-slate-600/80 bg-slate-900/70 text-slate-100 backdrop-blur-md cursor-default hover:border-pink-500/70 hover:bg-gradient-to-r hover:from-pink-500/20 hover:to-indigo-500/20 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </section>
          </motion.div>

          {/* RIGHT: profile / timeline-ish block / CTA */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="relative rounded-3xl border border-slate-700/70 bg-slate-900/80 backdrop-blur-xl p-6 md:p-7 shadow-[0_20px_60px_rgba(0,0,0,0.75)] overflow-hidden">
              {/* subtle corner gradient */}
              <div className="pointer-events-none absolute -top-32 -right-24 h-56 w-56 rounded-full bg-pink-500/25 blur-3xl" />

              {/* “profile” header */}
              <div className="relative flex items-center gap-4">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-tr from-pink-500 to-indigo-500 flex items-center justify-center text-2xl font-bold shadow-lg">
                  SS
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
                    Frontend Developer
                  </p>
                  <p className="text-xl font-semibold">Sudeshna Sahu</p>
                  <p className="text-xs text-slate-400 mt-1">
                    React • TypeScript • Angular • UI Engineering
                  </p>
                </div>
              </div>

              {/* mini “timeline” */}
              <div className="relative mt-8 space-y-6">
                <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-slate-500/70 via-slate-600/40 to-transparent" />

                {[
                  {
                    title: "Product-driven development",
                    text: "Translating product requirements into clean UI flows with reusable components and predictable state.",
                  },
                  {
                    title: "Frontend architecture",
                    text: "Structuring projects for long-term maintainability—feature-based folders, clear boundaries, and typed APIs.",
                  },
                  {
                    title: "Collaboration & ownership",
                    text: "Working closely with designers and backend engineers to ship stable, user-centric features.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="relative pl-8">
                    <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-pink-500 shadow-[0_0_0_4px_rgba(236,72,153,0.35)]" />
                    <p className="text-sm font-semibold text-slate-100">
                      {item.title}
                    </p>
                    <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="relative mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-pink-600 to-indigo-600 px-7 py-3 text-sm font-semibold shadow-lg shadow-pink-500/30 hover:shadow-indigo-500/30 transition-shadow"
              >
                <span>Let’s build something</span>
                <span className="text-lg">↗</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
