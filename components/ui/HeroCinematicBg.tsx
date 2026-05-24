'use client';

import React, { useEffect, useRef } from 'react';
import { useAppContext } from '../../context/AppContext';

/**
 * HeroCinematicBg — A premium, animated background layer for the hero section.
 * Features:
 *  - Animated gradient mesh orbs
 *  - Subtle grid overlay
 *  - Floating particles with staggered breathe animation
 *  - Mouse-following radial glow (cursor light)
 *  - Morphing organic blob
 */
const HeroCinematicBg: React.FC = () => {
  const { theme } = useAppContext();
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  // Mouse-following glow effect
  useEffect(() => {
    const container = containerRef.current;
    const glow = glowRef.current;
    if (!container || !glow) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      glow.style.transform = `translate(${x - 200}px, ${y - 200}px)`;
      glow.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      glow.style.opacity = '0';
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const isDark = theme === 'dark';

  // Particle configs
  const particles = [
    { size: 6, top: '15%', left: '10%', color: isDark ? 'rgba(0,242,254,0.3)' : 'rgba(13,92,86,0.15)', duration: '5s', delay: '0s' },
    { size: 4, top: '25%', left: '85%', color: isDark ? 'rgba(0,242,254,0.2)' : 'rgba(197,168,128,0.2)', duration: '7s', delay: '1s' },
    { size: 8, top: '60%', left: '5%', color: isDark ? 'rgba(0,242,254,0.15)' : 'rgba(13,92,86,0.1)', duration: '6s', delay: '2s' },
    { size: 5, top: '70%', left: '90%', color: isDark ? 'rgba(79,172,254,0.2)' : 'rgba(13,92,86,0.12)', duration: '4.5s', delay: '0.5s' },
    { size: 3, top: '40%', left: '50%', color: isDark ? 'rgba(226,199,146,0.2)' : 'rgba(197,168,128,0.15)', duration: '8s', delay: '3s' },
    { size: 7, top: '80%', left: '30%', color: isDark ? 'rgba(0,242,254,0.12)' : 'rgba(13,92,86,0.08)', duration: '9s', delay: '1.5s' },
    { size: 4, top: '10%', left: '60%', color: isDark ? 'rgba(0,242,254,0.18)' : 'rgba(13,92,86,0.1)', duration: '5.5s', delay: '2.5s' },
    { size: 6, top: '50%', left: '75%', color: isDark ? 'rgba(79,172,254,0.15)' : 'rgba(197,168,128,0.12)', duration: '7.5s', delay: '0.8s' },
  ];

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-auto"
      style={{ zIndex: 0 }}
    >
      {/* 1. Gradient Mesh Background */}
      <div className="absolute inset-0 gradient-mesh" />

      {/* 2. Subtle Grid Overlay */}
      <div className="absolute inset-0 hero-grid-overlay opacity-60" />

      {/* 3. Large Gradient Orbs */}
      <div
        className="absolute rounded-full animate-breathe"
        style={{
          width: 700,
          height: 700,
          top: '-10%',
          right: '-15%',
          background: isDark
            ? 'radial-gradient(circle, rgba(0,242,254,0.08) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(13,92,86,0.06) 0%, transparent 70%)',
          animationDuration: '6s',
        }}
      />
      <div
        className="absolute rounded-full animate-breathe"
        style={{
          width: 500,
          height: 500,
          bottom: '5%',
          left: '-10%',
          background: isDark
            ? 'radial-gradient(circle, rgba(226,199,146,0.06) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(197,168,128,0.06) 0%, transparent 70%)',
          animationDuration: '8s',
          animationDelay: '2s',
        }}
      />

      {/* 4. Morphing Organic Blob */}
      <div
        className="absolute morph-blob"
        style={{
          width: 350,
          height: 350,
          top: '20%',
          right: '25%',
          background: isDark
            ? 'linear-gradient(135deg, rgba(0,242,254,0.07) 0%, rgba(79,172,254,0.04) 100%)'
            : 'linear-gradient(135deg, rgba(13,92,86,0.05) 0%, rgba(197,168,128,0.03) 100%)',
        }}
      />

      {/* 5. Floating Particles */}
      {particles.map((p, i) => (
        <div
          key={i}
          className="hero-particle"
          style={{
            width: p.size,
            height: p.size,
            top: p.top,
            left: p.left,
            background: p.color,
            ['--duration' as string]: p.duration,
            ['--delay' as string]: p.delay,
          }}
        />
      ))}

      {/* 6. Mouse-Following Radial Glow */}
      <div
        ref={glowRef}
        className="absolute rounded-full pointer-events-none transition-opacity duration-500"
        style={{
          width: 400,
          height: 400,
          background: isDark
            ? 'radial-gradient(circle, rgba(0,242,254,0.06) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(13,92,86,0.04) 0%, transparent 70%)',
          opacity: 0,
          willChange: 'transform',
        }}
      />

      {/* 7. Bottom Fade to Page Background */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: isDark
            ? 'linear-gradient(to top, #060b0a 0%, transparent 100%)'
            : 'linear-gradient(to top, #fdfcfb 0%, transparent 100%)',
        }}
      />
    </div>
  );
};

export default HeroCinematicBg;
