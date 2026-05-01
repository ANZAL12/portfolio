"use client";

import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";

const navLinks = [
  { label: "Home",     href: "#hero" },
  { label: "About",    href: "#about" },
  { label: "Skills",   href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [open,      setOpen]      = useState(false);
  const [scrolled,  setScrolled]  = useState(false);
  const [active,    setActive]    = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      // highlight active section
      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY + 100 >= el.offsetTop) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(10,10,15,0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(108,99,255,0.15)"
          : "1px solid transparent",
      }}
    >
      <nav className="w-full max-w-[1500px] mx-auto px-6 md:px-16 flex items-center justify-between h-24">
        {/* Logo */}
        <button
          onClick={() => handleNav("#hero")}
          className="flex items-center gap-2 group"
          aria-label="Go to top"
        >
          <span
            className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
            style={{ background: "var(--gradient-1)" }}
          >
            <Code2 size={20} className="text-white" />
          </span>
          <span className="font-bold text-lg tracking-tight" style={{ color: "var(--text-primary)" }}>
            Anzal<span className="gradient-text">.</span>
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, href }) => {
            const id = href.slice(1);
            return (
              <li key={href}>
                <button
                  onClick={() => handleNav(href)}
                  className="relative px-5 py-2.5 rounded-xl text-base font-medium transition-all duration-300"
                  style={{
                    color: active === id ? "var(--accent-light)" : "var(--text-secondary)",
                  }}
                >
                  {active === id && (
                    <span
                      className="absolute inset-0 rounded-lg opacity-20"
                      style={{ background: "var(--accent)" }}
                    />
                  )}
                  {label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); handleNav("#contact"); }}
          className="hidden md:block px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
          style={{ background: "var(--gradient-1)", boxShadow: "0 0 20px var(--accent-glow)" }}
        >
          Hire Me
        </a>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg transition-colors"
          style={{ color: "var(--text-primary)" }}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className="md:hidden overflow-hidden transition-all duration-400"
        style={{
          maxHeight: open ? "400px" : "0",
          opacity: open ? 1 : 0,
        }}
      >
        <div
          className="px-6 pb-6 pt-2 flex flex-col gap-1"
          style={{ background: "rgba(10,10,15,0.95)", backdropFilter: "blur(20px)" }}
        >
          {navLinks.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => handleNav(href)}
              className="text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-white/5"
              style={{ color: "var(--text-secondary)" }}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => handleNav("#contact")}
            className="mt-2 px-5 py-3 rounded-xl text-sm font-semibold text-white"
            style={{ background: "var(--gradient-1)" }}
          >
            Hire Me
          </button>
        </div>
      </div>
    </header>
  );
}
