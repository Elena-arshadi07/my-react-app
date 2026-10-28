
// components/Hero.jsx
import Link from 'next/link';
import { FiArrowRight, FiCheck, FiAlertTriangle, FiFileText, FiCreditCard } from 'react-icons/fi';

export default function Hero() {
  return (
    <section className="bg-[#121614] text-white min-h-screen relative overflow-hidden pb-16">
      {/* افکت گرادینت پس‌زمینه */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-[#10b981]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-6">
        
        {/* بخش اصلی (دو ستونی) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-10">
          
          {/* ستون چپ: عناوین، توضیحات و دکمه‌ها */}
          <div className="lg:col-span-7">
            {/* تگ‌های بالای عنوان */}
            <div className="flex flex-wrap items-center gap-3 mb-6 text-xs font-medium">
              <span className="flex items-center gap-1.5 bg-[#1b221f] border border-white/10 px-3 py-1.5 rounded-full text-gray-300">
                <span className="w-2 h-2 rounded-full bg-[#10b981]" /> New clients[span_7](start_span)[span_7](end_span)
              </span>
              <span className="flex items-center gap-1.5 bg-[#1b221f] border border-white/10 px-3 py-1.5 rounded-full text-gray-300">
                <FiFileText className="text-[#10b981]" /> Terms apply[span_8](start_span)[span_8](end_span)
              </span>
              <span className="bg-[#1b221f] border border-white/10 px-3 py-1.5 rounded-full text-gray-300">
                Classic+, DirectFX, xPRIME[span_9](start_span)[span_9](end_span)
              </span>
            </div>

            {/* عنوان اصلی */}
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-none mb-6">
              A <span className="italic font-normal text-[#10b981]">welcome offer</span> <br />
              for new clients.[span_10](start_span)[span_10](end_span)
            </h1>

            <p className="text-gray-400 text-base mb-8 max-w-xl">
              We match your first deposit up to $500. Every term is written plainly below.[span_11](start_span)[span_11](end_span)
            </p>

            {/* دکمه‌ها */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Link 
                href="#claim" 
                className="flex items-center gap-2 bg-[#10b981] hover:bg-[#059669] text-black font-bold px-7 py-3.5 rounded-full transition shadow-lg shadow-[#10b981]/20 text-sm"
              >
                Claim my welcome offer[span_12](start_span)[span_12](end_span)
                <span className="w-5 h-5 rounded-full bg-black text-[#10b981] flex items-center justify-center text-xs">
                  <FiArrowRight />
                </span>
              </Link>
              
              <Link 
                href="#how-to-claim" 
                className="px-7 py-3.5 rounded-full border border-white/10 hover:bg-white/5 transition font-medium text-sm text-gray-300"
              >
                How to claim[span_13](start_span)[span_13](end_span)
              </Link>
            </div>

            {/* ویژگی‌های زیر دکمه */}
            <div className="flex flex-wrap items-center gap-6 text-xs text-gray-300 mb-6">
              <span className="flex items-center gap-1.5">
                <FiCheck className="text-[#10b981]" /> Deposit from $50[span_14](start_span)[span_14](end_span)
              </span>
              <span className="flex items-center gap-1.5">
                <FiCheck className="text-[#10b981]" /> Matched up to $500[span_15](start_span)[span_15](end_span)
              </span>
              <span className="flex items-center gap-1.5">
                <FiCheck className="text-[#10b981]" /> Volume target applies[span_16](start_span)[span_16](end_span)
              </span>
            </div>{/* سن مجاز و امتیازات */}
            <div className="flex flex-wrap items-center gap-6 text-xs text-gray-400">
              <span>You must be 18 or older.[span_17](start_span)[span_17](end_span)</span>
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">★★★★★</div>
                <span className="font-bold text-white">4.8</span>
                <span>Google Play[span_18](start_span)[span_18](end_span)</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="font-bold text-white">4.7</span>
                <span>App Store[span_19](start_span)[span_19](end_span)</span>
              </div>
              <div className="flex items-center gap-1 text-[#10b981]">
                <span>👥</span>
                <span className="font-bold text-white">1.2M+</span>
                <span>users[span_20](start_span)[span_20](end_span)</span>
              </div>
            </div>
          </div>

          {/* ستون راست: کارت بنر خوش‌آمدگویی (Welcome Bonus Card) */}
          <div className="lg:col-span-5 relative">
            
            {/* بج شناور بالا */}
            <div className="absolute -top-6 right-4 bg-white text-black rounded-2xl px-4 py-2.5 flex items-center gap-2 shadow-xl z-10 text-xs font-semibold">
              <FiFileText className="text-[#10b981]" />
              <span>Full offer terms on this page[span_21](start_span)[span_21](end_span)</span>
            </div>

            {/* باکس اصلی کارت */}
            <div className="bg-[#181d1a] border border-[#10b981]/30 rounded-3xl p-8 pt-10 shadow-2xl relative">
              <p className="text-xs font-bold text-[#10b981] tracking-wider uppercase mb-2">
                WELCOME BONUS[span_22](start_span)[span_22](end_span)
              </p>

              <h2 className="text-5xl lg:text-6xl font-black text-white mb-2">
                Up to <span className="text-[#10b981]">$500</span>[span_23](start_span)[span_23](end_span)
              </h2>
              <p className="text-xs text-gray-400 mb-8">matched on your first deposit[span_24](start_span)[span_24](end_span)</p>

              {/* مشخصات درون کارت */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 mb-8 text-left">
                <div>
                  <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">DEPOSIT FROM[span_25](start_span)[span_25](end_span)</p>
                  <p className="text-sm font-bold text-white">$50[span_26](start_span)[span_26](end_span)</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">ACCOUNTS[span_27](start_span)[span_27](end_span)</p>
                  <p className="text-xs font-bold text-white leading-tight">Classic+, DirectFX, xPRIME[span_28](start_span)[span_28](end_span)</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">VOLUME TARGET[span_29](start_span)[span_29](end_span)</p>
                  <p className="text-[11px] font-semibold text-gray-300 leading-tight">
                    Applies before the bonus is withdrawable[span_30](start_span)[span_30](end_span)
                  </p>
                </div>
              </div>

              {/* لینک شرایط */}
              <Link 
                href="#key-terms" 
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#10b981] hover:underline"
              >
                Read the key terms →[span_31](start_span)[span_31](end_span)[span_32](start_span)[span_32](end_span)
              </Link>

              {/* بج شناور پایین کارت */}
              <div className="absolute -bottom-6 left-6 bg-[#1b221f] border border-white/10 rounded-2xl px-4 py-3 flex items-center gap-2 shadow-xl text-xs font-semibold text-gray-300"><FiCreditCard className="text-[#10b981]" />
                <span>$0 xChief funding fees[span_33](start_span)[span_33](end_span)[span_34](start_span)[span_34](end_span)</span>
              </div>
            </div>

          </div>

        </div>

        {/* بنر هشدار ریسک */}
        <div className="max-w-3xl bg-[#1b221f] border border-white/5 rounded-xl p-3.5 mb-10 flex items-start gap-3 text-xs text-gray-300 mt-12">
          <FiAlertTriangle className="text-yellow-500 text-base shrink-0 mt-0.5" />
          <p>
            Bonus funds come with a trading volume target. Trading leveraged products such as forex and CFDs is high risk, and you can lose all of your deposit.[span_35](start_span)[span_35](end_span)
          </p>
        </div>

        {/* نوار پایین صفحه (Feature Bar) */}
        <div className="bg-[#181d1a] border border-white/10 rounded-2xl p-4 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          
          <div className="flex items-center gap-3 px-4 border-r border-white/5 last:border-none">
            <div className="w-8 h-8 rounded-full bg-[#10b981]/10 flex items-center justify-center text-[#10b981]">
              🛡️
            </div>
            <div>
              <p className="text-xs font-bold text-white">Licensed group entities[span_36](start_span)[span_36](end_span)</p>
              <p className="text-[11px] text-gray-400">MISA, FSCA and AFSA[span_37](start_span)[span_37](end_span)</p>
            </div>
          </div>

          <div className="flex items-center gap-3 px-4 border-r border-white/5 last:border-none">
            <div className="w-8 h-8 rounded-full bg-[#10b981]/10 flex items-center justify-center text-[#10b981]">
              🏆
            </div>
            <div>
              <p className="text-xs font-bold text-white">15+ international awards[span_38](start_span)[span_38](end_span)</p>
              <p className="text-[11px] text-gray-400">From 2024 to 2026[span_39](start_span)[span_39](end_span)</p>
            </div>
          </div>

          <div className="flex items-center justify-between px-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-xs text-blue-400 font-bold">
                MT
              </div>
              <div>
                <p className="text-xs font-bold text-white">MetaTrader 4 and 5[span_40](start_span)[span_40](end_span)</p>
                <p className="text-[11px] text-gray-400">Desktop, web and mobile[span_41](start_span)[span_41](end_span)</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs font-bold text-white">500K+ app downloads[span_42](start_span)[span_42](end_span)</p>
              <p className="text-[11px] text-gray-400">Rated 4.7 and 4.8[span_43](start_span)[span_43](end_span)</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}