"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, ChevronDown, ListFilter, Zap, SlidersHorizontal, X } from "lucide-react";
import { cn } from "@/lib/utils";

const FILTERS = [
  "All Decor", "Desk Setup", "Lighting", "Furniture", "Posters", "Rugs", "Plants", "Aesthetic"
];

const SORT_OPTIONS = [
  "Trending", "Recommended", "New Arrivals", "Fast Delivery", "Price: Low to High", "Price: High to Low"
];

interface FilterBarProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

export function FilterBar({ activeFilter, setActiveFilter }: FilterBarProps) {
  const [activeSort, setActiveSort] = useState("Recommended");
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  return (
    <>
      <div className="sticky top-[80px] z-30 bg-white/80 backdrop-blur-md border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Quick Filters */}
          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar w-full md:w-auto pb-1 md:pb-0">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsFilterDrawerOpen(true)}
              className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-black/10 transition-all"
            >
              <SlidersHorizontal size={14} />
              Filters
            </motion.button>
            
            <div className="w-px h-6 bg-gray-200 mx-2 hidden md:block" />
            
            {FILTERS.map((filter) => (
              <motion.button
                key={filter}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "whitespace-nowrap px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border cursor-pointer",
                  activeFilter === filter 
                    ? "bg-primary/5 border-primary text-primary shadow-sm" 
                    : "bg-white border-gray-100 text-gray-500 hover:border-gray-300 hover:bg-gray-50"
                )}
              >
                {filter}
              </motion.button>
            ))}
          </div>

          {/* New Feature: Delivery Mode Toggle */}
          <div className="flex items-center gap-4 bg-gray-50 p-1.5 rounded-full border border-gray-100">
             <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 group">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[9px] font-black uppercase tracking-widest text-gray-900">10-Min Delivery</span>
             </button>
             <div className="flex items-center gap-2 pr-4 cursor-pointer group">
                <span className="text-[9px] font-black uppercase tracking-widest text-gray-400 group-hover:text-gray-600">Standard</span>
                <div className="w-8 h-4 bg-gray-200 rounded-full relative">
                   <div className="absolute left-1 top-1 w-2 h-2 bg-white rounded-full" />
                </div>
             </div>
          </div>

          {/* Sort & Stats */}
          <div className="flex items-center justify-between w-full md:w-auto gap-8">
            <div className="hidden lg:flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
              <Zap size={14} className="text-green-500 fill-green-500" />
              Fast Delivery Active
            </div>

            <div className="relative">
              <button 
                onClick={() => setIsSortOpen(!isSortOpen)}
                className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-100 rounded-full text-[10px] font-black uppercase tracking-widest hover:border-primary transition-all"
              >
                <span className="text-gray-400">Sort:</span>
                <span className="text-gray-900">{activeSort}</span>
                <ChevronDown size={14} className={cn("transition-transform duration-300", isSortOpen && "rotate-180")} />
              </button>

              <AnimatePresence>
                {isSortOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-premium border border-gray-100 p-2 overflow-hidden"
                  >
                    {SORT_OPTIONS.map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          setActiveSort(option);
                          setIsSortOpen(false);
                        }}
                        className={cn(
                          "w-full text-left px-4 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-colors",
                          activeSort === option ? "bg-primary/5 text-primary" : "text-gray-500 hover:bg-gray-50"
                        )}
                      >
                        {option}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {isFilterDrawerOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFilterDrawerOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-sm bg-white z-[70] shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight">Filters</h3>
                <button onClick={() => setIsFilterDrawerOpen(false)} className="p-2 hover:bg-gray-50 rounded-full transition-colors">
                  <X size={24} className="text-gray-400" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-10">
                {/* Category Section */}
                <div className="space-y-4">
                  <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Room Type</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {["Bedroom", "Living Room", "Workspace", "Kitchen", "Balcony", "Studio"].map((room) => (
                      <button key={room} className="px-4 py-3 bg-gray-50 rounded-xl text-[10px] font-black uppercase tracking-widest text-gray-600 hover:bg-primary/5 hover:text-primary transition-all text-left">
                        {room}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="space-y-4">
                  <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Price Range</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <p className="text-[8px] font-bold text-gray-400 uppercase">Min</p>
                      <input type="text" placeholder="₹0" className="w-full h-10 px-4 bg-gray-50 rounded-xl border-none text-xs font-black" />
                    </div>
                    <div className="space-y-1.5">
                      <p className="text-[8px] font-bold text-gray-400 uppercase">Max</p>
                      <input type="text" placeholder="₹50,000+" className="w-full h-10 px-4 bg-gray-50 rounded-xl border-none text-xs font-black" />
                    </div>
                  </div>
                </div>

                {/* Colors */}
                <div className="space-y-4">
                  <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Aesthetic Palette</h4>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { name: "Lavender", class: "bg-purple-200" },
                      { name: "Cream", class: "bg-orange-50" },
                      { name: "Slate", class: "bg-gray-600" },
                      { name: "Matcha", class: "bg-green-200" },
                      { name: "Sunset", class: "bg-orange-300" }
                    ].map((color) => (
                      <button key={color.name} className="flex flex-col items-center gap-2 group">
                        <div className={cn("w-10 h-10 rounded-full border-2 border-white shadow-sm ring-2 ring-transparent group-hover:ring-primary/20 transition-all", color.class)} />
                        <span className="text-[8px] font-bold text-gray-400 group-hover:text-primary transition-colors">{color.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Delivery */}
                <div className="space-y-4">
                  <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Delivery Speed</h4>
                  <div className="flex flex-col gap-2">
                    <label className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl cursor-pointer hover:bg-primary/5 transition-all group">
                      <input type="checkbox" className="w-5 h-5 rounded-lg border-2 border-gray-200 checked:bg-primary checked:border-primary transition-all" />
                      <div className="flex items-center gap-2">
                        <Zap size={14} className="text-primary fill-primary" />
                        <span className="text-xs font-black text-gray-900 uppercase tracking-tight">Quick Delivery (under 30 mins)</span>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-gray-100 bg-gray-50/50 flex gap-4">
                <button 
                  onClick={() => setIsFilterDrawerOpen(false)}
                  className="flex-1 h-12 rounded-2xl bg-white border border-gray-200 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-gray-900 transition-all"
                >
                  Reset
                </button>
                <button 
                  onClick={() => setIsFilterDrawerOpen(false)}
                  className="flex-[2] h-12 rounded-2xl bg-primary text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-primary/20 hover:scale-105 transition-all"
                >
                  Apply Filters
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
