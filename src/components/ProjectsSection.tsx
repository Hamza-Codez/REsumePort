import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, ChevronRight, ChevronDown, Folder, File } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Project {
  id: string;
  name: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  type: 'folder' | 'file';
  children?: Project[];
}

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(['frontend', 'fullstack']));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.project-item');
            items.forEach((item, index) => {
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

  // Sample project structure - replace with your actual projects
  const projectTree: Project[] = [
    {
      id: 'frontend',
      name: 'Frontend Projects',
      description: 'Client-side applications and user interfaces',
      tech: [],
      type: 'folder',
      children: [
        {
          id: 'portfolio',
          name: 'Personal Portfolio',
          description: 'Modern portfolio website built with React & TypeScript',
          tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
          liveUrl: 'https://hamza-portfolio.vercel.app',
          githubUrl: 'https://github.com/hamza/portfolio',
          type: 'file'
        },
        {
          id: 'dashboard',
          name: 'Admin Dashboard',
          description: 'Responsive admin panel with data visualization',
          tech: ['React', 'Chart.js', 'Material-UI', 'TypeScript'],
          liveUrl: 'https://admin-dashboard-demo.vercel.app',
          githubUrl: 'https://github.com/hamza/admin-dashboard',
          type: 'file'
        },
        {
          id: 'todo-app',
          name: 'Task Manager',
          description: 'Feature-rich todo application with local storage',
          tech: ['JavaScript', 'CSS3', 'Local Storage', 'Responsive Design'],
          liveUrl: 'https://task-manager-demo.vercel.app',
          githubUrl: 'https://github.com/hamza/task-manager',
          type: 'file'
        }
      ]
    },
    {
      id: 'fullstack',
      name: 'Full-Stack Projects',
      description: 'End-to-end applications with backend integration',
      tech: [],
      type: 'folder',
      children: [
        {
          id: 'ecommerce',
          name: 'E-Commerce Platform',
          description: 'Complete online store with payment integration',
          tech: ['Next.js', 'Supabase', 'Stripe', 'TypeScript', 'Prisma'],
          liveUrl: 'https://ecommerce-demo.vercel.app',
          githubUrl: 'https://github.com/hamza/ecommerce',
          type: 'file'
        },
        {
          id: 'blog',
          name: 'Blog Platform',
          description: 'Modern blogging platform with CMS capabilities',
          tech: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
          liveUrl: 'https://blog-platform-demo.vercel.app',
          githubUrl: 'https://github.com/hamza/blog-platform',
          type: 'file'
        }
      ]
    },
    {
      id: 'academic',
      name: 'Academic Projects',
      description: 'University coursework and research projects',
      tech: [],
      type: 'folder',
      children: [
        {
          id: 'algorithms',
          name: 'Algorithm Visualizer',
          description: 'Interactive visualization of sorting and searching algorithms',
          tech: ['C++', 'Python', 'JavaScript', 'Canvas API'],
          githubUrl: 'https://github.com/hamza/algorithm-visualizer',
          type: 'file'
        },
        {
          id: 'database',
          name: 'University Database System',
          description: 'Student management system with CRUD operations',
          tech: ['C#', '.NET', 'SQL Server', 'WPF'],
          githubUrl: 'https://github.com/hamza/university-db',
          type: 'file'
        }
      ]
    }
  ];

  const toggleFolder = (folderId: string) => {
    setExpandedFolders(prev => {
      const newSet = new Set(prev);
      if (newSet.has(folderId)) {
        newSet.delete(folderId);
      } else {
        newSet.add(folderId);
      }
      return newSet;
    });
  };

  const ProjectItem = ({ project, depth = 0 }: { project: Project; depth?: number }) => {
    const isExpanded = expandedFolders.has(project.id);
    const paddingLeft = depth * 24;

    return (
      <div className="project-item fade-in-up">
        {project.type === 'folder' ? (
          <div>
            <button
              onClick={() => toggleFolder(project.id)}
              className="w-full flex items-center p-4 rounded-lg hover:bg-surface/50 transition-colors text-left"
              style={{ paddingLeft: `${paddingLeft + 16}px` }}
            >
              <div className="flex items-center flex-1">
                {isExpanded ? <ChevronDown className="w-4 h-4 mr-2" /> : <ChevronRight className="w-4 h-4 mr-2" />}
                <Folder className="w-5 h-5 mr-3 text-primary" />
                <div>
                  <h3 className="font-semibold">{project.name}</h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>
              </div>
            </button>
            
            {isExpanded && project.children && (
              <div className="ml-4 border-l-2 border-border">
                {project.children.map(child => (
                  <ProjectItem key={child.id} project={child} depth={depth + 1} />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div 
            className="flex items-center p-4 rounded-lg hover:bg-surface/50 transition-colors group"
            style={{ paddingLeft: `${paddingLeft + 16}px` }}
          >
            <File className="w-5 h-5 mr-3 text-accent" />
            <div className="flex-1">
              <h4 className="font-medium group-hover:text-primary transition-colors">{project.name}</h4>
              <p className="text-sm text-muted-foreground mb-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map(tech => (
                  <span 
                    key={tech}
                    className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-xs text-accent hover:text-accent/80 transition-colors"
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="w-3 h-3 mr-1" />
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <section ref={sectionRef} id="projects" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A collection of my work showcasing different technologies and problem-solving approaches. 
            Explore the project tree below to see live demos and source code.
          </p>
        </div>

        {/* Project Tree */}
        <div className="max-w-4xl mx-auto">
          <div className="card-elevated">
            <div className="flex items-center mb-6 p-6 border-b border-border">
              <Folder className="w-6 h-6 mr-3 text-primary" />
              <h3 className="text-xl font-semibold">Project Structure</h3>
            </div>
            
            <div className="pb-6">
              {projectTree.map(project => (
                <ProjectItem key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 fade-in-up">
          <p className="text-muted-foreground mb-6">
            Interested in collaborating or want to see more of my work?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => window.open('https://github.com/hamza-ahmad', '_blank')}
              className="btn-hero"
            >
              <Github className="w-4 h-4 mr-2" />
              View All Projects
            </Button>
            <Button 
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              variant="ghost"
              className="btn-ghost"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;