import React from 'react';
import Link from 'next/link';
import { siWechat, siTiktok, siX } from 'simple-icons';
import { SocialIcon } from '@/components/ui/SocialIcon';

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white pt-24 pb-16">
      <div className="max-w-[1400px] mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand */}
        <div className="flex flex-col space-y-6">
          <h3 className="font-poppins font-bold text-2xl tracking-wide">大友元气</h3>
          <p className="font-poppins text-sm text-gray-400 leading-relaxed max-w-xs">
            从麦芽到玻璃，我们致力于创建世界上最好的啤酒。
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col space-y-6">
          <h4 className="font-poppins font-bold text-sm tracking-widest uppercase text-gray-500">探索相关</h4>
          <nav className="flex flex-col space-y-3 font-poppins text-sm text-gray-300 font-medium">
            <Link href="/order-ahead" className="hover:text-white transition-colors">预约</Link>
            <Link href="/merch" className="hover:text-white transition-colors">商城</Link>
            <Link href="/visiting" className="hover:text-white transition-colors">访问我们</Link>
            <Link href="/careers" className="hover:text-white transition-colors">加入我们</Link>
          </nav>
        </div>

        {/* Locations */}
        <div className="flex flex-col space-y-6">
          <h4 className="font-poppins font-bold text-sm tracking-widest uppercase text-gray-500">店铺位置</h4>
          <ul className="flex flex-col space-y-3 font-poppins text-sm text-gray-300 font-medium">
            <li>浙江省瑞安市</li>
          </ul>
        </div>

        {/* Social */}
        <div className="flex flex-col space-y-6">
          <h4 className="font-poppins font-bold text-sm tracking-widest uppercase text-gray-500">联系我们</h4>
          <div className="flex space-x-4">
            <SocialIcon 
              icon={siWechat} 
              href="#" 
              label="WeChat"
              color="currentColor" 
              size={20}
              className="w-10 h-10 border border-gray-600 rounded-full hover:bg-white hover:text-primary-dark transition-all" 
            />
            <SocialIcon 
              icon={siTiktok} 
              href="#" 
              label="TikTok" 
              color="currentColor"
              size={20}
              className="w-10 h-10 border border-gray-600 rounded-full hover:bg-white hover:text-primary-dark transition-all" 
            />
            <SocialIcon 
              icon={siX} 
              href="#" 
              label="X" 
              color="currentColor"
              size={18}
              className="w-10 h-10 border border-gray-600 rounded-full hover:bg-white hover:text-primary-dark transition-all" 
            />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-[1400px] mx-auto px-8 mt-24 pt-8 border-t border-gray-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center font-poppins text-xs text-gray-500">
        <p>© {new Date().getFullYear()} 大友元气酿造公司。保留所有权利。</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-300">隐私政策</a>
          <a href="#" className="hover:text-gray-300">服务条款</a>
        </div>
      </div>
    </footer>
  );
}
