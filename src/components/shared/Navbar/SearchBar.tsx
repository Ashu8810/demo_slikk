"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, TrendingUp, Clock, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function SearchBar() {
  const [isFocused, setIsFocused] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="relative w-full max-w-3xl group">
      {/* Search Input Container */}
      <motion.div
        animate={{
          scale: isFocused ? 1.01 : 1,
          boxShadow: isFocused ? "0 10px 40px -10px rgba(0, 0, 0, 0.08)" : "0 2px 10px -2px rgba(0, 0, 0, 0.02)"
        }}
        className={cn(
          "relative flex items-center bg-gray-50 border transition-all duration-500 rounded-[20px] overflow-hidden",
          isFocused ? "border-primary/40 bg-white" : "border-gray-100"
        )}
      >
        <div className="pl-5 text-gray-400 group-focus-within:text-primary transition-colors duration-300">
          <Search size={20} strokeWidth={2.5} />
        </div>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          placeholder="Search for decor, furniture, or lamps..."
          className="w-full h-14 bg-transparent border-none outline-none px-4 text-[15px] font-bold text-gray-900 placeholder:text-gray-400 placeholder:font-medium"
        />
        <div className="pr-4 flex items-center gap-3">
          {query && (
            <button onClick={() => setQuery("")} className="p-1.5 hover:bg-gray-100 rounded-full text-gray-400 transition-colors">
              <X size={16} strokeWidth={3} />
            </button>
          )}
          <div className="w-px h-6 bg-gray-200 hidden sm:block" />
          <kbd className="hidden sm:inline-flex h-7 select-none items-center gap-1 rounded-xl border bg-white px-2.5 font-mono text-[10px] font-black text-gray-400 shadow-sm">
            <span className="text-xs">⌘</span>K
          </kbd>
        </div>
      </motion.div>

      {/* Suggestions Dropdown */}
      <AnimatePresence>
        {isFocused && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full mt-2 left-0 right-0 bg-white rounded-2xl shadow-premium border border-gray-100 z-50 overflow-hidden"
          >
            <div className="p-4">
              {!query ? (
                <>
                  <div className="mb-4">
                    <h5 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Trending Searches</h5>
                    <div className="flex flex-wrap gap-2">
                      {["Desk Lamp", "Wall Art", "Ceramic Vase", "Aesthetic Rugs"].map((tag) => (
                        <button key={tag} className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 hover:bg-primary/5 hover:text-primary rounded-full text-xs font-bold text-gray-600 transition-colors">
                          <TrendingUp size={12} />
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Recent Searches</h5>
                    <div className="space-y-1">
                      {["Vintage Denim", "Summer Blazers"].map((item) => (
                        <button key={item} className="w-full flex items-center gap-3 px-2 py-2 hover:bg-gray-50 rounded-xl transition-colors text-left group">
                          <Clock size={14} className="text-gray-300 group-hover:text-primary" />
                          <span className="text-sm font-medium text-gray-600">{item}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <div className="space-y-1">
                  {[1, 2, 3].map((i) => (
                    <button key={i} className="w-full flex items-center justify-between px-3 py-3 hover:bg-primary/5 rounded-xl transition-colors group">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400 group-hover:text-primary group-hover:bg-white transition-colors">
                          <Search size={16} />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-900">{query} in <span className="text-primary">New Arrivals</span></p>
                          <p className="text-[10px] text-gray-400 font-bold uppercase">500+ items available</p>
                        </div>
                      </div>
                      <ArrowRight size={16} className="text-gray-300 group-hover:text-primary transition-transform group-hover:translate-x-1" />
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="bg-gray-50 px-4 py-3 border-t border-gray-100 flex items-center justify-between">
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wide">Quick discovery enabled</span>
              <button className="text-[10px] text-primary font-bold uppercase hover:underline">View All Trends</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
