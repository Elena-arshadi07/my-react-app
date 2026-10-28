import React from 'react';
import { Headphones, MessageSquare, Send, Phone, Mail, Star } from 'lucide-react';

export default function SupportAndRatingsSection() {
  return (
    <section id="support" className="relative py-20 px-5 sm:px-8 lg:px-12 bg-[#101216] text-white overflow-hidden">
      
      {/* پس‌زمینه نوری ملایم */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-emerald-500/5 blur-[140px] pointer-events-none rounded-full -z-10" />

      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* ================= LEFT SIDE: SUPPORT (7 cols) ================= */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-white/90">
              <Headphones className="w-4 h-4 text-[#9bff35]" />
              <span>Support[span_1](start_span)[span_1](end_span)</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.05]">
              Real people, any <span className="font-serif italic font-medium text-[#b2ff80]">hour</span> of the week[span_2](start_span)[span_2](end_span)
            </h2>

            <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-xl">
              Our team answers 24 hours a day, 7 days a week, in 20+ languages including English, Farsi and Arabic. Find us at our Dubai headquarters and in offices in Kazakhstan, Singapore, Türkiye, Indonesia and Nigeria[span_3](start_span)[span_3](end_span).
            </p>
          </div>

          {/* Contact Channels Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            <div className="flex items-center gap-2 text-xs font-bold text-gray-300">
              <span className="w-2 h-2 rounded-full bg-[#9bff35]" />
              <span>Live chat[span_4](start_span)[span_4](end_span)</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-gray-300">
              <span className="w-2 h-2 rounded-full bg-[#9bff35]" />
              <span>Telegram[span_5](start_span)[span_5](end_span)</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-gray-300">
              <span className="w-2 h-2 rounded-full bg-[#9bff35]" />
              <span>WhatsApp[span_6](start_span)[span_6](end_span)</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-gray-300">
              <span className="w-2 h-2 rounded-full bg-[#9bff35]" />
              <span>Viber[span_7](start_span)[span_7](end_span)</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-gray-300 pt-2">
              <span className="w-2 h-2 rounded-full bg-[#9bff35]" />
              <span>Email[span_8](start_span)[span_8](end_span)</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-gray-300 pt-2">
              <span className="w-2 h-2 rounded-full bg-[#9bff35]" />
              <span>Phone[span_9](start_span)[span_9](end_span)</span>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE: RATINGS CARD (5 cols) ================= */}
        <div className="lg:col-span-5 rounded-[28px] border border-white/15 bg-[#141a21] p-6 sm:p-8 shadow-2xl space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-gray-400">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span>Ratings[span_10](start_span)[span_10](end_span)</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-white">Rated in public[span_11](start_span)[span_11](end_span)</h3>

          <div className="divide-y divide-white/10 space-y-4 pt-2">
            
            {/* App Store */}<div className="flex items-center justify-between pb-4">
              <div>
                <span className="font-extrabold text-sm text-white block">App Store[span_12](start_span)[span_12](end_span)</span>
              </div>
              <div className="text-right">
                <span className="font-black text-lg text-white">4.7</span>
                <span className="text-xs text-gray-400 ml-2">1.6K ratings[span_13](start_span)[span_13](end_span)</span>
              </div>
            </div>

            {/* Google Play */}
            <div className="flex items-center justify-between pt-4 pb-4">
              <div>
                <span className="font-extrabold text-sm text-white block">Google Play[span_14](start_span)[span_14](end_span)</span>
              </div>
              <div className="text-right">
                <span className="font-black text-lg text-white">4.8</span>
                <span className="text-xs text-gray-400 ml-2">30.3K reviews[span_15](start_span)[span_15](end_span)</span>
              </div>
            </div>

            {/* Forex Peace Army */}
            <div className="flex items-center justify-between pt-4">
              <div>
                <span className="font-extrabold text-sm text-white block">Forex Peace Army[span_16](start_span)[span_16](end_span)</span>
              </div>
              <div className="text-right">
                <span className="font-black text-base text-[#9bff35] tracking-wider">Good[span_17](start_span)[span_17](end_span)</span>
              </div>
            </div>

          </div>

          <p className="text-[11px] text-gray-500 pt-2 border-t border-white/10">
            As shown on each platform in September 2026.[span_18](start_span)[span_18](end_span)
          </p>
        </div>

      </div>
    </section>
  );
}