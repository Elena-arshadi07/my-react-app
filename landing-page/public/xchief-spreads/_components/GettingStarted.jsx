'use client';

import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function GettingStartedSection() {
  const steps = [
    {
      step: '1',
      title: 'Apply online',
      description: 'Fill in a short application, then verify your identity in the Personal Area.',
    },
    {
      step: '2',
      title: 'Choose your account',
      description: 'Pick Cent, Classic+, DirectFX or xPRIME. You can open more than one.',
    },
    {
      step: '3',
      title: 'Fund and trade',
      description: 'Deposit with no xChief fees and start on MT4, MT5 or the app.',
    },
  ];

  return (
    <section id="getting-started" className="py-20 px-4 md:px-8 bg-[#eae5d9] text-[#111] border-t border-black/5">
      <div className="max-w-7xl mx-auto space-y-12 text-center">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="space-y-4 max-w-2xl mx-auto">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 bg-[#e2edd8] border border-black/5 text-gray-800 text-xs px-3.5 py-1.5 rounded-full font-bold shadow-sm">
            <Sparkles className="w-4 h-4 text-[#2d6a36]" />
            <span>Getting started</span>
          </div>

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1]">
            Start trading in <span className="text-[#2d6a36] italic font-serif font-normal">three steps</span>
          </h2>
        </div>

        {/* ================= 3 CARDS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {steps.map((item, index) => (
            <div 
              key={index}
              className="bg-[#f2f4ef] border border-black/5 rounded-[28px] p-6 md:p-8 flex flex-col justify-between space-y-6 shadow-sm"
            >
              {/* Step Number Badge */}
              <div className="w-9 h-9 rounded-xl bg-[#e2edd8] border border-black/5 flex items-center justify-center font-black text-sm text-[#2d6a36]">
                {item.step}
              </div>

              {/* Text Info */}
              <div className="space-y-3">
                <h3 className="text-xl font-black text-[#111] tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ================= BOTTOM ACTION BUTTONS ================= */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary Neon Button */}
          <a
            href="https://my.xchief.com/registration"
            className="w-full sm:w-auto bg-[#9bff35] hover:bg-[#8cee24] text-black font-extrabold text-sm px-8 py-4 rounded-full flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(155,255,53,0.3)] transition transform hover:-translate-y-0.5"
          >
            <span>Open my account</span>
            <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* Secondary Demo Button */}
          <a
            href="https://my.xchief.com/registration"
            className="w-full sm:w-auto bg-[#f2f4ef] hover:bg-[#e4ebd9] border border-black/10 text-black font-extrabold text-sm px-8 py-4 rounded-full transition text-center"
          >
            Try a free demo first
          </a>
        </div>

      </div>
    </section>
  );
}