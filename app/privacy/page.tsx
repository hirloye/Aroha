"use client";

import React from 'react';
import { Shield, Lock, Eye, FileText } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-transparent relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primaryBrand/10 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondaryBrand/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-6 pt-12 pb-24 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl shadow-neu bg-background mb-6">
            <Shield className="w-8 h-8 text-primaryBrand" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 tracking-tight">
            Privacy Policy
          </h1>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primaryBrand to-secondaryBrand mx-auto rounded-full shadow-neu-sm mb-8"></div>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Your trust is our foundation. Learn how we protect and handle your personal information at Aroha Wellness Clinic.
          </p>
        </div>

        <div className="space-y-12 pb-12">
          {/* Section 1 */}
          <div className="p-8 md:p-12 rounded-[2.5rem] bg-white/40 backdrop-blur-md shadow-neu border border-white/60">
            <div className="flex items-center gap-5 mb-8">
              <div className="p-4 rounded-2xl shadow-neu-sm bg-background text-secondaryBrand">
                <Eye className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800">Information We Collect</h2>
            </div>
            <div className="p-8 rounded-3xl shadow-neu-inset bg-background/50 text-slate-600 space-y-6 text-base">
              <p>We collect information that helps us provide a personalized healing experience, including:</p>
              <ul className="space-y-4 list-none">
                {["Personal identifiers (Name, Email, Phone number).", 
                  "Appointment details and scheduling preferences.", 
                  "Health-related information you choose to share to help us prepare for your session."
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primaryBrand shadow-glow-teal" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 2 */}
          <div className="p-8 md:p-12 rounded-[2.5rem] bg-white/40 backdrop-blur-md shadow-neu border border-white/60">
            <div className="flex items-center gap-5 mb-8">
              <div className="p-4 rounded-2xl shadow-neu-sm bg-background text-primaryBrand">
                <Lock className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800">How We Use Your Data</h2>
            </div>
            <div className="p-8 rounded-3xl shadow-neu-inset bg-background/50 text-slate-600 space-y-6 text-base">
              <p>Your data is used strictly for clinic operations and your direct care:</p>
              <ul className="space-y-4 list-none">
                {["To confirm and manage your appointments securely.", 
                  "To communicate session reminders and follow-up care instructions.", 
                  "To refine our wellness services and website performance."
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondaryBrand shadow-glow-purple" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div className="p-8 md:p-12 rounded-[2.5rem] bg-white/40 backdrop-blur-md shadow-neu border border-white/60">
            <div className="flex items-center gap-5 mb-8">
              <div className="p-4 rounded-2xl shadow-neu-sm bg-background text-secondaryBrand">
                <FileText className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800">Your Rights</h2>
            </div>
            <div className="p-8 rounded-3xl shadow-neu-inset bg-background/50 text-slate-600 space-y-6 text-base">
              <p>You have full control over your personal information at all times:</p>
              <ul className="space-y-4 list-none">
                {["Request a clear copy of the personal data we hold about you.", 
                  "Ask us to correct or permanently delete your records.", 
                  "Opt-out of any clinic-wide communications or newsletters."
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primaryBrand" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
