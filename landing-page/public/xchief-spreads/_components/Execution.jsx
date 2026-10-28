'use client';

import React from 'react';
import { Zap, Server, Bot, ArrowLeftRight } from 'lucide-react';

export default function ExecutionSection() {
  const executionFeatures = [
    {
      icon: <Zap className="w-5 h-5 text-[#2d6a36]" />,
      title: 'Market execution',
      description: 'Every order is filled at the best available market price.',
    },
    {
      icon: <ArrowLeftRight className="w-5 h-5 text-[#2d6a36]" />,
      title: 'A Book STP, no dealing desk',
      description: 'Your trades pass to liquidity providers, so nobody at xChief takes the other side.',
    },
    {
      icon: <Server className="w-5 h-5 text-[#2d6a36]" />,
      title: 'Five server locations',
      description: 'Frankfurt, London, Ireland, the UAE and Singapore.',
    },
    {
      icon: <Bot className="w-5 h-5 text-[#2d6a36]" />,
      title: 'Scalping and EAs welcome',
      description: 'Run Expert Advisors or scalp the market. Your strategy, your call.',
    },
  ];

  return (
    <section id="execution" className="py-20 px-4 md:px-8 bg-[#eae5d9] text-[#111] border-t border-black/5">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="space-y-4 max-w-3xl">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 bg-[#e2edd8] border border-black/5 text-gray-800 text-xs px-3.5 py-1.5 rounded-full font-bold shadow-sm">
            <Zap className="w-4 h-4 text-[#2d6a36]" />
            <span>Execution</span>
          </div>

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1]">
            Execution built for <span className="text-[#2d6a36] italic font-serif font-normal">speed</span>
          </h2>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-gray-600 font-medium leading-relaxed">
            Orders go straight to liquidity providers with no dealing desk in between. Fills stay quick, and there is no broker on the other side of your trade.
          </p>
        </div>

        {/* ================= 4 CARDS GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {executionFeatures.map((item, index) => (
            <div 
              key={index}
              className="bg-[#f2f4ef] border border-black/5 rounded-[28px] p-6 md:p-8 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Icon Box */}
              <div className="w-11 h-11 rounded-2xl bg-[#e2edd8] border border-black/5 flex items-center justify-center shrink-0">
                {item.icon}
              </div>

              {/* Text Info */}
              <div className="space-y-2">
                <h3 className="text-lg md:text-xl font-black text-[#111] tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}