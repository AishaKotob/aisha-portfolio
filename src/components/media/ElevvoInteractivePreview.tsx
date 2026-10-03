"use client";

import { useState } from "react";
import { ExternalLink, Check, Sparkles, Layers, Sliders, Play, Code2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export function ElevvoInteractivePreview() {
  const [activeComponent, setActiveComponent] = useState<"buttons" | "badges" | "cards">("buttons");
  const [btnState, setBtnState] = useState<"default" | "loading" | "active">("default");
  const [activeTheme, setActiveTheme] = useState<"rose" | "lilac" | "mint">("rose");

  const githubUrl = "https://github.com/AishaKotob/Elevvo_internship";

  return (
    <div className="group relative rounded-3xl border border-[#F06595]/30 bg-white overflow-hidden shadow-[0_20px_50px_-10px_rgba(240,101,149,0.15)] transition-all duration-300">
      {/* Browser Chrome Header with Direct GitHub Link */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 bg-gradient-to-r from-[#FFF0F6] via-white to-[#F3F0FF] border-b border-[#F06595]/15">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF8787]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFD43B]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#69DB7C]" />
          </div>

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="↗"
            className="flex items-center space-x-2 px-3 py-1 rounded-xl bg-white border border-[#F06595]/20 text-[11px] font-mono text-[#5E5568] hover:text-[#D6336C] hover:border-[#F06595] transition-all shadow-2xs group/link"
          >
            <GithubIcon className="w-3.5 h-3.5 text-[#1C1924]" />
            <span className="font-semibold truncate max-w-[200px] sm:max-w-none">
              github.com/AishaKotob/Elevvo_internship
            </span>
            <ExternalLink className="w-3 h-3 text-[#E64980]" />
          </a>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#845EF7] bg-[#F3F0FF] px-2.5 py-0.5 rounded-full border border-[#845EF7]/30">
            INTERNSHIP · COMPONENT LIBRARY
          </span>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 rounded-xl bg-[#1C1924] hover:bg-[#D6336C] text-white text-[11px] font-mono font-bold flex items-center space-x-1 shadow-xs transition-colors"
          >
            <span>GitHub</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Interactive Component Playground */}
      <div className="p-6 bg-[#FCFAFC] space-y-5 min-h-[360px]">
        {/* Component Selector Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#F06595]/15 gap-3 text-xs font-mono">
          <div className="flex items-center space-x-2.5">
            <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-[#845EF7] to-[#E64980] text-white flex items-center justify-center font-bold text-xs shadow-xs">
              E
            </div>
            <div>
              <span className="font-bold text-[#1C1924]">Elevvo UI System</span>
              <span className="text-[10px] text-[#867E91] block">Reusable React Component Suite</span>
            </div>
          </div>

          <div className="flex items-center space-x-1.5 bg-white p-1 rounded-xl border border-[#F06595]/20 shadow-2xs">
            {(["buttons", "badges", "cards"] as const).map((comp) => (
              <button
                key={comp}
                onClick={() => setActiveComponent(comp)}
                className={`px-3 py-1 rounded-lg capitalize transition-all ${
                  activeComponent === comp
                    ? "bg-[#FFF0F6] text-[#D6336C] font-bold border border-[#F06595]/30 shadow-2xs"
                    : "text-[#867E91] hover:text-[#1C1924]"
                }`}
              >
                {comp}
              </button>
            ))}
          </div>
        </div>

        {/* Tab 1: Button System */}
        {activeComponent === "buttons" && (
          <div className="space-y-4">
            <span className="text-[10px] font-mono text-[#E64980] font-bold uppercase tracking-wider block">
              // Polymorphic Button System &amp; Prop Contracts
            </span>

            <div className="p-6 rounded-2xl bg-white border border-[#F06595]/20 shadow-2xs space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => {
                    setBtnState("loading");
                    setTimeout(() => setBtnState("active"), 1000);
                    setTimeout(() => setBtnState("default"), 2500);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#F06595] to-[#845EF7] text-white text-xs font-mono font-bold shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center space-x-2"
                >
                  {btnState === "loading" ? (
                    <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : btnState === "active" ? (
                    <Check className="w-3.5 h-3.5" />
                  ) : (
                    <Play className="w-3 h-3 fill-current" />
                  )}
                  <span>
                    {btnState === "loading"
                      ? "Dispatched..."
                      : btnState === "active"
                      ? "Success ✓"
                      : "Primary Button"}
                  </span>
                </button>

                <button className="px-5 py-2.5 rounded-xl bg-white hover:bg-[#FFF0F6] border border-[#F06595]/30 text-xs font-mono font-bold text-[#D6336C] transition-colors shadow-2xs">
                  Secondary Ghost
                </button>

                <button className="px-5 py-2.5 rounded-xl bg-[#FAF8FB] text-xs font-mono font-bold text-[#867E91] border border-gray-200 cursor-not-allowed">
                  Disabled State
                </button>
              </div>

              {/* Code Preview */}
              <div className="p-3.5 rounded-xl bg-[#FAF8FB] border border-[#F06595]/15 text-[11px] font-mono text-[#494454] space-y-1">
                <div className="text-[#867E91]">{"// React Component Contract"}</div>
                <div>
                  &lt;<span className="text-[#D6336C]">Button</span> variant=&quot;primary&quot; state=&quot;{btnState}&quot; onClick=&#123;handleClick&#125;&gt;
                </div>
                <div className="pl-4 text-[#1C1924]">Elevvo Primary Action</div>
                <div>&lt;/<span className="text-[#D6336C]">Button</span>&gt;</div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Badges & Chips */}
        {activeComponent === "badges" && (
          <div className="space-y-4">
            <span className="text-[10px] font-mono text-[#845EF7] font-bold uppercase tracking-wider block">
              // State Indicators &amp; Semantic Badges
            </span>
            <div className="p-6 rounded-2xl bg-white border border-[#F06595]/20 shadow-2xs flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#FFF0F6] text-[#D6336C] border border-[#F06595]/30 flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E64980] animate-pulse" />
                <span>Feature Active</span>
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#E6FCF5] text-[#0CA678] border border-[#20C997]/30 flex items-center space-x-1.5">
                <Check className="w-3 h-3" />
                <span>CI/CD Passed</span>
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#F3F0FF] text-[#7048E8] border border-[#845EF7]/30">
                Next.js Component
              </span>
            </div>
          </div>
        )}

        {/* Tab 3: Responsive Card Collections */}
        {activeComponent === "cards" && (
          <div className="space-y-4">
            <span className="text-[10px] font-mono text-[#20C997] font-bold uppercase tracking-wider block">
              // Reusable Feed &amp; Dashboard Card Surfaces
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-2xl bg-white border border-[#F06595]/20 shadow-2xs hover:border-[#F06595] transition-all space-y-2">
                <span className="text-[10px] font-mono text-[#867E91]">Metric Card</span>
                <div className="text-xl font-bold text-[#1C1924]">User Retention</div>
                <div className="text-xs text-[#20C997] font-mono font-semibold">+18.4% vs last week</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#F06595]/20 shadow-2xs hover:border-[#845EF7] transition-all space-y-2">
                <span className="text-[10px] font-mono text-[#867E91]">Workflow Card</span>
                <div className="text-xl font-bold text-[#1C1924]">Task Queue</div>
                <div className="text-xs text-[#845EF7] font-mono font-semibold">24 items resolved</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="px-5 py-3 bg-[#FAF8FB] border-t border-[#F06595]/15 text-xs font-mono text-[#5E5568] flex items-center justify-between">
        <span className="truncate">Internship Repository · AishaKotob/Elevvo_internship</span>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#E64980] hover:text-[#845EF7] font-bold flex items-center space-x-1 shrink-0 ml-3 underline underline-offset-2"
        >
          <span>Open GitHub Repo ↗</span>
        </a>
      </div>
    </div>
  );
}
