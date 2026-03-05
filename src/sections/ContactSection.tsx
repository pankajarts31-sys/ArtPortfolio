"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { RiInstagramLine, RiYoutubeLine, RiTwitterXLine, RiLinkedinFill, RiSendPlaneFill, RiMailSendLine } from "@remixicon/react";

import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call for form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form success message after a few seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const socialLinks = [
    { name: "Instagram", icon: RiInstagramLine, url: "#" },
    { name: "YouTube", icon: RiYoutubeLine, url: "#" },
    { name: "X", icon: RiTwitterXLine, url: "#" },
    { name: "LinkedIn", icon: RiLinkedinFill, url: "#" },
  ];

  return (
    <section id="contact" className="py-32 bg-chinese-black relative overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-jungle-green to-transparent opacity-50 select-none z-0" />
      <div className="absolute bottom-0 left-1/4 w-[30vw] h-[30vw] bg-brass/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-5xl">
        <ScrollReveal>
          <SectionHeading title="Get In Touch" subtitle="Commission an artwork or say hello" />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-8 mt-16 max-w-4xl mx-auto">
          {/* Left Column - Contact Info & Socials */}
          <ScrollReveal animation="slide-right" delay={0.2} className="col-span-2 flex flex-col justify-between">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-serif text-white mb-2 tracking-wide text-transparent stroke-text" style={{ WebkitTextStroke: "1px #ffffff" }}>Reach Out</h3>
                <p className="text-gray-400 font-light leading-relaxed">
                  Available for private commissions, gallery exhibitions, and artistic collaborations worldwide.
                </p>
              </div>

              <div className="space-y-4">
                <a href="mailto:contact@pankajart.com" className="flex items-center gap-3 text-gray-300 hover:text-brass transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brass/20 transition-colors">
                    <RiMailSendLine size={18} />
                  </div>
                  <span className="font-light tracking-wider text-sm">contact@pankajart.com</span>
                </a>
              </div>
            </div>

            <div className="mt-16">
              <h4 className="text-xs tracking-widest text-gray-500 uppercase mb-6 relative inline-block">
                Social Profiles
                <span className="block w-full h-px bg-white/10 mt-2" />
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-400 hover:text-brass hover:border-brass/50 hover:shadow-[0_0_15px_rgba(207,157,123,0.3)] transition-all duration-300"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column - Contact Form */}
          <ScrollReveal animation="slide-left" delay={0.4} className="col-span-3">
            <div className="glass p-8 md:p-10 rounded-3xl border-white/10 relative overflow-hidden group">
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
                  <h4 className="text-2xl font-serif text-white mb-2">Message Sent</h4>
                  <p className="text-gray-400 font-light max-w-sm">
                    Thank you for reaching out. I will get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="space-y-1 relative group/input">
                    <label htmlFor="name" className="text-xs uppercase tracking-widest text-gray-400 ml-4 font-medium block">Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full bg-chinese-black/50 border border-white/10 px-6 py-4 rounded-xl text-white font-light focus:outline-none focus:border-brass focus:ring-1 focus:ring-brass/50 transition-all peer"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="email" className="text-xs uppercase tracking-widest text-gray-400 ml-4 font-medium block">Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full bg-chinese-black/50 border border-white/10 px-6 py-4 rounded-xl text-white font-light focus:outline-none focus:border-brass focus:ring-1 focus:ring-brass/50 transition-all peer"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="message" className="text-xs uppercase tracking-widest text-gray-400 ml-4 font-medium block">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      className="w-full bg-chinese-black/50 border border-white/10 px-6 py-4 rounded-xl text-white font-light focus:outline-none focus:border-brass focus:ring-1 focus:ring-brass/50 transition-all resize-none peer"
                      placeholder="Tell me about your project..."
                    ></textarea>
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
