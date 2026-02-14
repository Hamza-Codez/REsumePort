import {
  Award,
  Zap,
  ShieldCheck,
  Monitor,
  Code,
  Cpu,
  ExternalLink,
  BrainCircuit,
  Trophy,
  Wallpaper,
  Layers,
} from "lucide-react";

const certificates = [
  {
    title: "Gen AI Application Development",
    issuer: "UETians Lahore & iCode Guru",
    date: "Nov 2025",
    skills: ["Generative AI", "Prompt Engineering", "AI Workflow Design"],
    moreSkills: 1,
    description:
      "Certified developer with hands-on understanding of building AI-powered applications.",
    category: "certifications",
    icon: <BrainCircuit className="w-5 h-5" />,
  },
  {
    title: "Google Prompting Essentials",
    issuer: "Google",
    date: "Oct 2025",
    id: "07BZGTG9UCE4",
    skills: ["5-Step Framework", "AI Agents", "Data Analysis"],
    description:
      "Mastered prompting for everyday tasks and sophisticated AI role-playing agents.",
    category: "certifications",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    title: "Google UX Design Specialization",
    issuer: "Google",
    date: "Oct 2025",
    id: "01AI94Y3TKLA",
    skills: ["User Research", "Wireframing", "WCAG"],
    moreSkills: 5,
    description: "Complete design process from empathy to testable prototypes.",
    category: "certifications",
    icon: <Wallpaper className="w-5 h-5" />,
  },
  {
    title: "Google Project Management",
    issuer: "Google",
    date: "Oct 2025",
    id: "CVJDUGBX8LOF",
    skills: ["Agile", "Scrum", "Artifacts"],
    description:
      "Foundations of Agile and Scrum roles, events, and documentation.",
    category: "certifications",
    icon: <Layers className="w-5 h-5" />,
  },
  {
    title: "Full Stack Web Development",
    issuer: "Government of Punjab",
    date: "June 2024",
    id: "dbcd424a79",
    skills: ["Javascript", "PHP", "mySql"],
    description:
      "Comprehensive training in front-end and back-end web development technologies.",
    category: "certifications",
    icon: <Code className="w-5 h-5" />,
  },
  {
    title: "Meta Hacker Cup 2025",
    issuer: "Meta",
    date: "Nov 2025",
    skills: ["Competitive Programming", "Problem Solving"],
    description: "Participation in the annual global programming competition.",
    category: "projects",
    icon: <Trophy className="w-5 h-5" />,
  },
  {
    title: "Google IT Support Specialization",
    issuer: "Google",
    date: "Oct 2025",
    id: "A4UIQJEQGYTA",
    skills: ["Linux", "DNS", "Command-Line"],
    description:
      "Hands-on experience with networking and technical system troubleshooting.",
    category: "certifications",
    icon: <Monitor className="w-5 h-5" />,
  },
  {
    title: "Tech Entrepreneurship & Hackathon",
    issuer: "UAF Computing Society",
    date: "Nov 2025",
    skills: ["Entrepreneurship", "Innovation"],
    description:
      "Hackathon participation at the University of Agriculture, Faisalabad.",
    category: "projects",
    icon: <Cpu className="w-5 h-5" />,
  },
  {
    title: "Google Business Intelligence",
    issuer: "Google",
    date: "Oct 2025",
    id: "O3MNQ0XPOVDS",
    skills: ["Data Warehousing", "ETL", "Dashboards"],
    moreSkills: 4,
    description:
      "Gained experience in data modeling and business-driven decision making.",
    category: "certifications",
    icon: <ShieldCheck className="w-5 h-5" />,
  },
];

const gradientBtnClass2 =
  "bg-gradient-to-tl from-blue-500 to-blue-400 text-white shadow-lg";

const Certifications = () => {
  return (
    <>
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight text-gray-100 dark:text-gray-100">
          My{" "}
          <span className="bg-gradient-to-bl from-blue-100 to-slate-400/50 border-gray-300/60 bg-clip-text text-transparent">
            Certifications
          </span>
        </h2>
        <p className="text-base text-gray-400 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          A showcase of my dedication to continuous learning and professional growth.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="group relative cursor-pointer bg-slate-900/40 backdrop-blur-sm border border-slate-400/20 p-6 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] flex flex-col justify-between overflow-hidden"
          >
            {/* Watermark Issuer Name */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500">
              <span className="text-4xl font-bold uppercase tracking-tighter whitespace-nowrap -rotate-12">
                {cert.issuer}
              </span>
            </div>

            <div>
              <div className="flex justify-between items-start mb-4 relative z-10">
                <div
                  className={`p-3 rounded-xl bg-blue-500/10 text-sky-400 transition-all duration-300`}
                >
                  {cert.icon}
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    {cert.date}
                  </p>
                  {cert.id && (
                    <p className="text-[9px] text-blue-500/60 font-mono mt-1 group-hover:text-blue-400 transition-colors">
                      ID: {cert.id}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2 relative z-10">
                <h3 className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors leading-tight">
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-400 font-medium italic">
                  {cert.issuer}
                </p>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mt-2">
                  {cert.description}
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 relative z-10 items-center">
              {cert.skills.map((skill, i) => (
                <span
                  key={i}
                  className="text-[10px] font-semibold px-2 py-1 rounded bg-blue-500/5 border border-blue-500/10 text-blue-300/80 group-hover:border-blue-500/30 transition-colors"
                >
                  {skill}
                </span>
              ))}
              {cert.moreSkills && (
                <span className="text-[10px] text-slate-500 font-medium">
                  +{cert.moreSkills} more
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Certifications;
