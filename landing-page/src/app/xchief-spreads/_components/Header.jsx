'use client';
import React from 'react';
import { Percent, Trophy, Layers, ArrowRight } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-3 px-4 md:px-8 bg-[#0d130e]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-wider text-white flex items-center gap-1">
            <span className="text-[#9bff35] text-3xl font-extrabold italic">X</span>Chief
          </span>
        </div>

        {/* Nav Pills Center */}
        <nav className="hidden md:flex items-center bg-[#18221c]/90 border border-white/10 rounded-full px-4 py-1.5 space-x-6 text-xs font-semibold text-gray-300">
          <a href="#accounts" className="flex items-center gap-1.5 hover:text-white transition">
            <span className="w-2 h-2 rounded-full bg-[#9bff35]"></span>
            Accounts
          </a>
          <a href="#costs" className="flex items-center gap-1.5 hover:text-white transition">
            <Percent className="w-3.5 h-3.5 text-[#9bff35]" />
            Costs
          </a>
          <a href="#platforms" className="flex items-center gap-1.5 hover:text-white transition">
            <Layers className="w-3.5 h-3.5 text-[#9bff35]" />
            Platforms
          </a>
          <a href="#awards" className="flex items-center gap-1.5 hover:text-white transition">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            Awards
          </a>
        </nav>

        {/* Right Header Buttons */}
        <div className="flex items-center gap-4">
          <span className="text-xs font-bold text-gray-300 hover:text-white cursor-pointer transition">
            EN
          </span>
          <a
            href="https://my.xchief.com/registration"
            className="bg-[#9bff35] hover:bg-[#8cee24] text-black font-extrabold text-xs px-4 py-2.5 rounded-full flex items-center gap-2 transition shadow-[0_0_15px_rgba(155,255,53,0.3)]"
          >
            <span>Open my account</span>
            <div className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </a>
        </div>

      </div>
    </header>
  );
}