"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, leftIcon, ...props }, ref) => {
    return (
      <div className="w-full space-y-1.5">
        {label && <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">{label}</label>}
        <div className="relative group">
          {leftIcon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors">
              {leftIcon}
            </div>
          )}
          <input
            type={type}
            className={cn(
              "flex h-12 w-full rounded-xl border border-gray-100 bg-gray-50 px-4 py-2 text-sm font-medium transition-all",
              "placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/5 focus-visible:border-primary/20",
              "disabled:cursor-not-allowed disabled:opacity-50",
              leftIcon && "pl-11",
              error && "border-red-200 bg-red-50 focus-visible:ring-red-500/5 focus-visible:border-red-300",
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
        {error && <p className="text-[10px] font-bold text-red-500 uppercase tracking-wide ml-1">{error}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
