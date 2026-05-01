"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, Code, User, Globe, Download } from "lucide-react";
import Image from "next/image";

const ROLES = [
  "Full-Stack Developer",
  "UI/UX Designer",
  "Open Source Enthusiast",
  "React & Next.js Expert",
];

function useTypewriter(words: string[], speed = 80, pause = 2000) {
  const [display, setDisplay]   = useState("");
  const [wordIdx, setWordIdx]   = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = words[wordIdx % words.length];
    const tick = () => {
      setDisplay((prev) => {
        if (!deleting) {
          const next = current.slice(0, prev.length + 1);
          if (next === current) {
            timeout.current = setTimeout(() => setDeleting(true), pause);
            return next;
          }
          timeout.current = setTimeout(tick, speed);
          return next;
        } else {
          const next = current.slice(0, prev.length - 1);
          if (next === "") {
            setDeleting(false);
            setWordIdx((i) => i + 1);
          }
          timeout.current = setTimeout(tick, speed / 2);
          return next;
        }
      });
    };
    timeout.current = setTimeout(tick, speed);
    return () => { if (timeout.current) clearTimeout(timeout.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wordIdx, deleting]);

  return display;
}

const socials = [
  { Icon: Code,     href: "https://github.com",   label: "GitHub" },
  { Icon: User,     href: "https://linkedin.com",  label: "LinkedIn" },
  { Icon: Globe,    href: "https://twitter.com",   label: "Twitter" },
];

export default function Hero() {
  const role = useTypewriter(ROLES);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center grid-bg overflow-hidden"
    >
      {/* Background effects are baked into the profile image */}

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in"
          style={{
            background: "rgba(108,99,255,0.1)",
            border: "1px solid rgba(108,99,255,0.3)",
            color: "var(--accent-light)",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for freelance work
        </div>

        {/* Profile Image (Background layer) */}
        <div 
          className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[700px] -z-10 pointer-events-none animate-fade-in"
          style={{ animationDelay: "0.1s", opacity: 0 }}
        >
          <div 
            className="w-full h-full relative" 
            style={{ 
              maskImage: "radial-gradient(circle at center, black 40%, transparent 75%)", 
              WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 75%)" 
            }}
          >
            <Image 
              src="/hero-profile.png" 
              alt="Alex Carter" 
              fill 
              sizes="700px"
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Name */}
        <h1
          className="text-7xl md:text-9xl font-black tracking-tight mb-4 animate-fade-up mt-[450px] relative z-10"
          style={{ animationDelay: "0.2s", opacity: 0, textShadow: "0 10px 30px rgba(0,0,0,0.8)" }}
        >
          <span style={{ color: "var(--text-primary)" }}>Alex </span>
          <span className="gradient-text glow-text">Carter</span>
        </h1>

        {/* Typewriter role */}
        <p
          className="text-2xl md:text-3xl font-mono font-medium mb-8 h-10 animate-fade-up"
          style={{ color: "var(--text-secondary)", animationDelay: "0.3s", opacity: 0 }}
        >
          {role}<span className="cursor" />
        </p>

        {/* Description */}
        <p
          className="text-lg max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up"
          style={{ color: "var(--text-secondary)", animationDelay: "0.4s", opacity: 0 }}
        >
          I craft pixel-perfect, performant web experiences using cutting-edge technologies.
          Passionate about clean code, stunning design, and seamless user interactions.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up"
          style={{ animationDelay: "0.5s", opacity: 0 }}
        >
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
            className="px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{ background: "var(--gradient-1)", boxShadow: "0 0 30px var(--accent-glow)" }}
          >
            View My Work
          </a>
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 glass"
            style={{ color: "var(--text-primary)", border: "1px solid var(--border)" }}
          >
            <Download size={18} />
            Download CV
          </a>
        </div>

        {/* Social icons */}
        <div
          className="absolute bottom-10 right-10 flex items-center gap-4 animate-fade-up hidden lg:flex"
          style={{ animationDelay: "0.6s", opacity: 0 }}
        >
          {socials.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 glass"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--accent-light)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                (e.currentTarget as HTMLElement).style.borderColor = "";
              }}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>Scroll down</span>
        <ArrowDown size={16} style={{ color: "var(--accent)" }} />
      </div>
    </section>
  );
}
