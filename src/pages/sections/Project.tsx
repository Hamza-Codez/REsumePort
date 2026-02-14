import { useState, memo } from 'react';
import { ExternalLink, Github, Folder, ChevronRight, FileCode, Terminal, Layers, Layout } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: string;
}

const PROJECTS: Project[] = [
  {
    id: 'portfolio',
    name: 'Personal Portfolio',
    category: 'Frontend',
    description: 'Modern portfolio website built with React & TypeScript focusing on performance and UX.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Vite'],
    liveUrl: 'https://hamza-portfolio.vercel.app',
    githubUrl: 'https://github.com/hamza/portfolio'
  },
  {
    id: 'g-mart',
    name: 'Global Mart',
    category: 'Frontend',
    description: 'E-commerce platform with complex API integrations and optimized product listing.',
    tech: ['Next.js', 'API', 'Tailwind'],
    liveUrl: 'https://globalmarttsix-nexusdigital.vercel.app/',
    githubUrl: 'https://github.com/Hamza-Codez/Nexus-Digital/tree/main/T6/Gmart'
  },
  {
    id: 'stockease',
    name: 'StockEase Dashboard',
    category: 'Full-Stack',
    description: 'Real-time inventory management with Firebase backend and data visualization.',
    tech: ['React', 'Firebase', 'Tailwind'],
    liveUrl: 'https://stockease-app.vercel.app/',
    githubUrl: 'https://github.com/Hamza-Codez/Stockease-App'
  },
  {
    id: 'climate',
    name: 'Climate Tracker',
    category: 'Full-Stack',
    description: 'Hackathon project for tracking global climate metrics using FastAPI and React.',
    tech: ['React', 'FastAPI', 'MongoDB'],
    liveUrl: 'https://automation-climate-5h7y.vercel.app/',
    githubUrl: 'https://github.com/Hamza-Codez/automationClimate'
  },
  {
    id: 'essentify',
    name: 'Essentify+',
    category: 'Frontend',
    description: 'Feature-rich todo application with local storage persistence.',
    tech: ['JavaScript', 'CSS3', 'Local Storage'],
    liveUrl: 'https://essentiafy-to-do-hpr4.vercel.app/',
    githubUrl: 'https://github.com/Hamza-Codez/Essentiafy-To-Do'
  },
  {
    id: 'movie-recommendation',
    name: 'FrenzyFlix ',
    category: 'Academic',
    description: 'Interactive visualization of movie site layout and design',
    tech: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/Hamza-Codez/Frenzy-Flix'
  },
  {
    id: 'database',
    name: 'University Farming',
    category: 'Academic',
    description: 'The farming products seller system',
    tech: ['HTML', 'CSS', 'JavaScript', 'ruby', 'sql'],
    githubUrl: 'https://github.com/Hamza-Codez/FARM-UAF'
  }
];

const InteractiveIDE = () => {
  const [activeTab, setActiveTab] = useState<Project>(PROJECTS[0]);
  const [openFolders, setOpenFolders] = useState<string[]>(['Frontend', 'Full-Stack', 'Academic']);

  const toggleFolder = (cat: string) => {
    setOpenFolders(prev => 
      prev.includes(cat) ? prev.filter(f => f !== cat) : [...prev, cat]
    );
  };

  const categories = ['Frontend', 'Full-Stack', 'Academic'];

  return (
    <section id="projects" className="pb-10 bg-transparent text-slate-300 font-sans">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight text-gray-100 dark:text-gray-100">
            My <span className="bg-gradient-to-bl from-blue-100 to-slate-400/50 border-gray-300/60 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-base text-gray-400 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A collection of my work showcasing different technologies and problem-solving approaches.
            <br />
            Explore the project tree below to see live demos, source code, and live previews.
          </p>
        </div>

        <div className="mb-12 flex items-center gap-4">
          <Terminal className="text-blue-500 w-8 h-8 " />
          <div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Source Control</h2>
            <p className="text-sm text-slate-500">Select a file to inspect project details</p>
          </div>
        </div>

        {/* IDE Container */}
        <div className="flex flex-col lg:flex-row min-h-[600px] rounded-xl border border-white/10 overflow-hidden bg-[#0D0D0D] shadow-2xl">
          
          {/* Sidebar / File Explorer */}
          <div className="w-full lg:w-72 border-r border-white/10 bg-gradient-to-b from-slate-700/30 to-slate-600/20 p-4">
            <div className="flex items-center gap-2 mb-6 px-2 text-xs font-bold uppercase tracking-widest text-slate-500">
              <Layers size={14} /> Explorer
            </div>
            
            {categories.map(cat => (
              <div key={cat} className="mb-2">
                <button 
                  onClick={() => toggleFolder(cat)}
                  className="flex items-center gap-2 w-full p-2 hover:bg-white/5 rounded transition-colors text-sm font-medium"
                >
                  <ChevronRight size={16} className={`transition-transform ${openFolders.includes(cat) ? 'rotate-90' : ''}`} />
                  <Folder size={16} className="text-blue-400" />
                  {cat}
                </button>
                
                {openFolders.includes(cat) && (
                  <div className="ml-4 mt-1 space-y-1 border-l border-white/5">
                    {PROJECTS.filter(p => p.category === cat).map(project => (
                      <button
                        key={project.id}
                        onClick={() => setActiveTab(project)}
                        className={`flex items-center gap-2 w-full p-2 pl-4 text-sm transition-all rounded-r-md border-l-2 ${
                          activeTab.id === project.id 
                            ? 'bg-blue-500/10 border-blue-500 text-white' 
                            : 'border-transparent hover:bg-white/5 text-slate-400'
                        }`}
                      >
                        <FileCode size={14} className={activeTab.id === project.id ? 'text-blue-400' : 'text-slate-500'} />
                        {project.name}.tsx
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Editor Area */}
          <div className="flex-1 flex flex-col bg-[#0D0D0D]">
            {/* Tabs Bar */}
            <div className="flex bg-[#0A0A0A] border-b border-white/10 overflow-x-auto">
              <div className="px-6 py-3 border-r border-white/10 border-t-2 border-t-blue-500 bg-[#0D0D0D] text-sm text-white flex items-center gap-2 flex-shrink-0">
                <FileCode size={14} className="text-blue-400" />
                {activeTab.name}.tsx
              </div>
            </div>

            {/* Content Stage */}
            <div className="p-8 lg:p-12 flex-1 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                    <Layout size={300} />
                </div>

                <div className="relative z-10 max-w-2xl">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="h-[1px] w-12 bg-blue-500/50"></span>
                        <span className="text-blue-400 font-mono text-sm tracking-tighter">01. Project Overview</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-6">
                        {activeTab.name}
                    </h3>

                    <p className="text-slate-400 text-md leading-relaxed mb-8">
                        {activeTab.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-10">
                        {activeTab.tech.map(t => (
                            <code key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs text-blue-300">
                                {t}
                            </code>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                        {activeTab.liveUrl && (
                            <a 
                                href={activeTab.liveUrl} 
                                target="_blank" 
                                className="inline-flex items-center justify-center px-4 py-2 rounded-sm text-sm bg-gradient-to-tr from-blue-600/30 to-blue-500 text-white border border-blue-500/50 shadow-xl shadow-blue-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/60"
                            >
                                <ExternalLink size={16} className="mr-2" /> Live Demo
                            </a>
                        )}
                        {activeTab.githubUrl && (
                            <a 
                                href={activeTab.githubUrl} 
                                target="_blank" 
                                className="inline-flex items-center justify-center px-4 py-2 rounded-sm text-sm bg-white/5 text-white border border-white/10 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1"
                            >
                                <Github size={16} className="mr-2" /> Source Code
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Status Bar */}
            <div className="bg-gradient-to-tr from-slate-600/60 to-gray-800 px-4 py-1 flex justify-between items-center text-[10px] uppercase font-bold text-white tracking-widest">
                <div className="flex gap-4">
                    <span>Main</span>
                    <span>UTF-8</span>
                </div>
                <div>Hamza-Codez v1.0.0</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 dark:text-gray-400 mb-6 text-base">
            Interested in collaborating or want to see more of my work?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open('https://github.com/Hamza-Codez', '_blank')}
              className="inline-flex items-center justify-center px-4 py-2 rounded-md font-semibold text-md bg-gradient-to-tr from-blue-600/30 to-blue-500 text-white border border-blue-500/50 shadow-xl shadow-blue-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/60"
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects
            </button>
            
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center px-4 py-2 rounded-md font-semibold text-md bg-gradient-to-r from-slate-700 to-slate-800 text-white border border-slate-400/30 transition-all duration-300 hover:-translate-y-1 hover:border-slate-400/60 hover:bg-slate-800/80 hover:shadow-xl hover:shadow-gray-500/30"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveIDE; 