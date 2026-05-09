"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const topCategories = [
  { name: "Posters", image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=300&h=300&q=80" },
  { name: "Plants", image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=300&h=300&q=80" },
  { name: "Vases", image: "https://images.unsplash.com/photo-1612196808214-b9e1d614e380?auto=format&fit=crop&w=300&h=300&q=80" },
  { name: "Lamps", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=300&h=300&q=80" },
  { name: "Mirrors", image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=300&h=300&q=80" },
  { name: "Cushions", image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=300&h=300&q=80" },
  { name: "Candles", image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=300&h=300&q=80" },
  { name: "Wall Art", image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=300&h=300&q=80" },
  { name: "Clocks", image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=300&h=300&q=80" },
  { name: "Rugs", image: "https://images.unsplash.com/photo-1575414003591-ece8d0416c7a?auto=format&fit=crop&w=300&h=300&q=80" },
  { name: "Furniture", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=300&h=300&q=80" },
  { name: "Lighting", image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=300&h=300&q=80" },
  { name: "Sculptures", image: "https://images.unsplash.com/photo-1544413647-b51049302d7d?auto=format&fit=crop&w=300&h=300&q=80" },
];

export function TopCategoryRail() {
  return (
    <section className="pt-8 pb-2 md:pt-10 md:pb-4 bg-white overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-gray-900">
            Top Categories
          </h2>
          <button className="px-4 py-1.5 rounded-full border border-gray-100 text-[10px] font-black uppercase tracking-widest text-primary hover:bg-primary/5 transition-all">
            View All
          </button>
        </div>

        <div className="relative">
          {/* Scroll Container */}
          <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
            {topCategories.map((category, idx) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.03, duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="flex flex-col items-center gap-3 shrink-0 group cursor-pointer"
              >
                {/* Circular Image Container */}
                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden bg-gray-50 border-[2px] border-transparent group-hover:border-primary transition-all duration-300 shadow-md">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 80px, 96px"
                  />
                </div>
                
                {/* Label */}
                <span className="text-[10px] font-bold text-gray-900 group-hover:text-primary uppercase tracking-widest transition-colors text-center">
                  {category.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};
