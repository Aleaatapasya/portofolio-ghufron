import React from "react";
import Image from "next/image";
import { Building2, Calendar, CheckCircle2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function InternshipSection() {
  const { internships } = portfolioData;

  return (
    <section className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-8 bg-gradient-to-b from-[#168BFF] to-[#29C4FF] rounded-full" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Pengalaman Magang
            </h2>
          </div>

          {/* Telkom Indonesia Branding Header Badge */}
          <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#061E43] border border-[#168BFF]/30 text-xs font-semibold text-[#B8C8DF]">
            <Building2 className="w-4 h-4 text-[#168BFF]" />
            <span>PT Telkom Indonesia (Persero) Tbk</span>
          </div>
        </div>

        {/* 2 Kartu Berdampingan pada Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {internships.map((internship) => (
            <div
              key={internship.id}
              className="rounded-3xl bg-gradient-to-b from-[#061E43]/90 to-[#03132D]/95 border border-[#168BFF]/30 p-6 sm:p-8 backdrop-blur-md shadow-xl hover:border-[#29C4FF]/60 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Card */}
                <div className="flex items-start justify-between gap-4 mb-4 pb-4 border-b border-[#168BFF]/20">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#29C4FF] font-semibold">
                      Magang {internship.id} — {internship.company}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1 group-hover:text-[#29C4FF] transition-colors">
                      {internship.division}
                    </h3>
                  </div>

                  <div className="px-3 py-1 rounded-lg bg-[#168BFF]/15 border border-[#168BFF]/30 text-xs font-mono text-[#29C4FF] shrink-0 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{internship.period}</span>
                  </div>
                </div>

                {/* Tanggung Jawab List */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#B8C8DF]">
                    Tanggung Jawab & Kontribusi:
                  </h4>
                  <ul className="space-y-2.5">
                    {internship.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#B8C8DF] leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#29C4FF] shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Documentation image thumbnail preview if present */}
              {internship.image && (
                <div className="mt-6 pt-4 border-t border-[#168BFF]/15 flex items-center gap-3">
                  <div className="relative w-16 h-12 rounded-lg overflow-hidden border border-[#168BFF]/30 shrink-0">
                    <Image
                      src={internship.image}
                      alt={internship.division}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-xs text-[#B8C8DF]">
                    <span className="font-semibold text-white block">Dokumentasi Kerja</span>
                    <span>Monitoring sistem & laporan data Telkom</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

