"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Truck, Home } from "lucide-react";

export function StylizedMap() {
  // SVG Path for the delivery route
  const pathData = "M 50 400 Q 150 350 250 300 T 450 150 Q 550 100 750 50";
  
  return (
    <div className="relative w-full h-[500px] bg-[#F4F4F7] rounded-3xl overflow-hidden border border-gray-100 shadow-inner">
      {/* Map Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `radial-gradient(#7B61FF 1px, transparent 1px)`,
          backgroundSize: '32px 32px' 
        }} 
      />

      <svg viewBox="0 0 800 500" className="w-full h-full p-10">
        {/* Background Roads (Simplified) */}
        <path d="M 0 100 H 800 M 0 300 H 800 M 200 0 V 500 M 500 0 V 500" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="8 8" />
        
        {/* The Delivery Route - Background (Ghost) */}
        <path
          d={pathData}
          fill="none"
          stroke="#E5E7EB"
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* The Delivery Route - Animated (Primary) */}
        <motion.path
          d={pathData}
          fill="none"
          stroke="#7B61FF"
          strokeWidth="6"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 0.65 }} // Rider is 65% through the journey
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Dark Store Hub Marker */}
        <g transform="translate(50, 400)">
          <circle r="12" fill="#7B61FF" fillOpacity="0.1" />
          <motion.circle 
            r="6" 
            fill="#7B61FF" 
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <text y="-25" textAnchor="middle" className="text-[10px] font-black fill-gray-400 uppercase tracking-widest">Slikk Hub #04</text>
        </g>

        {/* Destination (Home) Marker */}
        <g transform="translate(750, 50)">
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
             <circle r="20" fill="#10B981" fillOpacity="0.1" />
             <circle r="8" fill="#10B981" />
          </motion.div>
          <text y="-30" textAnchor="middle" className="text-[10px] font-black fill-gray-900 uppercase tracking-widest">Your Home</text>
          <MapPin x="-8" y="-40" size={16} className="text-green-600" />
        </g>

        {/* Moving Rider Icon */}
        <motion.g
          initial={{ offsetDistance: "0%" }}
          animate={{ offsetDistance: "65%" }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          style={{ offsetPath: `path("${pathData}")` }}
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            <circle r="24" fill="white" className="shadow-lg" />
            <circle r="20" fill="#7B61FF" />
            <Truck x="-10" y="-10" size={20} className="text-white" />
          </motion.div>
          
          {/* Rider Label */}
          <g transform="translate(0, 40)">
            <rect x="-35" y="-10" width="70" height="20" rx="10" fill="white" className="shadow-sm" />
            <text textAnchor="middle" y="4" className="text-[9px] font-bold fill-gray-900 uppercase tracking-tight">Rahul (Rider)</text>
          </g>
        </motion.g>
      </svg>

      {/* Floating Info Overlays */}
      <div className="absolute top-6 left-6 flex flex-col gap-2">
        <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-premium border border-white flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-[10px] font-bold text-gray-900 uppercase tracking-widest">Live: Rider is moving</span>
        </div>
      </div>

      <div className="absolute bottom-6 right-6">
        <div className="bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-premium border border-white">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Current Speed</p>
          <p className="text-xl font-black text-primary italic leading-none">32 KM/H</p>
        </div>
      </div>
    </div>
  );
}
