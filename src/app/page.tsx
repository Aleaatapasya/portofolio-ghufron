import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import OrganizationSection from "@/components/OrganizationSection";
import InternshipSection from "@/components/InternshipSection";
import CertificateSection from "@/components/CertificateSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative selection:bg-[#168BFF] selection:text-white">
      {/* Background global subtle pattern */}
      <div className="fixed inset-0 bg-futuristic-grid pointer-events-none opacity-30 z-0" />

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-1 relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <InternshipSection />
        <OrganizationSection />
        <CertificateSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
