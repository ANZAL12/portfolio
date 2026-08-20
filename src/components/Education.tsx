"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Calendar, MapPin } from "lucide-react";
import TextReveal from "./animations/TextReveal";

export default function Education() {
  return (
    <section id="education" className="section relative py-24 overflow-hidden">
      {/* Background radial accent */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ 
          background: "radial-gradient(circle, rgba(196,251,109,0.03) 0%, transparent 70%)",
          filter: "blur(90px)"
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <TextReveal delay={0.1}>
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
              Academic Background
            </p>
          </TextReveal>
          <TextReveal delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-black" style={{ color: "var(--text-primary)" }}>
              My <span className="gradient-text">Education</span>
            </h2>
          </TextReveal>
        </div>

        {/* Single Unified Card with 3D Fly-In & Perspective Motion */}
        <div style={{ perspective: 1400 }}>
          <motion.div 
            initial={{ 
              opacity: 0, 
              y: 100, 
              rotateX: 25, 
              rotateY: -20, 
              rotateZ: -4, 
              scale: 0.85 
            }}
            whileInView={{ 
              opacity: 1, 
              y: 0, 
              x: 0, 
              rotateX: 0, 
              rotateY: 0, 
              rotateZ: 0, 
              scale: 1 
            }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ 
              duration: 0.9, 
              ease: [0.16, 1, 0.3, 1] 
            }}
            whileHover={{ 
              y: -8,
              scale: 1.01,
            }}
            className="relative rounded-3xl glass border border-white/10 hover:border-[var(--accent)]/50 hover:shadow-[0_25px_60px_rgba(196,251,109,0.15)] transition-colors duration-300 p-6 sm:p-8 md:p-12 overflow-hidden shadow-2xl group transform-gpu will-change-transform"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Subtle accent glow inside card background */}
            <div 
              className="absolute -right-20 -top-20 w-96 h-96 rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(196,251,109,0.06) 0%, transparent 70%)",
                filter: "blur(50px)"
              }}
            />

            <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Left Details Column */}
              <div className="lg:col-span-7 space-y-5 sm:space-y-6">
                
                {/* Badges & Meta */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-[var(--accent)] flex items-center gap-1.5 shadow-sm">
                    <Award className="w-3.5 h-3.5" />
                    First Class Distinction
                  </span>
                  <span className="px-3.5 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-white/70 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    Graduation 2026
                  </span>
                </div>

                {/* Title & University */}
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                    B.Tech in Computer Science and Engineering
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-[var(--accent)] font-medium flex items-center gap-2 pt-1">
                    <MapPin className="w-4 h-4 shrink-0 text-[var(--accent)]" />
                    Cochin University of Science and Technology (CUSAT)
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white/70 border-t border-white/5 pt-4 sm:pt-5">
                  Passionate about software development, technology, and continuous learning. Focused on scalable web architectures, modern distributed applications, and high-impact digital experiences.
                </p>

                {/* Highlights Tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {[
                    "Computer Science",
                    "Software Engineering",
                    "Web Technologies",
                    "System Design",
                    "Algorithms"
                  ].map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-xl text-xs font-medium bg-white/[0.04] border border-white/10 text-white/80 select-none"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Photo Column: Transparent cutout inside the card */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end items-end pt-4 lg:pt-0">
                <div className="relative w-[240px] sm:w-[300px] lg:w-[360px] h-[300px] sm:h-[400px] lg:h-[460px]">
                  <Image
                    src="/education.png"
                    alt="Mohammed Anzal CUSAT Convocation"
                    fill
                    sizes="(max-width: 768px) 80vw, 360px"
                    className="object-contain object-bottom select-none pointer-events-none group-hover:scale-105 transition-transform duration-700"
                    priority
                    unoptimized
                  />
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
