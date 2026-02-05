import { ZigZagSection } from "@/components/layout/ZigZagSection";

const rows = [
  {
    image: "/img/gallery-02.png",
    title: "访问博瑞湾",
    text: "我们的博瑞湾店是大友元气酿造公司的核心。坐落城市中，它提供了一个宁静的环境来享受我们种类繁多的啤酒。我们欢迎您探索这片场地，找到属于您的完美角落。"
  },
  {
    image: "/img/gallery-03.png",
    title: "期待什么",
    text: "抵达后，我们友好的工作人员将迎接您，并引导您完成点单流程。无论您是来快速取货还是悠闲地享用生啤，我们要让您的访问难忘。"
  },
  {
    image: "/img/gallery-04.png",
    title: "参观指南",
    text: "请尊重环境和我们的邻居。我们是一个适合家庭的场所，但请确保儿童时刻有人看管。指定户外区域欢迎携带宠物狗。"
  }
];

export default function VisitingPage() {
  return (
    <div className="min-h-screen py-20">
      <h1 className="font-metropolis font-bold text-4xl text-center mb-16 text-primary-dark">
        参观我们
      </h1>
      <ZigZagSection rows={rows} />
    </div>
  );
}
