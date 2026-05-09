"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Package, 
  Truck, 
  CheckCircle2, 
  Clock, 
  Phone, 
  MessageSquare,
  MapPin,
  ArrowRight,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function LiveOrderCard() {
  return (
    <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-premium relative overflow-hidden h-full flex flex-col justify-between">
      {/* Decorative Gradient */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-0" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <Badge variant="primary" icon="fast" className="mb-2">On the way</Badge>
            <h3 className="text-3xl font-black text-gray-900 leading-tight">
              Arriving in <span className="text-primary italic">6 mins</span>
            </h3>
          </div>
          <div className="w-16 h-16 bg-gray-50 rounded-2xl p-2 border border-gray-100 overflow-hidden">
             <div className="relative w-full h-full">
                <Image src="https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&w=300&h=300&q=80" alt="Sunset Glow Lamp" fill className="object-cover rounded-lg" />
             </div>
          </div>
        </div>

        {/* Status Stepper */}
        <div className="space-y-6 mb-10">
          {[
            { label: "Order Packed", time: "10:02 PM", status: "completed" },
            { label: "Rider Picked Up", time: "10:10 PM", status: "completed" },
            { label: "Out for Delivery", time: "Heading to you", status: "current" },
          ].map((step, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="flex flex-col items-center">
                <div className={cn(
                  "w-6 h-6 rounded-full flex items-center justify-center border-2",
                  step.status === "completed" ? "bg-primary border-primary text-white" : "bg-white border-primary ring-4 ring-primary/10"
                )}>
                  {step.status === "completed" ? <CheckCircle2 size={12} strokeWidth={3} /> : <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />}
                </div>
                {i < 2 && <div className="w-0.5 h-10 bg-gray-100 mt-1" />}
              </div>
              <div className="flex flex-col">
                <span className={cn(
                  "text-sm font-bold uppercase tracking-tight",
                  step.status === "current" ? "text-gray-900" : "text-gray-400"
                )}>
                  {step.label}
                </span>
                <span className="text-xs font-bold text-gray-400">{step.time}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Rider Profile */}
        <div className="bg-gray-50/50 rounded-3xl p-6 border border-gray-100 mb-8">
          <div className="flex items-center justify-between mb-4">
             <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden relative">
                   <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-white flex items-center justify-center text-gray-400">
                      <Truck size={24} />
                   </div>
                </div>
                <div>
                   <h4 className="font-black text-gray-900 uppercase tracking-tight">Rahul Sharma</h4>
                   <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-1 mt-0.5">
                      <Star size={12} className="text-amber-500 fill-amber-500" /> 4.9 • 2,400+ deliveries
                   </p>
                </div>
             </div>
             <div className="flex gap-2">
                <Button variant="outline" size="icon" className="w-12 h-12 rounded-xl bg-white border-gray-200">
                   <Phone size={20} className="text-primary" />
                </Button>
                <Button variant="outline" size="icon" className="w-12 h-12 rounded-xl bg-white border-gray-200">
                   <MessageSquare size={20} className="text-primary" />
                </Button>
             </div>
          </div>
          <div className="h-px bg-gray-100 w-full mb-4" />
          <div className="flex items-center justify-between text-[10px] font-black text-gray-400 uppercase tracking-widest">
             <span className="flex items-center gap-1"><Package size={12} /> Thermal Pack Enabled</span>
             <span className="flex items-center gap-1"><MapPin size={12} /> 1.2 KM Away</span>
          </div>
        </div>
      </div>

      <Button className="w-full h-16 rounded-2xl text-base font-black shadow-premium group">
        Share Live Tracking <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  );
}
