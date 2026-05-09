"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, type HTMLMotionProps } from "framer-motion";
import { Zap, Clock, Flame, Sparkles, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider transition-colors select-none",
  {
    variants: {
      variant: {
        default: "bg-gray-100 text-gray-600 border border-gray-200",
        primary: "bg-primary/10 text-primary border border-primary/20",
        success: "bg-green-50 text-green-600 border border-green-100",
        warning: "bg-amber-50 text-amber-600 border border-amber-100",
        danger: "bg-red-50 text-red-600 border border-red-100",
        premium: "bg-gradient-to-tr from-primary to-purple-500 text-white border-none shadow-sm",
        outline: "border border-gray-200 text-gray-500 bg-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends Omit<HTMLMotionProps<"div">, "children">,
    VariantProps<typeof badgeVariants> {
  icon?: "eta" | "trending" | "stock" | "sale" | "new" | "fast";
  children?: React.ReactNode;
}

function Badge({ className, variant, icon, children, ...props }: BadgeProps) {
  const iconMap = {
    eta: Clock,
    trending: TrendingUp,
    stock: Flame,
    sale: Zap,
    new: Sparkles,
    fast: Zap,
  };
  const SelectedIcon = icon ? iconMap[icon] : null;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={cn(badgeVariants({ variant }), className)} 
      {...props}
    >
      {SelectedIcon && <SelectedIcon size={12} className={variant === "premium" ? "text-white" : ""} />}
      {children}
    </motion.div>
  );
}

export { Badge, badgeVariants };
