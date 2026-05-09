"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Zap, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  {
    title: "Wall Art",
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=800&h=800&q=80",
    count: "420+ Items",
    size: "large",
    accent: "bg-purple-500",
  },
  {
    title: "Rugs",
    image: "https://images.unsplash.com/photo-1575414003591-ece8d0416c7a?auto=format&fit=crop&w=600&h=600&q=80",
    count: "150+ Items",
    size: "medium",
    accent: "bg-amber-500",
  },
  {
    title: "Furniture",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&h=600&q=80",
    count: "80+ Drops",
    size: "medium",
    accent: "bg-blue-500",
  },
  {
    title: "Plants",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=400&h=400&q=80",
    count: "200+ Items",
    size: "small",
    accent: "bg-red-500",
  },
  {
    title: "Lighting",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=400&h=400&q=80",
    count: "300+ Items",
    size: "small",
    accent: "bg-green-500",
  }
];

interface CategoryCardProps {
  category: typeof CATEGORIES[0];
  index: number;
}

function CategoryCard({ category, index }: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -8 }}
      className={cn(
        "relative group cursor-pointer overflow-hidden rounded-[32px] border border-gray-100 shadow-sm hover:shadow-premium transition-all duration-500",
        category.size === "large" ? "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" : "aspect-square"
      )}
    >
      <Image
        src={category.image}
        alt={category.title}
        fill
        className="object-cover transition-transform duration-1000 group-hover:scale-110"
      />
      
      {/* Editorial Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            className={cn("px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white", category.accent)}
          >
            {category.title === "Streetwear" ? "Hottest" : "Curated"}
          </motion.div>
          <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 -rotate-45 group-hover:rotate-0 transition-transform duration-500">
            <ArrowUpRight size={20} />
          </div>
        </div>
        
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter leading-none mb-2">
            {category.title}
          </h3>
          <div className="flex items-center gap-2 text-white/60 text-xs font-bold uppercase tracking-widest">
            <span>{category.count}</span>
            <div className="w-1 h-1 bg-white/40 rounded-full" />
            <span className="flex items-center gap-1"><Zap size={10} className="fill-current" /> Fast Delivery</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function CategoriesSection() {
  return (
    <section className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-primary font-black uppercase tracking-[0.2em] text-[10px] mb-4"
            >
              <div className="w-8 h-px bg-primary/30" />
              <Sparkles size={12} />
              Editorial Discovery
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-[1.1]">
              Discover Your <span className="text-primary italic">Style</span>
            </h2>
            
            <p className="text-gray-500 font-medium text-lg">
              Explore curated fashion collections optimized for the fast lane. Arriving in under 60 minutes.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2"
          >
            {["New Arrivals", "Trending", "Limited", "Essentials"].map((tag) => (
              <button 
                key={tag}
                className="px-6 py-2 rounded-full border border-gray-200 bg-white text-xs font-black text-gray-600 hover:border-primary hover:text-primary transition-all shadow-sm"
              >
                {tag}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Discovery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:auto-rows-[300px]">
          {CATEGORIES.map((category, idx) => (
            <CategoryCard key={category.title} category={category} index={idx} />
          ))}
          
          {/* Editorial Discovery Tile (Last one) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-1 bg-primary rounded-[32px] p-8 flex flex-col justify-between text-white overflow-hidden relative group"
          >
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
            
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                <Sparkles size={24} />
              </div>
              <h4 className="text-2xl font-black uppercase tracking-tighter leading-tight mb-2">
                Curated <br /> For You
              </h4>
              <p className="text-white/60 text-xs font-bold uppercase tracking-widest">Personalized trend discovery</p>
            </div>
            
            <button className="relative z-10 w-full py-4 bg-white text-primary rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl flex items-center justify-center gap-2 group/btn">
              Explore More <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Mobile Swipe Rail (Hidden on Desktop, Visible on Mobile) */}
        <div className="mt-12 md:hidden">
          <div className="flex overflow-x-auto pb-4 gap-4 no-scrollbar -mx-4 px-4">
             {["Bags", "Jewelry", "Caps", "Socks", "Belts"].map((item, i) => (
               <div key={i} className="flex-shrink-0 w-32 h-32 rounded-2xl bg-white border border-gray-100 flex flex-col items-center justify-center gap-3 shadow-sm">
                  <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400">
                    <Zap size={20} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-900">{item}</span>
               </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}
