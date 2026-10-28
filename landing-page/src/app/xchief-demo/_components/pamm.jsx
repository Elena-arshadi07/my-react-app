"use client";
import React from 'react';
import { Users, ArrowRight } from 'lucide-react';

export default function CopyTradingSection() {
  return (
    <section id="copytrading" className="py-20 px-4 md:px-8 bg-[#0d1210] text-white border-t border-white/5 relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-8 relative z-10">
        
        {/* تگ بالای عنوان */}
        <div className="inline-flex items-center gap-1.5 bg-lime-500/10 text-lime-400 text-xs px-3 py-1.5 rounded-full font-semibold border border-lime-500/20">
          <Users className="w-3.5 h-3.5" />
          <span>Copy trading and PAMM</span>
        </div>

        {/* عنوان اصلی مشابه تصویر */}
        <div className="space-y-4 max-w-3xl">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Prefer to follow experienced traders? <span className="italic font-normal text-lime-400">You stay in control.</span>
          </h2>
          
          <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-2xl">
            Copy trading and PAMM accounts let you follow strategies from seasoned traders while you decide how much to allocate and when to stop.
          </p>
        </div>

        {/* دکمه یا اقدام بعدی */}
        <div className="pt-4">
          <a 
            href="#demosteps" 
            className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-xs md:text-sm py-3 px-6 rounded-full transition-all group cursor-pointer"
          >
            <span>Explore strategies</span>
            <div className="w-6 h-6 bg-lime-400 text-black rounded-full flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}