"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  images: string[];
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const nextImage = () => setActiveIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setActiveIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="flex flex-col gap-6">
      {/* Main Image Viewport */}
      <div className="relative aspect-[4/5] bg-gray-50 rounded-[40px] overflow-hidden group cursor-zoom-in">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full h-full"
          >
            <Image 
              src={images[activeIndex]} 
              alt="Product Image" 
              fill 
              className={cn(
                "object-cover transition-transform duration-700",
                isZoomed ? "scale-150" : "scale-100"
              )}
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Gallery Controls */}
        <div className="absolute inset-0 flex items-center justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-gray-900 shadow-xl hover:scale-110 transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-gray-900 shadow-xl hover:scale-110 transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Zoom Toggle */}
        <button 
          onClick={() => setIsZoomed(!isZoomed)}
          className="absolute bottom-6 right-6 w-10 h-10 bg-black/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Maximize2 size={18} />
        </button>

        {/* Floating Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 px-3 py-1.5 bg-black/20 backdrop-blur-md rounded-full border border-white/10">
          {images.map((_, i) => (
            <div 
              key={i} 
              className={cn(
                "h-1 rounded-full transition-all duration-300",
                activeIndex === i ? "w-6 bg-white" : "w-1 bg-white/40"
              )} 
            />
          ))}
        </div>
      </div>

      {/* Thumbnails Rail */}
      <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={cn(
              "relative w-24 aspect-square rounded-2xl overflow-hidden border-2 transition-all shrink-0",
              activeIndex === i ? "border-primary scale-95" : "border-transparent opacity-60 hover:opacity-100"
            )}
          >
            <Image src={img} alt={`Thumbnail ${i}`} fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
