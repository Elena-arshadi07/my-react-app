

// components/Header.jsx
import Image from 'next/image';
import Link from 'next/link';
import { FiClock, FiGrid, FiFileText, FiAward, FiArrowRight } from 'react-icons/fi';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#121614]/90 backdrop-blur-md border-b border-white/5 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
      
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center">
          
            <span className="text-2xl font-bold italic tracking-wider text-white">
              X<span className="text-[#10b981]">Chief</span>
            </span>
          </Link>

        
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <Link href="#how-it-works" className="flex items-center gap-2 hover:text-white transition">
              <FiClock className="text-[#10b981]" /> How it works
            </Link>
            <Link href="#accounts" className="flex items-center gap-2 hover:text-white transition">
              <FiGrid className="text-[#10b981]" /> Accounts
            </Link>
            <Link href="#rules" className="flex items-center gap-2 hover:text-white transition">
              <FiFileText className="text-[#10b981]" /> The rules
            </Link>
            <Link href="#awards" className="flex items-center gap-2 hover:text-white transition">
              <FiAward className="text-[#10b981]" /> Awards
            </Link>
          </nav>
        </div>

        
        <div className="flex items-center gap-4">
          <button className="px-3 py-1.5 rounded-lg border border-white/10 text-xs font-semibold text-gray-300 hover:bg-white/5 transition">
            EN
          </button>
          
          <Link 
            href="#open-account" 
            className="flex items-center gap-2 bg-[#10b981] hover:bg-[#059669] text-black font-semibold px-5 py-2.5 rounded-full transition shadow-lg shadow-[#10b981]/20 text-sm"
          >
            Open my account
            <span className="w-5 h-5 rounded-full bg-black text-[#10b981] flex items-center justify-center text-xs">
              <FiArrowRight />
            </span>
          </Link>
        </div>

      </div>
    </header>
  );
}