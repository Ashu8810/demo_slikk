"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ChevronDown, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

export function LocationSelector() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 md:gap-3 px-2 md:px-4 py-1.5 md:py-2 bg-white border border-gray-100 rounded-[18px] hover:border-primary/20 hover:shadow-sm transition-all group"
      >
        <div className="w-8 h-8 md:w-9 md:h-9 bg-primary/5 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
          <MapPin size={18} strokeWidth={2.5} />
        </div>
        <div className="flex flex-col items-start leading-tight">
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5 hidden md:block">Delivery to</span>
          <div className="flex items-center gap-1 md:gap-1.5">
            <span className="text-xs md:text-sm font-black text-gray-900 tracking-tight">Home • <span className="text-primary italic">10m</span></span>
            <ChevronDown size={14} className={cn("text-gray-400 transition-transform duration-300", isOpen && "rotate-180")} />
          </div>
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-full mt-2 left-0 w-72 bg-white rounded-2xl shadow-premium border border-gray-100 z-50 p-4"
          >
            <h4 className="font-bold text-sm text-gray-900 mb-3">Saved Addresses</h4>
            <div className="space-y-2">
              {[
                { label: "Home", addr: "42, Skyline Towers, Chennai", eta: "10 mins", active: true },
                { label: "Office", addr: "Tech Park, Building B, Chennai", eta: "18 mins", active: false },
              ].map((loc, i) => (
                <button
                  key={i}
                  className={cn(
                    "w-full flex items-start gap-3 p-3 rounded-xl border text-left transition-all",
                    loc.active ? "bg-primary/5 border-primary/20" : "bg-white border-gray-50 hover:border-gray-200"
                  )}
                >
                  <div className={cn("mt-0.5", loc.active ? "text-primary" : "text-gray-400")}>
                    <MapPin size={16} />
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-gray-900">{loc.label}</span>
                      <div className="flex items-center gap-1 text-[10px] font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded">
                        <Clock size={10} /> {loc.eta}
                      </div>
                    </div>
                    <p className="text-[10px] text-gray-500 mt-1 line-clamp-1">{loc.addr}</p>
                  </div>
                </button>
              ))}
            </div>
            <button className="w-full mt-3 py-2 text-xs font-bold text-primary border border-primary/20 rounded-xl hover:bg-primary/5 transition-colors">
              + Add New Location
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
