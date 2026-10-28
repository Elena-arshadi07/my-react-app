'use client';

import React from 'react';
import { Monitor, ArrowDown, Download } from 'lucide-react';

export default function PlatformsSection() {
  const platformCards = [
    {
      title: 'MetaTrader 4',
      description: 'The classic. Windows, macOS, web, iOS and Android.',
      badge: 'MT4',
      iconColor: 'bg-emerald-500/10 text-emerald-500',
    },
    {
      title: 'MetaTrader 5',
      description: 'More timeframes and order types, on every device.',
      badge: 'MT5',
      iconColor: 'bg-blue-500/10 text-blue-500',
    },
    {
      title: 'WebTerminal',
      description: 'Trade in your browser with nothing to install.',
      badge: 'WEB',
      iconColor: 'bg-zinc-800 text-white',
    },
    {
      title: 'xChief app',
      description: 'Your account, deposits and trading on iOS and Android.',
      badge: 'APP',
      iconColor: 'bg-black text-[#9bff35]',
    },
  ];

  return (
    <section id="platforms" className="py-20 px-4 md:px-8 bg-[#eae5d9] text-[#111] border-t border-black/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* ================= LEFT COLUMN: TITLE & INFO ================= */}
        <div className="lg:col-span-5 space-y-6">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 bg-[#e2edd8] border border-black/5 text-gray-800 text-xs px-3.5 py-1.5 rounded-full font-bold shadow-sm">
            <Monitor className="w-4 h-4 text-[#2d6a36]" />
            <span>Platforms</span>
          </div>

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1]">
            MT4 and MT5 <span className="text-[#2d6a36] italic font-serif font-normal">ready</span>[span_5](start_span)[span_5](end_span)
          </h2>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-gray-600 font-medium leading-relaxed">
            Use the platform you already know on any device, or trade straight from your browser with WebTerminal[span_6](start_span)[span_6](end_span).
          </p>

          {/* Download Link */}
          <div className="pt-2">
            <a
              href="https://my.xchief.com/platforms"
              className="inline-flex items-center gap-2 text-sm font-extrabold text-[#2d6a36] hover:underline"
            >
              <span>Download MetaTrader</span>
              <Download className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* ================= RIGHT COLUMN: 4 CARDS GRID ================= */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {platformCards.map((item, index) => (
            <div 
              key={index}
              className="bg-[#f2f4ef] border border-black/5 rounded-[28px] p-6 md:p-7 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Icon / App Badge Header */}
              <div className="w-12 h-12 rounded-2xl bg-[#e2edd8] border border-black/5 flex items-center justify-center font-black text-sm text-[#2d6a36] shadow-inner">
                {item.badge}
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