"use client";

import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';

interface NavBarProps {
  transparent?: boolean;
}

export function NavBar({ transparent = false }: NavBarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isTransparent = transparent && !isScrolled;

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-8 flex justify-between items-center",
        isTransparent ? "bg-transparent text-white py-10" : "bg-white text-primary-dark shadow-md py-6"
      )}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/logo/logo.png"
          alt="大友元气"
          width={120}
          height={120}
          className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] object-contain bg-white rounded-full p-1 shadow-lg"
        />
      </Link>

      {/* Links */}
      <div className={clsx(
        "hidden md:flex space-x-10 font-poppins text-sm font-bold tracking-widest",
        isTransparent ? "text-white" : "text-primary-dark"
      )}>
        <Link href="/order-ahead" className="hover:text-accent-amber transition-colors hover:underline underline-offset-8 decoration-2">预约点单</Link>
        <Link href="/merch" className="hover:text-accent-amber transition-colors hover:underline underline-offset-8 decoration-2">商店</Link>
        <Link href="/visiting" className="hover:text-accent-amber transition-colors hover:underline underline-offset-8 decoration-2">参观</Link>
        <Link href="/careers" className="hover:text-accent-amber transition-colors hover:underline underline-offset-8 decoration-2">招聘</Link>
      </div>

      {/* Mobile Menu Icon */}
      <button className="md:hidden p-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </nav>
  );
}
