"use client";

import dynamic from "next/dynamic";
import { profileData } from "@/data/profile";
import { ArrowDownRight, FileDown, Sparkles, Code2, Layers, Cpu } from "lucide-react";
import { useDevNotifications } from "@/components/ui/DevNotificationHUD";

// Lazy-load Three.js Digital Bloom with client fallback
const DigitalBloom = dynamic(
  () => import("@/components/canvas/DigitalBloom").then((mod) => mod.DigitalBloom),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[450px] flex items-center justify-center">
        <div className="w-20 h-20 rounded-full border-2 border-dashed border-[#F06595]/50 animate-spin" />
      </div>
    ),
  }
);

export function HeroSection({
  onExploreWork,
  onAboutClick,
}: {
  onExploreWork?: () => void;
  onAboutClick?: () => void;
}) {
  const { notify } = useDevNotifications();

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-6 sm:px-8 overflow-hidden tech-grid bg-[#FCFAFC]">
      {/* Background ambient radial gradients with soft eye-comfortable tones */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-radial from-[#F06595]/12 via-[#FCC2D7]/8 to-transparent blur-[110px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-radial from-[#845EF7]/10 via-[#D0BFFF]/6 to-transparent blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* LEFT COLUMN: Large Typography & Frontend Engineer Identity */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 z-10">
          {/* Top Status & Role Pill */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-[#F06595]/30 shadow-[0_4px_16px_rgba(240,101,149,0.12)]">
              <span className="w-2 h-2 rounded-full bg-[#20C997] animate-pulse" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#D6336C] uppercase">
                {profileData.role}
              </span>
            </div>

            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#FFF0F6] border border-[#F06595]/20 text-[11px] font-mono text-[#E64980]">
              <Sparkles className="w-3 h-3 text-[#E64980]" />
              <span>Motion Designer &amp; UI Engineer</span>
            </div>
          </div>

          {/* Large Typography: AISHA KOTOB with front-end code accent */}
          <div className="space-y-1">
            <div className="text-xs font-mono text-[#845EF7] tracking-wider mb-1 flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-[#F06595]" />
              <span>const developer = &quot;Aisha Kotob&quot;;</span>
            </div>
            <h1 className="text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-black tracking-tight leading-[0.92] text-[#1C1924]">
              <span className="block hover:text-[#D6336C] transition-colors duration-300">
                {profileData.firstName}
              </span>
              <span className="block text-gradient-rose-gold">
                {profileData.lastName}
              </span>
            </h1>
          </div>

          {/* Supporting Headline Copy */}
          <p className="text-lg sm:text-xl md:text-2xl font-light text-[#494454] max-w-2xl leading-relaxed">
            Building responsive, motion-crafted web experiences where thoughtful interfaces meet practical software engineering.
          </p>

          {/* Technology badges */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#D6336C]">
            {["React", "Next.js 16", "Vue.js", "TypeScript", "Anime.js", "Tailwind CSS"].map((tech, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-lg bg-white border border-[#F06595]/20 text-[#5E5568] hover:border-[#F06595] hover:text-[#E64980] transition-colors shadow-2xs"
              >
                #{tech}
              </span>
            ))}
          </div>

          {/* Interactive CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              onClick={() => {
                onExploreWork?.();
                notify("dom", "Selected Work", "Scrolled to case studies section");
              }}
              data-cursor="pointer"
              className="group inline-flex items-center space-x-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#F06595] via-[#E64980] to-[#845EF7] text-white font-semibold text-sm transition-all duration-300 shadow-[0_8px_25px_rgba(240,101,149,0.35)] hover:shadow-[0_12px_32px_rgba(240,101,149,0.5)] hover:scale-[1.02]"
            >
              <span>Explore Selected Work</span>
              <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#craft"
              onClick={() => {
                document.getElementById("craft")?.scrollIntoView({ behavior: "smooth" });
                notify("inspect", "Frontend Craft", "Inspecting responsive & component engineering matrix");
              }}
              data-cursor="pointer"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-2xl bg-white hover:bg-[#FFF0F6] border border-[#F06595]/25 hover:border-[#F06595] text-sm font-semibold text-[#1C1924] hover:text-[#D6336C] transition-all shadow-sm"
            >
              <Layers className="w-4 h-4 text-[#845EF7]" />
              <span>Interactive Craft</span>
            </a>

            <a
              href={profileData.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="↗"
              className="inline-flex items-center space-x-1.5 px-4 py-3.5 text-xs font-mono text-[#867E91] hover:text-[#D6336C] transition-colors"
            >
              <FileDown className="w-3.5 h-3.5 text-[#E64980]" />
              <span className="underline underline-offset-4">Download CV ↓</span>
            </a>
          </div>

          {/* Bottom Hero Metadata */}
          <div className="pt-6 border-t border-[#F06595]/15 grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px] font-mono text-[#867E91]">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#20C997]" />
              <span>{profileData.metaTags[0]}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#845EF7]" />
              <span className="truncate">{profileData.metaTags[1]}</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Three.js Digital Bloom */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <DigitalBloom />
        </div>
      </div>
    </section>
  );
}
