"use client";

import React from "react";
import { Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface QuantitySelectorProps {
  value: number;
  onChange: (val: number) => void;
  className?: string;
}

export function QuantitySelector({ value, onChange, className }: QuantitySelectorProps) {
  return (
    <div className={cn("inline-flex items-center bg-gray-50 border border-gray-100 rounded-xl overflow-hidden p-1", className)}>
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => onChange(Math.max(1, value - 1))}
        className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-white hover:text-primary hover:shadow-sm rounded-lg transition-all"
      >
        <Minus size={14} />
      </motion.button>
      <span className="w-8 text-center text-sm font-bold text-gray-900">{value}</span>
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => onChange(value + 1)}
        className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-white hover:text-primary hover:shadow-sm rounded-lg transition-all"
      >
        <Plus size={14} />
      </motion.button>
    </div>
  );
}

interface FilterChipProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

export function FilterChip({ label, active, onClick }: FilterChipProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={cn(
        "px-4 py-2 rounded-full text-xs font-bold transition-all",
        active 
          ? "bg-primary text-white shadow-premium" 
          : "bg-white border border-gray-100 text-gray-500 hover:border-gray-200"
      )}
    >
      {label}
    </motion.button>
  );
}

interface SizeSelectorProps {
  sizes: string[];
  selected: string;
  onChange: (size: string) => void;
}

export function SizeSelector({ sizes, selected, onChange }: SizeSelectorProps) {
  return (
    <div className="flex gap-2">
      {sizes.map((size) => (
        <motion.button
          key={size}
          whileTap={{ scale: 0.9 }}
          onClick={() => onChange(size)}
          className={cn(
            "w-10 h-10 rounded-xl text-xs font-bold transition-all border",
            selected === size 
              ? "border-primary bg-primary/5 text-primary shadow-sm" 
              : "border-gray-100 bg-white text-gray-500 hover:border-gray-300"
          )}
        >
          {size}
        </motion.button>
      ))}
    </div>
  );
}
