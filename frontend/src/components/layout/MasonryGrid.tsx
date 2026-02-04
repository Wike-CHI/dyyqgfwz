import React from 'react';
import clsx from 'clsx';

interface MasonryItem {
  id: string;
  image: string;
  title?: string;
  aspectRatio?: 'square' | 'portrait' | 'landscape';
  link?: string;
}

interface MasonryGridProps {
  items: MasonryItem[];
  title?: string;
}

export function MasonryGrid({ items, title }: MasonryGridProps) {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-5 py-16">
      {title && (
        <h2 className="font-metropolis font-bold text-3xl mb-8 text-primary-dark text-center">
          {title}
        </h2>
      )}
      
      {/* CSS Grid Masonry Simulation */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <div 
            key={item.id} 
            className={clsx(
              "relative group overflow-hidden bg-gray-100",
              // Manual span logic to create visual variety
              index % 5 === 0 ? "md:row-span-2" : "",
              index % 7 === 0 ? "lg:col-span-2" : ""
            )}
          >
            <img 
              src={item.image} 
              alt={item.title || "Gallery Image"} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {item.title && (
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <p className="text-white font-poppins text-center font-medium">{item.title}</p>
              </div>
            )}
            {item.link && (
              <a href={item.link} className="absolute inset-0 z-10" aria-label={item.title} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
