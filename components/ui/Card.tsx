'use client';

import React, { useRef, useState } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export type CardVariant = 'default' | 'cream' | 'glass' | 'accent';

interface CardProps extends HTMLMotionProps<"div"> {
  variant?: CardVariant;
  hoverEffect?: boolean;
  children: React.ReactNode;
  glowColor?: string; // Optional: e.g., 'rgba(0, 242, 254, 0.15)'
}

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  hoverEffect = true,
  className = '',
  children,
  glowColor,
  ...rest
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const baseClasses = 'relative rounded-2xl border transition-colors duration-500 overflow-hidden';

  // Refined for true premium agency feel (no solid flat colors)
  const variantClasses = {
    default: 'glassmorphic border-neutral-200/50 dark:border-neutral-800/50 shadow-glass',
    cream: 'bg-[#fbfbfa]/60 dark:bg-[#081110]/60 backdrop-blur-xl border-[#e2c792]/20 shadow-glass',
    glass: 'glassmorphic border-white/20 dark:border-[#00f2fe]/10 shadow-glass',
    accent: 'bg-[#0d5c56]/5 dark:bg-[#00f2fe]/5 backdrop-blur-xl border-[#0d5c56]/10 dark:border-[#00f2fe]/10 shadow-glass',
  }[variant];

  // 3D Tilt Values
  const rotateX = isHovered && hoverEffect ? (mousePosition.y / (cardRef.current?.offsetHeight || 1) - 0.5) * -10 : 0;
  const rotateY = isHovered && hoverEffect ? (mousePosition.x / (cardRef.current?.offsetWidth || 1) - 0.5) * 10 : 0;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        rotateX,
        rotateY,
        scale: isHovered && hoverEffect ? 1.02 : 1,
        y: isHovered && hoverEffect ? -4 : 0,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`${baseClasses} ${variantClasses} ${className} group`}
      style={{ perspective: 1000 }}
      {...rest}
    >
      {/* Dynamic Border Animation Layer */}
      {hoverEffect && (
        <div className="absolute inset-0 pointer-events-none rounded-2xl overflow-hidden z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div
            className="absolute inset-0 border-2 rounded-2xl border-transparent"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColor || 'rgba(255,255,255,0.1)'}, transparent 40%) border-box`,
              WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'destination-out',
              maskComposite: 'exclude',
            }}
          />
        </div>
      )}

      {/* Internal Tracking Spotlight Glow */}
      {hoverEffect && (
        <div
          className="absolute pointer-events-none z-0 transition-opacity duration-500"
          style={{
            width: 500,
            height: 500,
            top: -250,
            left: -250,
            opacity: isHovered ? 1 : 0,
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            background: `radial-gradient(circle, ${glowColor || (variant === 'glass' ? 'rgba(0, 242, 254, 0.05)' : 'rgba(255, 255, 255, 0.08)')} 0%, transparent 70%)`,
          }}
        />
      )}

      {/* Content Layer */}
      <div className="relative z-20 h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  );
};

export default Card;
