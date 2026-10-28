'use client';

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  ArrowRight, 
  Wallet, 
  ShieldAlert, 
  GitMerge, 
  Wrench, 
  CreditCard, 
  Headphones,
  FileText 
} from 'lucide-react';

export default function RegulatedBrokerSection() {
  const [activeTab, setActiveTab] = useState('Dubai headquarters');

  const stats = [
    { value: '12+', label: 'years in the markets' },
    { value: '1.2M+', label: 'users worldwide' },
    { value: '500K+', label: 'app downloads' },
    { value: '15+', label: 'international awards' },
  ];

  const licenses = [
    {
      badge: 'MISA',
      tag: 'Holds your account',
      tagColor: 'bg-lime-500 text-black whitespace-pre-line leading-relaxed block shadow-[0_0_15px_rgba(163,230,53,0.6)] font-extrabold',
      title: 'xChief Ltd',
      desc: 'Licensed by the Mwali International Services Authority (MISA), Union of the Comoros',
      details: [
        { label: 'LICENSE', val: 'T2023379' },
        { label: 'COMPANY NUMBER', val: 'HY00923433' }
      ]
    },
    {
      badge: 'FSCA',
      tag: 'Intermediary',
      tagColor: 'border border-white/20 text-white font-semibold',
      title: 'xChief ZA (Pty) Ltd',
      desc: 'Authorized by the Financial Sector Conduct Authority (FSCA), South Africa',
      details: [
        { label: 'FSP NUMBER', val: '54829' },
        { label: 'ROLE', val: 'Introduces clients, never your counterparty' }
      ]
    },
    {
      badge: 'AFSA',
      tag: 'Professional clients',
      tagColor: 'border border-white/20 text-white font-semibold',
      title: 'xChief Central Asia Ltd',
      desc: 'Licensed by the Astana Financial Services Authority (AFSA), Astana International Financial Centre, Kazakhstan',
      details: [
        { label: 'WHO IT SERVES', val: 'Professional clients only' },
        { label: 'OFFICE', val: 'Astana, Kazakhstan' }
      ]
    }
  ];

  const locations = [
    'Dubai headquarters',
    'Kazakhstan',
    'Singapore',
    'Türkiye',
    'Indonesia',
    'Nigeria'
  ];

  const protections = [
    {
      icon: <Wallet className="w-5 h-5 text-lime-400" />,
      title: 'Client money kept separate',
      desc: 'Client funds are held apart from xChief\'s own money.'
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-lime-400" />,
      title: 'Negative balance protection',
      desc: 'Measures that help stop your account from falling below zero.'
    },
    {
      icon: <GitMerge className="w-5 h-5 text-lime-400" />,
      title: 'A Book STP execution',
      desc: 'Orders pass to liquidity providers. No dealing desk trades against you.'
    },
    {
      icon: <Wrench className="w-5 h-5 text-lime-400" />,
      title: 'Cover for our technical faults',
      desc: 'If a fault on xChief\'s side causes you a loss, you are compensated under our terms.'
    },
    {
      icon: <CreditCard className="w-5 h-5 text-lime-400" />,
      title: 'No xChief funding fees',
      desc: 'Deposits and withdrawals cost nothing on our side.'
    },
    {
      icon: <Headphones className="w-5 h-5 text-lime-400" />,
      title: '24/7 support in 20+ languages',
      desc: 'Live chat, Telegram, WhatsApp, email and phone, at any hour.'
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-[#0d1210] text-white relative overflow-hidden">
      
      {/* هاله پس‌زمینه نئونی */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-lime-500/10 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10"/>
        
        {/* بخش اول: تیتر و آمار */}
        <div className="space-y-10">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-1.5 bg-lime-500/10 text-lime-400 text-xs px-3.5 py-1.5 rounded-full font-semibold border border-lime-500/20 shadow-[0_0_15px_rgba(163,230,53,0.15)]">
              <ShieldCheck className="w-4 h-4" />
              <span>Trusted and regulated</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              A regulated broker, <br />
              <span className="italic font-normal text-lime-400">trusted since 2014</span>
            </h2>

            <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-2xl">
              xChief started in 2014 as ForexChief and took its current name in 2023. More than 1.2 million users now trade with the group, supported from its Dubai headquarters and five regional offices. Every company in the group is licensed for the work it does, so you always know who holds your account.
            </p>
          </div>

          {/* آمار ۴ تایی */}
          <div className="grid grid-cols-2 md:grid-cols-4 -translate-y-8 gap-6 border-t border-white/10 pt-10">
            {stats.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-4xl md:text-5xl font-black text-lime-400 tracking-tight drop-shadow-[0_0_10px_rgba(163,230,53,0.3)]">
                  {item.value}
                </div>
                <div className="text-s md:text-sm text-gray-400 font-medium">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* بخش دوم: ۳ کارت مجوزها */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {licenses.map((lic, index) => (
              <div 
                key={index} 
                className="bg-[#131d17]/80 border border-white/10 rounded-3xl p-6 flex flex-col justify-between space-y-6 backdrop-blur-md shadow-xl hover:border-lime-500/30 transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-full border-2 border-lime-400/40 flex items-center justify-center font-bold text-xs text-white shadow-[0_0_12px_rgba(163,230,53,0.2)]">
                      {lic.badge}
                    </div>

                    <span className={`text-[11px] px-3 py-1 rounded-full ${lic.tagColor}`}>
                      {lic.tag}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white">{lic.title}</h3>
                    <p className="text-s text-gray-400 leading-relaxed">{lic.desc}</p>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-4 grid grid-cols-2 gap-4">
                  {lic.details.map((d, dIdx) => (
                    <div key={dIdx} className="space-y-1">
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">{d.label}</span>
                      <span className="text-s font-bold text-white block truncate">{d.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            {locations.map((loc, i) => {
              const isActive = activeTab === loc;
              return (
                <button
                  key={i}
                  onClick={() => setActiveTab(loc)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-lime-400 text-black shadow-[0_0_20px_rgba(163,230,53,0.5)] scale-105'
                      : 'bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10'
                  }`}
                >
                  <MapPin className={`w-3.5 h-3.5 ${isActive ? 'text-black' : 'text-green-400'}`} />
                  <span>{loc}</span>
                </button>
              );
            })}
          </div>

          <p className="text-[11px] text-gray-400 pt-1">
          Look up any license number above on the regulator's public register.</p>
          
          
        

        {/* بخش سوم: گرید ۶ تایی محافظت از حساب */}
        <div className="space-y-6 pt-4">
          <h3 className="text-2xl md:text-3xl font-black text-white">
            How your account is protected
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {protections.map((p, pIndex) => (
              <div 
                key={pIndex} 
                className="bg-[#131d17]/60 border border-white/10 rounded-2xl p-5 flex items-start gap-4 hover:border-lime-500/20 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-lime-500/10 border border-lime-500/20 flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(163,230,53,0.1)]">
                  {p.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs md:text-sm font-bold text-white">{p.title}</h4>
                  <p className="text-[11px] text-gray-400 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* بخش چهارم: کادر نئونی پایینی */}
        <div className="relative rounded-3xl p-6 md:p-8 bg-gradient-to-r from-[#112419] to-[#0d1611] border border-lime-500/40 shadow-[0_0_30px_rgba(163,230,53,0.15)] flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
          
          <div className="absolute right-0 top-0 w-64 h-64 bg-lime-500/10 rounded-full blur-[70px] pointer-events-none" />

          <div className="space-y-2 max-w-xl text-left">
            <h3 className="text-xl md:text-3xl font-black text-white">
              Practice with a licensed broker
            </h3>
            <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
              Start on a free demo today. When you go live, your account sits with xChief Ltd, licensed by MISA under license T2023379.
            </p>
          </div>

          <div className="flex flex-col items-end gap-3 shrink-0 w-full md:w-auto">
            <a 
              href="https://my.xchief.com/registration"
              className="w-full md:w-auto bg-lime-500 hover:bg-lime-300 text-black font-extrabold text-xs md:text-sm py-3.5 px-6 rounded-full flex items-center justify-center gap-4 transition-all shadow-[0_0_25px_rgba(163,230,53,0.4)] group hover:scale-105 cursor-pointer"
            >
              <span>Start my free demo</span>
              <div className="w-7 h-7 bg-black rounded-full flex items-center justify-center text-white group-hover:translate-x-0.5 transition-transform">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </a>

            <a 
              href="https://www.xchief.com/files/documents/Client_Agreement_xChief_Ltd.pdf" 
              className="inline-flex items-center gap-1.5 text-[14px] -translate-x-7 text-gray-300 hover:text-white transition-colors underline text-green-500 decoration-gray-500"
            >
              <span>Read the client agreement</span>
              <FileText className="w-3 h-3" />
            </a>
          </div>
         </div>
        </div>
    </section>
  );
}