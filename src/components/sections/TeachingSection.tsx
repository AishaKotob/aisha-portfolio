"use client";

import { teachingData, leadershipData } from "@/data/education";
import { BookOpen, HeartHandshake } from "lucide-react";

export function TeachingSection() {
  return (
    <section className="relative py-24 sm:py-32 px-6 sm:px-8 border-t border-[#F06595]/15 bg-[#FCFAFC]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-[#E64980] uppercase tracking-widest font-bold">
            <span className="w-2 h-2 rounded-full bg-[#E64980] animate-ping" />
            <span>08 / PEDAGOGY &amp; LEADERSHIP</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-[#1C1924]">
            Teaching &amp; <span className="font-serif-accent italic font-normal text-gradient-rose-gold">Community Impact</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* TEACHING CARD (7 cols) */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-white border border-[#F06595]/25 space-y-6 shadow-[0_12px_40px_rgba(240,101,149,0.06)]">
            <div className="flex items-center space-x-3 text-xs font-mono text-[#845EF7] uppercase tracking-wider font-bold">
              <BookOpen className="w-4 h-4 text-[#E64980]" />
              <span>Teaching Reinforces Understanding</span>
            </div>

            <p className="text-base sm:text-lg text-[#1C1924] font-light leading-relaxed">
              {teachingData.quote}
            </p>

            <div className="space-y-2 pt-2">
              <span className="text-xs font-mono text-[#867E91] uppercase tracking-wider font-bold block">
                Instructional Domains (Grades 1 — 12 &amp; University Peers):
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {teachingData.subjects.map((subj, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-[#FAF8FB] border border-[#F06595]/15 text-xs font-mono text-[#494454] flex items-center space-x-2 font-semibold"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E64980]" />
                    <span className="truncate">{subj}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-gray-100 text-xs text-[#5E5568] font-light">
              {teachingData.pedagogyPoints.map((pt, idx) => (
                <div key={idx} className="flex items-start space-x-2">
                  <span className="text-[#845EF7] font-bold">↳</span>
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* VOLUNTEERING & LEADERSHIP (5 cols) */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-white border border-[#845EF7]/25 space-y-5 shadow-[0_12px_40px_rgba(132,94,247,0.06)]">
            <div className="flex items-center space-x-3 text-xs font-mono text-[#E64980] uppercase tracking-wider font-bold">
              <HeartHandshake className="w-4 h-4 text-[#E64980]" />
              <span>Community Leadership</span>
            </div>

            <p className="text-xs text-[#5E5568]">
              Active community mentor and student advocate across educational access and youth development initiatives.
            </p>

            <div className="space-y-3 pt-2 divide-y divide-gray-100">
              {leadershipData.map((act, idx) => (
                <div key={idx} className="pt-3 first:pt-0 space-y-1">
                  <div className="flex items-center justify-between text-xs font-bold text-[#1C1924]">
                    <span>{act.organization}</span>
                    <span className="text-[10px] font-mono text-[#845EF7] uppercase font-bold">{act.role}</span>
                  </div>
                  <div className="text-xs text-[#5E5568] leading-relaxed">
                    {act.impact}
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
