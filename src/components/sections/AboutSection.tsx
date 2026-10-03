"use client";

import { profileData } from "@/data/profile";
import { Sparkles, Code2, Heart } from "lucide-react";

export function AboutSection() {
  return (
    <section className="relative py-24 sm:py-32 px-6 sm:px-8 border-t border-[#F06595]/15 bg-[#FAF8FB]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-[#D6336C] uppercase tracking-widest font-bold">
            <span className="w-2 h-2 rounded-full bg-[#D6336C] animate-ping" />
            <span>09 / IDENTITY</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-[#1C1924]">
            Behind the <span className="font-serif-accent italic font-normal text-gradient-rose-gold">Interface</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Narrative Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#494454] leading-relaxed font-light">
            <p>
              I’m Aisha, a Computer Science graduate and frontend developer based in Lebanon. I enjoy turning ideas into responsive, usable products and solving the small interface problems that make software feel more polished and reliable.
            </p>

            <p>
              My strongest focus is frontend development, particularly modern JavaScript frameworks and responsive UI, while my experience with backend systems, databases, mobile development and machine learning allows me to understand the product beyond the screen.
            </p>

            <p>
              I’m especially interested in opportunities where I can grow as a frontend engineer while contributing to meaningful digital products.
            </p>

            {/* Quick Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-2xl bg-white border border-[#F06595]/20 shadow-xs space-y-1.5">
                <span className="text-xs font-mono text-[#D6336C] uppercase font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#E64980]" />
                  <span>Frontend Craft First</span>
                </span>
                <p className="text-xs text-[#5E5568]">
                  Micro-interactions, accessible tab stops, and layouts that never break on edge-case viewports.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#845EF7]/20 shadow-xs space-y-1.5">
                <span className="text-xs font-mono text-[#7048E8] uppercase font-bold flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-[#845EF7]" />
                  <span>Product Perspective</span>
                </span>
                <p className="text-xs text-[#5E5568]">
                  Evaluating features from the end-user’s mental model rather than just lines of code.
                </p>
              </div>
            </div>
          </div>

          {/* Profile Card / Architectural Graphic (5 cols) */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-gradient-to-br from-white via-[#FFF0F6] to-[#F3F0FF] border border-[#F06595]/30 shadow-[0_16px_50px_rgba(240,101,149,0.08)] space-y-6">
            <div className="flex items-center justify-between border-b border-[#F06595]/15 pb-4">
              <div className="flex items-center space-x-3">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#F06595] to-[#845EF7] flex items-center justify-center font-mono text-sm font-bold text-white shadow-sm">
                  AK
                </div>
                <div>
                  <div className="text-base font-bold text-[#1C1924]">{profileData.name}</div>
                  <div className="text-[11px] font-mono text-[#D6336C] font-semibold uppercase">Frontend Developer</div>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-[#E6FCF5] text-[#0CA678] border border-[#20C997]/30">
                ACTIVE
              </span>
            </div>

            <div className="space-y-3 text-xs font-mono text-[#5E5568]">
              <div className="flex justify-between py-1.5 border-b border-gray-100">
                <span>Location</span>
                <span className="font-semibold text-[#1C1924]">{profileData.location}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-gray-100">
                <span>Degree</span>
                <span className="font-semibold text-[#1C1924]">B.S. in Computer Science</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-gray-100">
                <span>GPA</span>
                <span className="text-[#0CA678] font-bold">3.94 / 4.00 (High Distinction)</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-gray-100">
                <span>Primary Stacks</span>
                <span className="text-[#D6336C] font-semibold">React · Next.js · Vue · TS</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span>Full-Stack Breadth</span>
                <span className="text-[#845EF7] font-semibold">Node · Laravel · MySQL · Mongo</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-[#F06595]/20 text-[11px] font-mono text-[#D6336C] shadow-2xs">
              <code>&lt;Aisha role=&quot;FrontendDeveloper&quot; motion=&quot;Anime.js&quot; /&gt;</code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
