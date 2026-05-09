"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Heart, Clock, ChevronRight, ChevronLeft, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const FEATURED_PRODUCTS = [
  {
    id: "fs-1",
    name: "Aesthetic Gradient Poster",
    brand: "Artify",
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=400&h=500&q=80",
    price: 499,
    originalPrice: 999,
    discount: "50% OFF",
    eta: "15 MINS",
  },
  {
    id: "fs-2",
    name: "Monstera Deliciosa",
    brand: "The Greenery",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=400&h=500&q=80",
    price: 1299,
    originalPrice: 2599,
    discount: "50% OFF",
    eta: "12 MINS",
  },
  {
    id: "fs-3",
    name: "Ceramic Donut Vase",
    brand: "Nordic Nest",
    image: "https://images.unsplash.com/photo-1612196808214-b9e1d614e380?auto=format&fit=crop&w=400&h=500&q=80",
    price: 899,
    originalPrice: 1799,
    discount: "50% OFF",
    eta: "18 MINS",
  },
  {
    id: "fs-4",
    name: "Sunset Projection Lamp",
    brand: "Lumina",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=400&h=500&q=80",
    price: 1499,
    originalPrice: 2999,
    discount: "50% OFF",
    eta: "20 MINS",
  },
  {
    id: "fs-5",
    name: "Irregular Wavy Mirror",
    brand: "Aura Decor",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=400&h=500&q=80",
    price: 2499,
    originalPrice: 4999,
    discount: "50% OFF",
    eta: "25 MINS",
  },
  {
    id: "fs-6",
    name: "Scented Soy Candle",
    brand: "Soul Scents",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=400&h=500&q=80",
    price: 599,
    originalPrice: 1199,
    discount: "50% OFF",
    eta: "10 MINS",
  },
];

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ h: 2, m: 45, s: 18 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.s > 0) return { ...prev, s: prev.s - 1 };
        if (prev.m > 0) return { ...prev, m: prev.m - 1, s: 59 };
        if (prev.h > 0) return { h: prev.h - 1, m: 59, s: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-1.5 ml-3">
      <div className="bg-red-500 text-white font-black text-[10px] w-6 h-6 flex items-center justify-center rounded-md shadow-sm">
        {String(timeLeft.h).padStart(2, '0')}
      </div>
      <span className="text-red-500 font-bold text-[10px]">:</span>
      <div className="bg-red-500 text-white font-black text-[10px] w-6 h-6 flex items-center justify-center rounded-md shadow-sm">
        {String(timeLeft.m).padStart(2, '0')}
      </div>
      <span className="text-red-500 font-bold text-[10px]">:</span>
      <div className="bg-red-500 text-white font-black text-[10px] w-6 h-6 flex items-center justify-center rounded-md shadow-sm">
        {String(timeLeft.s).padStart(2, '0')}
      </div>
    </div>
  );
}

export function FeaturedSection() {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white pt-4 pb-12 md:pt-6 md:pb-16 border-b border-gray-50">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 mr-4 shadow-sm border border-amber-100">
              <Sparkles size={20} className="fill-amber-600" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tight leading-none">
                Home Aesthetic
              </h2>
              <div className="flex items-center mt-1">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Ending in</span>
                <CountdownTimer />
              </div>
            </div>
          </div>

          <button className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full bg-gray-900 text-white text-[11px] font-black uppercase tracking-widest hover:bg-primary transition-all shadow-lg hover:scale-105 active:scale-95 group">
            View All
            <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Navigation Arrows (Desktop) */}
          <button 
            onClick={() => scroll('left')}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-premium border border-gray-100 flex items-center justify-center text-gray-900 opacity-0 group-hover:opacity-100 transition-all hover:bg-gray-50 md:flex hidden"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-premium border border-gray-100 flex items-center justify-center text-gray-900 opacity-0 group-hover:opacity-100 transition-all hover:bg-gray-50 md:flex hidden"
          >
            <ChevronRight size={20} />
          </button>

          {/* Product Rail */}
          <div 
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4 -mx-4 px-4 md:mx-0 md:px-0"
          >
            {FEATURED_PRODUCTS.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ y: -8 }}
                className="flex-shrink-0 w-[180px] md:w-[240px] bg-white rounded-[28px] p-2.5 border border-gray-100 shadow-sm hover:shadow-premium transition-all cursor-pointer group"
              >
                <Link href={`/product/${product.id}`} className="block">
                  {/* Image Area */}
                  <div className="relative aspect-[4/5] bg-[#F9F9F9] rounded-[22px] overflow-hidden mb-3">
                    <Image 
                      src={product.image} 
                      alt={product.name} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 180px, 240px"
                    />
                    
                    {/* Badges */}
                    <div className="absolute top-2.5 left-2.5">
                      <div className="bg-red-500 text-white text-[9px] font-black px-2.5 py-1 rounded-full shadow-lg uppercase tracking-wider">
                        {product.discount}
                      </div>
                    </div>

                    <button className="absolute top-2.5 right-2.5 w-8 h-8 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-gray-300 hover:text-red-500 hover:bg-white transition-all shadow-sm">
                      <Heart size={16} />
                    </button>

                    {/* ETA Chip */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5">
                      <div className="bg-white/90 backdrop-blur-md px-2.5 py-1.5 rounded-xl flex items-center gap-2 border border-white/50 shadow-sm">
                        <div className="w-4 h-4 bg-primary/10 rounded-full flex items-center justify-center">
                          <Zap size={10} className="text-primary fill-primary" />
                        </div>
                        <span className="text-[9px] font-black text-gray-900 uppercase tracking-tighter">
                          {product.eta}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Info Area */}
                  <div className="px-1.5 pb-1">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 leading-none">{product.brand}</p>
                    <h3 className="text-sm font-black text-gray-900 line-clamp-1 mb-2 tracking-tight">{product.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-black text-gray-900 leading-none">₹{product.price}</span>
                      <span className="text-xs font-bold text-gray-300 line-through">₹{product.originalPrice}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
            
            {/* View More Card */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="flex-shrink-0 w-[180px] md:w-[240px] bg-gray-50 rounded-[28px] p-6 flex flex-col items-center justify-center gap-4 group cursor-pointer border-2 border-dashed border-gray-200"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform">
                <ArrowRight size={24} />
              </div>
              <p className="text-[11px] font-black text-gray-900 uppercase tracking-widest text-center">View More Deals</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
