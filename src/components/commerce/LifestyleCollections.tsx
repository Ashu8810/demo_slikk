"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const COLLECTIONS = [
  {
    id: "minimalist",
    title: "Minimalist Sanctuary",
    tag: "Zen Aesthetic",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=600&h=800&q=80",
    color: "from-gray-50 to-gray-100",
    products: 42
  },
  {
    id: "cozy-desk",
    title: "Cozy Desk Setup",
    tag: "Creator Mode",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=600&h=800&q=80",
    color: "from-purple-50 to-purple-100",
    products: 28
  },
  {
    id: "urban-loft",
    title: "Urban Loft",
    tag: "Modern Living",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&w=600&h=800&q=80",
    color: "from-blue-50 to-blue-100",
    products: 35
  }
];

const DESK_ESSENTIALS = [
  {
    id: "de-1",
    name: "Wooden Monitor Stand",
    brand: "Oaky",
    price: "₹3,499",
    image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=300&h=300&q=80",
    eta: "15 mins"
  },
  {
    id: "de-2",
    name: "Wool Felt Desk Mat",
    brand: "Slikk Nest",
    price: "₹1,499",
    image: "https://images.unsplash.com/photo-1616423641454-eb00479f6ca9?auto=format&fit=crop&w=300&h=300&q=80",
    eta: "12 mins"
  },
  {
    id: "de-3",
    name: "Bauhaus Table Lamp",
    brand: "Lumina",
    price: "₹4,299",
    image: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&w=300&h=300&q=80",
    eta: "18 mins"
  }
];

export function LifestyleCollections() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
        
        {/* Room Aesthetic Collections */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <div className="flex items-center gap-2 text-primary font-black uppercase tracking-[0.2em] text-[10px] mb-4">
                <Sparkles size={12} />
                Curated Aesthetics
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight uppercase tracking-tight">
                Shop The <span className="text-primary italic">Vibe</span>
              </h2>
            </div>
            <button className="flex items-center gap-2 group text-[11px] font-black uppercase tracking-widest text-gray-400 hover:text-primary transition-colors">
              Explore All Collections
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COLLECTIONS.map((col, idx) => (
              <motion.div
                key={col.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative aspect-[3/4] rounded-[40px] overflow-hidden cursor-pointer"
              >
                <Image src={col.image} alt={col.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute bottom-8 left-8 right-8">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[9px] font-black text-white uppercase tracking-widest border border-white/30 mb-3 inline-block">
                    {col.tag}
                  </span>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight leading-none mb-2">{col.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white/70 uppercase tracking-widest">{col.products} Products</span>
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 scale-0 group-hover:scale-100 transition-transform">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desk Setup Essentials */}
        <div>
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-xl md:text-2xl font-black text-gray-900 uppercase tracking-tight">
              Desk Setup Essentials
            </h3>
            <div className="flex items-center gap-2 text-[10px] font-black text-primary uppercase tracking-widest">
              <Zap size={14} className="fill-primary" />
              15 Min Delivery
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DESK_ESSENTIALS.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-6 p-6 rounded-[32px] bg-gray-50 border border-gray-100 hover:shadow-premium transition-all group cursor-pointer"
              >
                <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100 p-2">
                  <Image src={item.image} alt={item.name} fill className="object-contain group-hover:scale-110 transition-transform" />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{item.brand}</p>
                  <h4 className="font-black text-gray-900 leading-tight mb-2 uppercase tracking-tight">{item.name}</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-black text-gray-900">{item.price}</span>
                    <span className="text-[9px] font-black text-green-600 uppercase tracking-tighter">{item.eta}</span>
                  </div>
                </div>
                <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-300 hover:text-primary hover:bg-primary/5 transition-all">
                  <Heart size={18} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
