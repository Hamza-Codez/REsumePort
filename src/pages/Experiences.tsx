import { useState } from 'react';
import { ArrowLeft, Mail, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';

// Import your upcoming components
import Education from './sections/Education';
import Projects from './sections/Project';
import Certifications from './sections/Certifications';
import Footer from './sections/Footer';

const project = () => {
  return (
    <div className="bg-transparent"><Projects /></div>
  )
}

const ExperiencePage = () => {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Journey' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certificates' },
  ];

  // Custom Button Style
  const gradientBtnClass = "inline-flex items-center justify-center px-6 py-3 rounded-md text-sm bg-gradient-to-tr from-blue-600/30 to-blue-500/80 text-white border border-blue-500/50 shadow-xl shadow-blue-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/60";
  const gradientBtnClass2  = "inline-flex items-center justify-center px-4 py-2 rounded-sm text-sm bg-gradient-to-tr from-blue-600/30 to-blue-500/80 text-white border border-blue-500/50 shadow-md shadow-blue-500/40 transition-all ";

  return (
    <div className="min-h-screen bg-[#030712] text-slate-200 selection:bg-blue-500/30">
      <Navigation onNavigateToExperiences={() => {}} />
      
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-slate-300/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-gray-700/50 rounded-full blur-[120px]" />
      </div>

      <section className="pt-32 pb-16 relative">
        <div className="max-w-5xl mx-auto px-6">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-16">
            <button 
              onClick={() => window.history.back()}
              className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </button>
            
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-white">
              My <span className="text-gradient bg-gradient-to-tl from-white to-slate-800/80">Experience</span>
            </h1>
            <p className="text-slate-400 max-w-2xl text-md leading-relaxed">
              A chronological look at my growth as a developer from academic fundamentals to 
              building modern full-stack solutions.
            </p>
          </div>

{/* Dynamic Filtering Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-16 p-1.5 md:p-2 bg-slate-900/50 backdrop-blur-md rounded-xl md:rounded-2xl border border-white/5 w-[95%] sm:w-fit mx-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 sm:flex-none px-2 md:px-3 py-1.5 md:py-2 rounded-sm text-xs md:text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id 
                  ? gradientBtnClass2
                  : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Component Mapping */}
          <div className="space-y-20">
            {(activeTab === 'all' || activeTab === 'projects') && <Projects />}
            {(activeTab === 'all' || activeTab === 'education') && <Education />}
            {(activeTab === 'all' || activeTab === 'certifications') && <Certifications />}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center max-w-7xl mx-auto">
            <Footer />
          </div>

        </div>
      </section>
    </div>
  );
};

export default ExperiencePage;