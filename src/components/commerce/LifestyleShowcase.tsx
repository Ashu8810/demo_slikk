"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Maximize2, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface LifestyleImage {
  url: string;
  label: string;
  gridSpan?: string;
}

const MOCK_LIFESTYLE: LifestyleImage[] = [
  {
    url: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&h=1000&q=80",
    label: "Zen Morning Light",
    gridSpan: "md:col-span-2 md:row-span-2"
  },
  {
    url: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?auto=format&fit=crop&w=400&h=500&q=80",
    label: "The Minimal Setup"
  },
  {
    url: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=400&h=500&q=80",
    label: "Evening Glow"
  }
];

export function LifestyleShowcase() {
  return (
    <section className="py-24 border-t border-gray-100">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-primary">
              <Sparkles size={18} />
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">Aspirational Living</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tight leading-[0.9]">
              Live <span className="text-primary/40 italic">the</span> <br /> Aesthetic.
            </h2>
          </div>
          <p className="text-sm text-gray-500 font-medium max-w-sm leading-relaxed">
            See how our curated pieces transform ordinary spaces into editorial sanctuary. Designed for the modern urban dweller.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {MOCK_LIFESTYLE.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "group relative rounded-[40px] overflow-hidden bg-gray-100",
                img.gridSpan
              )}
            >
              <Image 
                src={img.url} 
                alt={img.label} 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                 <button className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-gray-900 shadow-xl hover:scale-110 transition-all">
                    <Maximize2 size={20} />
                 </button>
                 <button className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-gray-900 shadow-xl hover:scale-110 transition-all">
                    <Heart size={20} />
                 </button>
              </div>
              <div className="absolute bottom-8 left-8">
                <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-black text-white uppercase tracking-widest border border-white/30">
                  {img.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
