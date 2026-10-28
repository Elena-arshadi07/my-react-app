

// components/ClaimSteps.jsx
import Link from 'next/link';
import { FiList, FiArrowRight } from 'react-icons/fi';

export default function ClaimSteps() {
  const steps = [
    {
      step: '1',
      title: 'Apply online',
      description: 'Fill in a short application to create your Personal Area.',
    },
    {
      step: '2',
      title: 'Verify your identity',
      description: 'Upload your ID in the Personal Area or the xChief app.',
    },
    {
      step: '3',
      title: 'Open your account',
      description: 'Choose Classic+, DirectFX or xPRIME.',
    },
    {
      step: '4',
      title: 'Deposit and tick the box',
      description: 'Deposit $50 or more and tick Enroll Welcome Bonus. It can’t be added later.',
    },
  ];

  return (
    <section className="bg-[#121614] text-white py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* هدر بخش: نشانگر و عنوان اصلی */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#1b221f] border border-white/10 px-3.5 py-1.5 rounded-full text-xs font-medium text-gray-300 mb-6">
            <FiList className="text-[#10b981]" /> How to claim[span_1](start_span)[span_1](end_span)
          </div>

          <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-4">
            Claim it in <span className="italic font-normal text-[#10b981]">four steps</span>[span_2](start_span)[span_2](end_span)
          </h2>
        </div>

        {/* کارت‌های ۴ مرحله‌ای */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((item) => (
            <div
              key={item.step}
              className="bg-[#181d1a] border border-white/10 rounded-3xl p-7 flex flex-col justify-between shadow-xl relative"
            >
              <div>
                {/* شماره مرحله با پس‌زمینه سبز */}
                <div className="w-10 h-10 rounded-xl bg-[#10b981] text-black font-bold text-sm flex items-center justify-center mb-6 shadow-lg shadow-[#10b981]/20">
                  {item.step}[span_3](start_span)[span_3](end_span)
                </div>

                {/* عنوان مرحله */}
                <h3 className="text-lg font-bold text-white mb-3">
                  {item.title}[span_4](start_span)[span_4](end_span)
                </h3>

                {/* توضیحات مرحله */}
                <p className="text-xs text-gray-400 leading-relaxed">
                  {item.description}[span_5](start_span)[span_5](end_span)
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* دکمه‌ها و لینک‌های پایین بخش */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link 
            href="#claim" 
            className="flex items-center gap-2 bg-[#10b981] hover:bg-[#059669] text-black font-bold px-8 py-4 rounded-full transition shadow-lg shadow-[#10b981]/20 text-sm"
          >
            Claim my welcome offer[span_6](start_span)[span_6](end_span)
            <span className="w-5 h-5 rounded-full bg-black text-[#10b981] flex items-center justify-center text-xs">
              <FiArrowRight />
            </span>
          </Link>

          <Link 
            href="#no-bonus" 
            className="text-xs font-semibold text-gray-300 hover:text-white transition px-4 py-2"
          >
            Or open an account without the bonus →[span_7](start_span)[span_7](end_span)
          </Link>
        </div>

      </div>
    </section>
  );
}