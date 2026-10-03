"use client";

import { useEffect, useState, useRef, useCallback, ComponentType } from "react";
import { 
  Search, 
  Terminal, 
  Briefcase, 
  Sparkles, 
  Clock, 
  User, 
  Mail, 
  FileDown, 
  ExternalLink, 
  Layers,
  ArrowRight,
  X
} from "lucide-react";
import { profileData } from "@/data/profile";
import { projectsData } from "@/data/projects";

interface CommandItem {
  id: string;
  category: "Navigate" | "Projects" | "Actions";
  title: string;
  subtitle?: string;
  icon: ComponentType<{ className?: string }>;
  action: () => void;
}

export function CommandPalette({
  isOpen,
  onClose,
  onSelectProject,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject?: (projectId: string) => void;
}) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollTo = useCallback((id: string) => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }, [onClose]);

  const items: CommandItem[] = [
    // Navigation
    {
      id: "nav-work",
      category: "Navigate",
      title: "Selected Work",
      subtitle: "Featured production, civic case studies & simulators",
      icon: Briefcase,
      action: () => scrollTo("work"),
    },
    {
      id: "nav-craft",
      category: "Navigate",
      title: "Frontend Craft",
      subtitle: "Responsive UI, components, debugging & performance",
      icon: Layers,
      action: () => scrollTo("craft"),
    },
    {
      id: "nav-lab",
      category: "Navigate",
      title: "Creative Lab",
      subtitle: "Anime.js, magnetic physics, and code particle blooms",
      icon: Sparkles,
      action: () => scrollTo("lab"),
    },
    {
      id: "nav-experience",
      category: "Navigate",
      title: "Experience",
      subtitle: "HYNX, Remote Digital, Qanz & frontend roles",
      icon: Clock,
      action: () => scrollTo("experience"),
    },
    {
      id: "nav-capabilities",
      category: "Navigate",
      title: "Beyond the Interface",
      subtitle: "Backend, database, mobile & AI technical breadth",
      icon: Terminal,
      action: () => scrollTo("breadth"),
    },
    {
      id: "nav-about",
      category: "Navigate",
      title: "About Aisha",
      subtitle: "Background, LIU Computer Science (3.94 GPA)",
      icon: User,
      action: () => scrollTo("about"),
    },
    {
      id: "nav-contact",
      category: "Navigate",
      title: "Contact",
      subtitle: "Get in touch for frontend opportunities",
      icon: Mail,
      action: () => scrollTo("contact"),
    },

    // Projects
    ...projectsData.map((project) => ({
      id: `proj-${project.id}`,
      category: "Projects" as const,
      title: project.title,
      subtitle: `${project.typeLabel} · ${project.period}`,
      icon: Briefcase,
      action: () => {
        onClose();
        if (onSelectProject) {
          onSelectProject(project.id);
        } else {
          scrollTo("work");
        }
      },
    })),

    // Actions
    {
      id: "act-cv",
      category: "Actions",
      title: "Download CV",
      subtitle: "Verified PDF summary of technical qualifications",
      icon: FileDown,
      action: () => {
        onClose();
        window.open(profileData.cvPath, "_blank");
      },
    },
    {
      id: "act-email",
      category: "Actions",
      title: "Send Email",
      subtitle: profileData.email,
      icon: Mail,
      action: () => {
        onClose();
        window.location.assign(`mailto:${profileData.email}`);
      },
    },
    {
      id: "act-linkedin",
      category: "Actions",
      title: "LinkedIn Profile",
      subtitle: "Professional network & endorsements",
      icon: ExternalLink,
      action: () => {
        onClose();
        window.open(profileData.linkedin, "_blank");
      },
    },
    {
      id: "act-github",
      category: "Actions",
      title: "GitHub Repositories",
      subtitle: "github.com/AishaKotob",
      icon: ExternalLink,
      action: () => {
        onClose();
        window.open(profileData.github, "_blank");
      },
    },
  ];

  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      (item.subtitle && item.subtitle.toLowerCase().includes(query.toLowerCase())) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          filteredItems[selectedIndex].action();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, onClose]);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setQuery("");
        setSelectedIndex(0);
        inputRef.current?.focus();
      }, 10);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
      className="fixed inset-0 z-9999 flex items-start justify-center pt-20 px-4 bg-black/40 backdrop-blur-md transition-all duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl overflow-hidden rounded-3xl border border-[#F06595]/30 bg-white shadow-[0_20px_60px_-15px_rgba(240,101,149,0.2)] animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search header */}
        <div className="relative flex items-center border-b border-gray-100 px-4 py-3.5 bg-[#FAF8FB]">
          <Search className="w-5 h-5 text-[#E64980] mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command or jump to section..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            className="w-full bg-transparent text-sm text-[#1C1924] placeholder-[#867E91] outline-none font-mono"
          />
          <button
            onClick={onClose}
            aria-label="Close command palette"
            className="p-1 rounded-lg text-[#867E91] hover:text-[#1C1924] hover:bg-gray-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results list */}
        <div className="max-h-96 overflow-y-auto p-2 divide-y divide-gray-50">
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center text-sm text-[#867E91] font-mono">
              No results found for &quot;{query}&quot;
            </div>
          ) : (
            filteredItems.map((item, index) => {
              const isSelected = index === selectedIndex;
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  onClick={() => item.action()}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-2xl cursor-pointer transition-colors ${
                    isSelected
                      ? "bg-[#FFF0F6] text-[#1C1924] border border-[#F06595]/30"
                      : "text-[#5E5568] hover:text-[#1C1924] hover:bg-[#FAF8FB] border border-transparent"
                  }`}
                >
                  <div className="flex items-center space-x-3 min-w-0">
                    <div
                      className={`p-2 rounded-xl shrink-0 ${
                        isSelected
                          ? "bg-[#F06595] text-white shadow-2xs"
                          : "bg-gray-100 text-[#867E91]"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-sm font-semibold text-[#1C1924] truncate flex items-center space-x-2">
                        <span>{item.title}</span>
                        <span className="text-[10px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded bg-gray-100 text-[#867E91]">
                          {item.category}
                        </span>
                      </div>
                      {item.subtitle && (
                        <div className="text-xs text-[#867E91] truncate font-mono mt-0.5">
                          {item.subtitle}
                        </div>
                      )}
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform shrink-0 ml-2 ${
                      isSelected ? "text-[#E64980] translate-x-1" : "opacity-0"
                    }`}
                  />
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="flex items-center justify-between border-t border-gray-100 px-4 py-2 bg-[#FAF8FB] text-[11px] font-mono text-[#867E91]">
          <div className="flex items-center space-x-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>Esc Close</span>
          </div>
          <span className="text-[#845EF7] font-semibold">Aisha Kotob · Frontend Dev</span>
        </div>
      </div>
    </div>
  );
}
