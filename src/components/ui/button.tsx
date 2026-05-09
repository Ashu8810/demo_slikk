"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] select-none",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white shadow-premium hover:bg-primary/95 hover:shadow-lg",
        secondary: "bg-secondary text-primary hover:bg-primary/10 border border-primary/10",
        outline: "border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-300",
        ghost: "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
        destructive: "bg-red-500 text-white hover:bg-red-600 shadow-sm",
        premium: "bg-gradient-to-tr from-primary to-purple-500 text-white shadow-premium hover:opacity-90",
      },
      size: {
        default: "h-12 px-6 py-2",
        sm: "h-9 px-4 text-xs rounded-lg",
        lg: "h-14 px-10 text-base rounded-2xl",
        icon: "h-11 w-11 rounded-xl",
        fab: "h-14 w-14 rounded-full shadow-2xl",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, isLoading, leftIcon, rightIcon, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    
    return (
      <motion.button
        ref={ref as any}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.97 }}
        className={cn(buttonVariants({ variant, size, className }), isLoading && "relative !text-transparent")}
        disabled={isLoading || props.disabled}
        {...(props as any)}
      >
        <AnimatePresence mode="wait">
          {isLoading && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute inset-0 flex items-center justify-center text-current"
            >
              <Loader2 className="h-5 w-5 animate-spin text-white" />
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className="flex items-center gap-2">
          {leftIcon && <span className="shrink-0">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="shrink-0">{rightIcon}</span>}
        </div>
      </motion.button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
