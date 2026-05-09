"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Crown, Sparkles, Box, ShoppingBag, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SlikkPassSection() {
  const benefits = [
    "Unlimited FREE Delivery",
    "Extra 10% OFF on all orders",
    "Priority Support & Returns",
  ];

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#FDFCFE] via-[#F5F3FF] to-[#EBE9FE] border border-purple-100/50 p-8 md:p-12 shadow-premium"
        >
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 p-12 opacity-[0.03] text-purple-900 pointer-events-none">
            <ShoppingBag size={300} strokeWidth={0.5} />
          </div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-purple-200/50 shadow-sm mb-8">
                <Crown size={16} className="text-purple-600 fill-purple-600" />
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-purple-900">
                  Slikk Pass
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-[1.1] tracking-tight mb-6">
                Unlimited <span className="text-purple-600">FREE</span> <br className="hidden md:block" /> Delivery & More.
              </h2>

              <div className="space-y-4 mb-10">
                {benefits.map((benefit, i) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center shadow-lg shadow-purple-200">
                      <Check size={14} className="text-white" strokeWidth={3} />
                    </div>
                    <span className="text-base font-bold text-gray-700 tracking-tight">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <Button 
                size="lg" 
                className="rounded-full h-14 px-10 bg-purple-600 hover:bg-purple-700 text-white font-black uppercase tracking-widest text-xs shadow-xl shadow-purple-200 group transition-all"
              >
                Join Now for ₹199
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Right Illustration */}
            <div className="relative flex items-center justify-center">
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="relative z-20 w-64 h-64 md:w-80 md:h-80"
              >
                {/* Main 3D Box Illustration Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-white to-purple-50 rounded-[48px] shadow-2xl border border-white flex items-center justify-center overflow-hidden p-8">
                   <div className="w-32 h-32 bg-purple-600/5 rounded-full flex items-center justify-center blur-xl absolute" />
                   <div className="relative w-full h-full">
                     <Image 
                       src="https://pnghdpro.com/wp-content/themes/pnghdpro/download/social-media-and-brands/slikk-app-icon.png" 
                       alt="Slikk" 
                       fill 
                       className="object-contain"
                     />
                   </div>
                </div>

                {/* Floating Bits */}
                <motion.div
                  animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-purple-50"
                >
                  <Sparkles size={24} className="text-yellow-400 fill-yellow-400" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-6 -left-6 w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-purple-50"
                >
                  <ShoppingBag size={30} className="text-purple-600" />
                </motion.div>
              </motion.div>

              {/* Glow Effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-400/20 rounded-full blur-[100px] pointer-events-none" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
