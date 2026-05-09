"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ChevronRight, 
  Clock, 
  ShieldCheck, 
  Zap, 
  MapPin, 
  Star, 
  ShoppingBag,
  ArrowUpRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "@/components/commerce/ProductCard";
import { DeliveryTrackingCard } from "@/components/commerce/DeliveryTrackingCard";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 md:px-8 overflow-hidden bg-white">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-bl-[120px] -z-0" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-0 opacity-50" />
      
      <div className="max-w-screen-2xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Badge variant="premium" className="mb-6 h-8 px-4 text-[11px] font-black uppercase tracking-[0.2em]">
                <Zap size={12} className="mr-2 fill-white" /> Quick-Commerce Revolution
              </Badge>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-outfit font-black text-gray-900 leading-[0.9] tracking-tighter mb-8">
              Decor <br />
              delivered in <br />
              <span className="text-primary italic">60 minutes.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-xl leading-relaxed font-medium">
              Slikk brings the world's most trending decor to your doorstep instantly. Hyperlocal, curated, and dangerously fast.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <Button size="lg" className="rounded-2xl text-lg px-10 shadow-premium h-16 min-w-[220px]">
                Shop Latest Decor <ArrowUpRight className="ml-2" size={20} />
              </Button>
              <Button variant="secondary" size="lg" className="rounded-2xl text-lg px-10 h-16 border-primary/10">
                Explore Trends
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-10">
              <div className="flex items-center gap-3 group cursor-default">
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Clock size={22} />
                </div>
                <div>
                  <h4 className="text-sm font-black text-gray-900 uppercase tracking-tight">10-15 Min</h4>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Fastest Fulfillment</p>
                </div>
              </div>
              <div className="flex items-center gap-3 group cursor-default">
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Star size={22} />
                </div>
                <div>
                  <h4 className="text-sm font-black text-gray-900 uppercase tracking-tight">Curation</h4>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Premium Selection</p>
                </div>
              </div>
              <div className="flex items-center gap-3 group cursor-default">
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <h4 className="text-sm font-black text-gray-900 uppercase tracking-tight">Authentic</h4>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">100% Original</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Visual Stack (Realistic UI) */}
          <div className="relative hidden lg:block">
            {/* Background Circle Blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10" />

            <div className="relative h-[700px] w-full">
              
              {/* Product Card - Top Right */}
              <motion.div
                initial={{ opacity: 0, y: 40, rotate: 5 }}
                animate={{ opacity: 1, y: 0, rotate: 5 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="absolute top-0 right-0 w-[300px] shadow-2xl"
              >
                <ProductCard 
                  id="hero-p1"
                  name="Minimalist Arc Lamp"
                  brand="Lumiere"
                  price={4299}
                  originalPrice={6500}
                  image="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=500&h=700&q=80"
                  category="Lighting"
                  eta="12 mins"
                  rating={4.9}
                  isNew
                />
              </motion.div>

              {/* Delivery Tracking Card - Bottom Left */}
              <motion.div
                initial={{ opacity: 0, x: -40, rotate: -3 }}
                animate={{ opacity: 1, x: 0, rotate: -3 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="absolute bottom-10 left-0 w-[400px] shadow-2xl z-20"
              >
                <DeliveryTrackingCard 
                  orderId="SL-8821"
                  status="shipping"
                  eta="6 mins"
                  rider={{ name: "Rahul S.", rating: 4.8 }}
                />
              </motion.div>

              {/* Mini App UI Interaction - Center */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 0.8, 
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 3
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none"
              >
                <div className="bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white flex items-center gap-4 min-w-[240px]">
                   <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white">
                      <ShoppingBag size={24} />
                   </div>
                   <div>
                     <p className="text-xs font-black text-gray-900 uppercase">New Order Received</p>
                     <p className="text-[10px] text-gray-500 font-bold uppercase">Processing at Sector 42 Hub</p>
                   </div>
                   <div className="ml-auto w-2 h-2 bg-primary rounded-full animate-ping" />
                </div>
              </motion.div>

              {/* Hyperlocal Pin - Top Left */}
              <motion.div
                 initial={{ opacity: 0, y: -20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 1, duration: 1 }}
                 className="absolute top-20 left-10 bg-white shadow-xl rounded-full px-4 py-2 border border-gray-100 flex items-center gap-2 z-10"
              >
                <MapPin size={14} className="text-primary" />
                <span className="text-[10px] font-black text-gray-900 uppercase tracking-wider">Chennai Dark Store Hub #04</span>
              </motion.div>

            </div>
          </div>

          {/* MOBILE VISUAL (Simplified) */}
          <div className="lg:hidden mt-12 grid grid-cols-1 gap-6">
             <DeliveryTrackingCard 
                orderId="SL-8821"
                status="shipping"
                eta="6 mins"
                rider={{ name: "Rahul S.", rating: 4.8 }}
              />
          </div>

        </div>
      </div>
    </section>
  );
}
