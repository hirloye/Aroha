"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Droplets, CheckCircle2, Activity, Brain, ShieldCheck, Feather, Wind, Leaf, Flower2 } from "lucide-react";
import { BookingDialog } from "@/components/BookingDialog";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const acupunctureSteps = [
    { title: "Initial Consultation", desc: "We begin by understanding your health history, current symptoms, and ultimate wellness goals." },
    { title: "Pulse Diagnosis", desc: "A traditional method of feeling the pulse to determine the balance of energy (Qi) in your body." },
    { title: "The Treatment", desc: "Hair-thin, sterile needles are gently placed at specific acupoints to unblock energy pathways." },
    { title: "Rest & Integration", desc: "You rest in a deeply relaxed state for 20-30 minutes while the treatment restores alignment." },
  ];

  const cuppingSteps = [
    { title: "Assessment", desc: "We identify areas of physical tension, stagnation, or restricted blood flow." },
    { title: "Application of Cups", desc: "Specialized glass or silicone cups are placed on the skin, creating a gentle vacuum seal." },
    { title: "Rest Period", desc: "The negative pressure decompresses tissues, drawing out toxins and promoting deep healing." },
    { title: "Post-Care Advice", desc: "We remove the cups and guide you on hydration and warmth to flush the toxins successfully." },
  ];

  const flowerMedicineSteps = [
    { title: "Emotional Assessment", desc: "We evaluate your emotional state, identifying stress, anxiety, or emotional blocks." },
    { title: "Custom Blending", desc: "A personalized remedy is formulated using specific floral essences to target your exact needs." },
    { title: "Daily Administration", desc: "You take the natural drops daily under the tongue to gently shift your vibrational state." },
    { title: "Progress Review", desc: "We review your emotional shifts after a few weeks and adjust the healing blend if necessary." },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      {/* Page Header */}
      <motion.div
        initial="hidden" animate="visible" variants={fadeInUp}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-extrabold text-slate-800 mb-6 tracking-tight">Our Healing Modalities</h1>
        <div className="h-1 w-20 bg-gradient-to-r from-primaryBrand to-secondaryBrand mx-auto rounded-full shadow-neu-sm mb-6"></div>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Discover ancient practices refined for modern tranquility. We focus on treating the root cause, not just the symptoms.
        </p>
      </motion.div>

      {/* Traditional Acupuncture */}
      <motion.section
        initial="hidden" animate="visible" variants={fadeInUp}
        className="mb-12"
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-full shadow-neu-sm flex items-center justify-center bg-white p-1">
            <Sparkles className="w-8 h-8 text-primaryBrand" />
          </div>
          <h2 className="text-4xl font-bold text-slate-800">Traditional Acupuncture</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-slate-700">What is it?</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              Traditional Acupuncture is a cornerstone of ancient holistic medicine. By utilizing highly specialized, painless needles along the body's energy meridians, we stimulate the central nervous system. This releases chemicals into the muscles, spinal cord, and brain, promoting natural healing abilities and promoting physical and emotional well-being.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              It is exceptionally effective for chronic pain, stress, migraines, and systemic imbalances.
            </p>
            <ul className="space-y-3 mt-6">
              <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 className="text-primaryBrand w-5 h-5" /> Natural pain relief</li>
              <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 className="text-primaryBrand w-5 h-5" /> Hormonal balance</li>
              <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 className="text-primaryBrand w-5 h-5" /> Deep stress reduction</li>
            </ul>
          </div>

          <div className="bg-white/40 backdrop-blur-md rounded-[2.5rem] p-10 shadow-neu">
            <h3 className="text-2xl font-semibold text-slate-800 mb-8">The Process</h3>
            <div className="space-y-8">
              {acupunctureSteps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-primaryBrand/10 flex items-center justify-center text-primaryBrand font-bold z-10 shadow-neu-sm">
                      {index + 1}
                    </div>
                    {index !== acupunctureSteps.length - 1 && (
                      <div className="w-0.5 h-full bg-gradient-to-b from-primaryBrand/30 to-transparent mt-2"></div>
                    )}
                  </div>
                  <div className="pb-4">
                    <h4 className="text-xl font-bold text-slate-800 mb-2">{step.title}</h4>
                    <p className="text-slate-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Cupping Therapy */}
      <motion.section
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
        className="mb-12"
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-full shadow-neu-sm flex items-center justify-center bg-white p-1">
            <Droplets className="w-8 h-8 text-secondaryBrand" />
          </div>
          <h2 className="text-4xl font-bold text-slate-800">Cupping Therapy</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">

          <div className="bg-white/40 backdrop-blur-md rounded-[2.5rem] p-10 shadow-neu order-2 md:order-1">
            <h3 className="text-2xl font-semibold text-slate-800 mb-8">The Process</h3>
            <div className="space-y-8">
              {cuppingSteps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-secondaryBrand/10 flex items-center justify-center text-secondaryBrand font-bold z-10 shadow-neu-sm">
                      {index + 1}
                    </div>
                    {index !== cuppingSteps.length - 1 && (
                      <div className="w-0.5 h-full bg-gradient-to-b from-secondaryBrand/30 to-transparent mt-2"></div>
                    )}
                  </div>
                  <div className="pb-4">
                    <h4 className="text-xl font-bold text-slate-800 mb-2">{step.title}</h4>
                    <p className="text-slate-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 order-1 md:order-2">
            <h3 className="text-2xl font-semibold text-slate-700">What is it?</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              Cupping therapy is an ancient form of alternative medicine in which a local suction is created on the skin. This suction decompresses muscles and connective tissue (fascia), functioning like a deep-tissue, reverse massage.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              It rapidly facilitates blood flow, draws out cellular inflammation, and relieves extreme muscular tension associated with injuries or chronic stress.
            </p>
            <ul className="space-y-3 mt-6">
              <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 className="text-green-500 w-5 h-5" /> Deep fascial release</li>
              <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 className="text-green-500 w-5 h-5" /> Cellular detox</li>
              <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 className="text-green-500 w-5 h-5" /> Nervous system reset</li>
            </ul>
          </div>

        </div>
      </motion.section>

      {/* Flower Medicine */}
      <motion.section
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
        className="mb-20"
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-full shadow-neu-sm flex items-center justify-center bg-white p-1">
            <Flower2 className="w-8 h-8 text-pink-500" />
          </div>
          <h2 className="text-4xl font-bold text-slate-800">Flower Medicine</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-slate-700">What is it?</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              Flower Medicine, or floral essences, is a gentle, energetic healing modality that uses the vibrational frequencies of flowers to address emotional and psychological imbalances. Rather than treating physical symptoms directly, it targets the emotional root causes of illness.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              It is highly effective for managing stress, severe anxiety, grief, and emotional exhaustion safely and without any side effects.
            </p>
            <ul className="space-y-3 mt-6">
              <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 className="text-pink-500 w-5 h-5" /> Emotional balancing</li>
              <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 className="text-pink-500 w-5 h-5" /> Nervous system support</li>
              <li className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 className="text-pink-500 w-5 h-5" /> Completely natural & safe</li>
            </ul>
          </div>

          <div className="bg-white/40 backdrop-blur-md rounded-[2.5rem] p-10 shadow-neu">
            <h3 className="text-2xl font-semibold text-slate-800 mb-8">The Process</h3>
            <div className="space-y-8">
              {flowerMedicineSteps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-500 font-bold z-10 shadow-neu-sm">
                      {index + 1}
                    </div>
                    {index !== flowerMedicineSteps.length - 1 && (
                      <div className="w-0.5 h-full bg-gradient-to-b from-pink-500/30 to-transparent mt-2"></div>
                    )}
                  </div>
                  <div className="pb-4">
                    <h4 className="text-xl font-bold text-slate-800 mb-2">{step.title}</h4>
                    <p className="text-slate-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </motion.section>

      {/* SECTION 1: The Healing Journey */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-20 mt-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Your Path to Balance</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primaryBrand to-secondaryBrand mx-auto rounded-full shadow-neu-sm"></div>
        </div>

        <div className="relative max-w-4xl mx-auto hidden md:block">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 border-t-2 border-dashed border-primaryBrand/40 -z-10 -translate-y-1/2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {[
            { step: 1, title: "Consultation", desc: "Understanding your unique pain markers and underlying stress triggers.", icon: Sparkles },
            { step: 2, title: "Targeted Therapy", desc: "Precision Acupuncture or Cupping designed to unblock energy.", icon: Activity },
            { step: 3, title: "Restoration", desc: "Leaving with a calm, reset mind and a significantly pain-free body.", icon: Leaf },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: idx * 0.5, ease: "easeInOut" }}
                className="flex flex-col items-center text-center relative"
              >
                <div className="w-24 h-24 rounded-full shadow-neu bg-background flex items-center justify-center mb-6">
                  <Icon className="w-10 h-10 text-primaryBrand" />
                </div>
                <div className="w-8 h-8 rounded-full bg-primaryBrand text-white flex items-center justify-center font-bold absolute top-0 right-1/2 translate-x-12 -translate-y-2 shadow-neu-sm">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">{item.title}</h3>
                <p className="text-slate-600 px-4">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </motion.section>

      {/* SECTION 2: Conditions We Treat */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">What Brings You Here Today?</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primaryBrand to-secondaryBrand mx-auto rounded-full shadow-neu-sm"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <motion.div whileHover={{ y: -5 }} className="rounded-[2rem] p-10 shadow-[8px_8px_16px_var(--shadow-dark),-8px_-8px_16px_var(--shadow-light)] bg-background">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-full shadow-neu-inset flex items-center justify-center bg-background text-primaryBrand">
                <Activity className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Physical Pain</h3>
            </div>
            <ul className="space-y-4">
              {["Back & Neck Pain", "Migraines & Headaches", "Joint Stiffness", "Chronic Muscle Tension"].map((pain, idx) => (
                <li key={idx} className="p-4 rounded-xl shadow-neu-inset bg-background/50 flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-primaryBrand/70" /> {pain}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="rounded-[2rem] p-10 shadow-[8px_8px_16px_var(--shadow-dark),-8px_-8px_16px_var(--shadow-light)] bg-background">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-full shadow-neu-inset flex items-center justify-center bg-background text-secondaryBrand">
                <Brain className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Mental & Emotional</h3>
            </div>
            <ul className="space-y-4">
              {["Severe Anxiety", "Chronic Stress", "Insomnia & Sleep Issues", "Burnout & Fatigue"].map((mind, idx) => (
                <li key={idx} className="p-4 rounded-xl shadow-neu-inset bg-background/50 flex items-center gap-3 text-slate-700 font-medium">
                  <Sparkles className="w-5 h-5 text-secondaryBrand/70" /> {mind}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* SECTION 3: The Aroha Difference */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-12 border-t border-slate-200/50 dark:border-white/5 pt-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Safe. Serene. Holistic.</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primaryBrand to-secondaryBrand mx-auto rounded-full shadow-neu-sm"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "100% Sterile & Safe", desc: "Single-use needles and strict protocols.", icon: ShieldCheck },
            { title: "Gentle Techniques", desc: "Focusing heavily on patient comfort.", icon: Feather },
            { title: "Calming Environment", desc: "Designed for ultimate deep relaxation.", icon: Wind },
          ].map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={idx}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: idx * 1.5, ease: "easeInOut" }}
                className="flex items-center gap-4 p-6 rounded-3xl shadow-neu bg-background"
              >
                <div className="w-12 h-12 rounded-full shadow-neu-inset flex items-center justify-center bg-background text-secondaryBrand shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-[#5E2B8A] dark:text-[#a96bed] font-bold text-lg leading-tight mb-1">{badge.title}</h4>
                  <p className="text-slate-600 text-sm">{badge.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.section>

    </div>
  );
}
