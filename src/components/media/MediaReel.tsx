"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BrowserFrame } from "./BrowserFrame";

interface MediaItem {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  role?: string;
}

export function MediaReel({
  items,
  onOpenLightbox,
}: {
  items: MediaItem[];
  onOpenLightbox?: (src: string, alt: string, caption?: string) => void;
}) {
  const reelRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (reelRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = reelRef.current;
      setCanScrollLeft(scrollLeft > 20);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);
    }
  };

  const scrollBy = (offset: number) => {
    if (reelRef.current) {
      reelRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <div className="relative group">
      {/* Scroll controls */}
      <div className="flex items-center justify-between mb-3 px-1">
        <span className="text-[11px] font-mono text-[#8B5CF6] uppercase tracking-wider">
          {`// Media Reel (${items.length} views)`}
        </span>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => scrollBy(-400)}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
            className="p-1.5 rounded-lg bg-[#17141E] border border-white/5 text-[#9D96A5] hover:text-[#F6F1F5] disabled:opacity-30 disabled:pointer-events-none transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scrollBy(400)}
            disabled={!canScrollRight}
            aria-label="Scroll right"
            className="p-1.5 rounded-lg bg-[#17141E] border border-white/5 text-[#9D96A5] hover:text-[#F6F1F5] disabled:opacity-30 disabled:pointer-events-none transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Reel container */}
      <div
        ref={reelRef}
        onScroll={checkScroll}
        data-cursor="DRAG"
        className="flex space-x-6 overflow-x-auto pb-4 pt-1 scroll-smooth snap-x snap-mandatory scrollbar-none"
        style={{ scrollbarWidth: "none" }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="w-[85vw] sm:w-[540px] md:w-[620px] shrink-0 snap-start"
          >
            <BrowserFrame
              src={item.src}
              alt={item.alt}
              caption={item.caption}
              badge={item.role}
              onOpenLightbox={onOpenLightbox}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
