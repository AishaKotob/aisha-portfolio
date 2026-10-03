"use client";

import { useState } from "react";

interface PhoneScreen {
  id: string;
  title: string;
  src: string;
  role: string;
}

export function PhoneStack({
  screens,
  onOpenLightbox,
}: {
  screens?: PhoneScreen[];
  onOpenLightbox?: (src: string, alt: string, caption?: string) => void;
}) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const defaultScreens: PhoneScreen[] = [
    {
      id: "filter",
      title: "Multi-Filter Sheet",
      src: "/media/aisha/job-finder/job-finder-home.svg",
      role: "Filter Modal",
    },
    {
      id: "feed",
      title: "Job Discovery Feed",
      src: "/media/aisha/job-finder/job-finder-home.svg",
      role: "Main Feed",
    },
    {
      id: "detail",
      title: "Application Details",
      src: "/media/aisha/job-finder/job-finder-home.svg",
      role: "Job Dossier",
    },
  ];

  const displayScreens = screens && screens.length > 0 ? screens : defaultScreens;

  return (
    <div className="relative py-8 flex items-center justify-center min-h-[480px] overflow-hidden select-none">
      {/* Background glow */}
      <div className="absolute inset-x-12 inset-y-8 bg-radial from-[#8B5CF6]/15 via-[#59D8FF]/5 to-transparent blur-3xl pointer-events-none" />

      {/* 3-Phone Staggered Stack */}
      <div className="relative flex items-center justify-center w-full max-w-lg">
        {displayScreens.map((screen, idx) => {
          const isCenter = idx === 1;
          const isLeft = idx === 0;
          const isRight = idx === 2;

          let transformClass = "";
          let zClass = "z-10";

          if (isCenter) {
            zClass = "z-20";
            transformClass =
              hoveredIdx === null
                ? "translate-y-0 scale-100"
                : hoveredIdx === idx
                ? "scale-105 z-30"
                : "scale-95 opacity-90";
          } else if (isLeft) {
            transformClass =
              hoveredIdx === null
                ? "-translate-x-24 md:-translate-x-28 translate-y-4 -rotate-6 scale-90"
                : hoveredIdx === idx
                ? "-translate-x-28 scale-100 rotate-0 z-30"
                : "-translate-x-32 scale-85 opacity-70";
          } else if (isRight) {
            transformClass =
              hoveredIdx === null
                ? "translate-x-24 md:translate-x-28 translate-y-4 rotate-6 scale-90"
                : hoveredIdx === idx
                ? "translate-x-28 scale-100 rotate-0 z-30"
                : "translate-x-32 scale-85 opacity-70";
          }

          return (
            <div
              key={screen.id}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              onClick={() => onOpenLightbox && onOpenLightbox(screen.src, screen.title, screen.role)}
              data-cursor="OPEN"
              className={`absolute top-0 w-[220px] sm:w-[240px] aspect-[9/19] rounded-[36px] p-2.5 bg-[#17141E] border border-[rgba(246,241,245,0.12)] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] cursor-pointer transition-all duration-500 ease-out ${zClass} ${transformClass}`}
            >
              {/* Phone Notch / Speaker Island */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 rounded-full bg-[#08080D] border border-white/5 z-30 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-white/10 mr-2" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#59D8FF]/60" />
              </div>

              {/* Screen Body */}
              <div className="relative w-full h-full rounded-[28px] overflow-hidden bg-[#08080D] border border-white/5">
                <img
                  src={screen.src}
                  alt={screen.title}
                  className="w-full h-full object-cover"
                />

                {/* Bottom title pill */}
                <div className="absolute bottom-3 inset-x-3 p-2 rounded-xl bg-[#17141E]/90 border border-white/10 backdrop-blur-md text-center">
                  <div className="text-[11px] font-semibold text-[#F6F1F5] truncate">{screen.title}</div>
                  <div className="text-[9px] font-mono text-[#59D8FF] tracking-wider uppercase">{screen.role}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
