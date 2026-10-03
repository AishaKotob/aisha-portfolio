"use client";

import { projectsData, Project } from "@/data/projects";
import { BrowserFrame } from "@/components/media/BrowserFrame";
import { CarShowroomSimulator } from "@/components/media/CarShowroomSimulator";
import { MunicipalityInteractivePreview } from "@/components/media/MunicipalityInteractivePreview";
import { PhoneStack } from "@/components/media/PhoneStack";
import { ArrowUpRight, ExternalLink, Server, Smartphone, Sparkles, Layers, Cpu, CheckCircle2 } from "lucide-react";
import { useDevNotifications } from "@/components/ui/DevNotificationHUD";

interface SelectedWorkSectionProps {
  onSelectProject: (project: Project) => void;
  onOpenLightbox?: (src: string, alt: string, caption?: string) => void;
}

export function SelectedWorkSection({
  onSelectProject,
  onOpenLightbox,
}: SelectedWorkSectionProps) {
  const { notify } = useDevNotifications();
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
                {/* Media Column (7 cols) */}
                <div className="lg:col-span-7 order-2 lg:order-1" data-cursor="VIEW">
                  <div
                    onClick={() => {
                      onSelectProject(project);
                      notify("dom", "Qanz Academy Modal", "Opened deep case study breakdown");
                    }}
                    className="cursor-pointer transition-transform duration-500 ease-out group-hover:scale-[1.01]"
                  >
                    <BrowserFrame
                      src={project.media[0]?.src || ""}
                      alt={project.media[0]?.alt || ""}
                      caption="Qanz Academy · Student Portal & Interactive Course Discovery"
                      domain="www.qanzacademy.online"
                      badge="FOUNDER · RUNNING PLATFORM"
                      onOpenLightbox={onOpenLightbox}
                    />
                  </div>
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

                {/* Media Column: 3-Phone Stack (7 cols) */}
                <div className="lg:col-span-7" data-cursor="OPEN">
                  <PhoneStack onOpenLightbox={onOpenLightbox} />
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secondaryProjects.map((proj) => (
              <div
                key={proj.id}
                onClick={() => onSelectProject(proj)}
                data-cursor="pointer"
                className="group p-6 rounded-3xl bg-white border border-[#F06595]/20 hover:border-[#845EF7]/50 transition-all duration-300 hover:shadow-[0_15px_35px_rgba(240,101,149,0.12)] cursor-pointer flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#FFF0F6] text-[#D6336C] border border-[#F06595]/25">
                      {proj.badge}
                    </span>
                    <span className="text-xs font-mono text-[#867E91]">{proj.period}</span>
                  </div>

                  <h4 className="text-xl font-bold text-[#1C1924] group-hover:text-[#D6336C] transition-colors">
                    {proj.title}
                  </h4>

                  <p className="text-sm text-[#5E5568] leading-relaxed">
                    {proj.shortSummary}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-mono text-[#845EF7]">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.technologies.primaryFrontend.slice(0, 3).map((t, idx) => (
                      <span key={idx} className="text-[#867E91]">
                        #{t}
                      </span>
                    ))}
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#D6336C] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
