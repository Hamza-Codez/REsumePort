import { useEffect, useRef } from 'react';
import { GraduationCap, Calendar, Award, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements = entry.target.querySelectorAll('.animate-on-scroll');
            animatedElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('visible');
              }, index * 200);
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

  const downloadResume = () => {
    // Create a simple resume download with animation
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Hamza_Ahmad_Resume.pdf';
    
    // Add download animation
    const button = document.querySelector('.download-btn');
    if (button) {
      button.classList.add('animate-pulse');
      setTimeout(() => {
        button.classList.remove('animate-pulse');
      }, 1000);
    }
    
    link.click();
  };

  return (
    <section ref={sectionRef} id="about" className="py-20 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 border border-primary/20 rounded-full"></div>
        <div className="absolute top-1/3 right-10 w-16 h-16 border border-secondary/20 rotate-45"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 border border-accent/20 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate computer science student with a drive for innovation and excellence 
            in software development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="space-y-8">
            <div className="animate-on-scroll fade-in-up">
              <h3 className="text-2xl font-bold mb-4 text-gradient">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm currently pursuing my Bachelor's in Computer Science (2022-2026), 
                where I've built a strong foundation in programming fundamentals and 
                advanced concepts. My passion lies in creating digital solutions that 
                make a meaningful impact.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Beyond academics, I'm constantly learning modern web technologies 
                and staying up-to-date with industry trends. I believe in the power 
                of technology to transform ideas into reality.
              </p>
            </div>

            {/* Resume Download */}
            <div className="animate-on-scroll fade-in-up">
              <Button 
                onClick={downloadResume}
                className="btn-hero download-btn group"
              >
                <Award className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Education Card */}
          <div className="animate-on-scroll fade-in-right">
            <div className="card-elevated">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mr-4">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Education</h3>
                  <p className="text-muted-foreground">Current Studies</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Bachelor of Computer Science</h4>
                    <p className="text-muted-foreground">University Program</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    2022 - 2026 (Expected)
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <h5 className="font-medium mb-2">Core Subjects</h5>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Data Structures',
                      'Algorithms',
                      'OOP',
                      'Database Systems',
                      'Software Engineering',
                      'Computer Networks'
                    ].map((subject) => (
                      <span 
                        key={subject}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
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
            <div className="flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-2xl font-bold">Future Goals</h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I aim to become a full-stack developer specializing in modern web technologies, 
              contributing to innovative projects that solve real-world problems. My goal is to 
              bridge the gap between creative design and functional development, creating 
              seamless user experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;