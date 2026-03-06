import CustomCursor from "@/components/CustomCursor";
import ParticleBackground from "@/components/ParticleBackground";
import BubbleNav from "@/components/BubbleNav";
import ThemeToggle from "@/components/ThemeToggle";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import GallerySection from "@/sections/GallerySection";
import ContactSection from "@/sections/ContactSection";

export default function Home() {
  return (
    <main className="relative min-h-screen" style={{ backgroundColor: "var(--theme-bg)", color: "var(--theme-text)" }}>
      {/* Global Background Effects */}
      <ParticleBackground />
      <CustomCursor />

      {/* Apple Bubble Navigation */}
      <BubbleNav />

      {/* Theme Toggle — top right */}
      <ThemeToggle />

      {/* Sections assembled in order */}
      <HeroSection />

      {/* Decorative transition line */}
      <div className="w-full h-px" style={{ background: "linear-gradient(to right, transparent, var(--theme-border), transparent)" }} />

      <AboutSection />

      {/* Decorative transition line */}
      <div className="w-full h-px" style={{ background: "linear-gradient(to right, transparent, var(--theme-border), transparent)" }} />

      <GallerySection />

      {/* Decorative transition line */}
      <div className="w-full h-px" style={{ background: "linear-gradient(to right, transparent, var(--theme-border), transparent)" }} />

      <ContactSection />

      {/* Minimal Footer */}
      <footer className="py-8 border-t glass text-center relative z-10" style={{ borderColor: "var(--theme-border)" }}>
        <p className="text-xs font-light tracking-widest uppercase" style={{ color: "var(--theme-text-muted)" }}>
          &copy; {new Date().getFullYear()} Pankaj. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
