"use client";

import { useState } from "react";
import { Check, ShieldAlert, FileText, Send, User, Calendar } from "lucide-react";

export function MunicipalityInteractivePreview() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [serviceType, setServiceType] = useState<string>("Building Permit Inquiry");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  return (
    <div className="rounded-3xl border border-[#845EF7]/25 bg-white overflow-hidden shadow-[0_18px_50px_-15px_rgba(132,94,247,0.14)]">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#FAF8FB] border-b border-[#845EF7]/15">
        <div className="flex items-center space-x-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF8787]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFD43B]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#69DB7C]" />
        </div>
        <div className="px-3 py-1 rounded-xl bg-white border border-[#845EF7]/15 text-[11px] font-mono text-[#5E5568]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#20C997] inline-block mr-1.5" />
          <span>municipality-portal.gov.local/citizen-services</span>
        </div>
        <span className="text-[10px] font-mono font-bold uppercase bg-[#F3F0FF] text-[#7048E8] px-2.5 py-0.5 rounded-full border border-[#845EF7]/30">
          NEXT.JS + LARAVEL 11
        </span>
      </div>

      {/* Main interactive portal */}
      <div className="p-6 bg-[#FCFAFC] space-y-5 min-h-[340px]">
        {/* Step indicator */}
        <div className="flex items-center justify-between border-b border-[#845EF7]/15 pb-3">
          <div className="flex items-center space-x-2">
            {[1, 2, 3].map((step) => (
              <button
                key={step}
                onClick={() => setActiveStep(step)}
                className={`w-7 h-7 rounded-xl text-xs font-mono font-bold flex items-center justify-center transition-all ${
                  activeStep === step
                    ? "bg-[#7048E8] text-white shadow-sm"
                    : activeStep > step
                    ? "bg-[#E6FCF5] text-[#0CA678] border border-[#20C997]/30"
                    : "bg-white text-[#867E91] border border-gray-200"
                }`}
              >
                {activeStep > step ? "✓" : step}
              </button>
            ))}
            <span className="text-xs font-mono text-[#5E5568] ml-2">
              {activeStep === 1 ? "Service Selection" : activeStep === 2 ? "Dossier Validation" : "Status Tracker"}
            </span>
          </div>

          <span className="text-[10px] font-mono text-[#867E91]">Role: Verified Citizen</span>
        </div>

        {/* Step 1 */}
        {activeStep === 1 && (
          <div className="space-y-4">
            <div className="text-xs font-mono text-[#5E5568]">Select civic municipal service to initiate:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-mono">
              {[
                "Building Permit Inquiry",
                "Public Lighting Maintenance",
                "Waste Management & Recycling Ticket",
                "Appointment with Urban Planning",
              ].map((svc) => (
                <button
                  key={svc}
                  onClick={() => setServiceType(svc)}
                  className={`p-3 rounded-2xl border text-left transition-all ${
                    serviceType === svc
                      ? "bg-[#F3F0FF] border-[#845EF7] text-[#5F3DC4] font-bold shadow-2xs"
                      : "bg-white border-[#845EF7]/15 text-[#494454] hover:border-[#845EF7]/40"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{svc}</span>
                    {serviceType === svc && <Check className="w-3.5 h-3.5 text-[#7048E8]" />}
                  </div>
                </button>
              ))}
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setActiveStep(2)}
                className="px-4 py-2 rounded-xl bg-[#7048E8] hover:bg-[#5F3DC4] text-white text-xs font-mono font-bold transition-all shadow-sm"
              >
                Continue to Verification →
              </button>
            </div>
          </div>
        )}

        {/* Step 2 */}
        {activeStep === 2 && (
          <div className="space-y-4 text-xs font-mono">
            <div className="p-4 rounded-2xl bg-white border border-[#845EF7]/20 space-y-2">
              <div className="flex justify-between text-[#867E91]">
                <span>Selected Service:</span>
                <span className="font-bold text-[#7048E8]">{serviceType}</span>
              </div>
              <div className="flex justify-between text-[#867E91]">
                <span>Citizen Reference ID:</span>
                <span className="text-[#1C1924]">CIT-88219-X (Sanitized)</span>
              </div>
              <div className="flex justify-between text-[#867E91]">
                <span>Estimated Triage Window:</span>
                <span className="text-[#20C997] font-semibold">24 - 48 Hours</span>
              </div>
            </div>

            <div className="flex justify-between pt-2">
              <button
                onClick={() => setActiveStep(1)}
                className="px-4 py-2 rounded-xl bg-white border border-gray-200 text-xs text-[#5E5568]"
              >
                ← Back
              </button>
              <button
                onClick={() => {
                  setIsSubmitted(true);
                  setActiveStep(3);
                }}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#7048E8] to-[#F06595] text-white text-xs font-bold shadow-sm"
              >
                Submit Request
              </button>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {activeStep === 3 && (
          <div className="space-y-4 text-center py-4">
            <div className="w-12 h-12 rounded-full bg-[#E6FCF5] text-[#0CA678] border border-[#20C997]/30 flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-bold text-[#1C1924]">Ticket Dispatched to Municipal Queue</h4>
              <p className="text-xs font-mono text-[#5E5568]">
                Request #MQ-2026-0941 logged. Assigned to triage department via role-based access control.
              </p>
            </div>
            <button
              onClick={() => {
                setActiveStep(1);
                setIsSubmitted(false);
              }}
              className="px-4 py-1.5 rounded-lg bg-white border border-[#845EF7]/20 text-xs font-mono text-[#7048E8]"
            >
              Start New Civic Submission
            </button>
          </div>
        )}
      </div>

      <div className="px-4 py-2.5 bg-[#FAF8FB] border-t border-[#845EF7]/15 text-xs font-mono text-[#5E5568] flex items-center justify-between">
        <span>Citizen Portal &amp; Ticket Wizard Interface</span>
        <span className="text-[10px] text-[#7048E8] font-bold">{"// ROLE-BASED ACCESS CONTROL"}</span>
      </div>
    </div>
  );
}
