import React from 'react';
import { Zap, Server, Layers, ArrowRight } from 'lucide-react';

export default function ExecutionSection() {
  return (
    <section id="execution" className="relative py-20 px-5 sm:px-8 lg:px-12 bg-[#101216] text-white overflow-hidden">
      
      
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-lime-500/5 blur-[130px] pointer-events-none rounded-full -z-10" />

      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* ================= LEFT SIDE: TITLE & DESCRIPTION ================= */}
        <div className="space-y-6">
          {/* بج بالا */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-white/90">
            <Zap className="w-4 h-4 text-[#9bff35]" />
            <span>How we execute</span>
          </div>

          {/* عنوان اصلی */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]">
            No dealing desk on the <span className="font-serif italic font-medium text-[#b2ff80]">other side</span> of your trade.
          </h2>

          {/* توضیحات */}
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-xl">
            xChief runs an A Book STP model. Your orders pass straight through to liquidity providers instead of being kept in house, so there is no broker desk trading against you.
          </p>
        </div>

        {/* ================= RIGHT SIDE: FLOW DIAGRAM & FEATURES ================= */}
        <div className="space-y-8">
          
          {/* جریان نمودار STP */}
          <div className="rounded-[28px] border border-white/15 bg-[#141a21] p-6 shadow-xl">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              
              {/* کادر اول: سفارش کاربر */}
              <div className="w-full sm:w-1/3 rounded-2xl bg-[#1d2630] p-4 border border-white/10 text-center sm:text-left">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Your order</span>
                <p className="text-xs font-semibold text-white mt-1">MT4, MT5 or the xChief app</p>
              </div>

              <ArrowRight className="w-5 h-5 text-gray-500 rotate-90 sm:rotate-0 shrink-0" />

              {/* کادر دوم: پل STP */}
              <div className="w-full sm:w-1/3 rounded-2xl bg-[#1d2630] p-4 border border-[#9bff35]/40 text-center sm:text-left relative">
                <span className="absolute -top-2.5 right-4 text-[9px] font-extrabold bg-[#9bff35] text-black px-2 py-0.5 rounded-full">STP</span>
                <span className="text-[10px] font-bold text-[#9bff35] uppercase tracking-wider block">xChief STP bridge</span>
                <p className="text-xs font-semibold text-white mt-1">No dealing desk</p>
              </div>

              <ArrowRight className="w-5 h-5 text-gray-500 rotate-90 sm:rotate-0 shrink-0" />

              {/* کادر سوم: تأمین‌کنندگان نقدینگی */}
              <div className="w-full sm:w-1/3 rounded-2xl bg-[#1d2630] p-4 border border-white/10 text-center sm:text-left">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Liquidity providers</span>
                <p className="text-xs font-semibold text-white mt-1">Several price streams</p>
              </div>

            </div>
          </div>

          {/* لیست ویژگی‌ها */}
          <div className="space-y-6">
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-1">
                <Zap className="w-5 h-5 text-[#9bff35]" />
              </div>
              <div>
                <h4 className="font-bold text-base text-white">Market execution on every account</h4><p className="text-xs sm:text-sm text-gray-400 mt-1">Orders fill at the best available market price, from 0.01 lots.</p>
              </div>
            </div>

            {/* آیتم دوم */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-1">
                <Server className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h4 className="font-bold text-base text-white">Servers in five financial hubs</h4>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">Frankfurt, London, Ireland, the UAE and Singapore keep connections fast and stable.</p>
              </div>
            </div>

            {/* آیتم سوم */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-1">
                <Layers className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h4 className="font-bold text-base text-white">Aggregated pricing</h4>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">Each quote combines several liquidity streams, which helps keep spreads tight and slippage low.</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}