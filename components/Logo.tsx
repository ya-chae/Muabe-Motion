import React from 'react';

interface LogoProps {
  variant?: 'horizontal' | 'vertical' | 'icon';
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'custom';
}

const Logo: React.FC<LogoProps> = ({ variant = 'horizontal', className = '', size = 'md' }) => {
  const iconClass = size === 'custom' ? 'h-[40px]' : {
    xs: 'h-6',
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-16',
    xl: 'h-24',
  }[size as string] || 'h-10';

  const Icon = () => (
    <svg viewBox="0 0 100 100" className="h-full w-auto overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 10 C 25 10, 10 25, 10 50 C 10 75, 25 90, 45 90" stroke="currentColor" strokeWidth="8" strokeLinecap="round" className="text-text-1" />
      <path d="M50 10 C 75 10, 90 25, 90 50 C 90 75, 75 90, 55 90" stroke="currentColor" strokeWidth="8" strokeLinecap="round" className="text-text-1" />
      <circle cx="50" cy="50" r="22" stroke="currentColor" strokeWidth="7" className="text-text-1" />
      <circle cx="50" cy="50" r="10" fill="#FF3B4D" />
      <circle cx="50" cy="10" r="4" fill="currentColor" className="text-text-1" />
      <circle cx="45" cy="90" r="4" fill="currentColor" className="text-text-1" />
      <circle cx="55" cy="90" r="4" fill="currentColor" className="text-text-1" />
    </svg>
  );

  if (variant === 'icon') {
    return (
      <div className={`${iconClass} ${className}`}>
        <Icon />
      </div>
    );
  }

  const textClass = size === 'custom' 
    ? 'text-[24px] font-black tracking-tighter' 
    : `font-black tracking-tighter text-text-1 lowercase leading-none whitespace-nowrap transition-all ${
        size === 'xs' ? 'text-lg' :
        size === 'sm' ? 'text-xl' : 
        size === 'md' ? 'text-2xl' : 
        size === 'lg' ? 'text-4xl' : 'text-6xl'
      }`;

  const Text = () => (
    <span className={`${textClass} text-text-1 lowercase inline-block`}>
      muabe<span className="text-text-1">motion</span>
    </span>
  );

  if (variant === 'vertical') {
    return (
      <div className={`flex flex-col items-center gap-4 ${className}`}>
        <div className={iconClass}>
          <Icon />
        </div>
        <Text />
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className={iconClass}>
        <Icon />
      </div>
      <Text />
    </div>
  );
};

export default Logo;