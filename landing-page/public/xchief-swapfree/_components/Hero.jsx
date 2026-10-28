

// components/Hero.jsx
import Link from 'next/link';
import { FiArrowRight, FiCheck, FiAlertTriangle } from 'react-icons/fi';

export default function Hero() {
  return (
    <section className="bg-[#121614] text-white min-h-screen relative overflow-hidden pb-16">
      {/* افکت گرادینت پس‌زمینه */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-[#10b981]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-6">
        
        {/* بالای هیرو: سن مجاز، امتیازات و تعداد کاربران */}
        <div className="flex flex-wrap items-center gap-6 text-xs text-gray-400 mb-6">
          <span>You must be 18 or older.</span>
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400">★★★★★</div>
            <span className="font-bold text-white">4.8</span>
            <span>Google Play</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-bold text-white">4.7</span>
            <span>App Store</span>
          </div>
          <div className="flex items-center gap-1 text-[#10b981]">
            <span>👥</span>
            <span className="font-bold text-white">1.2M+</span>
            <span>users</span>
          </div>
        </div>

        {/* بنر هشدار ریسک */}
        <div className="max-w-3xl bg-[#1b221f] border border-white/5 rounded-xl p-3.5 mb-10 flex items-start gap-3 text-xs text-gray-300">
          <FiAlertTriangle className="text-yellow-500 text-base shrink-0 mt-0.5" />
          <p>
            Trading leveraged products such as forex and CFDs is high risk, and you can lose all of your deposit. Only trade with money you can afford to lose.
          </p>
        </div>

        {/* بخش اصلی (دو ستونی: متن‌ها در سمت چپ/راست و کارت مقایسه) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* ستون چپ: عناوین و دکمه‌ها */}
          <div className="lg:col-span-7">
            {/* تگ‌های بالای عنوان */}
            <div className="flex flex-wrap items-center gap-3 mb-6 text-xs font-medium">
              <span className="flex items-center gap-1.5 bg-[#1b221f] border border-white/10 px-3 py-1.5 rounded-full text-gray-300">
                <span className="w-2 h-2 rounded-full bg-[#10b981]" /> No overnight interest
              </span>
              <span className="bg-[#1b221f] border border-white/10 px-3 py-1.5 rounded-full text-gray-300">
                MT5
              </span>
              <span className="bg-[#1b221f] border border-white/10 px-3 py-1.5 rounded-full text-gray-300">
                🏆 Best Islamic Forex Account 2025
              </span>
            </div>

            {/* عنوان اصلی */}
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-none mb-6">
              Swap free <br />
              <span className="text-[#10b981]">trading.</span> No <br />
              overnight <span className="italic font-normal text-[#10b981]">interest.</span>
            </h1>

            <p className="text-gray-400 text-base mb-8 max-w-xl">
              An Islamic account on MT5. Hold forex, gold and silver overnight with no swaps.
            </p>

            {/* دکمه‌ها */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Link 
                href="#register" 
                className="flex items-center gap-2 bg-[#10b981] hover:bg-[#059669] text-black font-bold px-7 py-3.5 rounded-full transition shadow-lg shadow-[#10b981]/20"
              >
                Open my swap free account
                <span className="w-5 h-5 rounded-full bg-black text-[#10b981] flex items-center justify-center text-xs"><FiArrowRight />
                </span>
              </Link>
              
              <Link 
                href="#how-it-works" 
                className="px-7 py-3.5 rounded-full border border-white/10 hover:bg-white/5 transition font-medium text-sm text-gray-300"
              >
                See how it works
              </Link>
            </div>

            {/* لیست چک‌مارک‌ها */}
            <div className="flex flex-wrap items-center gap-6 text-xs text-gray-300">
              <span className="flex items-center gap-1.5">
                <FiCheck className="text-[#10b981]" /> MT5 Classic+, DirectFX, xPRIME
              </span>
              <span className="flex items-center gap-1.5">
                <FiCheck className="text-[#10b981]" /> 32 pairs, gold and silver
              </span>
              <span className="flex items-center gap-1.5">
                <FiCheck className="text-[#10b981]" /> On in a few clicks
              </span>
            </div>
          </div>

          {/* ستون راست: کارت‌های مقایسه و بَج جایزه */}
          <div className="lg:col-span-5 relative">
            
            {/* بَج بالا (Forex Expo) */}
            <div className="absolute -top-10 right-6 bg-[#1b221f] border border-white/10 rounded-2xl p-3 flex items-center gap-3 shadow-xl z-10">
              {/* جایگاه عکس بج */}
              <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 font-bold text-xs">
                IMG
              </div>
              <div>
                <p className="text-[10px] text-gray-400">FOREX EXPO DUBAI 2025</p>
                <p className="text-xs font-bold text-white">Best Islamic Forex Account</p>
              </div>
            </div>

            {/* باکس اصلی مقایسه حساب‌ها */}
            <div className="bg-[#181d1a] border border-white/10 rounded-3xl p-6 pt-10 shadow-2xl">
              <p className="text-xs text-gray-400 mb-4 font-medium">A position held overnight</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {/* کارت استاندارد */}
                <div className="bg-[#121614] border border-white/5 rounded-2xl p-4">
                  <p className="text-[11px] font-bold text-gray-400 mb-2">STANDARD ACCOUNT</p>
                  <p className="text-xs text-gray-300">Swap charged or paid each night</p>
                </div>

                {/* کارت سواپ فری */}
                <div className="bg-[#10b981]/10 border border-[#10b981]/30 rounded-2xl p-4">
                  <p className="text-[11px] font-bold text-[#10b981] mb-2">SWAP FREE ACCOUNT</p>
                  <p className="text-xs text-white">No swap on covered instruments</p>
                </div>
              </div>

              {/* نوار روزها (Day 1 to Day 7) */}
              <div className="mb-4">
                <div className="flex justify-between text-[11px] text-gray-400 mb-2">
                  <span>Hold for up to 7 days</span>
                  <span className="text-[#10b981] font-semibold">Day 1 to Day 7</span>
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {[...Array(7)].map((_, i) => (
                    <div key={i} className="h-1.5 rounded-full bg-[#10b981]" />
                  ))}
                </div>
              </div>

              <p className="text-[11px] text-gray-500 mb-6">
                Keep a position longer than 7 days and the service switches off for that account.
              </p>

              {/* تب‌های دارایی */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 text-xs">
                <span className="bg-[#121614] border border-white/10 px-3 py-1.5 rounded-full text-gray-300 shrink-0">32 currency pairs</span><span className="bg-[#121614] border border-white/10 px-3 py-1.5 rounded-full text-gray-300 shrink-0">Gold XAUUSD</span>
                <span className="bg-[#121614] border border-white/10 px-3 py-1.5 rounded-full text-gray-300 shrink-0">Silver XAGUSD</span>
              </div>
            </div>

          </div>

        </div>

        {/* نوار پایین صفحه (Dark Feature Bar) */}
        <div className="bg-[#181d1a] border border-white/10 rounded-2xl p-4 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          
          {/* آیتم ۱ */}
          <div className="flex items-center gap-3 px-4 border-r border-white/5 last:border-none">
            <div className="w-8 h-8 rounded-full bg-[#10b981]/10 flex items-center justify-center text-[#10b981]">
              🛡️
            </div>
            <div>
              <p className="text-xs font-bold text-white">Licensed group entities</p>
              <p className="text-[11px] text-gray-400">MISA, FSCA and AFSA</p>
            </div>
          </div>

          {/* آیتم ۲ */}
          <div className="flex items-center gap-3 px-4 border-r border-white/5 last:border-none">
            <div className="w-8 h-8 rounded-full bg-[#10b981]/10 flex items-center justify-center text-[#10b981]">
              🏆
            </div>
            <div>
              <p className="text-xs font-bold text-white">15+ international awards</p>
              <p className="text-[11px] text-gray-400">From 2024 to 2026</p>
            </div>
          </div>

          {/* آیتم ۳ (تصاویر متاتریدر و دانلودها) */}
          <div className="flex items-center justify-between px-4">
            <div className="flex items-center gap-3">
              {/* جایگاه عکس متاتریدر */}
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-xs text-blue-400 font-bold">
                MT
              </div>
              <div>
                <p className="text-xs font-bold text-white">MetaTrader 4 and 5</p>
                <p className="text-[11px] text-gray-400">Desktop, web and mobile</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs font-bold text-white">500K+ app downloads</p>
              <p className="text-[11px] text-gray-400">Rated 4.7 and 4.8</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}