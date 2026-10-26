import images from "./images";
import { TrendingUp} from "lucide-react";
import { Wallet} from "lucide-react";
import { ShieldCheck, Smartphone, Trophy, Download, AlertTriangle } from 'lucide-react';

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
    <main className="relative isolate min-h-screen overflow-hidden pt-49 bg-[#101216] text-white">
      {/* Background lights */}
      <div 
        className="pointer-events-none absolute right-[-10%] top-[-100px] h-[420px] w-[420px] rounded-full blur-[100px] inset-0 -z-10 overflow-hidden"
        style={{
          background: "radial-gradient(circle, rgba(0,255,65,0.32) 0%, rgba(0,255,65,0.12) 40%, transparent 72%)",
        }} 
      />
     
      <div className="absolute -left-40 top-40 h-[500px] w-[500px] rounded-full bg-[#3157a5]/20 blur-[150px]" />
      <div className="absolute right-0 top-20 h-[550px] w-[550px] rounded-full bg-[#3cfa43]/10 blur-[150px]" />
      <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:55px_55px]" />
      
      {/* Hero content */}
      <section className="mx-auto max-w-[1440px] px-5 pb-16 pt-8 sm:px-8 lg:px-12 lg:pb-24 lg:pt-10">
        {/* Status badges */}
        <div className="mb-8 flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-white/90">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#9bff35]" />
            Free
          </span>

          <span className="rounded-full border border-white/10 bg-white/[0.04] flex flex-row gap-2 px-4 py-2 text-xs font-semibold text-white/90">
            <Wallet size={15} className="text-[#9BFF35]" />
            Virtual funds
          </span>

          <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold flex flex-row gap-2 text-white/90">
            <TrendingUp size={15} className="text-[#9BFF35]" />
            Live market prices
          </span>
        </div>

        {/* Two-column layout */}
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* Left side */}
          <div className="relative z-10">
            <h1 className="max-w-[720px] text-[44px] font-black leading-[0.99] tracking-[-2px] sm:text-[58px] md:text-[68px] lg:text-[70px] xl:text-[82px]">
              Learn before you trade. Practice on a{" "}
              <span className="font-serif font-medium italic text-[#b2ff80]">
                free demo.
              </span>
            </h1>

            <p className="mt-8 max-w-[540px] text-base leading-8 text-[#c1c6cf] sm:text-lg">
              Virtual funds, live market prices and real MT4 and MT5.
              Nothing to deposit.
            </p>

            {/* Main buttons */}
            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="https://my.xchief.com/registration"
                className="group flex min-h-[62px] items-center justify-between gap-5 rounded-full bg-[#9bff35] py-2 pl-2 pr-6 font-bold text-[#14200b] shadow-[0_0_35px_rgba(155,255,53,0.3)] transition hover:bg-[#b4ff72] sm:min-w-[255px]"
              >
                <span>Start my free demo</span>
                <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full bg-[#19261a] text-[26px] text-[#9bff35] transition group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#academy"
                className="flex min-h-[62px] items-center justify-center rounded-full border border-white/35 px-7 font-bold text-white transition hover:border-[#9bff35] hover:bg-white/5"
              >
                Explore the Academy
              </a>
            </div>

            {/* Benefits row */}
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-xs font-semibold text-white/90 sm:text-sm">
              <span className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#9bff35]/20 text-[#9bff35]">
                  ✓
                </span>
                Free, no card needed
              </span>

              <span className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#9bff35]/20 text-[#9bff35]">
                  ✓
                </span>
                Live market prices
              </span>

              <span className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#9bff35]/20 text-[#9bff35]">
                  ✓
                </span>
                Go live only if you want
              </span>
            </div>

            <p className="mt-3 text-xs text-[#a0a6b2]">
              You must be 18 or older.
            </p>
          </div>

          {/* Right side: Chart */}
          <div className="relative z-0 mx-auto w-full max-w-[560px] pb-16 pt-5 sm:pb-20">
            {/* Chart panel */}
            <div className="relative h-[360px] overflow-hidden rounded-[28px] border border-white/15 bg-[#14191e]/80 shadow-[0_25px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl">
              {/* Chart header */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-4 sm:px-6">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#9bff35]/60" />
                  <span className="h-2 w-2 rounded-full bg-white/30" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="ml-2 text-sm font-bold">EURUSD</span>
                  <span className="text-xs text-[#aeb7c4]">H1</span>
                  <span className="rounded-md bg-[#9bff35]/20 px-2 py-1 text-xs font-bold text-[#9bff35]">
                    DEMO
                  </span>
                </div>

                <div className="flex gap-3 text-[10px] font-bold text-[#b7bec8] sm:gap-4 sm:text-xs">
                  <span>M15</span>
                  <span className="rounded bg-white/10 px-1.5 py-1 text-white">H1</span>
                  <span>H4</span>
                  <span>D1</span>
                </div>
              </div>

              <div className="absolute inset-x-5 bottom-12 top-[90px] flex justify-around gap-1 sm:gap-2">
                {candles.map((candle, index) => (
                  <div key={index} className="relative h-full flex-1">
                    {/* Wick */}
                    <span
                      className={`absolute left-1/2 w-px -translate-x-1/2 ${
                        candle.up ? "bg-[#9bff35]" : "bg-[#a2b9d9]"
                      }`}
                      style={{
                        height: `${candle.h + 18}px`,
                        top: `${candle.top}%`,
                      }}
                    />

                    {/* Candle body */}
                    <span
                      className={`absolute left-1/2 w-[5px] -translate-x-1/2 rounded-[1px] sm:w-[8px] ${
                        candle.up ? "bg-[#9bff35]" : "bg-[#8da4c5]"
                      }`}
                      style={{
                        height: `${candle.h}px`,
                        top: `${candle.top + 3}%`,
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Moving average line */}
              <svg
                viewBox="0 0 600 260"
                preserveAspectRatio="none"
                className="pointer-events-none absolute inset-0 h-full w-full"
                aria-label="Decorative market chart"
                role="img"
              >
                <defs>
                  <linearGradient id="chartLine" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#9bff35" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="#baff87" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#9bff35" stopOpacity="0.65" />
                  </linearGradient>
                </defs>

                <path
                  d="M 0 110 C 45 95, 65 100, 95 120 S 145 190, 180 165 S 220 90, 255 115 S 305 140, 340 85 S 385 35, 420 70 S 465 115, 500 100 S 555 105, 600 115"
                  fill="none"
                  stroke="url(#chartLine)"
                  strokeWidth="2.5"
                />

                <path
                  d="M 0 160 L 600 160"
                  stroke="#baff87"
                  strokeDasharray="3 6"
                  strokeOpacity="0.55"
                  strokeWidth="1"
                />
              </svg>

              {/* Volume bars */}
              <div className="absolute bottom-3 left-5 right-5 flex h-8 items-end gap-1 opacity-50">
                {Array.from({ length: 35 }).map((_, index) => (
                  <span
                    key={index}
                    className="flex-1 rounded-t-sm bg-[#7c91a9]"
                    style={{
                      height: `${12 + ((index * 17) % 23)}px`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Checklist card */}
            <div className="absolute -left-12 -bottom-6 z-10 w-[230px] translate-x-97 rounded-[22px] bg-[#f1f0e8] p-5 text-[#293044] shadow-2xl sm:w-[270px]">
              <p className="mb-4 text-[10px] font-extrabold tracking-[1.5px] text-[#7a9a7b]">
                PRACTICE CHECKLIST
              </p>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#9BFF35] font-bold">
                    ✓
                  </span>
                  Place a market order
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#9BFF35] font-bold">
                    ✓
                  </span>
                  Set a stop loss
                </div>

                <div className="flex items-center gap-3 text-[#7f8490]">
                  <span className="h-5 w-5 shrink-0 rounded-full border border-[#d6d7d2]" />
                  Size a position to your risk
                </div>

                <div className="flex items-center gap-3 text-[#7f8490]">
                  <span className="h-5 w-5 shrink-0 rounded-full border border-[#d6d7d2]" />
                  Review your week
                </div>
              </div>
            </div>

            {/* Virtual funds card */}
            <div className="absolute -right-6 top-6 z-10 w-[225px] rounded-[24px] translate-y-96 -translate-x-66 border border-white/15 bg-[#687fba]/20 p-5 shadow-xl backdrop-blur-xl sm:w-[260px]">
              <p className="text-[10px] font-extrabold tracking-wide text-[#b8d6c3]">
                DEMO ACCOUNT
              </p>

              <h2 className="mt-3 text-2xl font-black sm:text-3xl">
                Virtual funds
              </h2>

              <p className="mt-2 text-xs leading-6 text-[#c4cbd5] sm:text-sm">
                Live prices. No deposit.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lower edge of first screen */}
      <div className="mx-auto max-w-[1440px] px-5 pb-8 sm:px-8 lg:px-12">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        {/* Ratings Bar */}
        <div className="relative z-10 mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 px-2 text-sm text-white/80 sm:px-4">
          {/* Google Play */}
          <div className="flex items-center gap-2">
            <div className="flex text-base tracking-[2px] text-yellow-400">
              ★★★★★
            </div>
            <span className="font-bold text-white">4.8</span>
            <span>Google Play</span>
          </div>

          <div className="hidden h-5 w-px bg-white/20 sm:block" />

          {/* App Store */}
          <div className="flex items-center gap-2">
            <span className="font-bold text-white">4.7</span>
            <span>App Store</span>
          </div>

          <div className="hidden h-5 w-px bg-white/20 sm:block" />

          {/* Users */}
          <div className="flex items-center gap-2">
            <span className="text-[#9bff35]">♟</span>
            <span className="font-bold text-white">1.2M+</span>
            <span>users</span>
          </div>
        </div>
        <div className="flex items-start gap-3 border border-white/10 rounded-2xl -translate-x-75 translate-y-5 p-4 md:p-5 text-left text-xs text-gray-400 leading-relaxed max-w-2xl mx-auto w-full">
          <AlertTriangle className="w-4 h-4 text-yellow-500 shrink-0 mt-0.5" />
          <span>
            Demo results don't carry over to live trading. Trading leveraged products such as forex and CFDs is high risk, and you can lose all of your deposit.
          </span>
        </div>
        {/* Awards and Trust 4-Column Bar (کادر ۴ ستونه پایین) */}
        <div className="relative z-10 mx-auto mt-10 w-full max-w-[1280px]">
          <div className="grid grid-cols-1 overflow-hidden rounded-[24px] border py-4 translate-y-6 border-white/10 bg-[#101720]/90 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            
            {/* Column 1: Licensed group entities */}
            <div className="flex items-center gap-4 px-6 py-5">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">Licensed group entities</h4>
                <p className="text-xs text-gray-400">MISA, FSCA and AFSA</p>
              </div>
            </div>

            {/* Card 2 */}
<div className="flex min-h-[100px] items-center gap-4 border-b border-white/10 p-5 sm:border-r lg:border-b-0">
  {/* Logo */}
  <div className="flex h-12 w-12 shrink-0 items-center justify-center">
    <svg
      width="48"
      height="48"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        stroke="#D9B45B"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* گندم سمت چپ */}
        <path d="M39 82 Q22 62 29 32" />
        <path d="M30 43 Q18 39 20 30 Q30 32 30 43Z" fill="#D9B45B" />
        <path d="M29 53 Q16 49 19 40 Q29 42 29 53Z" fill="#D9B45B" />
        <path d="M31 63 Q18 60 22 50 Q31 52 31 63Z" fill="#D9B45B" />
        <path d="M35 72 Q23 70 27 60 Q35 62 35 72Z" fill="#D9B45B" />
        <path d="M31 35 Q22 28 27 20 Q34 26 31 35Z" fill="#D9B45B" />
        <path d="M35 28 Q29 18 36 12 Q41 21 35 28Z" fill="#D9B45B" />

        {/* گندم سمت راست */}
        <path d="M61 82 Q78 62 71 32" />
        <path d="M70 43 Q82 39 80 30 Q70 32 70 43Z" fill="#D9B45B" />
        <path d="M71 53 Q84 49 81 40 Q71 42 71 53Z" fill="#D9B45B" />
        <path d="M69 63 Q82 60 78 50 Q69 52 69 63Z" fill="#D9B45B" />
        <path d="M65 72 Q77 70 73 60 Q65 62 65 72Z" fill="#D9B45B" />
        <path d="M69 35 Q78 28 73 20 Q66 26 69 35Z" fill="#D9B45B" />
        <path d="M65 28 Q71 18 64 12 Q59 21 65 28Z" fill="#D9B45B" />
      </g>

      <text
        x="50"
        y="56"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#E8C778"
        fontSize="25"
        fontWeight="700"
      >
        15+
      </text>
    </svg>
  </div>

  {/* Text */}
  <div>
    <h3 className="text-sm font-bold text-white text-[11px] sm:text-base">
      15+ international awards
    </h3>
    <p className="mt-1 text-s text-white/55 sm:text-sm">
      From 2024 to 2026
    </p>
  </div>
</div>
    {/* Card 3 */}

            {/* Column 3: MetaTrader 4 and 5 (با تصاویر متاتریدر) */}
            <div className="flex items-center gap-4 px-6 py-5">
              <div className="flex -space-x-6 shrink-0">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20  border border-blue-500/40 flex items-center justify-center">
                  <img
                  src={images.award1}
                  alt="meta4"
                  className="rounded-[5px]" />
                  MT4
                </div>
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center">
                  <img
                  src={images.award2}
                  alt="meta5"
                  className="rounded-[5px]" />
                </div>
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">MetaTrader 4 and 5</h4>
                <p className="text-xs text-gray-400">Desktop, web and mobile</p>
              </div>
            </div>

            {/* Column 4: App downloads (با تصویر لوگوی اپلیکیشن) */}
            <div className="flex items-center gap-4 px-6 py-5">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0">
                <img
                src={images.award3}
                alt="xchief"
                className="rounded-[5px]" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">500K+ app downloads</h4>
                <p className="text-xs text-gray-400">Rated 4.7 and 4.8</p>
              </div>
            </div>

          </div>
        </div>
        {/* Curved green background section */}
        <div className="relative mt-12 flex justify-center overflow-hidden py-10">
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