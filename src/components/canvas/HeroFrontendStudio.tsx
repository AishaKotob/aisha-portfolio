"use client";

import { useState } from "react";
import { Sparkles, Code2, Play, Layers, Check, Cpu, Zap, Activity } from "lucide-react";

export function HeroFrontendStudio() {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [springActive, setSpringActive] = useState(false);
  const [activeTheme, setActiveTheme] = useState<"rose" | "lavender" | "mint">("rose");
  const [stiffness, setStiffness] = useState<number>(320);
  const [clickCount, setClickCount] = useState<number>(0);

  const handleTriggerSpring = () => {
    setSpringActive(true);
    setClickCount((c) => c + 1);
    setTimeout(() => setSpringActive(false), 600);
  };

  const getThemeGlow = () => {
    if (activeTheme === "rose") return "from-[#F06595]/20 via-[#FCC2D7]/15 to-transparent";
    if (activeTheme === "lavender") return "from-[#845EF7]/20 via-[#D0BFFF]/15 to-transparent";
    return "from-[#20C997]/20 via-[#A9E34B]/15 to-transparent";
  };

  const getThemeAccent = () => {
    if (activeTheme === "rose") return "#E64980";
    if (activeTheme === "lavender") return "#7048E8";
    return "#0CA678";
  };

  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Dynamic ambient background glow */}
      <div
        className={`absolute -inset-4 bg-radial ${getThemeGlow()} blur-3xl transition-all duration-700 pointer-events-none -z-10`}
      />

      {/* Floating Interactive Badge: Performance */}
      <div className="absolute -top-4 -right-2 z-20 hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white/95 border border-[#F06595]/30 shadow-[0_8px_20px_rgba(240,101,149,0.15)] backdrop-blur-md animate-bounce duration-1000">
        <Activity className="w-3.5 h-3.5 text-[#20C997]" />
        <span className="text-[10px] font-mono font-bold text-[#1C1924]">60 FPS · CLS 0.00</span>
      </div>

      {/* Main Studio Frame */}
      <div className="rounded-3xl bg-white/95 border border-[#F06595]/30 shadow-[0_25px_60px_-12px_rgba(240,101,149,0.2)] backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-[#845EF7]/50">
        {/* Studio Window Chrome Bar */}
        <div className="px-5 py-3.5 bg-gradient-to-r from-[#FFF0F6]/80 via-white to-[#F3F0FF]/80 border-b border-[#F06595]/15 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-[#FF8787] border border-[#FF6B6B]/40" />
            <span className="w-3 h-3 rounded-full bg-[#FFD43B] border border-[#FCC419]/40" />
            <span className="w-3 h-3 rounded-full bg-[#69DB7C] border border-[#51CF66]/40" />
            <span className="text-xs font-mono font-bold text-[#5E5568] ml-2">
              AishaInterfaceStudio.tsx
            </span>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center space-x-1 bg-white/90 p-1 rounded-xl border border-[#F06595]/20 shadow-2xs">
            <button
              onClick={() => setActiveTab("preview")}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                activeTab === "preview"
                  ? "bg-gradient-to-r from-[#F06595] to-[#845EF7] text-white shadow-xs"
                  : "text-[#867E91] hover:text-[#1C1924]"
              }`}
            >
              Interactive UI
            </button>
            <button
              onClick={() => setActiveTab("code")}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                activeTab === "code"
                  ? "bg-gradient-to-r from-[#F06595] to-[#845EF7] text-white shadow-xs"
                  : "text-[#867E91] hover:text-[#1C1924]"
              }`}
            >
              Source Code
            </button>
          </div>
        </div>

        {/* Tab 1: Interactive Live Component Preview */}
        {activeTab === "preview" && (
          <div className="p-6 sm:p-7 space-y-6">
            {/* Live Component Card with spring physics */}
            <div
              onClick={handleTriggerSpring}
              className={`group cursor-pointer p-6 rounded-3xl bg-gradient-to-br from-[#FFF5F9] via-white to-[#F8F5FF] border border-[#F06595]/30 shadow-[0_12px_30px_rgba(240,101,149,0.12)] transition-all duration-300 relative overflow-hidden select-none ${
                springActive
                  ? "scale-[1.03] rotate-[0.8deg] border-[#845EF7] shadow-[0_20px_40px_rgba(132,94,247,0.25)]"
                  : "hover:scale-[1.01]"
              }`}
            >
              <div className="flex items-center justify-between pb-4 border-b border-[#F06595]/15">
                <div className="flex items-center space-x-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full animate-ping"
                    style={{ backgroundColor: getThemeAccent() }}
                  />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1C1924]">
                    Interactive Motion Surface
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-white text-[10px] font-mono font-bold border border-[#F06595]/20 text-[#D6336C]">
                  {springActive ? "Spring Pulse!" : "Click to Test"}
                </span>
              </div>

              <div className="py-4 space-y-2">
                <div className="text-2xl font-black tracking-tight text-[#1C1924]">
                  Fluid React Component
                </div>
                <p className="text-xs text-[#5E5568] leading-relaxed">
                  Engineered with spring kinematics, CSS sub-pixel rendering, and sub-millisecond gesture latency.
                </p>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-1 rounded-lg bg-white border border-[#F06595]/20 text-[11px] font-mono text-[#494454]">
                    Stiffness: <strong className="text-[#E64980]">{stiffness}</strong>
                  </span>
                  <span className="px-2 py-1 rounded-lg bg-white border border-[#F06595]/20 text-[11px] font-mono text-[#494454]">
                    Triggers: <strong className="text-[#845EF7]">{clickCount}</strong>
                  </span>
                </div>

                <div
                  className="px-4 py-2 rounded-xl text-white text-xs font-bold font-mono flex items-center space-x-1.5 shadow-sm transition-transform active:scale-95"
                  style={{
                    background: `linear-gradient(135deg, ${getThemeAccent()}, #845EF7)`,
                  }}
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>Trigger Spring</span>
                </div>
              </div>
            </div>

            {/* Studio Controls Row */}
            <div className="space-y-4 pt-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
                <span className="text-[#867E91] uppercase tracking-wider font-bold">
                  Active Palette Tone:
                </span>
                <div className="flex items-center space-x-2">
                  {(["rose", "lavender", "mint"] as const).map((t) => (
                    <button
                      key={t}
                      onClick={() => setActiveTheme(t)}
                      className={`px-3 py-1 rounded-lg capitalize border transition-all ${
                        activeTheme === t
                          ? "bg-[#FFF0F6] text-[#D6336C] font-bold border-[#F06595] shadow-xs"
                          : "bg-white text-[#5E5568] border-gray-200 hover:border-[#F06595]/40"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Interactive Spring Velocity Slider */}
              <div className="space-y-1.5 text-xs font-mono">
                <div className="flex justify-between text-[#5E5568]">
                  <span>Kinetic Stiffness Constant:</span>
                  <span className="font-bold text-[#D6336C]">{stiffness} k</span>
                </div>
                <input
                  type="range"
                  min="150"
                  max="600"
                  step="10"
                  value={stiffness}
                  onChange={(e) => setStiffness(Number(e.target.value))}
                  className="w-full accent-[#E64980] cursor-pointer"
                />
              </div>
            </div>

            {/* Bottom Tech Tags */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#F06595]/15 text-[11px] font-mono text-[#867E91]">
              <span className="flex items-center space-x-1.5">
                <Cpu className="w-3.5 h-3.5 text-[#845EF7]" />
                <span>Next.js App Router 16</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <Zap className="w-3.5 h-3.5 text-[#E64980]" />
                <span>Anime.js Motion Engine</span>
              </span>
            </div>
          </div>
        )}

        {/* Tab 2: Clean Source Code View */}
        {activeTab === "code" && (
          <div className="p-6 bg-[#FAF8FB] font-mono text-xs text-[#2B2538] space-y-2 overflow-x-auto">
            <div className="text-[#867E91] leading-relaxed">
              {"// Real Frontend Component Contract"}
            </div>
            <div className="leading-relaxed">
              <span className="text-[#E64980]">import</span> &#123; useState, useEffect &#125;{" "}
              <span className="text-[#E64980]">from</span>{" "}
              <span className="text-[#20C997]">&quot;react&quot;</span>;
            </div>
            <div className="leading-relaxed">
              <span className="text-[#E64980]">import</span> &#123; animate &#125;{" "}
              <span className="text-[#E64980]">from</span>{" "}
              <span className="text-[#20C997]">&quot;animejs&quot;</span>;
            </div>
            <div className="pt-2 leading-relaxed">
              <span className="text-[#845EF7]">export function</span>{" "}
              <span className="text-[#D6336C] font-bold">AishaCraftSurface</span>() &#123;
            </div>
            <div className="pl-4 leading-relaxed text-[#5E5568]">
              const [stiffness, setStiffness] = useState({stiffness});
            </div>
            <div className="pl-4 leading-relaxed text-[#5E5568]">
              const [theme] = useState(&quot;{activeTheme}&quot;);
            </div>
            <div className="pl-4 pt-2 leading-relaxed">
              <span className="text-[#E64980]">return</span> (
            </div>
            <div className="pl-8 leading-relaxed text-[#845EF7]">
              &lt;<span className="text-[#D6336C]">MotionSurface</span>
            </div>
            <div className="pl-12 leading-relaxed text-[#494454]">
              theme=&#123;&quot;chic-light&quot;&#125;
            </div>
            <div className="pl-12 leading-relaxed text-[#494454]">
              physics=&#123;&#123; stiffness, damping: 20 &#125;&#125;
            </div>
            <div className="pl-12 leading-relaxed text-[#494454]">
              responsive=&#123;true&#125;
            </div>
            <div className="pl-8 leading-relaxed text-[#845EF7]">&gt;</div>
            <div className="pl-12 leading-relaxed text-[#1C1924]">
              &lt;h2&gt;Aisha Kotob — UI Engineering&lt;/h2&gt;
            </div>
            <div className="pl-8 leading-relaxed text-[#845EF7]">
              &lt;/<span className="text-[#D6336C]">MotionSurface</span>&gt;
            </div>
            <div className="pl-4 leading-relaxed">);</div>
            <div className="leading-relaxed">&#125;</div>
          </div>
        )}
      </div>
    </div>
  );
}
