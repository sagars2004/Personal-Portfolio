"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
  vx: number;
  vy: number;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  active: boolean;
}

interface ParticleBackgroundProps {
  starCount?: number;
  starColor?: string;
  shootingStarColor?: string;
  speed?: number;
}

export default function ParticleBackground({
  starCount = 100,
  starColor = "rgba(255, 255, 255, 0.8)",
  shootingStarColor = "rgba(255, 255, 255, 0.9)",
  speed = 0.10,
}: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const shootingStarsRef = useRef<ShootingStar[]>([]);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const initStars = () => {
      starsRef.current = [];
      for (let i = 0; i < starCount; i++) {
        starsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.5 + 0.3,
          twinkleSpeed: Math.random() * 0.02 + 0.01,
          twinklePhase: Math.random() * Math.PI * 2,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
        });
      }
    };

    const initShootingStars = () => {
      shootingStarsRef.current = [];
      // Create pool of shooting stars (inactive initially)
      for (let i = 0; i < 3; i++) {
        shootingStarsRef.current.push({
          x: 0,
          y: 0,
          length: 80 + Math.random() * 60,
          speed: 8 + Math.random() * 6,
          angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3,
          opacity: 0,
          active: false,
        });
      }
    };

    const spawnShootingStar = () => {
      const inactiveStar = shootingStarsRef.current.find(s => !s.active);
      if (inactiveStar) {
        // Random starting position along top or left edge
        if (Math.random() > 0.5) {
          inactiveStar.x = Math.random() * canvas.width;
          inactiveStar.y = -20;
        } else {
          inactiveStar.x = -20;
          inactiveStar.y = Math.random() * canvas.height * 0.5;
        }
        inactiveStar.length = 80 + Math.random() * 60;
        inactiveStar.speed = 10 + Math.random() * 8;
        inactiveStar.angle = Math.PI / 4 + (Math.random() - 0.5) * 0.4;
        inactiveStar.opacity = 1;
        inactiveStar.active = true;
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const stars = starsRef.current;
      const shootingStars = shootingStarsRef.current;

      // Draw floating stars
      for (const star of stars) {
        // Twinkle effect
        const twinkle = Math.sin(star.twinklePhase) * 0.3 + 0.7;
        star.twinklePhase += star.twinkleSpeed;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = starColor.replace("0.8", String(star.opacity * twinkle));
        ctx.fill();

        // Add subtle glow for larger stars
        if (star.radius > 1) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 2, 0, Math.PI * 2);
          const gradient = ctx.createRadialGradient(
            star.x, star.y, 0,
            star.x, star.y, star.radius * 2
          );
          gradient.addColorStop(0, starColor.replace("0.8", String(star.opacity * twinkle * 0.3)));
          gradient.addColorStop(1, "transparent");
          ctx.fillStyle = gradient;
          ctx.fill();
        }

        // Update position (gentle floating)
        star.x += star.vx;
        star.y += star.vy;

        // Wrap around edges
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;
      }

      // Draw shooting stars
      for (const shootingStar of shootingStars) {
        if (!shootingStar.active) continue;

        const endX = shootingStar.x - Math.cos(shootingStar.angle) * shootingStar.length;
        const endY = shootingStar.y - Math.sin(shootingStar.angle) * shootingStar.length;

        // Create gradient for trail
        const gradient = ctx.createLinearGradient(
          shootingStar.x, shootingStar.y,
          endX, endY
        );
        gradient.addColorStop(0, shootingStarColor.replace("0.9", String(shootingStar.opacity)));
        gradient.addColorStop(0.3, shootingStarColor.replace("0.9", String(shootingStar.opacity * 0.5)));
        gradient.addColorStop(1, "transparent");

        ctx.beginPath();
        ctx.moveTo(shootingStar.x, shootingStar.y);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.lineCap = "round";
        ctx.stroke();

        // Draw bright head
        ctx.beginPath();
        ctx.arc(shootingStar.x, shootingStar.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = shootingStarColor.replace("0.9", String(shootingStar.opacity));
        ctx.fill();

        // Update position
        shootingStar.x += Math.cos(shootingStar.angle) * shootingStar.speed;
        shootingStar.y += Math.sin(shootingStar.angle) * shootingStar.speed;

        // Fade out as it travels
        shootingStar.opacity -= 0.015;

        // Deactivate if off screen or faded
        if (
          shootingStar.x > canvas.width + 100 ||
          shootingStar.y > canvas.height + 100 ||
          shootingStar.opacity <= 0
        ) {
          shootingStar.active = false;
        }
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    resizeCanvas();
    initStars();
    initShootingStars();
    draw();

    // Spawn shooting stars randomly
    const shootingStarInterval = setInterval(() => {
      if (Math.random() < 0.4) { // 40% chance every interval
        spawnShootingStar();
      }
    }, 2000); // Check every 2 seconds

    const handleResize = () => {
      resizeCanvas();
      initStars();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(shootingStarInterval);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [starCount, starColor, shootingStarColor, speed]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  );
}
