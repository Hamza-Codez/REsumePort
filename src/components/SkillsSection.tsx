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

// Component to handle the counting animation for numbers
const AnimatedNumber = ({ value, label, index }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const animatedRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const target = parseInt(value.replace("+", ""));
            const duration = 1000;
            const start = performance.now();
            const animate = (now) => {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              const count = Math.floor(progress * target);
              setCurrentValue(count);
              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setCurrentValue(target);
              }
            };
            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (animatedRef.current) {
      observer.observe(animatedRef.current);
    }

    return () => observer.disconnect();
  }, [value]);

  return (
    <div
      ref={animatedRef}
      className="text-center fade-in-up"
      style={{ animationDelay: `${(index + 1) * 0.1}s` }}
    >
      <div className="text-3xl font-black text-gradient mb-2">
        {currentValue}
        {value.includes("+") ? "+" : ""}
      </div>
      <div className="text-muted-foreground">{label}</div>
    </div>
  );
};

const App = () => {
  const sectionRef = useRef(null);

  // Define a map of skill names to their corresponding Lucide icons
  const skillIconMap = {
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillItems = entry.target.querySelectorAll(".skill-item");
            skillItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add("visible");
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const SkillCard = ({ skill, index }) => {
    const IconComponent = skillIconMap[skill.name] || Laptop; // Default to Laptop icon if not found
    return (
      <div
        className={`skill-item scale-in p-6 rounded-2xl border ${skill.bgColor} ${skill.borderColor} transition-all duration-300 hover:shadow-lg group cursor-pointer`}
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className="skill-icon mb-4 mx-auto flex justify-center items-center w-14 h-14 rounded-lg bg-white dark:bg-gray-800 group-hover:scale-110 transition-transform duration-300 p-2">
          <IconComponent className="w-8 h-8 object-contain text-primary dark:text-primary-foreground" />
        </div>
        <h3 className="text-lg font-semibold text-center mb-2 text-gray-800 dark:text-gray-200">
          {skill.name}
        </h3>
        <p className="text-sm text-muted-foreground text-center leading-relaxed">
          {skill.description}
        </p>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background dark:bg-gradient-to-b from-zinc-900 via-gray-600 to-background  text-foreground transition-colors duration-300">
      <section ref={sectionRef} id="skills" className="py-20 relative w-full">
        {/* Background elements for visual flair */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl opacity-30 animate-pulse delay-500"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              <span className="text-gradient">Skills</span> & Technologies
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From university fundamentals to cutting-edge web technologies,
              here's my technical arsenal for building innovative solutions.
            </p>
          </div>

          {/* University Languages */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 fade-in-up">
              <span className="text-primary">Academic</span> Foundation
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {universityLanguages.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Professional Skills */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8 fade-in-up">
              <span className="text-primary">Professional</span> Toolkit
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {professionalSkills.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  index={index + universityLanguages.length}
                />
              ))}
            </div>
          </div>

          {/* Stats with animation */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "15+", label: "Technologies" },
              { number: "3", label: "Years Learning" },
              { number: "10+", label: "Projects" },
              { number: "2026", label: "Graduation" },
            ].map((stat, index) => (
              <AnimatedNumber
                key={stat.label}
                value={stat.number}
                label={stat.label}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
