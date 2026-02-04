import { MultiColumnText } from "@/components/layout/MultiColumnText";

const benefits = [
  {
    image: "https://placehold.co/600x450/png",
    title: "全面医疗保障",
    text: "我们提供顶级的医疗、牙科和眼科保险，确保您和您的家人得到周全的照顾。"
  },
  {
    image: "https://placehold.co/600x450/png",
    title: "成长机会",
    text: "在大友元气，我们信奉内部晋升。我们提供资源和指导，帮助您发展职业生涯。"
  },
  {
    image: "https://placehold.co/600x450/png",
    title: "社区影响力",
    text: "加入一个关心社区的团队。我们积极参与当地活动和可持续发展倡议。"
  }
];

export default function CareersPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-[1200px] mx-auto px-5 mb-10 text-center">
         <h1 className="font-metropolis font-bold text-4xl mb-4 text-primary-dark">加入我们的团队</h1>
         <p className="font-poppins text-lg text-gray-600 max-w-2xl mx-auto">
           我们一直在寻找充满激情的人才，帮助我们酿造世界上最好的啤酒。
         </p>
      </div>
      <MultiColumnText columns={benefits} />
    </div>
  );
}
