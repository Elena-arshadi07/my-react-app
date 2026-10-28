'use client';

import React from 'react';
import { Percent, ArrowRight } from 'lucide-react';

export default function CostsSection() {
  const costCards = [
    {
      number: '1',
      title: 'Spread',
      description: 'The gap between the buy and sell price. From 0.0 pips on xPRIME to 0.9 pips on Cent, floating with the market.',
    },
    {
      number: '2',
      title: 'Commission',
      description: 'None on Cent and Classic+. $2.5 per side per lot on DirectFX and $3 on xPRIME, on forex and metals only. Stocks and indices carry no commission.',
    },
    {
      number: '3',
      title: 'Overnight swap',
      description: 'Charged or paid on positions held overnight. Eligible clients can switch to a swap free account on MT5.',
    },
  ];

  return (
    <section id="costs" className="py-20 px-4 md:px-8 bg-[#eae5d9] text-[#111] border-t border-black/5">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="space-y-4 max-w-3xl">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 bg-[#e2edd8] border border-black/5 text-gray-800 text-xs px-3.5 py-1.5 rounded-full font-bold shadow-sm">
            <Percent className="w-4 h-4 text-[#2d6a36]" />
            <span>Costs</span>
          </div>

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1]">
            Keep more of what you <span className="text-[#2d6a36] italic font-serif font-normal">trade</span>
          </h2>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-gray-600 font-medium leading-relaxed max-w-2xl">
            No surprises. Your trading costs come down to three things, and moving money in or out costs nothing on our side.
          </p>
        </div>

        {/* ================= 3 CARDS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {costCards.map((item, index) => (
            <div 
              key={index}
              className="bg-[#f2f4ef] border border-black/5 rounded-[28px] p-6 md:p-8 flex flex-col justify-between space-y-6 shadow-sm"
            >
              {/* Number Badge */}
              <div className="w-9 h-9 rounded-xl bg-[#e2edd8] border border-black/5 flex items-center justify-center font-black text-sm text-[#2d6a36]">
                {item.number}
              </div>

              {/* Text Info */}
              <div className="space-y-3">
                <h3 className="text-xl font-black text-[#111] tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ================= BOTTOM GREEN CTA BANNER ================= */}
        <div className="bg-[#9bff35] rounded-[28px] p-6 md:p-8 border border-black/10 shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          
          {/* Left Text inside Banner */}
          <div className="space-y-1 max-w-2xl">
            <h3 className="text-xl md:text-2xl font-black text-black tracking-tight">
              $0 in xChief fees on deposits and withdrawals
            </h3>
            <p className="text-xs text-gray-800 font-medium">
              Your payment provider may charge its own fee.
            </p>
          </div>

          {/* Right CTA Button inside Banner */}
          <div className="w-full md:w-auto shrink-0">
            <a
              href="https://my.xchief.com/registration"
              className="bg-[#18221c] hover:bg-[#223028] text-white font-extrabold text-xs px-6 py-3.5 rounded-full flex items-center justify-center gap-2 shadow-md transition"
            >
              <span>Open my account</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#9bff35]" />
            </a></div>

        </div>

      </div>
    </section>
  );
}