"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Zap, ShieldCheck, RefreshCcw, Package, Clock, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const TRUST_INDICATORS = [
  { icon: Clock, label: "60 Mins Delivery" },
  { icon: Package, label: "Dark Store Network" },
  { icon: ShieldCheck, label: "100% Original" },
  { icon: RefreshCcw, label: "Easy Returns" },
];

export function HeroBanner() {
  return (
    <section className="px-4 md:px-8 pb-4">
      <div className="max-w-screen-2xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-gradient-to-br from-[#F8F7FF] to-[#F1F0FF] rounded-[32px] border border-white p-5 md:p-6 lg:p-8 overflow-hidden shadow-sm"
        >
          {/* Subtle Background pattern */}
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.05),transparent_50%)]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
            
            {/* LEFT CONTENT (5 Cols) */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="hidden md:flex items-center gap-2 px-3 py-1 bg-white rounded-full shadow-sm mb-3 border border-purple-100"
              >
                <div className="w-4 h-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Zap size={10} className="text-primary fill-primary" />
                </div>
                <span className="text-[9px] font-black uppercase tracking-widest text-primary">Lifestyle in Minutes</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="hidden md:block text-3xl md:text-4xl xl:text-5xl font-outfit font-black tracking-tight leading-[1.1] text-gray-900 mb-3"
              >
                Decor. Aesthetic. <br />
                Lifestyle. <span className="text-primary italic text-3xl md:text-4xl xl:text-5xl">Instantly.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="hidden md:block text-sm text-gray-500 font-medium max-w-sm mb-5"
              >
                Aesthetic room decor, desk setups, and premium living essentials delivered to your doorstep in 60 minutes.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="hidden md:flex flex-wrap gap-3 mb-6"
              >
                <Button size="lg" className="h-10 px-5 rounded-xl bg-primary text-white font-black text-xs shadow-lg shadow-primary/20 hover:scale-105 transition-all group">
                  Explore Drops
                  <ArrowRight size={16} className="ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="h-10 px-5 rounded-xl bg-white border-white shadow-sm font-black text-xs hover:bg-gray-50 transition-all">
                  Shop The Look
                </Button>
              </motion.div>

              {/* Trust Indicators (Inline) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="hidden md:flex flex-wrap items-center gap-x-5 gap-y-2"
              >
                {TRUST_INDICATORS.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <item.icon size={12} className="text-gray-400" />
                    <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">{item.label}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* MIDDLE CARDS (4 Cols) */}
            <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-3">
              {/* Main Lifestyle Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-[24px] p-3 shadow-premium hover:shadow-premium-lg transition-all group relative"
              >
                <div className="absolute top-2.5 right-2.5 bg-purple-50 px-2 py-0.5 rounded-full flex items-center gap-1 border border-purple-100 z-10">
                  <Zap size={8} className="text-primary fill-primary" />
                  <span className="text-[8px] font-black text-gray-900 uppercase tracking-tight">In <span className="text-primary">12 mins</span></span>
                </div>
                <div className="relative w-full aspect-[16/9] mb-1.5 overflow-hidden rounded-lg">
                  <Image src="https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=600&h=400&q=80" alt="Desk Setup" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-[10px] font-bold text-gray-500 mb-0 uppercase tracking-wider">Aesthetic Desk Setup</h3>
                    <span className="text-sm font-black text-gray-900">Discover Essentials</span>
                  </div>
                  <button className="p-1 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors">
                    <ArrowRight size={14} className="text-primary" />
                  </button>
                </div>
              </motion.div>

              {/* Stacked Mini Cards */}
              <div className="grid grid-cols-2 gap-3">
                 {/* Decor Card */}
                <div className="bg-white rounded-[20px] p-2.5 shadow-premium group">
                  <div className="relative w-full aspect-square mb-1.5 overflow-hidden rounded-lg">
                    <Image src="https://images.unsplash.com/photo-1513519245088-0e12902e35ca?auto=format&fit=crop&w=300&h=300&q=80" alt="Decor" fill className="object-cover" />
                    <div className="absolute top-1 right-1 bg-white/90 backdrop-blur-sm p-0.5 rounded-full shadow-sm">
                      <Zap size={6} className="text-primary fill-primary" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-[8px] font-bold text-gray-400 mb-0">Minimal Lamp</h3>
                      <span className="text-xs font-black text-gray-900">₹2,499</span>
                    </div>
                    <Heart size={10} className="text-gray-300" />
                  </div>
                </div>

                {/* Tech Card */}
                <div className="bg-white rounded-[20px] p-2.5 shadow-premium group">
                  <div className="relative w-full aspect-square mb-1.5 overflow-hidden rounded-lg">
                    <Image src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=300&h=300&q=80" alt="Furniture" fill className="object-cover" />
                    <div className="absolute top-1 right-1 bg-white/90 backdrop-blur-sm p-0.5 rounded-full shadow-sm">
                      <Zap size={6} className="text-primary fill-primary" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-[8px] font-bold text-gray-400 mb-0">Accent Chair</h3>
                      <span className="text-xs font-black text-gray-900">₹8,999</span>
                    </div>
                    <Heart size={10} className="text-gray-300" />
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SLIKK PASS (3 Cols) */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white/60 backdrop-blur-md rounded-[24px] p-5 border border-white h-full shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      <Clock size={14} className="rotate-12" />
                    </div>
                    <div>
                      <h3 className="font-outfit font-black text-base text-gray-900">Slikk Pass</h3>
                      <span className="text-[8px] font-bold text-primary uppercase tracking-widest">Premium Member</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-[11px] font-black text-gray-900">FREE Delivery</p>
                      <p className="text-[9px] text-gray-400 font-medium leading-none">On every order above ₹99</p>
                    </div>
                    <Button className="w-full h-9 rounded-lg bg-primary text-white font-black text-[9px] uppercase tracking-widest shadow-md hover:scale-105 transition-all">
                      Join Now
                    </Button>
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <p className="text-[11px] font-black text-gray-900 mb-1">Exclusive Deals</p>
                  <p className="text-[9px] text-gray-400 font-medium mb-3">Up to 30% Off on Top Brands</p>
                  
                  <div className="flex items-center gap-2 opacity-40 grayscale">
                    <div className="w-5 h-5 relative"><Image src="/images/categories/brands.png" alt="Brand" fill className="object-contain" /></div>
                    <div className="w-5 h-5 relative"><Image src="/images/categories/brands.png" alt="Brand" fill className="object-contain" /></div>
                    <span className="text-[8px] font-black text-gray-300">& more</span>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
