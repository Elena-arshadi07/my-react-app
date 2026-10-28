import React from 'react';
import { Smartphone, Star, Download } from 'lucide-react';
import images from './images';

export default function MobileAppSection() {
  return (
    <section id="app" className="relative py-20 px-5 sm:px-8 lg:px-12 bg-[#101216] text-white overflow-hidden">
      
      {/* پس‌زمینه نوری ملایم */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[550px] h-[380px] bg-emerald-500/5 blur-[140px] pointer-events-none rounded-full -z-10" />

      <div className="max-w-[1280px] mx-auto rounded-[32px] border border-white/15 bg-[#141a21] p-8 sm:p-12 shadow-2xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* ================= LEFT SIDE: TEXT & BUTTONS (7 cols) ================= */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Top Header Row with Logo & Ratings */}
            <div className="flex flex-wrap items-center gap-4">
              {/* لوگوی اپلیکیشن xChief */}
              <div className="w-14 h-14 rounded-2xl bg-[#9bff35]/10 border border-[#9bff35]/30 p-2 flex items-center justify-center shrink-0">
                <img 
                  src="/images/xchief-app-icon.png" 
                  alt="xChief App Icon" 
                  className="w-full h-full object-contain"
                />
              </div>

              <div>
                <h4 className="font-extrabold text-base text-white">xChief app</h4>
                <div className="flex flex-wrap items-center gap-3 mt-1 text-xs text-gray-300">
                  <span className="flex items-center gap-1 font-bold">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span className="text-white">4.7</span> App Store
                  </span>
                  <span className="text-gray-600">•</span>
                  <span className="flex items-center gap-1 font-bold">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span className="text-white">4.8</span> Google Play
                  </span>
                  <span className="text-gray-600">•</span>
                  <span className="font-bold text-[#9bff35]">500K+ downloads</span>
                </div>
              </div>
            </div>

            {/* Main Title & Description */}
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]">
                Your whole account in <span className="font-serif italic font-medium text-[#b2ff80]">your pocket</span>
              </h2>

              <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-xl">
                Open and verify your account, deposit, withdraw and trade from one app. Live prices, quick orders and 24/7 support, wherever you are.
              </p>
            </div>

            {/* Download Buttons Row */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* App Store Button */}
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/15 border border-white/20 rounded-2xl px-5 py-3 transition group"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <img 
                    src="/images/apple-logo.png" 
                    alt="App Store" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-left">
                  <span className="text-[10px] uppercase font-semibold text-gray-400 block leading-none">Download on the</span>
                  <span className="text-sm font-extrabold text-white block mt-0.5">App Store</span>
                </div>
              </a>

              {/* Google Play Button */}
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/15 border border-white/20 rounded-2xl px-5 py-3 transition group"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <img 
                    src="/images/google-play-logo.png" 
                    alt="Google Play" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-left">
                  <span className="text-[10px] uppercase font-semibold text-gray-400 block leading-none">Get it on</span>
                  <span className="text-sm font-extrabold text-white block mt-0.5">Google Play</span>
                </div>
              </a>
            </div>

          </div>

          {/* ================= RIGHT SIDE: PHONE IMAGE (5 cols) ================= */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-[380px] rounded-[28px] overflow-hidden bg-white/5 border border-white/10 shadow-2xl p-2">
              {/* عکس اصلی گوشی موبایل و استند */}
              <img 
                src={images.award1}
                alt="xChief Mobile App Mockup" 
                className="w-full h-auto object-cover rounded-[22px]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}