"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Truck, 
  MapPin, 
  ChevronRight, 
  Clock, 
  CheckCircle2,
  Package
} from "lucide-react";
import { cn } from "@/lib/utils";

export function FloatingDeliveryBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-24 md:bottom-8 left-1/2 -translate-x-1/2 z-[60] w-[92%] max-w-4xl"
        >
          <div className="bg-white/90 backdrop-blur-xl border border-gray-100 shadow-premium rounded-[32px] p-2 md:p-3 flex items-center justify-between gap-4 group cursor-pointer hover:border-primary/30 transition-all duration-300">
            
            {/* Rider Identity & Progress */}
            <div className="flex items-center gap-3 md:gap-6 flex-1 min-w-0">
              <div className="relative shrink-0">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl overflow-hidden border-2 border-primary/10">
                   <Image 
                    src="https://i.pravatar.cc/150?u=rider" 
                    alt="Rider" 
                    width={56} 
                    height={56} 
                    className="object-cover"
                   />
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-black text-primary uppercase tracking-widest">Rahul is arriving</span>
                  <div className="w-1 h-1 bg-gray-200 rounded-full" />
                  <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest truncate">SLKK-8820 • 3 Items</span>
                </div>
                <div className="flex items-center gap-3">
                   <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: "0%" }}
                        animate={{ width: "75%" }}
                        transition={{ duration: 2.5, ease: "easeOut" }}
                        className="h-full bg-primary"
                      />
                   </div>
                   <span className="text-xs font-black text-gray-900 tracking-tighter whitespace-nowrap">ETA 8 MINS</span>
                </div>
              </div>
            </div>

            {/* Live Milestones (Desktop Only) */}
            <div className="hidden lg:flex items-center gap-8 px-8 border-l border-gray-100">
               {[
                 { icon: Package, label: "Packed", active: true },
                 { icon: Truck, label: "Moving", active: true, current: true },
                 { icon: CheckCircle2, label: "Done", active: false }
               ].map((step, i) => (
                 <div key={i} className="flex flex-col items-center gap-1">
                    <div className={cn(
                      "w-8 h-8 rounded-xl flex items-center justify-center transition-all",
                      step.current ? "bg-primary text-white shadow-lg shadow-primary/20" : 
                      step.active ? "bg-primary/10 text-primary" : "bg-gray-50 text-gray-300"
                    )}>
                      <step.icon size={14} strokeWidth={3} />
                    </div>
                    <span className={cn(
                      "text-[8px] font-black uppercase tracking-widest",
                      step.active ? "text-gray-900" : "text-gray-300"
                    )}>{step.label}</span>
                 </div>
               ))}
            </div>

            {/* Expand Action */}
            <div className="w-12 h-12 md:w-14 md:h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
               <ChevronRight size={20} />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
