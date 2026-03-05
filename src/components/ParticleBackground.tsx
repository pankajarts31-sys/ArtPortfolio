"use client";

import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width: number;
    let height: number;
    
    // Define Particle interface since we removed the class
    interface ParticleObj {
      update: () => void;
      draw: () => void;
    }
    
    let particles: ParticleObj[] = [];
    let animationFrameId: number;

    const rgbColors = [
      "22, 33, 39", // Jungle Green
      "58, 53, 52", // Jet
      "114, 75, 57", // Coffee
      "207, 157, 123", // Antique Brass
    ];
    const createParticle = () => {
      let x = Math.random() * width;
      let y = Math.random() * height;
      const size = Math.random() * 4 + 1;
      const speedX = (Math.random() - 0.5) * 0.3;
      const speedY = (Math.random() - 0.5) * 0.3;
      const color = rgbColors[Math.floor(Math.random() * rgbColors.length)];
      const alpha = Math.random() * 0.5 + 0.1;

      return {
        update: () => {
          x += speedX;
          y += speedY;

          if (x < 0) x = width;
          if (x > width) x = 0;
          if (y < 0) y = height;
          if (y > height) y = 0;
        },
        draw: () => {
          if (!ctx) return;
          ctx.beginPath();
          const gradient = ctx.createRadialGradient(
            x, y, 0, x, y, size * 2
          );
          gradient.addColorStop(0, `rgba(${color}, ${alpha})`);
          gradient.addColorStop(1, `rgba(${color}, 0)`);
          
          ctx.arc(x, y, size * 2, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
          ctx.closePath();
        }
      };
    };

    const init = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      // Calculate number of particles based on screen size (prevent mobile lag)
      const numParticles = Math.floor((width * height) / 20000);
      particles = Array.from({ length: numParticles }, () => createParticle());
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      init();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-chinese-black">
      <div className="absolute inset-0 bg-gradient-to-b from-chinese-black via-transparent to-chinese-black opacity-80 z-10" />
      <canvas ref={canvasRef} className="w-full h-full opacity-60" />
      <div className="absolute inset-x-0 top-0 h-96 bg-brass/5 blur-[120px] rounded-full mix-blend-screen" />
      <div className="absolute inset-x-0 bottom-0 h-96 bg-coffee/10 blur-[150px] rounded-full mix-blend-screen" />
    </div>
  );
}
