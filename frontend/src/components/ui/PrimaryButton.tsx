'use client';

import React from 'react';
import Link from 'next/link';

interface PrimaryButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'white' | 'outline-white' | 'dark';
  className?: string;
}

export function PrimaryButton({
  href,
  children,
  variant = 'white',
  className = '',
}: PrimaryButtonProps) {
  const baseStyles = "relative inline-block px-12 py-4 font-poppins font-bold text-base tracking-[0.15em] uppercase rounded-sm transition-all duration-300";

  const variantStyles = {
    white: "bg-white text-[#1a1a2e] shadow-[0_8px_30px_rgb(0,0,0,0.15)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.22)] hover:-translate-y-1 hover:scale-[1.02]",
    'outline-white': "bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1a1a2e] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1",
    dark: "bg-primary-dark text-white shadow-[0_8px_30px_rgb(52,57,77,0.3)] hover:shadow-[0_12px_40px_rgb(52,57,77,0.4)] hover:-translate-y-1 hover:bg-[#2a2e3d]",
  };

  // 光泽效果 overlay
  const shineEffect = (
    <div className="absolute inset-0 rounded-sm overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
    </div>
  );

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variantStyles[variant]} group ${className}`}
    >
      {shineEffect}
      <span className="relative z-10">{children}</span>
    </Link>
  );
}
