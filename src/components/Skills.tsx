"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Server,
  Wrench
} from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiJavascript,
  SiHtml5,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiGraphql,
  SiFirebase,
  SiGit,
  SiGithub,
  SiDocker,
  SiVercel,
  SiFigma,
  SiJest,
  SiTurborepo,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import TextReveal from "./animations/TextReveal";

const frontendSkills = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "HTML5 / CSS3", icon: SiHtml5, color: "#E34F26" },
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
];

const backendSkills = [
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Express", icon: SiExpress, color: "#FFFFFF" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
];

const devopsSkills = [
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Jest", icon: SiJest, color: "#C21325" },
  { name: "Turborepo", icon: SiTurborepo, color: "#EF4444" },
];

export default function Skills() {
  return (
    <section id="skills" className="section relative py-24 overflow-hidden min-h-screen flex items-center justify-center">
      
      {/* 3D Container for Doors & Content */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="w-full relative perspective-[2000px] flex items-center justify-center"
      >
        
        {/* DOORS */}
        <div className="absolute inset-0 z-50 flex pointer-events-none items-center justify-center perspective-[2000px]">
          {/* Left Door */}
          <motion.div 
            variants={{
              hidden: { rotateY: 0, opacity: 1, z: 0 },
              visible: { rotateY: -105, opacity: 0, z: 200, transition: { duration: 1.6, ease: [0.22, 1, 0.36, 1] } }
            }}
            style={{ transformOrigin: "left center", transformStyle: "preserve-3d" }}
            className="w-1/2 h-[150vh] bg-[var(--bg-primary)] border-r border-[var(--accent)]/30 shadow-[20px_0_50px_rgba(196,251,109,0.05)] flex flex-col items-end justify-center pr-4 absolute left-0"
          >
             <div className="w-1 h-48 bg-[var(--accent)] rounded-full shadow-[0_0_20px_var(--accent)] opacity-80" />
             <div className="text-[var(--accent)]/40 text-[10px] tracking-[0.4em] font-mono rotate-90 origin-right mr-3 mt-12">SYSTEM_RESTRICTED</div>
          </motion.div>

          {/* Right Door */}
          <motion.div 
            variants={{
              hidden: { rotateY: 0, opacity: 1, z: 0 },
              visible: { rotateY: 105, opacity: 0, z: 200, transition: { duration: 1.6, ease: [0.22, 1, 0.36, 1] } }
            }}
            style={{ transformOrigin: "right center", transformStyle: "preserve-3d" }}
            className="w-1/2 h-[150vh] bg-[var(--bg-primary)] border-l border-[var(--accent)]/30 shadow-[-20px_0_50px_rgba(196,251,109,0.05)] flex flex-col items-start justify-center pl-4 absolute right-0"
          >
             <div className="w-1 h-48 bg-[var(--accent)] rounded-full shadow-[0_0_20px_var(--accent)] opacity-80" />
             <div className="text-[var(--accent)]/40 text-[10px] tracking-[0.4em] font-mono -rotate-90 origin-left ml-3 mt-12">SKILLS_DATABASE</div>
          </motion.div>
        </div>

        {/* The Camera "Go Through" effect on content */}
        <motion.div 
          variants={{
            hidden: { scale: 0.6, opacity: 0, filter: "blur(15px)" },
            visible: { scale: 1, opacity: 1, filter: "blur(0px)", transition: { duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] } }
          }}
          className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6"
        >
          {/* Background radial accent */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
            style={{ 
              background: "radial-gradient(circle, rgba(196,251,109,0.04) 0%, transparent 70%)",
              filter: "blur(90px)"
            }}
          />

          {/* Section Header */}
          <div className="text-center mb-16 flex flex-col items-center">
            <TextReveal delay={0.6}>
              <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
                What I work with
              </p>
            </TextReveal>
            <TextReveal delay={0.8}>
              <h2 className="text-4xl md:text-5xl font-black" style={{ color: "var(--text-primary)" }}>
                My <span className="gradient-text">Skills</span>
              </h2>
            </TextReveal>
          </div>

          {/* 3D Perspective Cards Container with High-Impact Flip Transitions */}
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            style={{ perspective: 1200 }}
          >
            {/* Card 1: Frontend Development */}
            <motion.div 
              initial={{ opacity: 0, rotateY: -65, y: 60, scale: 0.85 }}
              whileInView={{ opacity: 1, rotateY: 0, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.8,
              }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
              }}
              className="p-6 sm:p-8 rounded-3xl glass border border-white/10 hover:border-[var(--accent)]/50 hover:shadow-[0_20px_50px_rgba(196,251,109,0.15)] transition-colors duration-300 flex flex-col justify-between group transform-gpu will-change-transform"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg"
                    style={{ background: "rgba(196, 251, 109, 0.1)", color: "var(--accent)" }}
                  >
                    <Code2 size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[var(--accent)] transition-colors">
                    Frontend Development
                  </h3>
                </div>

                <p className="text-sm text-white/60 mb-6 leading-relaxed">
                  Crafting fluid, high-performance web interfaces with pixel-perfect design systems.
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5 pt-4 border-t border-white/5">
                {frontendSkills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[var(--accent)]/50 hover:bg-white/[0.08] transition-colors duration-200 cursor-default select-none group/item shadow-sm"
                    >
                      <Icon 
                        className="text-base shrink-0 transition-transform duration-200 group-hover/item:scale-110" 
                        style={{ color: skill.color }} 
                      />
                      <span className="text-xs md:text-sm font-medium text-white/90 group-hover/item:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Card 2: Backend & Database */}
            <motion.div 
              initial={{ opacity: 0, rotateX: 65, y: 60, scale: 0.85 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.9,
              }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
              }}
              className="p-6 sm:p-8 rounded-3xl glass border border-white/10 hover:border-[var(--accent)]/50 hover:shadow-[0_20px_50px_rgba(196,251,109,0.15)] transition-colors duration-300 flex flex-col justify-between group transform-gpu will-change-transform"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg"
                    style={{ background: "rgba(196, 251, 109, 0.1)", color: "var(--accent)" }}
                  >
                    <Server size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[var(--accent)] transition-colors">
                    Backend & Database
                  </h3>
                </div>

                <p className="text-sm text-white/60 mb-6 leading-relaxed">
                  Designing robust server architectures, secure APIs, and resilient data storage.
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5 pt-4 border-t border-white/5">
                {backendSkills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[var(--accent)]/50 hover:bg-white/[0.08] transition-colors duration-200 cursor-default select-none group/item shadow-sm"
                    >
                      <Icon 
                        className="text-base shrink-0 transition-transform duration-200 group-hover/item:scale-110" 
                        style={{ color: skill.color }} 
                      />
                      <span className="text-xs md:text-sm font-medium text-white/90 group-hover/item:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Card 3: DevOps & Tools */}
            <motion.div 
              initial={{ opacity: 0, rotateY: 65, y: 60, scale: 0.85 }}
              whileInView={{ opacity: 1, rotateY: 0, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 1.0,
              }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
              }}
              className="p-6 sm:p-8 rounded-3xl glass border border-white/10 hover:border-[var(--accent)]/50 hover:shadow-[0_20px_50px_rgba(196,251,109,0.15)] transition-colors duration-300 flex flex-col justify-between group transform-gpu will-change-transform"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg"
                    style={{ background: "rgba(196, 251, 109, 0.1)", color: "var(--accent)" }}
                  >
                    <Wrench size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[var(--accent)] transition-colors">
                    DevOps & Tools
                  </h3>
                </div>

                <p className="text-sm text-white/60 mb-6 leading-relaxed">
                  Managing deployments, CI/CD pipelines, containerization, and modern design tools.
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5 pt-4 border-t border-white/5">
                {devopsSkills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[var(--accent)]/50 hover:bg-white/[0.08] transition-colors duration-200 cursor-default select-none group/item shadow-sm"
                    >
                      <Icon 
                        className="text-base shrink-0 transition-transform duration-200 group-hover/item:scale-110" 
                        style={{ color: skill.color }} 
                      />
                      <span className="text-xs md:text-sm font-medium text-white/90 group-hover/item:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
