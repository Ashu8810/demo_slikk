"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, LayoutGrid, Search, Heart, User } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", icon: Home, path: "/" },
    { label: "Categories", icon: LayoutGrid, path: "/categories" },
    { label: "Search", icon: Search, path: "/search" },
    { label: "Wishlist", icon: Heart, path: "/wishlist" },
    { label: "Profile", icon: User, path: "/profile" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-t border-gray-100 md:hidden pb-safe-area-inset-bottom">
      <div className="flex items-center justify-around py-2 px-2">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link 
              key={item.label} 
              href={item.path}
              className={cn(
                "relative flex flex-col items-center gap-1 min-w-[64px] py-2 transition-all",
                isActive ? "text-primary" : "text-gray-400"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="bottomNavIndicator"
                  className="absolute -top-2 w-12 h-1 bg-primary rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <div className={cn("relative transition-transform duration-200", isActive && "scale-110")}>
                <item.icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span className={cn("text-[10px] font-bold tracking-tight", isActive ? "text-primary" : "text-gray-400")}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
