"use client";
import React from 'react';
import { Trophy, ArrowRight, Users } from 'lucide-react';

export default function AwardsSection() {

  const awardsList = [
    {
      year: '2026',
      subtitle: 'GAZET INTERNATIONAL AWARDS 2026',
      title: 'The Highest Value Broker, Global',
      image: '/images/award-highest-value-broker-2026.webp',
    },
    {
      year: '2026',
      subtitle: 'GAZET INTERNATIONAL AWARDS 2026',
      title: 'Best Online Forex and CFD Broker, MENA',
      image: '/images/award-best-online-broker-mena-2026.webp', 
    },
    {
      year: '2025',
      subtitle: 'PROFX AWARDS, DUBAI 2025',
      title: 'Best Trading Experience Broker of the Year',
      image: '/images/award-best-trading-experience-2025.webp', 
    },
    
  ];

  return (
    <section id="awards" className="py-19 px-4 md:px-6 bg-[#eae5d9] text-[#111] border-t border-black/5">
      <div className="max-w-5xl mx-auto space-y-13">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="text-center space-y-5 max-w-7xl mx-auto">
          {/* Badge Top */}
          <div className="inline-flex items-center gap-2 bg-[#f0f1eb] border border-[#a0522d] text-[#a0522d] text-xs md:text-sm px-4 py-1.5 rounded-full font-semibold shadow-sm h-[30px]">
            <Trophy className="w-5 h-5 text-amber-600" />
            <span>Awards and recognition</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-black">
            Recognized worldwide. <br />  
            <span className="text-[#a0522d]/100 italic text-[40px] md:text-[50px]">15+</span> international awards.
          </h2>

          {/* Subtitle */}
          <p className="text-xs md:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Industry judges in Dubai, Abu Dhabi and Egypt have recognized xChief for value, trading experience, its Islamic account and its partner program. Here are some of the trophies, each with the event that awarded it.
          </p>
        </div>

        {/* ================= HERO BANNER CARD ================= */}
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-[57px] border border-black/5 shadow-sm transition-all flex-col flex  md:h-80 rounded-2xl justify-between space-y-5 group ">
            <div className="relative w-full h-64 md:h-80 rounded-2x1 ">
              <img 
                src="/images/awards-trophy-wall (3).webp" 
                alt="xChief Trophies" 
                className="w-full h-full object-cover rounded-[42px] -translate-y-6 object-center"
              />
              
            
              
              {/* Overlay Banner inside Main Image */}
              <div className="absolute -bottom-4 left-4 right-4 bg-[#18221c]/100 backdrop-blur-md text-white w-[460px] translate-x-56 rounded-full p-4 md:p-5 flex items-center gap-4">
                <div className="flex h-9 w-12 shrink-0 items-center justify-center">
                  <svg
                    width="46"
                    height="46"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      stroke="#D9B45B"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M39 82 Q22 62 29 32" />
                      <path d="M30 43 Q18 39 20 30 Q30 32 30 43Z" fill="#D9B45B" />
                      <path d="M29 53 Q16 49 19 40 Q29 42 29 53Z" fill="#D9B45B" />
                      <path d="M31 63 Q18 60 22 50 Q31 52 31 63Z" fill="#D9B45B" />
                      <path d="M35 72 Q23 70 27 60 Q35 62 35 72Z" fill="#D9B45B" />
                      <path d="M31 35 Q22 28 27 20 Q34 26 31 35Z" fill="#D9B45B" />
                      <path d="M35 28 Q29 18 36 12 Q41 21 35 28Z" fill="#D9B45B" />
                      <path d="M61 82 Q78 62 71 32" />
                      <path d="M70 43 Q82 39 80 30 Q70 32 70 43Z" fill="#D9B45B" />
                      <path d="M71 53 Q84 49 81 40 Q71 42 71 53Z" fill="#D9B45B" />
                      <path d="M69 63 Q82 60 78 50 Q69 52 69 63Z" fill="#D9B45B" />
                      <path d="M65 72 Q77 70 73 60 Q65 62 65 72Z" fill="#D9B45B" />
                      <path d="M69 35 Q78 28 73 20 Q66 26 69 35Z" fill="#D9B45B" />
                      <path d="M65 28 Q71 18 64 12 Q59 21 65 28Z" fill="#D9B45B" />
                    </g>
                    <text
                      x="50"
                      y="56"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="#E8C778"
                      fontSize="25"
                      fontWeight="700"
                    >
                      15+
                    </text>
                  </svg>
                </div>
                <div>
                  <h4 className="font-extrabold text-sm md:text-base text-white">International awards</h4>
                  <p className="text-[11px] md:text-xs text-[#E8C778]">From industry events in the UAE, Egypt and beyond, 2024 to 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  
      {/* ================= 3 CARDS GRID (۳ کارت در یک خط برای ردیف بالا) ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-50 text-[#a0522d] -translate-x-18 max-w-7xl mx-auto">
          {awardsList.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#f2f4ef] border border-black/5 shadow-sm transition-all rounded-[28px] w-[370px] flex flex-col space-x-7 justify-between space-y-9 group"
            >
              {/* Image Frame with Year Badge */}
              <div className="relative w-full h-64 md:h-72 rounded-2xl overflow-hidden bg-gray-200 border border-black/5">
                <div className="absolute top-3 left-3 z-10 bg-black/70 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/10">
                  <Trophy className="w-3.5 h-3.5 text-amber-400" />
                  <span>{item.year}</span>
                </div>
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Text Description */}
              <div className="space-y-1.5 px-1">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">
                  {item.subtitle}
                </span>
                <h3 className="text-base font-black text-[#111] leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* ================= TWO CARDS SIDE BY SIDE (ردیف پایین: مصر و دبی کنار هم) ================= */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Egypt */}
          <div className="bg-[#f2f4ef] border border-black/5 rounded-[28px]  space-y-5 -translate-x-27 shadow-sm">
            <div className="relative w-full h-64 md:h-72 rounded-2xl overflow-hidden bg-gray-200 border border-black/5">
              <div className="absolute top-3 left-3 z-10 bg-black/70 backdrop-blur-md -translate-y-19 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/10">
                <Trophy className="w-3.5 h-3.5 text-amber-400" />
                <span>2025</span>
              </div>
              <img 
                src="/images/award-market-transformer-2025.webp" 
                alt="Market Transformer of the Year" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="px-1 space-y-1.5">
              <span className="text-[10px] font-bold text-[#a0522d] uppercase -translate-y-3 translate-x-5 tracking-wider block">
                SMART VISION SUMMIT, EGYPT 2025
              </span>
              <h3 className="text-base md:text-lg -translate-y-3 translate-x-5 font-black text-[#111]">Market Transformer of the Year</h3>
            </div>
          </div>

          {/* Card 2: Dubai / Islamic */}
          <div className="bg-white border border-black/5 rounded-[28px]  space-y-5 -translate-x-17 w-[690px] shadow-sm">
            <div className="relative w-full h-64 md:h-72 rounded-2xl overflow-hidden bg-gray-200 border border-black/5">
              <div className="absolute top-3 left-3 z-10 bg-black/70 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/10">
                <Trophy className="w-3.5 h-3.5 text-amber-400" />
                <span>2025</span>
              </div>
              <img 
                src="/images/award-forex-expo-dubai-2025.webp" 
                alt="Best IBs Program & Islamic Account" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 px-1">
              <div>
                <span className="text-[9px] font-bold  translate-x-9 uppercase text-[#a0522d] -translate-y-3 tracking-wider block">
                  FOREX EXPO DUBAI 2025
                </span>
                <h3 className="text-sm md:text-base text-[10px] translate-x-9 font-black text-[#111]">Best IBs Program</h3>
              </div>
              <div>
                <span className="text-[9px] font-bold text-gray-500 uppercase tracking-wider block opacity-0">
                  DUBAI 2025
                </span>
                <h3 className="text-sm md:text-base font-black translate-x-9 text-[#111]">Best Islamic Forex Account</h3>
              </div>
            </div>
          </div>

        </div>

        {/* ================= BOTTOM CTA ================= */}
        <div className="pt-8 flex flex-col items-center w-[300px] translate-x-79 space-y-4 text-center">
          {/* Main Neon Green Pill Button */}
          <a 
            href="https://my.xchief.com/registration"
            className="w-full max-w-lg bg-green-500 hover:bg-green-500 text-black font-extrabold text-sm md:text-base py-4 px-8 rounded-full flex items-center justify-between shadow-lg shadow-lime-500/20 transition-all cursor-pointer group"
          >
            <span>Start my free demo</span>
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-4 h-4" />
            </div>
          </a>

          {/* Secondary Link */}
          <a 
            href="https://my.xchief.com/registration"
            className="inline-flex items-center gap-1 text-xs md:text-sm font-bold text-green-600 hover:text-black translate-x-62 -translate-y-15 transition-colors"
          >
            <span>Or open a live account</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          {/* Social Proof */}
          <div className="inline-flex items-center gap-2 text-xs md:text-sm text-gray-600 pt-2">
            <Users className="w-4 h-4 text-green-600" />
            <span>
              Join <strong className="text-black">1.2M+ users</strong> who trade with xChief
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}