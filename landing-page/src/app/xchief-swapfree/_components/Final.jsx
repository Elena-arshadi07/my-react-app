

// components/FinalCTA.jsx
import Link from 'next/link';
import { 
  FiArrowRight, 
  FiShield, 
  FiAward, 
  FiHeadphones, 
  FiFileText, 
  FiAlertTriangle 
} from 'react-icons/fi';

export default function FinalCTA() {
  return (
    <section className="bg-[#121614] text-white py-24 relative overflow-hidden">
      {/* افکت گرادینت پس‌زمینه */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-t from-[#10b981]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        
        {/* عنوان اصلی */}
        <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-4 text-white">
          Open your swap free account[span_1](start_span)[span_1](end_span)
        </h2>

        {/* توضیحات زیر عنوان */}
        <p className="text-gray-400 text-sm lg:text-base max-w-xl mx-auto mb-10">
          MT5, no overnight interest on covered instruments, and clear rules from day one.[span_2](start_span)[span_2](end_span)
        </p>

        {/* دکمه‌های اقدام */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link 
            href="#register" 
            className="flex items-center gap-2 bg-[#10b981] hover:bg-[#059669] text-black font-bold px-8 py-4 rounded-full transition shadow-lg shadow-[#10b981]/20 text-sm"
          >
            Open my swap free account[span_3](start_span)[span_3](end_span)
            <span className="w-5 h-5 rounded-full bg-black text-[#10b981] flex items-center justify-center text-xs">
              <FiArrowRight />
            </span>
          </Link>

          <Link 
            href="#rules" 
            className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 transition font-semibold text-sm text-gray-300"
          >
            Read the rules[span_4](start_span)[span_4](end_span)
          </Link>
        </div>

        {/* تگ‌های ویژگی‌های پایین دکمه‌ها */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16 text-xs text-gray-300">
          <div className="flex items-center gap-2 bg-[#1b221f] border border-white/10 px-4 py-2.5 rounded-full">
            <FiShield className="text-[#10b981]" />
            <span>Licensed by MISA, license T2023379[span_5](start_span)[span_5](end_span)</span>
          </div>

          <div className="flex items-center gap-2 bg-[#1b221f] border border-white/10 px-4 py-2.5 rounded-full">
            <FiAward className="text-[#10b981]" />
            <span>15+ international awards[span_6](start_span)[span_6](end_span)</span>
          </div>

          <div className="flex items-center gap-2 bg-[#1b221f] border border-white/10 px-4 py-2.5 rounded-full">
            <FiHeadphones className="text-[#10b981]" />
            <span>24/7 support in 20+ languages[span_7](start_span)[span_7](end_span)</span>
          </div>

          <div className="flex items-center gap-2 bg-[#1b221f] border border-white/10 px-4 py-2.5 rounded-full">
            <FiFileText className="text-[#10b981]" />
            <span>Clear rules from day one[span_8](start_span)[span_8](end_span)</span>
          </div>
        </div>

        {/* بنر هشدار ریسک پایانی */}
        <div className="max-w-3xl mx-auto bg-[#181d1a] border border-white/5 rounded-2xl p-4 flex items-start gap-3 text-xs text-gray-400 text-left">
          <FiAlertTriangle className="text-yellow-500 text-base shrink-0 mt-0.5" />
          <p>
            Trading leveraged products such as forex and CFDs is high risk, and you can lose all of your deposit.[span_9](start_span)[span_9](end_span)
          </p>
        </div>

      </div>
    </section>
  );
}