"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Zap, TrendingUp, Sparkles, Heart, CreditCard, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  badge?: string;
  viewAllHref?: string;
}

const SectionHeader = ({ title, badge, viewAllHref = "#" }: SectionHeaderProps) => (
  <div className="flex items-center justify-between mb-5">
    <div className="flex items-center gap-3">
      <h2 className="text-xl md:text-2xl font-outfit font-black text-gray-900 tracking-tight">{title}</h2>
      {badge && (
        <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-black rounded-md uppercase tracking-wider">
          {badge}
        </span>
      )}
    </div>
    <a href={viewAllHref} className="group flex items-center gap-1 text-[11px] font-black text-primary uppercase tracking-widest hover:gap-2 transition-all">
      View All
      <ChevronRight size={14} />
    </a>
  </div>
);

export function DiscoveryGrid() {
  return (
    <section className="px-4 md:px-8 py-8">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          
          {/* 1. TRENDING DEALS (Large Card - 2x2 Grid) */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="lg:col-span-1 xl:col-span-1 bg-white rounded-[32px] p-6 shadow-premium border border-gray-50 flex flex-col"
          >
            <SectionHeader title="Trending Deals" badge="Flash" />
            <div className="grid grid-cols-2 gap-3 flex-grow">
              {[
                "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=300&h=300&q=80",
                "https://images.unsplash.com/photo-1612196808214-b9e1d614e380?auto=format&fit=crop&w=300&h=300&q=80",
                "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=300&h=300&q=80",
                "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=300&h=300&q=80"
              ].map((img, i) => (
                <Link href={`/product/decor-${i}`} key={i} className="group relative aspect-square bg-gray-50 rounded-2xl overflow-hidden cursor-pointer block">
                   <Image 
                    src={img} 
                    alt="Decor Deal" 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute top-2 left-2 px-1.5 py-0.5 bg-red-500 text-white text-[8px] font-black rounded-md uppercase">
                    40% OFF
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-50">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Ending in</p>
              <p className="text-sm font-black text-gray-900">02:45:18</p>
            </div>
          </motion.div>

          {/* 2. NEW ARRIVALS (Curated Selection) */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="lg:col-span-1 xl:col-span-1 bg-[#FDFCFE] rounded-[32px] p-6 shadow-premium border border-purple-50 flex flex-col"
          >
            <SectionHeader title="New Arrivals" badge="Fresh" />
            <div className="space-y-4 flex-grow">
              {[
                { id: "new-1", name: "Sunset Glow Lamp", price: "₹1,499", img: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&w=300&h=300&q=80" },
                { id: "new-2", name: "Woven Texture Pillow", price: "₹899", img: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=300&h=300&q=80" },
                { id: "new-3", name: "Wavy Aesthetic Mirror", price: "₹2,899", img: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=300&h=300&q=80" }
              ].map((item, idx) => (
                <Link href={`/product/${item.id}`} key={idx} className="flex items-center gap-4 group cursor-pointer block">
                  <div className="relative w-16 h-16 bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 p-2">
                    <Image src={item.img} alt={item.name} fill className="object-contain" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900 group-hover:text-primary transition-colors">{item.name}</h4>
                    <p className="text-sm font-black text-gray-900">{item.price}</p>
                  </div>
                  <button className="ml-auto p-2 bg-white rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-all border border-gray-50">
                    <Zap size={12} className="text-primary fill-primary" />
                  </button>
                </Link>
              ))}
            </div>
            <Button variant="ghost" className="mt-4 w-full rounded-xl bg-purple-50/50 text-primary font-black text-[10px] uppercase tracking-widest hover:bg-purple-50 transition-all">
              Discover Drops
            </Button>
          </motion.div>

          {/* 3. CREATOR PICKS (Style Discovery) */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="lg:col-span-1 xl:col-span-1 bg-white rounded-[32px] p-6 shadow-premium border border-gray-50 flex flex-col"
          >
            <SectionHeader title="Creator Picks" badge="Hot" />
            <div className="space-y-4 flex-grow">
              {[
                { name: "Aria's Desk Mix", type: "Setup", img: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=300&h=300&q=80" },
                { name: "Leo's Studio Chair", type: "Furniture", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=300&h=300&q=80" },
                { name: "Zoe's Wall Art", type: "Decor", img: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=300&h=300&q=80" }
              ].map((pick, idx) => (
                <div key={idx} className="flex items-center gap-4 group cursor-pointer">
                  <div className="relative w-14 h-14 bg-gray-50 rounded-full overflow-hidden border-2 border-white shadow-sm">
                    <Image src={pick.img} alt={pick.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-gray-900 group-hover:text-primary transition-colors uppercase tracking-tight">{pick.name}</h4>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{pick.type}</p>
                  </div>
                  <button className="ml-auto w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:text-primary transition-colors">
                    <ArrowRight size={14} />
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-gray-900 rounded-2xl flex items-center justify-between relative overflow-hidden group cursor-pointer">
               <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="relative z-10">
                 <p className="text-[9px] font-black text-white/50 uppercase tracking-widest mb-0.5">Live Now</p>
                 <p className="text-xs font-black text-white uppercase tracking-tight">Watch Slikk Live</p>
               </div>
               <TrendingUp size={16} className="text-white relative z-10" />
            </div>
          </motion.div>

          {/* 4. FOR YOU & OFFERS (Stacked) */}
          <div className="lg:col-span-1 xl:col-span-1 flex flex-col gap-6">
            {/* Bank Offer Card */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-primary to-[#7C3AED] rounded-[32px] p-5 shadow-lg shadow-primary/20 text-white relative overflow-hidden group cursor-pointer"
            >
              <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700" />
              <div className="relative z-10">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-4 backdrop-blur-md">
                  <CreditCard size={20} className="text-white" />
                </div>
                <h3 className="text-lg font-outfit font-black mb-1">Instant 10% Off</h3>
                <p className="text-[11px] font-medium text-white/80 leading-relaxed mb-4">On all HDFC Credit Cards.<br />Min purchase ₹1,999</p>
                <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest">
                  Use Code: SLIKKHDFC
                  <ArrowRight size={12} />
                </div>
              </div>
            </motion.div>

            {/* Top Pick Small Card */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="bg-white rounded-[32px] p-5 shadow-premium border border-gray-50 flex-grow"
            >
               <div className="flex items-center justify-between mb-4">
                 <h4 className="text-sm font-black text-gray-900">Your Top Pick</h4>
                 <Heart size={14} className="text-red-500 fill-red-500" />
               </div>
                 <div className="flex items-center gap-4">
                  <div className="relative w-20 h-20 bg-gray-50 rounded-2xl overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1513519245088-0e12902e35ca?auto=format&fit=crop&w=300&h=300&q=80" alt="Pick" fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Recommended</p>
                    <h5 className="text-xs font-black text-gray-900 mb-2">Modern Slate Sofa</h5>
                    <p className="text-sm font-black text-primary">₹24,999</p>
                  </div>
                </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

const Button = ({ children, className, variant = "primary" }: { children: React.ReactNode, className?: string, variant?: "primary" | "ghost" | "outline" }) => {
  return (
    <button className={cn(
      "px-4 py-2 rounded-lg font-bold transition-all active:scale-95",
      variant === "primary" && "bg-primary text-white shadow-md hover:bg-primary/90",
      variant === "ghost" && "bg-transparent hover:bg-gray-100 text-gray-600",
      variant === "outline" && "border-2 border-primary text-primary hover:bg-primary/5",
      className
    )}>
      {children}
    </button>
  );
};
