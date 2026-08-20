"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Code, ArrowRight } from "lucide-react";
import { useRef } from "react";
import TextReveal from "./animations/TextReveal";

const projects = [
  {
    title: "Global Agencies",
    description: "Built a full-stack sales and incentive management system with secure JWT-based authentication and role-based access control, enabling structured performance tracking for promoters and admins. Designed scalable REST APIs and optimized relational database models to automate incentive calculations and ensure data consistency across the mobile application.",
    tech: ["Django REST Framework", "PostgreSQL", "React Native (Expo)", "JWT"],
    image: "/global-agencies.png",
    live: "https://github.com/ANZAL12/globalMongam2.git",
    github: "https://github.com/ANZAL12/globalMongam2.git",
    category: "Full-Stack & Mobile",
    isMockup: true,
  },
  {
    title: "Nippon Toyota Payroll Management System",
    description: "Developed a full-stack payroll management system to automate employee salary processing, Excel-based salary uploads, net salary calculation, and salary-slip generation. Implemented automated Toyota-branded PDF salary slips with secure storage, downloads, and document verification using Supabase Storage. Built bulk email distribution with delivery-status tracking and an administrative dashboard for payroll analytics and activity monitoring.",
    tech: ["Next.js 15", "TypeScript", "Tailwind", "Supabase"],
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800",
    live: "https://github.com/ANZAL12/Salary-Slip-System.git",
    github: "https://github.com/ANZAL12/Salary-Slip-System.git",
    category: "Enterprise & Full-Stack",
    isMockup: false,
  },
  {
    title: "Ronoos Cake",
    description: "Designed and implemented a bakery management system with JWT authentication and role-based access control (Admin, Baker, Customer) to ensure secure and seamless user experience. Developed and integrated RESTful APIs for user authentication, product management, order processing, and real-time notifications, improving efficiency and system performance.",
    tech: ["Vue.js", "Django REST Framework", "PostgreSQL", "Figma"],
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800",
    live: "https://github.com",
    github: "https://github.com",
    category: "Full-Stack & E-Commerce",
    isMockup: false,
  }
];

function ProjectCard({
  project,
  index,
  range,
  targetScale,
  progress,
}: {
  project: any;
  index: number;
  range: [number, number];
  targetScale: number;
  progress: any;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={cardRef}
      className="sticky flex items-center justify-center top-[70px] md:top-[95px]"
      style={{
        top: `calc(70px + ${index * 14}px)`,
        marginBottom: index === 2 ? "0px" : "80px",
      }}
    >
      <motion.div
        style={{
          scale,
          transformOrigin: "top center",
        }}
        className="w-full rounded-3xl glass border border-white/10 p-5 sm:p-7 md:p-12 overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.9)] bg-[#121216] backdrop-blur-2xl hover:border-white/20 transition-colors duration-300 group"
      >
        {/* Ambient subtle glow inside each card */}
        <div 
          className="absolute -right-20 -top-20 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(196,251,109,0.05) 0%, transparent 70%)",
            filter: "blur(50px)"
          }}
        />

        <div className="grid lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-10 items-center relative z-10">
          {/* Project Details (Left) */}
          <div className="lg:col-span-6 space-y-3 sm:space-y-4 md:space-y-6">
            <div className="space-y-1 sm:space-y-2">
              <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase" style={{ color: "var(--accent-light)" }}>
                {project.category}
              </span>
              <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black text-white">
                {project.title}
              </h3>
            </div>
            
            <p className="text-xs sm:text-sm md:text-lg leading-relaxed text-white/70">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-0.5 sm:pt-2">
              {project.tech.map((t: string) => (
                <span 
                  key={t}
                  className="px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-semibold bg-white/[0.05] border border-white/10 text-white/80"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="pt-1 sm:pt-3 flex flex-wrap gap-2.5 sm:gap-4">
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-xl sm:rounded-2xl glass border border-white/10 hover:border-[var(--accent)] hover:text-white flex items-center gap-2 text-xs sm:text-sm font-semibold transition-all duration-300 hover:scale-105"
                >
                  <Code size={15} /> GitHub Repository
                </a>
              )}
              {project.live && project.live !== project.github && (
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-xl sm:rounded-2xl bg-white text-black hover:bg-[var(--accent)] flex items-center gap-2 text-xs sm:text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-md"
                >
                  <ExternalLink size={15} /> Live Demo
                </a>
              )}
            </div>
          </div>

          {/* Project Visual / Image / Mockup (Right) */}
          <div className="lg:col-span-6 flex items-center justify-center pt-2 sm:pt-0">
            {project.isMockup ? (
              <div className="relative w-full h-[140px] sm:h-[180px] md:h-[240px] lg:h-auto lg:aspect-[16/11] flex items-center justify-center">
                <div 
                  className="absolute inset-0 pointer-events-none -z-10"
                  style={{
                    background: "radial-gradient(circle at 50% 50%, rgba(196,251,109,0.06) 0%, transparent 70%)",
                    filter: "blur(40px)"
                  }}
                />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-contain filter drop-shadow-[0_25px_40px_rgba(0,0,0,0.85)] group-hover:scale-105 transition-transform duration-700 select-none pointer-events-none"
                />
              </div>
            ) : (
              <div className="relative h-[130px] sm:h-[170px] md:h-[220px] lg:h-auto lg:aspect-[16/10] w-full rounded-xl sm:rounded-2xl overflow-hidden glass border border-white/10 group/img shadow-xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="projects" ref={containerRef} className="section relative py-24">
      {/* Background radial accent */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{ 
          background: "radial-gradient(circle, rgba(196,251,109,0.03) 0%, transparent 70%)",
          filter: "blur(100px)"
        }}
      />

      <div className="max-w-6xl mx-auto px-6 mb-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <TextReveal delay={0.1}>
              <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
                Selected Works
              </p>
            </TextReveal>
            <TextReveal delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-black" style={{ color: "var(--text-primary)" }}>
                My <span className="gradient-text">Projects</span>
              </h2>
            </TextReveal>
          </div>
          <TextReveal delay={0.3}>
            <a 
              href="https://github.com/ANZAL12" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-bold transition-all duration-300 hover:gap-4 pb-2"
              style={{ color: "var(--accent-light)" }}
            >
              View all on GitHub <ArrowRight size={18} />
            </a>
          </TextReveal>
        </div>
      </div>

      {/* Stacked Cards Deck */}
      <div className="max-w-6xl mx-auto px-6 relative pb-20">
        {projects.map((project, index) => {
          const targetScale = 1 - (projects.length - index) * 0.05;
          return (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              progress={scrollYProgress}
              range={[index * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
}
