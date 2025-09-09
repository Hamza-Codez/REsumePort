import { useState, useEffect } from 'react';
import { Github, Instagram, Linkedin, Facebook, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile.jpg';

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Software Engineer', 'Web Developer', 'Tech Innovator'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/hamza-ahmad', 
      label: 'GitHub',
      color: 'hover:text-white'
    },
    { 
      icon: Instagram, 
      href: 'https://instagram.com/hamza.ahmad', 
      label: 'Instagram',
      color: 'hover:text-pink-400'
    },
    { 
      icon: Linkedin, 
      href: 'https://linkedin.com/in/hamza-ahmad', 
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    { 
      icon: Facebook, 
      href: 'https://facebook.com/hamza.ahmad', 
      label: 'Facebook',
      color: 'hover:text-blue-500'
    },
  ];

  const scrollToNext = () => {
    const element = document.getElementById('about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen pt-[2rem] pb-[7rem] flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 animated-bg"></div>
      
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="fade-in-up pt-[6rem]">
            <div className="mb-6">
              <h2 className="text-lg font-medium text-muted-foreground mb-2">
                Hello, I'm
              </h2>
              <h1 className="text-5xl lg:text-5xl font-black mb-4">
                <span className="text-gradient">Hamza</span>
                <br />
                <span className="text-foreground">Ahmad</span>
              </h1>
            </div>

            {/* Animated role */}
            <div className="mb-8 h-20 flex items-center">
              <div className="text-2xl lg:text-3xl font-semibold">
                <span className="text-muted-foreground">I'm a </span>
                <span 
                  key={currentRole}
                  className="text-gradient animate-slide-in-right inline-block"
                >
                  {roles[currentRole]}
                </span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
              Passionate about creating innovative digital solutions and transforming 
              ideas into elegant, functional applications. Currently pursuing my journey 
              in Computer Science with a focus on modern web technologies.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-xl bg-surface/50 border border-border flex items-center justify-center hover-glow ${social.color} transition-all duration-300`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                onClick={() => scrollToNext()}
                className="btn-hero"
              >
                Explore My Work
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

          {/* Profile Image */}
          <div className="fade-in-right lg:order-first">
            <div className="relative">
              {/* Glow background */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-glow-pulse"></div>
              
              {/* Image container */}
              <div className="relative w-80 h-80 mx-auto">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary/20 hover-scale">
                  <img
                    src={profileImage}
                    alt="Hamza Ahmad - Software Engineer"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-float"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-1/2 -right-8 w-4 h-4 bg-accent rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default HeroSection;