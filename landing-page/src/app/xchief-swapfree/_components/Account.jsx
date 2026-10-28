"use client";

import Link from "next/link";
import { FiGrid, FiArrowRight } from "react-icons/fi";

export default function AccountTypes() {
  const accounts = [
    {
      id: "classic",
      name: "MT5 Classic+",
      badge: "No commission",
      subtitle: "Everyday trading, no commission",
      spread: "0.6",
      minDeposit: "$10",
      commission: "None",
      buttonText: "Choose Classic+",
      isHighlighted: true,
    },
    {
      id: "directfx",
      name: "MT5 DirectFX",
      badge: null,
      subtitle: "Tighter spreads for active traders",
      spread: "0.3",
      minDeposit: "$50",
      commission: "$2.5 per side",
      buttonText: "Choose DirectFX",
      isHighlighted: false,
    },
    {
      id: "xprime",
      name: "MT5 xPRIME",
      badge: "Raw spreads",
      subtitle: "Raw spreads for experienced traders",
      spread: "0.0",
      minDeposit: "$500",
      commission: "$3 per side",
      buttonText: "Choose xPRIME",
      isHighlighted: false,
    },
  ];

  return (
    <section className="bg-[#121614] text-white py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-[#1b221f] border border-white/10 px-3.5 py-1.5 rounded-full text-xs font-medium text-gray-300 mb-6">
            <FiGrid className="text-[#10b981]" /> Accounts
          </div>

          <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-4">
            Choose your <span className="italic font-normal text-[#10b981]">MT5</span> account
          </h2>

          <p className="text-gray-400 text-sm lg:text-base max-w-xl">
            Swap free works on three MT5 account types. Pick the one that matches how you trade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {accounts.map((acc) => (
            <div
              key={acc.id}
              className={`rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 border ${
                acc.isHighlighted
                  ? "bg-[#181d1a] border-white/10 shadow-2xl relative"
                  : "bg-[#1b221f]/40 border-white/5 hover:border-white/10"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{acc.name}</h3>
                  {acc.badge && (
                    <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-[#10b981]/20 text-[#10b981]">
                      {acc.badge}
                    </span>
                  )}
                </div>

                <p className="text-xs text-gray-400 mb-8">{acc.subtitle}</p>

                <div className="mb-8">
                  <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block mb-1">
                    SPREADS FROM
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl lg:text-5xl font-black text-white">
                      {acc.spread}
                    </span>
                    <span className="text-xs text-gray-400 font-medium">pips</span>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/5 mb-8">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400">Minimum deposit</span>
                    <span className="font-bold text-white">{acc.minDeposit}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400">Commission</span>
                    <span className="font-bold text-white">{acc.commission}</span>
                  </div>
                </div>
              </div>

              {acc.isHighlighted ? (
                <Link
                  href={`#choose-${acc.id}`}
                  className="w-full flex items-center justify-center gap-2 bg-[#10b981] hover:bg-[#059669] text-black font-bold py-3.5 px-6 rounded-full transition shadow-lg shadow-[#10b981]/20 text-sm"
                >
                  {acc.buttonText}
                  <span className="w-5 h-5 rounded-full bg-black text-[#10b981] flex items-center justify-center text-xs">
                    <FiArrowRight />
                  </span>
                </Link>
              ) : (
                <Link
                  href={`#choose-${acc.id}`}
                  className="w-full flex items-center justify-center text-xs font-semibold text-gray-300 border border-white/10 hover:bg-white/5 py-3.5 px-6 rounded-full transition"
                >
                  {acc.buttonText}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
