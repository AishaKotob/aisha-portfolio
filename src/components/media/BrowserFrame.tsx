"use client";

import { useState } from "react";
import { Maximize2, ExternalLink, ShieldCheck, Check } from "lucide-react";

interface BrowserFrameProps {
  src?: string;
  alt?: string;
  domain?: string;
  caption?: string;
  badge?: string;
  onOpenLightbox?: (src: string, alt: string, caption?: string) => void;
  aspectRatio?: "video" | "wide" | "auto";
  priority?: boolean;
}

export function BrowserFrame({
  src,
  alt = "Interface view",
  domain,
  caption,
  badge,
  onOpenLightbox,
  aspectRatio = "video",
}: BrowserFrameProps) {
  const [activeTab, setActiveTab] = useState<"catalog" | "courses" | "dashboard">("catalog");
  const [inquirySent, setInquirySent] = useState<boolean>(false);

  return (
    <div className="group relative rounded-3xl border border-[#F06595]/25 bg-white overflow-hidden shadow-[0_18px_50px_-15px_rgba(240,101,149,0.14)] transition-all duration-300 hover:border-[#845EF7]/50">
      {/* Browser Chrome Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#FAF8FB] border-b border-[#F06595]/15">
        {/* Window action controls with chic mac-style pastel circles */}
        <div className="flex items-center space-x-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF8787]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFD43B]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#69DB7C]" />
        </div>

        {/* URL / Domain Pill */}
        <div className="flex items-center space-x-2 px-3 py-1 rounded-xl bg-white border border-[#F06595]/15 text-[11px] font-mono text-[#5E5568] max-w-[280px] truncate shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#20C997] animate-pulse" />
          <span className="truncate">{domain || "https://aishakotob.dev/preview"}</span>
        </div>

        {/* Actions / Badge */}
        <div className="flex items-center space-x-2">
          {badge && (
            <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-[#E64980] bg-[#FFF0F6] px-2.5 py-0.5 rounded-full border border-[#F06595]/30">
              {badge}
            </span>
          )}
          {src && onOpenLightbox && (
            <button
              onClick={() => onOpenLightbox(src, alt, caption)}
              aria-label="Inspect screenshot fullscreen"
              data-cursor="OPEN"
              className="p-1 rounded text-[#867E91] hover:text-[#E64980] transition-colors"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Viewport Content: Interactive Qanz Academy Platform Simulator (Runs immediately without broken frames) */}
      <div
        className={`relative w-full bg-[#FCFAFC] overflow-hidden ${
          aspectRatio === "video" ? "min-h-[340px]" : "min-h-[300px]"
        }`}
      >
        <div className="p-6 space-y-5">
          {/* Simulated Qanz Navbar */}
          <div className="flex items-center justify-between pb-3 border-b border-[#F06595]/15 text-xs font-mono">
            <div className="flex items-center space-x-2">
              <span className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#F06595] to-[#845EF7] text-white flex items-center justify-center font-bold text-[10px]">
                Q
              </span>
              <span className="font-bold text-[#1C1924]">Qanz Academy</span>
            </div>

            <div className="flex space-x-2">
              {(["catalog", "courses", "dashboard"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-2.5 py-1 rounded-lg capitalize transition-colors ${
                    activeTab === tab
                      ? "bg-[#FFF0F6] text-[#D6336C] font-bold border border-[#F06595]/30"
                      : "text-[#867E91] hover:text-[#1C1924]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive view according to tab */}
          {activeTab === "catalog" && (
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-[#E64980] uppercase tracking-wider font-bold">
                  // Student Discovery Engine
                </span>
                <h4 className="text-lg font-bold text-[#1C1924]">
                  Empowering Academic &amp; Tech Mastery
                </h4>
                <p className="text-xs text-[#5E5568] leading-relaxed">
                  Full-stack e-learning portal with real-time course browsing, dynamic reservation schedules and teacher assignment flows.
                </p>
              </div>

              {/* Sample interactive course cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                {[
                  { title: "Frontend Web Engineering", badge: "React / TS", seats: "3 Seats left", color: "#F06595" },
                  { title: "Python & Algorithms", badge: "Beginner", seats: "Enrolling", color: "#845EF7" },
                  { title: "High-School Mathematics", badge: "Grades 9-12", seats: "Open", color: "#20C997" },
                ].map((course, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-white border border-[#F06595]/20 shadow-2xs hover:border-[#F06595] transition-all space-y-2"
                  >
                    <div className="flex justify-between items-center text-[10px] font-mono">
                      <span className="px-1.5 py-0.5 rounded bg-[#FFF0F6] text-[#D6336C] font-semibold">{course.badge}</span>
                      <span className="text-[#867E91]">{course.seats}</span>
                    </div>
                    <div className="text-xs font-bold text-[#1C1924] leading-snug">{course.title}</div>
                    <button
                      onClick={() => setInquirySent(true)}
                      className="w-full mt-2 py-1 rounded-lg bg-[#FAF8FB] hover:bg-[#FFF0F6] text-[10px] font-mono text-[#D6336C] font-semibold border border-[#F06595]/20 transition-colors"
                    >
                      {inquirySent ? "Inquiry Queued ✓" : "Book Discovery Session"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "courses" && (
            <div className="space-y-3">
              <span className="text-[10px] font-mono text-[#845EF7] uppercase tracking-wider font-bold">
                // Course Tracks &amp; Curricula
              </span>
              <div className="space-y-2 text-xs font-mono">
                {[
                  { name: "Full-Stack Web Foundations (HTML5, Modern CSS, JavaScript)", weeks: "8 Weeks", status: "Active" },
                  { name: "Object-Oriented Programming with Java & Data Structures", weeks: "10 Weeks", status: "Open" },
                  { name: "Calculus & Computer Science Mathematics Prep", weeks: "6 Weeks", status: "Enrolling" },
                ].map((track, i) => (
                  <div key={i} className="p-3 rounded-xl bg-white border border-[#F06595]/15 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-[#1C1924]">{track.name}</div>
                      <div className="text-[10px] text-[#867E91]">{track.weeks} duration · Certificate of completion</div>
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase bg-[#E6FCF5] text-[#0CA678] border border-[#20C997]/30">
                      {track.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "dashboard" && (
            <div className="space-y-3">
              <span className="text-[10px] font-mono text-[#20C997] uppercase tracking-wider font-bold">
                // Sanitized Founder Operations
              </span>
              <div className="p-4 rounded-2xl bg-white border border-[#F06595]/20 grid grid-cols-3 gap-3 text-center">
                <div>
                  <div className="text-xl font-bold text-[#E64980]">100%</div>
                  <div className="text-[10px] font-mono text-[#867E91]">Course Delivery</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-[#845EF7]">12+</div>
                  <div className="text-[10px] font-mono text-[#867E91]">Active Tracks</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-[#20C997]">&lt; 0.5s</div>
                  <div className="text-[10px] font-mono text-[#867E91]">Response Time</div>
                </div>
              </div>
              <p className="text-[11px] font-mono text-[#867E91]">
                Backend: Node.js, Express, MongoDB Atlas, Resend email pipeline with SSL hardening.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Caption footer */}
      {caption && (
        <div className="px-4 py-2.5 bg-[#FAF8FB] border-t border-[#F06595]/15 text-xs font-mono text-[#5E5568] flex items-center justify-between">
          <span className="truncate">{caption}</span>
          <span className="text-[10px] text-[#E64980] font-bold shrink-0 ml-2">{"// VERIFIED RUNNING PLATFORM"}</span>
        </div>
      )}
    </div>
  );
}
