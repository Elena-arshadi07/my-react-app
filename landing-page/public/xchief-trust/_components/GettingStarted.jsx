import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function GettingStartedSection() {
  const steps = [
    {
      number: "1",
      title: "Apply online",
      description: "Fill in a short application on the xChief website. It takes a few minutes."
    },
    {
      number: "2",
      title: "Verify your identity",
      description: "Upload your ID in the Personal Area or the xChief app. It protects your account and your withdrawals."
    },
    {
      number: "3",
      title: "Fund your account and trade",
      description: "Deposit with a method that suits you, with no xChief fees, and trade on MT4, MT5 or the app."
    }
  ];

  return (
    <section id="getting-started" className="relative py-20 px-5 sm:px-8 lg:px-12 bg-[#101216] text-white overflow-hidden">
      
      {/* پس‌زمینه نوری ملایم */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/5 blur-[150px] pointer-events-none rounded-full -z-10" />

      <div className="max-w-[1280px] mx-auto space-y-16 text-center">
        
        {/* ================= HEADER ================= */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-white/90">
            <Sparkles className="w-4 h-4 text-[#9bff35]" />
            <span>Getting started</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]">
            Open an account in <span className="font-serif italic font-medium text-[#b2ff80]">three steps</span>
          </h2>
        </div>

        {/* ================= STEPS CARDS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {steps.map((step, idx) => (
            <div 
              key={idx}
              className="rounded-[28px] border border-white/15 bg-[#f1f0e8] p-8 text-black shadow-xl flex flex-col justify-between"
            >
              <div>
                <span className="w-10 h-10 rounded-xl bg-[#9bff35] text-black font-black flex items-center justify-center text-sm mb-6 shadow-md">
                  {step.number}
                </span>

                <h3 className="text-xl font-black text-black mb-2">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ================= BOTTOM BUTTONS ================= */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="https://my.xchief.com/registration"
            className="flex items-center gap-3 bg-[#9bff35] hover:bg-[#b4ff72] text-black font-extrabold text-sm px-8 py-4 rounded-full shadow-[0_0_30px_rgba(155,255,53,0.2)] transition"
          >
            <span>Open my account</span>
            <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center">
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </a>

          <a
            href="#demo"
            className="px-6 py-4 rounded-full border border-white/20 text-xs font-bold text-white hover:border-[#9bff35] hover:bg-white/5 transition"
          >
            Try a free demo first
          </a>
        </div>

      </div>
    </section>
  );
}