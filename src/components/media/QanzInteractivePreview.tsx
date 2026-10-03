"use client";

import { useState } from "react";
import { ExternalLink, Check, Sparkles, BookOpen, Layers, Users, ShieldCheck } from "lucide-react";

export function QanzInteractivePreview() {
  const [activeTab, setActiveTab] = useState<"catalog" | "courses" | "dashboard">("catalog");
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [bookedCourse, setBookedCourse] = useState<string | null>(null);

  const courses = [
    {
      id: "fe",
      title: "Frontend Web Engineering",
      badge: "React · TypeScript",
      category: "tech",
      seats: "3 Seats left",
      level: "Intermediate",
      duration: "8 Weeks",
      highlights: "Component Architecture, DOM Performance & Responsive Design",
    },
    {
      id: "py",
      title: "Python & Algorithmic Foundations",
      badge: "Python 3 · OOP",
      category: "tech",
      seats: "Enrolling",
      level: "Beginner",
      duration: "6 Weeks",
      highlights: "Data Structures, Logic Flow & Problem Solving",
    },
    {
      id: "math",
      title: "Calculus & High-School Mathematics",
      badge: "Grades 9-12",
      category: "academic",
      seats: "Open",
      level: "All Levels",
      duration: "Full Semester",
      highlights: "Functions, Derivatives, Analytical Geometry & Exam Prep",
    },
  ];

  const filtered =
    selectedFilter === "all"
      ? courses
      : courses.filter((c) => c.category === selectedFilter);

  return (
    <div className="group relative rounded-3xl border border-[#F06595]/30 bg-white overflow-hidden shadow-[0_20px_50px_-10px_rgba(240,101,149,0.15)] transition-all duration-300">
      {/* Browser Chrome Header with Direct Live Link */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 bg-gradient-to-r from-[#FFF0F6] via-white to-[#F3F0FF] border-b border-[#F06595]/15">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF8787]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFD43B]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#69DB7C]" />
          </div>

          <a
            href="https://www.qanzacademy.online"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="↗"
            className="flex items-center space-x-2 px-3 py-1 rounded-xl bg-white border border-[#F06595]/20 text-[11px] font-mono text-[#5E5568] hover:text-[#D6336C] hover:border-[#F06595] transition-all shadow-2xs group/link"
          >
            <span className="w-2 h-2 rounded-full bg-[#20C997] animate-pulse" />
            <span className="font-semibold">https://www.qanzacademy.online</span>
            <ExternalLink className="w-3 h-3 text-[#E64980] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#D6336C] bg-[#FFF0F6] px-2.5 py-0.5 rounded-full border border-[#F06595]/30">
            FOUNDER · LIVE PLATFORM
          </span>
          <a
            href="https://www.qanzacademy.online"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 rounded-xl bg-gradient-to-r from-[#F06595] to-[#845EF7] text-white text-[11px] font-mono font-bold flex items-center space-x-1 shadow-xs hover:shadow-md transition-all"
          >
            <span>Open Site</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Interactive In-Browser App Simulator */}
      <div className="p-6 sm:p-7 bg-[#FCFAFC] space-y-6 min-h-[360px]">
        {/* Navigation within Qanz Simulator */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#F06595]/15 gap-4 text-xs font-mono">
          <div className="flex items-center space-x-2.5">
            <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-[#F06595] to-[#845EF7] text-white flex items-center justify-center font-bold text-xs shadow-xs">
              Q
            </div>
            <div>
              <span className="font-bold text-[#1C1924]">Qanz Academy</span>
              <span className="text-[10px] text-[#867E91] block">Online Education Engine</span>
            </div>
          </div>

          <div className="flex items-center space-x-1.5 bg-white p-1 rounded-xl border border-[#F06595]/20 shadow-2xs">
            {(["catalog", "courses", "dashboard"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1 rounded-lg capitalize transition-all ${
                  activeTab === tab
                    ? "bg-[#FFF0F6] text-[#D6336C] font-bold border border-[#F06595]/30 shadow-2xs"
                    : "text-[#867E91] hover:text-[#1C1924]"
                }`}
              >
                {tab === "catalog" ? "Course Catalog" : tab === "courses" ? "Curricula Tracks" : "Admin Operations"}
              </button>
            ))}
          </div>
        </div>

        {/* Tab 1: Course Catalog View */}
        {activeTab === "catalog" && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-mono text-[#E64980] font-bold uppercase tracking-wider block">
                  // Student Discovery Engine
                </span>
                <h4 className="text-lg font-black text-[#1C1924]">
                  Empowering Academic &amp; Tech Mastery
                </h4>
              </div>

              {/* Filter Pills */}
              <div className="flex items-center space-x-1.5 text-[11px] font-mono">
                {(["all", "tech", "academic"] as const).map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setSelectedFilter(filter)}
                    className={`px-2.5 py-1 rounded-lg capitalize border transition-all ${
                      selectedFilter === filter
                        ? "bg-[#845EF7] text-white font-bold border-[#845EF7]"
                        : "bg-white text-[#5E5568] border-gray-200 hover:border-[#845EF7]/40"
                    }`}
                  >
                    {filter === "all" ? "All Courses" : filter === "tech" ? "Technology" : "Academics"}
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Course Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-1">
              {filtered.map((course) => {
                const isBooked = bookedCourse === course.id;
                return (
                  <div
                    key={course.id}
                    className="p-4 rounded-2xl bg-white border border-[#F06595]/20 shadow-2xs hover:border-[#F06595] transition-all flex flex-col justify-between space-y-3"
                  >
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-[10px] font-mono">
                        <span className="px-2 py-0.5 rounded-full bg-[#FFF0F6] text-[#D6336C] font-semibold border border-[#F06595]/20">
                          {course.badge}
                        </span>
                        <span className="text-[#867E91] font-semibold">{course.seats}</span>
                      </div>
                      <h5 className="text-sm font-bold text-[#1C1924] leading-snug">{course.title}</h5>
                      <p className="text-[11px] text-[#5E5568] leading-relaxed">{course.highlights}</p>
                    </div>

                    <button
                      onClick={() => setBookedCourse(course.id)}
                      className={`w-full py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center justify-center space-x-1.5 ${
                        isBooked
                          ? "bg-[#E6FCF5] text-[#0CA678] border border-[#20C997]/40"
                          : "bg-[#FAF8FB] hover:bg-gradient-to-r hover:from-[#F06595] hover:to-[#845EF7] hover:text-white text-[#D6336C] border border-[#F06595]/20"
                      }`}
                    >
                      {isBooked ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Session Reserved ✓</span>
                        </>
                      ) : (
                        <span>Book Discovery Session</span>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 2: Curricula Tracks */}
        {activeTab === "courses" && (
          <div className="space-y-3">
            <span className="text-[10px] font-mono text-[#845EF7] uppercase tracking-wider font-bold block">
              // Verified Syllabus &amp; Course Tracks
            </span>
            <div className="space-y-2 text-xs font-mono">
              {[
                { name: "Frontend Foundations: Semantic HTML5, CSS Grid/Flexbox, JavaScript ES6+", weeks: "8 Weeks", status: "Active Enrollments" },
                { name: "Object-Oriented Programming with Java & Data Structure Patterns", weeks: "10 Weeks", status: "Open" },
                { name: "High-School Differential Calculus & Functions Masterclass", weeks: "6 Weeks", status: "Enrolling" },
              ].map((t, i) => (
                <div key={i} className="p-3.5 rounded-2xl bg-white border border-[#F06595]/15 flex items-center justify-between gap-3 shadow-2xs">
                  <div>
                    <div className="font-bold text-[#1C1924]">{t.name}</div>
                    <div className="text-[10px] text-[#867E91]">{t.weeks} duration · Interactive live classes</div>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase bg-[#E6FCF5] text-[#0CA678] border border-[#20C997]/30 shrink-0">
                    {t.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Admin Operations */}
        {activeTab === "dashboard" && (
          <div className="space-y-4">
            <span className="text-[10px] font-mono text-[#20C997] uppercase tracking-wider font-bold block">
              // Sanitized Founder Control Room
            </span>
            <div className="p-5 rounded-3xl bg-white border border-[#F06595]/25 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center shadow-xs">
              <div className="p-3 rounded-2xl bg-[#FFF5F9]">
                <div className="text-2xl font-black text-[#E64980]">100%</div>
                <div className="text-[11px] font-mono text-[#867E91]">Course Delivery</div>
              </div>
              <div className="p-3 rounded-2xl bg-[#F8F5FF]">
                <div className="text-2xl font-black text-[#845EF7]">12+</div>
                <div className="text-[11px] font-mono text-[#867E91]">Academic Tracks</div>
              </div>
              <div className="p-3 rounded-2xl bg-[#E6FCF5]">
                <div className="text-2xl font-black text-[#20C997]">&lt; 0.4s</div>
                <div className="text-[11px] font-mono text-[#867E91]">FCP Speed</div>
              </div>
            </div>
            <p className="text-xs font-mono text-[#867E91] text-center">
              Stack: Node.js, Express, MongoDB Atlas, Resend Email API, Render Production Hosting.
            </p>
          </div>
        )}
      </div>

      {/* Footer bar with direct clickable link */}
      <div className="px-5 py-3 bg-[#FAF8FB] border-t border-[#F06595]/15 text-xs font-mono text-[#5E5568] flex items-center justify-between">
        <span className="truncate">Qanz Academy · Full-Stack &amp; Product Engineering</span>
        <a
          href="https://www.qanzacademy.online"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#E64980] hover:text-[#845EF7] font-bold flex items-center space-x-1 shrink-0 ml-3 underline underline-offset-2"
        >
          <span>Visit qanzacademy.online ↗</span>
        </a>
      </div>
    </div>
  );
}
