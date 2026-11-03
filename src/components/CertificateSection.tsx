"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ZoomIn, Award } from "lucide-react";
import { portfolioData, CertificateItem } from "@/data/portfolio";

export default function CertificateSection() {
  const { certificates } = portfolioData;
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  return (
    <section id="sertifikat" className="py-20 md:py-28 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-1.5 h-8 bg-gradient-to-b from-[#168BFF] to-[#29C4FF] rounded-full" />
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Sertifikat & Lisensi
            </h2>
            <p className="text-xs sm:text-sm text-[#B8C8DF] mt-1">
              Menampilkan seluruh 16 sertifikat kualifikasi resmi (Finance, Excel, Data Analytics & Profesional)
            </p>
          </div>
        </div>

        {/* Certificate Grid — Menampilkan seluruh 16 sertifikat */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="group cursor-pointer rounded-2xl bg-[#061E43]/70 hover:bg-[#061E43]/90 border border-[#168BFF]/30 hover:border-[#29C4FF] p-3.5 transition-all duration-300 hover:shadow-xl hover:shadow-[#168BFF]/20 flex flex-col justify-between"
            >
              {/* Image Frame with Aspect Ratio */}
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-[#03132D] border border-white/5 mb-3.5">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-2.5 rounded-full bg-[#168BFF] text-white shadow-lg flex items-center gap-1.5 text-xs font-semibold px-3">
                    <ZoomIn className="w-4 h-4" />
                    <span>Perbesar</span>
                  </div>
                </div>
              </div>

              {/* Title & Issuer Info */}
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white group-hover:text-[#29C4FF] transition-colors line-clamp-2 leading-snug">
                  {cert.title}
                </h4>
                {cert.issuer && (
                  <p className="text-xs text-[#B8C8DF] font-medium flex items-center gap-1.5 pt-0.5">
                    <Award className="w-3.5 h-3.5 text-[#29C4FF] shrink-0" />
                    <span className="truncate">{cert.issuer}</span>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#03132D] border border-[#168BFF]/50 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#061E43] hover:bg-[#168BFF] text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Title inside modal */}
            <div className="w-full text-left mb-4 pr-10">
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {selectedCert.title}
              </h3>
              {selectedCert.issuer && (
                <p className="text-sm text-[#29C4FF] font-medium mt-0.5">
                  Penerbit: {selectedCert.issuer}
                </p>
              )}
            </div>

            {/* High-res Image preview */}
            <div className="relative w-full aspect-[16/11] max-h-[70vh] rounded-2xl overflow-hidden bg-black/30 border border-[#168BFF]/20">
              <Image
                src={selectedCert.image}
                alt={selectedCert.title}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
