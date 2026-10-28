'use client';

import React, { useState } from 'react';
import { HelpCircle, Plus, X } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Is the demo account really free?",
      answer: "Yes. It's free and runs on virtual funds, so there is nothing to deposit and no card to add."
    },
    {
      question: "Are demo prices real?",
      answer: "Yes, the demo uses live market prices. Live trading can still feel different, and fills on a live account can differ from the demo."
    },
    {
      question: "How do I move from demo to live?",
      answer: "Open a live account from your Personal Area whenever you're ready. It only takes a few minutes."
    },
    {
      question: "Do I need experience to start?",
      answer: "No. The demo and the Academy are made for beginners. Start there and take it one step at a time."
    },
    {
      question: "What is copy trading?",
      answer: "You choose traders to follow, and their trades are copied to your account in the amounts you set. You can change your settings or stop at any time."
    },
    {
      question: "What is a PAMM account?",
      answer: "A PAMM account pools money from investors into a fund traded by a manager. Results are shared in proportion to each investor's allocation, and the manager takes a performance fee set in the fund's terms."
    },
    {
      question: "How do I verify my account?",
      answer: "Yes. You take on the same market risk as the trader or manager you follow. Only allocate money you can afford to lose."
    },
    {
      question: "What is the minimum deposit?",
      answer: "Yes, more than 15 international awards. Recent ones include The Highest Value Broker Global 2026 and Best Online Forex and CFD Broker MENA 2026 at the Gazet International Awards, Best Trading Experience Broker of the Year at the ProFX Awards Dubai 2025, and Best IBs Program and Best Islamic Forex Account at Forex Expo Dubai 2025."
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