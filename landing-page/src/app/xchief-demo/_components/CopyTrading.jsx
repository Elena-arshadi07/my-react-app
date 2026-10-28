"use client";
import React from 'react';
import { Users, Layers, Check, AlertTriangle, ArrowRight } from 'lucide-react';

export default function CopyTradingSection() {
  return (
    <section id="copytrading" className="py-16 px-4 md:px-8 bg-[#0d1210] text-white">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header Area */}
        <div className="space-y-3 max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-lime-500 text-s px-3 py-1.5 rounded-full font-medium">
            <Users className="w-3.5 h-3.5" />
            <span>Copy trading and PAMM</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-white">
            Prefer to follow experienced traders? <br />
            <span className="italic font-normal text-lime-500">You stay in control.</span>
          </h2>

          {/* Description */}
          <p className="text-s md:text-sm text-gray-400 leading-relaxed">
            Copy trading and PAMM accounts let you follow strategies from seasoned traders while you decide how much to allocate and when to stop.
          </p>
        </div>

        {/* Two Main Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Card 1: Copy trading */}
          <div className="bg-[#131d17] border border-white/10 rounded-3xl p-6 md:p-6 space-y-5 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Card Title & Icon */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-lime-500/10 border border-lime-500/20 flex items-center justify-center text-lime-400 shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Copy trading</h3>
                  <p className="text-s text-gray-400">Mirror the trades of traders you choose</p>
                </div>
              </div>

              {/* Checklist */}
              <ul className="space-y-3 text-s text-gray-300">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-lime-500 shrink-0 mt-0.5" />
                  <span>Pick traders whose risk profile and methods match yours</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                  <span>Set your own risk limits and how much to allocate</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                  <span>Stop copying whenever you like</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                  <span>From $50 on Classic+, DirectFX or xPRIME, on MT4 and MT5</span>
                </li>
              </ul>
            </div>

            {/* Footnote inside card */}
            <p className="text-[14px] text-gray-400 pt-4 border-t border-white/5 leading-relaxed">
              No copy fee from xChief. The trader you follow may set a management or performance fee, and you see it before you subscribe.
            </p>
          </div>

          {/* Card 2: PAMM accounts */}
          <div className="bg-[#131d17] border border-white/10 rounded-3xl p-4 md:p-8 space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              {/* Card Title & Icon */}
              <div className="flex items-center gap-3 -translate-y-2">
                <div className="w-10 h-10 rounded-xl bg-lime-500/10 border border-lime-500/20 flex items-center justify-center text-lime-400 shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div></div>
                <h3 className="text-xl font-bold text-white -translate-y-1">PAMM accounts</h3>
                  <p className="text-s text-gray-500 translate-y-5 -translate-x-42">Invest in a fund run by a manager</p>
                </div>
              </div>

              {/* Checklist */}
              <ul className="space-y-3 text-s text-gray-300 -translate-y-9">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-lime-500 shrink-0 mt-0.5" />
                  <span>Compare funds in the ratings before you join</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                  <span>The manager trades the fund, so you don't need to trade yourself</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                  <span>Managers can take a performance fee of up to 50 percent, so read each fund's terms</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                  <span>Trade well yourself? Start your own fund on Classic+ or DirectFX from $100</span>
                </li>
              </ul>
            </div>

            {/* Footnote inside card */}
            <p className="text-[14px] -translate-y-19 translate-x-149 text-gray-500 pt-3 border-t border-white/5 leading-relaxed">
              Fund statistics show past results only. They are not a forecast.
            </p>
          </div>

        </div>

        {/* Bottom Bar: Risk Warning + CTA Button */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4">
          
          {/* Warning Card */}
          <div className="flex items-start gap-2.5 bg-white/5 border border-white/10 rounded-2xl p-4 text-[11px] text-gray-300 leading-relaxed max-w-2xl w-full md:w-auto">
            <AlertTriangle className="w-4 h-4 text-yellow-500 shrink-0 mt-0.5" />
            <span>
              Copy trading and PAMM carry the same market risk as trading yourself. You can lose money, and past performance is not a reliable indicator of future results.
            </span>
          </div>

          {/* CTA Button */}
          <button className="w-full md:w-auto bg-lime-400 hover:bg-lime-300 text-black font-bold py-3.5 px-6 rounded-full flex items-center justify-between md:justify-center gap-4 transition-all group shadow-lg shadow-lime-500/10 shrink-0 cursor-pointer">
            <span className="text-sm">Start copy trading</span>
            <div className="w-7 h-7 bg-black rounded-full flex items-center justify-center text-white group-hover:translate-x-0.5 transition-transform">
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>

        </div>
</section>
      
  );
}