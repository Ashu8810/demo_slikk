"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Zap, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

const FURNITURE_ITEMS = [
  {
    id: "f1",
    name: "Minimalist Accent Chair",
    price: "₹8,999",
    tag: "Bestseller",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=400&h=500&q=80",
    eta: "25 MINS"
  },
  {
    id: "f2",
    name: "Floating Bedside Table",
    price: "₹2,499",
    tag: "New",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=400&h=500&q=80",
    eta: "18 MINS"
  },
  {
    id: "f3",
    name: "Aesthetic Floor Lamp",
    price: "₹4,299",
    tag: "Trending",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=400&h=500&q=80",
    eta: "20 MINS"
  },
  {
    id: "f4",
    name: "Modular Storage Box",
    price: "₹1,899",
    tag: "Essential",
    image: "https://images.unsplash.com/photo-1594409445294-c440f4dfdf57?auto=format&fit=crop&w=400&h=500&q=80",
    eta: "15 MINS"
  }
];

export function FurnitureShowcase() {
  return (
    <section className="py-20 bg-[#F9F9F9] overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
        
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-2xl md:text-4xl font-black text-gray-900 uppercase tracking-tight leading-none mb-3">
              Modern <span className="text-primary italic">Furniture</span>
            </h2>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">Curated for modern apartments</p>
          </div>
          <button className="flex items-center gap-2 group px-6 py-3 bg-white rounded-full text-[10px] font-black uppercase tracking-widest text-gray-900 shadow-sm hover:shadow-md transition-all">
            Browse All
            <ChevronRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FURNITURE_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-[40px] p-4 shadow-sm hover:shadow-premium transition-all duration-500 cursor-pointer"
            >
              {/* Image Area */}
              <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden mb-6 bg-gray-50">
                <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                
                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <div className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[8px] font-black text-gray-900 uppercase tracking-widest shadow-sm">
                    {item.tag}
                  </div>
                  <div className="px-3 py-1 bg-primary/90 backdrop-blur-md rounded-full text-[8px] font-black text-white uppercase tracking-widest shadow-sm flex items-center gap-1">
                    <Zap size={10} className="fill-white" />
                    {item.eta}
                  </div>
                </div>

                {/* Quick Add */}
                <div className="absolute bottom-4 right-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="w-12 h-12 bg-gray-900 text-white rounded-2xl flex items-center justify-center shadow-lg hover:bg-primary transition-colors">
                    <ShoppingBag size={20} />
                  </button>
                </div>
              </div>

              {/* Info Area */}
              <div className="px-2 pb-2">
                <h3 className="font-black text-gray-900 uppercase tracking-tight mb-2 group-hover:text-primary transition-colors">{item.name}</h3>
                <span className="text-xl font-black text-gray-900 leading-none">{item.price}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
