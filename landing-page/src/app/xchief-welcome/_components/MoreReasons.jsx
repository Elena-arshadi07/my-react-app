
// components/MoreReasons.jsx
import Link from 'next/link';
import { FiPlus, FiShield, FiAward, FiPlayCircle, FiCheckCircle, FiArrowRight } from 'react-icons/fi';

export default function MoreReasons() {
  return (
    <section className="bg-[#121614] text-white py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* هدر بخش */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-[#1b221f] border border-white/10 px-3.5 py-1.5 rounded-full text-xs font-medium text-gray-300 mb-6">
            <FiPlus className="text-[#10b981]" /> More for new clients[span_1](start_span)[span_1](end_span)
          </div>

          <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-4">
            A few more <br />
            reasons to <span className="italic font-normal text-[#10b981]">start here</span>[span_2](start_span)[span_2](end_span)
          </h2>

          <p className="text-gray-400 text-sm lg:text-base">
            Each of these has its own terms. Read them before you decide.[span_3](start_span)[span_3](end_span)
          </p>
        </div>

        {/* دو کارت بزرگ بالا */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          
          {/* کارت اول: بیمه سپرده */}
          <div className="bg-[#181d1a] border border-white/10 rounded-3xl p-8 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center text-[#10b981] mb-6">
                <FiShield className="text-xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Deposit insurance, 30 percent[span_4](start_span)[span_4](end_span)[span_5](start_span)[span_5](end_span)
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-6">
                On DirectFX and xPRIME with a first deposit of $2,000 or more, a payout of 30 percent of your initial deposit, up to $10,000, can be credited if your deposit is partly or fully lost. The payout becomes withdrawable after a trading volume target, and the program can&apos;t run alongside an active bonus or trading credit.[span_6](start_span)[span_6](end_span)[span_7](start_span)[span_7](end_span)
              </p>
            </div>
            <div>
              <Link 
                href="#program-terms" 
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#10b981] hover:underline"
              >
                Program terms →[span_8](start_span)[span_8](end_span)
              </Link>
            </div>
          </div>

          {/* کارت دوم: مسابقات معاملاتی */}
          <div className="bg-[#181d1a] border border-white/10 rounded-3xl p-8 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center text-[#10b981] mb-6">
                <FiAward className="text-xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Trading contests[span_9](start_span)[span_9](end_span)[span_10](start_span)[span_10](end_span)
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-6">
                Join the xChief trading community in contests built on skill, like the Traders World Cup 2026 and Gold Whale. Every contest has its own rules and dates.[span_11](start_span)[span_11](end_span)[span_12](start_span)[span_12](end_span)
              </p>
            </div>
            <div>
              <Link 
                href="#current-contests" 
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#10b981] hover:underline"
              >
                See current contests →[span_13](start_span)[span_13](end_span)
              </Link>
            </div>
          </div>

        </div>{/* دو کارت کوچک پایین */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* حساب دمو رایگان */}
          <div className="bg-[#181d1a] border border-white/10 rounded-3xl p-6 flex items-center gap-4 shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center text-[#10b981] shrink-0">
              <FiPlayCircle className="text-lg" />
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">
              <strong className="text-white">Free demo.</strong> Practice first with virtual funds and live prices. <Link href="#demo" className="text-[#10b981] font-bold hover:underline">Open a free demo</Link>.[span_14](start_span)[span_14](end_span)
            </p>
          </div>

          {/* کارمزد صفر */}
          <div className="bg-[#181d1a] border border-white/10 rounded-3xl p-6 flex items-center gap-4 shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center text-[#10b981] shrink-0">
              <FiCheckCircle className="text-lg" />
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">
              <strong className="text-white">Zero funding fees.</strong> No xChief fees on deposits and withdrawals. Your provider may charge its own fee.[span_15](start_span)[span_15](end_span)
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}