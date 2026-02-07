import React from 'react';
import Image from 'next/image';

interface SocialIconProps {
  /** The icon object from simple-icons or local image path */
  icon: any;
  /** The URL to link to */
  href: string;
  /** Size of the icon in pixels (default: 24) */
  size?: number | string;
  /** Color of the icon (default: uses icon's brand color) */
  color?: string;
  /** Accessibility label (default: icon.title) */
  label?: string;
  /** Additional CSS classes */
  className?: string;
  /** Whether to use local image instead of simple-icon */
  useLocalImage?: boolean;
  /** Local image source path */
  imageSrc?: string;
}

export const SocialIcon: React.FC<SocialIconProps> = ({
  icon,
  href,
  size = 24,
  color,
  label,
  className = '',
  useLocalImage = false,
  imageSrc,
}) => {
  // If using local image
  if (useLocalImage && imageSrc) {
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label={label}
        className={`inline-flex items-center justify-center transition-transform hover:scale-110 ${className}`}
      >
        <Image
          src={imageSrc}
          alt={label || 'Social icon'}
          width={typeof size === 'number' ? size : 24}
          height={typeof size === 'number' ? size : 24}
          className="object-contain"
        />
      </a>
    );
  }

  // If color is not provided, use the brand color from simple-icons
  // simple-icons provides hex without hash, so we add it
  const iconColor = color || `#${icon.hex}`;
  
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label={label || icon.title}
      className={`inline-flex items-center justify-center transition-transform hover:scale-110 ${className}`}
    >
      <svg
        role="img"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill={iconColor}
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>{label || icon.title}</title>
        <path d={icon.path} />
      </svg>
    </a>
  );
};
