import React, { useEffect, useRef, useState } from "react";
import { universityLanguages, professionalSkills } from "../data";
import {
  Code,
  Type,
  Palette,
  Wind,
  Atom,
  ArrowRight,
  FileJson,
  FileText,
  Github,
  Database,
  Feather,
  Terminal,
  CodeSquare,
  Laptop,
} from "lucide-react";

/* ─── icon registry ──────────────────────────────────────────────────────── */
const iconMap = {
  "C++": Code,
  Python: Code,
  "C#": Code,
  TypeScript: Type,
  JavaScript: Terminal,
  HTML5: CodeSquare,
  CSS3: Palette,
  "Tailwind CSS": Wind,
  React: Atom,
  "Next.js": ArrowRight,
  JSON: FileJson,
  Markdown: FileText,
  GitHub: Github,
  Supabase: Database,
  "Shadcn/ui": Feather,
};

/* ─── gradient icon — blue-600 → black ──────────────────────────────────── */
const GradIcon = ({ name, size = 22 }) => {
  const Icon = iconMap[name] || Laptop;
  const id = `gi-${name.replace(/\W/g, "")}`;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <defs>
        <linearGradient
          id={id}
          x1="0"
          y1="0"
          x2="24"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="100%" stopColor="#2D2C49" />
        </linearGradient>
      </defs>
      <Icon
        width={size}
        height={size}
        style={{ stroke: `url(#${id})`, strokeWidth: 1.8, fill: "none" }}
      />
    </svg>
  );
};

/* ─── animated counter ───────────────────────────────────────────────────── */
const AnimatedNumber = ({ value, label, delay = 0 }) => {
  const [cur, setCur] = useState(0);
  const ref = useRef(null);
  const done = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !done.current) {
          done.current = true;
          const target = parseInt(value.replace("+", ""));
          const t0 = performance.now();
          const tick = (now) => {
            const p = Math.min((now - t0) / 1400, 1);
            const ease = 1 - Math.pow(1 - p, 3);
            setCur(Math.floor(ease * target));
            if (p < 1) requestAnimationFrame(tick);
            else setCur(target);
          };
          setTimeout(() => requestAnimationFrame(tick), delay);
        }
      },
      { threshold: 0.4 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value, delay]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center gap-2 py-10 px-6 relative group
                 border-r border-gray-400/40 last:border-r-0 overflow-hidden"
    >
      {/* hover fill */}
      <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <span
        className="font-bold text-3xl lg:text-4xl
                       bg-gradient-to-bl from-blue-100 to-slate-400/50
                       bg-clip-text text-transparent"
      >
        {cur}
        {value.includes("+") ? "+" : ""}
      </span>
      <span className="text-[11px] uppercase tracking-[0.2em] text-slate-400 font-medium">
        {label}
      </span>
    </div>
  );
};

/* ─── skill card ─────────────────────────────────────────────────────────── */
const SkillCard = ({ skill, large = false }) => {
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className={`
        relative overflow-hidden rounded-2xl border cursor-pointer select-none
        transition-all duration-300 ease-out
        ${
          hov
            ? "-translate-y-1 border-blue-700/50 shadow-[0_8px_32px_rgba(37,99,235,0.25),inset_0_0_24px_rgba(37,99,235,0.06)]"
            : "translate-y-0 border-gray-500/70 shadow-[0_2px_10px_rgba(0,0,0,0.4)]"
        }
        ${large ? "p-7 bg-[#111827]" : "p-5 bg-[#0f172a]"}
      `}
    >
      {/* card inner gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-transparent to-transparent pointer-events-none" />

      {/* hover top-left glow */}
      <div
        className={`absolute -top-8 -left-8 w-28 h-28 rounded-full bg-blue-600/15
                       blur-2xl transition-opacity duration-300 pointer-events-none
                       ${hov ? "opacity-100" : "opacity-0"}`}
      />

      {/* icon shell */}
      <div
        className={`
        relative z-10 w-11 h-11 rounded-full flex items-center justify-center mb-4
        border transition-all duration-300
        ${
          hov
            ? "bg-gradient-to-br from-blue-100 to-black border-gray-300/60 shadow-[0_0_12px_rgba(37,99,235,0.3)]"
            : "bg-gradient-to-bl from-blue-100 to-slate-800/50 border-slate-300/60"
        }
      `}
      >
        <GradIcon name={skill.name} size={20} />
      </div>

      {/* name */}
      <h4 className="relative z-10 font-semibold text-[14px] text-white mb-1.5 tracking-tight leading-snug">
        {skill.name}
      </h4>

      {/* description — HIGH contrast: slate-300 instead of muted */}
      <p className="relative z-10 text-[12px] leading-relaxed text-slate-400">
        {skill.description}
      </p>

      {/* bottom glow bar */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-[2px]
                       bg-gradient-to-r from-blue-600 via-blue-500 to-transparent
                       transition-opacity duration-300
                       ${hov ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
};

/* ─── section label row ──────────────────────────────────────────────────── */
const SectionLabel = ({ children }) => (
  <div className="flex items-center gap-3 mb-6">
    <span className="text-[10px] tracking-[0.28em] uppercase text-blue-400 font-medium whitespace-nowrap">
      {children}
    </span>
    <div className="flex-1 h-px bg-gradient-to-r from-blue-800/50 to-transparent" />
  </div>
);

/* ══════════════════════════════════════════════════════════════════════════ */
export default function SkillsSection() {
  return (
    /* outer wrapper — matches the site's dark navy background */
    <section
      id="skills"
      className="relative w-full bg-gradient-to-t from-[#0d1117] via-slate-600/15 to-black overflow-hidden pb-24 pt-20"
      style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}
    >
      {/* font import — Poppins matches the rest of the portfolio */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
      `}</style>

      {/* ── atmospheric background ── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* top-left radial */}
        <div
          className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full
                        bg-blue-800/10 blur-[120px]"
        />
        {/* right mid */}
        <div
          className="absolute top-1/3 -right-24 w-[320px] h-[320px] rounded-full
                        bg-blue-700/8 blur-[100px]"
        />
        {/* bottom center */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] rounded-full
                        bg-indigo-800/8 blur-[90px]"
        />
      </div>

      {/* ── HEADING ── */}
      <div className="relative z-10 text-center mb-14 px-6">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          <span className="bg-gradient-to-bl from-blue-100 to-slate-400/50 border-gray-300/60 bg-clip-text text-transparent">
            Skills
          </span>
          <span className="text-white"> &amp; Technologies</span>
        </h2>
        <p className="text-slate-400 text-[14px] max-w-xl mx-auto leading-relaxed">
          From university fundamentals to cutting-edge web technologies — here's
          my technical arsenal for building innovative solutions.
        </p>
      </div>

      {/* ── ACADEMIC FOUNDATION ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 mb-12">
        <SectionLabel>Academic Foundation</SectionLabel>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          style={
            typeof window !== "undefined" && window.innerWidth >= 768
              ? { gridTemplateColumns: "1fr 1.08fr 0.95fr" }
              : {}
          }
        >
          {universityLanguages.map((s) => (
            <SkillCard key={s.name} skill={s} large />
          ))}
        </div>
      </div>

      {/* ── PROFESSIONAL TOOLKIT ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 mb-14">
        <SectionLabel>Professional Toolkit</SectionLabel>

        {/* Row 1: 4 cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
          {professionalSkills.slice(0, 4).map((s) => (
            <SkillCard key={s.name} skill={s} />
          ))}
        </div>

        {/* Row 2: 3 wider cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          {professionalSkills.slice(4, 7).map((s) => (
            <SkillCard key={s.name} skill={s} />
          ))}
        </div>

        {/* Row 3: 5 compact cards */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          {professionalSkills.slice(7).map((s) => (
            <SkillCard key={s.name} skill={s} />
          ))}
        </div>
      </div>

      {/* ── STATS ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        <div
          className="relative rounded-2xl border border-gray-400/50 overflow-hidden
                        bg-[#0a1020]"
        >
          {/* top accent line */}
          <div
            className="absolute top-0 left-[10%] right-[10%] h-0.5
                          bg-gradient-to-r from-transparent via-gray-200/40 to-transparent"
          />

          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { number: "8+", label: "Technologies", delay: 0 },
              { number: "2", label: "Years Learning", delay: 120 },
              { number: "10+", label: "Projects Built", delay: 240 },
              { number: "2026", label: "Graduation", delay: 360 },
            ].map((s) => (
              <AnimatedNumber
                key={s.label}
                value={s.number}
                label={s.label}
                delay={s.delay}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
