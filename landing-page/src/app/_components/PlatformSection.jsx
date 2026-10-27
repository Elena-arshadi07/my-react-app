"use client";
import React from 'react';
import { Monitor, Cpu, CheckCircle2, Download } from 'lucide-react';
import images from './images.js';

export default function PlatformsSection() {
  return (
    <section className="py-20 px-4 md:px-8 bg-[#fbfbf9] text-black border-t border-black/5">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Texts and Platform Options */}
        <div className="lg:w-5/12 space-y-8">
          
          {/* Section Header */}
          <div className="space-y-4">
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 bg-[#e8f2ec] text-[#2d6a4f] text-xs px-3 py-1.5 rounded-full font-medium">
              <Monitor className="w-3.5 h-3.5" />
              <span>Platforms and app</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-[#111]">
              Practice on <br />
              <span className="italic font-normal text-[#388e3c]">MT4, MT5 or</span> <br />
              the xChief app
            </h2>

            {/* Description */}
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              The demo runs on the same platforms our live clients use, so everything you learn carries over when you go live.
            </p>
          </div>

          {/* Platform List Options */}
          <div className="space-y-4">
            
            {/* MT4 Option */}
            <div className="bg-[#f2f4ef] border border-black/5 rounded-2xl p-4 flex items-start gap-4 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#e3eae3] flex items-center justify-center text-[#2d6a4f] shrink-0 mt-0.5">
                <Monitor className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-sm text-[#111]">MetaTrader 4</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  The classic platform. Windows, macOS, web, iOS and Android.
                </p>
              </div>
            </div>

            {/* MT5 Option */}
            <div className="bg-[#f2f4ef] border border-black/5 rounded-2xl p-4 flex items-start gap-4 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#e3eae3] flex items-center justify-center text-[#2d6a4f] shrink-0 mt-0.5">
                <Cpu className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-sm text-[#111]">MetaTrader 5</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  More timeframes and order types, on every device.
                </p>
              </div>
            </div>

            {/* xChief App Option (بدون دکمه‌های داخل باکس) */}
            <div className="bg-[#f2f4ef] border border-black/5 rounded-2xl p-4 flex items-start gap-4 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center text-white shrink-0 mt-0.5 font-bold">
                ✕
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-sm text-[#111]">xChief app</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Open and verify your account, deposit, withdraw and trade on iOS and Android.
                </p>
              </div>
            </div>

          </div>

          {/* Download Store Buttons (بیرون از باکس‌ها و در سطح اصلی) */}
          <div className="space-y-4 pt-2">
            <div className="flex flex-wrap items-center gap-3">
              {/* App Store Button */}
              <a href="https://apps.apple.com/app/broker-forex-chief-trading/id6448618897" className="bg-black hover:bg-gray-800 text-white -translate-x-1 px-9 py-2.5 rounded-[16px] flex items-center gap-2.5 transition-all shadow-sm">
                <img
               src={images.award7}
               alt="app store"
               className="absolute left-3 h-7 w-7 object contain"/>
                <div className="text-left">
                    <span className="text-[9px] block text-gray-400 uppercase tracking-wider">Download on the</span>
                  <span className="text-s font-bold block">App Store</span>
                </div>
              </a>

              {/* Google Play Button */}
              <a href="https://play.google.com/store/apps/details?id=com.forexchief.broker" className="bg-black hover:bg-gray-800 text-white translate-x-3 px-9 py-2.5 rounded-[16px] flex items-center gap-2 transition-all shadow-sm">
               <img
               src={images.award6}
               alt="google play"
               className="absolute left-3 h-7 w-7 object contain"/>
                <div className="text-left">
                  <span className="text-[9px] block text-gray-400 uppercase tracking-wider">Get it on</span>
                  <span className="text-s font-bold block">Google Play</span>
                </div>
              </a>
            </div>

            {/* Download MetaTrader Link */}
            <div>
              <a href="https://www.xchief.com/platforms/metatrader5/" className="inline-flex items-center gap-1.5 text-s font-bold text-[#2d6a4f] hover:text-[#388e3c] transition-colors">
                <span>Download MetaTrader</span>
                <Download className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
{/* Right Side: Image Placeholder */}
<div className="w-full lg:w-7/12">
  <div className="group relative flex min-h-[420px] flex-col items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-[#080b10] p-6 shadow-lg md:min-h-[520px] md:p-8">

    {/* Green Glow - Top Right */}
    <div className="pointer-events-none absolute -right-10 -top-10 h-72 w-72 rounded-full bg-[#39ff14]/20 blur-[100px]" />

    {/* Subtle Grid */}
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.08]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
        backgroundSize: "55px 55px",
      }}
    />

    {/* MetaTrader 5 Logo */}
    <div className="absolute left-6 top-6 z-10 flex items-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-2 shadow-md md:left-8 md:top-8">
      <img
        src={images.award9}
        alt="MetaTrader 5"
        className="h-8 w-auto object-contain"
      />
    </div>

    {/* Top Right Badge */}
    <div className="absolute right-4 top-6 z-10 flex items-center gap-1.5 rounded-full border border-[#9bff35]/20 bg-white/10 px-3 py-2 text-xs text-white backdrop-blur-md md:right-8 md:top-8 md:px-4">
      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#9bff35]" />
      <span>Desktop, web and mobile</span>
    </div>

    {/* Main Image */}
    <div className="relative z-[1] mt-16 flex w-full flex-1 items-center justify-center">
      <img
        src={images.award8}
        alt="MetaTrader5"
        className="h-auto max-h-[320px] w-full max-w-[600px] object-contain md:max-h-[390px]"
      />
    </div>

    {/* Bottom Caption */}
    <p className="relative z-[1] mt-4 text-center text-xs text-white/60">
      MetaTrader 5 on desktop, laptop, tablet and phone
    </p>

  </div>
</div>
</div>
</section>
  );}