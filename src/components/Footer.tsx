import React from "react";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const { footer } = portfolioData;

  return (
    <footer className="relative py-14 overflow-hidden border-t border-[#168BFF]/20 bg-[#03132D]">
      {/* Background glowing wave subtle line */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#168BFF]/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
        {/* Subtle glowing curved line */}
        <div className="flex items-center justify-center gap-4 mb-2">
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#29C4FF] to-transparent" />
          <div className="w-2 h-2 rounded-full bg-[#29C4FF]" />
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#29C4FF] to-transparent" />
        </div>

        <h3 className="text-xl sm:text-2xl font-extrabold tracking-[0.2em] text-white">
          {footer.heading}
        </h3>

        <p className="text-sm sm:text-base font-semibold text-[#29C4FF] tracking-wider uppercase">
          {footer.name}
        </p>

        <p className="text-xs text-[#B8C8DF]/70 pt-4 font-mono">
          © 2026 Muhammad Ghufron Arrozzaq. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
