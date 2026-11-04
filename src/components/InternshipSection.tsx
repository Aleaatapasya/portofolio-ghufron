"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Calendar, CheckCircle2, ZoomIn, X } from "lucide-react";
import { portfolioData, InternshipExperience } from "@/data/portfolio";

export default function InternshipSection() {
  const { internships } = portfolioData;
  const [selectedDoc, setSelectedDoc] = useState<InternshipExperience | null>(null);

  return (
    <section id="pengalaman" className="py-16 md:py-24 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-8 bg-gradient-to-b from-[#168BFF] to-[#29C4FF] rounded-full" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Pengalaman Magang
            </h2>
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
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 mb-4 pb-4 border-b border-[#168BFF]/20">
                  <div className="flex-1">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#29C4FF] font-semibold block">
                      Magang — {internship.company}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1 group-hover:text-[#29C4FF] transition-colors">
                      {internship.division}
                    </h3>
                  </div>

                  <div className="self-start sm:self-auto px-3 py-1.5 rounded-lg bg-[#168BFF]/15 border border-[#168BFF]/30 text-xs font-mono text-[#29C4FF] shrink-0 flex items-center gap-1.5 w-fit">
                    <Calendar className="w-3.5 h-3.5 shrink-0" />
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

              {/* Documentation image thumbnail - Clickable for popup */}
              {internship.image && (
                <div
                  onClick={() => setSelectedDoc(internship)}
                  className="mt-6 pt-4 border-t border-[#168BFF]/15 flex items-center justify-between gap-3 p-3 rounded-2xl bg-[#03132D]/60 hover:bg-[#168BFF]/15 border border-[#168BFF]/20 hover:border-[#29C4FF]/50 transition-all duration-300 cursor-pointer group/doc"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="relative w-20 h-14 rounded-xl overflow-hidden border border-[#168BFF]/40 shrink-0 bg-black/40">
                      <Image
                        src={internship.image}
                        alt={internship.division}
                        fill
                        className="object-cover group-hover/doc:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover/doc:opacity-0 transition-opacity" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-semibold text-sm text-white group-hover/doc:text-[#29C4FF] transition-colors">
                          Dokumentasi Kerja
                        </span>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-[#168BFF]/20 text-[#29C4FF] border border-[#29C4FF]/30">
                          Klik perbesar
                        </span>
                      </div>
                      <span className="text-xs text-[#B8C8DF] block mt-0.5">
                        Monitoring sistem & laporan data Telkom
                      </span>
                    </div>
                  </div>

                  <div className="w-9 h-9 rounded-xl bg-[#061E43] border border-[#168BFF]/40 text-[#29C4FF] flex items-center justify-center shrink-0 group-hover/doc:bg-[#168BFF] group-hover/doc:text-white transition-colors">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Pop-up Modal untuk Dokumentasi Magang */}
      {selectedDoc && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedDoc(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#03132D] border border-[#168BFF]/50 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedDoc(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#061E43] hover:bg-[#168BFF] text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Title inside modal */}
            <div className="w-full text-left mb-4 pr-10">
              <span className="text-xs font-mono uppercase tracking-widest text-[#29C4FF] font-semibold">
                Dokumentasi Magang — {selectedDoc.company}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                {selectedDoc.division}
              </h3>
              <p className="text-xs sm:text-sm text-[#B8C8DF] mt-1">
                Periode: {selectedDoc.period}
              </p>
            </div>

            {/* High-res Image preview */}
            <div className="relative w-full aspect-[16/10] max-h-[70vh] rounded-2xl overflow-hidden bg-black/30 border border-[#168BFF]/30">
              {selectedDoc.image && (
                <Image
                  src={selectedDoc.image}
                  alt={selectedDoc.division}
                  fill
                  className="object-contain"
                  priority
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
