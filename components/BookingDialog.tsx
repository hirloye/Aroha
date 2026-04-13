"use client";

import React, { useState, useRef } from "react";
import { submitBooking } from "@/app/actions/bookAppointment";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { Sparkles, X, Calendar, Clock } from "lucide-react";
import { CustomCalendar } from "@/components/ui/CustomCalendar";
import { CustomTimePicker } from "@/components/ui/CustomTimePicker";
import { AnimatePresence } from "framer-motion";

interface BookingDialogProps {
  children: React.ReactNode;
}

export function BookingDialog({ children }: BookingDialogProps) {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const formatDate = (date: Date | undefined) => {
    if (!date) return "Select Date";
    try {
      return new Intl.DateTimeFormat("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
      }).format(date);
    } catch (e) {
      return "Select Date";
    }
  };

  const formatTime = (timeStr: string) => {
    if (!timeStr) return "Select Time";
    try {
      const [hours, minutes] = timeStr.split(":");
      const date = new Date();
      date.setHours(parseInt(hours), parseInt(minutes));
      return new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }).format(date);
    } catch (e) {
      return timeStr;
    }
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const result = await submitBooking(formData);

    setIsLoading(false);

    if (result.success) {
      toast.success(`Booking Confirmed!`, {
        description: `Your appointment ID is ${result.appointmentId}. Check your email.`,
      });
      setOpen(false); // Close the dialog
    } else {
      toast.error("Failed to book", {
        description: result.error,
      });
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="sm:max-w-[425px] lg:max-w-[80%] lg:h-[90dvh] overflow-y-auto">
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 p-2 rounded-full shadow-neu-sm hover:shadow-neu-inset bg-background text-slate-500 hover:text-primaryBrand transition-all"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2 px-4 py-4">
            <div className="w-8 h-8 rounded-full shadow-neu flex items-center justify-center bg-background">
              <Sparkles className="w-4 h-4 text-primaryBrand" />
            </div>
            <DialogTitle className="text-2xl text-primaryBrand">Book Appointment</DialogTitle>
          </div>
          <DialogDescription className="px-4">
            Fill out your details to begin your healing journey. We'll send a confirmation to your email.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="grid gap-6 py-4 px-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" name="name" placeholder="John Doe" required />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" name="email" type="email" placeholder="john@example.com" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Contact Number</Label>
              <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 123-4567" required />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2 relative">
              <Label>Date</Label>
              <input 
                type="hidden" 
                name="date" 
                value={selectedDate ? selectedDate.toISOString().split('T')[0] : ""} 
                required 
              />
              <div 
                onClick={() => {
                  setShowCalendar(!showCalendar);
                  setShowTimePicker(false);
                }}
                className="relative flex items-center h-12 w-full rounded-xl bg-background shadow-neu-inset px-4 group hover:shadow-neu-sm transition-all duration-300 cursor-pointer"
              >
                <span className="flex-1 text-sm font-medium text-slate-700">
                  {formatDate(selectedDate)}
                </span>
                <div className="p-1.5 rounded-lg shadow-neu-sm group-hover:shadow-neu-inset bg-background text-primaryBrand/70 transition-all">
                  <Calendar className="w-5 h-5" />
                </div>
              </div>
              <AnimatePresence>
                {showCalendar && (
                  <>
                    <div 
                      className="fixed inset-0 z-40" 
                      onClick={() => setShowCalendar(false)} 
                    />
                    <CustomCalendar
                      selectedDate={selectedDate}
                      onSelect={setSelectedDate}
                      onClose={() => setShowCalendar(false)}
                    />
                  </>
                )}
              </AnimatePresence>
            </div>

            <div className="grid gap-2 relative">
              <Label>Time</Label>
              <input 
                type="hidden" 
                name="time" 
                value={selectedTime} 
                required 
              />
              <div 
                onClick={() => {
                  setShowTimePicker(!showTimePicker);
                  setShowCalendar(false);
                }}
                className="relative flex items-center h-12 w-full rounded-xl bg-background shadow-neu-inset px-4 group hover:shadow-neu-sm transition-all duration-300 cursor-pointer"
              >
                <span className="flex-1 text-sm font-medium text-slate-700">
                  {formatTime(selectedTime)}
                </span>
                <div className="p-1.5 rounded-lg shadow-neu-sm group-hover:shadow-neu-inset bg-background text-secondaryBrand/70 transition-all">
                  <Clock className="w-5 h-5" />
                </div>
              </div>
              <AnimatePresence>
                {showTimePicker && (
                  <>
                    <div 
                      className="fixed inset-0 z-40" 
                      onClick={() => setShowTimePicker(false)} 
                    />
                    <CustomTimePicker
                      selectedTime={selectedTime}
                      onSelect={setSelectedTime}
                      onClose={() => setShowTimePicker(false)}
                    />
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full mt-4 shadow-neu hover:shadow-neu-inset bg-background text-secondaryBrand hover:bg-background rounded-xl px-6 py-3 text-lg font-bold border-none transition-shadow duration-300"
          >
            {isLoading ? "Confirming..." : "Confirm Booking"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
