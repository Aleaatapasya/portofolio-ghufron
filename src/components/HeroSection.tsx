import React from "react";
import { portfolioData } from "@/data/portfolio";

export default function HeroSection() {
  const { hero } = portfolioData;

  return (
    <section className="relative pt-36 pb-20 md:pt-48 md:pb-28 overflow-hidden">
      {/* Background Abstract Glow & Curves */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#168BFF]/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[#29C4FF]/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Futuristic Curved Line Overlay SVG */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <svg
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover"
        >
          <path
            d="M-100 450 C 300 250, 700 650, 1540 200"
            stroke="url(#hero-blue-grad)"
            strokeWidth="2"
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

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Label kecil PORTOFOLIO */}
        <div className="inline-flex items-center justify-center gap-3 mb-6">
          <span className="h-px w-10 bg-[#29C4FF]" />
          <span className="text-xs sm:text-sm uppercase tracking-[0.3em] font-semibold text-[#29C4FF]">
            {hero.badge}
          </span>
          <span className="h-px w-10 bg-[#29C4FF]" />
        </div>

        {/* Nama Utama Rata Tengah */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] text-white">
          {hero.name}{" "}
          <span className="bg-gradient-to-r from-[#168BFF] via-[#29C4FF] to-cyan-300 bg-clip-text text-transparent drop-shadow-md">
            {hero.nameAccent}
          </span>
        </h1>

        {/* Profesi FINANCE & ADMINISTRATION Melebar Rata Tengah */}
        <div className="pt-6 pb-2">
          <p className="text-sm sm:text-xl md:text-2xl font-bold tracking-[0.3em] sm:tracking-[0.4em] text-[#B8C8DF] uppercase">
            {hero.profession}
          </p>
        </div>

        {/* Action Buttons Rata Tengah */}
        <div className="pt-8 flex flex-wrap gap-4 items-center justify-center">
          <a
            href="#tentang-saya"
            className="inline-flex items-center px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#168BFF] to-[#0878DB] hover:from-[#29C4FF] hover:to-[#168BFF] text-white font-semibold text-sm sm:text-base shadow-xl shadow-[#168BFF]/30 hover:shadow-[#168BFF]/50 transition-all duration-300 active:scale-95"
          >
            Jelajahi Profil
          </a>
          <a
            href="#kontak"
            className="inline-flex items-center px-7 py-3.5 rounded-xl border border-[#168BFF]/40 bg-[#061E43]/70 hover:bg-[#168BFF]/20 text-[#F5F8FF] font-medium text-sm sm:text-base transition-all duration-300 backdrop-blur-sm"
          >
            Hubungi Saya
          </a>
        </div>
      </div>
    </section>
  );
}
