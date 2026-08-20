"use client";

import { motion } from "framer-motion";
import TextReveal from "./animations/TextReveal";

export default function About() {
  return (
    <section id="about" className="section relative min-h-screen flex items-center justify-center py-20">
      {/* Background radial accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(196,251,109,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 w-full">
        {/* Section header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <TextReveal delay={0.1}>
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
              Get to know me
            </p>
          </TextReveal>
          <TextReveal delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-black" style={{ color: "var(--text-primary)" }}>
              About <span className="gradient-text">Me</span>
            </h2>
          </TextReveal>
        </div>

        {/* 2-Column Layout: Left (Target Landing Slot for Hero Photo) & Right (Bio) */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Target Anchor for the Traveling Hero Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              id="about-photo-target"
              className="relative w-[260px] sm:w-[300px] md:w-[360px] lg:w-[380px] aspect-[3/4] pointer-events-none opacity-0"
              aria-hidden="true"
            />
          </div>

          {/* Right Column: Bio Description */}
          <div className="lg:col-span-7 space-y-6">
            <TextReveal delay={0.1}>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight" style={{ color: "var(--text-primary)" }}>
                I build things people <span className="gradient-text">love to use</span>
              </h3>
            </TextReveal>

            <motion.div
              className="space-y-5 text-base md:text-lg leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p>
                I&apos;m a passionate Computer Science graduate who enjoys building web applications and exploring modern technologies. I enjoy turning ideas into functional,
                 user-friendly solutions and continuously learning new tools and frameworks.
              </p>
              <p>
                My interests include full-stack development, cloud technologies, and DevOps practices. 
                Through academic projects and personal work, I've gained experience working with technologies 
                such as Java, React, Node.js, MongoDB, and Git.
              </p>
              <p>
                I'm currently seeking opportunities where I can apply my skills, contribute to meaningful projects, and grow as a software engineer.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
