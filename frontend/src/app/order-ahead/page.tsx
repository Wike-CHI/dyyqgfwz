import { LocationTable } from "@/components/layout/LocationTable";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "提前点单",
  description: "提前订购大友元气精酿啤酒，避免等待。我们在浙江省瑞安市铂瑞湾提供外带服务。",
  openGraph: {
    title: "提前点单 | 大友元气",
    description: "提前订购大友元气精酿啤酒，到店自提。",
  },
};

const locations = [
  { orderType: "外带购买", location: "浙江省瑞安市铂瑞湾", link: "#" },
];

export default function OrderAheadPage() {
  return (
    <div className="min-h-screen py-20 px-5">
      <h1 className="font-metropolis font-bold text-4xl text-center mb-16 text-primary-dark">
        提前点单
      </h1>
      <LocationTable locations={locations} />
    </div>
  );
}
