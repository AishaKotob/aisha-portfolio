"use client";

import { useEffect, useState } from "react";

export function MicroLoader() {
  const [show, setShow] = useState<boolean>(false);
  const [animatingOut, setAnimatingOut] = useState<boolean>(false);

  useEffect(() => {
    // Check if previously visited in this session
    const visited = typeof window !== "undefined" ? sessionStorage.getItem("aisha_visited_light") : null;
    const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (visited || prefersReducedMotion) {
      return;
    }

    const showTimer = setTimeout(() => {
      setShow(true);
      sessionStorage.setItem("aisha_visited_light", "true");
    }, 10);

    const fadeTimer = setTimeout(() => {
      setAnimatingOut(true);
    }, 750);

    const removeTimer = setTimeout(() => {
      setShow(false);
    }, 1050);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-99999 flex items-center justify-center bg-[#FCFAFC] transition-opacity duration-300 ease-out ${
        animatingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Soft rosy glow behind loader */}
        <div className="absolute -inset-10 bg-radial from-[#F06595]/20 via-[#845EF7]/10 to-transparent blur-3xl animate-pulse" />

        {/* Brand tag */}
        <div className="relative flex items-center space-x-1.5 font-mono text-2xl md:text-3xl font-bold tracking-tight">
          <span className="text-[#845EF7] transition-transform duration-500 ease-out">&lt;</span>
          <span className="text-[#1C1924] font-sans font-black tracking-normal">Aisha</span>
          <span className="text-[#F06595] ml-1">/</span>
          <span className="text-[#20C997]">&gt;</span>
        </div>

        {/* Technical subtitle indicator */}
        <div className="mt-3 flex items-center space-x-2 text-[11px] font-mono text-[#867E91] tracking-widest uppercase">
          <span className="inline-block w-2 h-2 rounded-full bg-[#F06595] animate-ping" />
          <span>MOUNTING FRONTEND CORE</span>
        </div>
      </div>
    </div>
  );
}
