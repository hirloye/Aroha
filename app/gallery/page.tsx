"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Instagram, ArrowRight, Quote, Leaf } from "lucide-react";

const categories = ["All", "Reception", "Treatment Rooms", "Healing Tools", "Flower Medicine"];

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop", category: "Treatment Rooms", alt: "Serene treatment bed with soft lighting" },
  { id: 2, src: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2070&auto=format&fit=crop", category: "Reception", alt: "Modern, calm reception and waiting area" },
  { id: 3, src: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1974&auto=format&fit=crop", category: "Healing Tools", alt: "Zen stones and natural elements" },
  { id: 4, src: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop", category: "Treatment Rooms", alt: "Meditation and relaxation space" },
  { id: 5, src: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1974&auto=format&fit=crop", category: "Healing Tools", alt: "Herbal teas and holistic remedies" },
  { id: 6, src: "https://images.unsplash.com/photo-1574015974293-817f0ebebb74?q=80&w=2073&auto=format&fit=crop", category: "Reception", alt: "Lounge area with natural light" },
  { id: 7, src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop", category: "Reception", alt: "Herbal tea waiting area" },
  { id: 8, src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop", category: "Healing Tools", alt: "Acupuncture and cupping tools" },
  { id: 9, src: "https://images.unsplash.com/photo-1515023115689-589c33041d3c?q=80&w=1974&auto=format&fit=crop", category: "Treatment Rooms", alt: "Private soothing room" },
  { id: 10, src: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&w=2070&auto=format&fit=crop", category: "Flower Medicine", alt: "Floral essences and natural remedies" },
  { id: 11, src: "https://images.unsplash.com/photo-1608222351212-18fe0ec7cebb?q=80&w=1974&auto=format&fit=crop", category: "Flower Medicine", alt: "Custom blending of flower medicine drops" },
  { id: 12, src: "https://images.unsplash.com/photo-1616246473177-3e1afb561c47?q=80&w=2069&auto=format&fit=crop", category: "Flower Medicine", alt: "Apothecary shelf with botanical healers" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

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
                    ? "shadow-[inset_6px_6px_12px_#c8ccd0,inset_-6px_-6px_12px_#ffffff] text-[#1E9096] bg-[#F0F4F8]"
                    : "shadow-[6px_6px_12px_#c8ccd0,-6px_-6px_12px_#ffffff] text-slate-500 hover:text-[#5E2B8A] bg-[#F0F4F8]"
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
                  className="group relative cursor-pointer rounded-3xl border-8 border-[#F0F4F8] bg-[#F0F4F8] shadow-[8px_8px_16px_#c8ccd0,-8px_-8px_16px_#ffffff] transition-all duration-300 hover:shadow-[inset_8px_8px_16px_#c8ccd0,inset_-8px_-8px_16px_#ffffff] overflow-hidden"
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
            <a href="https://www.instagram.com/iyalhealthcare" target="_blank" rel="noopener noreferrer" className="shrink-0 flex items-center gap-3 px-8 py-4 rounded-full shadow-[6px_6px_12px_#c8ccd0,-6px_-6px_12px_#ffffff] bg-[#F0F4F8] text-slate-700 font-bold hover:text-[#5E2B8A] hover:shadow-[inset_6px_6px_12px_#c8ccd0,inset_-6px_-6px_12px_#ffffff] transition-all duration-300 group outline-none">
              <Instagram className="w-6 h-6 text-[#E1306C]" />
              @iyalhealthcare
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "https://images.unsplash.com/photo-1512101176959-c557f3516787?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1620052731835-cb9d36329eeb?q=80&w=1974&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&w=2070&auto=format&fit=crop",
            ].map((imgUrl, i) => (
              <motion.a
                key={i}
                href="https://www.instagram.com/iyalhealthcare"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -8 }}
                className="relative aspect-square rounded-[2rem] overflow-hidden shadow-[8px_8px_16px_#c8ccd0,-8px_-8px_16px_#ffffff] border-8 border-[#F0F4F8] bg-[#F0F4F8] group block outline-none"
              >
                <img src={imgUrl} alt="Instagram Post" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-xl" />
                <div className="absolute inset-2 rounded-xl bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors duration-300 flex items-center justify-center">
                  <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300" />
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
                img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop"
              },
              {
                title: "Cupping Glasses",
                desc: "Medical-grade cups that create a soothing vacuum to decompress tissues.",
                img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop"
              },
              {
                title: "Herbal Botanicals",
                desc: "Custom-blended tinctures and raw herbs to support healing from within.",
                img: "https://images.unsplash.com/photo-1620052731835-cb9d36329eeb?q=80&w=1974&auto=format&fit=crop"
              }
            ].map((tool, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="rounded-[2.5rem] bg-[#F0F4F8] shadow-[8px_8px_16px_#c8ccd0,-8px_-8px_16px_#ffffff] overflow-hidden flex flex-col group border-4 border-[#F0F4F8]"
              >
                <div className="h-64 overflow-hidden relative">
                  <img src={tool.img} alt={tool.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
                <div className="p-8 text-center flex-1 flex flex-col justify-center relative">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#F0F4F8] shadow-[6px_6px_12px_#c8ccd0,-6px_-6px_12px_#ffffff] flex items-center justify-center border-2 border-white">
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
          <div className="relative rounded-[3rem] p-12 md:p-20 shadow-[inset_10px_10px_20px_#c8ccd0,inset_-10px_-10px_20px_#ffffff] bg-[#F0F4F8] text-center border-8 border-white/60 overflow-hidden">
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
              className="relative w-full max-w-6xl max-h-[90vh] rounded-[2rem] bg-[#F0F4F8] p-4 shadow-[20px_20px_40px_rgba(200,204,208,0.8),-20px_-20px_40px_rgba(255,255,255,0.8)] flex flex-col items-center justify-center border-4 border-white/50"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-[#F0F4F8] text-slate-500 shadow-[6px_6px_12px_#c8ccd0,-6px_-6px_12px_#ffffff] hover:shadow-[inset_4px_4px_8px_#c8ccd0,inset_-4px_-4px_8px_#ffffff] hover:text-[#5E2B8A] transition-all duration-300 outline-none"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="w-full h-full rounded-2xl overflow-hidden flex items-center justify-center relative bg-black/5">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-full object-contain max-h-[80vh] rounded-xl"
                />

                <div className="absolute bottom-6 bg-[#F0F4F8]/90 backdrop-blur-md px-8 py-4 rounded-full shadow-[6px_6px_16px_rgba(200,204,208,0.5),-6px_-6px_16px_rgba(255,255,255,0.8)] border border-white/50 transform translate-y-2">
                  <p className="font-semibold text-slate-700 text-lg tracking-wide">{selectedImage.alt}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
