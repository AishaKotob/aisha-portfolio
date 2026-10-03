"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { Command, Menu, X, FileDown, ArrowUpRight, Sparkles } from "lucide-react";
import { useDevNotifications } from "./DevNotificationHUD";

export function Navbar({ onOpenCommand }: { onOpenCommand: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { notify } = useDevNotifications();

  const navLinks = [
    { label: "Work", href: "#work" },
    { label: "Craft", href: "#craft" },
    { label: "Lab", href: "#lab" },
    { label: "Experience", href: "#experience" },
    { label: "Breadth", href: "#breadth" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ["work", "craft", "lab", "experience", "breadth", "about", "contact"];
      const scrollPos = window.scrollY + 220;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionName: string) => {
    notify("dom", "Viewport Navigation", `DOM smooth scrolled to section #${sectionName}`, `document.getElementById('${sectionName}').scrollIntoView()`);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-white/85 backdrop-blur-xl border-b border-[#F06595]/15 shadow-[0_8px_30px_rgba(240,101,149,0.06)]"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Logo / Brand */}
          <Link
            href="/"
            className="group flex items-center space-x-2.5 text-base font-semibold tracking-tight text-[#1C1924]"
            data-cursor="pointer"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#FFF0F6] to-[#F3F0FF] border border-[#F06595]/30 flex items-center justify-center font-mono text-xs font-bold text-[#E64980] group-hover:border-[#845EF7] group-hover:text-[#845EF7] transition-all shadow-[0_4px_12px_rgba(240,101,149,0.15)]">
              AK
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-sm font-bold tracking-wide text-[#1C1924] group-hover:text-[#E64980] transition-colors">
                AISHA KOTOB
              </span>
              <span className="text-[10px] font-mono text-[#867E91] tracking-wider uppercase flex items-center gap-1">
                <span>Frontend Developer</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#20C997] inline-block animate-pulse" />
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 p-1.5 rounded-full bg-white/80 border border-[#F06595]/15 shadow-[0_4px_20px_rgba(240,101,149,0.06)] backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNavClick(link.href.substring(1))}
                  data-cursor="pointer"
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-[#FFF0F6] to-[#F3F0FF] text-[#D6336C] border border-[#F06595]/30 font-semibold shadow-[0_2px_8px_rgba(240,101,149,0.12)]"
                      : "text-[#5E5568] hover:text-[#1C1924] hover:bg-[#FAF8FB] border border-transparent"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Actions: CV & Command Palette */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Command Palette Button */}
            <button
              onClick={onOpenCommand}
              aria-label="Open command palette"
              data-cursor="pointer"
              className="flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-white border border-[#F06595]/20 hover:border-[#845EF7] text-xs font-mono text-[#5E5568] hover:text-[#D6336C] transition-all shadow-sm"
            >
              <Command className="w-3.5 h-3.5 text-[#845EF7]" />
              <span>⌘K</span>
            </button>

            {/* Download CV */}
            <a
              href={profileData.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="↗"
              className="group flex items-center space-x-1.5 px-4 py-1.5 rounded-xl bg-gradient-to-r from-[#F06595] to-[#845EF7] text-white text-xs font-semibold hover:shadow-[0_6px_20px_rgba(240,101,149,0.35)] transition-all hover:scale-[1.02]"
            >
              <FileDown className="w-3.5 h-3.5 text-white/90 group-hover:translate-y-0.5 transition-transform" />
              <span>CV ↓</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={onOpenCommand}
              aria-label="Open command palette"
              className="p-2 rounded-xl bg-white border border-[#F06595]/20 text-[#5E5568]"
            >
              <Command className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-xl bg-white border border-[#F06595]/20 text-[#1C1924]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-40 lg:hidden bg-white/95 backdrop-blur-2xl pt-24 px-6 flex flex-col justify-between pb-8 animate-in fade-in duration-200"
        >
          <div className="flex flex-col space-y-3">
            <span className="text-[11px] font-mono text-[#D6336C] tracking-widest uppercase">
              {"// Navigation View"}
            </span>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleNavClick(link.href.substring(1));
                }}
                className="text-2xl font-light tracking-tight text-[#1C1924] hover:text-[#D6336C] py-2 border-b border-[#F06595]/10 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-5 h-5 text-[#867E91]" />
              </a>
            ))}
          </div>

          <div className="flex flex-col space-y-3 pt-6 border-t border-[#F06595]/15">
            <a
              href={profileData.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#F06595] to-[#845EF7] text-white font-semibold text-center flex items-center justify-center space-x-2 shadow-md"
            >
              <FileDown className="w-4 h-4" />
              <span>Download CV (PDF)</span>
            </a>
            <div className="text-center text-xs font-mono text-[#867E91] pt-2">
              Based in Lebanon · Frontend & UI Developer
            </div>
          </div>
        </div>
      )}
    </>
  );
}
