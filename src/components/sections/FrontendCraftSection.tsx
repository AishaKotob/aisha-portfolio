"use client";

import { useState } from "react";
import { 
  Smartphone, 
  Layers, 
  SearchCode, 
  Network, 
  CheckCircle2, 
  Gauge, 
  Monitor, 
  Tablet, 
  Check, 
  RefreshCw,
  Sparkles,
  Sliders
} from "lucide-react";
import { useDevNotifications } from "@/components/ui/DevNotificationHUD";

export function FrontendCraftSection() {
  const { notify } = useDevNotifications();
  const [responsiveMode, setResponsiveMode] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [componentVariant, setComponentVariant] = useState<"primary" | "ghost" | "loading" | "pill">("primary");
  const [debuggingHighlight, setDebuggingHighlight] = useState<boolean>(true);
  const [apiSimStatus, setApiSimStatus] = useState<"idle" | "fetching" | "success">("idle");
  const [qualityChecklist, setQualityChecklist] = useState<Record<string, boolean>>({
    a11y: true,
    formValid: true,
    touchTarget: true,
    crossBrowser: true,
  });
  const perfMetric = 99;

  const triggerApiSim = () => {
    setApiSimStatus("fetching");
    notify("dom", "API Contract Triggered", "Fetching simulated citizen services with optimistic cache update", "GET /api/v1/services -> 200 OK");
    setTimeout(() => {
      setApiSimStatus("success");
      setTimeout(() => setApiSimStatus("idle"), 2500);
    }, 700);
  };

  return (
    <section id="craft" className="relative py-28 sm:py-36 px-6 sm:px-8 border-t border-[#F06595]/15 bg-[#FAF8FB]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-[#D6336C] uppercase tracking-widest font-bold">
            <span className="w-2 h-2 rounded-full bg-[#D6336C] animate-ping" />
            <span>03 / FRONTEND CRAFT</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-[#1C1924]">
            Frontend <span className="font-serif-accent italic font-normal text-gradient-rose-gold">Engineering</span>
          </h2>

          <p className="text-xl sm:text-2xl text-[#5E5568] font-light">
            More than making screens look pleasant.
          </p>

          <p className="text-sm sm:text-base text-[#5E5568] leading-relaxed">
            True frontend engineering lives in the unseen layers: handling network drops, enforcing accessibility standards, eliminating race conditions in complex UI states, and ensuring sub-second response times.
          </p>
        </div>

        {/* 6 Interactive Capability Cards Grid in Light Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* CARD 1: RESPONSIVE INTERFACES */}
          <div className="p-6 rounded-3xl bg-white border border-[#F06595]/20 hover:border-[#845EF7]/50 transition-all flex flex-col justify-between space-y-6 shadow-[0_8px_30px_rgba(240,101,149,0.06)]">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-[#FFF0F6] text-[#E64980]">
                  <Smartphone className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-[#845EF7] uppercase font-bold">Adaptive Ergonomics</span>
              </div>

              <h3 className="text-xl font-bold text-[#1C1924]">Responsive Interfaces</h3>
              <p className="text-xs text-[#5E5568] leading-relaxed">
                Fluid layouts across phone, tablet, and desktop viewports with zero horizontal overflow.
              </p>
            </div>

            {/* Interactive Micro-demo: Viewport Scale */}
            <div className="p-3.5 rounded-2xl bg-[#FCFAFC] border border-[#F06595]/15 space-y-3">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#5E5568]">
                <span>Simulate Viewport:</span>
                <div className="flex space-x-1">
                  <button
                    onClick={() => {
                      setResponsiveMode("desktop");
                      notify("dom", "Breakpoint Sim", "Set viewport container width: 100%");
                    }}
                    className={`p-1.5 rounded-lg ${responsiveMode === "desktop" ? "bg-[#F06595] text-white" : "hover:bg-white text-[#867E91]"}`}
                    title="Desktop"
                  >
                    <Monitor className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => {
                      setResponsiveMode("tablet");
                      notify("dom", "Breakpoint Sim", "Set viewport container width: 75% (iPad air 820px)");
                    }}
                    className={`p-1.5 rounded-lg ${responsiveMode === "tablet" ? "bg-[#F06595] text-white" : "hover:bg-white text-[#867E91]"}`}
                    title="Tablet"
                  >
                    <Tablet className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => {
                      setResponsiveMode("mobile");
                      notify("dom", "Breakpoint Sim", "Set viewport container width: 50% (iPhone 390px)");
                    }}
                    className={`p-1.5 rounded-lg ${responsiveMode === "mobile" ? "bg-[#F06595] text-white" : "hover:bg-white text-[#867E91]"}`}
                    title="Mobile"
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Viewport frame */}
              <div className="h-20 bg-[#FAF8FB] rounded-xl border border-[#F06595]/15 flex items-center justify-center p-2 overflow-hidden transition-all duration-300">
                <div
                  className={`h-full bg-white border border-[#F06595]/40 rounded-lg p-2 flex items-center justify-between shadow-2xs transition-all duration-300 ${
                    responsiveMode === "desktop" ? "w-full" : responsiveMode === "tablet" ? "w-3/4" : "w-1/2"
                  }`}
                >
                  <div className="w-1/3 h-3 bg-[#845EF7]/40 rounded" />
                  <div className="w-1/4 h-3 bg-[#F06595]/40 rounded" />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-gray-100">
              {["React", "Next.js", "Vue.js", "Tailwind CSS"].map((p, i) => (
                <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#FFF0F6] text-[#D6336C]">
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* CARD 2: COMPONENT ENGINEERING */}
          <div className="p-6 rounded-3xl bg-white border border-[#F06595]/20 hover:border-[#845EF7]/50 transition-all flex flex-col justify-between space-y-6 shadow-[0_8px_30px_rgba(240,101,149,0.06)]">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-[#F3F0FF] text-[#7048E8]">
                  <Layers className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-[#7048E8] uppercase font-bold">Modular Systems</span>
              </div>

              <h3 className="text-xl font-bold text-[#1C1924]">Component Engineering</h3>
              <p className="text-xs text-[#5E5568] leading-relaxed">
                Architecting clean component structures with strict TypeScript contracts and zero code duplication.
              </p>
            </div>

            {/* Interactive Polymorphic Component Toggle */}
            <div className="p-3.5 rounded-2xl bg-[#FCFAFC] border border-[#F06595]/15 space-y-3">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#5E5568]">
                <span>State Variant:</span>
                <span className="text-[#845EF7]">{`<Button variant="${componentVariant}" />`}</span>
              </div>

              <div className="flex items-center justify-center h-20 bg-[#FAF8FB] rounded-xl border border-[#F06595]/15">
                <button
                  onClick={() => {
                    const variants: ("primary" | "ghost" | "loading" | "pill")[] = ["primary", "ghost", "loading", "pill"];
                    const next = variants[(variants.indexOf(componentVariant) + 1) % variants.length];
                    setComponentVariant(next);
                    notify("dom", "Component Mutation", `Switched polymorphic variant to: ${next}`);
                  }}
                  className={`transition-all duration-200 text-xs font-mono font-bold flex items-center space-x-1.5 ${
                    componentVariant === "primary"
                      ? "px-4 py-2 rounded-xl bg-gradient-to-r from-[#F06595] to-[#845EF7] text-white shadow-md"
                      : componentVariant === "ghost"
                      ? "px-4 py-2 rounded-xl border border-[#845EF7] text-[#5F3DC4] bg-white hover:bg-[#F3F0FF]"
                      : componentVariant === "loading"
                      ? "px-4 py-2 rounded-xl bg-[#FFF0F6] text-[#D6336C] animate-pulse border border-[#F06595]/30"
                      : "px-5 py-1.5 rounded-full bg-[#E6FCF5] text-[#0CA678] border border-[#20C997]/40"
                  }`}
                >
                  {componentVariant === "loading" && <RefreshCw className="w-3 h-3 animate-spin" />}
                  <span>Click to Mutate</span>
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-gray-100">
              {["TypeScript", "React", "Props Contract", "Design Tokens"].map((p, i) => (
                <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#F3F0FF] text-[#7048E8]">
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* CARD 3: UI DEBUGGING */}
          <div className="p-6 rounded-3xl bg-white border border-[#F06595]/20 hover:border-[#845EF7]/50 transition-all flex flex-col justify-between space-y-6 shadow-[0_8px_30px_rgba(240,101,149,0.06)]">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-[#E6FCF5] text-[#0CA678]">
                  <SearchCode className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-[#0CA678] uppercase font-bold">Forensic Analysis</span>
              </div>

              <h3 className="text-xl font-bold text-[#1C1924]">UI Debugging</h3>
              <p className="text-xs text-[#5E5568] leading-relaxed">
                Diagnosing complex UI regressions, stacking contexts, re-render cascades, and state desynchronization.
              </p>
            </div>

            {/* DOM Bounds Inspector Demo */}
            <div className="p-3.5 rounded-2xl bg-[#FCFAFC] border border-[#F06595]/15 space-y-3">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#5E5568]">
                <span>Inspect DOM Bounds:</span>
                <button
                  onClick={() => {
                    setDebuggingHighlight(!debuggingHighlight);
                    notify("inspect", "DOM Overlay", debuggingHighlight ? "Disabled bounding box overlay" : "Enabled bounding box debug overlay");
                  }}
                  className="text-xs text-[#D6336C] hover:underline font-bold"
                >
                  {debuggingHighlight ? "Highlight ON" : "Highlight OFF"}
                </button>
              </div>

              <div className="h-20 bg-[#FAF8FB] rounded-xl border border-[#F06595]/15 p-2 flex items-center justify-center space-x-2">
                <div
                  className={`p-2 rounded-lg text-[10px] font-mono font-bold transition-all ${
                    debuggingHighlight
                      ? "bg-red-50 border border-dashed border-red-400 text-red-600"
                      : "bg-white text-[#867E91]"
                  }`}
                >
                  z-index: 99
                </div>
                <div
                  className={`p-2 rounded-lg text-[10px] font-mono font-bold transition-all ${
                    debuggingHighlight
                      ? "bg-emerald-50 border border-dashed border-emerald-500 text-emerald-700"
                      : "bg-white text-[#867E91]"
                  }`}
                >
                  rerender: 0ms
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-gray-100">
              {["DevTools", "Stacking Context", "Profiler", "State QA"].map((p, i) => (
                <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#E6FCF5] text-[#0CA678]">
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* CARD 4: API INTEGRATION */}
          <div className="p-6 rounded-3xl bg-white border border-[#F06595]/20 hover:border-[#845EF7]/50 transition-all flex flex-col justify-between space-y-6 shadow-[0_8px_30px_rgba(240,101,149,0.06)]">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-[#FFF0F6] text-[#E64980]">
                  <Network className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-[#E64980] uppercase font-bold">Resilient Endpoints</span>
              </div>

              <h3 className="text-xl font-bold text-[#1C1924]">API Integration</h3>
              <p className="text-xs text-[#5E5568] leading-relaxed">
                Type-safe client contracts with optimistic updates, cache management, and defensive error boundaries.
              </p>
            </div>

            {/* Simulated Fetch & Optimistic UI */}
            <div className="p-3.5 rounded-2xl bg-[#FCFAFC] border border-[#F06595]/15 space-y-3">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#5E5568]">
                <span>Endpoint Test:</span>
                <span className="text-[#845EF7]">GET /api/v1/services</span>
              </div>

              <div className="h-20 bg-[#FAF8FB] rounded-xl border border-[#F06595]/15 p-3 flex items-center justify-between">
                <div className="text-xs font-mono">
                  {apiSimStatus === "idle" && <span className="text-[#867E91]">Status: 200 Ready</span>}
                  {apiSimStatus === "fetching" && <span className="text-[#D6336C] animate-pulse">Payload In Flight...</span>}
                  {apiSimStatus === "success" && <span className="text-[#0CA678] font-bold">Synced: 12 Records</span>}
                </div>
                <button
                  onClick={triggerApiSim}
                  disabled={apiSimStatus === "fetching"}
                  className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#F06595] to-[#845EF7] text-white text-xs font-mono font-bold shadow-xs hover:shadow-md transition-all disabled:opacity-50"
                >
                  {apiSimStatus === "fetching" ? "..." : "Trigger"}
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-gray-100">
              {["REST APIs", "Optimistic UI", "Error Boundaries", "Async Handlers"].map((p, i) => (
                <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#FFF0F6] text-[#D6336C]">
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* CARD 5: TESTING & QUALITY */}
          <div className="p-6 rounded-3xl bg-white border border-[#F06595]/20 hover:border-[#845EF7]/50 transition-all flex flex-col justify-between space-y-6 shadow-[0_8px_30px_rgba(240,101,149,0.06)]">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-[#E6FCF5] text-[#0CA678]">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-[#0CA678] uppercase font-bold">Flawless Releases</span>
              </div>

              <h3 className="text-xl font-bold text-[#1C1924]">Testing &amp; Quality</h3>
              <p className="text-xs text-[#5E5568] leading-relaxed">
                Verifying critical citizen/student user journeys, accessibility landmarks, and form edge cases.
              </p>
            </div>

            {/* Interactive QA Checklist */}
            <div className="p-3.5 rounded-2xl bg-[#FCFAFC] border border-[#F06595]/15 space-y-2">
              <div className="text-[11px] font-mono text-[#5E5568]">Pre-Deploy Validation Matrix:</div>
              <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                {[
                  { key: "a11y", label: "WAI-ARIA Focus" },
                  { key: "formValid", label: "Form Schema" },
                  { key: "touchTarget", label: "48px Targets" },
                  { key: "crossBrowser", label: "Cross-Engine" },
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => {
                      setQualityChecklist((prev) => {
                        const nextVal = !prev[item.key];
                        notify("build", "QA Matrix Item", `${item.label}: ${nextVal ? "PASSED" : "PENDING"}`);
                        return { ...prev, [item.key]: nextVal };
                      });
                    }}
                    className={`p-1.5 rounded-xl border flex items-center space-x-1.5 transition-colors ${
                      qualityChecklist[item.key]
                        ? "bg-[#E6FCF5] border-[#20C997]/40 text-[#0CA678] font-bold"
                        : "bg-white border-gray-200 text-[#867E91]"
                    }`}
                  >
                    <Check className="w-3 h-3" />
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-gray-100">
              {["Functional QA", "Testing Reports", "WAI-ARIA", "Regression Tests"].map((p, i) => (
                <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#E6FCF5] text-[#0CA678]">
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* CARD 6: PERFORMANCE & UX */}
          <div className="p-6 rounded-3xl bg-white border border-[#F06595]/20 hover:border-[#845EF7]/50 transition-all flex flex-col justify-between space-y-6 shadow-[0_8px_30px_rgba(240,101,149,0.06)]">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-[#F3F0FF] text-[#7048E8]">
                  <Gauge className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-[#7048E8] uppercase font-bold">Sub-Second UX</span>
              </div>

              <h3 className="text-xl font-bold text-[#1C1924]">Performance &amp; UX</h3>
              <p className="text-xs text-[#5E5568] leading-relaxed">
                Asset budget management, 60fps animations, lazy hydration, and minimal Cumulative Layout Shift (CLS).
              </p>
            </div>

            {/* Vitals Score Dial */}
            <div className="p-3.5 rounded-2xl bg-[#FCFAFC] border border-[#F06595]/15 space-y-2">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#5E5568]">
                <span>Core Web Vitals:</span>
                <span className="text-[#0CA678] font-bold">{perfMetric}/100</span>
              </div>

              <div className="h-20 bg-[#FAF8FB] rounded-xl border border-[#F06595]/15 p-3 flex items-center justify-around">
                <div className="text-center">
                  <div className="text-sm font-mono font-bold text-[#7048E8]">0.4s</div>
                  <div className="text-[9px] font-mono text-[#867E91]">FCP</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-mono font-bold text-[#0CA678]">0.00</div>
                  <div className="text-[9px] font-mono text-[#867E91]">CLS</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-mono font-bold text-[#D6336C]">18ms</div>
                  <div className="text-[9px] font-mono text-[#867E91]">INP</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-gray-100">
              {["Core Web Vitals", "Zero CLS", "60 FPS Motion", "Lighthouse 100"].map((p, i) => (
                <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#F3F0FF] text-[#7048E8]">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
