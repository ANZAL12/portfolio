"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code, ArrowRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Nova CRM Dashboard",
    description: "A comprehensive customer relationship management platform with real-time analytics, automated task tracking, and seamless team collaboration tools.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Prisma", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1551288049-bbda38a5f9a2?auto=format&fit=crop&q=80&w=800",
    live: "https://example.com",
    github: "https://github.com",
    category: "Web App"
  },
  {
    title: "Zenith E-Commerce",
    description: "High-performance headless e-commerce storefront featuring multi-currency support, dynamic filtering, and a custom-built checkout flow.",
    tech: ["React", "Shopify Storefront API", "Framer Motion", "Node.js"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    live: "https://example.com",
    github: "https://github.com",
    category: "E-Commerce"
  },
  {
    title: "Aura Health App",
    description: "Mobile-first wellness application focused on mental health tracking, guided meditations, and personalized sleep schedule optimization.",
    tech: ["React Native", "Firebase", "Redux Toolkit", "Python"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    live: "https://example.com",
    github: "https://github.com",
    category: "Mobile App"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Projects() {
  return (
    <section id="projects" className="section relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
              Selected Works
            </p>
            <h2 className="text-4xl md:text-5xl font-black" style={{ color: "var(--text-primary)" }}>
              My <span className="gradient-text">Projects</span>
            </h2>
          </div>
          <a 
            href="https://github.com" 
            target="_blank" 
            className="flex items-center gap-2 text-sm font-bold transition-all duration-300 hover:gap-4"
            style={{ color: "var(--accent-light)" }}
          >
            View all on GitHub <ArrowRight size={18} />
          </a>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.title}
              variants={cardVariants}
              className="group relative grid lg:grid-cols-12 gap-8 items-center"
            >
              {/* Project Image */}
              <div className="lg:col-span-7 relative aspect-[16/9] rounded-3xl overflow-hidden glass group-hover:border-accent/50 transition-all duration-500">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div className="flex gap-4">
                    <a 
                      href={project.live} 
                      target="_blank"
                      className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white text-black hover:scale-110 transition-transform"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a 
                      href={project.github} 
                      target="_blank"
                      className="w-12 h-12 rounded-2xl flex items-center justify-center glass text-white hover:scale-110 transition-transform border-white/20"
                    >
                      <Code size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "var(--accent-light)" }}>
                    {project.category}
                  </span>
                  <h3 className="text-3xl font-black transition-colors group-hover:text-accent-light" style={{ color: "var(--text-primary)" }}>
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span 
                      key={t}
                      className="px-4 py-1.5 rounded-xl text-xs font-semibold"
                      style={{ background: "rgba(255,255,255,0.05)", color: "var(--text-muted)", border: "1px solid rgba(255,255,255,0.1)" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-4 flex gap-6 md:hidden">
                    <a href={project.live} className="flex items-center gap-2 text-sm font-bold" style={{ color: "var(--accent-light)" }}>
                        <ExternalLink size={16} /> Live Demo
                    </a>
                    <a href={project.github} className="flex items-center gap-2 text-sm font-bold" style={{ color: "var(--text-secondary)" }}>
                        <Code size={16} /> Source Code
                    </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
