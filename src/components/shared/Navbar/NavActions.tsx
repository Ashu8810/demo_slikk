"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingBag, Heart, Bell, User, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/hooks/use-cart-store";
import { cn } from "@/lib/utils";

interface NavActionsProps {
  textColor?: any; // MotionValue<string>
}

export function NavActions({ textColor }: NavActionsProps) {
  const { openCart, items } = useCartStore();
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="flex items-center gap-2 md:gap-4">
      {/* Categories Button */}
      <Link href="/shop">
        <Button 
          variant="ghost" 
          className="hidden lg:flex items-center gap-2.5 font-black text-xs uppercase tracking-widest text-gray-900 hover:text-primary hover:bg-primary/5 rounded-[18px] px-6 h-12 transition-all"
        >
          <LayoutGrid size={18} strokeWidth={2.5} />
          <span>Categories</span>
        </Button>
      </Link>

      <div className="w-px h-8 bg-gray-100 mx-1 hidden lg:block" />

      {/* Wishlist */}
      <motion.button 
        style={{ color: textColor }}
        whileHover={{ y: -3, scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative p-2.5 hover:bg-primary/5 rounded-2xl transition-all hidden md:block group"
      >
        <Heart size={22} strokeWidth={2.5} className="group-hover:fill-primary/10" />
      </motion.button>

      {/* Notifications */}
      <motion.button 
        style={{ color: textColor }}
        whileHover={{ y: -3, scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative p-2.5 hover:bg-primary/5 rounded-2xl transition-all hidden md:block"
      >
        <Bell size={22} strokeWidth={2.5} />
        <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-primary rounded-full border-2 border-white animate-pulse" />
      </motion.button>

      {/* Cart */}
      <motion.button 
        style={{ color: textColor }}
        onClick={openCart}
        whileHover={{ y: -3, scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative group p-2.5 hover:bg-primary/5 rounded-2xl transition-all"
      >
        <ShoppingBag size={22} strokeWidth={2.5} className="group-hover:text-primary" />
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 min-w-[20px] h-[20px] bg-primary text-white text-[10px] font-black flex items-center justify-center rounded-full border-2 border-white px-1 shadow-sm">
            {itemCount}
          </span>
        )}
      </motion.button>

      {/* Profile */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="hidden md:flex items-center gap-3 pl-3 pr-1.5 py-1.5 bg-white border border-gray-100 rounded-[20px] hover:border-primary/20 hover:shadow-sm transition-all group ml-2"
      >
        <div className="flex flex-col items-end leading-none hidden lg:flex">
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Account</span>
          <span className="text-sm font-black text-gray-900 tracking-tight">Ashutosh</span>
        </div>
        <div className="w-9 h-9 bg-gradient-to-tr from-primary to-purple-500 rounded-xl flex items-center justify-center text-white shadow-premium border border-white/20">
          <User size={18} strokeWidth={2.5} fill="currentColor" />
        </div>
      </motion.button>
    </div>
  );
}
