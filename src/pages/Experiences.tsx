import { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, MapPin, Briefcase, Code, Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';

interface ExperienceItemProps {
  title: string;
  organization: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
  type: 'work' | 'education' | 'project' | 'certificate';
  link?: string;
}

const Experiences = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  useEffect(() => {
    // Scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.experience-item');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const experiences: ExperienceItemProps[] = [
    // Current Education
    {
      title: 'Bachelor of Computer Science',
      organization: 'University',
      duration: '2022 - 2026 (Expected)',
      location: 'Pakistan',
      description: [
        'Currently maintaining excellent academic performance in core computer science subjects',
        'Active participation in programming competitions and coding challenges',
        'Collaborative projects with fellow students on various software development initiatives',
        'Strong foundation in data structures, algorithms, and software engineering principles'
      ],
      technologies: ['C++', 'Python', 'C#', 'Java', 'SQL', 'Data Structures', 'Algorithms'],
      type: 'education'
    },
    
    // Self-Learning Journey
    {
      title: 'Self-Taught Web Developer',
      organization: 'Independent Learning',
      duration: '2023 - Present',
      location: 'Remote',
      description: [
        'Mastered modern web development through online courses, documentation, and hands-on projects',
        'Built multiple full-stack applications using React, Next.js, and various backend technologies',
        'Developed proficiency in responsive design and modern CSS frameworks',
        'Continuously learning new technologies and industry best practices'
      ],
      technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Supabase', 'Vercel'],
      type: 'work'
    },

    // Freelance Projects (Hypothetical)
    {
      title: 'Freelance Frontend Developer',
      organization: 'Various Clients',
      duration: '2024 - Present',
      location: 'Remote',
      description: [
        'Developed responsive websites and web applications for local businesses',
        'Collaborated with clients to translate business requirements into technical solutions',
        'Implemented modern design systems and ensured cross-browser compatibility',
        'Delivered projects on time while maintaining high code quality standards'
      ],
      technologies: ['React', 'JavaScript', 'CSS3', 'HTML5', 'Git', 'Figma'],
      type: 'work'
    },

    // Open Source Contributions
    {
      title: 'Open Source Contributor',
      organization: 'GitHub Community',
      duration: '2024 - Present',
      location: 'Global',
      description: [
        'Contributing to open source React and TypeScript projects',
        'Helping with bug fixes, feature implementations, and documentation improvements',
        'Learning collaborative development workflows and version control best practices',
        'Building a portfolio of meaningful contributions to the developer community'
      ],
      technologies: ['Git', 'GitHub', 'React', 'TypeScript', 'Testing'],
      type: 'project',
      link: 'https://github.com/hamza-ahmad'
    },

    // Online Certifications
    {
      title: 'Modern React Development',
      organization: 'Online Platform',
      duration: '2024',
      location: 'Online',
      description: [
        'Completed comprehensive course covering React hooks, context, and modern patterns',
        'Learned advanced state management techniques and performance optimization',
        'Built several projects demonstrating proficiency in React ecosystem',
        'Gained understanding of testing methodologies and deployment strategies'
      ],
      technologies: ['React', 'Hooks', 'Context API', 'Testing Library', 'Jest'],
      type: 'certificate'
    },

    {
      title: 'Full-Stack TypeScript',
      organization: 'Online Platform',
      duration: '2024',
      location: 'Online',
      description: [
        'Mastered TypeScript fundamentals and advanced type system features',
        'Learned to build type-safe applications from frontend to backend',
        'Implemented proper error handling and validation patterns',
        'Developed skills in API design and database integration'
      ],
      technologies: ['TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Prisma'],
      type: 'certificate'
    }
  ];

  const filters = [
    { key: 'all', label: 'All Experiences' },
    { key: 'work', label: 'Work & Projects' },
    { key: 'education', label: 'Education' },
    { key: 'certificate', label: 'Certifications' }
  ];

  const filteredExperiences = selectedFilter === 'all' 
    ? experiences 
    : experiences.filter(exp => exp.type === selectedFilter);

  const getIcon = (type: string) => {
    switch (type) {
      case 'work': return <Briefcase className="w-5 h-5" />;
      case 'education': return <Award className="w-5 h-5" />;
      case 'project': return <Code className="w-5 h-5" />;
      case 'certificate': return <Award className="w-5 h-5" />;
      default: return <Briefcase className="w-5 h-5" />;
    }
  };

  const ExperienceCard = ({ experience, index }: { experience: ExperienceItemProps; index: number }) => (
    <div 
      className="experience-item fade-in-up card-elevated group"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
          {getIcon(experience.type)}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                {experience.title}
              </h3>
              <p className="text-primary font-medium">{experience.organization}</p>
            </div>
            {experience.link && (
              <a
                href={experience.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {experience.duration}
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              {experience.location}
            </div>
          </div>

          <div className="space-y-2 mb-4">
            {experience.description.map((desc, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed">
                • {desc}
              </p>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span 
                key={tech}
                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation onNavigateToExperiences={() => {}} />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 animated-bg"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-8">
            <Button 
              onClick={() => window.history.back()}
              variant="ghost" 
              className="btn-ghost mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
            
            <h1 className="text-4xl lg:text-6xl font-black mb-6">
              My <span className="text-gradient">Journey</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From university foundations to self-taught expertise, here's my coding and learning journey. 
              Every experience has shaped my skills and passion for technology.
            </p>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter.key}
                onClick={() => setSelectedFilter(filter.key)}
                variant={selectedFilter === filter.key ? "default" : "ghost"}
                className={selectedFilter === filter.key ? "btn-hero" : "btn-ghost"}
              >
                {filter.label}
              </Button>
            ))}
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {filteredExperiences.map((experience, index) => (
              <ExperienceCard 
                key={`${experience.title}-${experience.organization}`} 
                experience={experience} 
                index={index}
              />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="card-elevated max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready to Collaborate?</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm always excited to work on new projects and learn from experienced developers. 
                Let's build something amazing together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.location.href = 'mailto:hamza.ahmad@email.com'}
                  className="btn-hero"
                >
                  Get In Touch
                </Button>
                <Button 
                  onClick={() => window.open('https://github.com/hamza-ahmad', '_blank')}
                  variant="ghost"
                  className="btn-ghost"
                >
                  View My Code
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experiences;