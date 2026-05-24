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
  const [isLoading, setIsLoading] = useState(true);

  // Helper to map services and doctors to premium fallback icons
  const getFallbackIcon = () => {
    if (type === 'doctor') {
      if (slug.includes('smith')) return <UserCheck className="w-7 h-7 text-primary-muted dark:text-[#e2c792]" />;
      if (slug.includes('lee')) return <ShieldCheck className="w-7 h-7 text-primary-muted dark:text-[#e2c792]" />;
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

  // Curated premium HSL gradients matching our luxury theme
  const getGradientClass = () => {
    if (type === 'doctor') {
      if (slug.includes('smith')) return 'from-emerald-500/10 via-teal-500/5 to-gold/10';
      if (slug.includes('lee')) return 'from-teal-600/10 via-cyan-500/5 to-primary/10';
      return 'from-amber-500/10 via-gold/5 to-emerald-500/10';
    }

    switch (slug) {
      case 'cleaning': return 'from-teal-500/10 to-primary-light';
      case 'whitening': return 'from-sky-400/10 to-teal-100/30';
      case 'implants': return 'from-emerald-600/15 via-teal-500/5 to-cream';
      case 'braces': return 'from-teal-500/10 to-gold/5';
      case 'root-canal': return 'from-teal-600/10 to-rose-500/5';
      case 'cosmetic': return 'from-gold/10 via-cream to-primary/5';
      default: return 'from-primary-light to-cream';
    }
  };

  return (
    <div className={`relative overflow-hidden w-full h-full bg-neutral-50 flex items-center justify-center ${className}`}>
      
      {/* 1. ACTUAL IMAGE RENDERING */}
      {!hasError && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setHasError(true);
            setIsLoading(false);
          }}
          className={`w-full h-full object-cover transition-all duration-500 ${
            isLoading ? 'scale-105 blur-sm opacity-0' : 'scale-100 blur-0 opacity-100'
          }`}
        />
      )}

      {/* 2. SOPHISTICATED FALLBACK VECTOR GRAPHIC */}
      {(hasError || isLoading) && (
        <div className={`absolute inset-0 bg-gradient-to-tr ${getGradientClass()} flex flex-col items-center justify-center p-6 text-center animate-fade-in`}>
          
          {/* Circular capsule glow backing */}
          <div className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full bg-primary/5 dark:bg-[#00f2fe]/5 blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          
          {/* Main Visual Cap - Glassmorphic Circle */}
          <div className="w-16 h-16 rounded-full bg-white/90 dark:bg-white/[0.03] backdrop-blur-md flex items-center justify-center shadow-premium border border-neutral-200/30 dark:border-white/10 mb-4 transition-all duration-500 group-hover:scale-110 relative text-charcoal dark:text-white">
            {/* Subtle rotating gold particle badge */}
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-gold dark:bg-[#e2c792] animate-pulse" />
            {getFallbackIcon()}
          </div>

          {/* Luxury Label Lockups */}
          {type === 'service' ? (
            <div className="space-y-1.5 z-10">
              <span className="text-[8px] font-bold text-gold dark:text-[#e2c792] uppercase tracking-[0.25em] block">Lumina Premium Care</span>
              <span className="text-xs font-medium text-charcoal dark:text-white/90 tracking-wide block">{alt}</span>
            </div>
          ) : (
            <div className="space-y-1.5 z-10">
              <span className="text-[8px] font-bold text-gold dark:text-[#e2c792] uppercase tracking-[0.25em] block">Board Director</span>
              <span className="text-xs font-medium text-charcoal dark:text-white/90 tracking-wide block">{alt}</span>
            </div>
          )}
          
        </div>
      )}
    </div>
  );
};

export default PremiumImage;
