import { GraduationCap, School, BookOpen, MapPin, Calendar } from 'lucide-react';

const academicHistory = [
  {
    institution: "University of Agriculture, Faisalabad",
    degree: "Bachelor's degree, Computer Science",
    duration: "Sep 2022 – Aug 2026",
    location: "Faisalabad, Pakistan",
    grade: "3.1 CGPA",
    details: [
      "Currently focusing on core CS principles including Data Structures and Algorithms.",
      "Active participation in the Computing Society and regional hackathons.",
      "Engaging in advanced coursework involving Human-Computer Interaction and AI."
    ],
    icon: <GraduationCap className="w-5 h-5" />,
    current: true
  },
  {
    institution: "Prem Sati Trust Kamalia",
    degree: "Intermediate (Pre-Med)",
    duration: "2019 – 2021",
    location: "Kamalia, Pakistan",
    grade: "Grade: A",
    details: [
      "Deep-dived into Biology, Chemistry, and Physics.",
      "Developed a strong analytical foundation in foundational sciences."
    ],
    icon: <BookOpen className="w-5 h-5" />,
    current: false
  },
  {
    institution: "Govt. High School Kamalia",
    degree: "Matric, Science",
    duration: "2017 – 2019",
    location: "Kamalia, Pakistan",
    grade: "1025/1100",
    details: [
      "Focused on Physics, Chemistry, Biology, and Mathematics basics.",
      "Achieved high honors with a score of 1025 out of 1100."
    ],
    icon: <School className="w-5 h-5" />,
    current: false
  }
];

const Education = () => {
  return (
    <>
         <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight text-gray-100 dark:text-gray-100">
            My <span className="bg-gradient-to-bl from-blue-100 to-slate-400/50 border-gray-300/60 bg-clip-text text-transparent">Education </span>
          </h2>
          <p className="text-base text-gray-400 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Evolving from the precision of empirical sciences to the architecture of computational logics.
          </p>
        </div>
      <div className="relative space-y-12 max-w-4xl mx-auto">
      {/* Timeline Line */}
      <div className="absolute left-0 md:left-8 top-2 bottom-2 w-px bg-gradient-to-b from-blue-500/50 via-slate-800 to-transparent" />

      {academicHistory.map((edu, index) => (
        <div key={index} className="relative pl-8 md:pl-20 group cursor-pointer">
          {/* Timeline Node */}
          <div className={`absolute left-[-4px] md:left-[28px] top-1.5 w-2 h-2 rounded-full transition-all duration-300 ${
            edu.current 
            ? "bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,1)] scale-125" 
            : "bg-slate-700 group-hover:bg-blue-400"
          }`} />
          
          <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-500/40 p-6 rounded-2xl hover:border-blue-500/30 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-sky-500/20 text-blue-400 group-hover:bg-sky-500/80 group-hover:text-white transition-all">
                  {edu.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {edu.institution}
                  </h3>
                  <p className="text-blue-400/90 font-medium">{edu.degree}</p>
                </div>
              </div>
              
              <div className="flex flex-col items-start md:items-end text-sm text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" /> {edu.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" /> {edu.location}
                </span>
                <span className="mt-2 px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-blue-300 font-bold text-[11px]">
                  {edu.grade}
                </span>
              </div>
            </div>

            <ul className="space-y-2 mt-4">
              {edu.details.map((detail, i) => (
                <li key={i} className="text-slate-400 text-sm leading-relaxed flex gap-3">
                  <span className="text-blue-500/60 mt-1">•</span>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Education;