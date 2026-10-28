'use client';

import React from 'react';
import { Globe, ArrowRight } from 'lucide-react';

export default function MarketsSection() {
  const marketCards = [
    {
      category: 'FOREX',
      value: '32',
      description: 'Major, minor and exotic pairs',
    },
    {
      category: 'METALS',
      value: 'Up to 9',
      description: 'Gold and silver on every account, more on xPRIME',
    },
    {
      category: 'COMMODITIES',
      value: '3',
      description: 'Oil and gas, including WTI and Brent',
    },
    {
      category: 'INDICES',
      value: '10',
      description: 'Leading stock indices',
    },
    {
      category: 'US STOCKS',
      value: '95',
      description: 'Big US names, on xPRIME accounts',
    },
  ];

  return (
    <section id="markets" className="py-20 px-4 md:px-8 bg-[#eae5d9] text-[#111] border-t border-black/5">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-[#e2edd8] border border-black/5 text-gray-800 text-xs px-3.5 py-1.5 rounded-full font-bold shadow-sm">
              <Globe className="w-4 h-4 text-[#2d6a36]" />
              <span>Markets</span>
            </div>

            {/* Title */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1]">
              Trade 100+ markets <br />
              <span className="text-[#2d6a36] italic font-serif font-normal">from one account</span>
            </h2>
          </div>

          {/* Right Top Description */}
          <div className="max-w-xs">
            <p className="text-xs text-gray-500 leading-relaxed font-medium">
              Available instruments depend on the account type. Full lists are in the contract specifications.
            </p>
          </div>
        </div>

        {/* ================= 5 CARDS GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {marketCards.map((item, index) => (
            <div 
              key={index}
              className="bg-[#f2f4ef] border border-black/5 rounded-[24px] p-6 flex flex-col justify-between space-y-6 shadow-sm min-h-[220px]"
            >
              {/* Category Label */}
              <span className="text-[10px] font-extrabold text-gray-500 tracking-wider uppercase">
                {item.category}
              </span>

              {/* Big Value Number */}
              <div>
                <span className="text-4xl lg:text-5xl font-black text-[#111] tracking-tight block">
                  {item.value}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs text-gray-600 font-medium leading-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* ================= BOTTOM DARK CTA BANNER ================= */}
        <div className="bg-[#18221c] text-white rounded-[28px] p-8 md:p-10 border border-white/10 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          
          {/* Left Text inside Banner */}
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-black tracking-tight">
              Tight pricing, clear costs, one account
            </h3>
            <p className="text-xs md:text-sm text-gray-300 font-medium leading-relaxed">
              Spreads from 0.0 pips on xPRIME with a $3 commission per side, or no commission at all on Classic+.
            </p>
          </div>

          {/* Right CTA Actions inside Banner */}
          <div className="flex flex-col items-center md:items-end gap-3 w-full md:w-auto shrink-0">
            {/* Primary Neon Button */}
            <a
              href="https://my.xchief.com/registration"
              className="w-full md:w-auto bg-[#9bff35] hover:bg-[#8cee24] text-black font-extrabold text-sm px-6 py-3 rounded-full flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(155,255,53,0.3)] transition transform hover:-translate-y-0.5"
            >
              <span>Open my account</span>
              <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </a>

            {/* Secondary Demo Link */}
            <a
              href="https://my.xchief.com/registration"
              className="text-xs font-bold text-gray-300 hover:text-white transition inline-flex items-center gap-1.5 pt-1"
            >
              <span>Try a free demo first</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}