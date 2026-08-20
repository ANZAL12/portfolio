"use client";

import { motion, Variants } from "framer-motion";
import { Mail, Phone, MessageSquare, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";
import ScrollReveal from "./animations/ScrollReveal";
import TextReveal from "./animations/TextReveal";

const leftVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const formContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.2
    } 
  },
};

const fieldVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formsubmit.co/ajax/mohammedanzel123@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `New Portfolio Message: ${formData.subject} (from ${formData.name})`,
          _template: "table",
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 6000);
      } else {
        throw new Error("Submission failed");
      }
    } catch (err) {
      console.error(err);
      // Fallback: Open mail client if external endpoint is blocked
      window.location.href = `mailto:mohammedanzel123@gmail.com?subject=${encodeURIComponent(
        formData.subject || "Portfolio Inquiry"
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      setStatus("success");
      setTimeout(() => setStatus("idle"), 6000);
    }
  };

  return (
    <section id="contact" className="section relative overflow-hidden py-24">
      {/* Background glow */}
      <div 
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ 
          background: "radial-gradient(circle, rgba(196,251,109,0.05) 0%, transparent 70%)",
          filter: "blur(60px)"
        }}
      />

      <ScrollReveal className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* Left side: Info */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={leftVariants}
          >
            <TextReveal delay={0.1}>
              <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
                Contact Me
              </p>
            </TextReveal>
            <TextReveal delay={0.2}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 sm:mb-8" style={{ color: "var(--text-primary)" }}>
                Let&apos;s build something <span className="gradient-text">extraordinary</span>
              </h2>
            </TextReveal>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-base sm:text-lg mb-8 sm:mb-12 max-w-md leading-relaxed" 
              style={{ color: "var(--text-secondary)" }}
            >
              I&apos;m currently open to new opportunities and software engineering roles. 
              Whether you have a project idea, question, or just want to connect, send a message and I&apos;ll get back to you!
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-4"
            >
              {[
                { icon: Mail, label: "Email", value: "mohammedanzel123@gmail.com", href: "mailto:mohammedanzel123@gmail.com" },
                { icon: Phone, label: "Phone", value: "+91 7306049755", href: "tel:+917306049755" },
                { icon: MessageSquare, label: "Social", value: "@a_n_z_a_l", href: "https://instagram.com/a_n_z_a_l" },
              ].map((item) => (
                <a 
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex items-center gap-4 sm:gap-6 p-3.5 sm:p-4 rounded-2xl glass transition-all duration-300 hover:scale-105 group border border-white/10 hover:border-white/20"
                >
                  <div 
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-colors group-hover:bg-accent/20 shrink-0"
                    style={{ background: "rgba(196,251,109,0.1)", color: "var(--accent)" }}
                  >
                    <item.icon size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-wider mb-0.5 sm:mb-1" style={{ color: "var(--text-muted)" }}>{item.label}</p>
                    <p className="font-semibold text-white group-hover:text-[var(--accent)] transition-colors text-sm sm:text-base truncate">{item.value}</p>
                  </div>
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side: Interactive Working Contact Form */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={formContainerVariants}
            className="p-6 sm:p-8 md:p-10 rounded-3xl glass border border-white/10 shadow-2xl relative"
          >
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <motion.div variants={fieldVariants} className="space-y-2">
                  <label className="text-sm font-bold ml-1 text-white/80">Full Name</label>
                  <input 
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text" 
                    placeholder="Mohammed Anzal"
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-[var(--accent)] focus:bg-white/[0.08] focus:outline-none transition-all text-white placeholder:text-white/30"
                  />
                </motion.div>
                <motion.div variants={fieldVariants} className="space-y-2">
                  <label className="text-sm font-bold ml-1 text-white/80">Email Address</label>
                  <input 
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email" 
                    placeholder="yourname@example.com"
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-[var(--accent)] focus:bg-white/[0.08] focus:outline-none transition-all text-white placeholder:text-white/30"
                  />
                </motion.div>
              </div>
              
              <motion.div variants={fieldVariants} className="space-y-2">
                <label className="text-sm font-bold ml-1 text-white/80">Subject</label>
                <input 
                  required
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  type="text" 
                  placeholder="Project Opportunity / Collaboration"
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-[var(--accent)] focus:bg-white/[0.08] focus:outline-none transition-all text-white placeholder:text-white/30"
                />
              </motion.div>

              <motion.div variants={fieldVariants} className="space-y-2">
                <label className="text-sm font-bold ml-1 text-white/80">Message</label>
                <textarea 
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Hello, I'd like to discuss..."
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-[var(--accent)] focus:bg-white/[0.08] focus:outline-none transition-all resize-none text-white placeholder:text-white/30"
                />
              </motion.div>

              <motion.button 
                variants={fieldVariants}
                type="submit"
                disabled={status === "sending"}
                className="w-full py-4 rounded-xl font-bold text-black flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer disabled:cursor-not-allowed shadow-lg"
                style={{ 
                  background: status === "success" ? "#22c55e" : "var(--gradient-1)",
                  boxShadow: status === "success" ? "0 0 25px rgba(34,197,94,0.4)" : "0 0 25px var(--accent-glow)"
                }}
              >
                {status === "idle" && (
                  <>
                    <Send size={18} /> Send Message
                  </>
                )}
                {status === "sending" && (
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    <span>Sending message...</span>
                  </div>
                )}
                {status === "success" && (
                  <div className="flex items-center gap-2 text-white">
                    <CheckCircle2 size={18} /> Message Sent Successfully!
                  </div>
                )}
              </motion.button>
            </form>
          </motion.div>

        </div>
      </ScrollReveal>
    </section>
  );
}
