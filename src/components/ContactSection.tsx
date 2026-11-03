import React from "react";
import { Mail, Phone } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function ContactSection() {
  const { contact } = portfolioData;

  return (
    <section id="kontak" className="py-20 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#061E43]/95 via-[#061E43]/85 to-[#03132D]/95 border border-[#168BFF]/40 p-8 sm:p-12 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#168BFF]/10 rounded-full blur-[90px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Title & Introduction */}
            <div className="lg:col-span-4 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#29C4FF]" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#29C4FF] font-semibold">
                  Get in Touch
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Kontak & Kolaborasi
              </h2>
              <p className="text-sm text-[#B8C8DF] leading-relaxed">
                Terbuka untuk peluang karir di bidang Finance, Business Operations, Administration, maupun Project Management.
              </p>
            </div>

            {/* Contact Action Cards */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Email */}
              <a
                href={`mailto:${contact.email}`}
                className="p-5 rounded-2xl bg-[#03132D]/80 border border-[#168BFF]/30 hover:border-[#29C4FF] transition-all duration-300 hover:shadow-lg hover:shadow-[#168BFF]/20 group flex flex-col justify-between"
              >
                <div className="w-10 h-10 rounded-xl bg-[#061E43] border border-[#168BFF]/40 flex items-center justify-center text-[#29C4FF] group-hover:scale-110 transition-transform mb-3">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#B8C8DF] font-medium block">Email Resmi</span>
                  <span className="text-xs sm:text-sm font-bold text-white group-hover:text-[#29C4FF] transition-colors break-all">
                    {contact.email}
                  </span>
                </div>
              </a>

              {/* Phone / WhatsApp */}
              <a
                href={`tel:${contact.phone.replace(/[^0-9]/g, "")}`}
                className="p-5 rounded-2xl bg-[#03132D]/80 border border-[#168BFF]/30 hover:border-[#29C4FF] transition-all duration-300 hover:shadow-lg hover:shadow-[#168BFF]/20 group flex flex-col justify-between"
              >
                <div className="w-10 h-10 rounded-xl bg-[#061E43] border border-[#168BFF]/40 flex items-center justify-center text-[#29C4FF] group-hover:scale-110 transition-transform mb-3">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#B8C8DF] font-medium block">Nomor Telepon</span>
                  <span className="text-xs sm:text-sm font-bold text-white group-hover:text-[#29C4FF] transition-colors">
                    {contact.phone}
                  </span>
                </div>
              </a>

              {/* LinkedIn per PDF */}
              <div className="p-5 rounded-2xl bg-[#03132D]/80 border border-[#168BFF]/30 hover:border-[#29C4FF] transition-all duration-300 hover:shadow-lg hover:shadow-[#168BFF]/20 group flex flex-col justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#061E43] border border-[#168BFF]/40 flex items-center justify-center text-[#29C4FF] group-hover:scale-110 transition-transform mb-3">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.62 1.62 0 1 0 0-3.24 1.62 1.62 0 0 0 0 3.24M7.85 18.5V10.13H5.08v8.37h2.77z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs text-[#B8C8DF] font-medium block">LinkedIn Profile</span>
                  <span className="text-xs sm:text-sm font-bold text-white group-hover:text-[#29C4FF] transition-colors truncate block">
                    {contact.name}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
