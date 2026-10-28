import React from 'react';
import { Wallet, ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function AccountsSection() {
  const accounts = [
    {
      name: "Cent",
      subtitle: "For your first live trades",
      badge: null,
      spread: "0.9",
      minDeposit: "None",
      commission: "None",
      highlighted: false,
      btnText: "Open Cent"
    },
    {
      name: "Classic+",
      subtitle: "Everyday trading, no commission",
      badge: "No commission",
      spread: "0.6",
      minDeposit: "$10",
      commission: "None",
      highlighted: true,
      btnText: "Open Classic+"
    },
    {
      name: "DirectFX",
      subtitle: "Active traders and copy trading",
      badge: null,
      spread: "0.3",
      minDeposit: "$50",
      commission: "$2.5 per side",
      highlighted: false,
      btnText: "Open DirectFX"
    },
    {
      name: "xPRIME",
      subtitle: "Raw spreads for experienced traders",
      badge: "Raw spreads",
      spread: "0.0",
      minDeposit: "$500",
      commission: "$3 per side",
      highlighted: false,
      btnText: "Open xPRIME"
    }
  ];

  return (
    <section id="accounts" className="relative py-20 px-5 sm:px-8 lg:px-12 bg-[#101216] text-white overflow-hidden">
      
      {/* پس‌زمینه نوری ملایم */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/5 blur-[150px] pointer-events-none rounded-full -z-10" />

      <div className="max-w-[1280px] mx-auto space-y-12">
        
        {/* ================= HEADER ================= */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-white/90">
              <Wallet className="w-4 h-4 text-[#9bff35]" />
              <span>Accounts</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.05]">
              Pick an account, or start on a <span className="font-serif italic font-medium text-[#b2ff80]">free demo</span>
            </h2>
          </div>

          <a
            href="#compare-accounts"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-gray-400 hover:text-[#9bff35] transition shrink-0"
          >
            <span>Compare all account details</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* ================= ACCOUNTS CARDS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {accounts.map((acc, idx) => (
            <div
              key={idx}
              className={`rounded-[28px] p-6 flex flex-col justify-between transition-all duration-300 relative ${
                acc.highlighted
                  ? "bg-[#141d17] border-2 border-[#9bff35] shadow-[0_0_40px_rgba(155,255,53,0.15)] text-white"
                  : "bg-[#f1f0e8] text-black border border-transparent hover:border-black/20"
              }`}
            >
              <div>
                {/* Header Row */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className={`text-2xl font-black ${acc.highlighted ? "text-white" : "text-black"}`}>
                    {acc.name}
                  </h3>
                  {acc.badge && (
                    <span
                      className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                        acc.highlighted
                          ? "bg-[#9bff35] text-black"
                          : "bg-black/10 text-black/70"
                      }`}
                    >
                      {acc.badge}
                    </span>
                  )}
                </div>

                <p className={`text-xs min-h-[32px] ${acc.highlighted ? "text-gray-300" : "text-gray-600"}`}>
                  {acc.subtitle}
                </p>

                {/* Spreads */}
                <div className="mt-6">
                  <span className={`text-[10px] font-black uppercase tracking-wider block ${acc.highlighted ? "text-gray-400" : "text-gray-500"}`}>
                    SPREADS FROM
                  </span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className={`text-4xl font-black ${acc.highlighted ? "text-white" : "text-black"}`}>
                      {acc.spread}
                    </span>
                    <span className={`text-xs font-bold ${acc.highlighted ? "text-[#9bff35]" : "text-gray-600"}`}>
                      pips
                    </span>
                  </div>
                </div>

                {/* Account Details */}
                <div className={`mt-6 pt-4 space-y-3 text-xs border-t ${acc.highlighted ? "border-white/10" : "border-black/10"}`}>
                  <div className="flex justify-between items-center">
                    <span className={acc.highlighted ? "text-gray-400" : "text-gray-500"}>Minimum deposit</span>
                    <span className={`font-extrabold ${acc.highlighted ? "text-white" : "text-black"}`}>{acc.minDeposit}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className={acc.highlighted ? "text-gray-400" : "text-gray-500"}>Commission</span>
                    <span className={`font-extrabold ${acc.highlighted ? "text-white" : "text-black"}`}>{acc.commission}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8">
                <a
                  href="https://my.xchief.com/registration"
                  className={`w-full py-3.5 px-5 rounded-full font-extrabold text-xs flex items-center justify-center gap-2 transition ${
                    acc.highlighted
                      ? "bg-[#9bff35] hover:bg-[#b4ff72] text-black shadow-lg shadow-lime-500/20"
                      : "bg-black/5 hover:bg-black/10 text-black border border-black/10"
                  }`}
                >
                  <span>{acc.btnText}</span>
                  {acc.highlighted && (
                    <span className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center">
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  )}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ================= BOTTOM FOOTER INFO ================= */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p className="flex items-center gap-2 text-center md:text-right">
            <span className="text-[#9bff35] font-bold">%</span>
            <span>Swap free option, Islamic accounts with no overnight interest are available on MT5 Classic+, DirectFX and xPRIME for eligible clients.</span>
          </p>

          <div className="flex items-center gap-2 shrink-0">
            <CheckCircle2 className="w-4 h-4 text-[#9bff35]" />
            <span>Not ready yet? Practice on a free demo with virtual funds and live prices.</span>
            <a href="#demo" className="text-[#9bff35] font-bold underline hover:text-white transition">
              Open a free demo
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}