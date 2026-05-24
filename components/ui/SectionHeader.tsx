import React from 'react';

interface SectionHeaderProps {
  tagline?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  tagline,
  title,
  description,
  align = 'center',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`max-w-2xl mb-12 ${isCenter ? 'mx-auto text-center' : 'text-left'} animate-fade-in`}>
      {tagline && (
        <span className="text-xs font-semibold tracking-widest text-gold uppercase mb-3 block">
          {tagline}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-charcoal mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-sm sm:text-base text-neutral-500 leading-relaxed max-w-xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
