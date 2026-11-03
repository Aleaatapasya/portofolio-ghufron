"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon, Menu, X } from "lucide-react";

const navItems = [
  { label: "Tentang Saya", href: "#tentang-saya" },
  { label: "Pengalaman", href: "#pengalaman" },
  { label: "Sertifikat", href: "#sertifikat" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Identify active section
      const sections = ["tentang-saya", "pengalaman", "sertifikat", "kontak"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#03132D]/90 dark:bg-[#03132D]/90 light:bg-white/90 backdrop-blur-md shadow-lg shadow-black/10 border-b border-[#168BFF]/20"
          : "bg-transparent border-b border-[#168BFF]/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Pojok kiri: M Ghufron Arrozzaq */}
        <a
          href="#"
          className="text-lg sm:text-xl font-bold tracking-tight text-white dark:text-white transition-opacity hover:opacity-90 flex items-center gap-1.5"
        >
          <span className="font-extrabold text-white">M Ghufron</span>
          <span className="text-[#168BFF] dark:text-[#29C4FF] font-semibold">Arrozzaq</span>
        </a>

        {/* Bagian tengah hingga kanan: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative text-sm font-medium transition-colors py-1 ${
                  isActive
                    ? "text-[#168BFF] dark:text-[#29C4FF]"
                    : "text-[#B8C8DF] hover:text-white dark:text-[#B8C8DF] dark:hover:text-white"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#168BFF] to-[#29C4FF] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Pojok paling kanan: Theme toggle & mobile menu trigger */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2.5 rounded-full border border-[#168BFF]/30 bg-[#061E43]/60 dark:bg-[#061E43]/80 hover:bg-[#168BFF]/20 transition-all duration-200 text-[#29C4FF] hover:scale-105 active:scale-95"
            title={theme === "dark" ? "Ganti ke Tema Terang" : "Ganti ke Tema Gelap"}
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-amber-300 transition-transform duration-300 rotate-0 hover:rotate-45" />
            ) : (
              <Moon className="w-5 h-5 text-[#0878DB] transition-transform duration-300" />
            )}
          </button>

          {/* Hamburger menu for mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="md:hidden p-2.5 rounded-lg border border-[#168BFF]/30 text-white bg-[#061E43]/60 hover:bg-[#168BFF]/20 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#03132D] border-b border-[#168BFF]/20 px-6 py-5 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#B8C8DF] hover:text-[#29C4FF] font-medium py-2 border-b border-white/5 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

