"use client";
import React from 'react';
import { ArrowRight, Check, Award, Headphones, Star, AlertTriangle } from 'lucide-react';

export default function CtaBannerSection() {
  const features = [
    { icon: <Check className="w-4 h-4 text-lime-400" />, text: 'Free, with no deposit' },
    { icon: <Award className="w-4 h-4 text-lime-400" />, text: '15+ international awards' },
    { icon: <Headphones className="w-4 h-4 text-lime-400" />, text: '24/7 support in 20+ languages' },
    { icon: <Star className="w-4 h-4 text-lime-400" />, text: '4.8 on Google Play' }, // ستاره توخالی
  ];

  return (
    <section className="py-24 px-4 md:px-8 bg-[#0d1210] text-white border-t border-white/5 relative overflow-hidden text-center">
      
      {/* هاله نئونی سبز رنگ در بالای بخش */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-55 bg-lime-500/35 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto space-y-8 relative z-10 flex flex-col items-center">
        
        {/* Title & Subtitle */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white">
            Start practicing today
          </h2>
          <p className="text-sm md:text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
            Free demo, live prices, no deposit. Go live only when you're ready.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          {/* Primary Button */}
          <a 
          href="https://my.xchief.com/registration"
          target="_blank"
          rel="noopener noreferrer"

          className="bg-lime-600 hover:bg-lime-300 text-black font-bold py-4 px-8 rounded-full flex items-center justify-center gap-4 transition-all group shadow-xl shadow-lime-500/20 cursor-pointer">
            <span className="text-sm md:text-base">Start my free demo</span>
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-lime-500 group-hover:translate-x-0.5 transition-transform">
              <ArrowRight className="w-6 h-6" />
            </div>
          </a>

          {/* Secondary Button */}
          <a 
          href="https://my.xchief.com/registration"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/4 hover:bg-white/10 text-white border border-white/10 font-bold py-5 px-8 rounded-full transition-all text-sm md:text-base cursor-pointer">
            Open a live account
          </a>
        </div>

     
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          {features.map((item, index) => (
            <div 
              key={index}
              className="inline-flex items-center gap-2 border border-white/10 text-xs md:text-sm text-gray-300 px-4 py-2.5 rounded-full font-medium"
            >
              {item.icon}
              <span>{item.text}</span>
            </div>
          ))}
        </div>

       
        <div className="flex items-start gap-3 border border-white/10 rounded-2xl p-4 md:p-5 text-left text-xs text-gray-400 leading-relaxed max-w-2xl mx-auto w-full">
          <AlertTriangle className="w-4 h-4 text-yellow-500 shrink-0 mt-0.5" />
          <span>
            Demo results don't carry over to live trading. Trading leveraged products such as forex and CFDs is high risk, and you can lose all of your deposit.
          </span>
        </div>

      </div>
    </section>
  );
}