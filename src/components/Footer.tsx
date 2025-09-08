import { Github, Instagram, Linkedin, Facebook, Heart, Code } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/hamza-ahmad', label: 'GitHub' },
    { icon: Instagram, href: 'https://instagram.com/hamza.ahmad', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/in/hamza-ahmad', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://facebook.com/hamza.ahmad', label: 'Facebook' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-surface/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Name & Title */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gradient mb-2">Hamza Ahmad</h3>
            <p className="text-muted-foreground">Software Engineer • Web Developer • Tech Innovator</p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-colors group"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            {[
              { label: 'Home', href: '#home' },
              { label: 'About', href: '#about' },
              { label: 'Skills', href: '#skills' },
              { label: 'Projects', href: '#projects' },
              { label: 'Contact', href: '#contact' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="border-t border-border pt-8 w-full">
            <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-muted-foreground">
              <p className="flex items-center mb-4 sm:mb-0">
                Built with <Heart className="w-4 h-4 mx-1 text-red-500" /> and 
                <Code className="w-4 h-4 mx-1 text-primary" /> by Hamza Ahmad
              </p>
              <p>&copy; {currentYear} Hamza Ahmad. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;