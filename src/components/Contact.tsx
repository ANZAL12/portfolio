"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const leftVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const rightVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut", delay: 0.2 } },
};

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <section id="contact" className="section relative overflow-hidden">
      {/* Background glow */}
      <div 
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ 
          background: "radial-gradient(circle, rgba(255,107,157,0.05) 0%, transparent 70%)",
          filter: "blur(60px)"
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left side: Info */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={leftVariants}
          >
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
              Contact Me
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-8" style={{ color: "var(--text-primary)" }}>
              Let&apos;s build something <span className="gradient-text">extraordinary</span>
            </h2>
            <p className="text-lg mb-12 max-w-md" style={{ color: "var(--text-secondary)" }}>
              I&apos;m currently open to new opportunities and freelance projects. 
              Whether you have a question or just want to say hi, I&apos;ll get back to you as soon as I can.
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "hello@alexcarter.dev", href: "mailto:hello@alexcarter.dev" },
                { icon: MapPin, label: "Location", value: "San Francisco, CA", href: "#" },
                { icon: MessageSquare, label: "Social", value: "@alexcarter_dev", href: "#" },
              ].map((item) => (
                <a 
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-6 p-4 rounded-2xl glass transition-all duration-300 hover:scale-105 group"
                >
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors group-hover:bg-accent/20"
                    style={{ background: "rgba(108,99,255,0.1)", color: "var(--accent)" }}
                  >
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "var(--text-muted)" }}>{item.label}</p>
                    <p className="font-semibold" style={{ color: "var(--text-primary)" }}>{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right side: Form */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={rightVariants}
          >
            <form onSubmit={handleSubmit} className="p-8 md:p-10 rounded-3xl glass border-accent/20 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold ml-1" style={{ color: "var(--text-secondary)" }}>Full Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold ml-1" style={{ color: "var(--text-secondary)" }}>Email Address</label>
                  <input 
                    required
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold ml-1" style={{ color: "var(--text-secondary)" }}>Subject</label>
                <input 
                  required
                  type="text" 
                  placeholder="Project Inquiry"
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-accent focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold ml-1" style={{ color: "var(--text-secondary)" }}>Message</label>
                <textarea 
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-accent focus:outline-none transition-colors resize-none"
                />
              </div>

              <button 
                type="submit"
                disabled={status !== "idle"}
                className="w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                style={{ 
                  background: status === "success" ? "#22c55e" : "var(--gradient-1)",
                  boxShadow: status === "success" ? "0 0 20px rgba(34,197,94,0.3)" : "0 0 20px var(--accent-glow)"
                }}
              >
                {status === "idle" && <><Send size={18} /> Send Message</>}
                {status === "sending" && <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
                {status === "success" && "Message Sent! 🎉"}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
