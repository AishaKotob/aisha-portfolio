"use client";

import { useState } from "react";
import { technicalBreadthGroups, skillConstellationNodes } from "@/data/skills";
import { Server, Database, Smartphone, Cpu, Sparkles, ArrowRight } from "lucide-react";
import { useDevNotifications } from "@/components/ui/DevNotificationHUD";

export function TechnicalBreadthSection({
  onSelectProjectById,
}: {
  onSelectProjectById?: (id: string) => void;
}) {
  const [hoveredSkillId, setHoveredSkillId] = useState<string | null>(null);
  const { notify } = useDevNotifications();

  const activeNode = skillConstellationNodes.find((n) => n.id === hoveredSkillId);

  const getGroupIcon = (category: string) => {
    if (category.includes("Backend")) return Server;
    if (category.includes("Data")) return Database;
    if (category.includes("Mobile")) return Smartphone;
    return Cpu;
  };

  return (
    <section id="breadth" className="relative py-28 sm:py-36 px-6 sm:px-8 border-t border-[#F06595]/15 bg-[#FCFAFC]">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-[#E64980] uppercase tracking-widest font-bold">
            <span className="w-2 h-2 rounded-full bg-[#E64980] animate-ping" />
            <span>06 / TECHNICAL BREADTH</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-[#1C1924]">
            Beyond the <span className="font-serif-accent italic font-normal text-gradient-rose-gold">Interface</span>
          </h2>

          <div className="p-6 rounded-2xl bg-white border-l-4 border-[#F06595] border-y border-r border-[#F06595]/20 shadow-xs">
            <p className="text-base sm:text-xl text-[#1C1924] font-light leading-relaxed">
              &ldquo;Frontend is my primary focus, but understanding the systems behind the interface helps me build better products.&rdquo;
            </p>
          </div>
        </div>

        {/* 4 Technical Breadth Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technicalBreadthGroups.map((group, idx) => {
            const Icon = getGroupIcon(group.category);
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-[#F06595]/20 hover:border-[#845EF7]/40 transition-all flex flex-col justify-between space-y-6 shadow-[0_8px_25px_rgba(240,101,149,0.06)]"
              >
                <div className="space-y-3">
                  <div className="p-2.5 rounded-xl bg-[#FFF0F6] text-[#E64980] w-fit">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1C1924]">{group.category}</h3>
                  <p className="text-xs text-[#5E5568] leading-relaxed">{group.description}</p>
                </div>

                <div className="space-y-2 pt-2 border-t border-gray-100">
                  {group.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="text-xs font-mono flex items-baseline justify-between text-[#494454]">
                      <span className="font-semibold text-[#1C1924]">{skill.name}</span>
                      <span className="text-[10px] text-[#867E91] truncate ml-2">{skill.context}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* INTERACTIVE SKILL CONSTELLATION */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#F06595]/25 shadow-[0_16px_50px_rgba(240,101,149,0.08)] space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-6">
            <div>
              <span className="text-xs font-mono text-[#845EF7] uppercase tracking-wider font-bold block mb-1">
                {"// Interactive Skill Constellation"}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#1C1924]">
                Frontend Core &amp; Ecosystem Bridges
              </h3>
            </div>
            <div className="text-xs font-mono text-[#867E91]">
              Hover any technology to spotlight associated project implementations
            </div>
          </div>

          {/* Interactive Nodes Wall */}
          <div className="space-y-6">
            {/* Primary Frontend Core */}
            <div className="space-y-2">
              <span className="text-[11px] font-mono text-[#D6336C] uppercase tracking-wider font-bold block">
                Primary Frontend Core
              </span>
              <div className="flex flex-wrap gap-2.5">
                {skillConstellationNodes
                  .filter((n) => n.level === "primary-frontend")
                  .map((node) => {
                    const isHovered = hoveredSkillId === node.id;
                    return (
                      <button
                        key={node.id}
                        onMouseEnter={() => {
                          setHoveredSkillId(node.id);
                          notify("inspect", "Constellation", `Spotlight: ${node.name} (${node.relatedProjects.length} linked projects)`);
                        }}
                        onMouseLeave={() => setHoveredSkillId(null)}
                        data-cursor="pointer"
                        className={`px-4 py-2.5 rounded-xl font-mono text-sm font-bold transition-all duration-200 border ${
                          isHovered
                            ? "bg-gradient-to-r from-[#F06595] to-[#845EF7] text-white border-transparent shadow-[0_6px_20px_rgba(240,101,149,0.35)] scale-105"
                            : "bg-[#FCFAFC] text-[#1C1924] border-[#F06595]/30 hover:border-[#F06595]"
                        }`}
                      >
                        {node.name}
                      </button>
                    );
                  })}
              </div>
            </div>

            {/* Secondary Technologies Ring */}
            <div className="space-y-2 pt-2">
              <span className="text-[11px] font-mono text-[#867E91] uppercase tracking-wider font-bold block">
                Supporting Systems (Backend · Mobile · Data · AI)
              </span>
              <div className="flex flex-wrap gap-2">
                {skillConstellationNodes
                  .filter((n) => n.level === "secondary-tech")
                  .map((node) => {
                    const isHovered = hoveredSkillId === node.id;
                    return (
                      <button
                        key={node.id}
                        onMouseEnter={() => setHoveredSkillId(node.id)}
                        onMouseLeave={() => setHoveredSkillId(null)}
                        data-cursor="pointer"
                        className={`px-3 py-1.5 rounded-lg font-mono text-xs font-semibold transition-all duration-200 border ${
                          isHovered
                            ? "bg-[#20C997] text-white border-[#20C997] shadow-xs scale-105"
                            : "bg-[#FAF8FB] text-[#5E5568] border-gray-200 hover:border-[#845EF7]/40 hover:text-[#1C1924]"
                        }`}
                      >
                        {node.name}
                      </button>
                    );
                  })}
              </div>
            </div>
          </div>

          {/* Active Associated Projects HUD Bar */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF8FB] border border-[#F06595]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-xl bg-white text-[#E64980] border border-[#F06595]/20">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-mono text-[#1C1924]">
                  {activeNode ? (
                    <span>
                      Technology: <strong className="text-[#D6336C]">{activeNode.name}</strong>
                    </span>
                  ) : (
                    <span className="text-[#867E91]">Hover any technology node above to reveal verified project implementations</span>
                  )}
                </div>
                {activeNode && (
                  <div className="text-[11px] font-mono text-[#867E91] mt-0.5">
                    Associated in {activeNode.relatedProjects.length} application(s)
                  </div>
                )}
              </div>
            </div>

            {activeNode && (
              <div className="flex flex-wrap gap-2">
                {activeNode.relatedProjects.map((pId) => (
                  <button
                    key={pId}
                    onClick={() => onSelectProjectById && onSelectProjectById(pId)}
                    className="px-3 py-1 rounded-lg bg-white border border-[#F06595]/30 text-xs font-mono text-[#D6336C] hover:bg-[#FFF0F6] transition-colors flex items-center space-x-1 shadow-2xs"
                  >
                    <span>{pId.replace("-", " ")}</span>
                    <ArrowRight className="w-3 h-3 text-[#845EF7]" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
