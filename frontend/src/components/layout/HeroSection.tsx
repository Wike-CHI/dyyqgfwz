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
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-black/30 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-white pb-32">
        {children}
      </div>
    </div>
  );
}
