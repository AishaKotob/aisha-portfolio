"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<string>("default");
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // Only enable on pointer-fine desktop devices and when reduced motion is not preferred
    const hasPointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!hasPointer || prefersReducedMotion) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const cursorEl = target.closest("[data-cursor]");
        if (cursorEl) {
          const type = cursorEl.getAttribute("data-cursor") || "default";
          setCursorType(type);
          return;
        }

        if (target.closest("a, button, [role='button'], input, select")) {
          setCursorType("pointer");
          return;
        }

        setCursorType("default");
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible]);

  // Smooth lerp for trailing ring
  useEffect(() => {
    let animId: number;
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const animate = () => {
      setTrailingPos((prev) => ({
        x: lerp(prev.x, position.x, 0.22),
        y: lerp(prev.y, position.y, 0.22),
      }));
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [position]);

  if (!isVisible) return null;

  const isSpecial = ["VIEW", "OPEN", "DRAG", "PLAY", "TEST", "↗"].includes(cursorType);

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden transition-opacity duration-300">
      {/* Front-end developer code beacon pointer */}
      <div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-[#E64980] shadow-[0_0_8px_rgba(230,73,128,0.8)] transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${position.x - 5}px, ${position.y - 5}px, 0) scale(${isClicking ? 0.6 : 1})`,
        }}
      />

      {/* Trailing chic follower with developer badge or magnetic ring */}
      <div
        className={`fixed top-0 left-0 flex items-center justify-center transition-all duration-200 ease-out border backdrop-blur-[4px] ${
          isSpecial
            ? "px-3 py-1 rounded-full bg-white/95 border-[#F06595] text-[10px] font-mono font-bold tracking-wider text-[#D6336C] shadow-[0_4px_16px_rgba(240,101,149,0.25)]"
            : cursorType === "pointer"
            ? "w-10 h-10 -ml-5 -mt-5 rounded-full border-[#F06595]/50 bg-[#F06595]/10 scale-110 shadow-[0_0_12px_rgba(240,101,149,0.15)]"
            : "w-8 h-8 -ml-4 -mt-4 rounded-full border-[rgba(132,94,247,0.25)] bg-white/30"
        }`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0) ${
            isSpecial ? "translate(-50%, -50%)" : ""
          } scale(${isClicking ? 0.85 : 1})`,
        }}
      >
        {isSpecial && <span>{cursorType}</span>}
      </div>
    </div>
  );
}
