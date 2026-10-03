"use client";

import { useState } from "react";
import { educationData, certificatesData } from "@/data/education";
import { Award, ChevronDown } from "lucide-react";

export function EducationSection() {
  const [showAllCerts, setShowAllCerts] = useState(false);
  const displayedCerts = showAllCerts ? certificatesData : certificatesData.slice(0, 4);

  return (
    <section id="education" className="relative py-28 sm:py-36 px-6 sm:px-8 border-t border-[#F06595]/15 bg-[#FAF8FB]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-[#E64980] uppercase tracking-widest font-bold">
            <span className="w-2 h-2 rounded-full bg-[#E64980] animate-ping" />
            <span>07 / ACADEMIC EXCELLENCE</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-[#1C1924]">
            Education &amp; <span className="font-serif-accent italic font-normal text-gradient-rose-gold">Recognition</span>
          </h2>
        </div>

        {/* PROMINENT DEGREE HERO CARD */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-white via-[#FFF0F6] to-[#F3F0FF] border border-[#F06595]/30 shadow-[0_16px_50px_rgba(240,101,149,0.08)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-radial from-[#F06595]/10 via-[#845EF7]/5 to-transparent blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Degree & Institution (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-white border border-[#F06595]/20 text-[#845EF7] font-bold">
                  {educationData.period}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-[#FFF0F6] border border-[#F06595]/30 text-[#D6336C] font-bold">
                  {educationData.distinction}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-4xl font-black text-[#1C1924] tracking-tight">
                  {educationData.degree}
                </h3>
                <div className="text-lg sm:text-xl text-[#5E5568] font-light mt-1">
                  {educationData.institution} · {educationData.location}
                </div>
              </div>

              {/* Honors list */}
              <div className="space-y-2.5 pt-2">
                {educationData.honors.map((honor, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-sm text-[#494454]">
                    <Award className="w-4 h-4 text-[#E64980] shrink-0" />
                    <span>{honor}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* GPA Stat Block (4 cols) */}
            <div className="lg:col-span-4 p-8 rounded-3xl bg-white border border-[#F06595]/30 flex flex-col items-center justify-center text-center shadow-md">
              <span className="text-xs font-mono text-[#D6336C] uppercase tracking-widest font-bold">
                CUMULATIVE GPA
              </span>
              <div className="text-5xl sm:text-6xl font-black text-[#1C1924] tracking-tight my-2">
                3.94
              </div>
              <div className="text-xs font-mono text-[#20C997] uppercase tracking-wider font-bold">
                SCALE: 4.00
              </div>
              <span className="text-[11px] text-[#867E91] mt-3 font-mono">
                Continuous Dean&apos;s &amp; President&apos;s Honor Roll
              </span>
            </div>
          </div>
        </div>

        {/* CERTIFICATES & LEARNING SECTION */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <div>
              <span className="text-xs font-mono text-[#845EF7] uppercase tracking-wider font-bold block mb-1">
                {"// Continuous Technical Development"}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#1C1924]">
                Certificates &amp; Specialized Programs
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {displayedCerts.map((cert) => (
              <div
                key={cert.id}
                className="p-5 rounded-2xl bg-white border border-[#F06595]/20 hover:border-[#845EF7]/40 transition-all space-y-2 shadow-2xs"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#7048E8]">{cert.issuer}</span>
                  {cert.badge && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono uppercase bg-[#FFF0F6] text-[#D6336C] border border-[#F06595]/30 font-bold">
                      {cert.badge}
                    </span>
                  )}
                </div>

                <h4 className="text-base font-bold text-[#1C1924]">{cert.title}</h4>
                <p className="text-xs text-[#5E5568] leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>

          {/* View Additional Learning Toggle */}
          <div className="flex justify-center pt-4">
            <button
              onClick={() => setShowAllCerts(!showAllCerts)}
              data-cursor="pointer"
              className="px-6 py-2.5 rounded-xl bg-white border border-[#F06595]/25 hover:border-[#F06595] text-xs font-mono font-bold text-[#D6336C] flex items-center space-x-2 transition-all shadow-xs"
            >
              <span>{showAllCerts ? "Collapse Learning" : "View Additional Learning & Cisco Certifications"}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showAllCerts ? "rotate-180" : ""}`} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
