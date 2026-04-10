"use client";

import React, { useState } from "react";
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
import { Sparkles, X } from "lucide-react";

interface BookingDialogProps {
  children: React.ReactNode;
}

export function BookingDialog({ children }: BookingDialogProps) {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
            <div className="grid gap-2">
              <Label htmlFor="date">Date</Label>
              <Input id="date" name="date" type="date" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="time">Time</Label>
              <Input id="time" name="time" type="time" required />
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
