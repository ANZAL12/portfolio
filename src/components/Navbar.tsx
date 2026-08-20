"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home",     href: "#hero" },
  { label: "About",    href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Blogs",    href: "#blogs" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  const { scrollY } = useScroll();

  // Responsive spring smoothing for scroll-driven animations
  const smoothY = useSpring(scrollY, {
    stiffness: 180,
    damping: 24,
    restDelta: 0.001,
  });

  // Scroll animations: shrink, translate up, and fade out on scroll down; reverse on scroll up
  const navScale = useTransform(smoothY, [0, 140], [1, 0.75]);
  const navY = useTransform(smoothY, [0, 140], [0, -35]);
  const navOpacity = useTransform(smoothY, [0, 110], [1, 0]);

  useEffect(() => {
    const onScroll = () => {
      // Highlight active section
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
    const target = document.querySelector(href);
    if (target) {
      const lenis = (window as any).lenis;
      if (lenis) {
        lenis.scrollTo(target, { duration: 1.0, offset: 0 });
      } else {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <motion.header
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
      style={{
        scale: navScale,
        y: navY,
        opacity: navOpacity,
      }}
    >
      <nav 
        className="flex items-center gap-6 px-3 py-3 rounded-full bg-[#111111]/90 backdrop-blur-md border border-white/10 shadow-2xl"
      >
        {/* Avatar Logo */}
        <button
          onClick={() => handleNav("#hero")}
          className="w-10 h-10 rounded-full overflow-hidden border border-white/20 shrink-0 cursor-pointer"
          aria-label="Go to top"
        >
          <img src="/hero-profile.png" alt="Avatar" className="w-full h-full object-cover" />
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-2">
          {navLinks.map(({ label, href }) => {
            const id = href.slice(1);
            return (
              <li key={href}>
                <button
                  onClick={() => handleNav(href)}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 cursor-pointer"
                  style={{
                    color: active === id ? "#ffffff" : "var(--text-secondary)",
                    backgroundColor: active === id ? "rgba(255,255,255,0.1)" : "transparent"
                  }}
                >
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
          className="hidden md:block px-6 py-2.5 rounded-full text-sm font-semibold bg-white text-black hover:bg-gray-200 transition-colors cursor-pointer"
        >
          Contact
        </a>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg transition-colors cursor-pointer"
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
          className="px-6 pb-6 pt-2 flex flex-col gap-1 rounded-3xl mt-2 border border-white/10"
          style={{ background: "rgba(10,10,15,0.95)", backdropFilter: "blur(20px)" }}
        >
          {navLinks.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => handleNav(href)}
              className="text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-white/5 cursor-pointer"
              style={{ color: "var(--text-secondary)" }}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => handleNav("#contact")}
            className="mt-2 px-5 py-3 rounded-xl text-sm font-semibold text-white cursor-pointer"
            style={{ background: "var(--gradient-1)" }}
          >
            Hire Me
          </button>
        </div>
      </div>
    </motion.header>
  );
}
