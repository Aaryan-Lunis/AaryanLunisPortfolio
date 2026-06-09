import { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseRadius: number;
  radius: number;
  alpha: number;
  color: string;
}

interface AmbientCanvasBgProps {
  activeProjectId?: string;
}

export default function AmbientCanvasBg({ activeProjectId = "alphacross" }: AmbientCanvasBgProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, isMoving: false });
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const updateTheme = () => {
      const isDark = !document.documentElement.classList.contains("light") && 
                     (localStorage.getItem("portfolio-theme") === "dark" || !localStorage.getItem("portfolio-theme"));
      setIsDarkMode(isDark);
    };

    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
      mouseRef.current.isMoving = true;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Particles count adapted to width
    const particlesCount = Math.min(45, Math.floor((width * height) / 38000));
    const particles: Particle[] = [];

    const getColors = () => {
      if (isDarkMode) {
        switch (activeProjectId) {
          case "alphacross":
            return {
              particle: "rgba(220, 180, 120, 0.14)", // warm amber analytics
              glow: "rgba(200, 150, 100, 0.038)",
              accent: "rgba(220, 180, 120, 0.05)"
            };
          case "aegis":
            return {
              particle: "rgba(110, 180, 190, 0.16)", // cool cybernetic teal
              glow: "rgba(80, 160, 180, 0.045)",
              accent: "rgba(100, 180, 190, 0.08)"
            };
          case "habit-mood-tracker":
            return {
              particle: "rgba(230, 150, 170, 0.15)", // gentle wellness rose
              glow: "rgba(220, 130, 150, 0.04)",
              accent: "rgba(230, 150, 170, 0.06)"
            };
          default:
            return {
              particle: "rgba(160, 160, 180, 0.14)", // cinematic charcoal/silver
              glow: "rgba(140, 140, 160, 0.035)",
              accent: "rgba(160, 160, 180, 0.04)"
            };
        }
      } else {
        // Light theme variants
        switch (activeProjectId) {
          case "alphacross":
            return {
              particle: "rgba(160, 120, 60, 0.08)",
              glow: "rgba(180, 140, 90, 0.18)",
              accent: "rgba(160, 120, 60, 0.03)"
            };
          case "aegis":
            return {
              particle: "rgba(50, 110, 130, 0.09)",
              glow: "rgba(60, 130, 150, 0.18)",
              accent: "rgba(50, 110, 130, 0.04)"
            };
          case "habit-mood-tracker":
            return {
              particle: "rgba(170, 90, 110, 0.07)",
              glow: "rgba(190, 110, 130, 0.18)",
              accent: "rgba(170, 90, 110, 0.03)"
            };
          default:
            return {
              particle: "rgba(100, 100, 120, 0.08)",
              glow: "rgba(120, 120, 145, 0.16)",
              accent: "rgba(100, 100, 120, 0.03)"
            };
        }
      }
    };

    let themeColors = getColors();

    // Spawn initial particles
    for (let i = 0; i < particlesCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        baseRadius: Math.random() * 1.6 + 0.8,
        radius: 0,
        alpha: Math.random() * 0.45 + 0.15,
        color: ""
      });
    }

    mouseRef.current.x = width / 2;
    mouseRef.current.y = height / 2;
    mouseRef.current.targetX = width / 2;
    mouseRef.current.targetY = height / 2;

    let time = 0;

    const render = () => {
      time += 0.005;
      ctx.clearRect(0, 0, width, height);
      themeColors = getColors();

      const mouse = mouseRef.current;
      // Ambient mouse tracking lag interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      // Draw custom background structural alignments depending on the active project
      if (activeProjectId === "alphacross") {
        // 1. Draw thin mathematical background grids for AlphaCross
        ctx.strokeStyle = isDarkMode ? "rgba(255, 255, 255, 0.015)" : "rgba(0, 0, 0, 0.012)";
        ctx.lineWidth = 1;
        const gridSize = 80;
        ctx.beginPath();
        for (let x = 0; x < width; x += gridSize) {
          ctx.moveTo(x, 0);
          ctx.lineTo(x, height);
        }
        for (let y = 0; y < height; y += gridSize) {
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
        }
        ctx.stroke();
      }

      // Draw warm ambient backlighting glow
      const glowRadius = Math.max(420, width * 0.32);
      const gradient = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        glowRadius
      );

      gradient.addColorStop(0, themeColors.glow);
      gradient.addColorStop(0.5, isDarkMode ? "rgba(0,0,0,0)" : "rgba(248, 246, 242, 0)");
      gradient.addColorStop(1, isDarkMode ? "rgba(5,5,5,0)" : "rgba(248, 246, 242, 0)");

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, glowRadius, 0, Math.PI * 2);
      ctx.fill();

      // Project-specific particle rendering loop
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Specific motion vectors
        if (activeProjectId === "habit-mood-tracker") {
          // Wellness: slow calm organic wavy drifting representing breathing
          p.x += p.vx * 0.45 + Math.sin(time + i) * 0.06;
          p.y += p.vy * 0.45 + Math.cos(time + i) * 0.06;
        } else if (activeProjectId === "alphacross") {
          // Market math: crisp horizontal flowing charts trend direction
          p.x += p.vx * 1.3 + 0.15; // horizontal bias
          p.y += p.vy * 0.7;
        } else if (activeProjectId === "aegis") {
          // Network node mesh: slow magnetic attraction to neighboring particles
          p.x += p.vx * 0.8;
          p.y += p.vy * 0.8;
        } else {
          // Cinematic: vertical cinematic rising particles
          p.x += p.vx * 0.8;
          p.y += p.vy * 1.1 - 0.12; // slow rising effect
        }

        // Loop boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Mouse magnetic alignment
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 220;

        if (dist < maxDist) {
          const force = (maxDist - dist) / maxDist;
          if (activeProjectId === "aegis") {
            // Aegis: draw dynamic connection lines to mouse
            ctx.strokeStyle = isDarkMode ? "rgba(110, 180, 190, 0.05)" : "rgba(50, 110, 130, 0.04)";
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
            p.x += (dx / dist) * force * 0.15; // subtle suction
            p.y += (dy / dist) * force * 0.15;
          } else {
            // standard elegant evasion
            p.x -= (dx / dist) * force * 0.3;
            p.y -= (dy / dist) * force * 0.3;
          }
          p.radius = p.baseRadius * (1 + force * 0.8);
        } else {
          p.radius += (p.baseRadius - p.radius) * 0.05;
        }

        // Inter-particle line drawing for Aegis (Mesh Network Signature Interaction)
        if (activeProjectId === "aegis") {
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const pDx = p.x - p2.x;
            const pDy = p.y - p2.y;
            const pDist = Math.sqrt(pDx * pDx + pDy * pDy);
            const lineLimit = 110;

            if (pDist < lineLimit) {
              const alpha = (1 - pDist / lineLimit) * 0.14;
              ctx.strokeStyle = isDarkMode 
                ? `rgba(110, 180, 190, ${alpha})`
                : `rgba(50, 110, 130, ${alpha})`;
              ctx.lineWidth = 0.85;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }

        // Render point
        ctx.fillStyle = themeColors.particle;
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1.0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDarkMode, activeProjectId]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.9 }}
    />
  );
}
