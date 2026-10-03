"use client";

import { useState } from "react";
import { ArrowUpRight, TrendingUp, ShieldCheck, Smartphone, Monitor, Tablet, Check, Layers, RefreshCw } from "lucide-react";

export function HynxInteractivePreview() {
  const [activeTab, setActiveTab] = useState<"terminal" | "debugger">("terminal");
  const [selectedPair, setSelectedPair] = useState<"BTC" | "ETH" | "SOL">("BTC");
  const [tradeSide, setTradeSide] = useState<"buy" | "sell">("buy");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [viewportMode, setViewportMode] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [showGridDebug, setShowGridDebug] = useState(false);

  const pairData = {
    BTC: { price: "88,450.20", change: "+3.42%", high: "89,100", low: "86,200", vol: "$1.4B" },
    ETH: { price: "3,240.80", change: "+2.15%", high: "3,310", low: "3,180", vol: "$680M" },
    SOL: { price: "186.40", change: "-0.85%", high: "192.50", low: "182.10", vol: "$340M" },
  };

  const current = pairData[selectedPair];

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    setTimeout(() => setOrderPlaced(false), 2400);
  };

  return (
    <div className="group relative rounded-3xl border border-[#F06595]/30 bg-white overflow-hidden shadow-[0_20px_50px_-10px_rgba(240,101,149,0.15)] transition-all duration-300">
      {/* Browser Chrome Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 bg-gradient-to-r from-[#FFF0F6] via-white to-[#F3F0FF] border-b border-[#F06595]/15">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF8787]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFD43B]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#69DB7C]" />
          </div>

          <div className="flex items-center space-x-2 px-3 py-1 rounded-xl bg-white border border-[#F06595]/20 text-[11px] font-mono text-[#5E5568] shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#20C997] animate-pulse" />
            <span className="font-semibold">https://app.hynxtrading.com</span>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#7048E8] bg-[#F3F0FF] px-2.5 py-0.5 rounded-full border border-[#845EF7]/30">
            PROFESSIONAL WORK · SANITIZED PREVIEW
          </span>
        </div>
      </div>

      {/* Simulator Interior */}
      <div className="p-6 bg-[#FCFAFC] space-y-5 min-h-[380px]">
        {/* Sub-navigation & Mode Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#F06595]/15 gap-3 text-xs font-mono">
          <div className="flex items-center space-x-3">
            <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-[#7048E8] to-[#E64980] text-white flex items-center justify-center font-bold text-xs shadow-xs">
              H
            </div>
            <div>
              <span className="font-bold text-[#1C1924]">HYNX Trading</span>
              <span className="text-[10px] text-[#867E91] block">Commercial Web Products</span>
            </div>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center space-x-1 bg-white p-1 rounded-xl border border-[#F06595]/20 shadow-2xs">
            <button
              onClick={() => setActiveTab("terminal")}
              className={`px-3 py-1 rounded-lg capitalize transition-all ${
                activeTab === "terminal"
                  ? "bg-[#FFF0F6] text-[#D6336C] font-bold border border-[#F06595]/30 shadow-2xs"
                  : "text-[#867E91] hover:text-[#1C1924]"
              }`}
            >
              Interactive Terminal
            </button>
            <button
              onClick={() => setActiveTab("debugger")}
              className={`px-3 py-1 rounded-lg capitalize transition-all ${
                activeTab === "debugger"
                  ? "bg-[#FFF0F6] text-[#D6336C] font-bold border border-[#F06595]/30 shadow-2xs"
                  : "text-[#867E91] hover:text-[#1C1924]"
              }`}
            >
              UI Regression Bench
            </button>
          </div>
        </div>

        {/* Tab 1: Interactive Trading Terminal */}
        {activeTab === "terminal" && (
          <div className="space-y-4">
            {/* Ticker Selector */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-2xl bg-white border border-[#F06595]/20 shadow-2xs">
              <div className="flex items-center space-x-2">
                {(["BTC", "ETH", "SOL"] as const).map((pair) => (
                  <button
                    key={pair}
                    onClick={() => setSelectedPair(pair)}
                    className={`px-3 py-1 rounded-xl font-mono text-xs font-bold transition-all ${
                      selectedPair === pair
                        ? "bg-[#1C1924] text-white shadow-xs"
                        : "bg-[#FAF8FB] text-[#5E5568] hover:bg-[#FFF0F6]"
                    }`}
                  >
                    {pair}/USDT
                  </button>
                ))}
              </div>

              <div className="flex items-center space-x-4 text-xs font-mono">
                <div>
                  <span className="text-[10px] text-[#867E91] block">Mark Price</span>
                  <span className="font-bold text-[#1C1924] text-sm">${current.price}</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#867E91] block">24h Change</span>
                  <span
                    className={`font-bold ${
                      current.change.startsWith("+") ? "text-[#20C997]" : "text-[#FF6B6B]"
                    }`}
                  >
                    {current.change}
                  </span>
                </div>
                <div className="hidden sm:block">
                  <span className="text-[10px] text-[#867E91] block">24h Vol</span>
                  <span className="font-bold text-[#5E5568]">{current.vol}</span>
                </div>
              </div>
            </div>

            {/* Split Orderbook & Quick Trading Panel */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              {/* Left: Mini Depth / Orderbook Simulator */}
              <div className="md:col-span-7 p-4 rounded-2xl bg-white border border-[#F06595]/15 space-y-3 shadow-2xs">
                <div className="flex justify-between text-[11px] font-mono font-bold text-[#867E91] border-b border-gray-100 pb-1.5">
                  <span>Price (USDT)</span>
                  <span>Size ({selectedPair})</span>
                  <span>Total</span>
                </div>

                {/* Simulated Orderbook Rows */}
                <div className="space-y-1.5 text-xs font-mono">
                  {[
                    { price: "88,485.00", size: "0.45", total: "$39,818", depth: "75%", side: "ask" },
                    { price: "88,460.50", size: "1.12", total: "$99,075", depth: "50%", side: "ask" },
                    { price: "88,450.20", size: "0.85", total: "$75,182", depth: "25%", side: "spread" },
                    { price: "88,440.00", size: "2.30", total: "$203,412", depth: "65%", side: "bid" },
                    { price: "88,415.10", size: "1.75", total: "$154,726", depth: "85%", side: "bid" },
                  ].map((row, idx) => (
                    <div key={idx} className="relative flex justify-between items-center py-0.5 px-2 rounded">
                      <div
                        className={`absolute inset-0 rounded opacity-10 pointer-events-none ${
                          row.side === "ask" ? "bg-[#FF6B6B]" : "bg-[#20C997]"
                        }`}
                        style={{ width: row.depth }}
                      />
                      <span
                        className={`font-semibold z-10 ${
                          row.side === "ask" ? "text-[#FF6B6B]" : "text-[#20C997]"
                        }`}
                      >
                        {row.price}
                      </span>
                      <span className="text-[#5E5568] z-10">{row.size}</span>
                      <span className="text-[#867E91] z-10">{row.total}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Quick Trade Execution Panel */}
              <div className="md:col-span-5 p-4 rounded-2xl bg-white border border-[#F06595]/20 space-y-3.5 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="grid grid-cols-2 gap-1 p-1 rounded-xl bg-[#FAF8FB] border border-[#F06595]/15 text-xs font-mono font-bold mb-3">
                    <button
                      onClick={() => setTradeSide("buy")}
                      className={`py-1.5 rounded-lg transition-all ${
                        tradeSide === "buy"
                          ? "bg-[#20C997] text-white shadow-2xs"
                          : "text-[#5E5568]"
                      }`}
                    >
                      Buy {selectedPair}
                    </button>
                    <button
                      onClick={() => setTradeSide("sell")}
                      className={`py-1.5 rounded-lg transition-all ${
                        tradeSide === "sell"
                          ? "bg-[#FF6B6B] text-white shadow-2xs"
                          : "text-[#5E5568]"
                      }`}
                    >
                      Sell {selectedPair}
                    </button>
                  </div>

                  <div className="space-y-2 text-xs font-mono">
                    <div className="flex justify-between text-[#867E91]">
                      <span>Execution Price:</span>
                      <span className="font-bold text-[#1C1924]">${current.price}</span>
                    </div>
                    <div className="flex justify-between text-[#867E91]">
                      <span>Order Type:</span>
                      <span className="font-bold text-[#7048E8]">Limit / Instant</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handlePlaceOrder}
                  className={`w-full py-2.5 rounded-xl text-xs font-mono font-bold transition-all shadow-sm flex items-center justify-center space-x-1.5 ${
                    orderPlaced
                      ? "bg-[#E6FCF5] text-[#0CA678] border border-[#20C997]/40"
                      : tradeSide === "buy"
                      ? "bg-gradient-to-r from-[#20C997] to-[#12B886] text-white hover:opacity-95"
                      : "bg-gradient-to-r from-[#FF6B6B] to-[#FA5252] text-white hover:opacity-95"
                  }`}
                >
                  {orderPlaced ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Order Dispatched to Engine ✓</span>
                    </>
                  ) : (
                    <span>
                      Place {tradeSide === "buy" ? "Buy" : "Sell"} Order (${current.price})
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: UI Regression & Viewport Bench */}
        {activeTab === "debugger" && (
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-2xl bg-white border border-[#F06595]/20 shadow-2xs text-xs font-mono">
              <span className="text-[#867E91] font-bold">Simulate Viewport Boundary:</span>
              <div className="flex items-center space-x-1.5">
                {[
                  { id: "desktop", label: "Desktop (1440px)", icon: Monitor },
                  { id: "tablet", label: "Tablet (768px)", icon: Tablet },
                  { id: "mobile", label: "Mobile (375px)", icon: Smartphone },
                ].map((vp) => {
                  const Icon = vp.icon;
                  return (
                    <button
                      key={vp.id}
                      onClick={() => setViewportMode(vp.id as any)}
                      className={`px-2.5 py-1 rounded-lg flex items-center space-x-1 border transition-all ${
                        viewportMode === vp.id
                          ? "bg-[#FFF0F6] text-[#D6336C] font-bold border-[#F06595]"
                          : "bg-white text-[#5E5568] border-gray-200"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{vp.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* QA Matrix Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-2xl bg-white border border-[#F06595]/15 shadow-2xs text-center">
                <div className="text-xl font-black text-[#20C997]">0.001</div>
                <div className="text-[10px] font-mono text-[#867E91]">Cumulative Layout Shift</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-[#F06595]/15 shadow-2xs text-center">
                <div className="text-xl font-black text-[#845EF7]">&lt; 14ms</div>
                <div className="text-[10px] font-mono text-[#867E91]">Component Render Cycle</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-[#F06595]/15 shadow-2xs text-center">
                <div className="text-xl font-black text-[#E64980]">100%</div>
                <div className="text-[10px] font-mono text-[#867E91]">TypeScript Strict Pass</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#F06595]/15 space-y-2 text-xs font-mono text-[#5E5568]">
              <div className="font-bold text-[#1C1924]">Engineering Contribution Scope:</div>
              <p className="text-[11px] text-[#867E91] leading-relaxed">
                Aisha handles responsive viewport regression mitigation, async REST/WebSocket error states, modular React component refactoring, and user journey test documentation for HYNX commercial applications.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="px-5 py-3 bg-[#FAF8FB] border-t border-[#F06595]/15 text-xs font-mono text-[#867E91] flex items-center justify-between">
        <span>Engineering Contribution · React / Next.js / TypeScript</span>
        <span className="text-[#E64980] font-bold">Confidential Commercial Codebase</span>
      </div>
    </div>
  );
}
