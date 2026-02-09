import React, { useRef } from "react";
import { motion, Variants, useMotionValue, useSpring, useTransform } from "framer-motion";
import { GraduationCap, School, BookOpen } from 'lucide-react';

/* ─── Animation Variants ─────────────────────────────────────────────────── */

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const cardEntryVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.2, 0, 0, 1] } 
  },
};

/* ─── Data ──────────────────────────────────────────────────────────────── */

const academicHistory = [
  {
    institution: "University of Agriculture, Faisalabad",
    degree: "BS Computer Science",
    duration: "2022 – 2026",
    location: "Faisalabad, PK",
    grade: "3.1 CGPA",
    description: "Core CS principles, Algorithms, and AI research with a focus on HCI.",
    icon: <GraduationCap />,
    skills: ["Data Structures", "AI", "HCI"]
  },
  {
    institution: "Prem Sati Trust Kamalia",
    degree: "Intermediate (Pre-Med)",
    duration: "2019 – 2021",
    location: "Kamalia, PK",
    grade: "Grade: A",
    description: "Intensive studies in empirical sciences and analytical biology.",
    icon: <BookOpen />,
    skills: ["Biology", "Chemistry", "Physics"]
  },
  {
    institution: "Govt. High School Kamalia",
    degree: "Matric, Science",
    duration: "2017 – 2019",
    location: "Kamalia, PK",
    grade: "1025/1100",
    description: "Foundational mathematics and honors-level science basics.",
    icon: <School />,
    skills: ["Mathematics", "Science"]
  }
];

/* ─── Card Component ─────────────────────────────────────────────────────── */

const EducationCard = ({ edu }: { edu: any }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      variants={cardEntryVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative h-full min-w-[85vw] md:min-w-0 bg-[#0a0c10]/40 backdrop-blur-md p-6 md:p-8 transition-all duration-700 hover:bg-[#0d1117]/90 flex flex-col justify-between overflow-hidden border  md:border-none rounded-md border-slate-400/30"
    >
      {/* Subtle Shine */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
        <motion.div 
          style={{
            background: "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.03) 45%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.03) 55%, transparent 80%)",
            x: useTransform(mouseXSpring, [-0.5, 0.5], ["-100%", "100%"]),
          }}
          className="absolute inset-0 w-[200%]"
        />
      </div>

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div className="text-black bg-gradient-to-tr from-blue-600 to-sky-400 p-2 rounded-full transition-colors duration-500 shadow-sm">
            {React.cloneElement(edu.icon, { size: 18, strokeWidth: 1.5 })}
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[9px] md:text-[10px] font-medium text-slate-600 group-hover:text-slate-500 uppercase tracking-[0.2em] transition-colors">
              {edu.duration}
            </span>
            <span className="text-[8px] md:text-[9px] text-blue-400/50 font-medium mt-1 uppercase tracking-widest">{edu.grade}</span>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm md:text-base font-medium text-slate-200 tracking-tight group-hover:text-white transition-colors duration-500 leading-snug">
            {edu.institution}
          </h3>
          <p className="text-[9px] md:text-[10px] text-blue-400/50 font-medium uppercase tracking-widest">
            {edu.degree}
          </p>
          <p className="text-[11px] md:text-xs text-slate-500 leading-relaxed pt-3 font-light">
            {edu.description}
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-x-4 gap-y-1 relative z-10 border-t border-white/10 pt-5">
        {edu.skills.map((skill: string, i: number) => (
          <span
            key={i}
            className="text-[8px] md:text-[9px]  text-slate-600 font-medium uppercase tracking-widest group-hover:text-slate-400 transition-colors duration-500"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

/* ─── Main Section ───────────────────────────────────────────────────────── */

const Education = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-2 bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="mb-8 md:mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-6 bg-blue-500/40" />
            <span className="text-[9px] md:text-[10px] font-bold text-blue-500 uppercase tracking-[0.4em]">Academic Path</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight">
            Academic <span className="text-slate-500">History</span>
          </h2>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto md:px-6">
        <motion.div 
          ref={scrollRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex overflow-x-auto pb-6 px-6 gap-4 snap-x snap-mandatory hide-scrollbar md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-px md:bg-white/5 md:border md:border-white/10 border border-white/5 rounded-md overflow-hidden md:rounded-xl md:px-0 md:pb-0 shadow-2xl"
        >
          {academicHistory.map((edu, index) => (
            <div key={index} className="snap-center">
              <EducationCard edu={edu} />
            </div>
          ))}
        </motion.div>

        {/* Mobile Swipe Hint */}
        <div className="flex justify-center mt-2 md:hidden">
            <p className="text-[9px] text-slate-600 uppercase tracking-[0.2em] animate-pulse">
                Swipe to explore →
            </p>
        </div>
      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Education;