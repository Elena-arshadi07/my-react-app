import React from 'react';
import { GraduationCap, BookOpen, BarChart2, ShieldAlert, Navigation, ArrowRight } from 'lucide-react';

export default function AcademyGuidesSection() {
  const guides = [
    {
      title: 'Forex basics',
      description: 'Pairs, pips and lot sizes, and what actually moves a price.',
      icon: <BookOpen className="w-5 h-5" />,
    },
    {
      title: 'Reading a chart',
      description: 'Candles, timeframes and the levels traders watch.',
      icon: <BarChart2 className="w-5 h-5" />,
    },
    {
      title: 'Managing risk',
      description: 'Stop loss orders, position size and how margin works.',
      icon: <ShieldAlert className="w-5 h-5" />,
    },
    {
      title: 'Getting around MT4 and MT5',
      description: 'Opening, changing and closing trades, step by step.',
      icon: <Navigation className="w-5 h-5" />,
    },
  ];

  return (
    <section id="academy" className="py-16 px-4 md:px-8 bg-[#fbfbf9] text-black border-t border-black/5">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-12">
        
        {/* Left Side: Title & Description */}
        <div className="lg:w-5/12 space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 bg-[#e8f2ec] text-[#2d6a4f] text-xs px-3 py-1.5 rounded-full font-medium">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>xChief Academy</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#111] leading-tight">
            Guides written for <br />
            <span className="italic font-normal text-[#388e3c]">people starting out</span>
          </h2>

          {/* Description */}
          <p className="text-s md:text-sm text-gray-600 leading-relaxed max-w-md">
            Short lessons in plain language. Read one, then try it on your demo the same day.
          </p>

          {/* Link */}
          <div className="pt-2">
            <a 
              href="https://www.xchief.com/library/"
              className="inline-flex items-center gap-1.5 text-s font-bold text-[#2d6a4f] hover:text-[#388e3c] transition-colors group"
            >
              <span>Browse the Academy</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Right Side: 4 Cards Grid */}
        <div className="lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {guides.map((guide, idx) => (
            <div 
              key={idx}
              className="bg-[#f2f4ef] rounded-3xl p-6 flex flex-col justify-between space-y-8 border border-black/5 hover:shadow-md transition-all"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-[#e3eae3] flex items-center justify-center text-[#2d6a4f]">
                {guide.icon}
              </div>

              {/* Text Content */}
              <div className="space-y-2">
                <h3 className="font-bold text-base text-[#111]">
                  {guide.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {guide.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}