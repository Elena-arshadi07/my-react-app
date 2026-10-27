"use client";
import React from 'react';
import { ListOrdered, ArrowRight } from 'lucide-react';

export default function DemoFourSteps() {
   const steps = [
    {
      number: '1',
      title: 'Request your demo',
      description: 'Share your name, email and country on the xChief website. That\'s all we need.',
    },
    {
      number: '2',
      title: 'Check your inbox',
      description: 'Your MT4 or MT5 demo account details arrive by email.',
    },
    {
      number: '3',
      title: 'Open the platform',
      description: 'Download MT4 or MT5, or trade in your browser with WebTerminal.',
    },
    {
      number: '4',
      title: 'Practice, then decide',
      description: 'Learn at your own pace and go live only when you want to.',
    },
  ];

  return (
    <section  className="py-20 px-4 md:px-8 bg-[#fbfbf9] text-black border-t border-black/5">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 bg-[#e8f2ec] text-[#2d6a4f] text-xs px-3 py-1.5 rounded-full font-medium">
            <ListOrdered className="w-3.5 h-3.5" />
            <span>How it works</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#111]">
            Your demo in <span className="italic font-normal text-[#388e3c]">four steps</span>
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div 
              key={step.number}
              className="bg-[#f2f4ef] rounded-3xl p-6 md:p-8 flex flex-col justify-between space-y-8 border border-black/5 hover:shadow-md transition-all"
            >
              {/* Step Number Badge */}
              <div className="w-11 h-11 rounded-[15px] bg-lime-500 text-black text-[15px] font-bold flex items-center justify-center text-sm shadow-sm">
                {step.number}
              </div>

              {/* Card Body */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-[#111]">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA and Caption */}
        <div className="flex flex-col items-center space-y-4 pt-6">
          <a
          href="https://my.xchief.com/registration"
          target="_blank"
          rel="noopener noreferrer"
           className="bg-lime-600 hover:bg-lime-300 text-black font-bold py-3.5 px-8 rounded-full flex items-center gap-4 transition-all group shadow-lg shadow-lime-500/10 cursor-pointer">
            <span className="text-sm">Start my free demo</span>
            <div className="w-7 h-7 bg-black rounded-full flex items-center justify-center text-white group-hover:translate-x-0.5 transition-transform">
              <ArrowRight className="w-4 h-4" />
            </div>
          </a>

          <p className="text-s -translate-x-8 text-gray-500 text-center">
            Practice on your phone too, with the MetaTrader 4 and 5 mobile apps.
          </p>
        </div>

      </div>
    </section>
  
  );
}