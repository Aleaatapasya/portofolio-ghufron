import React from "react";
import Image from "next/image";
import { GraduationCap, Award, CheckCircle } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function AboutSection() {
  const { about } = portfolioData;

  return (
    <section id="tentang-saya" className="py-20 md:py-28 relative scroll-mt-20">
      {/* Decorative background shapes */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#168BFF]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Kolom kiri: Teks profil */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-sm font-semibold tracking-wider text-[#29C4FF] uppercase">
                {about.greeting}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                {about.fullName}
              </h2>
            </div>

            {/* Paragraph Bio */}
            <p className="text-base sm:text-lg leading-relaxed text-[#B8C8DF] font-normal">
              {about.bio}
            </p>

            {/* Kartu informasi pendidikan */}
            <div className="pt-2">
              <div className="p-6 rounded-2xl bg-gradient-to-r from-[#061E43]/90 via-[#061E43]/70 to-[#03132D]/90 border border-[#168BFF]/40 backdrop-blur-md shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group hover:border-[#29C4FF]/60 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#168BFF] to-[#0878DB] flex items-center justify-center text-white shadow-lg shadow-[#168BFF]/30 shrink-0">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#29C4FF] transition-colors">
                      {about.education.degree}
                    </h3>
                    <p className="text-sm text-[#B8C8DF] font-medium flex items-center gap-2 mt-0.5">
                      <span>{about.education.institution}</span>
                      <span className="inline-block w-1 h-1 rounded-full bg-[#168BFF]" />
                      <span className="text-emerald-400 font-semibold">Lulusan Terbaik</span>
                    </p>
                  </div>
                </div>

                <div className="self-end sm:self-center px-4 py-2 rounded-xl bg-[#168BFF]/15 border border-[#168BFF]/30 text-center">
                  <span className="block text-xs uppercase tracking-wider text-[#B8C8DF] font-medium">
                    IPK Kumulatif
                  </span>
                  <span className="text-xl font-bold font-mono text-[#29C4FF]">
                    {about.education.gpa}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick highlight pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-[#061E43]/40 border border-[#168BFF]/20 flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#29C4FF] shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-[#B8C8DF]">Financial Analysis</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#061E43]/40 border border-[#168BFF]/20 flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#29C4FF] shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-[#B8C8DF]">Business Operations</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#061E43]/40 border border-[#168BFF]/20 flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <CheckCircle className="w-4 h-4 text-[#29C4FF] shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-[#B8C8DF]">Project Management</span>
              </div>
            </div>
          </div>

          {/* Kolom kanan: Foto formal asli Muhammad Ghufron Arrozzaq */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer decorative glowing ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-b from-[#168BFF] via-[#29C4FF]/50 to-transparent rounded-3xl blur-md opacity-70 group-hover:opacity-100 transition duration-500" />
              
              <div className="relative rounded-3xl overflow-hidden bg-[#061E43] border-2 border-[#168BFF]/40 shadow-2xl">
                <div className="aspect-[3/4] relative w-full">
                  <Image
                    src={about.photo}
                    alt={about.fullName}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  {/* Subtle dark gradient overlay at the bottom for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#03132D] via-transparent to-transparent opacity-80" />
                </div>

                {/* Bottom Card Identity Label inside frame */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-[#03132D]/90 backdrop-blur-md border border-[#168BFF]/30 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      Muhammad Ghufron Arrozzaq
                    </h4>
                    <p className="text-xs text-[#29C4FF] font-medium">
                      Finance & Administration Specialist
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#168BFF]/20 border border-[#168BFF]/40 flex items-center justify-center text-[#29C4FF]">
                    <Award className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Decorative Tech Dot Grid */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-futuristic-grid opacity-30 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

