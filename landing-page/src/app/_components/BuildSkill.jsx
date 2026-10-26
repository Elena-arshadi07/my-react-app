import React from 'react';
import { TrendingUp, ArrowRight } from 'lucide-react';

export default function BuildSkillsSection() {
  const steps = [
    {
      number: '1',
      title: 'Practice',
      description: 'Trade the demo with virtual funds until your process feels solid.',
      linkText: 'Start my free demo',
      linkUrl: 'https://my.xchief.com/registration',
    },
    {
      number: '2',
      title: 'Learn',
      description: 'Read short guides in xChief Academy, then try each idea on your demo.',
      linkText: 'Browse the Academy',
      linkUrl: 'https://www.xchief.com/library/',
    },
    {
      number: '3',
      title: 'Follow',
      description: 'Prefer to learn from others? Copy experienced traders or join a PAMM fund.',
      linkText: 'See copy trading',
      linkUrl: '#copytrading',
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-[#fbfbf9] text-[20px] text-green-500 border-t border-black/5">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center text-green-500 space-y-4">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 bg-[#e8f2ec] text-[#2d6a4f] text-[19px] px-3 py-1.5 rounded-full font-medium">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Your path</span>
          </div>

          {/* Title */}
          <h2 className="text-[36px] font-black font-bold tracking-tight text-black">
            Three ways to <span className="italic font-normal text-[#388e3c]">build your skills</span>
          </h2>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div 
              key={step.number}
              className="bg-[#f2f4ef] rounded-3xl p-8 flex flex-col justify-between space-y-8 border border-black/5 hover:shadow-md transition-all group"
            >
              {/* Badge Number */}
              <div className="w-9 h-9 rounded-lg bg-[#121c17] text-white font-bold flex items-center justify-center text-sm shadow-sm">
                {step.number}
              </div>

              {/* Card Body */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-[#111]">
                  {step.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Link / CTA */}
              <div className="pt-2">
                <a 
                  href={step.linkUrl}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2d6a4f] group-hover:text-[#388e3c] transition-colors"
                >
                  <span>{step.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}