"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Droplets,
  Wind,
  Activity,
  ArrowRight,
  Menu,
  Phone,
  Mail,
  MapPin,
  Flower2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookingDialog } from "@/components/BookingDialog";

export default function ArohaWellnessPage() {
  // Animation variants defined for reusability
  const floatAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.2 } },
              }}
              className="space-y-8"
            >
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-slate-800">
                Restore Balance. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryBrand to-secondaryBrand">
                  Awaken Your Healing.
                </span>
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg text-slate-600 max-w-lg leading-relaxed">
                Experience holistic wellness and expert acupuncture in a serene, antigravity environment designed to center your mind and heal your body.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-4">
                <BookingDialog>
                  <Button className="shadow-neu hover:shadow-neu-inset hover:text-primaryBrand transition-all duration-300 bg-background text-primaryBrand border-none rounded-2xl px-6 py-4 text-lg font-semibold group flex items-center gap-2">
                    <span className="group-hover:glow-teal">Book Your Appointment</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </BookingDialog>
                <Link href="/services">
                  <Button variant="outline" className="shadow-neu-sm hover:shadow-neu-inset transition-all duration-300 bg-transparent border-transparent text-slate-600 rounded-2xl px-6 py-4 text-lg font-medium w-full">
                    Explore Services
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Content - Antigravity Visual */}
            <motion.div
              className="relative hidden md:flex justify-center items-center h-[500px]"
              animate={floatAnimation}
            >
              {/* Central floating container */}
              <div className="relative w-80 h-80 rounded-full shadow-neu flex items-center justify-center bg-background border border-white/40">
                {/* Simulated Chakra figure placeholder */}
                <div className="absolute inset-0 rounded-full shadow-[inset_10px_10px_20px_#c8d0e7,inset_-10px_-10px_20px_#ffffff] m-6 flex flex-col items-center justify-center gap-4">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-primaryBrand/20 to-secondaryBrand/20 shadow-glow-chakra blur-md"
                  />
                  <Sparkles className="w-12 h-12 text-primaryBrand/50 absolute" />
                </div>

                {/* Orbiting UI Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-primaryBrand/10 border-dashed"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full shadow-neu flex items-center justify-center bg-background">
                    <Wind className="w-5 h-5 text-secondaryBrand" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4 tracking-tight">Pathways to Wellness</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primaryBrand to-secondaryBrand mx-auto rounded-full shadow-neu-sm"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Traditional Acupuncture", icon: Sparkles, color: "text-primaryBrand", desc: "Balance your body's energy flow through precise, ancient techniques." },
              { title: "Cupping Therapy", icon: Droplets, color: "text-secondaryBrand", desc: "Release muscle tension and improve circulation deeply." },
              { title: "Flower Medicine", icon: Flower2, color: "text-pink-500", desc: "Restore emotional balance with custom-blended floral healing." },
              { title: "Chronic Pain Relief", icon: Activity, color: "text-rose-500", desc: "Find lasting comfort and mobility through holistic healing." },
            ].map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="h-full"
                >
                  <Card className="h-full bg-background border-none shadow-neu hover:shadow-neu-hover hover:ring-1 hover:ring-primaryBrand/20 transition-all duration-300 rounded-3xl overflow-hidden group">
                    <CardHeader className="pt-8 items-center text-center">
                      <div className="w-16 h-16 rounded-2xl shadow-neu-inset flex items-center justify-center mb-4 bg-background group-hover:shadow-[inset_4px_4px_8px_#c8d0e7,inset_-4px_-4px_8px_#ffffff,0_0_15px_rgba(30,144,150,0.3)] transition-shadow">
                        <Icon className={`w-8 h-8 ${service.color}`} />
                      </div>
                      <CardTitle className="text-xl font-bold text-slate-800">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center px-6 pb-8">
                      <CardDescription className="text-base text-slate-600">{service.desc}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4 tracking-tight">Inside Aroha Wellness</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primaryBrand to-secondaryBrand mx-auto rounded-full shadow-neu-sm mb-4"></div>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">A sanctuary crafted for your peace of mind.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Masonry-style Image Grid Preview */}
            <motion.div animate={floatAnimation} className="space-y-6">
              <div className="w-full h-64 rounded-3xl shadow-neu bg-background overflow-hidden border-4 border-white/50 group">
                <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop" alt="Treatment Room" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="w-full h-80 rounded-3xl shadow-neu bg-background overflow-hidden border-4 border-white/50 group">
                <img src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2070&auto=format&fit=crop" alt="Reception Area" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              </div>
            </motion.div>
            <motion.div animate={{ ...floatAnimation, transition: { ...floatAnimation.transition, delay: 1 } }} className="space-y-6 md:pt-12">
              <div className="w-full h-80 rounded-3xl shadow-neu bg-background overflow-hidden border-4 border-white/50 group">
                <img src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop" alt="Meditation Space" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="w-full h-64 rounded-3xl shadow-neu bg-background overflow-hidden border-4 border-white/50 group">
                <img src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1974&auto=format&fit=crop" alt="Herbal Pharmacy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              </div>
            </motion.div>
            <motion.div animate={{ ...floatAnimation, transition: { ...floatAnimation.transition, delay: 2 } }} className="space-y-6">
              <div className="w-full h-64 rounded-3xl shadow-neu bg-background overflow-hidden border-4 border-white/50 group">
                <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop" alt="Consultation Office" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="w-full h-80 rounded-3xl shadow-neu bg-background overflow-hidden border-4 border-white/50 group">
                <img src="/images/gallery/reception-1.png" alt="Relaxation Lounge" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4 tracking-tight">Stories of Healing</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primaryBrand to-secondaryBrand mx-auto rounded-full shadow-neu-sm"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "Aroha transformed my chronic back pain. I've never felt more weightless and aligned.", name: "Sarah J." },
              { quote: "The cupping therapy sessions are pure magic. My anxiety melts away the moment I walk in.", name: "Michael T." },
              { quote: "Finally, a clinic that treats the whole person. The ambiance alone is healing.", name: "Elena R." },
            ].map((testimony, idx) => (
              <div key={idx} className="p-8 rounded-[2rem] shadow-neu-inset bg-background flex flex-col justify-between">
                <div>
                  <svg className="w-8 h-8 text-secondaryBrand/40 mb-4" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                  <p className="text-slate-700 text-lg italic leading-relaxed mb-6 font-medium">"{testimony.quote}"</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full shadow-neu flex items-center justify-center bg-background text-primaryBrand font-bold">
                    {testimony.name.charAt(0)}
                  </div>
                  <span className="font-semibold text-secondaryBrand">{testimony.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4 tracking-tight">Common Questions</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primaryBrand to-secondaryBrand mx-auto rounded-full shadow-neu-sm"></div>
          </div>

          <Accordion type="single" collapsible className="space-y-6">
            {[
              { q: "Does acupuncture hurt?", a: "Not at all. The needles we use are hair-thin and designed for maximum comfort. Most patients feel a deep sense of relaxation or a dull ache that signifies energy movement." },
              { q: "How many sessions will I need?", a: "It varies per individual and condition. Acute issues may resolve in 2-4 sessions, while chronic conditions might take a longer, customized approach. We will discuss a personalized plan during your first visit." },
              { q: "Do the cupping marks last forever?", a: "No, the marks are completely temporary. They represent stagnant energy and toxins being brought to the surface. Usually, they fade within 3 to 7 days." },
              { q: "What should I wear to my appointment?", a: "Please wear loose, comfortable clothing so we can easily access common acupuncture points on the arms and legs." },
            ].map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-none rounded-2xl shadow-neu bg-background overflow-hidden px-2">
                <AccordionTrigger className="hover:no-underline px-6 py-5 text-left text-lg font-semibold text-slate-700 hover:text-primaryBrand transition-colors data-[state=open]:text-primaryBrand">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 pt-0 text-slate-600 text-base leading-relaxed bg-background/50 shadow-neu-inset rounded-xl mx-2 mb-4">
                  <div className="pt-4">{faq.a}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

    </>
  );
}
