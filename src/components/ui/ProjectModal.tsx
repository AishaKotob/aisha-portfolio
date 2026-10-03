"use client";

import { useEffect } from "react";
import { X, ExternalLink, CheckCircle2, Server, Layout } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { Project } from "@/data/projects";
import { BrowserFrame } from "@/components/media/BrowserFrame";
import { CarShowroomSimulator } from "@/components/media/CarShowroomSimulator";
import { MunicipalityInteractivePreview } from "@/components/media/MunicipalityInteractivePreview";
import { PhoneStack } from "@/components/media/PhoneStack";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenLightbox?: (src: string, alt: string, caption?: string) => void;
}

export function ProjectModal({ project, onClose, onOpenLightbox }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} Case Study`}
      className="fixed inset-0 z-9999 flex items-center justify-center p-3 sm:p-6 bg-black/40 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-white border border-[#F06595]/30 shadow-[0_25px_70px_rgba(240,101,149,0.18)] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-white/95 border-b border-[#F06595]/15 backdrop-blur-md">
          <div className="flex items-center space-x-3">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-[#FFF0F6] text-[#D6336C] border border-[#F06595]/30">
              {project.badge}
            </span>
            <span className="text-xs font-mono text-[#867E91] hidden sm:inline">
              {`// ${project.period}`}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="↗"
                className="flex items-center space-x-1.5 px-3 py-1 rounded-xl bg-[#FFF0F6] border border-[#F06595]/30 text-xs font-semibold text-[#D6336C] hover:bg-[#F06595] hover:text-white transition-all"
              >
                <span>Live Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="↗"
                className="p-1.5 rounded-xl bg-gray-100 border border-gray-200 text-[#1C1924] hover:text-[#D6336C] transition-colors"
                aria-label="View on GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 rounded-xl bg-gray-100 hover:bg-[#FFF0F6] border border-gray-200 text-[#5E5568] hover:text-[#D6336C] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-10">
          {/* Title & Headline */}
          <div>
            <span className="text-xs font-mono text-[#E64980] font-bold uppercase tracking-widest block mb-2">
              {project.typeLabel}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#1C1924] mb-3">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-[#5E5568] leading-relaxed">
              {project.headline}
            </p>
          </div>

          {/* Media preview section */}
          <div className="rounded-3xl overflow-hidden">
            {project.id === "car-showroom-ml" ? (
              <CarShowroomSimulator />
            ) : project.id === "municipality-portal" ? (
              <MunicipalityInteractivePreview />
            ) : project.category === "mobile" ? (
              <PhoneStack onOpenLightbox={onOpenLightbox} />
            ) : (
              <BrowserFrame
                src={project.media[0]?.src || ""}
                alt={project.media[0]?.alt || ""}
                caption={project.media[0]?.caption}
                badge={project.badge}
                domain={project.url ? new URL(project.url).hostname : undefined}
                onOpenLightbox={onOpenLightbox}
              />
            )}
          </div>

          {/* 01. FRONTEND / PRODUCT CONTRIBUTION (Prominent, First) */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-[#FFF0F6] via-white to-[#F3F0FF] border border-[#F06595]/30 space-y-5 shadow-xs">
            <div className="flex items-center space-x-2 text-xs font-mono text-[#D6336C] uppercase font-bold tracking-widest">
              <Layout className="w-4 h-4 text-[#845EF7]" />
              <span>01 / FRONTEND &amp; PRODUCT EXPERIENCE (PRIMARY)</span>
            </div>

            <h3 className="text-xl font-bold text-[#1C1924]">
              {project.frontendContribution.title}
            </h3>

            <p className="text-sm sm:text-base text-[#494454] leading-relaxed">
              {project.frontendContribution.summary}
            </p>

            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono text-[#867E91] uppercase tracking-wider font-bold block">
                Key Engineering Highlights:
              </span>
              <ul className="space-y-2.5">
                {project.frontendContribution.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-sm text-[#494454]">
                    <CheckCircle2 className="w-4 h-4 text-[#20C997] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3">
              <span className="text-xs font-mono text-[#867E91] uppercase tracking-wider font-bold block mb-2">
                Delivered Interface Surfaces:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.frontendContribution.interfaces.map((ui, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-white border border-[#F06595]/20 text-xs text-[#1C1924] font-mono flex items-center space-x-2 shadow-2xs"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E64980]" />
                    <span>{ui}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 02. SUPPORTING ARCHITECTURE / BACKEND (Secondary) */}
          <div className="p-6 rounded-3xl bg-[#FAF8FB] border border-gray-200 space-y-5">
            <div className="flex items-center space-x-2 text-xs font-mono text-[#867E91] uppercase font-bold tracking-widest">
              <Server className="w-4 h-4 text-[#845EF7]" />
              <span>02 / SUPPORTING SYSTEM &amp; DATA LAYER (SECONDARY)</span>
            </div>

            <h3 className="text-lg font-bold text-[#1C1924]">
              {project.supportingSystem.title}
            </h3>

            <p className="text-sm text-[#5E5568] leading-relaxed">
              {project.supportingSystem.summary}
            </p>

            <div className="space-y-2 pt-1">
              {project.supportingSystem.architectureNotes.map((note, idx) => (
                <div key={idx} className="flex items-start space-x-2.5 text-xs font-mono text-[#5E5568]">
                  <span className="text-[#845EF7] font-bold mt-0.5">↳</span>
                  <span>{note}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap gap-2">
              {project.supportingSystem.stack.map((item, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-white border border-gray-200 text-xs font-mono text-[#5E5568]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#FAF8FB] border-t border-gray-100 flex items-center justify-between text-xs font-mono text-[#867E91]">
          <span>Aisha Kotob · Case Study Breakdown</span>
          <button
            onClick={onClose}
            className="hover:text-[#D6336C] font-semibold transition-colors"
          >
            Close ✕
          </button>
        </div>
      </div>
    </div>
  );
}
