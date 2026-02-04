import React from 'react';
import { twMerge } from 'tailwind-merge';

interface FluidGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function FluidGrid({ children, className, ...props }: FluidGridProps) {
  return (
    <div
      className={twMerge(
        'grid grid-cols-24 gap-4 max-w-[1400px] mx-auto px-5 w-full',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
