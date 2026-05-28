import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'gold' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...rest
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] select-none cursor-pointer';

  const variantClasses = {
    primary: 'bg-primary text-white shadow-soft hover:bg-primary-hover hover:shadow-premium focus-visible:ring-primary',
    secondary: 'bg-cream text-primary border border-primary/20 hover:border-primary/40 hover:bg-neutral-100/50 shadow-sm focus-visible:ring-primary',
    outline: 'bg-transparent text-charcoal border border-neutral-200 hover:bg-neutral-50 hover:border-neutral-300 focus-visible:ring-primary',
    gold: 'bg-gold text-white hover:bg-gold-hover shadow-soft hover:shadow-premium focus-visible:ring-gold',
    ghost: 'bg-transparent text-primary hover:bg-primary-light hover:text-primary-hover focus-visible:ring-primary',
  }[variant];

  const sizeClasses = {
    sm: 'px-4 py-2 text-xs font-semibold tracking-wider uppercase',
    md: 'px-6 py-3 text-sm tracking-wide',
    lg: 'px-8 py-4 text-base tracking-wide',
  }[size];

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
