"use client";

import { useState, useRef } from "react";
import { Maximize2, MousePointer } from "lucide-react";

interface LongPagePreviewProps {
  src: string;
  alt: string;
  caption?: string;
  domain?: string;
  onOpenLightbox?: (src: string, alt: string, caption?: string) => void;
}

export function LongPagePreview({
  src,
  alt,
  caption,
  domain,
  onOpenLightbox,
}: LongPagePreviewProps) {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="group rounded-2xl border border-[rgba(246,241,245,0.08)] bg-[#101018] overflow-hidden shadow-2xl transition-all hover:border-[#8B5CF6]/50">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#17141E] border-b border-white/5">
        <div className="flex items-center space-x-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#F45B9C]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#8B5CF6]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#59D8FF]" />
        </div>
        <div className="text-[11px] font-mono text-[#9D96A5] px-2 py-0.5 rounded bg-black/40 border border-white/5">
          {domain || "Full Page Architecture"}
        </div>
        {onOpenLightbox && (
          <button
            onClick={() => onOpenLightbox(src, alt, caption)}
            className="p-1 rounded text-[#9D96A5] hover:text-[#59D8FF] transition-colors"
            data-cursor="OPEN"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Viewport with auto-scroll on hover */}
      <div
        ref={containerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => onOpenLightbox && onOpenLightbox(src, alt, caption)}
        data-cursor="OPEN"
        className="relative h-[420px] overflow-hidden cursor-pointer bg-[#08080D]"
      >
        <div
          className={`w-full transition-transform duration-[6000ms] ease-in-out ${
            isHovered ? "-translate-y-[45%]" : "translate-y-0"
          }`}
        >
          <img src={src} alt={alt} className="w-full object-cover" />
        </div>

        {/* Hover hint */}
        <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-[#08080D]/80 border border-white/10 text-[10px] font-mono text-[#9D96A5] flex items-center space-x-1.5 pointer-events-none opacity-80 group-hover:opacity-100">
          <MousePointer className="w-3 h-3 text-[#59D8FF]" />
          <span>{isHovered ? "Auto-panning" : "Hover to pan"}</span>
        </div>
      </div>

      {caption && (
        <div className="px-4 py-2 bg-[#17141E] border-t border-white/5 text-xs font-mono text-[#9D96A5]">
          {caption}
        </div>
      )}
    </div>
  );
}
