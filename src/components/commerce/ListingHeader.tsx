"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ListingHeaderProps {
  title: string;
  description: string;
  count: number;
  image: string;
}

export function ListingHeader({ title, description, count, image }: ListingHeaderProps) {
  return (
    <section className="relative h-[50vh] md:h-[65vh] min-h-[500px] flex items-center pt-24 overflow-hidden">
      {/* Background Image */}
      <Image 
        src={image} 
        alt={title} 
        fill 
        className="object-cover"
        priority
      />
      
      {/* Editorial Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-0" />
      <div className="absolute inset-0 backdrop-blur-[2px] opacity-20 z-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-[1px] bg-white/50" />
            <span className="text-[10px] font-black text-white uppercase tracking-[0.4em]">
              {count} Curated Products
            </span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tight leading-[0.9] mb-6">
            {title.split(" ").map((word, i) => (
              <span key={i} className={i === 1 ? "text-white/60 italic block" : "block"}>
                {word}
              </span>
            ))}
          </h1>
          
          <p className="text-sm md:text-base text-white/80 font-medium leading-relaxed max-w-lg mb-8">
            {description}
          </p>
          
          <div className="flex gap-4">
             <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                    <Image src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" width={40} height={40} />
                  </div>
                ))}
             </div>
             <div className="flex flex-col justify-center">
                <p className="text-[10px] font-black text-white uppercase tracking-wider">Trusted by 10k+</p>
                <p className="text-[9px] text-white/60 uppercase font-bold tracking-widest">Aesthetic Enthusiasts</p>
             </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom Curve */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white rounded-t-[48px]" />
    </section>
  );
}
