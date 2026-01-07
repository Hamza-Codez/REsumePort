import { useState, useEffect } from "react";
import { Github, Instagram, Linkedin, Facebook, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/pic.webp";

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["Frontend Developer", "Tech Enthusiast", "AI Evangelist"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Hamza-Codez",
      label: "GitHub",
      color: "hover:text-white",
    },
    {
      icon: Instagram,
      href: "https://www.linkedin.com/in/m-hamza-ahmad-0030452b4/",
      label: "Instagram",
      color: "hover:text-pink-400",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/m-hamza-ahmad-0030452b4/",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=100050686890379",
      label: "Facebook",
      color: "hover:text-blue-500",
    },
  ];

  const scrollToNext = () => {
    const element = document.getElementById("about");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 lg:pt-10 py-20 lg:py-0"
    >
      {" "}
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020015] via-slate-900/50 to-black pointer-events-none"></div>
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 lg:w-96 lg:h-96 bg-slate-900/50 rounded-full blur-3xl animate-float pointer-events-none"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 lg:w-96 lg:h-96 bg-cyan-950/10 rounded-full blur-3xl animate-float pointer-events-none"
        style={{ animationDelay: "1s" }}
      ></div>
      {/* ALIGNMENT FIX: Container now matches standard Nav width and horizontal padding */}
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Profile Image */}
          <div className="fade-in-right order-first lg:order-last">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-glow-pulse"></div>

              <div className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-80 lg:h-80 mx-auto">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-gray-300/20 hover-scale">
                  <img
                    src={profileImage}
                    alt="Hamza Ahmad - Software Engineer"
                    width="320"
                    height="320"
                    fetchPriority="high"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="hidden sm:block absolute -top-4 -right-8 w-10 h-10 bg-gradient-to-tr from-slate-600/40 via-slate-200/30 to-white rounded-full animate-float"></div>
                <div
                  className="hidden sm:block absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-tr from-slate-400/40 via-slate-200/30 to-white rounded-full animate-float"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="fade-in-up text-center lg:text-left">
            <div className="mb-2">
              <h2 className="text-sm sm:text-md text-white font-medium opacity-80">
                Hi, It's me
              </h2>
              <h1 className="text-3xl sm:text-4xl lg:text-3xl font-bold mb-2">
                <span className="text-gradient bg-gradient-to-bl from-blue-100 to-slate-400/40">
                  Hamza
                </span>
                <span className="text-foreground"> Ahmad</span>
              </h1>
            </div>

            <div className="mb-6 h-16 lg:h-20 flex items-center justify-center lg:justify-start">
              <div className="text-xl sm:text-2xl font-semibold">
                <span className="text-white">I'm a </span>
                <span
                  key={currentRole}
                  className="text-gradient bg-gradient-to-tr from-slate-400/50 via-gray-300/70 to-white animate-slide-in-right inline-block"
                >
                  {roles[currentRole]}
                </span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-muted-foreground mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Passionate about creating innovative digital solutions and
              transforming ideas into elegant, functional applications.
              Currently pursuing my journey in Computer Science with a focus on
              modern web technologies.
            </p>

            <div className="flex justify-center lg:justify-start space-x-4 mb-10">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${social.label} profile`}
                  className={`w-8 h-8 rounded-full bg-surface/50 border border-slate-400/40 flex items-center justify-center hover-glow ${social.color} transition-all duration-300`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={scrollToNext}
                className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 rounded-sm text-sm font-medium bg-gradient-to-tr from-blue-600/30 to-blue-500 text-white border border-blue-500/50 shadow-xl shadow-blue-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/60"
              >
                Explore My Work
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById("contact");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 rounded-sm text-sm font-medium bg-gradient-to-r from-slate-700 to-slate-800 text-white border border-slate-400/30 transition-all duration-300 hover:-translate-y-1 hover:border-slate-400/60 hover:bg-transparent"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={scrollToNext}
        aria-label="Scroll down to About section"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce hidden sm:block"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default HeroSection;
