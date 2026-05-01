"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, Code, User, Globe, Download } from "lucide-react";
import Image from "next/image";

const ROLES = [
  "Full-Stack Developer",
  "Open Source Enthusiast",
  "React & Next.js Expert",
];

function useTypewriter(words: string[], speed = 100, pause = 3000) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIdx % words.length];
    
    const handleTyping = () => {
      if (!isDeleting) {
        if (display.length < currentWord.length) {
          setDisplay(currentWord.slice(0, display.length + 1));
        } else {
          // Pause when word is finished
          const pauseTimer = setTimeout(() => setIsDeleting(true), pause);
          return () => clearTimeout(pauseTimer);
        }
      } else {
        if (display.length > 0) {
          setDisplay(currentWord.slice(0, display.length - 1));
        } else {
          setIsDeleting(false);
          setWordIdx((prev) => prev + 1);
        }
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [display, isDeleting, wordIdx, words, speed, pause]);

  return display;
}

const socials = [
  { Icon: Code, href: "https://github.com", label: "GitHub" },
  { Icon: User, href: "https://linkedin.com", label: "LinkedIn" },
  { Icon: Globe, href: "https://twitter.com", label: "Twitter" },
];

export default function Hero() {
  const role = useTypewriter(ROLES);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center grid-bg overflow-hidden pt-24"
    >
      {/* Background effects are baked into the profile image */}

      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 text-center flex flex-col items-center">
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
          className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[600px] -z-10 pointer-events-none animate-fade-in"
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
              alt="Mohammed Anzal"
              fill
              sizes="600px"
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Name */}
        <h1
          className="text-3xl sm:text-4xl md:text-6xl lg:text-[6.5rem] font-black tracking-tight mb-4 animate-fade-up mt-[380px] relative z-10 whitespace-nowrap"
          style={{ animationDelay: "0.2s", opacity: 0, textShadow: "0 10px 30px rgba(0,0,0,0.8)" }}
        >
          <span style={{ color: "var(--text-primary)" }}>Mohammed </span>
          <span className="gradient-text glow-text">Anzal</span>
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
          className="absolute bottom-10 right-0 flex items-center gap-4 animate-fade-up hidden lg:flex"
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
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>Scroll down</span>
        <ArrowDown size={16} style={{ color: "var(--accent)" }} />
      </div>
    </section>
  );
}
