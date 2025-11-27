import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";

function Landing() {
  const [text] = useTypewriter({
    words: ["Frontend Developer", "React Developer", "UI Engineer", "Web Developer"],
    loop: 0,
    delaySpeed: 2200,
    typeSpeed: 90,
  });

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#05060b] px-6 text-slate-50 md:px-10 lg:px-20">

      {/* 🌌 LAYER 1 — Aurora sweep */}
      <motion.div
        className="pointer-events-none absolute inset-0 bg-[conic-gradient(at_top_left,_#00eaff,_#7738ff,_#ff3ee7,_#00eaff)] opacity-[0.28] blur-[120px]"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      />

      {/* 🌫️ LAYER 2 — Soft Fog Drift */}
      <motion.div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.14),_transparent_60%)] opacity-[0.1] mix-blend-screen"
        animate={{ x: [0, -40, 20, 0], y: [0, -20, 10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ⭐ LAYER 3 — Parallax liquid blobs */}
      <motion.div
        className="absolute top-[-180px] left-[-120px] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,_rgba(0,225,255,0.32),_transparent_60%)] blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 50, 20, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-[-150px] right-[-150px] h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,_rgba(168,85,247,0.28),_transparent_60%)] blur-[100px]"
        animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
        transition={{ duration: 28, repeat: Infinity }}
      />

      {/* ✨ Floating tiny particles */}
      {[...Array(35)].map((_, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute rounded-full bg-white/30"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{ y: [0, -30, 0], opacity: [0.1, 0.65, 0.1] }}
          transition={{ duration: Math.random() * 7 + 5, repeat: Infinity }}
        />
      ))}

      {/* ───────────────────────────── */}
      {/* TOP BAR */}
      {/* ───────────────────────────── */}
      <div className="relative z-10 flex items-center justify-between py-6 text-xs uppercase tracking-[0.25em] text-slate-400">
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Portfolio
        </span>
        <span>{new Date().getFullYear()}</span>
      </div>

      {/* ───────────────────────────── */}
      {/* MAIN HERO SECTION */}
      {/* ───────────────────────────── */}
      <div className="relative z-10 flex min-h-[calc(100vh-5rem)] items-center justify-center">
        <div className="grid max-w-7xl w-full grid-cols-1 gap-16 lg:grid-cols-2">

          {/* LEFT — ULTRA PREMIUM TEXT BLOCK */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="space-y-10"
          >
            {/* TYPEWRITER ROLE */}
            <div className="text-xs md:text-sm uppercase tracking-[0.35em] text-slate-300/80">
              {text}
              <Cursor cursorColor="#22d3ee" />
            </div>

            {/* NAME */}
            <div className="space-y-5">
              <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl drop-shadow-[0_0_25px_rgba(0,235,255,0.2)]">
                <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-purple-300 bg-clip-text text-transparent">
                  Sudeshna Sahu
                </span>
              </h1>

              {/* PRO TAGS - PREMIUM STYLE */}
              <div className="flex flex-wrap gap-3 text-[0.75rem] uppercase">
                {["React", "TypeScript", "UI Engineering", "Frontend"].map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-slate-700/60 bg-slate-900/60 px-4 py-1 backdrop-blur-md text-slate-300 tracking-widest"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap items-center gap-5">
              {/* PRIMARY BUTTON — Glow */}
              <motion.a
                href="/sudesna_cv.pdf"
                download="sudesna_cv.pdf"
                whileHover={{
                  scale: 1.06,
                  boxShadow: "0 0 30px rgba(0,225,255,0.6)",
                }}
                whileTap={{ scale: 0.95 }}
                className="rounded-2xl bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-purple-500 px-7 py-3 text-sm font-semibold text-slate-900 shadow-[0_0_20px_rgba(0,225,255,0.4)]"
              >
                Download CV
              </motion.a>

              {/* GHOST BUTTON — Glass */}
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="rounded-2xl border border-slate-600 bg-slate-900/40 px-7 py-3 text-sm font-semibold text-slate-100 shadow-lg backdrop-blur-md"
              >
                View Work
              </motion.a>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-5 text-xl text-slate-200 mt-6">
              {[
                { icon: "fa-linkedin-in", color: "#0A66C2", link: "#" },
                { icon: "fa-github", color: "#e5e7eb", link: "#" },
                { icon: "fa-twitter", color: "#1DA1F2", link: "#" },
                { icon: "fa-instagram", color: "#E1306C", link: "#" }
              ].map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.link}
                  whileHover={{ scale: 1.25, y: -3 }}
                  className="transition-all"
                >
                  <i className={`fab ${item.icon}`} style={{ color: item.color }} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — 3D AVATAR ORBIT SPHERE (UPGRADED) */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.1 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative h-[350px] w-[350px] lg:h-[420px] lg:w-[420px]">

              {/* Outer glowing orbit */}
              <motion.div
                className="absolute inset-0 rounded-full border border-cyan-300/30 shadow-[0_0_60px_rgba(0,235,255,0.3)]"
                animate={{ rotate: 360 }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              />

              {/* Soft inner aura */}
              <div className="absolute inset-10 rounded-full bg-[radial-gradient(circle,_rgba(0,235,255,0.20),_transparent_70%)] blur-xl" />

              {/* Initials / Logo center */}
              <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-slate-950/90 border border-slate-700 shadow-2xl">
                <span className="text-4xl font-semibold text-slate-100">
                  SS
                </span>
              </div>

              {/* Floating skills orbit */}
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: -360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              >
                {["React", "TypeScript", "Tailwind", "UI/UX"].map((skill, idx) => {
                  const positions = [
                    "top-0 left-1/2 -translate-x-1/2",
                    "top-1/2 left-0 -translate-y-1/2",
                    "top-1/2 right-0 -translate-y-1/2",
                    "bottom-0 left-1/2 -translate-x-1/2"
                  ];
                  return (
                    <div
                      key={idx}
                      className={`absolute ${positions[idx]} rounded-full bg-slate-900/80 border border-slate-600 px-4 py-1 text-xs tracking-wider`}
                    >
                      {skill}
                    </div>
                  );
                })}
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
