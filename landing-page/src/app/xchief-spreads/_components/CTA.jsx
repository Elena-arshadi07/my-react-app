'use client';

import React from 'react';
import { ArrowRight, ShieldCheck, Trophy, Headphones, Star, AlertTriangle } from 'lucide-react';

export default function CTASection() {
  return (
    <section id="cta-section" className="py-24 px-4 md:px-8 bg-[#0d130e] text-white border-t border-white/5 relative overflow-hidden">
      
      {/* Background Subtle Glowing Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#9bff35_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-10 text-center relative z-10">
        
        {/* ================= MAIN TITLE & SUBTITLE ================= */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1]">
            Choose your account <br />
            and start trading
          </h2>

          <p className="text-base md:text-lg text-gray-300 font-medium leading-relaxed">
            Spreads from 0.0 pips on xPRIME, no commission on Classic+, and no xChief fees to fund your account.
          </p>
        </div>

        {/* ================= ACTION BUTTONS ================= */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          {/* Primary Neon Button */}
          <a
            href="https://my.xchief.com/registration"
            className="w-full sm:w-auto bg-[#9bff35] hover:bg-[#8cee24] text-black font-extrabold text-sm px-8 py-4 rounded-full flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(155,255,53,0.3)] transition transform hover:-translate-y-0.5"
          >
            <span>Open my account</span>
            <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* Secondary Demo Button */}
          <a
            href="https://my.xchief.com/registration"
            className="w-full sm:w-auto bg-[#18221c] hover:bg-[#223028] border border-white/10 text-white font-extrabold text-sm px-8 py-4 rounded-full transition text-center shadow-md"
          >
            Try a free demo first
          </a>
        </div>

        {/* ================= BADGES ROW ================= */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          
          {/* Badge 1 */}
          <div className="inline-flex items-center gap-2 bg-[#18221c] border border-white/10 text-gray-300 text-xs font-semibold px-4 py-2 rounded-full shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#9bff35]" />
            <span>Licensed by MISA, license T2023379</span>
          </div>

          {/* Badge 2 */}
          <div className="inline-flex items-center gap-2 bg-[#18221c] border border-white/10 text-gray-300 text-xs font-semibold px-4 py-2 rounded-full shadow-sm">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>15+ International awards</span>
          </div>

          {/* Badge 3 */}
          <div className="inline-flex items-center gap-2 bg-[#18221c] border border-white/10 text-gray-300 text-xs font-semibold px-4 py-2 rounded-full shadow-sm">
            <Headphones className="w-4 h-4 text-[#9bff35]" />
            <span>24/7 support in 20+ languages</span>
          </div>

          {/* Badge 4 */}
          <div className="inline-flex items-center gap-2 bg-[#18221c] border border-white/10 text-gray-300 text-xs font-semibold px-4 py-2 rounded-full shadow-sm">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span>4.8 on Google Play</span>
          </div>

        </div>

        {/* ================= RISK WARNING BOX ================= */}
        <div className="max-w-3xl mx-auto pt-6">
          <div className="bg-[#18221c]/80 border border-white/10 rounded-2xl p-4 text-xs text-gray-400 flex items-start gap-3 text-left">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" /><p className="leading-relaxed">
              Trading leveraged products such as forex and CFDs is high risk, and you can lose all of your deposit.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}