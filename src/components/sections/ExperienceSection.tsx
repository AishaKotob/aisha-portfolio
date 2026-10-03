"use client";

import { useState } from "react";
import { experienceData } from "@/data/experience";
import { Calendar, MapPin, ShieldCheck, ChevronRight, Check } from "lucide-react";
import { useDevNotifications } from "@/components/ui/DevNotificationHUD";

export function ExperienceSection() {
  const [selectedId, setSelectedId] = useState<string>(experienceData[0].id);
  const activeExp = experienceData.find((e) => e.id === selectedId) || experienceData[0];
  const { notify } = useDevNotifications();

  return (
    <section id="experience" className="relative py-28 sm:py-36 px-6 sm:px-8 border-t border-[#F06595]/15 bg-[#FAF8FB]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#F06595]/15 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-[#D6336C] uppercase tracking-widest font-bold">
              <span className="w-2 h-2 rounded-full bg-[#D6336C] animate-ping" />
              <span>05 / EXPERIENCE</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-[#1C1924]">
              Professional <span className="font-serif-accent italic font-normal text-gradient-rose-gold">Trajectory</span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[#5E5568] font-light">
            Continuous development across commercial software products, citizen services, founder responsibilities, and team engineering sprints.
          </p>
        </div>

        {/* Master-Detail Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Timeline Selectors (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {experienceData.map((item) => {
              const isSelected = item.id === selectedId;
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    setSelectedId(item.id);
                    notify("inspect", "Experience Timeline", `Selected role at ${item.company}`);
                  }}
                  data-cursor="pointer"
                  className={`group p-4 sm:p-5 rounded-2xl border cursor-pointer transition-all duration-200 flex items-center justify-between ${
                    isSelected
                      ? "bg-white border-[#F06595] shadow-[0_8px_25px_rgba(240,101,149,0.14)]"
                      : "bg-[#FCFAFC] border-gray-200 hover:border-[#F06595]/40 hover:bg-white"
                  }`}
                >
                  <div className="space-y-1 min-w-0 pr-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-mono text-[#D6336C] uppercase font-bold">
                        {item.period}
                      </span>
                      {item.frontendEmphasis && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#20C997]" />
                      )}
                    </div>
                    <div className="text-base font-bold text-[#1C1924] truncate group-hover:text-[#D6336C] transition-colors">
                      {item.company}
                    </div>
                    <div className="text-xs text-[#867E91] truncate font-mono">
                      {item.role}
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-5 h-5 shrink-0 transition-transform ${
                      isSelected ? "text-[#D6336C] translate-x-1" : "text-gray-400 opacity-60"
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Right Column: Detailed Experience Card (7 cols) */}
          <div className="lg:col-span-7 sticky top-28 p-6 sm:p-8 rounded-3xl bg-white border border-[#F06595]/25 space-y-6 shadow-[0_12px_40px_rgba(240,101,149,0.08)]">
            {/* Header info */}
            <div className="space-y-3 border-b border-gray-100 pb-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-mono text-[#7048E8] uppercase tracking-wider font-bold">
                  {activeExp.company}
                </span>
                <div className="flex items-center space-x-2 text-xs font-mono text-[#867E91]">
                  <Calendar className="w-3.5 h-3.5 text-[#E64980]" />
                  <span>{activeExp.period}</span>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-[#1C1924]">
                {activeExp.role}
              </h3>

              <div className="flex items-center space-x-2 text-xs font-mono text-[#867E91]">
                <MapPin className="w-3.5 h-3.5 text-[#F06595]" />
                <span>{activeExp.location}</span>
              </div>
            </div>

            {/* Role Summary */}
            <p className="text-sm sm:text-base text-[#494454] leading-relaxed font-light">
              {activeExp.summary}
            </p>

            {/* Core Responsibilities */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono text-[#D6336C] uppercase tracking-wider font-bold block">
                Key Contributions &amp; Responsibilities:
              </span>
              <ul className="space-y-2.5">
                {activeExp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-sm text-[#5E5568]">
                    <Check className="w-4 h-4 text-[#20C997] shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Confidentiality Notice if applicable */}
            {activeExp.confidentialityNote && (
              <div className="p-3.5 rounded-xl bg-[#FFF0F6] border border-[#F06595]/20 flex items-center space-x-2 text-xs font-mono text-[#D6336C]">
                <ShieldCheck className="w-4 h-4 text-[#E64980] shrink-0" />
                <span>{activeExp.confidentialityNote}</span>
              </div>
            )}

            {/* Applied Technologies */}
            <div className="pt-4 border-t border-gray-100 space-y-2">
              <span className="text-xs font-mono text-[#867E91] uppercase tracking-wider block font-semibold">
                Applied Technologies:
              </span>
              <div className="flex flex-wrap gap-2">
                {activeExp.technologies.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-[#FAF8FB] border border-[#F06595]/15 text-xs font-mono font-semibold text-[#494454]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
