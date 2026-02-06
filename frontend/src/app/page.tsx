import { NavBar } from "@/components/layout/NavBar";
import { HeroSection } from "@/components/layout/HeroSection";
import { ContentGrid } from "@/components/layout/ContentGrid";
import { Footer } from "@/components/layout/Footer";
import Link from 'next/link';

const whatsNewItems = [
  { id: '1', image: '/img/fresh-hops-craft-beer.png', title: '新品发布', meta: '本周' },
  { id: '2', image: '/img/gallery-02.png', title: '近期活动', meta: '日历' },
  { id: '3', image: '/img/gallery-03.png', title: '酒厂生活', meta: '幕后花絮' },
  { id: '4', image: '/img/gallery-04.png', title: '酿造工艺', meta: '探索' },
  { id: '5', image: '/img/gallery-05.png', title: '限定特酿', meta: '新品' },
  { id: '6', image: '/img/gallery-06.png', title: '社区', meta: '活动' },
  { id: '7', image: '/img/gallery-07.png', title: '周边上新', meta: '商店' },
  { id: '8', image: '/img/gallery-08.png', title: '路边自提', meta: '点单' },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <NavBar transparent={true} />
      
      {/* Hero Section */}
      <HeroSection 
        backgroundImage="/img/ruian-scenery.png"
      >
        <h1 className="font-poppins font-bold text-[48px] md:text-[62px] text-center drop-shadow-lg leading-tight tracking-tight">
          体验<br />大友元气
        </h1>
        {/*调转到预约界面 */}
        <div className="mt-10 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <Link href="/order-ahead" className="px-10 py-4 bg-white text-primary-dark font-poppins font-bold text-sm tracking-widest uppercase rounded hover:bg-gray-100 transition-colors shadow-lg text-center">
            提前点单
          </Link>
          <Link href="/visiting" className="px-10 py-4 border-2 border-white text-white font-poppins font-bold text-sm tracking-widest uppercase rounded hover:bg-white hover:text-primary-dark transition-colors text-center">
            参观我们
          </Link>
        </div>
      </HeroSection>

      {/* Quote Section */}
      <section className="py-32 bg-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-libre-franklin text-2xl md:text-[28px] leading-relaxed text-gray-800 italic font-light">
            "美酒能将平凡时刻化为非凡。它们如同时间机器，用熟悉的味道连接现在与过去，唤起怀旧之情和对往昔岁月的向往。"
          </p>
        </div>
      </section>

      {/* What's New Grid */}
      <ContentGrid items={whatsNewItems} title="最新动态" />

      {/* Tree House in Motion */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-8">
          <h2 className="font-poppins font-bold text-3xl mb-12 text-primary-dark text-center">
            大友元气动态
          </h2>
          <div className="w-full aspect-video bg-black rounded-sm overflow-hidden shadow-2xl relative group cursor-pointer">
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                   <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                </div>
             </div>
             <div className="w-full h-full flex items-center justify-center text-white/50 font-poppins">
                <span className="text-xl tracking-widest">视频播放器</span>
             </div>
          </div>
          <p className="text-center mt-8 font-poppins text-gray-500 max-w-2xl mx-auto">
            订阅我们的YouTube频道，了解大友元气的幕后故事。
          </p>
        </div>
      </section>

      {/* Grain to Glass / Product Categories */}
      <section className="py-24 bg-white">
         <div className="max-w-[1400px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative aspect-[3/4] bg-gray-200 group overflow-hidden cursor-pointer">
               <img src="/img/fresh-hops-craft-beer.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Beer" />
               <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                  <h3 className="text-white font-poppins font-bold text-2xl mb-1">啤酒</h3>
                  <p className="text-gray-300 text-sm font-poppins">我们的看家本领。</p>
               </div>
            </div>
            <div className="relative aspect-[3/4] bg-gray-200 group overflow-hidden cursor-pointer">
               <img src="/img/gallery-02.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Events" />
               <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                  <h3 className="text-white font-poppins font-bold text-2xl mb-1">活动</h3>
                  <p className="text-gray-300 text-sm font-poppins">精彩不容错过。</p>
               </div>
            </div>
            <div className="relative aspect-[3/4] bg-gray-200 group overflow-hidden cursor-pointer">
               <img src="/img/gallery-07.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Merch" />
               <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                  <h3 className="text-white font-poppins font-bold text-2xl mb-1">周边</h3>
                  <p className="text-gray-300 text-sm font-poppins">设计生活美学。</p>
               </div>
            </div>
             <div className="relative aspect-video md:aspect-[3/4] bg-gray-200 group overflow-hidden cursor-pointer">
               <img src="/img/brewery-factory.png" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" alt="Distillery" />
               <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                  <h3 className="text-white font-poppins font-bold text-2xl mb-1">酿酒厂</h3>
                  <p className="text-gray-300 text-sm font-poppins">从谷物到杯中酒。</p>
               </div>
            </div>
         </div>
      </section>

      <Footer />
    </div>
  );
}
