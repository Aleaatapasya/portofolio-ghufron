import React from "react";
import Image from "next/image";
import { Activity, Calendar, CheckCircle2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function PartTimeSection() {
  const { partTime } = portfolioData;

  return (
    <section className="py-12 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1.5 h-8 bg-gradient-to-b from-[#168BFF] to-[#29C4FF] rounded-full" />
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Pengalaman Part-Time
          </h2>
        </div>

        {/* Compact Card with Sporty Accent */}
        <div className="rounded-3xl bg-gradient-to-r from-[#061E43]/85 via-[#061E43]/70 to-[#03132D]/90 border border-[#168BFF]/30 p-6 sm:p-8 backdrop-blur-md shadow-xl hover:border-[#29C4FF]/50 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#168BFF]/20">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#168BFF] to-[#0878DB] flex items-center justify-center text-white shadow-md">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {partTime.role}
                    </h3>
                    <p className="text-sm font-semibold text-[#29C4FF]">
                      {partTime.company}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#168BFF]/15 border border-[#168BFF]/30 text-xs font-mono text-[#29C4FF]">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{partTime.period}</span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-2.5 pt-1">
                {partTime.responsibilities.map((resp, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#B8C8DF] leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#29C4FF] shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Images (Basketball training photos) */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-3">
              {partTime.images.map((imgSrc, idx) => (
                <div
                  key={idx}
                  className="relative aspect-square rounded-2xl overflow-hidden border border-[#168BFF]/30 group shadow-md"
                >
                  <Image
                    src={imgSrc}
                    alt={`Basketball Training ${idx + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
