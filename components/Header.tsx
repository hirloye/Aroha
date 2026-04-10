"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingDialog } from "@/components/BookingDialog";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "FAQ", href: "/#faq" },
  ];

  // Close menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white/60 backdrop-blur-md border-b border-white/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 cursor-pointer transition-transform hover:scale-[1.02]">
            <div className="w-14 h-14 rounded-full shadow-neu-sm flex items-center justify-center bg-background p-1 overflow-hidden">
              <img src="/logo.png" alt="Aroha Wellness Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primaryBrand to-secondaryBrand leading-none">
                Aroha Wellness
              </span>
              <span className="text-xs text-slate-500 font-medium tracking-wide mt-0.5">
                Acupuncture and Holistic Healing
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-primaryBrand transition-colors font-medium hover:drop-shadow-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right side CTA */}
          <div className="hidden md:flex">
            <BookingDialog>
              <Button className="shadow-neu hover:shadow-neu-inset transition-shadow duration-300 bg-background text-secondaryBrand hover:bg-background border-none rounded-full px-6 py-3 font-semibold">
                Book Session
              </Button>
            </BookingDialog>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              className="shadow-neu-sm rounded-xl text-primaryBrand"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white/90 backdrop-blur-lg border-b border-white/20 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-8 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 text-lg font-medium text-slate-600 hover:text-primaryBrand hover:bg-slate-50/50 rounded-xl transition-all"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-2">
                <BookingDialog>
                  <Button 
                    className="w-full shadow-neu hover:shadow-neu-inset transition-all duration-300 bg-background text-secondaryBrand hover:bg-background border-none rounded-full py-7 text-lg font-bold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Book Session
                  </Button>
                </BookingDialog>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
