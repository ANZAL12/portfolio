"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Coffee, Zap } from "lucide-react";

const stats = [
  { value: "5+",  label: "Years Experience" },
  { value: "60+", label: "Projects Shipped" },
  { value: "30+", label: "Happy Clients" },
  { value: "12k", label: "GitHub Stars" },
];

const facts = [
  { Icon: MapPin,    text: "Based in San Francisco, CA" },
  { Icon: Calendar,  text: "Available from June 2025" },
  { Icon: Coffee,    text: "Fuelled by espresso & curiosity" },
  { Icon: Zap,       text: "Obsessed with performance" },
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

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const leftVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const rightVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut", delay: 0.2 } },
};

export default function About() {
  return (
    <section id="about" className="section relative">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(108,99,255,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
            Get to know me
          </p>
          <h2 className="text-4xl md:text-5xl font-black" style={{ color: "var(--text-primary)" }}>
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — avatar & facts */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={leftVariants}
          >
            {/* Avatar placeholder */}
            <div className="relative w-fit mx-auto lg:mx-0 mb-10">
              <div
                className="w-64 h-64 rounded-3xl overflow-hidden animate-float"
                style={{
                  background: "linear-gradient(135deg, #6c63ff 0%, #ff6b9d 100%)",
                  padding: "3px",
                }}
              >
                <div
                  className="w-full h-full rounded-3xl flex items-center justify-center"
                  style={{ background: "var(--bg-card)" }}
                >
                  <span className="text-8xl">👨‍💻</span>
                </div>
              </div>
              {/* Online badge */}
              <span
                className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{ background: "rgba(34,197,94,0.15)", border: "1px solid rgba(34,197,94,0.3)", color: "#4ade80" }}
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Open to work
              </span>
            </div>

            {/* Facts */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {facts.map(({ Icon, text }) => (
                <motion.div
                  key={text}
                  variants={itemVariants}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl glass transition-all duration-300 hover:scale-105"
                >
                  <Icon size={16} style={{ color: "var(--accent)" }} />
                  <span className="text-sm" style={{ color: "var(--text-secondary)" }}>{text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — bio & stats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={rightVariants}
          >
            <h3 className="text-2xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
              I build things people <span className="gradient-text">love to use</span>
            </h3>
            <div className="space-y-4 mb-10" style={{ color: "var(--text-secondary)" }}>
              <p>
                I&apos;m a full-stack developer with 5+ years of experience building scalable web apps
                and pixel-perfect UIs. My sweet spot is the intersection of engineering and design.
              </p>
              <p>
                I&apos;ve worked with startups, scale-ups, and agencies — shipping everything from
                real-time dashboards to consumer-facing apps used by millions.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me contributing to open source, writing
                blog posts about web performance, or hiking trails around the Bay Area.
              </p>
            </div>

            {/* Stats grid */}
            <motion.div 
              className="grid grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {stats.map(({ value, label }) => (
                <motion.div
                  key={label}
                  variants={itemVariants}
                  className="p-5 rounded-2xl glass text-center transition-all duration-300 hover:scale-105"
                >
                  <div className="text-3xl font-black mb-1 gradient-text">
                    {value}
                  </div>
                  <div className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>
                    {label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
