"use client";
import images from "./images";
import { CirclePlay, GraduationCap, Users, Trophy } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#111216]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[77px] max-w-[1400px] items-center justify-between gap-5 px-5 py-4 lg:px-10">
        {/* Logo */}
        <img  
        src={images.award4}
        alt="Xchief Logo"
        className="h-27 w-27 object-contain" />
          

        {/* Navigation */}
        <nav className="hidden items-center rounded-full border border-white/10 bg-black/70 backdrop-blur-md gap-10 py-4 px-3 md:flex">
          <a href="#demo" className="flex items-center gap-2  font-semibold text-white transition hover:text-[#9bff35]"
          >
            <CirclePlay size={16} className="text-[#9BFF35]" />
            Demo
          </a>

          <a href="#academy" className="flex items-center gap-2 text-sm font-semibold text-white transition hover:text-[#9bff35]"
          >
           <GraduationCap size={16} className="text-[#9BFF35]" />
           Academy
          </a>

          <a href="#copytrading" className="flex items-center gap-2 text-sm font-semibold text-white transition hover:text-[#9bff35]"
          >
           <Users size={16} className="text-[#9BFF35]" />
           Copy Trading
          </a>

          <a href="#awards" className="flex items-center gap-2 text-sm font-semibold text-white transition hover:text-[#9bff35]"
          >
            <Trophy size={16} className="text-[#9BFF35]" />
            Awards
          </a>
        </nav>

        {/* Language and CTA */}
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            className="hidden h-11 w-11 items-center justify-center rounded-full border border-white/15 text-sm font-bold text-white transition hover:border-[#9bff35] sm:flex"
          >
            EN
          </button>

          <a
            href="#demo"
            className="group flex min-h-[48px] items-center gap-3 rounded-full bg-[#9bff35] py-2 pl-2 pr-5 text-sm font-bold text-[#14200b] shadow-[0_0_22px_rgba(155,255,53,0.2)] transition hover:bg-[#b0ff66]"
          >
            <span> Start my free demo </span>
            

            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#17231a] text-xl text-[#9bff35] transition group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}