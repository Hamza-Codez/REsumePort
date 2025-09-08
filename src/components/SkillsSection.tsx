import { useEffect, useRef } from 'react';
import { 
  Code, 
  Database, 
  Globe, 
  Palette, 
  FileText, 
  GitBranch,
  Layers,
  Smartphone
} from 'lucide-react';

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillItems = entry.target.querySelectorAll('.skill-item');
            skillItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('visible');
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

  const universityLanguages = [
    { name: 'C++', icon: Code, description: 'Object-oriented programming fundamentals' },
    { name: 'Python', icon: Code, description: 'Data structures and algorithms' },
    { name: 'C#', icon: Code, description: '.NET framework development' },
  ];

  const professionalSkills = [
    { name: 'TypeScript', icon: Code, description: 'Type-safe JavaScript development' },
    { name: 'JavaScript', icon: Code, description: 'Modern ES6+ features' },
    { name: 'HTML5', icon: Globe, description: 'Semantic markup & accessibility' },
    { name: 'CSS3', icon: Palette, description: 'Advanced styling & animations' },
    { name: 'Tailwind CSS', icon: Palette, description: 'Utility-first CSS framework' },
    { name: 'React', icon: Layers, description: 'Component-based UI development' },
    { name: 'Next.js', icon: Smartphone, description: 'Full-stack React framework' },
    { name: 'JSON', icon: FileText, description: 'Data interchange format' },
    { name: 'Markdown', icon: FileText, description: 'Documentation & content creation' },
    { name: 'GitHub', icon: GitBranch, description: 'Version control & collaboration' },
    { name: 'Supabase', icon: Database, description: 'Backend as a service' },
    { name: 'Shadcn/ui', icon: Layers, description: 'Modern component library' },
  ];

  const SkillCard = ({ skill, index }: { skill: any; index: number }) => (
    <div 
      className="skill-item scale-in p-6 rounded-2xl glass hover-glow group cursor-pointer"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="skill-icon mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
        <skill.icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-lg font-semibold text-center mb-2">{skill.name}</h3>
      <p className="text-sm text-muted-foreground text-center leading-relaxed">
        {skill.description}
      </p>
    </div>
  );

  return (
    <section ref={sectionRef} id="skills" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
              <SkillCard key={skill.name} skill={skill} index={index + 3} />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '15+', label: 'Technologies' },
            { number: '3', label: 'Years Learning' },
            { number: '10+', label: 'Projects' },
            { number: '2026', label: 'Graduation' },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-3xl font-black text-gradient mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;