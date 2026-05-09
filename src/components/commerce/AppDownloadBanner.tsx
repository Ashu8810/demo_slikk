"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Apple, PlayCircle, Smartphone, Zap } from "lucide-react";

export function AppDownloadBanner() {
  return (
    <section className="px-4 md:px-8 py-16">
      <div className="max-w-screen-2xl mx-auto">
        <div className="relative bg-primary rounded-[40px] overflow-hidden p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.4),transparent_50%)]" />
          </div>

          <div className="relative z-10 max-w-xl text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
              <div className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center text-white">
                <Smartphone size={24} />
              </div>
              <span className="text-xs font-black text-white/80 uppercase tracking-[0.3em]">The Slikk App</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight uppercase tracking-tight mb-6">
              Shop Lifestyle. <br />
              Delivered <span className="text-white/60 italic">Instantly.</span>
            </h2>
            
            <p className="text-sm md:text-base text-white/70 font-medium mb-10 leading-relaxed">
              Join 1M+ urban dwellers who shop curated furniture, decor, and art with real-time tracking and 60-minute delivery.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <button className="flex items-center gap-3 bg-white text-gray-900 px-6 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-black/10">
                <Apple size={20} />
                App Store
              </button>
              <button className="flex items-center gap-3 bg-gray-900 text-white px-6 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-black/20">
                <PlayCircle size={20} />
                Google Play
              </button>
            </div>
          </div>

          <div className="relative z-10 w-full max-w-sm">
             <motion.div
               initial={{ y: 100, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               viewport={{ once: true }}
               transition={{ type: "spring", damping: 20, stiffness: 100 }}
               className="relative"
             >
               <div className="absolute -inset-4 bg-white/5 blur-2xl rounded-full" />
               <div className="bg-gray-900 rounded-[48px] p-4 border-[8px] border-white/10 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-20" />
                  <div className="aspect-[9/19.5] bg-white rounded-[32px] overflow-hidden flex flex-col items-center justify-center p-8 text-center">
                     <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary mb-6">
                        <Zap size={40} className="fill-primary" />
                     </div>
                     <h4 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-2">Slikk</h4>
                     <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">Arriving in 12 mins</p>
                     <div className="w-full h-1 bg-gray-100 rounded-full mb-8">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: "70%" }}
                          className="h-full bg-primary rounded-full relative"
                        >
                           <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary border-2 border-white rounded-full shadow-md" />
                        </motion.div>
                     </div>
                  </div>
               </div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
