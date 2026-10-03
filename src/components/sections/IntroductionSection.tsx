"use client";

import { GraduationCap, Award, Sparkles } from "lucide-react";

export function IntroductionSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32 px-6 sm:px-8 border-t border-[#F06595]/15 bg-[#FCFAFC]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Section label & High Distinction Metric Card */}
        <div className="lg:col-span-4 space-y-6">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-[#D6336C] uppercase tracking-widest font-bold">
            <span className="w-2 h-2 rounded-full bg-[#D6336C] animate-ping" />
            <span>01 / HELLO</span>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-[#F06595]/25 space-y-5 shadow-[0_12px_36px_rgba(240,101,149,0.08)]">
            <div className="flex items-center justify-between border-b border-[#F06595]/15 pb-4">
              <span className="text-xs font-mono text-[#845EF7] uppercase tracking-wider font-bold">
                {"// ACADEMIC FOUNDATION"}
              </span>
              <div className="p-1.5 rounded-lg bg-[#F3F0FF] text-[#7048E8]">
                <GraduationCap className="w-4 h-4" />
              </div>
            </div>

            <div>
              <div className="text-4xl sm:text-5xl font-black text-[#1C1924] tracking-tight">
                3.94 <span className="text-lg text-[#E64980] font-normal">/ 4.00</span>
              </div>
              <div className="text-xs font-mono text-[#20C997] mt-1 font-bold uppercase tracking-wider">
                High Distinction · BS Computer Science
              </div>
              <p className="text-xs text-[#5E5568] mt-2 leading-relaxed">
                Lebanese International University (2022–2025). President’s Outstanding Recognition Award &amp; continuous Dean’s List across all semesters.
              </p>
            </div>

            <div className="pt-2 border-t border-gray-100 text-[11px] font-mono text-[#E64980]">
              <code>const passionForUI = true;</code>
            </div>
          </div>
        </div>

        {/* Right Column: Headline & Value Propositions */}
        <div className="lg:col-span-8 space-y-8">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#1C1924] leading-tight">
            I care deeply about how software feels to use.
          </h2>

          <div className="space-y-6 text-base sm:text-lg text-[#494454] leading-relaxed font-light">
            <p>
              I’m a Computer Science graduate and Frontend Developer focused on building responsive, maintainable and engaging web experiences. My work spans React, Next.js, Vue.js and TypeScript, with experience debugging production interfaces, testing features, integrating APIs and turning product requirements into polished user-facing experiences.
            </p>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#FFF0F6] via-white to-[#F3F0FF] border-l-4 border-[#F06595] border-y border-r border-[#F06595]/20 shadow-2xs">
              <p className="text-[#1C1924] font-normal italic">
                &ldquo;I also work beyond the browser when needed — building backend services, databases, mobile applications and AI-powered features — which helps me understand the complete product behind the interface.&rdquo;
              </p>
              <span className="block mt-2 text-xs font-mono text-[#845EF7] font-semibold uppercase tracking-wider">
                {"// Frontend Specialist Direction + Full-Stack Awareness"}
              </span>
            </div>
          </div>

          {/* Quick value proposition badges in light theme */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-white border border-[#F06595]/20 shadow-xs space-y-1.5">
              <div className="text-xs font-mono text-[#D6336C] uppercase font-bold">Frontend First</div>
              <div className="text-xs text-[#5E5568]">Thoughtful typography, fluid responsive behavior, and sub-second UX.</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#F06595]/20 shadow-xs space-y-1.5">
              <div className="text-xs font-mono text-[#845EF7] uppercase font-bold">Full-Stack Capable</div>
              <div className="text-xs text-[#5E5568]">Practical node services, relational data schemas, and RESTful APIs.</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#F06595]/20 shadow-xs space-y-1.5">
              <div className="text-xs font-mono text-[#20C997] uppercase font-bold">AI Curious</div>
              <div className="text-xs text-[#5E5568]">Integrating predictive inference pipelines directly into user-facing web tools.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
