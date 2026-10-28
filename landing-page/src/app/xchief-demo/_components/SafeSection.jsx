"use client";
import React from 'react';
import { Monitor, Target, Sliders, LogIn, ArrowRight } from 'lucide-react';

export default function SafeMistakesSection() {
  return (
    <section id="demo" className="py-16 px-4 md:px-8 bg-[#fbfbf9] text-black">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 bg-[#e8f2ec] text-[#2d6a4f] text-xs px-3 py-1.5 rounded-full font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2d6a4f]"></span>
            The demo account
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#111] max-w-xl leading-tight">
            A safe place to make <br />
            <span className="italic font-normal text-[#388e3c]">your first mistakes</span>
          </h2>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1 */}
          <div className="bg-[#f2f4ef] rounded-2xl p-6 flex flex-col justify-between space-y-6 border border-black/5 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-[#e3eae3] flex items-center justify-center text-[#2d6a4f]">
              <Monitor className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-base text-[23px] -translate-y-14 leading-snug">
                Learn MT4 and MT5 without stress
              </h3>
              <p className="text-s text-gray-600 -translate-y-7 leading-relaxed">
                Place orders, set stop loss levels and read charts until it all feels natural.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#f2f4ef] rounded-2xl p-6 flex flex-col justify-between space-y-6 border border-black/5 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-[#e3eae3] flex items-center justify-center text-[#2d6a4f]">
              <Target className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-base text-[23px] -translate-y-14 leading-snug">
                Test ideas on live prices
              </h3>
              <p className="text-s text-gray-600 -translate-y-7 leading-relaxed">
                The demo streams real market prices, so you practice on the same moves live traders see.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#f2f4ef] rounded-2xl p-6 flex flex-col justify-between space-y-6 border border-black/5 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-[#e3eae3] flex items-center justify-center text-[#2d6a4f]">
              <Sliders className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-base text-[23px] leading-snug">
                See how margin and leverage behave
              </h3>
              <p className="text-s text-gray-600 -translate-y-2 leading-relaxed">
                Watch how position size changes your margin and your risk before real money is involved.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#f2f4ef] rounded-2xl p-6 flex flex-col justify-between space-y-6 border border-black/5 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-[#e3eae3] flex items-center justify-center text-[#2d6a4f]">
              <LogIn className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-base text-[23px] -translate-y-15 leading-snug">
                Go live when you choose
              </h3>
              <p className="text-s text-gray-600 -translate-y-9 leading-relaxed">
                Switching to a live account takes minutes. Nobody will rush you.
              </p>
            </div>
          </div>
          </div>

        {/* Bottom Dark Banner (Integrated inside the same section) */}
        <div className="bg-[#121c17] rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-white/5 shadow-xl">
          
          {/* Left Side: Texts */}
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              Practice with virtual funds and live prices
            </h3>
            <p className="text-xs md:text-sm text-gray-400">
              Free, with no deposit and no card needed. Go live only when you choose.
            </p>
          </div>

          {/* Right Side: Button and Secondary Link */}
          <div className="flex flex-col items-center md:items-end gap-3 shrink-0 w-full md:w-auto">
            {/* Main Button */}
            <a
            href="https://my.xchief.com/registration"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto bg-lime-400 hover:bg-lime-500 text-black font-bold py-3.5 px-6 rounded-full flex items-center justify-between md:justify-center gap-4 transition-all group shadow-lg shadow-lime-500/10 cursor-pointer">
              <span className="text-sm">Start my free demo</span>
              <div className="w-7 h-7 bg-black rounded-full flex items-center justify-center text-white group-hover:translate-x-0.5 transition-transform">
                <ArrowRight className="w-4 h-4" />
              </div>
            </a>

            {/* Secondary Link */}
            <a href="#demo" className="text-s -translate-x-2 font-semibold text-lime-500 hover:text-lime-300  transition-colors flex items-center justify-center gap-1 pt-0.5">
              See how the demo works <span className="text-sm">→</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}