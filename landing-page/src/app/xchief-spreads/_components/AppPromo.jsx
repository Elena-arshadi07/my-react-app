'use client';

import React from 'react';
import { Star, Download, Smartphone } from 'lucide-react';

export default function AppPromoSection() {
  return (
    <section id="app-promo" className="py-20 px-4 md:px-8 bg-[#111913] text-white border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* ================= LEFT COLUMN: INFO & TITLE ================= */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* App Logo & Subtitle */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center p-2 shadow-md">
              <span className="text-black font-black text-xl italic">X</span>
            </div>
            <div>
              <h3 className="font-extrabold text-sm text-white">xChief app</h3>
              <p className="text-xs text-gray-400">iOS and Android</p>
            </div>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1]">
            Trade from <br />
            <span className="text-white">your phone too</span>
          </h2>

          {/* Description */}
          <p className="text-xs md:text-sm text-gray-300 font-medium leading-relaxed max-w-lg">
            The xChief app puts your account, deposits and trading in one place, on iOS and Android. Rated 4.7 on the App Store and 4.8 on Google Play, with more than 500,000 downloads[span_1](start_span)[span_1](end_span).
          </p>

          {/* Download Badges / Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="https://apps.apple.com"
              className="bg-black hover:bg-zinc-900 border border-white/10 text-white px-5 py-3 rounded-2xl flex items-center gap-3 transition shadow-md"
            >
              <Smartphone className="w-5 h-5 text-gray-300" />
              <div className="text-left">
                <p className="text-[10px] text-gray-400 uppercase font-medium">Download on the</p>
                <p className="text-xs font-bold">App Store</p>
              </div>
            </a>

            <a
              href="https://play.google.com"
              className="bg-black hover:bg-zinc-900 border border-white/10 text-white px-5 py-3 rounded-2xl flex items-center gap-3 transition shadow-md"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <span className="text-emerald-400 font-black text-base">▶</span>
              </div>
              <div className="text-left">
                <p className="text-[10px] text-gray-400 uppercase font-medium">Get it on</p>
                <p className="text-xs font-bold">Google Play</p>
              </div>
            </a>
          </div>

        </div>

        {/* ================= RIGHT COLUMN: RATINGS & STATS CARDS ================= */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          
          {/* Card 1: App Store Rating */}
          <div className="bg-[#18221c] border border-white/10 rounded-[28px] p-6 flex flex-col justify-between space-y-6 shadow-lg">
            <div>
              <span className="text-3xl md:text-4xl font-black text-white block">4.7</span>
              <div className="flex items-center gap-1 text-amber-400 pt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
            </div>
            <p className="text-[11px] text-gray-400 font-medium">App Store, 1.6K ratings</p>
          </div>

          {/* Card 2: Google Play Rating */}
          <div className="bg-[#18221c] border border-white/10 rounded-[28px] p-6 flex flex-col justify-between space-y-6 shadow-lg">
            <div>
              <span className="text-3xl md:text-4xl font-black text-white block">4.8</span><div className="flex items-center gap-1 text-amber-400 pt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
            </div>
            <p className="text-[11px] text-gray-400 font-medium">Google Play, 30.3K reviews</p>
          </div>

          {/* Card 3: Total Downloads */}
          <div className="bg-[#18221c] border border-white/10 rounded-[28px] p-6 flex flex-col justify-between space-y-6 shadow-lg">
            <div>
              <span className="text-3xl md:text-4xl font-black text-white block">500K+</span>
              <div className="w-7 h-7 rounded-lg bg-[#9bff35]/10 text-[#9bff35] flex items-center justify-center mt-2">
                <Download className="w-4 h-4" />
              </div>
            </div>
            <p className="text-[11px] text-gray-400 font-medium">Downloads</p>
          </div>

        </div>

      </div>
    </section>
  );
}