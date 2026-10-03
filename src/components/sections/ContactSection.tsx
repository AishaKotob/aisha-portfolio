"use client";

import { useState } from "react";
import { profileData } from "@/data/profile";
import { Mail, FileDown, Copy, Check, ArrowUpRight, MapPin, Send } from "lucide-react";
import { useDevNotifications } from "@/components/ui/DevNotificationHUD";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const { notify } = useDevNotifications();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    notify("dom", "Clipboard Event", `Copied email ${profileData.email} to clipboard!`, `navigator.clipboard.writeText("${profileData.email}")`);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 px-6 sm:px-8 border-t border-[#F06595]/15 bg-[#FCFAFC]">
      <div className="max-w-5xl mx-auto space-y-16 text-center">
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-[#D6336C] uppercase tracking-widest font-bold">
            <span className="w-2 h-2 rounded-full bg-[#D6336C] animate-ping" />
            <span>10 / GET IN TOUCH</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-[#1C1924]">
            Have something <span className="font-serif-accent italic font-normal text-gradient-rose-gold">worth building?</span>
          </h2>

          <p className="text-base sm:text-xl text-[#5E5568] font-light leading-relaxed">
            I’m open to frontend engineering opportunities, product-focused development work, and selected freelance collaborations.
          </p>
        </div>

        {/* Contact Action Card in Light Theme */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#F06595]/25 shadow-[0_20px_60px_-15px_rgba(240,101,149,0.12)] space-y-8">
          {/* Email block with quick copy */}
          <div className="space-y-3">
            <span className="text-xs font-mono text-[#867E91] uppercase tracking-wider font-semibold block">
              Direct Contact
            </span>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`mailto:${profileData.email}`}
                data-cursor="pointer"
                className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold text-[#1C1924] hover:text-[#D6336C] transition-colors"
              >
                {profileData.email}
              </a>

              <button
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                data-cursor="pointer"
                className="p-2.5 rounded-xl bg-[#FAF8FB] border border-[#F06595]/25 hover:border-[#F06595] text-[#5E5568] hover:text-[#D6336C] transition-all flex items-center space-x-1.5 text-xs font-mono font-semibold"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#0CA678]" />
                    <span className="text-[#0CA678]">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#845EF7]" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 border-t border-gray-100">
            <a
              href={`mailto:${profileData.email}`}
              data-cursor="pointer"
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#F06595] via-[#E64980] to-[#845EF7] text-white font-bold text-sm transition-all duration-300 shadow-[0_8px_25px_rgba(240,101,149,0.35)] hover:shadow-[0_12px_32px_rgba(240,101,149,0.5)] flex items-center space-x-2"
            >
              <Mail className="w-4 h-4" />
              <span>Send Direct Email</span>
            </a>

            <a
              href={profileData.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="↗"
              className="px-6 py-3.5 rounded-2xl bg-white hover:bg-[#FFF0F6] border border-[#F06595]/25 hover:border-[#F06595] text-sm font-bold text-[#1C1924] hover:text-[#D6336C] flex items-center space-x-2 transition-all shadow-xs"
            >
              <FileDown className="w-4 h-4 text-[#845EF7]" />
              <span>Download CV (PDF)</span>
            </a>

            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="↗"
              className="px-5 py-3.5 rounded-2xl bg-[#FAF8FB] hover:bg-white border border-[#F06595]/20 text-xs font-mono font-semibold text-[#1C1924] flex items-center space-x-1.5 transition-colors shadow-2xs"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#845EF7]" />
            </a>

            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="↗"
              className="px-5 py-3.5 rounded-2xl bg-[#FAF8FB] hover:bg-white border border-[#F06595]/20 text-xs font-mono font-semibold text-[#1C1924] flex items-center space-x-1.5 transition-colors shadow-2xs"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#20C997]" />
            </a>
          </div>

          {/* Location status note */}
          <div className="flex items-center justify-center space-x-2 text-xs font-mono text-[#867E91]">
            <MapPin className="w-3.5 h-3.5 text-[#E64980]" />
            <span>Based in {profileData.location} · Remote Worldwide &amp; Local Collaboration</span>
          </div>
        </div>
      </div>
    </section>
  );
}
