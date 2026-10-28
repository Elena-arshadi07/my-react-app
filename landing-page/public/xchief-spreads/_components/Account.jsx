'use client';

import React from 'react';
import { ArrowRight, Wallet, CheckCircle2 } from 'lucide-react';

export default function AccountsSection() {
  const accountData = [
    {
      title: 'Cent',
      bestFor: 'First live trades with small balances',
      minDeposit: 'None',
      spreadsFrom: '0.9 pips',
      commission: 'None',
      leverage: '1:500',
      openOrders: '200',
      stopOut: '30%',
      markets: 'Forex (26), gold and silver',
      platforms: 'MT4 and mobile',
      swapFree: 'No',
      copyTrading: 'No',
      currencies: 'USD',
      btnText: 'Open Cent',
      isHighlighted: false,
    },
    {
      title: 'Classic+',
      bestFor: 'Everyday trading with no commission',
      minDeposit: '$10',
      spreadsFrom: '0.6 pips',
      commission: 'None',
      leverage: '1:1000',
      openOrders: '500',
      stopOut: '30%',
      markets: 'Forex (32), metals, commodities, indices',
      platforms: 'MT4, MT5 and mobile',
      swapFree: 'Yes, on MT5',
      copyTrading: 'Yes',
      currencies: 'USD, EUR',
      btnText: 'Open Classic+',
      isHighlighted: false,
    },
    {
      title: 'DirectFX',
      bestFor: 'Active traders and copy trading',
      minDeposit: '$50',
      spreadsFrom: '0.3 pips',
      commission: '$2.5',
      leverage: '1:1000',
      openOrders: '1,000',
      stopOut: '30%',
      markets: 'Forex (32), metals, commodities, indices',
      platforms: 'MT4, MT5 and mobile',
      swapFree: 'Yes, on MT5',
      copyTrading: 'Yes',
      currencies: 'USD, EUR, GBP',
      btnText: 'Open DirectFX',
      isHighlighted: false,
    },
    {
      title: 'xPRIME',
      badge: 'Raw spreads',
      bestFor: 'Experienced traders who want raw spreads',
      minDeposit: '$500',
      spreadsFrom: '0.0 pips',
      commission: '$3',
      leverage: '1:1000',
      openOrders: 'No limit',
      stopOut: '50%',
      markets: 'Forex (32), metals (9), commodities, indices, US stocks (95)',
      platforms: 'MT5 and mobile',
      swapFree: 'Yes, on MT5',
      copyTrading: 'Yes',
      currencies: 'USD, EUR, GBP',
      btnText: 'Open xPRIME',
      isHighlighted: true, // ستون سبز کمرنگ
    },
  ];

  return (
    <section id="accounts" className="py-20 px-4 md:px-8 bg-[#eae5d9] text-[#111]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="space-y-4 max-w-4xl">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 bg-[#e2edd8] border border-black/5 text-gray-800 text-xs px-3.5 py-1.5 rounded-full font-bold shadow-sm">
            <Wallet className="w-4 h-4 text-[#2d6a36]" />
            <span>Accounts</span>
          </div>

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1]">
            Four accounts. Pick the one that <span className="text-[#2d6a36] italic font-serif font-normal">fits</span> how you trade.
          </h2>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-gray-600 font-medium max-w-2xl">
            Every account gets market execution, trades from 0.01 lots and the same A Book STP routing. The difference is how you pay for it.
          </p>
        </div>

        {/* ================= COMPARISON TABLE CONTAINER ================= */}
        <div className="bg-[#f2f4ef] rounded-[32px] p-4 sm:p-6 md:p-8 border border-black/5 shadow-sm overflow-x-auto">
          
          <table className="w-full text-left border-collapse min-w-[800px]">
            {/* Table Header Row */}
            <thead>
              <tr className="border-b border-black/5">
                <th className="py-6 px-4 w-1/5"></th>
                {accountData.map((acc, idx) => (
                  <th
                    key={idx}
                    className={`py-6 px-4 w-1/5 vertical-align-top ${
                      acc.isHighlighted ? 'bg-[#e4ebd9]/80 rounded-t-2xl' : ''
                    }`}
                  ><div className="space-y-2">
                      {acc.badge ? (
                        <span className="inline-block bg-[#9bff35] text-black text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                          {acc.badge}
                        </span>
                      ) : (
                        <div className="h-6" /> // Empty placeholder height for alignment
                      )}
                      <h3 className="text-2xl font-black text-[#111]">{acc.title}</h3>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-black/5 text-sm">
              
              {/* Row: Best for */}
              <tr>
                <td className="py-5 px-4 font-bold text-gray-500 text-xs">Best for</td>
                {accountData.map((acc, idx) => (
                  <td key={idx} className={`py-5 px-4 text-xs font-medium text-gray-700 leading-relaxed ${acc.isHighlighted ? 'bg-[#e4ebd9]/80' : ''}`}>
                    {acc.bestFor}
                  </td>
                ))}
              </tr>

              {/* Row: Minimum deposit */}
              <tr>
                <td className="py-5 px-4 font-bold text-gray-500 text-xs">Minimum deposit</td>
                {accountData.map((acc, idx) => (
                  <td key={idx} className={`py-5 px-4 font-extrabold text-base text-[#111] ${acc.isHighlighted ? 'bg-[#e4ebd9]/80' : ''}`}>
                    {acc.minDeposit}
                  </td>
                ))}
              </tr>

              {/* Row: Spreads from */}
              <tr>
                <td className="py-5 px-4 font-bold text-gray-500 text-xs">Spreads from</td>
                {accountData.map((acc, idx) => (
                  <td key={idx} className={`py-5 px-4 font-black text-lg text-[#111] ${acc.isHighlighted ? 'bg-[#e4ebd9]/80 text-[#2d6a36]' : ''}`}>
                    {acc.spreadsFrom}
                  </td>
                ))}
              </tr>

              {/* Row: Commission per side, per lot */}
              <tr>
                <td className="py-5 px-4 font-bold text-gray-500 text-xs">Commission per side, per lot</td>
                {accountData.map((acc, idx) => (
                  <td key={idx} className={`py-5 px-4 font-semibold text-gray-800 ${acc.isHighlighted ? 'bg-[#e4ebd9]/80' : ''}`}>
                    {acc.commission}
                  </td>
                ))}
              </tr>

              {/* Row: Maximum leverage */}
              <tr>
                <td className="py-5 px-4 font-bold text-gray-500 text-xs">Maximum leverage</td>
                {accountData.map((acc, idx) => (
                  <td key={idx} className={`py-5 px-4 font-semibold text-gray-800 ${acc.isHighlighted ? 'bg-[#e4ebd9]/80' : ''}`}>
                    {acc.leverage}
                  </td>
                ))}
              </tr>

              {/* Row: Maximum open orders */}
              <tr>
                <td className="py-5 px-4 font-bold text-gray-500 text-xs">Maximum open orders</td>
                {accountData.map((acc, idx) => (
                  <td key={idx} className={`py-5 px-4 font-semibold text-gray-800 ${acc.isHighlighted ? 'bg-[#e4ebd9]/80' : ''}`}>
                    {acc.openOrders}
                  </td>
                ))}
              </tr>

              {/* Row: Stop out level */}
              <tr>
                <td className="py-5 px-4 font-bold text-gray-500 text-xs">Stop out level</td>
                {accountData.map((acc, idx) => (
                  <td key={idx} className={`py-5 px-4 font-semibold text-gray-800 ${acc.isHighlighted ? 'bg-[#e4ebd9]/80' : ''}`}>
                    {acc.stopOut}
                  </td>
                ))}
              </tr>

              {/* Row: Markets */}
              <tr>
                <td className="py-5 px-4 font-bold text-gray-500 text-xs">Markets</td>
                {accountData.map((acc, idx) => (<td key={idx} className={`py-5 px-4 text-xs font-medium text-gray-700 ${acc.isHighlighted ? 'bg-[#e4ebd9]/80' : ''}`}>
                    {acc.markets}
                  </td>
                ))}
              </tr>

              {/* Row: Platforms */}
              <tr>
                <td className="py-5 px-4 font-bold text-gray-500 text-xs">Platforms</td>
                {accountData.map((acc, idx) => (
                  <td key={idx} className={`py-5 px-4 text-xs font-medium text-gray-700 ${acc.isHighlighted ? 'bg-[#e4ebd9]/80' : ''}`}>
                    {acc.platforms}
                  </td>
                ))}
              </tr>

              {/* Row: Swap free option */}
              <tr>
                <td className="py-5 px-4 font-bold text-gray-500 text-xs">Swap free option</td>
                {accountData.map((acc, idx) => (
                  <td key={idx} className={`py-5 px-4 text-xs font-semibold text-gray-800 ${acc.isHighlighted ? 'bg-[#e4ebd9]/80' : ''}`}>
                    {acc.swapFree}
                  </td>
                ))}
              </tr>

              {/* Row: Copy trading */}
              <tr>
                <td className="py-5 px-4 font-bold text-gray-500 text-xs">Copy trading</td>
                {accountData.map((acc, idx) => (
                  <td key={idx} className={`py-5 px-4 text-xs font-semibold text-gray-800 ${acc.isHighlighted ? 'bg-[#e4ebd9]/80' : ''}`}>
                    {acc.copyTrading}
                  </td>
                ))}
              </tr>

              {/* Row: Account currencies */}
              <tr>
                <td className="py-5 px-4 font-bold text-gray-500 text-xs">Account currencies</td>
                {accountData.map((acc, idx) => (
                  <td key={idx} className={`py-5 px-4 text-xs font-semibold text-gray-800 ${acc.isHighlighted ? 'bg-[#e4ebd9]/80' : ''}`}>
                    {acc.currencies}
                  </td>
                ))}
              </tr>

              {/* Row: Action Buttons */}
              <tr>
                <td className="py-6 px-4"></td>
                {accountData.map((acc, idx) => (
                  <td
                    key={idx}
                    className={`py-6 px-4 ${
                      acc.isHighlighted ? 'bg-[#e4ebd9]/80 rounded-b-2xl' : ''
                    }`}
                  >
                    {acc.isHighlighted ? (
                      <a
                        href="https://my.xchief.com/registration"
                        className="bg-[#9bff35] hover:bg-[#8cee24] text-black font-extrabold text-xs px-5 py-3 rounded-full flex items-center justify-between shadow-md transition group"
                      >
                        <span>{acc.btnText}</span>
                        <div className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                          <ArrowRight className="w-3 h-3" />
                        </div>
                      </a>
                    ) : (
                      <a
                        href="https://my.xchief.com/registration"
                        className="text-xs font-bold text-gray-900 hover:text-black transition inline-flex items-center gap-1"
                      >
                        <span>{acc.btnText}</span>
                      </a>
                    )}
                  </td>
                ))}
              </tr>

            </tbody>
          </table>

          {/* Bottom link inside table container */}
          <div className="pt-4 text-right">
            <a href="#contract" className="text-xs font-bold text-[#2d6a36] hover:underline inline-flex items-center gap-1">
              <span>Contract specifications</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Footnote text below table */}
        <p className="text-[11px] text-gray-500 max-w-4xl leading-relaxed">
          Leverage magnifies losses as well as gains.Margin requirements vary by instrument. Commission is shown for USD accounts, applies in the same amount on EUR and GBP accounts, and covers forex and metals only. Stocks and indices carry no commission.
        </p>

      </div>
    </section>
  );
}