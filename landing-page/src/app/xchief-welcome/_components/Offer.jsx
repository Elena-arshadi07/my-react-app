

// components/OfferWorks.jsx
import Link from 'next/link';
import { FiGift, FiArrowRight } from 'react-icons/fi';

export default function OfferWorks() {
  const rules = [
    {
      title: "THE MATCH",
      desc: "We match your first deposit, up to $500",
    },
    {
      title: "MINIMUM DEPOSIT",
      desc: "$50",
    },
    {
      title: "ELIGIBLE ACCOUNTS",
      desc: "Classic+, DirectFX or xPRIME",
    },
    {
      title: "HOW TO CLAIM",
      desc: "Tick Enroll Welcome Bonus when you make your first deposit",
    },
    {
      title: "WITHDRAWING THE BONUS",
      desc: "Once your trading volume reaches 50,000 times the bonus amount in USD",
    },
    {
      title: "IF YOUR EQUITY DROPS",
      desc: "If equity falls to the bonus amount, the bonus is cancelled, which can trigger a stop out",
    },
  ];

  return (
    <section className="bg-[#121614] text-white py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* هدر بخش */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#1b221f] border border-white/10 px-3.5 py-1.5 rounded-full text-xs font-medium text-gray-300 mb-6">
              <FiGift className="text-[#10b981]" /> The offer[span_4](start_span)[span_4](end_span)
            </div>

            <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-4">
              How the welcome <br />
              offer <span className="italic font-normal text-[#10b981]">works</span>[span_5](start_span)[span_5](end_span)
            </h2>
          </div>

          <Link 
            href="#full-terms" 
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-300 hover:text-white transition group shrink-0"
          >
            Read the full welcome bonus terms[span_6](start_span)[span_6](end_span)
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* شبکه اطلاعات (گرید ۶ تایی) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {rules.map((item, index) => (
            <div 
              key={index}
              className="bg-[#181d1a] border border-white/10 rounded-3xl p-7 shadow-xl flex flex-col justify-between"
            >
              <div>
                <p className="text-[11px] font-bold text-gray-400 tracking-wider mb-2">
                  {item.title}[span_7](start_span)[span_7](end_span)[span_8](start_span)[span_8](end_span)
                </p>
                <p className="text-sm font-semibold text-white leading-relaxed">
                  {item.desc}[span_9](start_span)[span_9](end_span)[span_10](start_span)[span_10](end_span)
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* بخش پایین: کارت مثال و کارت راهنمای نهایی */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* کارت مثال (تیره) */}
          <div className="lg:col-span-7 bg-[#181d1a] border border-white/10 rounded-3xl p-8 shadow-xl">
            <p className="text-xs font-bold text-[#10b981] tracking-wider uppercase mb-3">
              EXAMPLE[span_11](start_span)[span_11](end_span)
            </p>
            <p className="text-sm lg:text-base text-gray-300 leading-relaxed">
              A <span className="text-white font-bold">$200</span> bonus becomes withdrawable after <span className="text-white font-bold">$10,000,000</span> in trading volume. For the full <span className="text-white font-bold">$500</span>, that&apos;s <span className="text-white font-bold">$25,000,000</span>.[span_12](start_span)[span_12](end_span)
            </p>
          </div>{/* کارت راهنما (سبز ملایم) */}
          <div className="lg:col-span-5 bg-[#10b981]/15 border border-[#10b981]/30 rounded-3xl p-8 shadow-xl flex flex-col justify-between">
            <div>
              <p className="text-xs font-bold text-[#10b981] tracking-wider uppercase mb-3">
                IS A BONUS RIGHT FOR YOU?[span_13](start_span)[span_13](end_span)
              </p>
              <p className="text-xs lg:text-sm text-gray-200 leading-relaxed">
                Bonuses come with volume targets. If you don&apos;t plan to trade that much, skip it. Your account works exactly the same without one.[span_14](start_span)[span_14](end_span)
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}