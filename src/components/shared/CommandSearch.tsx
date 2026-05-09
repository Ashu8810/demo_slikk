"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, TrendingUp, History, Shirt, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function CommandSearch({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onClose(); // Toggle logic would be outside, but for simplicity
      }
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
        >
          <div className="flex items-center px-4 py-4 border-b border-gray-100">
            <Search className="text-gray-400 mr-3" size={20} />
            <input
              autoFocus
              placeholder="Search for collections, brands, or items..."
              className="flex-1 bg-transparent border-none outline-none text-lg text-gray-900 placeholder:text-gray-400"
            />
            <button 
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-lg text-gray-400 transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          <div className="max-h-[60vh] overflow-y-auto p-4">
            {/* Quick Links */}
            <div className="mb-6">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-2">Recent Searches</h3>
              <div className="space-y-1">
                {["Minimalist Vase", "Desk Lamp", "Abstract Wall Art"].map((item) => (
                  <button key={item} className="w-full flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-xl transition-colors text-gray-600 group">
                    <History size={16} className="text-gray-300 group-hover:text-primary" />
                    <span className="text-sm font-medium">{item}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Trending */}
            <div className="mb-6">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-2">Trending Now</h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: "Lamps & Lighting", icon: Zap },
                  { label: "Wall Art", icon: Sparkles },
                  { label: "Vases & Decor", icon: Sparkles },
                  { label: "Furniture", icon: History },
                ].map((item) => (
                  <button key={item.label} className="flex items-center gap-3 px-3 py-3 border border-gray-50 hover:border-primary/20 hover:bg-primary/5 rounded-xl transition-all text-left group">
                    <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400 group-hover:text-primary group-hover:bg-white transition-colors">
                      <item.icon size={16} />
                    </div>
                    <span className="text-sm font-bold text-gray-700">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Premium Suggestion */}
            <div className="bg-primary/5 rounded-2xl p-4 border border-primary/10 flex items-center justify-between group cursor-pointer hover:bg-primary/10 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Slikk Pro Early Access</h4>
                  <p className="text-xs text-gray-500 font-medium">Free delivery on every order</p>
                </div>
              </div>
              <ArrowRight size={20} className="text-primary translate-x-0 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          <div className="bg-gray-50 px-4 py-3 border-t border-gray-100 flex items-center justify-between">
             <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded border bg-white text-[10px] font-mono text-gray-500">ESC</kbd>
                  <span className="text-[10px] text-gray-400 font-bold uppercase">to close</span>
                </div>
                <div className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded border bg-white text-[10px] font-mono text-gray-500">↵</kbd>
                  <span className="text-[10px] text-gray-400 font-bold uppercase">to select</span>
                </div>
             </div>
             <span className="text-[10px] text-gray-400 font-bold uppercase">Powered by Slikk Search</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
