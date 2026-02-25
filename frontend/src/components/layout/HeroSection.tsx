import React from 'react';
import clsx from 'clsx';

interface HeroSectionProps {
  children?: React.ReactNode;
  backgroundImage?: string;
  videoSrc?: string;
  className?: string;
}

export function HeroSection({
  children,
  backgroundImage,
  videoSrc,
  className,
}: HeroSectionProps) {
  return (
    <div className={clsx("relative w-full h-screen overflow-hidden", className)}>
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        {videoSrc ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster={backgroundImage}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : backgroundImage ? (
          <img
            src={backgroundImage}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-900" />
        )}
        {/* Overlay Gradient - Enhanced with more depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-white pb-32">
        {children}
      </div>
    </div>
  );
}
