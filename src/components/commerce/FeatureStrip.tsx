"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const FEATURES = [
  {
    image: "/images/generated/delivery_3d.png",
    label: "60 Min Delivery",
    subtext: "Fastest in town",
    color: "text-blue-500",
    bgColor: "bg-blue-50"
  },
  {
    image: "/images/generated/original_3d.png",
    label: "100% Original",
    subtext: "Direct from brands",
    color: "text-emerald-500",
    bgColor: "bg-emerald-50"
  },
  {
    image: "/images/generated/returns_3d.png",
    label: "Easy Returns",
    subtext: "No questions asked",
    color: "text-orange-500",
    bgColor: "bg-orange-50"
  },
  {
    image: "/images/generated/secure_3d.png",
    label: "Secure Payments",
    subtext: "100% safe & SSL",
    color: "text-indigo-500",
    bgColor: "bg-indigo-50"
  },
  {
    image: "/images/generated/store_3d.png",
    label: "Dark Store Network",
    subtext: "200+ micro-hubs",
    color: "text-rose-500",
    bgColor: "bg-rose-50"
  },
  {
    image: "/images/generated/support_3d.png",
    label: "24/7 Support",
    subtext: "Always here to help",
    color: "text-purple-500",
    bgColor: "bg-purple-50"
  }
];

export function FeatureStrip() {
  return (
    <section className="bg-white py-12 md:py-16 border-t border-b border-gray-50/50">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.21, 0.45, 0.32, 0.9]
              }}
              whileHover={{ y: -5 }}
              className={cn(
                "flex flex-col items-center text-center p-6 transition-all duration-500",
                "group cursor-default relative",
                // Subtle dividers for desktop
                index !== FEATURES.length - 1 && "lg:after:content-[''] lg:after:absolute lg:after:right-0 lg:after:top-1/4 lg:after:bottom-1/4 lg:after:w-[1px] lg:after:bg-gray-100/60"
              )}
            >
              {/* Image Container */}
              <div className={cn(
                "w-20 h-20 rounded-[28px] flex items-center justify-center mb-5 transition-all duration-500 relative overflow-hidden",
                "group-hover:shadow-2xl group-hover:shadow-current/10 group-hover:scale-110",
                feature.bgColor
              )}>
                <div className="relative w-14 h-14">
                  <Image 
                    src={feature.image} 
                    alt={feature.label}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                  />
                </div>
              </div>
              
              <div className="space-y-1.5">
                <h3 className="text-[11px] font-black text-gray-900 uppercase tracking-[0.15em] leading-tight">
                  {feature.label}
                </h3>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest opacity-60 transition-opacity group-hover:opacity-100">
                  {feature.subtext}
                </p>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gray-50/0 group-hover:bg-gray-50/50 rounded-[32px] -z-10 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
