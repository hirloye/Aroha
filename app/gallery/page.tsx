"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, ArrowRight, Quote, Leaf, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";

const categories = ["All", "Reception", "Treatment Rooms", "Healing Tools", "Flower Medicine"];

const galleryImages = [
  { id: 1, src: "/images/gallery/treatment-room-1.png", category: "Treatment Rooms", alt: "Serene treatment bed with soft lighting" },
  { id: 2, src: "/images/gallery/reception-1.png", category: "Reception", alt: "Modern, calm reception and waiting area" },
  { id: 3, src: "/images/gallery/acupuncture-1.png", category: "Healing Tools", alt: "Traditional acupuncture treatment" },
  { id: 4, src: "/images/gallery/treatment-room-2.png", category: "Treatment Rooms", alt: "Private soothing treatment room" },
  { id: 5, src: "/images/gallery/traditional-acupuncture-1.png", category: "Healing Tools", alt: "Traditional acupuncture precision" },
  { id: 6, src: "/images/gallery/cupping-1.png", category: "Healing Tools", alt: "Cupping therapy on upper back" },
  { id: 7, src: "/images/gallery/cupping-2.png", category: "Healing Tools", alt: "Soothing cupping session" },
  { id: 8, src: "/images/gallery/acupuncture-2.png", category: "Healing Tools", alt: "Close-up of acupuncture needles" },
  { id: 9, src: "/images/gallery/acupuncture-3.png", category: "Healing Tools", alt: "Reflective acupuncture needle macro" },
  { id: 10, src: "/images/gallery/flower-medicine-1.png", category: "Flower Medicine", alt: "Apothecary style flower medicine" },
  { id: 11, src: "/images/gallery/flower-medicine-2.png", category: "Flower Medicine", alt: "Botanical essences and tinctures" },
  { id: 12, src: "/images/gallery/traditional-acupuncture-2.png", category: "Healing Tools", alt: "Traditional wisdom meets modern healing" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, filteredImages]);

  return (
    <div className="pt-10 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-slate-800 mb-4 tracking-tight">Inside Aroha Wellness</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primaryBrand to-secondaryBrand mx-auto rounded-full shadow-neu-sm mb-4"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">A sanctuary crafted for your peace of mind.</p>
        </div>

        {/* Interactive Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  px-8 py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 outline-none
                  ${isActive
                    ? "shadow-neu-inset text-[#1E9096] bg-background"
                    : "shadow-neu text-slate-500 hover:text-[#5E2B8A] bg-background"
                  }
                `}
              >
                {category}
              </button>
            );
          })}
        </motion.div>

        {/* The "Breathing" Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 pb-8">
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -8, 0],
                }}
                whileHover={{
                  y: -4, // Pauses the float smoothly on hover
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  opacity: { duration: 0.4 },
                  layout: { duration: 0.4 },
                  y: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: (index % 3) * 0.5, // Staggered delay for breathing effect based on grid column
                  }
                }}
                className="break-inside-avoid mb-6"
              >
                <div
                  className="group relative cursor-pointer rounded-3xl border-8 border-background bg-background shadow-neu transition-all duration-300 hover:shadow-neu-inset overflow-hidden"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="overflow-hidden rounded-2xl h-full">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* --- NEW SECTIONS --- */}



        {/* SECTION 2: Follow Our Journey (Instagram Grid) */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center mt-20 mb-20 gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold text-slate-800 mb-4 tracking-tight">Follow Our Journey</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-primaryBrand to-secondaryBrand mx-auto md:mx-0 rounded-full shadow-neu-sm mb-4"></div>
              <p className="text-slate-600 max-w-xl text-lg">Daily inspiration, holistic tips, and community healing moments.</p>
            </div>
            <a href="https://www.instagram.com/iyalhealthcare" target="_blank" rel="noopener noreferrer" className="shrink-0 flex items-center gap-3 px-8 py-4 rounded-full shadow-neu bg-background text-slate-700 font-bold hover:text-[#5E2B8A] hover:shadow-neu-inset transition-all duration-300 group outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#E1306C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              @iyalhealthcare
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1974&auto=format&fit=crop",
            ].map((imgUrl, i) => (
              <motion.a
                key={i}
                href="https://www.instagram.com/iyalhealthcare"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -8 }}
                className="relative aspect-square rounded-[2rem] overflow-hidden shadow-neu border-8 border-background bg-background group block outline-none"
              >
                <img src={imgUrl} alt="Instagram Post" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-xl" />
                <div className="absolute inset-2 rounded-xl bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors duration-300 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* SECTION 3: The Tools of Our Trade */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 mt-12"
        >
          <div className="text-center mt-20 mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4 tracking-tight">The Tools of Our Trade</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primaryBrand to-secondaryBrand mx-auto rounded-full shadow-neu-sm mb-4"></div>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">Ancient instruments. Modern healing precision.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Traditional Acupuncture",
                desc: "Ultra-fine, sterile needles designed for painless stimulation of energy meridians.",
                img: "/images/gallery/traditional-acupuncture-1.png"
              },
              {
                title: "Cupping Therapy",
                desc: "Medical-grade cups that create a soothing vacuum to decompress tissues.",
                img: "/images/gallery/cupping-1.png"
              },
              {
                title: "Flower Medicine",
                desc: "Custom-blended tinctures and raw herbs to support healing from within.",
                img: "/images/gallery/flower-medicine-1.png"
              }
            ].map((tool, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="rounded-[2.5rem] bg-background shadow-neu overflow-hidden flex flex-col group border-4 border-background"
              >
                <div className="h-64 overflow-hidden relative">
                  <img src={tool.img} alt={tool.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
                <div className="p-8 text-center flex-1 flex flex-col justify-center relative">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-background shadow-neu flex items-center justify-center border-2 border-white/60">
                    <Leaf className="w-5 h-5 text-primaryBrand" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-3 mt-2">{tool.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{tool.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* SECTION 4: The Aroha Manifesto */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="relative rounded-[3rem] p-12 md:p-20 shadow-neu-inset bg-background text-center border-8 border-white/60 overflow-hidden">
            {/* Background floating decor */}
            <Quote className="absolute top-8 left-8 w-24 h-24 text-primaryBrand/5 -rotate-12" />
            <Quote className="absolute bottom-8 right-8 w-24 h-24 text-secondaryBrand/5 rotate-12" />

            <div className="relative z-10 max-w-4xl mx-auto space-y-8">
              <Leaf className="w-12 h-12 mx-auto text-secondaryBrand opacity-80" />
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 leading-tight tracking-tight">
                "Healing is not about erasing the past, but about crafting a balanced, serene future. Your body knows the way; we simply provide the environment to listen."
              </h2>
              <div className="pt-4 flex flex-col items-center">
                <div className="w-16 h-1 bg-gradient-to-r from-primaryBrand to-secondaryBrand rounded-full shadow-neu-sm mb-4"></div>
                <p className="text-xl font-bold text-[#5E2B8A] uppercase tracking-[0.2em]">— The Aroha Vision</p>
              </div>
            </div>
          </div>
        </motion.section>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-white/40 backdrop-blur-md p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl max-h-[85vh] rounded-[2rem] bg-background p-3 md:p-4 shadow-neu flex flex-col items-center justify-center border-4 border-white/50 overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-background text-slate-500 shadow-neu hover:shadow-neu-inset hover:text-[#5E2B8A] transition-all duration-300 outline-none"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 hidden md:flex items-center justify-center rounded-2xl bg-background/80 backdrop-blur-md text-primaryBrand shadow-neu hover:shadow-neu-inset hover:scale-95 transition-all duration-300 outline-none border border-white/40"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 hidden md:flex items-center justify-center rounded-2xl bg-background/80 backdrop-blur-md text-primaryBrand shadow-neu hover:shadow-neu-inset hover:scale-95 transition-all duration-300 outline-none border border-white/40"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              <div className="w-full h-full rounded-2xl overflow-hidden flex flex-col bg-background/50 backdrop-blur-sm p-2 md:p-6">
                <div className="flex-1 min-h-0 flex items-center justify-center p-4 relative group/image">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="max-w-full max-h-full object-contain rounded-xl shadow-2xl border-4 border-white/40 transition-transform duration-500"
                  />

                  {/* Mobile Navigation Overlays (Visible on touch) */}
                  <div className="md:hidden absolute inset-0 flex">
                    <div onClick={handlePrev} className="flex-1 h-full" />
                    <div onClick={handleNext} className="flex-1 h-full" />
                  </div>
                </div>

                <div className="p-6 md:p-8 shrink-0 relative min-h-[100px] flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedImage.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="mx-auto max-w-3xl px-10 py-4 rounded-[2.5rem] shadow-neu-inset bg-background border border-white/60 text-center w-full"
                    >
                      <p className="font-extrabold text-slate-800 text-2xl md:text-3xl leading-tight tracking-tight mb-2">
                        {selectedImage.alt}
                      </p>
                      <div className="flex items-center justify-center gap-4">
                        <div className="h-1 w-12 bg-gradient-to-r from-primaryBrand to-transparent rounded-full opacity-40" />
                        <p className="text-primaryBrand text-sm uppercase tracking-[0.4em] font-black">Aroha Wellness</p>
                        <div className="h-1 w-12 bg-gradient-to-l from-secondaryBrand to-transparent rounded-full opacity-40" />
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
