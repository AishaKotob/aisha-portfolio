"use client";

import { useState, useCallback, useEffect } from "react";
import { Project, projectsData } from "@/data/projects";

// UI Framework Components
import { CustomCursor } from "@/components/ui/CustomCursor";
import { MicroLoader } from "@/components/ui/MicroLoader";
import { Navbar } from "@/components/ui/Navbar";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { Lightbox, LightboxData } from "@/components/media/Lightbox";
import { Footer } from "@/components/ui/Footer";

// Section Components
import { HeroSection } from "@/components/sections/HeroSection";
import { IntroductionSection } from "@/components/sections/IntroductionSection";
import { SelectedWorkSection } from "@/components/sections/SelectedWorkSection";
import { FrontendCraftSection } from "@/components/sections/FrontendCraftSection";
import { CreativeLabSection } from "@/components/sections/CreativeLabSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { TechnicalBreadthSection } from "@/components/sections/TechnicalBreadthSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { TeachingSection } from "@/components/sections/TeachingSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [lightboxData, setLightboxData] = useState<LightboxData | null>(null);

  // Global keyboard shortcut for Command Palette (⌘K or Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleOpenLightbox = useCallback(
    (src: string, alt: string, caption?: string) => {
      setLightboxData({ src, alt, caption });
    },
    []
  );

  const handleSelectProjectById = useCallback((id: string) => {
    const found = projectsData.find((p) => p.id === id || p.slug === id);
    if (found) {
      setSelectedProject(found);
    }
  }, []);

  return (
    <main className="relative min-h-screen bg-[#FCFAFC] text-[#1C1924] selection:bg-[#F06595]/20 selection:text-[#A61E4D]">
      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* First-session Micro-loader */}
      <MicroLoader />

      {/* Navigation */}
      <Navbar onOpenCommand={() => setCommandPaletteOpen(true)} />

      {/* 01 Hero Section */}
      <HeroSection
        onExploreWork={() => {
          document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
        }}
        onAboutClick={() => {
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        }}
      />

      {/* 02 Frontend Philosophy & Introduction */}
      <IntroductionSection />

      {/* 03 Selected Work (Case Studies: Qanz, Municipality, Car Showroom ML, Job Finder) */}
      <SelectedWorkSection
        onSelectProject={(project) => setSelectedProject(project)}
        onOpenLightbox={handleOpenLightbox}
      />

      {/* 04 Frontend Craft (Interactive Capability Cards) */}
      <FrontendCraftSection />

      {/* 05 Creative Lab (Code Bloom, Component Gravity, Type Motion, Anime.js Stage) */}
      <CreativeLabSection />

      {/* 06 Experience (HYNX, Remote Digital, Municipality, Qanz, Freelance, Elevvo, eFlow.ai) */}
      <ExperienceSection />

      {/* 07 Technical Breadth (Beyond the Interface & Interactive Skill Constellation) */}
      <TechnicalBreadthSection
        onSelectProjectById={handleSelectProjectById}
      />

      {/* 08 Education & Recognition (3.94 GPA, LIU High Distinction, Certificates) */}
      <EducationSection />

      {/* 09 Teaching & Leadership */}
      <TeachingSection />

      {/* 10 About Aisha */}
      <AboutSection />

      {/* 11 Contact */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Command Palette Modal */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onSelectProject={(projectId) => {
          const found = projectsData.find((p) => p.id === projectId);
          if (found) setSelectedProject(found);
        }}
      />

      {/* Project Case Study Detailed Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenLightbox={handleOpenLightbox}
      />

      {/* Fullscreen Lightbox */}
      <Lightbox
        data={lightboxData}
        onClose={() => setLightboxData(null)}
      />
    </main>
  );
}
