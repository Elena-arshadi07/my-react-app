import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function RealTradesSection() {
  return (
    <section className="py-20 px-4 md:px-8 bg-[#fbfbf9] text-black border-t border-black/5">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Title, Description & CTA */}
        <div className="lg:w-5/12 space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 bg-[#e8f2ec] text-[#2d6a4f] text-xs px-3 py-1.5 rounded-full font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>When you're ready</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#111] leading-tight">
            Ready for real trades? <br />
            <span className="italic font-normal text-[#388e3c]">Start small.</span>
          </h2>

          {/* Description */}
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
            Keep your first live trades small while you get used to real money. A Cent account has no minimum deposit and lets you trade micro sizes. Classic+ opens from $10 with no commission.
          </p>

          {/* Buttons Area */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {/* Main Button */}
            <button className="bg-lime-400 hover:bg-lime-300 text-black font-bold py-3.5 px-6 rounded-full flex items-center gap-4 transition-all group shadow-lg shadow-lime-500/10 cursor-pointer">
              <span className="text-sm">Open a live account</span>
              <div className="w-7 h-7 bg-black rounded-full flex items-center justify-center text-white group-hover:translate-x-0.5 transition-transform">
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>

            {/* Secondary Link */}
            <a href="#" className="text-xs font-bold text-[#2d6a4f] hover:text-[#388e3c] transition-colors flex items-center gap-1">
              Compare all accounts <span>→</span>
            </a>
          </div>
        </div>

        {/* Right Side: Two Comparison Cards */}
        <div className="lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          
          {/* Cent Account Card */}
          <div className="bg-[#f2f4ef] rounded-3xl p-6 md:p-8 flex flex-col justify-between space-y-8 border border-black/5 hover:shadow-md transition-all">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-[#111]">Cent</h3>
              
              <div className="space-y-4 text-xs">
                <div className="flex items-center justify-between py-2.5 border-b border-black/5">
                  <span className="text-gray-500">Minimum deposit</span>
                  <span className="font-bold text-[#111]">None</span>
                </div>
                <div className="flex items-center justify-between py-2.5 border-b border-black/5">
                  <span className="text-gray-500">Trade sizes</span>
                  <span className="font-bold text-[#111]">Micro</span>
                </div>
                <div className="flex items-center justify-between py-2.5">
                  <span className="text-gray-500">Platform</span>
                  <span className="font-bold text-[#111]">MT4</span>
                </div>
              </div>
            </div>
          </div>

          {/* Classic+ Account Card */}
          <div className="bg-[#f2f4ef] rounded-3xl p-6 md:p-8 flex flex-col justify-between space-y-8 border border-black/5 hover:shadow-md transition-all">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-[#111]">Classic+</h3>
              
              <div className="space-y-4 text-xs">
                <div className="flex items-center justify-between py-2.5 border-b border-black/5">
                  <span className="text-gray-500">Minimum deposit</span>
                  <span className="font-bold text-[#111]">$10</span>
                </div>
                <div className="flex items-center justify-between py-2.5 border-b border-black/5">
                  <span className="text-gray-500">Commission</span>
                  <span className="font-bold text-[#111]">None</span>
                </div>
                <div className="flex items-center justify-between py-2.5">
                  <span className="text-gray-500">Platforms</span>
                  <span className="font-bold text-[#111]">MT4, MT5</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}