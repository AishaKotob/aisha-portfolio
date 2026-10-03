"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Sparkles, Heart } from "lucide-react";

export function Footer() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Beirut",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 px-6 sm:px-8 border-t border-[#F06595]/15 bg-[#FCFAFC] text-xs font-mono text-[#867E91]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand mark & title */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#FFF0F6] to-[#F3F0FF] border border-[#F06595]/30 flex items-center justify-center font-bold text-xs text-[#E64980] shadow-xs">
            AK
          </div>
          <div>
            <div className="text-sm font-bold text-[#1C1924] font-sans">Aisha Kotob</div>
            <div className="text-[10px] text-[#D6336C] uppercase tracking-wider font-semibold">
              Frontend Developer &amp; Motion Designer
            </div>
          </div>
        </div>

        {/* Center: Live Time in Lebanon & Status */}
        <div className="flex items-center space-x-3 px-4 py-2 rounded-full bg-white border border-[#F06595]/20 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#20C997] animate-pulse" />
          <span>LEBANON (UTC+3): {time || "--:--:--"}</span>
          <span className="text-[#845EF7] font-semibold">{"// AVAILABLE FOR ROLES"}</span>
        </div>

        {/* Right: Scroll to top & Copyright */}
        <div className="flex items-center space-x-6">
          <span>&copy; {new Date().getFullYear()} Aisha Kotob</span>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            data-cursor="pointer"
            className="p-2 rounded-xl bg-white border border-[#F06595]/20 hover:border-[#845EF7] text-[#1C1924] hover:text-[#D6336C] transition-all flex items-center space-x-1 shadow-2xs"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#E64980]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
