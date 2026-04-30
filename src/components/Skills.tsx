"use client";

import { motion } from "framer-motion";
import { 
  Layers, 
  Server,
  Wrench,
  Layout
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Layout,
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 85 },
      { name: "Redux / Zustand", level: 80 },
    ]
  },
  {
    title: "Backend & DevOps",
    icon: Server,
    skills: [
      { name: "Node.js / Express", level: 85 },
      { name: "PostgreSQL / MongoDB", level: 80 },
      { name: "Docker / Kubernetes", level: 70 },
      { name: "AWS / Vercel", level: 85 },
      { name: "GraphQL", level: 75 },
    ]
  },
  {
    title: "Tools & Others",
    icon: Wrench,
    skills: [
      { name: "Git / GitHub", level: 95 },
      { name: "Figma", level: 85 },
      { name: "Jest / Cypress", level: 80 },
      { name: "Agile / Scrum", level: 90 },
      { name: "UI/UX Design", level: 85 },
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const badgeContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.4,
    },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

export default function Skills() {
  return (
    <section id="skills" className="section relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
            What I bring to the table
          </p>
          <h2 className="text-4xl md:text-5xl font-black" style={{ color: "var(--text-primary)" }}>
            My <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillCategories.map((category) => (
            <motion.div 
              key={category.title}
              variants={cardVariants}
              className="p-8 rounded-3xl glass transition-shadow duration-500 hover:shadow-[0_8px_32px_rgba(108,99,255,0.15)]"
            >
              <div className="flex items-center gap-4 mb-8">
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: "rgba(108, 99, 255, 0.1)", color: "var(--accent)" }}
                >
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>
                  {category.title}
                </h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, idx) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
                        {skill.name}
                      </span>
                      <span className="text-xs font-bold" style={{ color: "var(--accent-light)" }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden">
                      <motion.div 
                        className="h-full rounded-full skill-bar-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (idx * 0.1), ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating tech stack keywords */}
        <motion.div 
          className="mt-20 flex flex-wrap justify-center gap-3"
          variants={badgeContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {["React", "Next.js", "TypeScript", "Node.js", "Tailwind", "PostgreSQL", "Docker", "AWS", "GraphQL", "Figma", "Redux", "Storybook", "Prisma"].map((tech) => (
            <motion.span 
              key={tech}
              variants={badgeVariants}
              className="px-4 py-2 rounded-full text-xs font-semibold glass hover:border-accent transition-colors cursor-default"
              style={{ color: "var(--text-muted)" }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
