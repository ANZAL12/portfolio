import { Code, User, Globe, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
              <span 
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "var(--gradient-1)" }}
              >
                <span className="text-white font-black text-xs">A</span>
              </span>
              <span className="font-bold text-xl tracking-tight" style={{ color: "var(--text-primary)" }}>
                Alex<span className="gradient-text">.</span>
              </span>
            </div>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              © {currentYear} Alex Carter. All rights reserved.
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex gap-8 text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
            <a href="#about" className="hover:text-accent transition-colors">About</a>
            <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
            <a href="#skills" className="hover:text-accent transition-colors">Skills</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
          </div>

          {/* Socials */}
          <div className="flex gap-4">
            {[
              { icon: Code, href: "https://github.com" },
              { icon: User, href: "https://linkedin.com" },
              { icon: Globe, href: "https://twitter.com" },
            ].map((social, i) => (
              <a 
                key={i}
                href={social.href}
                target="_blank"
                className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:scale-110 hover:border-accent/50 transition-all"
                style={{ color: "var(--text-secondary)" }}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>

        </div>

        {/* Bottom line */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col items-center gap-2">
          <p className="text-xs flex items-center gap-1.5" style={{ color: "var(--text-muted)" }}>
            Built with <Heart size={12} className="text-pink-500 fill-pink-500" /> using Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
