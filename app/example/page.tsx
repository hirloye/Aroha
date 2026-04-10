"use client";

import React from "react";
import { AntigravityWrapper } from "@/components/ui/AntigravityWrapper";
import { Sparkles } from "lucide-react";

export default function ExamplePage() {
  return (
    // The background is set to the specific soft off-white to make the shadows visible
    <div className="min-h-screen bg-[#F0F4F8] flex items-center justify-center p-6">
      
      {/* 
        Using the Reusable Wrapper Component 
        It expects the background of the parent to match its internal Neumorphic colors.
      */}
      <AntigravityWrapper className="w-full max-w-sm" duration={5}>
        <div className="p-8 text-center flex flex-col items-center">
          
          {/* Inner Neumorphic Icon Container */}
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-[#F0F4F8] shadow-[inset_4px_4px_8px_#c8ccd0,inset_-4px_-4px_8px_#ffffff]">
            <Sparkles className="w-8 h-8 text-teal-600" />
          </div>

          <h3 className="text-2xl font-bold text-slate-800 mb-3">
            Acupuncture Service
          </h3>
          
          <p className="text-slate-600 mb-8 leading-relaxed">
            Experience deep holistic healing. Let our ancient techniques restore balance to your body and mind while you drift away.
          </p>
          
          {/* A simple button demonstrating typical nested interactive elements */}
          <button className="px-6 py-3 rounded-xl font-semibold text-slate-700 bg-[#F0F4F8] transition-all duration-300 shadow-[5px_5px_10px_#c8ccd0,-5px_-5px_10px_#ffffff] hover:shadow-[inset_4px_4px_8px_#c8ccd0,inset_-4px_-4px_8px_#ffffff] hover:text-teal-600">
            Book Session
          </button>
        </div>
      </AntigravityWrapper>

    </div>
  );
}
