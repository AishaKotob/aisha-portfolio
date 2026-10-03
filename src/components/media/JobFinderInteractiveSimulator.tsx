"use client";

import { useState } from "react";
import { Search, MapPin, Briefcase, Sliders, Check, Smartphone, Bookmark } from "lucide-react";

export function JobFinderInteractiveSimulator() {
  const [activeScreen, setActiveScreen] = useState<"feed" | "filter" | "detail">("feed");
  const [selectedJob, setSelectedJob] = useState<number>(0);
  const [appliedJobs, setAppliedJobs] = useState<number[]>([]);
  const [filterType, setFilterType] = useState<"all" | "remote" | "hybrid">("all");

  const jobs = [
    {
      id: 0,
      title: "Frontend Engineer (React/Next.js)",
      company: "Apex Technologies",
      location: "Beirut / Remote",
      salary: "$1,800 - $2,500/mo",
      type: "remote",
      tags: ["React", "TypeScript", "Tailwind"],
      description: "Building responsive client dashboards and motion-crafted user interfaces.",
    },
    {
      id: 1,
      title: "Flutter Mobile Developer",
      company: "Cedar Software Labs",
      location: "Tripoli, Lebanon",
      salary: "$1,500 - $2,200/mo",
      type: "hybrid",
      tags: ["Flutter", "Dart", "REST API"],
      description: "Architecting cross-platform iOS & Android mobile applications with offline sync.",
    },
    {
      id: 2,
      title: "Junior UI/UX Web Developer",
      company: "Digital Horizon Studio",
      location: "Remote",
      salary: "$1,200 - $1,800/mo",
      type: "remote",
      tags: ["JavaScript", "CSS3", "Figma"],
      description: "Translating high-fidelity Figma components into responsive web experiences.",
    },
  ];

  const handleApply = (id: number) => {
    if (!appliedJobs.includes(id)) {
      setAppliedJobs([...appliedJobs, id]);
    }
  };

  const filtered =
    filterType === "all" ? jobs : jobs.filter((j) => j.type === filterType);

  return (
    <div className="group relative rounded-3xl border border-[#F06595]/30 bg-white overflow-hidden shadow-[0_20px_50px_-10px_rgba(240,101,149,0.15)] transition-all duration-300">
      {/* Top Mobile Device Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 bg-gradient-to-r from-[#FFF0F6] via-white to-[#F3F0FF] border-b border-[#F06595]/15">
        <div className="flex items-center space-x-2">
          <Smartphone className="w-4 h-4 text-[#845EF7]" />
          <span className="text-xs font-mono font-bold text-[#1C1924]">
            Flutter Mobile App · Interactive Simulator
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#845EF7] bg-[#F3F0FF] px-2.5 py-0.5 rounded-full border border-[#845EF7]/30">
            FLUTTER &amp; DART CLIENT
          </span>
        </div>
      </div>

      {/* Simulator Interior */}
      <div className="p-6 bg-[#FCFAFC] space-y-5 min-h-[380px]">
        {/* Screen Switcher */}
        <div className="flex items-center justify-between pb-3 border-b border-[#F06595]/15 text-xs font-mono">
          <span className="text-[#867E91] font-bold">Simulate Screen View:</span>
          <div className="flex items-center space-x-1.5 bg-white p-1 rounded-xl border border-[#F06595]/20 shadow-2xs">
            {(["feed", "filter", "detail"] as const).map((screen) => (
              <button
                key={screen}
                onClick={() => setActiveScreen(screen)}
                className={`px-3 py-1 rounded-lg capitalize transition-all ${
                  activeScreen === screen
                    ? "bg-[#FFF0F6] text-[#D6336C] font-bold border border-[#F06595]/30 shadow-2xs"
                    : "text-[#867E91] hover:text-[#1C1924]"
                }`}
              >
                {screen === "feed" ? "Job Feed" : screen === "filter" ? "Filter Sheet" : "Job Detail"}
              </button>
            ))}
          </div>
        </div>

        {/* Screen 1: Feed */}
        {activeScreen === "feed" && (
          <div className="space-y-3.5">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
              <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#F06595]/20 text-[#5E5568] shadow-2xs w-full sm:w-auto">
                <Search className="w-3.5 h-3.5 text-[#E64980]" />
                <span className="text-[11px]">Search frontend, mobile jobs...</span>
              </div>

              <div className="flex items-center space-x-1 text-[10px] font-mono">
                {(["all", "remote", "hybrid"] as const).map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilterType(f)}
                    className={`px-2.5 py-1 rounded-lg capitalize border transition-all ${
                      filterType === f
                        ? "bg-[#845EF7] text-white font-bold border-[#845EF7]"
                        : "bg-white text-[#5E5568] border-gray-200"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2.5">
              {filtered.map((job) => {
                const isApplied = appliedJobs.includes(job.id);
                return (
                  <div
                    key={job.id}
                    onClick={() => {
                      setSelectedJob(job.id);
                      setActiveScreen("detail");
                    }}
                    className="p-4 rounded-2xl bg-white border border-[#F06595]/20 shadow-2xs hover:border-[#845EF7] transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-bold text-[#1C1924]">{job.title}</span>
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-mono uppercase bg-[#FFF0F6] text-[#D6336C]">
                          {job.type}
                        </span>
                      </div>
                      <div className="text-[11px] font-mono text-[#867E91] flex items-center space-x-2">
                        <span>{job.company}</span>
                        <span>·</span>
                        <span className="text-[#20C997] font-semibold">{job.salary}</span>
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleApply(job.id);
                      }}
                      className={`px-4 py-1.5 rounded-xl text-xs font-mono font-bold transition-all shrink-0 ${
                        isApplied
                          ? "bg-[#E6FCF5] text-[#0CA678] border border-[#20C997]/40"
                          : "bg-gradient-to-r from-[#F06595] to-[#845EF7] text-white hover:opacity-95"
                      }`}
                    >
                      {isApplied ? "Applied ✓" : "1-Tap Apply"}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Screen 2: Filter Sheet */}
        {activeScreen === "filter" && (
          <div className="p-5 rounded-2xl bg-white border border-[#F06595]/20 shadow-2xs space-y-4 text-xs font-mono">
            <span className="text-[10px] text-[#845EF7] uppercase tracking-wider font-bold block">
              // Multi-Parameter Flutter Filter Bottom-Sheet
            </span>

            <div className="space-y-2">
              <span className="text-[#5E5568] font-bold block">Work Arrangement:</span>
              <div className="flex flex-wrap gap-2">
                {["Remote Only", "Hybrid Flexible", "On-site Office"].map((w, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-xl bg-[#FFF0F6] border border-[#F06595]/30 text-[#D6336C] font-semibold"
                  >
                    {w}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-gray-100">
              <span className="text-[#5E5568] font-bold block">Target Technology Stack:</span>
              <div className="flex flex-wrap gap-1.5">
                {["Flutter", "Dart", "React.js", "Next.js", "TypeScript", "PHP/MySQL"].map((s, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-[#F8F5FF] text-[#7048E8] border border-[#845EF7]/20"
                  >
                    #{s}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => setActiveScreen("feed")}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#F06595] to-[#845EF7] text-white font-bold"
            >
              Apply Filter Parameters (3 Matches)
            </button>
          </div>
        )}

        {/* Screen 3: Detail */}
        {activeScreen === "detail" && (
          <div className="p-5 rounded-2xl bg-white border border-[#F06595]/20 shadow-2xs space-y-4 text-xs font-mono">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-sm font-bold text-[#1C1924]">{jobs[selectedJob].title}</h4>
                <span className="text-[#867E91] text-[11px]">{jobs[selectedJob].company} · {jobs[selectedJob].location}</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#E6FCF5] text-[#0CA678]">
                {jobs[selectedJob].salary}
              </span>
            </div>

            <p className="text-[#5E5568] text-[11px] leading-relaxed">
              {jobs[selectedJob].description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {jobs[selectedJob].tags.map((t, idx) => (
                <span key={idx} className="px-2 py-0.5 rounded-md bg-[#FFF0F6] text-[#D6336C] text-[10px]">
                  {t}
                </span>
              ))}
            </div>

            <button
              onClick={() => handleApply(jobs[selectedJob].id)}
              className={`w-full py-2.5 rounded-xl font-bold transition-all ${
                appliedJobs.includes(jobs[selectedJob].id)
                  ? "bg-[#E6FCF5] text-[#0CA678] border border-[#20C997]/40"
                  : "bg-gradient-to-r from-[#F06595] to-[#845EF7] text-white"
              }`}
            >
              {appliedJobs.includes(jobs[selectedJob].id)
                ? "Application Submitted Successfully ✓"
                : "Submit 1-Tap Application with CV"}
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="px-5 py-3 bg-[#FAF8FB] border-t border-[#F06595]/15 text-xs font-mono text-[#867E91] flex items-center justify-between">
        <span>University Capstone Project · Flutter &amp; Dart</span>
        <span className="text-[#7048E8] font-bold">Cross-Platform iOS &amp; Android Client</span>
      </div>
    </div>
  );
}
