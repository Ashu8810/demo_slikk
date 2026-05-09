"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingBag, Star, Zap } from "lucide-react";

const RECOMMENDATIONS = [
  {
    id: "r1",
    name: "Minimalist Arc Lamp",
    price: "₹4,299",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=400&h=500&q=80",
    brand: "Lumiere",
    eta: "15 mins"
  },
  {
    id: "r2",
    name: "Abstract Wall Art",
    price: "₹1,899",
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=400&h=500&q=80",
    brand: "Canvasify",
    eta: "20 mins"
  },
  {
    id: "r3",
    name: "Ceramic Planter",
    price: "₹1,499",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=400&h=500&q=80",
    brand: "GreenLeaf",
    eta: "12 mins"
  },
  {
    id: "r4",
    name: "Linen Throw Pillow",
    price: "₹899",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=400&h=500&q=80",
    brand: "SoftHome",
    eta: "10 mins"
  }
];

export function SimilarProducts() {
  return (
    <section className="py-24 border-t border-gray-100">
      <div className="space-y-12">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-2">Complete the Setup</h2>
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Curated for your aesthetic</p>
          </div>
          <Link href="/shop" className="text-xs font-black text-primary uppercase tracking-widest hover:underline">
            View Collection
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {RECOMMENDATIONS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col"
            >
              <Link href={`/product/${item.id}`} className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 mb-4 block">
                <Image src={item.image} alt={item.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                   <Zap size={10} className="text-primary fill-primary" />
                   <span className="text-[9px] font-black text-gray-900 uppercase">{item.eta}</span>
                </div>

                <div className="absolute inset-x-3 bottom-3 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all z-10">
                   <button className="w-full h-10 bg-gray-900 text-white rounded-xl flex items-center justify-center gap-2 font-black text-[9px] uppercase tracking-widest hover:bg-primary transition-colors shadow-lg">
                      <ShoppingBag size={14} />
                      Quick Add
                   </button>
                </div>
              </Link>

              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.brand}</p>
                  <div className="flex items-center gap-0.5 text-amber-500">
                    <Star size={10} fill="currentColor" />
                    <span className="text-[10px] font-black text-gray-900">4.9</span>
                  </div>
                </div>
                <h3 className="text-sm font-black text-gray-900 uppercase tracking-tight group-hover:text-primary transition-colors truncate">
                  {item.name}
                </h3>
                <p className="text-sm font-black text-gray-900">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
