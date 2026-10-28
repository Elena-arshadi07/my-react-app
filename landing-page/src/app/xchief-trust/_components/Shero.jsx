import React from 'react';
import { ShieldCheck, Trophy, TrendingUp, Wallet, ArrowRight, Check } from 'lucide-react';

export default function HeroSection() {
  const candles = [
    { h: 35, top: 32, up: true },
    { h: 48, top: 24, up: false },
    { h: 29, top: 37, up: true },
    { h: 55, top: 18, up: true },
    { h: 38, top: 31, up: false },
    { h: 46, top: 25, up: true },
    { h: 32, top: 35, up: false },
    { h: 63, top: 12, up: true },
    { h: 42, top: 28, up: true },
    { h: 51, top: 20, up: false },
    { h: 37, top: 31, up: true },
    { h: 60, top: 15, up: true },
    { h: 44, top: 27, up: false },
    { h: 35, top: 34, up: true },
    { h: 49, top: 22, up: false },
    { h: 30, top: 36, up: true },
    { h: 40, top: 29, up: false },
    { h: 54, top: 19, up: true },
    { h: 33, top: 34, up: false },
    { h: 43, top: 26, up: true },
  ];

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#101216] text-white pt-6">
      
      {/* ================= NAVBAR ================= */}
      <nav className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-black italic tracking-tighter text-white">XChief</span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#regulation" className="flex items-center gap-2 hover:text-white transition">
            <ShieldCheck className="w-4 h-4 text-[#9bff35]" /> Regulation
          </a>
          <a href="#awards" className="flex items-center gap-2 hover:text-white transition">
            <Trophy className="w-4 h-4 text-amber-400" /> Awards
          </a>
          <a href="#platforms" className="flex items-center gap-2 hover:text-white transition">
            <span className="w-2 h-2 rounded-full bg-[#9bff35]"></span> Platforms
          </a>
          <a href="#accounts" className="flex items-center gap-2 hover:text-white transition">
            <Wallet className="w-4 h-4 text-[#9bff35]" /> Accounts
          </a>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <span className="text-xs font-bold text-gray-300 px-2 py-1 rounded bg-white/5 border border-white/10">EN</span>
          <a 
            href="https://my.xchief.com/registration"
            className="bg-[#9bff35] hover:bg-[#b4ff72] text-black font-extrabold text-sm px-5 py-2.5 rounded-full flex items-center gap-2 shadow-lg shadow-lime-500/20 transition"
          >
            <span>Open my account</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </nav>

      {/* Background lights & grid */}
      <div className="pointer-events-none absolute right-[-10%] top-0 h-[420px] w-[420px] rounded-full blur-[100px] -z-10 bg-radial from-[#9bff35]/20 to-transparent" />
      <div className="absolute -left-40 top-40 h-[500px] w-[500px] rounded-full bg-[#3157a5]/15 blur-[150px] -z-10" />
      <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:55px_55px] -z-10" />
      
      {/* ================= HERO CONTENT ================= */}
      <section className="mx-auto max-w-[1440px] px-5 pb-16 pt-8 sm:px-8 lg:px-12">
        
        {/* Top Badges */}
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-white/90 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#9bff35]" />
            Licensed group entities
          </span>
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-white/90 flex items-center gap-2"><span className="text-[#9bff35]">⚡</span> A Book STP execution
          </span>
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-white/90 flex items-center gap-2">
            <span className="text-[#9bff35]">🎧</span> 24/7 support
          </span>
        </div>

        {/* Two-column layout */}
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          
          {/* Left side */}
          <div className="relative z-10">
            <h1 className="max-w-[720px] text-[44px] font-black leading-[0.98] tracking-[-2px] sm:text-[58px] md:text-[68px] lg:text-[72px] xl:text-[84px]">
              A broker you can <span className="text-white">trust.</span> And <span className="font-serif italic font-medium text-[#b2ff80]">check.</span>
            </h1>

            <p className="mt-6 max-w-[540px] text-base leading-7 text-[#c1c6cf] sm:text-lg">
              Licensed group entities, no dealing desk and zero xChief fees on deposits and withdrawals.
            </p>

            {/* Main buttons */}
            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="https://my.xchief.com/registration"
                className="group flex min-h-[60px] items-center justify-between gap-5 rounded-full bg-[#9bff35] py-2 pl-2 pr-6 font-bold text-[#14200b] shadow-[0_0_35px_rgba(155,255,53,0.3)] transition hover:bg-[#b4ff72] sm:min-w-[250px]"
              >
                <span>Open my account</span>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#19261a] text-white transition group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#licenses"
                className="flex min-h-[60px] items-center justify-center rounded-full border border-white/35 px-7 font-bold text-white transition hover:border-[#9bff35] hover:bg-white/5"
              >
                Check the licenses
              </a>
            </div>

            {/* Benefits row */}
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-white/90 sm:text-sm">
              <span className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#9bff35]/20 text-[#9bff35]">✓</span>
                Opens in minutes
              </span>
              <span className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#9bff35]/20 text-[#9bff35]">✓</span>
                No xChief funding fees
              </span>
              <span className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#9bff35]/20 text-[#9bff35]">✓</span>
                No minimum on Cent
              </span>
            </div>

            <p className="mt-3 text-xs text-[#a0a6b2]">
              You must be 18 or older.
            </p>
          </div>

          {/* Right side: Chart & Floating Cards */}
          <div className="relative z-0 mx-auto w-full max-w-[560px] pb-10 pt-5">
            
            {/* Top Right Fee Card */}
            <div className="absolute -top-10 right-0 z-20 w-[210px] rounded-[22px] bg-[#f1f0e8] p-4 text-[#111] shadow-2xl">
              <p className="text-[9px] font-extrabold tracking-wider text-gray-500 uppercase">
                XCHIEF FEE TO DEPOSIT OR WITHDRAW
              </p>
              <h3 className="mt-1 text-3xl font-black text-black">$0</h3>
            </div>

            {/* Chart panel */}
            <div className="relative h-[340px] overflow-hidden rounded-[28px] border border-white/15 bg-[#14191e]/90 shadow-[0_25px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-6"><div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#9bff35]/60" />
                  <span className="h-2 w-2 rounded-full bg-white/30" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="ml-2 text-sm font-bold">EURUSD</span>
                  <span className="text-xs text-[#aeb7c4]">H1</span>
                </div>
                <div className="flex gap-3 text-xs font-bold text-[#b7bec8]">
                  <span>M15</span>
                  <span className="rounded bg-white/10 px-1.5 py-0.5 text-white">H1</span>
                  <span>H4</span>
                  <span>D1</span>
                </div>
              </div>

              {/* Candles */}
              <div className="absolute inset-x-5 bottom-12 top-20 flex justify-around gap-1">
                {candles.map((candle, index) => (
                  <div key={index} className="relative h-full flex-1">
                    <span
                      className={`absolute left-1/2 w-px -translate-x-1/2 ${candle.up ? "bg-[#9bff35]" : "bg-[#a2b9d9]"}`}
                      style={{ height: `${candle.h + 18}px, top: ${candle.top}%` }}
                    />
                    <span
                      className={`absolute left-1/2 w-[6px] -translate-x-1/2 rounded-[1px] ${candle.up ? "bg-[#9bff35]" : "bg-[#8da4c5]"}`}
                      style={{ height: `${candle.h}px, top: ${candle.top + 3}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Right Client Accounts Card */}
            <div className="absolute -bottom-8 right-0 z-20 w-[270px] rounded-[24px] bg-[#f1f0e8] p-4 text-[#111] shadow-2xl">
              <div className="flex items-center gap-2 text-xs font-bold text-gray-700">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>HOLDS CLIENT ACCOUNTS</span>
              </div>
              <h4 className="mt-1 text-base font-black text-black">xChief Ltd</h4>
              <div className="mt-3 space-y-1 text-xs text-gray-600 border-t border-black/10 pt-2">
                <div className="flex justify-between">
                  <span className="text-gray-500">Regulator</span>
                  <span className="font-bold text-black">MISA, Comoros</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">License</span>
                  <span className="font-bold text-black">T2023379</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Company number</span>
                  <span className="font-bold text-black">HY00923433</span>
                </div>
              </div>
              <a href="#licenses" className="mt-3 flex items-center justify-between text-xs font-bold text-emerald-700 hover:text-black transition">
                <span>See every group entity</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ================= RATINGS & RISK WARNING ================= */}
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 pb-8">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent mb-6" />

        <div className="flex flex-wrap items-center justify-between gap-6">
          {/* Ratings */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">★★★★★</div>
              <span className="font-bold text-white">4.8</span>
              <span>Google Play</span>
            </div>
            <div className="hidden h-5 w-px bg-white/20 sm:block" />
            <div className="flex items-center gap-2"><span className="font-bold text-white">4.7</span>
              <span>App Store</span>
            </div>
            <div className="hidden h-5 w-px bg-white/20 sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-[#9bff35]">👥</span>
              <span className="font-bold text-white">1.2M+</span>
              <span>users</span>
            </div>
          </div>
        </div>

        {/* Risk Warning Box */}
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-xs text-gray-400 leading-relaxed max-w-3xl">
          <p>
            <span className="text-amber-400 font-bold mr-1">⚠️</span>
            Trading leveraged products such as forex and CFDs is high risk, and you can lose all of your deposit. Only trade with money you can afford to lose.
          </p>
        </div>

        {/* ================= 4-COLUMN TRUST & AWARDS BAR ================= */}
        <div className="relative z-10 mx-auto mt-10 w-full max-w-[1280px]">
          <div className="grid grid-cols-1 overflow-hidden rounded-[24px] border border-white/10 bg-[#101720]/90 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            
            {/* Col 1 */}
            <div className="flex items-center gap-4 px-6 py-7">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">Licensed group entities</h4>
                <p className="text-xs text-gray-400">MISA, FSCA and AFSA</p>
              </div>
            </div>

            {/* Col 2 */}
            <div className="flex items-center gap-4 px-6 py-7">
              <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                <Trophy className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-sm text-amber-400">15+</span>
                  <span className="font-bold text-sm text-white">international awards</span>
                </div>
                <p className="text-xs text-gray-400">From 2024 to 2026</p>
              </div>
            </div>

            {/* Col 3 */}
            <div className="flex items-center gap-4 px-6 py-7">
              <div className="flex -space-x-4 shrink-0">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center relative z-10">
                  <span className="font-black text-xs text-blue-400">MT4</span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center relative z-20 shadow-lg">
                  <span className="font-black text-xs text-blue-300">MT5</span>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">MetaTrader 4 and 5</h4>
                <p className="text-xs text-gray-400">Desktop, web and mobile</p>
              </div>
            </div>

            {/* Col 4 */}
            <div className="flex items-center gap-4 px-6 py-7">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0">
                <span className="font-black text-sm text-emerald-400">X</span>
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">500K+ app downloads</h4>
                <p className="text-xs text-gray-400">Rated 4.7 and 4.8</p>
              </div>
            </div>

          </div>
        </div>{/* Curved green background section */}
        <div className="relative mt-12 flex justify-center overflow-hidden py-6">
          <div
            className="absolute h-36 w-full max-w-[750px] rounded-[50%] blur-[80px] z-10"
            style={{
              background: "radial-gradient(ellipse at 50% 0%, rgba(155,255,53,0.05) 0%, rgba(15,25,25,0.08) 65%, transparent 80%)",
              borderTop: "2px solid rgba(155,255,53,0.75)",
              boxShadow: "0 -35px 100px 25px rgba(155,255,53,0.3)",
            }}
          />
        </div>

      </div>
    </main>
  );
}