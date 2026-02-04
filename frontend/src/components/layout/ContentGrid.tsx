import React from 'react';
import clsx from 'clsx';

interface ContentItem {
  id: string;
  image: string;
  title?: string;
  link?: string;
  meta?: string;
}

interface ContentGridProps {
  items: ContentItem[];
  title?: string;
}

export function ContentGrid({ items, title }: ContentGridProps) {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-5 py-16">
      {title && (
        <h2 className="font-poppins font-bold text-3xl mb-8 text-primary-dark text-center">
          {title}
        </h2>
      )}
      
      {/* 4-Column Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div 
            key={item.id} 
            className="relative group aspect-[3/4] overflow-hidden bg-gray-100"
          >
            <img 
              src={item.image} 
              alt={item.title || "画廊图片"} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Overlay with Meta */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100">
              {item.title && (
                <p className="text-white font-poppins font-bold text-lg mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </p>
              )}
              {item.meta && (
                <p className="text-white/80 font-poppins text-xs uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {item.meta}
                </p>
              )}
            </div>

            {item.link && (
              <a href={item.link} className="absolute inset-0 z-10" aria-label={item.title} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
