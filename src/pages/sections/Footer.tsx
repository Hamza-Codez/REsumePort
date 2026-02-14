import {
  Github,
  Instagram,
  Linkedin,
  Facebook,
  ShieldCheck,
  FolderOpenDot,
  Link,
} from "lucide-react";

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

  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-12 bg-transparent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Name & Title */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white border-gray-900/30 mb-2">
              Open to Collaborate as a!
            </h3>
            <p className="text-muted-foreground">
              Ai Driven Developer • Web Designer • Tech Innovator
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-surface border border-slate-500/40 flex items-center justify-center hover:border-sky-500 hover:bg-primary/10 transition-colors group"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-sky-500 transition-colors" />
              </a>
            ))}
          </div>



        </div>
      </div>
    </footer>
  );
};

export default Footer;
