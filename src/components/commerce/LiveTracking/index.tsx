"use client";

import React from "react";
import { motion } from "framer-motion";
import { StylizedMap } from "./MapComponent";
import { LiveOrderCard } from "./OrderCard";
import { Truck, MapPin, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function LiveTrackingSection() {
  return (
    <section className="py-24 px-4 md:px-8 bg-gray-50/50">
      <div className="max-w-screen-2xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <Badge variant="primary" icon="fast" className="mb-4">Live Logistics</Badge>
            <h2 className="text-4xl md:text-6xl font-outfit font-black text-gray-900 leading-[0.95] tracking-tighter mb-6">
              Track your style <br />
              <span className="text-primary italic">in real-time.</span>
            </h2>
            <p className="text-lg text-gray-500 font-medium leading-relaxed max-w-xl">
              Our hyperlocal fulfillment network ensures your decor choices are dispatched within seconds of ordering. Watch the magic happen.
            </p>
          </div>

          <div className="flex gap-8 border-l border-gray-200 pl-8 hidden lg:flex">
             <div className="flex flex-col gap-1">
                <span className="text-2xl font-black text-gray-900 font-outfit">600+</span>
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Slikk Hubs</span>
             </div>
             <div className="flex flex-col gap-1">
                <span className="text-2xl font-black text-gray-900 font-outfit">Chennai</span>
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Active City</span>
             </div>
             <div className="flex flex-col gap-1">
                <span className="text-2xl font-black text-gray-900 font-outfit">18 Mins</span>
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Avg. Delivery</span>
             </div>
          </div>
        </div>

        {/* Live Tracking UI Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Live Order Details */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 h-full"
          >
            <LiveOrderCard />
          </motion.div>

          {/* Right: Premium Live Map */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 h-full"
          >
            <StylizedMap />
          </motion.div>

        </div>

        {/* Hyperlocal Intelligence Footer */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="bg-white p-6 rounded-3xl border border-gray-100 flex items-center gap-4 group hover:border-primary/20 transition-all">
              <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                 <Zap size={20} fill="currentColor" />
              </div>
              <div>
                <h4 className="text-sm font-black text-gray-900 uppercase">Hyperlocal Routing</h4>
                <p className="text-xs text-gray-500 font-medium">Smart AI dispatch for fastest paths</p>
              </div>
           </div>
           <div className="bg-white p-6 rounded-3xl border border-gray-100 flex items-center gap-4 group hover:border-primary/20 transition-all">
              <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                 <MapPin size={20} />
              </div>
              <div>
                <h4 className="text-sm font-black text-gray-900 uppercase">Dark Store Network</h4>
                <p className="text-xs text-gray-500 font-medium">Inventory closer to your home</p>
              </div>
           </div>
           <div className="bg-white p-6 rounded-3xl border border-gray-100 flex items-center gap-4 group hover:border-primary/20 transition-all">
              <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                 <Truck size={20} />
              </div>
              <div>
                <h4 className="text-sm font-black text-gray-900 uppercase">Priority Rider Dispatch</h4>
                <p className="text-xs text-gray-500 font-medium">Dedicated fragile-care handling</p>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}
