"use client";

import { projectsData, Project } from "@/data/projects";
import { QanzInteractivePreview } from "@/components/media/QanzInteractivePreview";
import { CarShowroomSimulator } from "@/components/media/CarShowroomSimulator";
import { MunicipalityInteractivePreview } from "@/components/media/MunicipalityInteractivePreview";
import { JobFinderInteractiveSimulator } from "@/components/media/JobFinderInteractiveSimulator";
import { GithubIcon } from "@/components/ui/Icons";
import { ArrowUpRight, ExternalLink, Server, Smartphone, Sparkles, Layers, Cpu, CheckCircle2 } from "lucide-react";

interface SelectedWorkSectionProps {
  onSelectProject: (project: Project) => void;
  onOpenLightbox?: (src: string, alt: string, caption?: string) => void;
}

export function SelectedWorkSection({
  onSelectProject,
  onOpenLightbox,
}: SelectedWorkSectionProps) {
  const primaryProjects = projectsData.filter((p) => p.featured);
  const secondaryProjects = projectsData.filter((p) => !p.featured);

  return (
    <section id="work" className="relative py-28 sm:py-36 px-6 sm:px-8 border-t border-[#F06595]/15 bg-[#FCFAFC]">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#F06595]/15 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-[#E64980] uppercase tracking-widest font-bold">
              <span className="w-2 h-2 rounded-full bg-[#E64980] animate-ping" />
              <span>02 / SELECTED WORK</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-[#1C1924]">
              Featured <span className="font-serif-accent italic font-normal text-gradient-rose-gold">Case Studies</span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[#5E5568] font-light">
            Engineered with a frontend-first mindset: responsive ergonomics, component modularity, live interactive simulators, and dependable backend connectivity.
          </p>
        </div>

        {/* PRIMARY CASE STUDIES WITH VERIFIED RUNNING PREVIEWS */}
        <div className="space-y-32">
          {/* CASE STUDY 01: QANZ ACADEMY (Founder, Running E-Learning Platform Preview) */}
          {(() => {
            const project = primaryProjects.find((p) => p.id === "qanz-academy");
            if (!project) return null;

            return (
              <div
                key={project.id}
                className="group relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
              >
                {/* Media Column (7 cols): Functioning E-Learning Discovery Simulator & Live Link */}
                <div className="lg:col-span-7 order-2 lg:order-1">
                  <QanzInteractivePreview />
                </div>

                {/* Narrative Column (5 cols) */}
                <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
                  <div className="flex items-center space-x-3">
                    <span className="font-mono text-2xl font-bold text-[#E64980] group-hover:text-[#845EF7] transition-colors">
                      01
                    </span>
                    <span className="px-3 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-[#E6FCF5] text-[#0CA678] border border-[#20C997]/30">
                      LIVE PLATFORM
                    </span>
                    <span className="text-xs font-mono text-[#867E91] uppercase tracking-wider">
                      {project.typeLabel}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-black text-[#1C1924] tracking-tight group-hover:text-[#D6336C] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#5E5568] leading-relaxed">
                    {project.shortSummary}
                  </p>

                  {/* Frontend Contribution Card (Primary) */}
                  <div className="p-5 rounded-2xl bg-white border border-[#F06595]/25 shadow-xs space-y-3">
                    <div className="flex items-center space-x-2 text-xs font-mono text-[#D6336C] uppercase font-bold">
                      <Layers className="w-3.5 h-3.5 text-[#845EF7]" />
                      <span>Frontend &amp; UX Contribution (Primary)</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#494454] leading-relaxed">
                      {project.frontendContribution.summary}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.technologies.primaryFrontend.map((t, i) => (
                        <span key={i} className="px-2.5 py-0.5 rounded-md bg-[#FFF0F6] text-[#D6336C] text-[11px] font-mono font-semibold border border-[#F06595]/20">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Supporting System note */}
                  <div className="text-xs font-mono text-[#867E91] flex items-center space-x-2">
                    <Server className="w-3.5 h-3.5 text-[#845EF7]" />
                    <span>Supporting Stack: Node.js, Express, MongoDB Atlas, Resend, Render</span>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center space-x-4 pt-2">
                    <button
                      onClick={() => onSelectProject(project)}
                      data-cursor="pointer"
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#F06595] to-[#845EF7] text-white text-xs font-bold flex items-center space-x-1.5 shadow-md hover:shadow-lg transition-all"
                    >
                      <span>Explore Case Study</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="↗"
                        className="px-4 py-2.5 rounded-xl bg-white hover:bg-[#FFF0F6] border border-[#F06595]/20 text-xs font-mono text-[#1C1924] flex items-center space-x-1.5 transition-colors shadow-2xs"
                      >
                        <span>Visit Domain</span>
                        <ExternalLink className="w-3.5 h-3.5 text-[#E64980]" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })()}

          {/* CASE STUDY 02: MUNICIPALITY PORTAL (Dual-Interface & Civic Wizard Preview) */}
          {(() => {
            const project = primaryProjects.find((p) => p.id === "municipality-portal");
            if (!project) return null;

            return (
              <div
                key={project.id}
                className="group relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-8 border-t border-[#F06595]/15"
              >
                {/* Narrative Column (5 cols) */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="flex items-center space-x-3">
                    <span className="font-mono text-2xl font-bold text-[#845EF7] group-hover:text-[#E64980] transition-colors">
                      02
                    </span>
                    <span className="px-3 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-[#F3F0FF] text-[#7048E8] border border-[#845EF7]/30">
                      {project.badge}
                    </span>
                    <span className="text-xs font-mono text-[#867E91] uppercase tracking-wider">
                      Civic Experience
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-black text-[#1C1924] tracking-tight group-hover:text-[#7048E8] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#5E5568] leading-relaxed">
                    {project.shortSummary}
                  </p>

                  <div className="p-5 rounded-2xl bg-white border border-[#845EF7]/25 shadow-xs space-y-3">
                    <div className="flex items-center space-x-2 text-xs font-mono text-[#7048E8] uppercase font-bold">
                      <Layers className="w-3.5 h-3.5 text-[#E64980]" />
                      <span>Citizen &amp; Staff UI Engineering (Primary)</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#494454] leading-relaxed">
                      {project.frontendContribution.summary}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.technologies.primaryFrontend.map((t, i) => (
                        <span key={i} className="px-2.5 py-0.5 rounded-md bg-[#F3F0FF] text-[#7048E8] text-[11px] font-mono font-semibold border border-[#845EF7]/20">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="text-xs font-mono text-[#867E91] flex items-center space-x-2">
                    <Server className="w-3.5 h-3.5 text-[#7048E8]" />
                    <span>Underneath: Laravel 11 REST API, MySQL, RBAC Authorization &amp; Audit Logging</span>
                  </div>

                  <div className="flex items-center space-x-4 pt-2">
                    <button
                      onClick={() => onSelectProject(project)}
                      data-cursor="pointer"
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#845EF7] to-[#F06595] text-white text-xs font-bold flex items-center space-x-1.5 shadow-md hover:shadow-lg transition-all"
                    >
                      <span>Explore Case Study</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Media Column: Running Municipality Civic Preview (7 cols) */}
                <div className="lg:col-span-7" data-cursor="VIEW">
                  <MunicipalityInteractivePreview />
                </div>
              </div>
            );
          })()}

          {/* CASE STUDY 03: CAR SHOWROOM + ML INTELLIGENCE (Offline / Simulator UI) */}
          {(() => {
            const project = primaryProjects.find((p) => p.id === "car-showroom-ml");
            if (!project) return null;

            return (
              <div
                key={project.id}
                className="group relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-8 border-t border-[#F06595]/15"
              >
                {/* Media Column: Interactive Offline Simulator (7 cols) */}
                <div className="lg:col-span-7 order-2 lg:order-1" data-cursor="TEST">
                  <CarShowroomSimulator />
                </div>

                {/* Narrative Column (5 cols) */}
                <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
                  <div className="flex items-center space-x-3">
                    <span className="font-mono text-2xl font-bold text-[#E64980] group-hover:text-[#845EF7] transition-colors">
                      03
                    </span>
                    <span className="px-3 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-[#E6FCF5] text-[#0CA678] border border-[#20C997]/30">
                      OFFLINE ML SIMULATOR
                    </span>
                    <span className="text-xs font-mono text-[#867E91] uppercase tracking-wider">
                      University Project
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-black text-[#1C1924] tracking-tight group-hover:text-[#D6336C] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#5E5568] leading-relaxed">
                    Designed as an academic machine learning interface. Since the university FastAPI server is kept offline, test the verified client simulator on the left with live Random Forest valuation heuristics.
                  </p>

                  <div className="p-5 rounded-2xl bg-white border border-[#F06595]/25 shadow-xs space-y-3">
                    <div className="flex items-center space-x-2 text-xs font-mono text-[#D6336C] uppercase font-bold">
                      <Sparkles className="w-3.5 h-3.5 text-[#20C997]" />
                      <span>Interactive Prediction UX (Primary)</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#494454] leading-relaxed">
                      {project.frontendContribution.summary}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.technologies.primaryFrontend.map((t, i) => (
                        <span key={i} className="px-2.5 py-0.5 rounded-md bg-[#FFF0F6] text-[#D6336C] text-[11px] font-mono font-semibold border border-[#F06595]/20">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="text-xs font-mono text-[#867E91] flex items-center space-x-2">
                    <Server className="w-3.5 h-3.5 text-[#845EF7]" />
                    <span>Under The Interface: Random Forest, 24k Kaggle records, ROS, FastAPI</span>
                  </div>

                  <div className="flex items-center space-x-4 pt-2">
                    <button
                      onClick={() => onSelectProject(project)}
                      data-cursor="pointer"
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#F06595] to-[#845EF7] text-white text-xs font-bold flex items-center space-x-1.5 shadow-md hover:shadow-lg transition-all"
                    >
                      <span>Explore Case Study</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* CASE STUDY 04: JOB FINDER MOBILE APP (Mobile Phone Stack) */}
          {(() => {
            const project = primaryProjects.find((p) => p.id === "job-finder-app");
            if (!project) return null;

            return (
              <div
                key={project.id}
                className="group relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-8 border-t border-[#F06595]/15"
              >
                {/* Narrative Column (5 cols) */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="flex items-center space-x-3">
                    <span className="font-mono text-2xl font-bold text-[#845EF7] group-hover:text-[#E64980] transition-colors">
                      04
                    </span>
                    <span className="px-3 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-[#FFF0F6] text-[#D6336C] border border-[#F06595]/30">
                      {project.badge}
                    </span>
                    <span className="text-xs font-mono text-[#867E91] uppercase tracking-wider">
                      Mobile Client
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-black text-[#1C1924] tracking-tight group-hover:text-[#845EF7] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#5E5568] leading-relaxed">
                    {project.shortSummary}
                  </p>

                  <div className="p-5 rounded-2xl bg-white border border-[#845EF7]/25 shadow-xs space-y-3">
                    <div className="flex items-center space-x-2 text-xs font-mono text-[#7048E8] uppercase font-bold">
                      <Smartphone className="w-3.5 h-3.5 text-[#E64980]" />
                      <span>Flutter Client &amp; Mobile Ergonomics (Primary)</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#494454] leading-relaxed">
                      {project.frontendContribution.summary}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.technologies.primaryFrontend.map((t, i) => (
                        <span key={i} className="px-2.5 py-0.5 rounded-md bg-[#F3F0FF] text-[#7048E8] text-[11px] font-mono font-semibold border border-[#845EF7]/20">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="text-xs font-mono text-[#867E91] flex items-center space-x-2">
                    <Server className="w-3.5 h-3.5 text-[#845EF7]" />
                    <span>Backend: Flutter client connected to PHP/MySQL backend through HTTP requests</span>
                  </div>

                  <div className="flex items-center space-x-4 pt-2">
                    <button
                      onClick={() => onSelectProject(project)}
                      data-cursor="pointer"
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#F06595] to-[#845EF7] text-white text-xs font-bold flex items-center space-x-1.5 shadow-md hover:shadow-lg transition-all"
                    >
                      <span>Explore Case Study</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Media Column: Flutter Mobile Simulator (7 cols) */}
                <div className="lg:col-span-7">
                  <JobFinderInteractiveSimulator />
                </div>
              </div>
            );
          })()}
        </div>

        {/* SECONDARY WORK / PROFESSIONAL STUDIES */}
        <div className="pt-20 border-t border-[#F06595]/15 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-[#845EF7] uppercase tracking-widest font-bold block mb-1">
                {"// Secondary Frontend Work"}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#1C1924]">
                Engineering Studies &amp; Commercial Products
              </h3>
            </div>
            <span className="text-xs font-mono text-[#867E91]">
              Modular Components · Quality Assurance · Testing Reports
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {secondaryProjects.map((proj) => (
              <div
                key={proj.id}
                onClick={() => onSelectProject(proj)}
                data-cursor="pointer"
                className="group relative p-7 rounded-3xl bg-gradient-to-br from-[#FFF5F9]/90 via-white to-[#F8F5FF]/90 border border-[#F06595]/30 hover:border-[#845EF7] transition-all duration-300 shadow-[0_12px_35px_rgba(240,101,149,0.1)] hover:shadow-[0_22px_55px_rgba(240,101,149,0.22)] cursor-pointer flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#FFF0F6] text-[#D6336C] border border-[#F06595]/30">
                      {proj.badge}
                    </span>
                    <span className="text-xs font-mono text-[#867E91] font-semibold">{proj.period}</span>
                  </div>

                  <h4 className="text-2xl font-black text-[#1C1924] group-hover:text-[#D6336C] transition-colors">
                    {proj.title}
                  </h4>

                  <p className="text-sm text-[#5E5568] leading-relaxed">
                    {proj.shortSummary}
                  </p>

                  {/* Interactive In-Card Preview Snippet */}
                  {proj.id === "hynx-frontend" ? (
                    <div className="p-3.5 rounded-2xl bg-white/90 border border-[#F06595]/20 text-xs font-mono space-y-2 shadow-2xs">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-bold text-[#1C1924]">Live Trading Workbench</span>
                        <span className="text-[#20C997] font-bold">BTC/USDT $88,450.20 (+3.42%)</span>
                      </div>
                      <div className="text-[10px] text-[#867E91]">
                        Responsive viewports · Sub-millisecond latency · TypeScript strict null checks
                      </div>
                    </div>
                  ) : (
                    <div className="p-3.5 rounded-2xl bg-white/90 border border-[#845EF7]/20 text-xs font-mono space-y-2 shadow-2xs">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-bold text-[#1C1924]">React Component Library</span>
                        <span className="text-[#7048E8] font-bold">Design System Tokens</span>
                      </div>
                      <div className="text-[10px] text-[#867E91]">
                        Polymorphic buttons · State indicator badges · Modular prop contracts
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-[#F06595]/15 flex items-center justify-between gap-3 text-xs font-mono">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.technologies.primaryFrontend.slice(0, 3).map((t, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded-md bg-white border border-[#F06595]/20 text-[#D6336C] font-semibold text-[10px]">
                        #{t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-2 shrink-0">
                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-xl bg-white border border-gray-200 text-[#1C1924] hover:text-[#D6336C] transition-colors"
                        title="View on GitHub"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <span className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#F06595] to-[#845EF7] text-white font-bold flex items-center space-x-1 shadow-xs group-hover:shadow-md transition-all text-xs">
                      <span>Explore Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
