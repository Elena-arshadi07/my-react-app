'use client';

import React, { useState } from 'react';
import { HelpCircle, Plus, X } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Who can open a swap free account?",
      answer: "Muslim clients from countries where Islam is the state or main religion can apply. The service runs on MT5 Classic+, DirectFX and xPRIME accounts."
    },
    {
      question: "Is there a fee instead of swaps?",
      answer: "You pay your account's usual spread and, on DirectFX and xPRIME, the usual commission. Check the current swap free terms before you switch it on."
    },
    {
      question: "Which instruments are covered?",
      answer: "32 currency pairs plus gold (XAUUSD) and silver (XAGUSD). Swaps on other instruments are charged the standard way."
    },
    {
      question: "How long can I keep a position open?",
      answer: "Up to 7 days. If a position stays open longer, the swap free service switches off for that account."
    },
    {
      question: "Can I use it on MT4?",
      answer: "No. Swap free is available on MT5 accounts only, and not on PAMM accounts."
    },
    {
      question: "Is it Sharia compliant?",
      answer: "It removes interest, in the form of swaps, from covered positions, which is the main requirement most traders ask about. If you follow a particular scholar's ruling, check the terms with them before you trade."
    },
    {
      question: "Has the xChief Islamic account won any awards?",
      answer: "Yes. xChief won Best Islamic Forex Account at Forex Expo Dubai 2025, and the group holds more than 15 international awards in total."
    },
    {
      question: "Is xChief regulated?",
      answer: "Yes. Client accounts are held with xChief Ltd, licensed by the Mwali International Services Authority under license T2023379. The group also includes xChief ZA (Pty) Ltd, authorized by the FSCA in South Africa as an intermediary (FSP 54829), and xChief Central Asia Ltd, licensed by AFSA in Kazakhstan for professional clients."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-[#fbfbf9] text-black border-t border-black/5">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-12">
        
        {/* Left Side: Title and Badge */}
        <div className="lg:w-4/12 space-y-4">
          <div className="inline-flex items-center gap-1.5 border border-color-lime-500 bg-green/40 text-lime-500 text-xs px-3 py-1.5 rounded-full font-medium">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FAQ</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#111] leading-tight">
            Questions <br />
            beginners <br />
            ask us
          </h2>
        </div>

        {/* Right Side: FAQ Accordions (8 Items) */}
        <div className="lg:w-7/12 space-y-3 w-full">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                onClick={() => toggleFaq(index)}
                className={`bg-[#f2f4ef] border border-black/5 rounded-3xl p-6 transition-all cursor-pointer ${
                  isOpen ? 'shadow-sm' : 'hover:bg-[#f2f4ef]/80'
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-bold text-sm md:text-base text-[#111]">
                    {faq.question}
                  </h3>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-[#388e3c] text-white' : 'bg-black/5 text-[#111]'
                  }`}>
                    {isOpen ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </div>

                {isOpen && (
                  <div className="mt-4 pt-4 border-t border-black/5 text-xs md:text-sm text-gray-600 leading-relaxed">
                    {faq.answer ? (
                      <p>{faq.answer}</p>
                    ) : (
                      <p className="italic text-gray-400">[پاسخ این سوال را اینجا بنویسید...]</p>
                    )}
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