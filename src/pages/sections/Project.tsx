import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    liveUrl: 'https://resume-portfolio-two-alpha.vercel.app',
    githubUrl: 'https://github.com/Hamza-Codez/REsumePort'
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
    name: 'FrenzyFlix',
    category: 'Academic',
    description: 'Interactive visualization of movie site layout and design.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/Hamza-Codez/Frenzy-Flix'
  },
  {
    id: 'database',
    name: 'University Farming',
    category: 'Academic',
    description: 'The farming products seller system.',
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
    <section id="projects" className="py-2 bg-transparent text-slate-300 font-sans overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* HEADER SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-6 bg-blue-500/40" />
            <span className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.4em]">Development</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-light text-white tracking-tight">
            Featured <span className="text-slate-500">Projects</span>
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-10 flex items-center gap-4"
        >
          <Terminal className="text-blue-500 w-6 h-6 md:w-8 md:h-8" />
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">Source Control</h2>
            <p className="text-xs md:text-sm text-slate-500">Select a file to inspect project details</p>
          </div>
        </motion.div>

        {/* IDE Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row min-h-[550px] lg:h-[650px] rounded-xl border border-white/10 overflow-hidden bg-[#0D0D0D] shadow-2xl"
        >
          
          {/* Sidebar / File Explorer */}
          <div className="w-full lg:w-64 border-b lg:border-b-0 lg:border-r border-white/10 bg-[#0F1115] p-4 lg:overflow-y-auto">
            <div className="flex items-center gap-2 mb-4 px-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">
              <Layers size={14} /> Explorer
            </div>
            
            <div className="space-y-1">
              {categories.map(cat => (
                <div key={cat} className="mb-1">
                  <button 
                    onClick={() => toggleFolder(cat)}
                    className="flex items-center gap-2 w-full p-2 hover:bg-white/5 rounded transition-colors text-xs md:text-sm font-medium text-slate-300"
                  >
                    <motion.div
                      animate={{ rotate: openFolders.includes(cat) ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronRight size={14} />
                    </motion.div>
                    <Folder size={14} className="text-blue-400" />
                    {cat}
                  </button>
                  
                  <AnimatePresence>
                    {openFolders.includes(cat) && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="ml-4 mt-1 space-y-1 border-l border-white/5 overflow-hidden"
                      >
                        {PROJECTS.filter(p => p.category === cat).map(project => (
                          <button
                            key={project.id}
                            onClick={() => setActiveTab(project)}
                            className={`flex items-center gap-2 w-full p-2 pl-4 text-xs md:text-sm transition-all rounded-r-md border-l-2 ${
                              activeTab.id === project.id 
                                ? 'bg-blue-500/10 border-blue-500 text-white' 
                                : 'border-transparent hover:bg-white/5 text-slate-400'
                            }`}
                          >
                            <FileCode size={14} className={activeTab.id === project.id ? 'text-blue-400' : 'text-slate-500'} />
                            <span className="truncate">{project.name}.tsx</span>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Editor Area */}
          <div className="flex-1 flex flex-col bg-[#0D0D0D] overflow-hidden">
            
            {/* Tabs Bar */}
            <div className="flex bg-[#0A0A0A] border-b border-white/10 overflow-x-auto no-scrollbar">
              <div className="px-4 md:px-6 py-2.5 md:py-3 border-r border-white/10 border-t-2 border-t-blue-500 bg-[#0D0D0D] text-xs md:text-sm text-white flex items-center gap-2 flex-shrink-0">
                <FileCode size={14} className="text-blue-400" />
                {activeTab.name}.tsx
              </div>
            </div>

            {/* Content Stage */}
            <div className="p-6 md:p-10 lg:p-12 flex-1 relative overflow-y-auto custom-scrollbar">
                {/* Background Decoration (Hidden on small screens to save space) */}
                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none hidden lg:block">
                    <Layout size={300} />
                </div>

                <AnimatePresence mode="wait">
                  <motion.div 
                    key={activeTab.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 max-w-2xl"
                  >
                      <div className="flex items-center gap-3 mb-4 md:mb-6">
                          <span className="h-[1px] w-8 md:w-12 bg-blue-500/50"></span>
                          <span className="text-blue-400 font-mono text-[10px] md:text-xs tracking-tighter uppercase">01. Project Overview</span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
                          {activeTab.name}
                      </h3>

                      <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
                          {activeTab.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-8 md:mb-10">
                          {activeTab.tech.map((t) => (
                              <code 
                                key={t} 
                                className="px-2 md:px-3 py-1 bg-white/5 border border-white/10 rounded text-[10px] md:text-xs text-blue-300 font-mono"
                              >
                                  {t}
                              </code>
                          ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                          {activeTab.liveUrl && (
                              <a 
                                  href={activeTab.liveUrl} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-sm text-xs md:text-sm bg-gradient-to-tr from-blue-600/30 to-blue-500 text-white border border-blue-500/50 shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                              >
                                  <ExternalLink size={16} className="mr-2" /> Live Demo
                              </a>
                          )}
                          {activeTab.githubUrl && (
                              <a 
                                  href={activeTab.githubUrl} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-sm text-xs md:text-sm bg-white/5 text-white border border-white/10 transition-all hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98]"
                              >
                                  <Github size={16} className="mr-2" /> Source Code
                              </a>
                          )}
                      </div>
                  </motion.div>
                </AnimatePresence>
            </div>

            {/* Status Bar */}
            <div className="bg-[#0F1115] border-t border-white/5 px-4 py-1.5 flex justify-between items-center text-[9px] md:text-[10px] uppercase font-bold text-slate-500 tracking-widest">
                <div className="flex gap-4">
                    <span className="flex items-center gap-1 text-blue-500/80"><Terminal size={10}/> Main</span>
                    <span className="hidden sm:inline">UTF-8</span>
                </div>
                <div className="flex gap-3">
                  <span className="hidden md:inline">Hamza-Codez v1.0.0</span>
                  <span className="text-blue-500/80">TypeScript</span>
                </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveIDE;