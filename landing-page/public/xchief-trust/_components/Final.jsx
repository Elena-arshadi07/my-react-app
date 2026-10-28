import React from 'react';
import { ArrowRight, ShieldCheck, Award, Headphones, Star, AlertTriangle } from 'lucide-react';

export default function FinalCtaSection() {
  return (
    <section id="final-cta" className="relative py-24 px-5 sm:px-8 lg:px-12 bg-[#101216] text-white overflow-hidden border-t border-white/10">
      
      {/* پس‌زمینه نوری ملایم */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-emerald-500/10 blur-[160px] pointer-events-none rounded-full -z-10" />

      <div className="max-w-[1000px] mx-auto text-center space-y-10">
        
        {/* ================= HEADER & DESCRIPTION ================= */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]">
            Open your <span className="font-serif italic font-medium text-[#b2ff80]">xChief</span> account
          </h2>

          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
            A few minutes to apply. No xChief fees to deposit or withdraw. People to talk to whenever you need them.
          </p>
        </div>

        {/* ================= ACTION BUTTONS ================= */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://my.xchief.com/registration"
            className="flex items-center gap-3 bg-[#9bff35] hover:bg-[#b4ff72] text-black font-extrabold text-sm px-8 py-4 rounded-full shadow-[0_0_35px_rgba(155,255,53,0.25)] transition"
          >
            <span>Open my account</span>
            <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center">
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </a>

          <a
            href="#demo"
            className="px-8 py-4 rounded-full border border-white/20 text-xs font-bold text-white hover:border-[#9bff35] hover:bg-white/5 transition"
          >
            Try a free demo first
          </a>
        </div>

        {/* ================= TRUST BADGES ================= */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4 text-xs font-semibold text-gray-300">
          
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#141a21] border border-white/10 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#9bff35]" />
            <span>Licensed by MISA, license T2023379</span>
          </div>

          <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#141a21] border border-white/10 shadow-sm">
            <Award className="w-4 h-4 text-[#9bff35]" />
            <span>15+ international awards</span>
          </div>

          <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#141a21] border border-white/10 shadow-sm">
            <Headphones className="w-4 h-4 text-[#9bff35]" />
            <span>24/7 support in 20+ languages</span>
          </div>

          <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#141a21] border border-white/10 shadow-sm">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span>4.8 on Google Play</span>
          </div>

        </div>

        {/* ================= RISK WARNING NOTICE ================= */}
        <div className="max-w-3xl mx-auto pt-6">
          <div className="rounded-2xl border border-white/10 bg-[#141a21]/60 p-4 text-left flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <p className="text-[11px] text-gray-400 leading-relaxed">
              Trading leveraged products such as forex and CFDs is high risk, and you can lose all of your deposit.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}