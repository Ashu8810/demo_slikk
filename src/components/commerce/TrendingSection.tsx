"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Flame, Zap } from "lucide-react";
import { ProductCard } from "./ProductCard";
import { FilterChip } from "@/components/ui/ecommerce-controls";
import { Button } from "@/components/ui/button";

const CATEGORIES = [
  "Trending",
  "Wall Art",
  "Rugs",
  "Lighting",
  "Furniture",
  "Vases"
];

const PRODUCTS = [
  {
    id: "p1",
    name: "Minimalist Arc Floor Lamp",
    brand: "Lumiere",
    price: 4299,
    originalPrice: 6499,
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=500&h=700&q=80",
    eta: "22 mins",
    rating: 4.8,
    isTrending: true,
    stockCount: 3
  },
  {
    id: "p2",
    name: "Velvet Throw Pillow",
    brand: "Nordic Soft",
    price: 1299,
    category: "Vases",
    description: "Fresh decor arrives at your doorstep, ready to style.",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=500&h=700&q=80",
    eta: "18 mins",
    rating: 4.9,
    isNew: true
  },
  {
    id: "p3",
    name: "Abstract Wall Art Set",
    brand: "Canvasify",
    price: 1899,
    originalPrice: 2499,
    category: "Wall Art",
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=500&h=700&q=80",
    eta: "28 mins",
    rating: 4.7,
    isTrending: true
  },
  {
    id: "p4",
    name: "Ceramic Donut Vase",
    brand: "Nordic Nest",
    price: 899,
    category: "Vases",
    image: "https://images.unsplash.com/photo-1612196808214-b9e1d614e380?auto=format&fit=crop&w=500&h=700&q=80",
    eta: "15 mins",
    rating: 4.6,
    stockCount: 2
  },
  {
    id: "p5",
    name: "Sunset Projection Lamp",
    brand: "Lumina",
    price: 1499,
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=500&h=700&q=80",
    eta: "30 mins",
    rating: 4.9,
    isTrending: true
  },
  {
    id: "p6",
    name: "Woven Texture Rug",
    brand: "Slikk Nest",
    price: 4499,
    category: "Rugs",
    image: "https://images.unsplash.com/photo-1575414003591-ece8d0416c7a?auto=format&fit=crop&w=500&h=700&q=80",
    eta: "20 mins",
    rating: 4.5,
    isNew: true
  }
];

export function TrendingSection() {
  const [activeCategory, setActiveCategory] = useState("Trending");

  const filteredProducts = PRODUCTS.filter(product => 
    activeCategory === "Trending" ? true : product.category === activeCategory
  );

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-primary font-black uppercase tracking-[0.2em] text-[10px] mb-4"
            >
              <div className="w-8 h-px bg-primary/30" />
              <Sparkles size={12} className="animate-pulse" />
              Live Discovery
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-[1.1]"
            >
              Decor <br /> Near You
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 font-medium text-lg"
            >
              Explore curated home collections optimized for the fast lane. Arriving in under 60 minutes.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <Button variant="outline" className="rounded-full px-6 group border-gray-100 hover:border-primary">
              View All Drops <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>

        {/* Category Filters */}
        <div className="flex overflow-x-auto pb-4 mb-10 no-scrollbar gap-3 -mx-4 px-4 md:mx-0 md:px-0">
          {CATEGORIES.map((category, idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <FilterChip 
                label={category} 
                active={activeCategory === category} 
                onClick={() => setActiveCategory(category)} 
              />
            </motion.div>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Quick Commerce Psychology Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 md:p-12 bg-gray-50 rounded-[40px] border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative"
        >
          {/* Decorative Elements */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

          <div className="relative z-10 flex items-center gap-6">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-premium flex items-center justify-center text-primary">
              <Zap size={32} className="fill-primary" />
            </div>
            <div>
              <h4 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Hyperlocal Speed</h4>
              <p className="text-xs text-gray-500 font-medium">Dedicated fragile-care handling</p>
              <p className="text-gray-500 font-bold uppercase text-[10px] tracking-[0.2em]">Inventory stored in 4 nearby hubs</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            {[
              { label: "18 Min Avg Delivery", icon: <Flame size={14} className="text-orange-500" /> },
              { label: "Real-time Tracking", icon: <ArrowRight size={14} /> },
              { label: "Nearby Inventory", icon: <Sparkles size={14} className="text-primary" /> }
            ].map((item, i) => (
              <div key={i} className="bg-white px-5 py-3 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3 text-xs font-black text-gray-900 uppercase tracking-tight">
                {item.icon}
                {item.label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
