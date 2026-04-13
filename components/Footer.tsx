"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle, Instagram, Facebook, Twitter, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="mt-12 pt-24 pb-12 rounded-t-[4rem] shadow-[0_-10px_20px_rgba(200,208,231,0.5)] bg-white/30 backdrop-blur-sm border-t border-white/50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8">Ready to start your healing journey?</h2>
          <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer">
            <Button className="shadow-neu hover:shadow-neu-inset transition-all duration-300 bg-background text-[#25D366] rounded-full px-8 py-4 text-xl font-bold border-none hover:bg-background flex items-center gap-3 mx-auto">
              <MessageCircle className="w-6 h-6" />
              Chat Now
            </Button>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[8fr_3fr_3fr_6fr] gap-8 text-center border-t border-slate-300 pt-8 max-w-7xl mx-auto px-4 md:px-0">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <img src="/logo.png" alt="Aroha Wellness Logo" className="w-20 h-20 rounded-full object-contain shadow-neu-sm p-0.5 bg-background" />
              <span className="text-2xl font-bold text-slate-800">Aroha Wellness</span>
            </div>
            <p className="text-slate-500 mb-6 max-w-xs mx-auto">Elevating holistic health through traditional wisdom and modern tranquility.</p>
            <div className="flex justify-center gap-4">
              <a href="https://www.instagram.com/iyalhealthcare" target="_blank" rel="noopener noreferrer" className="shrink-0 flex items-center gap-3 px-8 py-4 rounded-full shadow-neu bg-background text-slate-700 font-bold hover:text-[#5E2B8A] hover:shadow-neu-inset transition-all duration-300 group outline-none">
                <Instagram className="w-6 h-6 text-[#E1306C]" />
                @arohawellness
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start space-y-4 text-slate-600 text-left">
            <h3 className="font-bold text-slate-800 mb-2">Contact Us</h3>
            <a href="#" className="flex items-center gap-3 hover:text-primaryBrand transition-colors"><Phone className="w-4 h-4 shrink-0" /> 08015678782</a>
            <a href="#" className="flex items-center gap-3 hover:text-primaryBrand transition-colors"><Mail className="w-4 h-4 shrink-0" /> hello@arohawellness.com</a>
            <p className="flex items-start gap-3"><MapPin className="w-4 h-4 mt-1 shrink-0" /> <span>Foxen St, Jagannathan Colony, Perambur, Chennai, Tamil Nadu 600011</span></p>
          </div>

          <div className="flex flex-col items-start space-y-4 text-slate-600 text-left">
            <h3 className="font-bold text-slate-800 mb-2">Quick Links</h3>
            <Link href="/services" className="hover:text-primaryBrand transition-colors">Services</Link>
            <Link href="/gallery" className="hover:text-primaryBrand transition-colors">Our Clinic</Link>
            <Link href="/#faq" className="hover:text-primaryBrand transition-colors">FAQ</Link>
            <Link href="/privacy" className="hover:text-primaryBrand transition-colors">Privacy Policy</Link>
          </div>

          <div className="flex flex-col items-start space-y-4 text-slate-600 text-left w-full">
            <h3 className="font-bold text-slate-800 mb-2">Find Us</h3>
            <div className="w-full h-40 rounded-2xl shadow-neu-inset bg-background p-2">
              <iframe
                src="https://maps.google.com/maps?q=Iyal+Healthcare,+Foxen+St,+Jagannathan+Colony,+Perambur,+Chennai,+Tamil+Nadu+600011&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '0.75rem' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="mt-16 text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} Aroha Wellness Clinic. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
