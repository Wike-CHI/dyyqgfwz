import React from 'react';
import clsx from 'clsx';

interface ZigZagRowProps {
  image: string;
  title: string;
  text: string;
}

export function ZigZagSection({ rows }: { rows: ZigZagRowProps[] }) {
  return (
    <div className="flex flex-col gap-16 max-w-[1200px] mx-auto p-8">
      {rows.map((row, index) => {
        const isReversed = index % 2 !== 0;

        return (
          <div
            key={index}
            className={clsx(
              "flex flex-col md:flex-row items-center gap-8",
              isReversed ? "md:flex-row-reverse" : ""
            )}
          >
            <div className="flex-1 w-full">
              <img
                src={row.image}
                alt={row.title}
                className="w-full h-auto rounded shadow-sm bg-gray-200 aspect-video object-cover"
              />
            </div>
            <div className="flex-1 w-full">
              <h3 className="font-poppins font-bold text-2xl mb-4 text-primary-dark">
                {row.title}
              </h3>
              <p className="font-poppins text-base leading-relaxed text-gray-700">
                {row.text}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
