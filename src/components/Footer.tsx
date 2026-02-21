import { motion, Variants } from "framer-motion";
import {
  Github,
  Instagram,
  Linkedin,
  Facebook,
  ShieldCheck,
  FolderOpenDot,
} from "lucide-react";

/* ─── Animation Variants ─────────────────────────────────────────────────── */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const linkHover: Variants = {
  hover: { 
    y: -2, 
    color: "#3b82f6", 
    transition: { duration: 0.3, ease: "circOut" as const } 
  }
};

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Hamza-Codez", label: "GitHub" },
    {
      icon: Instagram,
      href: "https://www.instagram.com/hamza._ahmad._/",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/m-hamza-ahmad-0030452b4/",
      label: "LinkedIn",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=100050686890379",
      label: "Facebook",
    },
  ];

  return (
    <footer className="relative py-12 border-t border-border bg-gradient-to-b from-black via-[#0d1117] to-gray-900 text-white overflow-hidden">
      
      {/* ── Ambient Background Glow ── */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-full h-full bg-blue-500/5 blur-[120px] rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Name & Title - Changed H3 to H2 for better semantic hierarchy */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-6"
          >
            <h2 className="text-xl font-semibold text-white border-gray-900/30 mb-2">
              Open to Collaborate!
            </h2>
            <p className="text-muted-foreground">
              Ai Driven Developer • Web Designer • Tech Innovator
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="flex space-x-4 mb-8"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={{
                  hidden: { scale: 0 },
                  visible: { scale: 1 }
                }}
                whileHover={{ y: -5, scale: 1.1 }}
                className="w-8 h-8 rounded-full bg-surface border border-slate-500/40 flex items-center justify-center hover:border-sky-500 hover:bg-primary/10 transition-colors group"
                aria-label={`Visit my ${social.label} profile`}
              >
                <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-sky-500 transition-colors" />
              </motion.a>
            ))}
          </motion.div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-6 mb-8 text-sm" aria-label="Footer Navigation">
            {[
              { label: "Home", href: "#home" },
              { label: "About", href: "#about" },
              { label: "Skills", href: "#skills" },
              { label: "Projects", href: "#projects" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                variants={linkHover}
                whileHover="hover"
                className="text-muted-foreground transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          {/* Copyright Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="-mb-7 pt-4 w-full"
          >
            <div className="flex flex-col mb-8 lg:mb-0 sm:flex-row items-center justify-between text-sm text-muted-foreground">
              <p className="flex items-center sm:mb-0">
                Visit my GitHub
                <motion.span animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                  <Github className="w-4 h-4 text-sky-500 mx-1" />
                </motion.span> 
                for more projects{" "}
                <FolderOpenDot className="w-4 h-4 text-sky-500 mx-1" />
              </p>
              <p className="flex items-center mt-2 sm:mt-0">
                For my certificates 
                <ShieldCheck className="w-4 h-4 text-sky-500 mx-1" />{" "}
                visit me @{" "}
                <Linkedin className="w-4 h-4 text-sky-500 mx-1" />
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;