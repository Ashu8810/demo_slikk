"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShoppingBag, 
  MapPin, 
  Database, 
  UserCheck, 
  Navigation, 
  PackageCheck,
  Zap,
  ArrowRight,
  ShieldCheck,
  Cpu
} from "lucide-react";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    id: 1,
    title: "Order Placed",
    description: "AI instantly analyzes your location and style preference.",
    icon: ShoppingBag,
    color: "text-purple-500",
    bg: "bg-purple-50",
    stat: "Instant",
    label: "Order Verification"
  },
  {
    id: 2,
    title: "Hub Selected",
    description: "The nearest Slikk Dark Store (within 3km) is triggered.",
    icon: MapPin,
    color: "text-blue-500",
    bg: "bg-blue-50",
    stat: "< 10s",
    label: "Hyperlocal Dispatch"
  },
  {
    id: 3,
    title: "Inventory Sync",
    description: "Real-time stock verification at the selected local hub.",
    icon: Database,
    color: "text-orange-500",
    bg: "bg-orange-50",
    stat: "Live",
    label: "SKU Verification"
  },
  {
    id: 4,
    title: "Rider Assigned",
    description: "Our proprietary algorithm selects the best rider nearby.",
    icon: UserCheck,
    color: "text-green-500",
    bg: "bg-green-50",
    stat: "Fastest",
    label: "Rider Matching"
  },
  {
    id: 5,
    title: "Smart Routing",
    description: "Traffic-aware paths generated for sub-60 min delivery.",
    icon: Navigation,
    color: "text-red-500",
    bg: "bg-red-50",
    stat: "Optimized",
    label: "Path Generation"
  },
  {
    id: 6,
    title: "Delivered",
    description: "Fresh decor arrives at your doorstep, ready to style.",
    icon: PackageCheck,
    color: "text-primary",
    bg: "bg-primary/5",
    stat: "< 60m",
    label: "Final fulfillment"
  }
];

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-primary font-black uppercase tracking-[0.2em] text-[10px] mb-4"
          >
            <Cpu size={14} className="animate-pulse" />
            Operational Infrastructure
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-[1.1]"
          >
            How Slikk <span className="text-primary italic">Actually</span> Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 font-medium text-lg"
          >
            Powered by hyperlocal fulfillment hubs and intelligent delivery infrastructure that moves at the speed of your life.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Interactive Timeline */}
          <div className="lg:col-span-5 space-y-4">
            {STEPS.map((step) => (
              <motion.div
                key={step.id}
                onMouseEnter={() => setActiveStep(step.id)}
                className={cn(
                  "p-6 rounded-[24px] cursor-pointer transition-all duration-500 border",
                  activeStep === step.id 
                    ? "bg-white border-primary shadow-premium scale-[1.02] z-10" 
                    : "bg-transparent border-transparent opacity-60 hover:opacity-100"
                )}
              >
                <div className="flex gap-5">
                  <div className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors duration-500",
                    activeStep === step.id ? step.bg : "bg-gray-50"
                  )}>
                    <step.icon size={24} className={activeStep === step.id ? step.color : "text-gray-400"} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                       <span className="text-[10px] font-black text-primary uppercase tracking-widest">Step 0{step.id}</span>
                       <div className="w-1 h-1 bg-gray-200 rounded-full" />
                       <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{step.label}</span>
                    </div>
                    <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight">{step.title}</h3>
                    {activeStep === step.id && (
                      <motion.p 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="text-gray-500 text-sm font-medium mt-1 leading-relaxed"
                      >
                        {step.description}
                      </motion.p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side: Infrastructure Visualization */}
          <div className="lg:col-span-7 relative h-[600px] bg-gray-50/50 rounded-[48px] border border-gray-100 overflow-hidden flex items-center justify-center p-8">
             {/* Dynamic Background Elements */}
             <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-primary/10 rounded-full animate-[spin_20s_linear_infinite]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-primary/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
             </div>

             <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  className="relative z-10 w-full max-w-md bg-white rounded-[40px] shadow-premium p-10 border border-gray-100"
                >
                   <div className="flex flex-col items-center text-center">
                      <div className={cn(
                        "w-24 h-24 rounded-[32px] flex items-center justify-center mb-8 shadow-inner",
                        STEPS[activeStep-1].bg
                      )}>
                        {React.createElement(STEPS[activeStep-1].icon, { size: 48, className: STEPS[activeStep-1].color })}
                      </div>
                      
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/5 text-primary rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                        <Zap size={12} className="fill-current" />
                        Operational Insight
                      </div>

                      <h4 className="text-3xl font-black text-gray-900 uppercase tracking-tighter mb-4">
                        {STEPS[activeStep-1].stat} <span className="text-primary">Latency</span>
                      </h4>
                      
                      <div className="w-full bg-gray-50 rounded-3xl p-6 border border-gray-100 text-left space-y-4">
                         <div className="flex items-center justify-between">
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Protocol</span>
                            <span className="text-[10px] font-black text-gray-900 uppercase tracking-widest">{STEPS[activeStep-1].label}</span>
                         </div>
                         <div className="h-px bg-gray-200/50 w-full" />
                         <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm border border-gray-100">
                               <ShieldCheck size={20} />
                            </div>
                            <p className="text-xs font-bold text-gray-600 leading-relaxed">
                               System automatically verified and secured via Slikk Infrastructure Layer.
                            </p>
                         </div>
                      </div>

                      <div className="mt-8 flex gap-2 w-full">
                         <div className="h-1 bg-primary rounded-full flex-1" />
                         <div className={cn("h-1 rounded-full flex-1 transition-colors duration-500", activeStep > 1 ? "bg-primary" : "bg-gray-100")} />
                         <div className={cn("h-1 rounded-full flex-1 transition-colors duration-500", activeStep > 3 ? "bg-primary" : "bg-gray-100")} />
                         <div className={cn("h-1 rounded-full flex-1 transition-colors duration-500", activeStep > 5 ? "bg-primary" : "bg-gray-100")} />
                      </div>
                   </div>
                </motion.div>
             </AnimatePresence>

             {/* Background Floating Nodes */}
             <div className="absolute top-12 left-12 w-24 h-24 bg-white rounded-3xl shadow-sm border border-gray-100 p-4 flex flex-col justify-between">
                <div className="w-6 h-6 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                  <Zap size={12} fill="currentColor" />
                </div>
                <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Hub Status: Active</span>
             </div>

             <div className="absolute bottom-12 right-12 w-32 h-20 bg-white rounded-3xl shadow-sm border border-gray-100 p-4 flex flex-col justify-between">
                <div className="flex items-center gap-2">
                   <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                   <span className="text-[8px] font-black text-gray-900 uppercase tracking-widest">Live Routing</span>
                </div>
                <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                   <motion.div 
                     animate={{ x: ["-100%", "100%"] }}
                     transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                     className="h-full w-1/2 bg-primary" 
                   />
                </div>
             </div>
          </div>
        </div>

        {/* Bottom Banner: Hyperlocal Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
           {[
             { label: "Dark Stores", value: "14", sub: "Nearby Hubs" },
             { label: "Dispatch Time", value: "42s", sub: "Avg Time" },
             { label: "Smart Riders", value: "250+", sub: "Local Network" },
             { label: "Success Rate", value: "99.9%", sub: "Operational" }
           ].map((stat, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="bg-gray-50 border border-gray-100 p-8 rounded-[32px] text-center group hover:bg-white hover:shadow-premium transition-all duration-500"
             >
                <h5 className="text-3xl font-black text-gray-900 mb-1">{stat.value}</h5>
                <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-1">{stat.label}</p>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{stat.sub}</p>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
