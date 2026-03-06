"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  RiInstagramLine,
  RiYoutubeLine,
  RiLinkedinFill,
  RiPinterestLine,
  RiWhatsappLine,
  RiSendPlaneFill,
  RiMailSendLine,
  RiPhoneLine,
} from "@remixicon/react";

import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const name    = (form.elements.namedItem("name")    as HTMLInputElement).value.trim();
    const email   = (form.elements.namedItem("email")   as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

    const subject = encodeURIComponent(`Portfolio Enquiry from ${name}`);
    const body    = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.open(
      `https://mail.google.com/mail/?view=cm&to=pankajarts31@gmail.com&su=${subject}&body=${body}`,
      "_blank"
    );

    setIsSubmitted(true);
    form.reset();
    setIsSubmitting(false);
    setTimeout(() => setIsSubmitted(false), 6000);
  };

  const socialLinks = [
    { name: "Instagram", icon: RiInstagramLine, url: "https://www.instagram.com/pankaj_arts_?igsh=c3VtZzF3MDI0M3p3" },
    { name: "YouTube",   icon: RiYoutubeLine,   url: "https://youtube.com/@PankajSahu-ck5ne?si=XuU0JpWZy0EvMIv2" },
    { name: "LinkedIn",  icon: RiLinkedinFill,  url: "https://www.linkedin.com/in/pankaj-sahu-44921826a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "Pinterest", icon: RiPinterestLine, url: "https://pin.it/2XP9unbEN" },
    { name: "WhatsApp",  icon: RiWhatsappLine,  url: "https://wa.me/918839750071" },
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden" style={{ backgroundColor: "var(--theme-bg)", color: "var(--theme-text)" }}>
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-jungle-green to-transparent opacity-50 select-none z-0" />
      <div className="absolute bottom-0 left-1/4 w-[30vw] h-[30vw] bg-brass/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-5xl">
        <ScrollReveal>
          <SectionHeading title="Get In Touch" subtitle="Commission an artwork or say hello" />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-8 mt-16 max-w-4xl mx-auto">

          {/* Left — contact info + socials */}
          <ScrollReveal animation="slide-right" delay={0.2} className="col-span-2 flex flex-col justify-between">
            <div className="space-y-5">
              <div>
                <h3 className="text-2xl font-serif mb-2 tracking-wide text-transparent stroke-text" style={{ WebkitTextStroke: "1px #857861" }}>
                  Reach Out
                </h3>
                <p className="font-light leading-relaxed" style={{ color: "var(--theme-text-muted)" }}>
                  Available for private commissions, gallery exhibitions, and artistic collaborations worldwide.
                </p>
              </div>

              <div className="space-y-3">
                {/* Email */}
                <a href="mailto:pankajarts31@gmail.com" className="flex items-center gap-3 hover:text-brass transition-colors group" style={{ color: "var(--theme-text-muted)" }}>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brass/20 transition-colors shrink-0">
                    <RiMailSendLine size={18} />
                  </div>
                  <span className="font-light tracking-wide text-sm">pankajarts31@gmail.com</span>
                </a>

                {/* Phone */}
                <a href="tel:+918839750071" className="flex items-center gap-3 hover:text-brass transition-colors group" style={{ color: "var(--theme-text-muted)" }}>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brass/20 transition-colors shrink-0">
                    <RiPhoneLine size={18} />
                  </div>
                  <span className="font-light tracking-wide text-sm">+91 88397 50071</span>
                </a>

                {/* WhatsApp */}
                <a href="https://wa.me/918839750071" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-brass transition-colors group" style={{ color: "var(--theme-text-muted)" }}>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brass/20 transition-colors shrink-0">
                    <RiWhatsappLine size={18} />
                  </div>
                  <span className="font-light tracking-wide text-sm">Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Social icons */}
            <div className="mt-10">
              <h4 className="text-xs tracking-widest uppercase mb-6 relative inline-block" style={{ color: "var(--theme-text-muted)" }}>
                Social Profiles
                <span className="block w-full h-px mt-2" style={{ backgroundColor: "var(--theme-border)" }} />
              </h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full glass flex items-center justify-center hover:text-brass hover:shadow-[0_0_15px_rgba(133,120,97,0.3)] transition-all duration-300"
                    style={{ color: "var(--theme-text-muted)", borderColor: "var(--theme-border)" }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right — contact form */}
          <ScrollReveal animation="slide-left" delay={0.4} className="col-span-3">
            <div className="glass p-8 md:p-10 rounded-3xl relative overflow-hidden group" style={{ borderColor: "var(--theme-border)" }}>
              <div className="absolute inset-0 bg-gradient-to-br from-brass/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-0" />

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full min-h-[400px] text-center relative z-10"
                >
                  <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6 text-green-400 border border-green-500/30">
                    <RiSendPlaneFill size={32} />
                  </div>
                  <h4 className="text-2xl font-serif mb-2" style={{ color: "var(--theme-text)" }}>Message Sent</h4>
                  <p className="font-light max-w-sm" style={{ color: "var(--theme-text-muted)" }}>
                    Thank you for reaching out. I will get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-xs uppercase tracking-widest ml-4 font-medium block" style={{ color: "var(--theme-text-muted)" }}>Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-6 py-4 rounded-xl font-light focus:outline-none focus:ring-1 focus:ring-brass/50 transition-all"
                      style={{ color: "var(--theme-text)", backgroundColor: "var(--theme-card)", border: "1px solid var(--theme-border)" }}
                      placeholder="Your name"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="email" className="text-xs uppercase tracking-widest ml-4 font-medium block" style={{ color: "var(--theme-text-muted)" }}>Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-6 py-4 rounded-xl font-light focus:outline-none focus:ring-1 focus:ring-brass/50 transition-all"
                      style={{ color: "var(--theme-text)", backgroundColor: "var(--theme-card)", border: "1px solid var(--theme-border)" }}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="message" className="text-xs uppercase tracking-widest ml-4 font-medium block" style={{ color: "var(--theme-text-muted)" }}>Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      className="w-full px-6 py-4 rounded-xl font-light focus:outline-none focus:ring-1 focus:ring-brass/50 transition-all resize-none"
                      style={{ color: "var(--theme-text)", backgroundColor: "var(--theme-card)", border: "1px solid var(--theme-border)" }}
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    className="w-full py-4 bg-brass text-chinese-black font-semibold uppercase tracking-widest text-sm rounded-xl overflow-hidden relative group/btn disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-in-out" />
                    <span className="relative flex items-center justify-center gap-2">
                      {isSubmitting ? "Sending..." : "Send Message"}
                      {!isSubmitting && <RiSendPlaneFill size={16} />}
                    </span>
                  </motion.button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
