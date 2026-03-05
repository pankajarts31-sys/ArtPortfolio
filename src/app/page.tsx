import CustomCursor from "@/components/CustomCursor";
import ParticleBackground from "@/components/ParticleBackground";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import GallerySection from "@/sections/GallerySection";
import ContactSection from "@/sections/ContactSection";

export default function Home() {
  return (
    <main className="relative bg-chinese-black min-h-screen selection:bg-brass selection:text-chinese-black">
      {/* Global Background Effects */}
      <ParticleBackground />
      <CustomCursor />

      {/* Navigation (Optional fixed minimal header) */}
      <header className="fixed top-0 w-full z-50 mix-blend-difference p-6 flex justify-between items-center pointer-events-none">
        <div className="font-serif tracking-widest text-xl text-white pointer-events-auto">
          PANKAJ.
        </div>
        <nav className="hidden md:flex gap-8 text-xs font-medium tracking-widest uppercase text-white pointer-events-auto">
          <a href="#about" className="hover:text-brass transition-colors">About</a>
          <a href="#gallery" className="hover:text-brass transition-colors">Portfolio</a>
          <a href="#contact" className="hover:text-brass transition-colors">Contact</a>
        </nav>
      </header>

      {/* Sections assembled in order */}
      <HeroSection />
      
      {/* Decorative transition line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <AboutSection />
      
      {/* Decorative transition line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <GallerySection />
      
      {/* Decorative transition line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <ContactSection />
      
      {/* Minimal Footer */}
      <footer className="py-8 border-t border-white/5 bg-chinese-black text-center relative z-10 glass">
        <p className="text-gray-500 text-xs font-light tracking-widest uppercase">
          &copy; {new Date().getFullYear()} Pankaj. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
