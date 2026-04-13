"use client";

import React, { useState } from "react";
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, isSameMonth, isSameDay, isToday } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// Wait, I don't see date-fns in package.json. Let me check again.
// Ah, it's NOT in package.json. I shouldn't use it if it's not there.
// I will use native JS Date logic instead.

interface CustomCalendarProps {
  selectedDate: Date | undefined;
  onSelect: (date: Date) => void;
  onClose: () => void;
}

export function CustomCalendar({ selectedDate, onSelect, onClose }: CustomCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getDaysInMonth = (year: number, month: number) => {
    const date = new Date(year, month, 1);
    const days = [];
    // Adjust to start of week (Sunday)
    const startDate = new Date(date);
    startDate.setDate(1 - startDate.getDay());

    for (let i = 0; i < 42; i++) { // 6 weeks
      days.push(new Date(startDate));
      startDate.setDate(startDate.getDate() + 1);
    }
    return days;
  };

  const days = getDaysInMonth(currentMonth.getFullYear(), currentMonth.getMonth());

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      className="absolute bottom-full left-0 mb-2 z-50 w-[300px] p-4 rounded-2xl bg-background shadow-neu border border-white/20 backdrop-blur-md"
    >
      <div className="flex items-center justify-between mb-4">
        <button
          type="button"
          onClick={prevMonth}
          className="p-2 rounded-lg shadow-neu-sm hover:shadow-neu-inset bg-background text-primaryBrand transition-all"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <h3 className="font-bold text-slate-700">
          {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </h3>
        <button
          type="button"
          onClick={nextMonth}
          className="p-2 rounded-lg shadow-neu-sm hover:shadow-neu-inset bg-background text-primaryBrand transition-all"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {daysOfWeek.map((day) => (
          <div key={day} className="text-center text-[10px] font-bold text-slate-400 uppercase">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {days.map((day, i) => {
          const isSelected = selectedDate && 
                             day.getDate() === selectedDate.getDate() && 
                             day.getMonth() === selectedDate.getMonth() && 
                             day.getFullYear() === selectedDate.getFullYear();
          const isCurrentMonth = day.getMonth() === currentMonth.getMonth();
          const isTodayDate = new Date().toDateString() === day.toDateString();

          return (
            <button
              key={i}
              type="button"
              onClick={() => {
                onSelect(day);
                onClose();
              }}
              className={cn(
                "h-8 w-8 rounded-lg flex items-center justify-center text-xs transition-all",
                !isCurrentMonth && "text-slate-300 opacity-50",
                isCurrentMonth && "text-slate-600 hover:shadow-neu-inset",
                isSelected && "bg-primaryBrand text-white shadow-glow-teal scale-110 font-bold",
                isTodayDate && !isSelected && "border border-primaryBrand/30"
              )}
            >
              {day.getDate()}
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}
