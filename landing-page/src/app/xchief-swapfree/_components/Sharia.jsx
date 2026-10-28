// components/ShariaSection.jsx
import Link from 'next/link';
import { FiClock, FiMonitor, FiToggleLeft, FiArrowRight } from 'react-icons/fi';

export default function ShariaSection() {
  return (
    <section className="bg-[#121614] text-white py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* بخش بالایی: دو ستون (متن در چپ، کارت‌های ویژگی در راست) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* ستون چپ: عناوین و توضیحات */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 bg-[#1b221f] border border-white/10 px-3.5 py-1.5 rounded-full text-xs font-medium text-gray-300 mb-6">
              <FiClock className="text-[#10b981]" /> How it works
            </div>

            <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tight leading-none mb-6">
              Built for traders <br />
              who need <br />
              <span className="italic font-normal text-[#10b981]">Sharia compliant</span> <br />
              conditions
            </h2>

            <p className="text-gray-400 text-sm lg:text-base leading-relaxed max-w-lg">
              A standard account charges or pays a swap when you hold a position overnight. It is an interest adjustment based on central bank rates. On a swap free account, those swaps are switched off for covered instruments, so holding overnight adds no interest either way.
            </p>
          </div>

          {/* ستون راست: کارت‌های ویژگی (Features Box) */}
          <div className="lg:col-span-6">
            <div className="bg-[#181d1a] border border-white/10 rounded-3xl p-8 shadow-2xl space-y-6">
              
              {/* آیتم اول */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center text-[#10b981] shrink-0 mt-1">
                  <FiClock className="text-lg" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">No overnight interest</h3>
                  <p className="text-xs text-gray-400">No swaps charged or paid on 32 currency pairs, gold and silver.</p>
                </div>
              </div>

              {/* آیتم دوم */}
              <div className="flex items-start gap-4 pt-4 border-t border-white/5">
                <div className="w-10 h-10 rounded-xl bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center text-[#10b981] shrink-0 mt-1">
                  <FiMonitor className="text-lg" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">Same markets, same platform</h3>
                  <p className="text-xs text-gray-400">Trade on MT5 with the spreads and execution of the account you choose.</p>
                </div>
              </div>

              {/* آیتم سوم */}
              <div className="flex items-start gap-4 pt-4 border-t border-white/5">
                <div className="w-10 h-10 rounded-xl bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center text-[#10b981] shrink-0 mt-1">
                  <FiToggleLeft className="text-lg" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">Switch it on yourself</h3>
                  <p className="text-xs text-gray-400">Turn it on from your Personal Area in a few clicks. No paperwork to mail in.</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* بنر پایینی (Dark CTA Banner) */}<div className="bg-[#181d1a] border border-white/10 rounded-3xl p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl">
          
          <div className="max-w-xl">
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
              No overnight interest on covered instruments
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              MT5 Classic+, DirectFX and xPRIME for eligible clients. Turn it on in a few clicks from your Personal Area.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
            <Link 
              href="#register" 
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#10b981] hover:bg-[#059669] text-black font-bold px-6 py-3.5 rounded-full transition shadow-lg shadow-[#10b981]/20 text-sm"
            >
              Open my swap free account
              <span className="w-5 h-5 rounded-full bg-black text-[#10b981] flex items-center justify-center text-xs">
                <FiArrowRight />
              </span>
            </Link>

            <Link 
              href="#rules" 
              className="w-full sm:w-auto text-center text-xs font-semibold text-gray-300 hover:text-white transition px-4 py-2"
            >
              Read the rules →
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}