"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CustomTimePickerProps {
  selectedTime: string;
  onSelect: (time: string) => void;
  onClose: () => void;
}

export function CustomTimePicker({ selectedTime, onSelect, onClose }: CustomTimePickerProps) {
  const times = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
    "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"
  ];

  const formatTimeDisplay = (timeStr: string) => {
    const [hours, minutes] = timeStr.split(":");
    const h = parseInt(hours);
    const ampm = h >= 12 ? "PM" : "AM";
    const displayHours = h % 12 || 12;
    return `${displayHours}:${minutes} ${ampm}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      className="absolute bottom-full left-0 mb-2 z-50 w-[280px] p-4 rounded-2xl bg-background shadow-neu border border-white/20 backdrop-blur-md"
    >
      <h3 className="font-bold text-slate-700 mb-4 text-center">Select Time</h3>
      <div className="grid grid-cols-3 gap-2 max-h-[250px] overflow-y-auto pr-2 custom-scrollbar">
        {times.map((time) => {
          const isSelected = selectedTime === time;
          return (
            <button
              key={time}
              type="button"
              onClick={() => {
                onSelect(time);
                onClose();
              }}
              className={cn(
                "py-2 px-1 rounded-xl text-[11px] font-medium transition-all text-center",
                "bg-background shadow-neu-sm hover:shadow-neu-inset text-slate-600",
                isSelected && "bg-secondaryBrand text-white shadow-glow-purple scale-105 font-bold"
              )}
            >
              {formatTimeDisplay(time)}
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}
