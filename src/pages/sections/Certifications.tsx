import React, { useRef } from "react";
import { motion, Variants, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Zap, ShieldCheck, Monitor, Code, Cpu,
  BrainCircuit, Trophy, Wallpaper, Layers,
} from "lucide-react";

/* ─── Animation Variants ─────────────────────────────────────────────────── */

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
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

const certificates = [
  {
    title: "Gen AI Application Development",
    issuer: "UETians & iCode Guru",
    date: "Nov 2025",
    skills: ["GenAI", "Prompting", "Workflow"],
    description: "Building AI-powered applications with advanced prompt engineering.",
    icon: <BrainCircuit />,
  },
  {
    title: "Google Prompting Essentials",
    issuer: "Google",
    date: "Oct 2025",
    skills: ["AI Agents", "Analysis"],
    description: "Mastering AI role-playing agents and sophisticated data analysis frameworks.",
    icon: <Zap />,
  },
  {
    title: "Google UX Design Specialization",
    issuer: "Google",
    date: "Oct 2025",
    skills: ["Research", "Wireframing"],
    description: "End-to-end design process from user empathy to testable prototypes.",
    icon: <Wallpaper />,
  },
  {
    title: "Google Project Management",
    issuer: "Google",
    date: "Oct 2025",
    skills: ["Agile", "Scrum", "Lean"],
    description: "Foundations of Agile roles, scrum events, and project artifacts.",
    icon: <Layers />,
  },
  {
    title: "Full Stack Web Development",
    issuer: "Govt. of Punjab",
    date: "June 2024",
    skills: ["JS", "PHP", "MySQL"],
    description: "Comprehensive training in modern front-end and back-end architectures.",
    icon: <Code />,
  },
  {
    title: "Meta Hacker Cup 2025",
    issuer: "Meta",
    date: "Nov 2025",
    skills: ["Algorithms", "CP"],
    description: "Participation in the prestigious global competitive programming challenge.",
    icon: <Trophy />,
  },
  {
    title: "Google IT Support",
    issuer: "Google",
    date: "Oct 2025",
    skills: ["Linux", "DNS", "CLI"],
    description: "Networking, system administration, and technical troubleshooting.",
    icon: <Monitor />,
  },
  {
    title: "Tech Entrepreneurship",
    issuer: "UAF Computing",
    date: "Nov 2025",
    skills: ["Innovation", "Pitching"],
    description: "Hackathon participation at the University of Agriculture, Faisalabad.",
    icon: <Cpu />,
  },
  {
    title: "Google Business Intelligence",
    issuer: "Google",
    date: "Oct 2025",
    skills: ["ETL", "Tableau", "SQL"],
    description: "Data warehousing and business-driven decision making strategies.",
    icon: <ShieldCheck />,
  },
];

/* ─── Card Component ─────────────────────────────────────────────────────── */

const CertCard = ({ cert }: { cert: any }) => {
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
      // Updated classes: added 'min-w-[85vw] md:min-w-0' for the mobile slider effect
      className="group relative h-full min-w-[85vw] md:min-w-0 bg-[#0a0c10]/40 backdrop-blur-md p-8 transition-all duration-700 hover:bg-[#0d1117]/90 flex flex-col justify-between overflow-hidden border border-white/5 md:border-none"
    >
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
          <div className="text-black bg-gradient-to-tr from-slate-600 to-zinc-400 p-2 rounded-full transition-colors duration-500 shadow-sm">
            {React.cloneElement(cert.icon, { size: 18, strokeWidth: 1.5 })}
          </div>
          <span className="text-[10px] font-medium text-slate-600 group-hover:text-slate-500 uppercase tracking-[0.2em] transition-colors">
            {cert.date}
          </span>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-medium text-slate-200 tracking-tight group-hover:text-white transition-colors duration-500 leading-snug">
            {cert.title}
          </h3>
          <p className="text-[10px] text-blue-400/50 font-medium uppercase tracking-widest">
            {cert.issuer}
          </p>
          <p className="text-xs text-slate-500 leading-relaxed pt-3 font-light line-clamp-2">
            {cert.description}
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-x-4 gap-y-1 relative z-10 border-t border-white/10 pt-5">
        {cert.skills.map((skill: string, i: number) => (
          <span
            key={i}
            className="text-[9px] text-slate-600 font-medium uppercase tracking-widest group-hover:text-slate-400 transition-colors duration-500"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-2 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-6 bg-blue-500/40" />
            <span className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.4em]">Credentials</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-light text-white ">
            Professional <span className="text-slate-500">Milestones</span>
          </h2>
        </motion.div>
      </div>

      {/* CONTAINER LOGIC:
          - Mobile: flex overflow-x-auto (Horizontal Slider)
          - Desktop: grid grid-cols-3 (Original Grid)
      */}
      <div className="max-w-6xl mx-auto md:px-6">
        <motion.div 
          ref={scrollRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex overflow-x-auto pb-8 px-6 gap-4 snap-x snap-mandatory hide-scrollbar md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-px md:bg-white/5 md:border md:border-white/10 border border-slate-300/20 rounded-md overflow-hidden md:rounded-xl md:overflow-hidden md:px-0 md:pb-0"
        >
          {certificates.map((cert, index) => (
            <div key={index} className="snap-center">
              <CertCard cert={cert} />
            </div>
          ))}
        </motion.div>
        
        {/* Hint for mobile users */}
        <div className="flex justify-center mt-4 md:hidden">
            <p className="text-[10px] text-slate-500 uppercase tracking-widest animate-pulse">
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

export default Certifications;