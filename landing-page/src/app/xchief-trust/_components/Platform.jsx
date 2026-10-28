import React from 'react';
import { Monitor, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function PlatformsSection() {
  const markets = [
    "Forex, 32 pairs",
    "Gold and silver",
    "Oil and gas",
    "10 leading indices",
    "95 US stocks on xPRIME"
  ];

  return (
    <section id="platforms" className="relative py-20 px-5 sm:px-8 lg:px-12 bg-[#101216] text-white overflow-hidden">
      
      {/* پس‌زمینه نوری ملایم */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-emerald-500/5 blur-[140px] pointer-events-none rounded-full -z-10" />

      <div className="max-w-[1280px] mx-auto space-y-16">
        
        {/* ================= MAIN GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT SIDE: Title & Markets List (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-white/90">
              <Monitor className="w-4 h-4 text-[#9bff35]" />
              <span>Markets and platforms</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.05]">
              100+ markets on platforms you <span className="font-serif italic font-medium text-[#b2ff80]">already know</span>
            </h2>

            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              Trade forex, metals, commodities, indices and US stocks from one account, on MetaTrader 4, MetaTrader 5, in your browser or on your phone.
            </p>

            {/* Markets Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {markets.map((market, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[#9bff35] shrink-0" />
                  <span>{market}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Platform Cards Grid (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            
            {/* MetaTrader 4 */}
            <div className="rounded-[28px] border border-white/15 bg-[#141a21] p-6 shadow-xl flex flex-col justify-between hover:border-[#9bff35]/40 transition">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 overflow-hidden p-2">
                  {/* جایگزین کردن عکس لوگوی MT4 */}
                  <img 
                    src="/images/mt4-logo.png" 
                    alt="MetaTrader 4" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-black text-white">MetaTrader 4</h3>
                <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                  The classic. Windows, macOS, web, iOS and Android.
                </p>
              </div>
            </div>

            {/* MetaTrader 5 */}
            <div className="rounded-[28px] border border-white/15 bg-[#141a21] p-6 shadow-xl flex flex-col justify-between hover:border-[#9bff35]/40 transition">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 overflow-hidden p-2">
                  {/* جایگزین کردن عکس لوگوی MT5 */}
                  <img 
                    src="/images/mt5-logo.png" 
                    alt="MetaTrader 5" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-black text-white">MetaTrader 5</h3>
                <p className="text-xs text-gray-400 mt-2 leading-relaxed">More timeframes and order types, on every device.
                </p>
              </div>
            </div>

            {/* WebTerminal */}
            <div className="rounded-[28px] border border-white/15 bg-[#141a21] p-6 shadow-xl flex flex-col justify-between hover:border-[#9bff35]/40 transition">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 overflow-hidden p-2">
                  {/* جایگزین کردن عکس وب‌ترمینال */}
                  <img 
                    src="/images/webterminal-logo.png" 
                    alt="WebTerminal" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-black text-white">WebTerminal</h3>
                <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                  Trade in your browser with nothing to install.
                </p>
              </div>
            </div>

            {/* xChief app */}
            <div className="rounded-[28px] border border-white/15 bg-[#141a21] p-6 shadow-xl flex flex-col justify-between hover:border-[#9bff35]/40 transition">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 overflow-hidden p-2">
                  {/* جایگزین کردن عکس لوگوی xChief */}
                  <img 
                    src="/images/xchief-logo.png" 
                    alt="xChief app" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-black text-white">xChief app</h3>
                <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                  Your account, deposits and trading on iOS and Android.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* ================= BOTTOM BANNER (تصویر ۱۱) ================= */}
        <div className="rounded-[28px] border border-white/15 bg-[#141a21] p-8 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center lg:text-right">
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              100+ markets. One account. No xChief funding fees.
            </h3>
            <p className="text-xs sm:text-sm text-gray-400">
              Open in minutes and trade on MT4, MT5, WebTerminal or the xChief app.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <a
              href="https://my.xchief.com/registration"
              className="flex items-center gap-3 bg-[#9bff35] hover:bg-[#b4ff72] text-black font-extrabold text-sm px-6 py-4 rounded-full shadow-lg transition"
            >
              <span>Open my account</span>
              <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </a>

            <a
              href="#compare"
              className="text-xs font-bold text-white hover:text-[#9bff35] transition px-2 py-1"
            >
              Compare the accounts →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}