import { ProductGrid } from "@/components/layout/ProductGrid";

const products = [
  { id: "1", title: "I Drink Julius 连帽衫", price: "US$64.00", image: "https://placehold.co/600x600/png", link: "#" },
  { id: "2", title: "大友元气 Logo T恤", price: "US$28.00", image: "https://placehold.co/600x600/png", link: "#" },
  { id: "3", title: "Haze 玻璃杯", price: "US$12.00", image: "https://placehold.co/600x600/png", link: "#" },
  { id: "4", title: "绿色帽子", price: "US$32.00", image: "https://placehold.co/600x600/png", link: "#" },
  { id: "5", title: "咖啡马克杯", price: "US$18.00", image: "https://placehold.co/600x600/png", link: "#" },
  { id: "6", title: "托特包", price: "US$24.00", image: "https://placehold.co/600x600/png", link: "#" },
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
