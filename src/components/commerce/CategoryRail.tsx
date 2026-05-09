"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  { 
    id: "room-decor", 
    label: "Room Decor", 
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?auto=format&fit=crop&w=300&h=300&q=80",
    color: "bg-blue-100" 
  },
  { 
    id: "furniture", 
    label: "Furniture", 
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=300&h=300&q=80",
    color: "bg-orange-100" 
  },
  { 
    id: "desk-setup", 
    label: "Desk Setup", 
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=300&h=300&q=80",
    color: "bg-green-100" 
  },
  { 
    id: "lighting", 
    label: "Lighting", 
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=300&h=300&q=80",
    color: "bg-yellow-100" 
  },
  { 
    id: "plants", 
    label: "Plants", 
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=300&h=300&q=80",
    color: "bg-emerald-100" 
  },
  { 
    id: "wall-art", 
    label: "Wall Art", 
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=300&h=300&q=80",
    color: "bg-purple-100" 
  },
  { 
    id: "mirrors", 
    label: "Mirrors", 
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=300&h=300&q=80",
    color: "bg-red-100" 
  },
  { 
    id: "storage", 
    label: "Storage", 
    image: "https://images.unsplash.com/photo-1594409445294-c440f4dfdf57?auto=format&fit=crop&w=300&h=300&q=80",
    color: "bg-amber-100" 
  },
  { 
    id: "posters", 
    label: "Posters", 
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=300&h=300&q=80",
    color: "bg-cyan-100" 
  },
  { 
    id: "rugs", 
    label: "Rugs", 
    image: "https://images.unsplash.com/photo-1575414003591-ece8d0416c7a?auto=format&fit=crop&w=300&h=300&q=80",
    color: "bg-rose-100" 
  },
  { 
    id: "candles", 
    label: "Candles", 
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=300&h=300&q=80",
    color: "bg-indigo-100" 
  },
  { 
    id: "more", 
    label: "More", 
    icon: MoreHorizontal, 
    color: "bg-gray-100" 
  },
];

export function CategoryRail() {
  const [activeId, setActiveId] = useState("for-you");

  return (
    <section className="bg-white mt-[100px] border-b border-gray-50 sticky top-[80px] z-40">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
        <div className="overflow-x-auto no-scrollbar py-3">
          <div className="flex items-center justify-start gap-4 md:gap-8 lg:gap-10 xl:gap-12 min-w-max md:w-fit md:mx-auto px-4 md:px-12">
            {CATEGORIES.map((category) => {
              const isActive = activeId === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveId(category.id)}
                  className="flex flex-col items-center gap-2 min-w-[70px] group relative pb-1"
                >
                  {/* Image/Icon Container */}
                  <motion.div
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                      "w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden flex items-center justify-center transition-all duration-500 relative ring-2 ring-transparent group-hover:ring-primary/20",
                      isActive ? "ring-primary shadow-premium scale-105" : "shadow-sm grayscale-[0.3] group-hover:grayscale-0",
                      category.color
                    )}
                  >
                    {(() => {
                      if (category.image) {
                        return (
                          <div className="relative w-full h-full">
                            <Image 
                              src={category.image} 
                              alt={category.label}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 48px, 56px"
                            />
                          </div>
                        );
                      }
                      if (category.icon) {
                        const Icon = category.icon;
                        return <Icon size={20} className="text-gray-400 group-hover:text-primary transition-colors" />;
                      }
                      return null;
                    })()}
                    
                    {/* Active Overlays */}
                    {isActive && (
                      <motion.div
                        layoutId="categoryGlow"
                        className="absolute inset-0 bg-primary/10 rounded-full"
                      />
                    )}
                  </motion.div>

                  {/* Label */}
                  <span className={cn(
                    "text-[9px] md:text-[10px] font-black uppercase tracking-[0.1em] transition-colors duration-300",
                    isActive ? "text-primary" : "text-gray-400 group-hover:text-gray-900"
                  )}>
                    {category.label}
                  </span>

                  {/* Active Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="categoryIndicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
