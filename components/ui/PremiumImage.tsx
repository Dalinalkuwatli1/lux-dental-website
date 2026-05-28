'use client';

import React, { useState } from 'react';
import {
  Smile,
  Sparkles,
  ShieldCheck,
  Activity,
  Heart,
  Award,
  Users,
  UserCheck
} from 'lucide-react';

interface PremiumImageProps {
  src: string;
  alt: string;
  className?: string;
  type?: 'service' | 'doctor';
  slug?: string;
}

export const PremiumImage: React.FC<PremiumImageProps> = ({
  src,
  alt,
  className = '',
  type = 'service',
  slug = '',
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setIsLoaded(true);
    }
  }, [src]);

  const getFallbackIcon = () => {
    if (type === 'doctor') {
      if (slug.includes('smith')) return <UserCheck className="w-7 h-7 text-primary-muted dark:text-[#e2c792]" />;
      if (slug.includes('lee')) return <ShieldCheck className="w-7 h-7 text-primary-muted dark:text-[#e2c792]" />;
      if (slug.includes('garcia')) return <Sparkles className="w-7 h-7 text-primary-muted dark:text-[#e2c792]" />;
      if (slug.includes('yousef')) return <Heart className="w-7 h-7 text-primary-muted dark:text-[#e2c792]" />;
      return <Users className="w-7 h-7 text-primary-muted dark:text-[#e2c792]" />;
    }
    switch (slug) {
      case 'cleaning': return <Smile className="w-7 h-7 text-primary dark:text-[#00f2fe]" />;
      case 'whitening': return <Sparkles className="w-7 h-7 text-primary dark:text-[#00f2fe]" />;
      case 'implants': return <ShieldCheck className="w-7 h-7 text-primary dark:text-[#00f2fe]" />;
      case 'braces': return <Activity className="w-7 h-7 text-primary dark:text-[#00f2fe]" />;
      case 'root-canal': return <Heart className="w-7 h-7 text-primary dark:text-[#00f2fe]" />;
      case 'cosmetic': return <Award className="w-7 h-7 text-primary dark:text-[#00f2fe]" />;
      default: return <Smile className="w-7 h-7 text-primary dark:text-[#00f2fe]" />;
    }
  };

  const getFallbackGradient = () => {
    if (type === 'doctor') return 'linear-gradient(135deg, rgba(16,185,129,0.08), rgba(20,184,166,0.04))';
    switch (slug) {
      case 'cleaning': return 'linear-gradient(135deg, rgba(20,184,166,0.1), rgba(240,253,250,0.5))';
      case 'whitening': return 'linear-gradient(135deg, rgba(56,189,248,0.08), rgba(204,251,241,0.3))';
      case 'implants': return 'linear-gradient(135deg, rgba(5,150,105,0.12), rgba(20,184,166,0.04))';
      case 'braces': return 'linear-gradient(135deg, rgba(20,184,166,0.1), rgba(226,199,146,0.05))';
      case 'root-canal': return 'linear-gradient(135deg, rgba(20,184,166,0.08), rgba(244,63,94,0.04))';
      case 'cosmetic': return 'linear-gradient(135deg, rgba(226,199,146,0.1), rgba(240,253,250,0.3))';
      default: return 'linear-gradient(135deg, rgba(240,253,250,0.5), rgba(255,255,255,0.2))';
    }
  };

  return (
    // Outer wrapper: purely positional, passes through className from parent
    <div
      className={className}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        backgroundColor: '#111827',
      }}
    >
      {/* ── ACTUAL IMAGE ── */}
      {!hasError && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            // Color grading to match Lumina design system
            filter: 'contrast(1.08) saturate(0.82) brightness(0.9)',
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'scale(1)' : 'scale(1.06)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        />
      )}

      {/* ── CINEMATIC OVERLAYS (shown once image loads) ── */}
      {!hasError && isLoaded && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
          }}
        >
          {/* Bottom-up charcoal vignette */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(6,14,13,0.78) 0%, transparent 55%, rgba(6,14,13,0.12) 100%)',
          }} />
          {/* Cyan/teal atmospheric tint */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'rgba(0, 196, 204, 0.07)',
            mixBlendMode: 'color',
          }} />
          {/* Gold light-leak — top-right */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom-left, rgba(226,199,146,0.16) 0%, transparent 50%)',
            mixBlendMode: 'soft-light',
          }} />
          {/* Inset cinematic shadow */}
          <div style={{
            position: 'absolute', inset: 0,
            boxShadow: 'inset 0 0 55px rgba(6,14,13,0.5)',
          }} />
        </div>
      )}

      {/* ── FALLBACK — only on error ── */}
      {hasError && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: getFallbackGradient(),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            textAlign: 'center',
          }}
        >
          {/* Glow blob */}
          <div className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full bg-primary/5 dark:bg-[#00f2fe]/5 blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

          {/* Icon circle */}
          <div className="w-16 h-16 rounded-full bg-white/90 dark:bg-white/[0.04] backdrop-blur-md flex items-center justify-center shadow-premium border border-neutral-200/30 dark:border-white/10 mb-4 relative">
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-gold dark:bg-[#e2c792] animate-pulse" />
            {getFallbackIcon()}
          </div>

          <div className="space-y-1.5 z-10">
            <span className="text-[8px] font-bold text-gold dark:text-[#e2c792] uppercase tracking-[0.25em] block">
              {type === 'service' ? 'Lumina Premium Care' : 'Board Director'}
            </span>
            <span className="text-xs font-medium text-charcoal dark:text-white/90 tracking-wide block">{alt}</span>
          </div>
        </div>
      )}

      {/* ── SKELETON — while loading ── */}
      {!hasError && !isLoaded && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, #1a2424 25%, #1f2d2d 50%, #1a2424 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite',
          }}
        />
      )}
    </div>
  );
};

export default PremiumImage;
