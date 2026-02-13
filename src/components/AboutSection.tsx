import { useEffect, useRef } from "react";
import { GraduationCap, Calendar, Award, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements =
              entry.target.querySelectorAll(".animate-on-scroll");
            animatedElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("visible");
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const downloadResume = () => {
    // Create a simple resume download with animation
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Hamza_Ahmad_Resume.pdf";

    // Add download animation
    const button = document.querySelector(".download-btn");
    if (button) {
      button.classList.add("animate-pulse");
      setTimeout(() => {
        button.classList.remove("animate-pulse");
      }, 1000);
    }

    link.click();
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 relative bg-gradient-to-b from-slate-900/40 via-black to-slate-900/50 text-white overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 border border-primary/20 rounded-full"></div>
        <div className="absolute top-1/3 right-10 w-16 h-16 border border-secondary/20 rotate-45"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 border border-accent/20 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            About{" "}
            <span className="text-gradient bg-gradient-to-bl from-blue-100 to-slate-400/50 border-gray-300/60">
              Me
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate computer science student with a drive for innovation and
            excellence in software development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {" "}
          {/* Increased gap for more "breathability" */}
          {/* Content */}
          <div className="space-y-10 py-4">
            {" "}
            {/* Increased vertical spacing between text and button */}
            <div className="animate-on-scroll fade-in-up">
              <h3 className="text-xl font-bold mb-6 text-gradient bg-gradient-to-bl from-gray-400 via-white to-slate-400/40 tracking-tight">
                My Journey
              </h3>
              <div className="space-y-6">
                {" "}
                {/* Wrapped paragraphs in a div for consistent spacing */}
                <p className="text-muted-foreground text-white leading-relaxed opacity-90">
                  I'm currently pursuing my Bachelor's in Computer Science
                  (2022-2026), where I've built a strong foundation in
                  programming fundamentals and advanced concepts. My passion
                  lies in creating digital solutions that make a meaningful
                  impact.
                </p>
                <p className="text-muted-foreground text-white leading-relaxed opacity-90">
                  Beyond academics, I'm constantly learning about modern web
                  technologies and staying up-to-date with industry trends. I
                  believe in the power of technology to transform ideas into
                  reality.
                </p>
              </div>
            </div>
            {/* Resume Download */}
            <div className="animate-on-scroll fade-in-up pt-2">
              <button
                onClick={downloadResume}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-slate-700 to-slate-800 text-white border border-slate-400/20 rounded-md hover:-translate-y-1 hover:shadow-2xl hover:shadow-gray-500/20 transition-all duration-500 group"
              >
                <Award className="w-4 h-4 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-medium">Download Resume</span>
              </button>
            </div>
          </div>
          {/* Education Card */}
          <div className="animate-on-scroll fade-in-right">
            <div className="card-elevated relative overflow-hidden backdrop-blur-sm border border-white/5 p-8 rounded-2xl shadow-2xl">
              <div className="flex items-center mb-8">
                <div className="w-14 h-14 rounded-2xl bg-blue-400/10 flex items-center justify-center mr-5 border border-blue-400/20 shadow-inner">
                  <GraduationCap className="w-7 h-7 text-sky-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold tracking-wide">
                    Education
                  </h3>
                  <p className="text-muted-foreground text-sm uppercase tracking-widest opacity-60">
                    Current Studies
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start space-x-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2.5 ring-4 ring-sky-500/10"></div>
                  <div>
                    <div className="flex justify-between gap-12 items-center">
                      <h4 className="font-semibold text-lg leading-tight">
                        Bachelor of Computer Science
                      </h4>
                      <p className="text-sky-400 bg-sky-500/10 px-2.5 py-0.5 rounded-full text-xs sm:text-sm w-fit whitespace-nowrap transition-all">
                        current cgpa: 3.1
                      </p>
                    </div>
                    <p className="text-muted-foreground mt-1">
                      University Program
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-sm text-muted-foreground/80">
                  <div className="flex items-center bg-white/5 px-3 py-1 rounded-full border border-white/5">
                    <Calendar className="w-4 h-4 mr-2 text-sky-400" />
                    2022 - 2026 (Expected)
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <h5 className="font-medium mb-3 text-sm text-white/70 uppercase tracking-wider">
                    Core Subjects
                  </h5>
                  <div className="flex flex-wrap gap-2.5">
                    {[
                      "Data Structures",
                      "Algorithms",
                      "OOP",
                      "Database Systems",
                      "Software Engineering",
                      "Computer Networks",
                    ].map((subject) => (
                      <span
                        key={subject}
                        className="px-2 py-1 bg-blue-400/10 text-sky-400 border border-blue-400/10 rounded-full text-xs font-medium hover:bg-blue-400/20 transition-colors duration-300 cursor-default"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Goals Section */}
        <div className="mt-20 text-center animate-on-scroll fade-in-up">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Target className="w-8 h-8 rounded-full text-black bg-gradient-to-tr from-gray-500 to-slate-100 mr-3" />
              <h3 className="text-2xl font-bold">Future Goals</h3>
            </div>
            <p className="text-md text-muted-foreground leading-relaxed">
              I am focused on the synthesis of{" "}
              <span className="text-sky-400 underline">
                agentic AI workflows
              </span>{" "}
              and industrial-grade architectures. My objective is to transcend
              the traditional silos of creative design and functional
              development, engineering{" "}
              <span className="text-sky-400 underline">
                high-fidelity systems
              </span>{" "}
              where autonomous logic and{" "}
              <span className="text-sky-400 underline">user-centricity</span>{" "}
              converge into a single, seamless experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
