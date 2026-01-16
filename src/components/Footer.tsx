import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-narrow mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Tagline */}
          <div>
            <a href="#home" className="font-display text-2xl font-bold">
              JD<span className="text-accent">.</span>
            </a>
            <p className="text-primary-foreground/70 mt-2 text-sm">
              Building digital experiences that matter.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-sm text-primary-foreground/60 flex items-center justify-center gap-1">
            © {currentYear} John Doe. Made with{" "}
            <Heart size={14} className="text-accent fill-accent" /> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
