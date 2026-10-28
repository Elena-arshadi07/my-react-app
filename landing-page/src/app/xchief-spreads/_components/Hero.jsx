'use client';

import React from 'react';
import Header from './Header'; // مسیر فایل هدر خود را بر اساس پوشه‌بندی تنظیم کنید
import { 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  Trophy, 
  Smartphone, 
  AlertTriangle,
  Percent,
  Wallet,
  TrendingUp,
  Globe,
  DollarSign,
  Layers,
  Users
} from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-[#0d130e] text-white font-sans selection:bg-[#9bff35] selection:text-black">
      
      {/* استفاده از هدر ثابت */}
      <Header />

      {/* ================= HERO CONTENT SECTION ================= */}
      <section className="pt-28 pb-12 px-4 md:px-8 max-w-7xl mx-auto relative overflow-hidden">
        
        {/* Background Subtle Glowing Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#9bff35_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
          
          {/* LEFT COLUMN: Main Text & CTA */}
          <div className="lg:col-span-7 space-y-6 pt-4">
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-1.5 bg-[#182a1a] border border-[#9bff35]/30 text-[#9bff35] text-xs font-bold px-3 py-1 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#9bff35] animate-pulse"></span>
                From 0.0 pips on xPRIME
              </div>
              <div className="inline-flex items-center gap-1.5 bg-[#18221c] border border-white/10 text-gray-300 text-xs font-semibold px-3 py-1 rounded-full">
                <Percent className="w-3 h-3 text-[#9bff35]" />
                0% commission on stocks and indices
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05]">
              Spreads <br />
              <span className="text-[#9bff35] italic font-serif font-normal">from 0.0 pips.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl font-medium text-gray-300 max-w-xl">
              Raw pricing on xPRIME, zero commission on Classic+ and no xChief funding fees.
            </p>

            {/* Small note */}
            <p className="text-xs text-gray-400 max-w-lg leading-relaxed flex items-start gap-1.5">
              <span className="text-[#9bff35] font-bold">ⓘ</span>
              <span>0.0 pips on xPRIME, plus $3 per side per lot on forex and metals. Zero commission on stocks and indices; spreads and swaps apply.</span>
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://my.xchief.com/registration"
                className="bg-[#9bff35] hover:bg-[#8cee24] text-black font-extrabold text-sm px-7 py-3.5 rounded-full flex items-center gap-3 shadow-[0_0_20px_rgba(155,255,53,0.3)] transition transform hover:-translate-y-0.5"
              >
                <span>Open my account</span>
                <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </a>

              <a
                href="#accounts"
                className="bg-[#18221c] hover:bg-[#223028] border border-white/10 text-white font-extrabold text-sm px-6 py-3.5 rounded-full transition"
              >
                Compare the accounts
              </a>
            </div>

            {/* Checkmark Bullets */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-gray-300 pt-2">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#9bff35]" />
                Opens in minutes
              </span>
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-[#9bff35]" />
                Commission free on Classic+
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#9bff35]" />
                No xChief funding fees
              </span>
            </div>

          </div>

          {/* RIGHT COLUMN: Account Spreads Comparison Card */}
          <div className="lg:col-span-5 relative pt-4">
            
            {/* Top Floating Badge on Card */}
            <div className="absolute -top-1 right-2 z-20 bg-[#9bff35] text-black font-extrabold text-xs px-4 py-2 rounded-2xl flex items-center gap-2 shadow-lg">
              <Percent className="w-4 h-4 bg-black text-[#9bff35] rounded-full p-0.5" />
              <span>0% commission on stocks and indices</span>
            </div>

            {/* Main Dark Card Container */}
            <div className="bg-[#131b15] border border-white/10 rounded-[32px] p-6 space-y-5 relative shadow-2xl overflow-hidden mt-4">
              
              <div className="flex items-center justify-between pb-2 border-b border-white/5">
                <h3 className="font-extrabold text-base text-white">Spreads from, by account</h3>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">MINIMUM SPREAD</span>
              </div>

              {/* Item 1: Cent */}
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-white">Cent</h4>
                    <span className="text-[11px] text-gray-400">No commission</span>
                  </div>
                  <span className="text-xl font-black text-white">0.9</span>
                </div>
                <div className="w-full h-1.5 bg-[#1d2920] rounded-full overflow-hidden relative">
                  <div className="w-[85%] h-full bg-gray-400 rounded-full" />
                </div>
              </div>

              {/* Item 2: Classic+ */}
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-white">Classic+</h4>
                    <span className="text-[11px] text-gray-400">No commission</span>
                  </div>
                  <span className="text-xl font-black text-white">0.6</span>
                </div>
                <div className="w-full h-1.5 bg-[#1d2920] rounded-full overflow-hidden relative">
                  <div className="w-[60%] h-full bg-gray-400 rounded-full" />
                </div>
              </div>

              {/* Item 3: DirectFX */}
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-white">DirectFX</h4>
                    <span className="text-[11px] text-gray-400">$2.5 per side</span>
                  </div>
                  <span className="text-xl font-black text-white">0.3</span>
                </div>
                <div className="w-full h-1.5 bg-[#1d2920] rounded-full overflow-hidden relative">
                  <div className="w-[30%] h-full bg-gray-400 rounded-full" />
                </div>
              </div>

              {/* Item 4: xPRIME (Highlight Card) */}
              <div className="bg-[#1b2b1d] border border-[#9bff35]/30 rounded-2xl p-4 space-y-2 relative">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-extrabold text-base text-[#9bff35]">xPRIME</h4>
                    <span className="text-xs text-gray-300 font-medium">$3 per side</span>
                  </div>
                  <span className="text-3xl font-black text-[#9bff35]">0.0</span>
                </div>
                <div className="w-full h-2 bg-[#121e14] rounded-full relative overflow-hidden"><div className="w-[8%] h-full bg-[#9bff35] rounded-full" />
                </div>
              </div>

              {/* Bottom text under card */}
              <p className="text-[11px] text-gray-400 pt-1">
                Pips. Spreads float with the market and can widen around news or in thin liquidity.
              </p>

              {/* White Pill Badge at bottom right of card */}
              <div className="absolute -bottom-2 right-4 bg-white text-black font-bold text-xs px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                <Wallet className="w-3.5 h-3.5 text-gray-700" />
                <span>$0 xChief funding fees</span>
              </div>

            </div>

          </div>

        </div>

        {/* ================= SOCIAL PROOF & RISK WARNING ================= */}
        <div className="mt-10 space-y-4 max-w-4xl">
          
          <div className="text-xs text-gray-400 space-y-1">
            <p className="font-medium text-gray-300">You must be 18 or older.</p>
            <div className="flex flex-wrap items-center gap-6 pt-1">
              <span className="flex items-center gap-1 font-bold text-white">
                <span className="text-amber-400">★★★★★</span> 4.8 <span className="text-gray-400 font-normal">Google Play</span>
              </span>
              <span className="flex items-center gap-1 font-bold text-white">
                4.7 <span className="text-gray-400 font-normal">App Store</span>
              </span>
              <span className="flex items-center gap-1 font-bold text-white">
                <Users className="w-3.5 h-3.5 text-[#9bff35]" /> 1.2M+ <span className="text-gray-400 font-normal">users</span>
              </span>
            </div>
          </div>

          {/* Risk Warning Box */}
          <div className="bg-[#18221c]/60 border border-white/10 rounded-2xl p-3.5 text-xs text-gray-300 flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              Trading leveraged products such as forex and CFDs is high risk, and you can lose all of your deposit. Only trade with money you can afford to lose.
            </p>
          </div>

        </div>

        {/* ================= 4 FEATURES BAR ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          
          <div className="bg-[#18221c] border border-white/10 rounded-2xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1e2e21] border border-[#9bff35]/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#9bff35]" />
            </div>
            <div>
              <h4 className="font-extrabold text-sm text-white">Licensed group entities</h4>
              <p className="text-xs text-gray-400">MISA, FSCA and AFSA</p>
            </div>
          </div>

          <div className="bg-[#18221c] border border-white/10 rounded-2xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1e2e21] border border-[#9bff35]/20 flex items-center justify-center shrink-0">
              <Trophy className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h4 className="font-extrabold text-sm text-white">15+ International awards</h4>
              <p className="text-xs text-gray-400">From 2024 to 2026</p>
            </div>
          </div>

          <div className="bg-[#18221c] border border-white/10 rounded-2xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1e2e21] border border-[#9bff35]/20 flex items-center justify-center shrink-0">
              <Smartphone className="w-5 h-5 text-[#9bff35]" />
            </div>
            <div>
              <h4 className="font-extrabold text-sm text-white">MetaTrader 4 and 5</h4>
              <p className="text-xs text-gray-400">Desktop, web and mobile</p>
            </div>
          </div><div className="bg-[#18221c] border border-white/10 rounded-2xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
              <span className="font-black text-white text-base">X</span>
            </div>
            <div>
              <h4 className="font-extrabold text-sm text-white">500K+ app downloads</h4>
              <p className="text-xs text-gray-400">Rated 4.7 and 4.8</p>
            </div>
          </div>

        </div>

        {/* ================= LIGHT BOTTOM STATS CARD ================= */}
        <div className="bg-[#f0f2eb] rounded-[32px] p-8 mt-6 text-black">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            
            <div className="space-y-1">
              <div className="flex items-center justify-center md:justify-start gap-1 text-gray-500">
                <TrendingUp className="w-4 h-4" />
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-[#111]">0.0</h3>
              <p className="text-xs font-semibold text-gray-600">pips spreads from, on xPRIME</p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-center md:justify-start gap-1 text-gray-500">
                <Globe className="w-4 h-4" />
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-[#111]">100+</h3>
              <p className="text-xs font-semibold text-gray-600">instruments in one account</p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-center md:justify-start gap-1 text-gray-500">
                <DollarSign className="w-4 h-4" />
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-[#111]">$0</h3>
              <p className="text-xs font-semibold text-gray-600">xChief fees on deposits and withdrawals</p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-center md:justify-start gap-1 text-gray-500">
                <Layers className="w-4 h-4" />
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-[#111]">0.01</h3>
              <p className="text-xs font-semibold text-gray-600">minimum lot on every account</p>
            </div>

          </div>
        </div>

      </section>

    </div>
  );
}