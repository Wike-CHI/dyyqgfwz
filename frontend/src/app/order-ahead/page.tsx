import { LocationTable } from "@/components/layout/LocationTable";

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
