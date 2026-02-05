import React from 'react';
import Image from 'next/image';

interface Product {
  id: string;
  image: string;
  title: string;
  price: string;
  link: string;
}

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[36px] gap-y-[48px] w-full max-w-[960px] mx-auto px-5">
      {products.map((product) => (
        <div key={product.id} className="flex flex-col">
          <a href={product.link} className="block mb-4 w-full bg-gray-50">
            <Image
              src={product.image}
              alt={product.title}
              width={500}
              height={500}
              className="w-full h-auto object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </a>
          <div className="font-libre-franklin text-black">
            <p className="text-[16px] font-normal m-0 mb-2">{product.title}</p>
            <p className="text-[16px] m-0">{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
