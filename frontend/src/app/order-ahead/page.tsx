import { LocationTable } from "@/components/layout/LocationTable";

const locations = [
  { orderType: "外带购买", location: "Charlton", link: "#" },
  { orderType: "外带购买", location: "Tewksbury", link: "#" },
  { orderType: "外带购买", location: "Sandwich", link: "#" },
  { orderType: "外带购买", location: "Deerfield", link: "#" },
  { orderType: "现打生啤", location: "Charlton", link: "#" },
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
