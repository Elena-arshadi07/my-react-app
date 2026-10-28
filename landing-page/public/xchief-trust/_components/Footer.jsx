"use client";
import React from 'react';
import images from "./images";
export default function Footer() {
  return (
    <footer className="bg-[#0b100e] text-gray-400 py-16 px-4 md:px-8 border-t border-white/5 text-xs">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Top Row: Logo & Navigation Links */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/10">
          {/* Logo */}
          <div className="text-white font-black text-xl tracking-tight flex items-center gap-1">
            <img  
        src={images.award4}
        alt="Xchief Logo"
        className="h-30 w-30 object-contain" />
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-gray-300">
            <a href="https://www.xchief.com/files/documents/Client_Agreement_xChief_Ltd.pdf" className="hover:text-white transition-colors">Client Agreement</a>
            <a href="https://www.xchief.com/files/documents/Risk_Disclosure_Notice_xChief_Ltd.pdf" className="hover:text-white transition-colors">Risk Disclosure Notice</a>
            <a href="https://www.xchief.com/files/documents/Order_Execution_Policy_xChief_Ltd.pdf" className="hover:text-white transition-colors">Order Execution Policy</a>
            <a href="https://www.xchief.com/about/privacy/" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="https://www.xchief.com/about/privacy/" className="hover:text-white transition-colors">Cookie Policy</a>
            <a href="https://www.xchief.com/files/documents/Complaints_Handling_Procedure_xChief_Ltd.pdf" className="hover:text-white transition-colors">Complaints</a>
          </div>
        </div>

        {/* Risk Warning Box */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 text-gray-300 leading-relaxed text-[13px]">
          <span className="font-bold text-[16px] text-white">Risk warning:</span> Forex and CFDs are complex leveraged products. Leverage magnifies losses as well as gains, and you can lose all of the money in your account. These products are not suitable for everyone, so make sure you understand how they work and can afford the risk before you trade. Past performance is not a reliable indicator of future results.
        </div>

        {/* Regulatory Text Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[15px] leading-relaxed text-gray-400">
          <div>
            Client accounts are held with xChief Ltd, registered in the Union of the Comoros (company number HY00923433) and licensed by the Mwali International Services Authority, license T2023379. Registered office: Bonovo Road, Fomboni, Island of Moheli, Comoros.
          </div>
          <div>
            xChief ZA (Pty) Ltd is an authorized financial services provider regulated by the Financial Sector Conduct Authority of South Africa (FSP 54829). It acts only as an intermediary and never as the counterparty to client trades. xChief Central Asia Ltd is licensed by the Astana Financial Services Authority and serves professional clients only.
          </div>
        </div>

        {/* Jurisdictional Disclaimer */}
        <div className="text-[13px] leading-relaxed text-gray-400">
          This page is not directed at residents of any country where its use would break local law, and<br /> xChief does not offer its services there. Services are for people aged 18 and over.
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-white/5 text-[11px] text-gray-500">
          © 2026 xChief. All rights reserved.
        </div>

      </div>
    </footer>
  );
}