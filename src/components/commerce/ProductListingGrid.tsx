"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ShoppingBag, Zap, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const PRODUCTS = [
  {
    id: "p1",
    name: "Minimalist Arc Floor Lamp",
    brand: "Lumiere",
    price: "₹4,299",
    oldPrice: "₹6,499",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=500&h=700&q=80",
    eta: "15 mins",
    rating: 4.8,
    badge: "Best Seller"
  },
  {
    id: "p2",
    name: "Velvet Throw Pillow",
    brand: "Nordic Soft",
    price: "₹1,299",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=500&h=700&q=80",
    eta: "12 mins",
    rating: 4.9,
    badge: "Exclusive"
  },
  {
    id: "story-1",
    type: "story",
    title: "The Art of Slow Living",
    description: "Discover how lighting changes the mood of your evening ritual.",
    image: "https://images.unsplash.com/photo-1513519247388-4e28205d274c?auto=format&fit=crop&w=800&h=1000&q=80",
    link: "/journal/slow-living"
  },
  {
    id: "p3",
    name: "Abstract Wall Art Set",
    brand: "Canvasify",
    price: "₹1,899",
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=500&h=700&q=80",
    eta: "20 mins",
    rating: 4.7
  },
  {
    id: "banner-1",
    type: "banner",
    title: "The Creator Desk Setup",
    description: "Curated essentials for your ultimate workspace.",
    image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=1200&h=400&q=80",
  },
  {
    id: "p4",
    name: "Mechanical Keyboard G2",
    brand: "Keychron",
    price: "₹7,999",
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=500&h=700&q=80",
    eta: "18 mins",
    rating: 5.0,
    badge: "Few Left"
  },
  {
    id: "p5",
    name: "Ergonomic Task Chair",
    brand: "ZenSeat",
    price: "₹12,499",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=500&h=700&q=80",
    eta: "30 mins",
    rating: 4.8
  },
  {
    id: "p6",
    name: "Terracotta Planter",
    brand: "GreenLeaf",
    price: "₹899",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=500&h=700&q=80",
    eta: "15 mins",
    rating: 4.6
  }
];

interface ProductListingGridProps {
  activeFilter: string;
}

export function ProductListingGrid({ activeFilter }: ProductListingGridProps) {
  // Simulate filtering logic
  const filteredProducts = PRODUCTS.filter(item => {
    if (activeFilter === "All Decor") return true;
    if (item.type === "banner") return true; // Keep banners
    
    // Simple mock logic: match brand or name (in real app, use category field)
    const query = activeFilter.toLowerCase();
    return item.name?.toLowerCase().includes(query) || 
           item.brand?.toLowerCase().includes(query) ||
           (activeFilter === "Lighting" && item.name?.toLowerCase().includes("lamp")) ||
           (activeFilter === "Furniture" && item.name?.toLowerCase().includes("chair")) ||
           (activeFilter === "Tech" && item.name?.toLowerCase().includes("keyboard")) ||
           (activeFilter === "Desk Setup" && (item.name?.toLowerCase().includes("lamp") || item.name?.toLowerCase().includes("keyboard")));
  });

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div 
          layout
          className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((item, idx) => {
              if (item.type === "banner") {
                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    viewport={{ once: true }}
                    className="col-span-2 lg:col-span-3 h-[300px] relative rounded-[40px] overflow-hidden group cursor-pointer"
                  >
                    <Image src={item.image!} alt={item.title!} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                      <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-black text-white uppercase tracking-widest border border-white/30 mb-6">
                        Seasonal Collection
                      </span>
                      <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">{item.title}</h3>
                      <p className="text-sm md:text-base text-white/80 font-medium max-w-lg mb-8">{item.description}</p>
                      <button className="px-8 py-3 bg-white text-gray-900 rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all">
                        Shop Now
                      </button>
                    </div>
                  </motion.div>
                );
              }

              if (item.type === "story") {
                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="col-span-1 aspect-[3/4] relative rounded-[32px] overflow-hidden group cursor-pointer bg-gray-900"
                  >
                    <Image src={item.image!} alt={item.title!} fill className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <span className="text-[9px] font-black text-primary uppercase tracking-[0.3em] mb-3">Editorial Journal</span>
                      <h3 className="text-2xl font-black text-white uppercase tracking-tight leading-none mb-4">{item.title}</h3>
                      <p className="text-[10px] text-white/60 font-bold uppercase tracking-widest leading-loose line-clamp-2">{item.description}</p>
                    </div>
                  </motion.div>
                );
              }

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: (idx % 3) * 0.05 }}
                  className="group flex flex-col"
                >
                  {/* Image Area */}
                  <div className="relative aspect-[3/4] rounded-[32px] overflow-hidden mb-6 bg-gray-50 border border-gray-100 block">
                    <Link href={`/product/${item.id}`} className="absolute inset-0">
                      <Image src={item.image!} alt={item.name!} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    </Link>
                    
                    {/* Badge */}
                    {item.badge && (
                      <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1.5 rounded-full z-10 shadow-lg shadow-primary/20">
                        <span className="text-[8px] font-black uppercase tracking-widest">{item.badge}</span>
                      </div>
                    )}

                    {/* Delivery Chip */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm border border-gray-100 z-10">
                      <Zap size={10} className="text-primary fill-primary" />
                      <span className="text-[9px] font-black text-gray-900 uppercase tracking-tight">{item.eta}</span>
                    </div>

                    {/* Wishlist */}
                    <button className="absolute bottom-20 right-4 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-gray-400 hover:text-primary transition-all shadow-sm z-10">
                      <Heart size={18} />
                    </button>

                    {/* Quick Add Overlay */}
                    <div className="absolute inset-x-4 bottom-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
                      <button className="w-full h-12 bg-gray-900 text-white rounded-2xl flex items-center justify-center gap-2 font-black text-[10px] uppercase tracking-widest shadow-xl hover:bg-primary transition-colors">
                        <ShoppingBag size={16} />
                        Quick Add
                      </button>
                    </div>
                  </div>

                  {/* Info Area */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.brand}</p>
                      <div className="flex items-center gap-1">
                        <Star size={10} className="text-amber-500 fill-amber-500" />
                        <span className="text-[10px] font-black text-gray-900">{item.rating}</span>
                      </div>
                    </div>
                    <Link href={`/product/${item.id}`}>
                      <h3 className="text-sm font-black text-gray-900 uppercase tracking-tight group-hover:text-primary transition-colors line-clamp-1">{item.name}</h3>
                    </Link>
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg font-black text-gray-900">{item.price}</span>
                      {item.oldPrice && (
                        <span className="text-xs text-gray-400 line-through font-medium">{item.oldPrice}</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Infinite Scroll Indicator */}
        <div className="mt-24 flex flex-col items-center gap-6">
           <div className="w-1.5 h-12 bg-gray-100 rounded-full relative overflow-hidden">
              <motion.div 
                animate={{ y: [0, 48] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 left-0 w-full h-1/2 bg-primary rounded-full"
              />
           </div>
           <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Loading More Lifestyle</p>
        </div>
      </div>
    </section>
  );
}

