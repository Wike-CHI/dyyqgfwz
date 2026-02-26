import { ProductGrid } from "@/components/layout/ProductGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "商店",
  description: "浏览大友元气的精酿啤酒产品，包括飞云江小麦等特色啤酒。在线订购或到店品尝。",
  openGraph: {
    title: "商店 | 大友元气",
    description: "浏览大友元气的精酿啤酒产品，在线订购。",
  },
};

const products = [
  { id: "1", title: "飞云江小麦", price: "¥14/500ML", image: "/img/feiyunxiaomai.jpeg", link: "#" },
];

export default function MerchPage() {
  return (
    <div className="min-h-screen py-20 bg-white">
       <nav className="flex justify-center items-center p-6 mb-10 border-b">
        <div className="font-metropolis font-bold text-xl">大友元气商店</div>
      </nav>
      <ProductGrid products={products} />
    </div>
  );
}
