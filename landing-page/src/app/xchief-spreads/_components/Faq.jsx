'use client';
import React, { useState } from 'react';
import { HelpCircle, Plus, Minus } from 'lucide-react';

export default function FaqSection() {

  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What does spreads from 0.0 pips mean?",
      answer: "It's the lowest spread you can get on an xPRIME account, most often on major pairs like EUR/USD. Spreads float with the market and can widen around big news or when liquidity is thin. xPRIME also charges a $3 commission per side per lot."
    },
    {
      question: "Which account should I choose?",
      answer: "New to live trading? Cent lets you trade micro sizes. Classic+ suits most people and has no commission. DirectFX adds tighter spreads and copy trading for active traders. xPRIME is for experienced traders who want raw spreads and are happy to pay a commission."
    },
    {
      question: "Is there a minimum deposit?",
      answer: "Cent has none. Classic+ starts at $10, DirectFX at $50 and xPRIME at $500."
    },
    {
      question: "What leverage can I use?",
      answer: "Up to 1:500 on Cent and up to 1:1000 on Classic+, DirectFX and xPRIME. Leverage magnifies losses as well as gains, so choose a level you are comfortable with."
    },
    {
      question: "Can I use Expert Advisors or scalp?",
      answer: "Yes. Scalping and Expert Advisors are allowed on both MT4 and MT5."
    },
    {
      question: "Does xChief charge for deposits or withdrawals?",
      answer: "No, nothing either way. Your bank, card issuer or wallet may charge its own fee."
    },
    {
      question: "Has xChief won any awards?",
      answer: "Yes, more than 15 international awards. Recent ones include The Highest Value Broker Global 2026 and Best Online Forex and CFD Broker MENA 2026 at the Gazet International Awards, Best Trading Experience Broker of the Year at the ProFX Awards Dubai 2025, and Best IBs Program and Best Islamic Forex Account at Forex Expo Dubai 2025."
    },
    {
      question: "Do stocks and indices carry a commission?",
      answer: "No. Stocks and indices trade with zero commission. On DirectFX and xPRIME, the commission applies to forex and metals only. Spreads and overnight swaps still apply."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-20 px-5 sm:px-8 lg:px-12 bg-[#101216] text-white overflow-hidden">
      
    
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[550px] h-[380px] bg-emerald-500/5 blur-[140px] pointer-events-none rounded-full -z-10" />

      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* ================= LEFT SIDE: TITLE (5 cols) ================= */}
        <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-white/90">
            <HelpCircle className="w-4 h-4 text-[#9bff35]" />
            <span>FAQ</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.05]">
            What people ask before they open <span className="font-serif italic font-medium text-[#b2ff80]">an account</span>
          </h2>
        </div>

        {/* ================= RIGHT SIDE: ACCORDION LIST (7 cols) ================= */}
        <div className="lg:col-span-7 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-[24px] border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#141a21] border-[#9bff35]/40 shadow-xl"
                    : "bg-[#141a21]/60 border-white/10 hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-extrabold text-white">
                    {faq.question}
                  </span>
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? "bg-[#9bff35] text-black" : "bg-white/10 text-white"
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (<div className="px-6 pb-6 pt-0 text-sm text-gray-300 leading-relaxed border-t border-white/5 mt-2">
                    <p className="pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}