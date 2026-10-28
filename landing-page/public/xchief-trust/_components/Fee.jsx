import React from 'react';
import { Wallet, Shield, ShieldAlert, Wrench, Coins, CreditCard, Building2, Wallet2 } from 'lucide-react';

export default function FeesAndSafeguardsSection() {
  const paymentMethods = [
    {
      icon: Coins,
      name: "Crypto, including USDT",
      time: "Typical withdrawal time: Often within 24 hours",
      fee: "$0"
    },
    {
      icon: Wallet2,
      name: "Digital wallets such as Skrill and Neteller",
      time: "Typical withdrawal time: Often within 24 hours",
      fee: "$0"
    },
    {
      icon: Building2,
      name: "Bank transfer (SWIFT, SEPA, FPS)",
      time: "Typical withdrawal time: 2 to 7 days",
      fee: "$0"
    },
    {
      icon: CreditCard,
      name: "Bank cards",
      time: "Typical withdrawal time: 2 to 7 days",
      fee: "$0"
    }
  ];

  return (
    <section id="deposits-withdrawals" className="relative py-20 px-5 sm:px-8 lg:px-12 bg-[#101216] text-white overflow-hidden">
      
      {/* پس‌زمینه نوری ملایم */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[350px] bg-emerald-500/5 blur-[140px] pointer-events-none rounded-full -z-10" />

      <div className="max-w-[1280px] mx-auto space-y-12">
        
        {/* ================= HEADER ================= */}
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-white/90">
            <Wallet className="w-4 h-4 text-[#9bff35]" />
            <span>Deposits and withdrawals</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.08]">
            Your money moves <span className="font-serif italic font-medium text-[#b2ff80]">without</span> xChief fees
          </h2>

          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
            We don&apos;t charge you to deposit or to withdraw. The only fee you might see comes from your own bank, card issuer or wallet.
          </p>
        </div>

        {/* ================= TWO COLUMN GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDE: Payment Methods Table (7 cols) */}
          <div className="lg:col-span-7 rounded-[28px] border border-white/10 bg-[#f3f2eb] p-6 sm:p-8 text-black shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-black/10">
              <h3 className="text-base sm:text-lg font-extrabold text-black">Ways to fund and withdraw</h3>
              <span className="text-[10px] font-black uppercase tracking-wider text-gray-500">XCHIEF FEE</span>
            </div>

            <div className="divide-y divide-black/10">
              {paymentMethods.map((method, idx) => {
                const IconComponent = method.icon;
                return (
                  <div key={idx} className="py-5 flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-black/5 border border-black/10 flex items-center justify-center shrink-0 mt-0.5">
                        <IconComponent className="w-5 h-5 text-gray-800" />
                      </div>
                      <div>
                        <h4 className="font-extrabold text-sm text-black">{method.name}</h4>
                        <p className="text-xs text-gray-500 mt-1">{method.time}</p>
                      </div>
                    </div>
                    <span className="font-black text-lg text-black shrink-0">{method.fee}</span>
                  </div>
                );
              })}
            </div>

            <p className="mt-6 pt-4 border-t border-black/10 text-xs text-gray-500 leading-relaxed">
              Methods depend on your country. Account currencies include USD, EUR and GBP, depending on the account type.
            </p>
          </div>{/* RIGHT SIDE: Safeguards Dark Card (5 cols) */}
          <div className="lg:col-span-5 rounded-[28px] border border-white/15 bg-[#141a21] p-6 sm:p-8 shadow-2xl space-y-8">
            <h3 className="text-xl font-black text-white">Safeguards on every account</h3>

            <div className="space-y-6">
              
              {/* Safeguard 1 */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#9bff35]/10 border border-[#9bff35]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Wallet className="w-5 h-5 text-[#9bff35]" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-white">Client money kept apart</h4>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1 leading-relaxed">
                    Client funds are held separately from xChief&apos;s own money.
                  </p>
                </div>
              </div>

              {/* Safeguard 2 */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#9bff35]/10 border border-[#9bff35]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldAlert className="w-5 h-5 text-[#9bff35]" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-white">Protection against negative balances</h4>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1 leading-relaxed">
                    Measures that help stop your account from falling below zero.
                  </p>
                </div>
              </div>

              {/* Safeguard 3 */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#9bff35]/10 border border-[#9bff35]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Wrench className="w-5 h-5 text-[#9bff35]" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-white">Compensation for our technical faults</h4>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1 leading-relaxed">
                    If a technical failure on xChief&apos;s side causes you a financial loss, you are compensated under our terms.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}