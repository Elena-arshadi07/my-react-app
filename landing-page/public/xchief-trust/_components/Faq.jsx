'use client';
import React, { useState } from 'react';
import { HelpCircle, Plus, Minus } from 'lucide-react';

export default function FaqSection() {

  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Is xChief regulated?",
      answer: "Yes. Client accounts are held with xChief Ltd, licensed by the Mwali International Services Authority (license T2023379). The group also includes xChief ZA (Pty) Ltd, authorized by the FSCA in South Africa as an intermediary (FSP 54829), and xChief Central Asia Ltd, licensed by AFSA in Kazakhstan for professional clients."
    },
    {
      question: "What does A Book STP mean for me?",
      answer: "Your orders go to external liquidity providers instead of a dealing desk. Nobody at xChief takes the opposite side of your trade."
    },
    {
      question: "Are there fees on deposits or withdrawals?",
      answer: "Not from xChief. Your bank, card issuer or wallet provider may charge its own fee."
    },
    {
      question: "How fast are withdrawals?",
      answer: "Crypto and digital wallets are often processed within 24 hours. Bank transfers and cards can take 2 to 7 days."
    },
    {
      question: "Can I try xChief before I deposit?",
      answer: "Yes. Open a free demo with virtual funds and live prices, then move to a live account whenever you're ready."
    },
    {
      question: "Is support open on weekends?",
      answer: "Yes. Support runs 24/7 in 20+ languages, by live chat, Telegram, WhatsApp, Viber, email and phone."
    },
    {
      question: "Has xChief won any awards?",
      answer: "Yes, more than 15 international awards. Recent ones include The Highest Value Broker Global 2026 and Best Online Forex and CFD Broker MENA 2026 at the Gazet International Awards, Best Trading Experience Broker of the Year at the ProFX Awards Dubai 2025, and Best IBs Program and Best Islamic Forex Account at Forex Expo Dubai 2025."
    },
    {
      question: "Which platforms can I trade on?",
      answer: "MetaTrader 4, MetaTrader 5, WebTerminal in your browser and the xChief app for iOS and Android. Cent runs on MT4, Classic+ and DirectFX on MT4 and MT5, and xPRIME on MT5."
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