import React from "react";
import { portfolioData } from "@/data/portfolio";

export default function HeroSection() {
  const { hero } = portfolioData;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Abstract Glow & Curves */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#168BFF]/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#29C4FF]/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Futuristic Curved Line Overlay SVG */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 dark:opacity-40">
        <svg
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover"
        >
          <path
            d="M-100 450 C 300 250, 700 650, 1540 200"
            stroke="url(#hero-blue-grad)"
            strokeWidth="2.5"
            strokeDasharray="6 6"
          />
          <path
            d="M-50 200 C 400 450, 900 100, 1500 480"
            stroke="url(#hero-blue-grad-2)"
            strokeWidth="1.5"
          />
          <defs>
            <linearGradient id="hero-blue-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#168BFF" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#29C4FF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#168BFF" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="hero-blue-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0878DB" stopOpacity="0.1" />
              <stop offset="70%" stopColor="#168BFF" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#29C4FF" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Sisi kiri: Judul dan Identitas Profesional */}
          <div className="lg:col-span-7 space-y-6">
            {/* Label kecil PORTOFOLIO */}
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-8 bg-[#29C4FF]" />
              <span className="text-xs uppercase tracking-[0.28em] font-semibold text-[#29C4FF]">
                {hero.badge}
              </span>
              <span className="h-px w-8 bg-[#29C4FF]" />
            </div>

            {/* Nama Utama */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-white">
              {hero.name} <br />
              <span className="bg-gradient-to-r from-[#168BFF] via-[#29C4FF] to-cyan-300 bg-clip-text text-transparent drop-shadow-sm">
                {hero.nameAccent}
              </span>
            </h1>

            {/* Profesi */}
            <div className="pt-2">
              <p className="text-base sm:text-xl font-bold tracking-[0.25em] text-[#B8C8DF] uppercase">
                {hero.profession}
              </p>
            </div>

            {/* Tahun 2026 */}
            <div className="inline-flex items-center gap-4 text-[#B8C8DF] font-medium text-sm pt-4">
              <span className="h-0.5 w-12 bg-[#168BFF]/60" />
              <span className="tracking-[0.3em] font-mono text-white text-base">
                {hero.year}
              </span>
              <span className="h-0.5 w-12 bg-[#168BFF]/60" />
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-6 flex flex-wrap gap-4 items-center">
              <a
                href="#tentang-saya"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-[#168BFF] to-[#0878DB] hover:from-[#29C4FF] hover:to-[#168BFF] text-white font-semibold text-sm shadow-lg shadow-[#168BFF]/25 hover:shadow-[#168BFF]/40 transition-all duration-300 active:scale-95"
              >
                Jelajahi Profil
              </a>
              <a
                href="#kontak"
                className="inline-flex items-center px-6 py-3 rounded-xl border border-[#168BFF]/40 bg-[#061E43]/60 hover:bg-[#168BFF]/15 text-[#F5F8FF] font-medium text-sm transition-all duration-300"
              >
                Hubungi Saya
              </a>
            </div>
          </div>

          {/* Sisi kanan: Dekorasi grafik batang, garis tren, bentuk abstrak biru (TANPA FOTO ORANG) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Decorative Tech Graphic Box */}
            <div className="w-full max-w-md p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#061E43]/80 to-[#03132D]/90 border border-[#168BFF]/30 backdrop-blur-xl shadow-2xl relative overflow-hidden group">
              {/* Subtle top light bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#29C4FF] to-transparent opacity-80" />

              {/* Header decorative bar */}
              <div className="flex items-center justify-between pb-6 border-b border-[#168BFF]/20">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#168BFF] animate-pulse" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#29C4FF]/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#B8C8DF]/30" />
                  <span className="text-xs font-mono text-[#B8C8DF] ml-2">FINANCIAL & OPERATIONS INDEX</span>
                </div>
                <div className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-[#168BFF]/20 text-[#29C4FF] border border-[#29C4FF]/30">
                  IPK 3.83
                </div>
              </div>

              {/* Bar charts decorative representation */}
              <div className="py-6 space-y-4">
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs text-[#B8C8DF]">
                    <span>Financial Analysis & Ratio Modeling</span>
                    <span className="text-[#29C4FF] font-mono">96%</span>
                  </div>
                  <div className="h-2 w-full bg-[#03132D] rounded-full overflow-hidden border border-[#168BFF]/20">
                    <div className="h-full bg-gradient-to-r from-[#168BFF] to-[#29C4FF] rounded-full w-[96%]" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs text-[#B8C8DF]">
                    <span>Data Processing (Excel & Power BI)</span>
                    <span className="text-[#29C4FF] font-mono">94%</span>
                  </div>
                  <div className="h-2 w-full bg-[#03132D] rounded-full overflow-hidden border border-[#168BFF]/20">
                    <div className="h-full bg-gradient-to-r from-[#168BFF] to-[#29C4FF] rounded-full w-[94%]" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs text-[#B8C8DF]">
                    <span>Business & Administration Operations</span>
                    <span className="text-[#29C4FF] font-mono">92%</span>
                  </div>
                  <div className="h-2 w-full bg-[#03132D] rounded-full overflow-hidden border border-[#168BFF]/20">
                    <div className="h-full bg-gradient-to-r from-[#168BFF] to-[#29C4FF] rounded-full w-[92%]" />
                  </div>
                </div>
              </div>

              {/* Stylized Trendline Chart SVG */}
              <div className="pt-2 pb-4">
                <div className="text-[11px] uppercase tracking-wider text-[#B8C8DF] font-semibold mb-2 flex items-center justify-between">
                  <span>Growth & Performance Trend</span>
                  <span className="text-emerald-400 font-mono text-xs">+18.5% Optimal</span>
                </div>
                <div className="h-24 w-full relative">
                  <svg viewBox="0 0 300 80" className="w-full h-full overflow-visible">
                    <defs>
                      <linearGradient id="area-grad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#29C4FF" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#168BFF" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0 65 Q 40 50, 80 55 T 160 35 T 220 20 T 300 10 L 300 80 L 0 80 Z"
                      fill="url(#area-grad)"
                    />
                    <path
                      d="M 0 65 Q 40 50, 80 55 T 160 35 T 220 20 T 300 10"
                      fill="none"
                      stroke="#29C4FF"
                      strokeWidth="2.5"
                    />
                    {/* Points */}
                    <circle cx="80" cy="55" r="3.5" fill="#168BFF" stroke="#F5F8FF" strokeWidth="1.5" />
                    <circle cx="160" cy="35" r="3.5" fill="#168BFF" stroke="#F5F8FF" strokeWidth="1.5" />
                    <circle cx="220" cy="20" r="3.5" fill="#29C4FF" stroke="#F5F8FF" strokeWidth="1.5" />
                    <circle cx="300" cy="10" r="4.5" fill="#29C4FF" stroke="#FFFFFF" strokeWidth="2" />
                  </svg>
                </div>
              </div>

              {/* Decorative Matrix Grid Dots */}
              <div className="flex justify-between items-center pt-3 border-t border-[#168BFF]/20 text-[11px] text-[#B8C8DF] font-mono">
                <span>TELKOM UNIVERSITY ALUMNI</span>
                <span className="text-[#29C4FF]">FINANCE & OPERATIONS</span>
              </div>
            </div>

            {/* Glowing orbs behind card */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#168BFF]/30 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#29C4FF]/20 rounded-full blur-2xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}

