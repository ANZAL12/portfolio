"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const [targetOffset, setTargetOffset] = useState({ x: -260, y: 920 });

  const calculateOffsets = () => {
    const heroPhoto = document.getElementById("hero-photo-container");
    const targetSlot = document.getElementById("about-photo-target");

    if (heroPhoto && targetSlot) {
      const scroll = window.scrollY;
      const heroRect = heroPhoto.getBoundingClientRect();
      const targetRect = targetSlot.getBoundingClientRect();

      const heroCenterX = heroRect.left + heroRect.width / 2;
      const heroCenterY = heroRect.top + scroll + heroRect.height / 2;

      const targetCenterX = targetRect.left + targetRect.width / 2;
      const targetCenterY = targetRect.top + scroll + targetRect.height / 2;

      const deltaX = targetCenterX - heroCenterX;
      const deltaY = targetCenterY - heroCenterY;

      if (deltaY > 0) {
        setTargetOffset({ x: deltaX, y: deltaY });
      }
    }
  };

  useEffect(() => {
    calculateOffsets();
    const t1 = setTimeout(calculateOffsets, 150);
    const t2 = setTimeout(calculateOffsets, 600);
    const t3 = setTimeout(calculateOffsets, 1200);

    const handleResize = () => {
      calculateOffsets();
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(handleResize) : null;
    if (ro && document.body) {
      ro.observe(document.body);
    }

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
      if (ro) ro.disconnect();
    };
  }, []);

  // Track scroll progress through the hero section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Fast, responsive spring smoothing for 60fps momentum animations
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    restDelta: 0.001,
  });

  // Dynamic transforms based on calculated target offsets
  const photoY = useTransform(smoothProgress, (val) => val * targetOffset.y);
  const photoX = useTransform(smoothProgress, (val) => val * targetOffset.x);
  const photoRotateY = useTransform(smoothProgress, [0, 1], [0, 360]);
  const photoRotateZ = useTransform(smoothProgress, [0, 0.5, 1], [0, 6, 0]);
  const shineOpacity = useTransform(smoothProgress, [0, 0.25, 0.5, 0.75, 1], [0, 0.4, 0.7, 0.4, 0]);

  // Smart single small scroll catch-up on user wheel/touch gesture
  useEffect(() => {
    let isLocked = false;
    let touchStartY = 0;

    const scrollToSection = (target: number | HTMLElement) => {
      if (isLocked) return;
      isLocked = true;

      const lenis = (window as any).lenis;
      if (lenis) {
        lenis.scrollTo(target, {
          duration: 0.9,
          easing: (t: number) => 1 - Math.pow(1 - t, 3),
        });
      } else {
        if (typeof target === "number") {
          window.scrollTo({ top: target, behavior: "smooth" });
        } else {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }

      setTimeout(() => {
        isLocked = false;
      }, 950);
    };

    const handleWheel = (e: WheelEvent) => {
      const currentScroll = window.scrollY;
      const heroHeight = window.innerHeight;

      // Small scroll down from homepage -> immediately glides to About section
      if (currentScroll < 50 && e.deltaY > 15) {
        const aboutEl = document.getElementById("about");
        if (aboutEl) scrollToSection(aboutEl);
      }
      // Small scroll up near top of About -> immediately glides back to Hero
      else if (currentScroll > 80 && currentScroll < heroHeight * 0.6 && e.deltaY < -15) {
        scrollToSection(0);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const currentY = e.touches[0].clientY;
      const diffY = touchStartY - currentY;
      const currentScroll = window.scrollY;
      const heroHeight = window.innerHeight;

      // Small swipe up at Hero -> advances to About
      if (currentScroll < 50 && diffY > 20) {
        const aboutEl = document.getElementById("about");
        if (aboutEl) scrollToSection(aboutEl);
      }
      // Small swipe down near About -> returns to Hero
      else if (currentScroll > 80 && currentScroll < heroHeight * 0.6 && diffY < -20) {
        scrollToSection(0);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative w-full min-h-screen bg-[var(--bg-primary)] overflow-x-clip overflow-y-visible flex flex-col md:flex-row items-center justify-center noise z-20"
      style={{ perspective: 1200 }}
    >
      {/* Mobile Title View (< md): Stacked beautifully above the photo without any overlap */}
      <div className="md:hidden flex flex-col items-center text-center z-10 px-4 pt-20 pb-4 select-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-1.5"
        >
          <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse inline-block" />
          <p className="text-white/80 tracking-widest text-xs font-semibold uppercase">
            Mohammed Anzal
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
          className="text-4xl sm:text-5xl font-bebas text-white leading-none tracking-tight"
          style={{ textShadow: "0 10px 40px rgba(0,0,0,0.7)" }}
        >
          SOFTWARE <span className="gradient-text">DEVELOPER</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="text-white/70 text-xs sm:text-sm max-w-[280px] mx-auto mt-2 leading-relaxed"
        >
          I&apos;m a fullstack developer and Next.js expert building digital experiences
        </motion.p>
      </div>

      {/* Desktop Floating Typography (md and above): 100% UNTOUCHED */}
      <motion.div
        className="hidden md:block absolute inset-0 max-w-[1600px] mx-auto w-full h-full pointer-events-none"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
      >
        {/* Left Side Text: Name + SOFTWARE */}
        <div className="absolute left-6 md:left-12 lg:left-24 top-[40%] -translate-y-1/2 z-10 select-none">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="flex items-center gap-2 mb-2 ml-1"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse inline-block" />
            <p className="text-white/80 tracking-widest text-sm md:text-base font-semibold uppercase">
              Mohammed Anzal
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
            className="text-[clamp(4.5rem,10vw,160px)] font-bebas text-white leading-none tracking-tighter"
            style={{ textShadow: "0 10px 40px rgba(0,0,0,0.7)" }}
          >
            SOFTWARE
          </motion.h1>
        </div>

        {/* Right Side Text: DEVELOPER + Subtitle */}
        <div className="absolute right-6 md:right-12 lg:right-24 top-[60%] -translate-y-1/2 z-10 text-right select-none">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
            className="text-[clamp(4.5rem,10vw,160px)] font-bebas text-white leading-none tracking-tighter"
            style={{ textShadow: "0 10px 40px rgba(0,0,0,0.7)" }}
          >
            DEVELOPER
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="text-white/70 text-sm md:text-base max-w-xs ml-auto mt-4 leading-relaxed mr-1"
          >
            I&apos;m a fullstack developer and Next.js expert building digital experiences
            <span className="inline-block w-3 h-3 rounded-full bg-[var(--accent)] ml-2 mb-[-1px]" />
          </motion.p>
        </div>
      </motion.div>

      {/* Center 3D Scroll-Flipping Profile Photo */}
      <div 
        id="hero-photo-container"
        className="relative z-30 pointer-events-auto mt-2 md:mt-12" 
        style={{ perspective: 1200 }}
      >
        <motion.div
          id="hero-photo"
          className="relative w-[260px] sm:w-[300px] md:w-[360px] lg:w-[380px] aspect-[3/4] rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.7)] bg-[#1e1e1e] border border-white/15 transform-gpu will-change-transform"
          initial={{ scale: 0.9, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          style={{
            x: photoX,
            y: photoY,
            rotateY: photoRotateY,
            rotateZ: photoRotateZ,
            transformStyle: "preserve-3d",
          }}
          whileHover={{
            scale: 1.03,
            boxShadow: "0 25px 70px rgba(196,251,109,0.25)",
            borderColor: "rgba(196,251,109,0.5)",
          }}
        >
          <Image
            src="/hero-profile.png"
            alt="Mohammed Anzal"
            fill
            sizes="(max-width: 768px) 80vw, 380px"
            className="object-cover object-top select-none pointer-events-none"
            priority
            unoptimized
          />

          {/* 3D dynamic shine glint during flip */}
          <motion.div
            className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/30 to-transparent"
            style={{ opacity: shineOpacity }}
          />

          {/* Glowing bottom vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      </div>

      {/* Floating Action Button (Hand) */}
      <motion.button
        onClick={() => {
          const aboutSection = document.getElementById("about");
          if (aboutSection) {
            const lenis = (window as any).lenis;
            if (lenis) {
              lenis.scrollTo(aboutSection, { duration: 0.9, easing: (t: number) => 1 - Math.pow(1 - t, 3) });
            } else {
              aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }
        }}
        className="absolute bottom-10 md:bottom-28 left-4 sm:left-8 md:left-32 z-30 w-14 h-14 sm:w-16 sm:h-16 md:w-28 md:h-28 bg-[var(--accent)] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(196,251,109,0.3)] hover:scale-110 active:scale-95 transition-transform cursor-pointer"
        aria-label="Say Hello"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.6 }}
      >
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="var(--bg-primary)"
          stroke="var(--bg-primary)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-7 h-7 sm:w-8 sm:h-8 md:w-12 md:h-12"
        >
          <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
          <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
          <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
          <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
          <path d="M6 11V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
        </svg>
      </motion.button>

      {/* Bottom Toggle Switch */}
      <motion.div
        className="absolute bottom-3 sm:bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-10 md:z-30"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
      >
        <div
          onClick={() => {
            const aboutSection = document.getElementById("about");
            if (aboutSection) {
              const lenis = (window as any).lenis;
              if (lenis) {
                lenis.scrollTo(aboutSection, { duration: 0.9, easing: (t: number) => 1 - Math.pow(1 - t, 3) });
              } else {
                aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }
          }}
          className="w-14 h-7 bg-black/40 backdrop-blur-md rounded-full p-1 cursor-pointer border border-white/20 flex items-center justify-start hover:bg-black/60 transition-colors shadow-lg"
        >
          <div className="w-5 h-5 bg-[var(--accent)] rounded-full shadow-lg" />
        </div>
      </motion.div>
    </section>
  );
}
