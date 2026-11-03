"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Calendar, ChevronRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function OrganizationSection() {
  const { organizations } = portfolioData;
  const [activeOrgId, setActiveOrgId] = useState(1);

  const activeOrg = organizations.find((o) => o.id === activeOrgId) || organizations[0];

  return (
    <section id="pengalaman" className="py-20 md:py-28 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-1.5 h-8 bg-gradient-to-b from-[#168BFF] to-[#29C4FF] rounded-full" />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pengalaman Organisasi & Kepanitiaan
          </h2>
        </div>

        {/* Layout 2 Kolom: Kolom kiri timeline dengan scrollable list jika panjang, Kolom kanan foto kegiatan yang sinkron */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Kolom Kiri: Vertical Timeline with smooth scroll container */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="text-xs text-[#29C4FF] font-semibold uppercase tracking-wider mb-3 flex items-center justify-between">
              <span>Daftar Pengalaman Organisasi</span>
              <span className="text-xs text-[#B8C8DF] font-normal italic">
                (Klik item untuk melihat dokumentasi)
              </span>
            </div>

            {/* Scrollable list matching the height of the right photo card */}
            <div className="h-[460px] overflow-y-auto pr-3 space-y-3 custom-scrollbar">
              {organizations.map((org) => {
                const isActive = activeOrgId === org.id;
                return (
                  <div
                    key={org.id}
                    onClick={() => setActiveOrgId(org.id)}
                    className={`cursor-pointer p-4 rounded-2xl transition-all duration-300 border text-left ${
                      isActive
                        ? "bg-[#061E43] border-[#29C4FF] shadow-lg shadow-[#168BFF]/20"
                        : "bg-[#061E43]/40 border-[#168BFF]/20 hover:border-[#168BFF]/50 hover:bg-[#061E43]/60"
                    }`}
                  >
                    <div className="flex items-start gap-3.5">
                      {/* Nomor urut dalam lingkaran biru */}
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0 transition-colors ${
                          isActive
                            ? "bg-gradient-to-br from-[#168BFF] to-[#29C4FF] text-white shadow-md shadow-[#168BFF]/50"
                            : "bg-[#03132D] text-[#29C4FF] border border-[#168BFF]/40"
                        }`}
                      >
                        {org.id}
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1.5">
                          <h4 className="text-base font-bold text-white flex items-center gap-1.5">
                            {org.role} <span className="text-[#29C4FF] font-normal">—</span>{" "}
                            <span className="text-[#29C4FF]">{org.organization}</span>
                          </h4>
                        </div>

                        <div className="flex items-center gap-1.5 text-xs text-[#B8C8DF] font-medium mb-2 font-mono">
                          <Calendar className="w-3.5 h-3.5 text-[#168BFF]" />
                          <span>{org.period}</span>
                        </div>

                        <p className="text-xs sm:text-sm text-[#B8C8DF] leading-relaxed">
                          {org.description}
                        </p>
                      </div>

                      <div className="self-center pl-2 hidden sm:block">
                        <ChevronRight
                          className={`w-5 h-5 transition-transform ${
                            isActive ? "text-[#29C4FF] translate-x-1" : "text-white/20"
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Kolom Kanan: Foto Kegiatan Organisasi yang sinkron dan konsisten */}
          <div className="lg:col-span-5 h-[480px] flex flex-col">
            <div className="text-xs text-[#29C4FF] font-semibold uppercase tracking-wider mb-3 flex items-center justify-between">
              <span>Dokumentasi Kegiatan</span>
              <span className="text-xs text-[#B8C8DF] font-mono">
                {activeOrg.role}
              </span>
            </div>

            <div className="flex-1 rounded-3xl overflow-hidden bg-[#061E43] border border-[#168BFF]/40 relative group shadow-2xl flex flex-col">
              <div className="relative w-full flex-1 min-h-[300px]">
                <Image
                  src={activeOrg.image || "/images/telkom_university_building.jpg"}
                  alt={activeOrg.organization}
                  fill
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#03132D] via-transparent to-transparent opacity-85" />
              </div>

              {/* Bottom detail pill */}
              <div className="p-4 bg-[#03132D]/95 border-t border-[#168BFF]/30 backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="text-sm font-bold text-white">
                      {activeOrg.organization}
                    </h5>
                    <p className="text-xs text-[#29C4FF]">{activeOrg.role}</p>
                  </div>
                  <div className="px-2.5 py-1 rounded-md bg-[#168BFF]/20 text-[11px] font-mono text-[#29C4FF] border border-[#29C4FF]/30">
                    Dokumentasi Asli
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
