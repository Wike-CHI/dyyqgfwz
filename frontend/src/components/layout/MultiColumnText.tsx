import React from 'react';

interface TextColumn {
  image?: string;
  title: string;
  text: string;
}

export function MultiColumnText({ columns }: { columns: TextColumn[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-[60px] max-w-[1200px] mx-auto px-5 my-16">
      {columns.map((col, index) => (
        <div key={index} className="flex flex-col text-left">
          {col.image && (
            <img
              src={col.image}
              alt={col.title}
              className="w-full h-auto mb-6 object-cover bg-gray-100 aspect-[4/3]"
            />
          )}
          <h3 className="font-poppins font-bold text-[1.2rem] mb-4 text-black">
            {col.title}
          </h3>
          <p className="font-poppins text-[0.9rem] leading-[1.8] text-gray-800">
            {col.text}
          </p>
        </div>
      ))}
    </div>
  );
}
