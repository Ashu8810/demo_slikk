"use client";

import React from "react";
import { motion } from "framer-motion";
import { Truck, MapPin, Phone, MessageSquare, ChevronRight, CheckCircle2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface DeliveryTrackingCardProps {
  orderId: string;
  status: "placed" | "preparing" | "shipping" | "delivered";
  eta: string;
  rider?: {
    name: string;
    rating: number;
    image?: string;
  };
}

export function DeliveryTrackingCard({ orderId, status, eta, rider }: DeliveryTrackingCardProps) {
  const steps = [
    { id: "placed", label: "Confirmed" },
    { id: "preparing", label: "Preparing" },
    { id: "shipping", label: "On the way" },
    { id: "delivered", label: "Delivered" },
  ];

  const currentStepIdx = steps.findIndex(s => s.id === status);

  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-premium overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-0" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Active Order #{orderId}</p>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-black text-gray-900">Arriving in <span className="text-primary">{eta}</span></h3>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            </div>
          </div>
          <Badge variant="success" icon="fast">Priority</Badge>
        </div>

        {/* Live Progress Bar */}
        <div className="mb-8 relative">
          <div className="flex justify-between relative z-10">
            {steps.map((step, idx) => {
              const isCompleted = idx <= currentStepIdx;
              const isActive = idx === currentStepIdx;

              return (
                <div key={step.id} className="flex flex-col items-center gap-2">
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center border-4 transition-all duration-500",
                    isCompleted ? "bg-primary border-primary text-white" : "bg-white border-gray-50 text-gray-200",
                    isActive && "ring-4 ring-primary/10 scale-110"
                  )}>
                    {isCompleted ? <CheckCircle2 size={16} strokeWidth={3} /> : <div className="w-2 h-2 rounded-full bg-gray-200" />}
                  </div>
                  <span className={cn(
                    "text-[10px] font-bold tracking-tight uppercase",
                    isCompleted ? "text-gray-900" : "text-gray-400"
                  )}>
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
          
          {/* Progress Line Connector */}
          <div className="absolute top-4 left-4 right-4 h-1 bg-gray-50 -z-0 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${(currentStepIdx / (steps.length - 1)) * 100}%` }}
              className="h-full bg-primary"
            />
          </div>
        </div>

        {/* Rider Info / Dark Store Section */}
        {rider ? (
          <div className="bg-gray-50 rounded-2xl p-4 flex items-center justify-between">
             <div className="flex items-center gap-3">
               <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-gray-400 overflow-hidden">
                  <Truck size={24} className="text-primary" />
               </div>
               <div>
                 <h4 className="text-sm font-bold text-gray-900">{rider.name}</h4>
                 <p className="text-[10px] text-gray-500 font-bold uppercase tracking-tight flex items-center gap-1">
                   <Clock size={10} /> Fast Rider • {rider.rating}★
                 </p>
               </div>
             </div>
             <div className="flex gap-2">
               <Button variant="outline" size="icon" className="w-10 h-10 rounded-lg">
                 <Phone size={18} />
               </Button>
               <Button variant="outline" size="icon" className="w-10 h-10 rounded-lg">
                 <MessageSquare size={18} />
               </Button>
             </div>
          </div>
        ) : (
          <div className="flex items-center gap-3 p-4 border border-dashed border-gray-200 rounded-2xl">
             <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-300">
                <Truck size={20} />
             </div>
             <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Assigning nearest rider...</p>
          </div>
        )}

        <Button variant="ghost" className="w-full mt-4 text-xs font-bold text-gray-500 hover:text-primary">
          View Detailed Map <ChevronRight size={14} className="ml-1" />
        </Button>
      </div>
    </div>
  );
}
