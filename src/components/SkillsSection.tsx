import React from "react";
import Image from "next/image";
import {
  TrendingUp,
  BarChart3,
  Brain,
  MessageSquare,
  Users,
  Lightbulb,
  Clock,
  RefreshCw,
  UserCheck,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function SkillsSection() {
  const { skills } = portfolioData;

  const renderSkillIcon = (iconName?: string) => {
    switch (iconName) {
      case "excel":
        return (
          <div className="relative w-8 h-8">
            <Image
              src="/images/skills/excel.png"
              alt="Excel Logo"
              fill
              className="object-contain"
            />
          </div>
        );
      case "word":
        return (
          <div className="relative w-8 h-8">
            <Image
              src="/images/skills/wordss.png"
              alt="Word Logo"
              fill
              className="object-contain"
            />
          </div>
        );
      case "powerpoint":
        return (
          <div className="relative w-8 h-8">
            <Image
              src="/images/skills/powerpoint.png"
              alt="PowerPoint Logo"
              fill
              className="object-contain"
            />
          </div>
        );
      case "google":
        return (
          <div className="relative w-8 h-8 rounded-full overflow-hidden">
            <Image
              src="/images/skills/google_workspace.jpg"
              alt="Google Workspace Logo"
              fill
              className="object-contain"
            />
          </div>
        );
      case "canva":
        return (
          <div className="relative w-8 h-8 rounded-full overflow-hidden">
            <Image
              src="/images/skills/canva.png"
              alt="Canva Logo"
              fill
              className="object-contain"
            />
          </div>
        );
      case "financial":
        return <TrendingUp className="w-6 h-6 text-[#29C4FF]" />;
      case "data":
        return <BarChart3 className="w-6 h-6 text-[#168BFF]" />;
      case "analytical":
        return <Brain className="w-6 h-6 text-indigo-400" />;
      default:
        return <BarChart3 className="w-6 h-6 text-[#168BFF]" />;
    }
  };

  const getSoftSkillIcon = (iconName?: string) => {
    switch (iconName) {
      case "message":
        return <MessageSquare className="w-5 h-5 text-[#29C4FF]" />;
      case "users":
        return <Users className="w-5 h-5 text-[#29C4FF]" />;
      case "lightbulb":
        return <Lightbulb className="w-5 h-5 text-[#29C4FF]" />;
      case "clock":
        return <Clock className="w-5 h-5 text-[#29C4FF]" />;
      case "refresh":
        return <RefreshCw className="w-5 h-5 text-[#29C4FF]" />;
      case "user-check":
        return <UserCheck className="w-5 h-5 text-[#29C4FF]" />;
      default:
        return <Lightbulb className="w-5 h-5 text-[#29C4FF]" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-1.5 h-8 bg-gradient-to-b from-[#168BFF] to-[#29C4FF] rounded-full" />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Keterampilan
          </h2>
        </div>

        {/* Layout: Main grid for Hard Skills + Side bar for Soft Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Area: Hard Skills (8 Cards) */}
          <div className="lg:col-span-8">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm uppercase tracking-wider font-semibold text-[#29C4FF]">
                Hard Skills & Technical Competencies
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.hard.map((skill, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-[#061E43]/70 hover:bg-[#061E43]/90 border border-[#168BFF]/25 hover:border-[#29C4FF]/60 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#168BFF]/15 group flex flex-col justify-between"
                >
                  <div className="flex items-start gap-3.5 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-[#03132D] border border-[#168BFF]/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md p-1.5">
                      {renderSkillIcon(skill.icon)}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white group-hover:text-[#29C4FF] transition-colors leading-snug">
                        {skill.name}
                      </h4>

                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#B8C8DF] leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Samping: Soft Skills dalam daftar vertikal */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm uppercase tracking-wider font-semibold text-[#29C4FF]">
                Soft Skills
              </h3>

            </div>

            <div className="flex-1 p-6 rounded-2xl bg-gradient-to-b from-[#061E43]/80 to-[#03132D]/90 border border-[#168BFF]/30 backdrop-blur-sm flex flex-col justify-around gap-4 shadow-xl">
              {skills.soft.map((item, index) => (
                <div
                  key={index}
                  className="p-3.5 rounded-xl bg-[#03132D]/80 border border-[#168BFF]/20 hover:border-[#29C4FF]/40 transition-colors flex items-center gap-3.5 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#061E43] border border-[#168BFF]/30 flex items-center justify-center shrink-0 group-hover:bg-[#168BFF]/20 transition-colors">
                    {getSoftSkillIcon(item.icon)}
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-white group-hover:text-[#29C4FF] transition-colors">
                      {item.name}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
