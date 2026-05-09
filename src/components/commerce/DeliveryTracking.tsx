"use client";

import React from "react";
import { motion } from "framer-motion";
import { Truck, Timer, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface DeliveryTrackingProps {
  status: "placed" | "preparing" | "shipping" | "delivered";
  eta: string;
}

export function DeliveryTracking({ status, eta }: DeliveryTrackingProps) {
  const steps = [
    { label: "Order Placed", key: "placed", completed: true },
    { label: "Preparing", key: "preparing", completed: status !== "placed" },
    { label: "Out for Delivery", key: "shipping", completed: status === "shipping" || status === "delivered" },
  ];

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-card">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600">
            <Timer size={20} className="animate-pulse" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-gray-900">Arriving in {eta}</h4>
            <p className="text-xs text-gray-500">Fastest delivery from nearest hub</p>
          </div>
        </div>
        <button className="text-xs font-bold text-primary hover:underline">Track Order</button>
      </div>

      <div className="relative flex justify-between">
        {/* Progress Line */}
        <div className="absolute top-3 left-0 right-0 h-[2px] bg-gray-100 -z-0">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: status === "shipping" ? "66%" : status === "delivered" ? "100%" : "33%" }}
            className="h-full bg-green-500"
          />
        </div>

        {steps.map((step, idx) => (
          <div key={idx} className="relative z-10 flex flex-col items-center gap-2">
            <div className={cn(
              "w-6 h-6 rounded-full flex items-center justify-center border-2 transition-colors",
              step.completed ? "bg-green-500 border-green-500 text-white" : "bg-white border-gray-200 text-gray-300"
            )}>
              {step.completed ? <CheckCircle2 size={12} /> : <div className="w-1.5 h-1.5 rounded-full bg-gray-200" />}
            </div>
            <span className={cn("text-[10px] font-bold", step.completed ? "text-gray-900" : "text-gray-400")}>
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
