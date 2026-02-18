import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Home, User, Code, FolderOpen, Download, GalleryThumbnails } from "lucide-react";

interface NavigationProps {
  onNavigateToExperiences: () => void;
}

const Navigation = ({ onNavigateToExperiences }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (location.pathname === "/") {
        const sections = ["home", "about", "skills", "projects"];
        const currentSection = sections.find((section) => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        if (currentSection) setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  const handleNavClick = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
    } else {
      if (sectionId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  const menuItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "skills", label: "Skills", icon: Code },
    { id: "projects", label: "Projects", icon: FolderOpen },
  ];

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "py-3 bg-black/40 backdrop-blur-md border-b border-white/10 shadow-lg" 
            : "py-4 bg-transparent border-none" 
        }`}
      >
        {/* WIDTH ADJUSTMENT: Matches Hero Section Alignment */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center group cursor-pointer" onClick={() => handleNavClick("home")}>
              <h1 className="text-xl font-bold tracking-tight text-gradient bg-gradient-to-bl from-blue-100 to-slate-400/50 transition-opacity group-hover:opacity-80">
                Portfolio
              </h1>
              <GalleryThumbnails className="w-5 h-5 ml-2 text-white" />
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-center space-x-6 border-r border-white/10 pr-6">
                {menuItems.map((item) => {
                  const isActive = location.pathname === "/" && activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className="group flex items-center text-sm font-medium text-slate-300 hover:text-blue-400 transition-all duration-300"
                    >
                      <item.icon className={`w-4 h-4 mr-1.5 transition-opacity ${isActive ? "opacity-100 text-blue-400" : "opacity-70 group-hover:opacity-100"}`} />
                      <span className={`relative ${isActive ? "text-blue-400" : ""}`}>
                        {item.label}
                        <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="flex gap-3 items-center">
                <button
                  onClick={() => {
                    onNavigateToExperiences();
                    window.scrollTo(0, 0);
                  }}
                  className="text-sm inline-flex items-center justify-center px-3 py-1 rounded-sm bg-gradient-to-r from-slate-700 to-slate-800 text-white border border-slate-400/30 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-400/60 hover:shadow-md hover:shadow-gray-500/20"
                >
                  <Code className="w-4 h-4 mr-2" />
                  Experiences
                </button>
                <button
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/resume.pdf";
                    link.download = "Hamza_Ahmad_Resume.pdf";
                    link.click();
                  }}
                  className="inline-flex items-center justify-center px-3 py-1 rounded-sm text-sm bg-gradient-to-tr from-blue-600/30 to-blue-500 text-white border border-blue-500/50 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/40 transition-all duration-300"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </button>
              </div>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md text-white hover:bg-white/10 transition-colors">
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] opacity-100 mt-4 " : "max-h-0 opacity-0"}`}>
            <div className="flex flex-col space-y-4 pt-4 pb-6 px-4 border border-white/20 bg-black/20 backdrop-blur-lg rounded-xl shadow-2xl">
              {menuItems.map((item) => (
                <button key={item.id} onClick={() => handleNavClick(item.id)} className="flex items-center space-x-3 text-slate-300 hover:text-blue-400 transition-colors py-3 border-b border-white/10 last:border-none">
                  <item.icon className="w-5 h-5" />
                  <span className="text-lg">{item.label}</span>
                </button>
              ))}
              
              <div className="flex flex-col gap-3 pt-2">
                <button
                  onClick={() => {
                    onNavigateToExperiences();
                    window.scrollTo(0, 0);
                    setIsOpen(false);
                  }}
                  className="w-full text-sm inline-flex items-center justify-center px-4 py-3 rounded-sm bg-gradient-to-r from-slate-700 to-slate-800 text-white border border-slate-400/30"
                >
                  <Code className="w-4 h-4 mr-2" />
                  Experiences
                </button>
                <button
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/resume.pdf";
                    link.download = "Hamza_Ahmad_Resume.pdf";
                    link.click();
                    setIsOpen(false);
                  }}
                  className="w-full inline-flex items-center justify-center px-4 py-3 rounded-sm text-sm bg-gradient-to-tr from-blue-600/30 to-blue-500 text-white border border-blue-500/50"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;