"use client";

import { useEffect, useState } from "react";
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from "lucide-react";

export interface LightboxData {
  src: string;
  alt: string;
  caption?: string;
}

export function Lightbox({
  data,
  onClose,
  onPrev,
  onNext,
}: {
  data: LightboxData | null;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}) {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    if (!data) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft" && onPrev) {
        onPrev();
      } else if (e.key === "ArrowRight" && onNext) {
        onNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [data, onClose, onPrev, onNext]);

  if (!data) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Preview Lightbox"
      className="fixed inset-0 z-99999 flex flex-col bg-black/75 backdrop-blur-2xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Lightbox Toolbar */}
      <div
        className="flex items-center justify-between px-6 py-4 bg-white/95 border-b border-gray-100 shrink-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center space-x-3">
          <span className="text-xs font-mono text-[#D6336C] font-bold uppercase tracking-wider">
            {"// High-Resolution Inspection"}
          </span>
          <span className="text-xs text-[#867E91] font-mono hidden sm:inline">
            (Esc to close)
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            aria-label="Toggle zoom"
            className="p-2 rounded-xl bg-[#FAF8FB] border border-gray-200 text-[#1C1924] hover:text-[#D6336C] transition-colors"
          >
            {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
          </button>
          <button
            onClick={onClose}
            aria-label="Close lightbox"
            className="p-2 rounded-xl bg-[#FAF8FB] border border-gray-200 text-[#1C1924] hover:text-[#D6336C] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Viewport */}
      <div
        className="relative flex-1 flex items-center justify-center p-4 sm:p-8 overflow-auto select-none"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        {onPrev && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            aria-label="Previous image"
            className="absolute left-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/90 border border-gray-200 text-[#1C1924] hover:bg-[#FFF0F6] transition-all hidden sm:block shadow-md"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* The Image */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={`relative max-w-full max-h-full transition-transform duration-300 ${
            isZoomed ? "scale-150 cursor-zoom-out" : "cursor-zoom-in"
          }`}
          onClickCapture={() => setIsZoomed(!isZoomed)}
        >
          <img
            src={data.src}
            alt={data.alt}
            className="max-h-[75vh] w-auto rounded-2xl object-contain shadow-2xl border border-white"
          />
        </div>

        {onNext && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            aria-label="Next image"
            className="absolute right-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/90 border border-gray-200 text-[#1C1924] hover:bg-[#FFF0F6] transition-all hidden sm:block shadow-md"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Caption Footer */}
      {data.caption && (
        <div
          className="px-6 py-3 bg-white border-t border-gray-100 text-center text-sm font-mono text-[#1C1924] shrink-0"
          onClick={(e) => e.stopPropagation()}
        >
          {data.caption}
        </div>
      )}
    </div>
  );
}
