"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Search, Menu, X, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { LocationSelector } from "./LocationSelector";
import { SearchBar } from "./SearchBar";
import { NavActions } from "./NavActions";
import { CommandSearch } from "../CommandSearch";

export function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // Scroll animations
  const navbarHeight = useTransform(scrollY, [0, 100], [100, 80]);
  const navbarBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.9)"]
  );
  const navbarShadow = useTransform(
    scrollY,
    [0, 100],
    ["0 0 0 0 rgba(0, 0, 0, 0)", "0 10px 40px -10px rgba(0, 0, 0, 0.08)"]
  );
  
  const isAtTop = useTransform(scrollY, (y) => y < 50);
  const textColor = useTransform(scrollY, [0, 100], ["#ffffff", "#111827"]);

  return (
    <>
      <motion.nav
        style={{ 
          height: navbarHeight,
          backgroundColor: navbarBg,
          boxShadow: navbarShadow,
        }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl flex items-center transition-all duration-500 px-4 md:px-8"
      >
        <div className="max-w-screen-2xl mx-auto w-full flex items-center justify-between gap-2 md:gap-4">
          
          {/* LEFT: Logo & Location */}
          <div className="flex items-center gap-2 md:gap-10 shrink-0">
            <Link href="/" className="flex items-center group shrink-0">
              <div className="relative h-9 w-9 md:hidden">
                <Image 
                  src="https://pnghdpro.com/wp-content/themes/pnghdpro/download/social-media-and-brands/slikk-app-icon.png" 
                  alt="Slikk" 
                  fill 
                  className="object-contain"
                />
              </div>
              <motion.div 
                className="relative h-20 w-64 hidden md:block lg:w-72 transition-all"
              >
                <Image 
                  src="https://pnghdpro.com/wp-content/themes/pnghdpro/download/social-media-and-brands/slikk-logo.png" 
                  alt="Slikk" 
                  fill 
                  className="object-contain object-left"
                  priority
                />
              </motion.div>
            </Link>

            <div className="flex shrink-0">
              <LocationSelector />
            </div>
          </div>

          {/* CENTER: Advanced Search (Desktop Only) */}
          <div className="hidden md:flex flex-1 max-w-xl mx-4">
            <SearchBar />
          </div>

          {/* RIGHT: Nav Actions & Mobile Toggles */}
          <div className="flex items-center gap-1 md:gap-4 shrink-0">
            <NavActions textColor={textColor} />
            
            {/* Mobile Toggles */}
            <div className="flex md:hidden items-center gap-1">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-gray-500 hover:bg-gray-50 rounded-xl transition-colors"
              >
                <Search size={22} strokeWidth={2.5} />
              </button>
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-500 hover:bg-gray-50 rounded-xl transition-colors"
              >
                {isMobileMenuOpen ? <X size={22} strokeWidth={2.5} /> : <Menu size={22} strokeWidth={2.5} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <CommandSearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      
      {/* Mobile Sidebar Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-[70] p-6 shadow-2xl md:hidden"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-outfit font-black text-2xl tracking-tighter">Menu</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-gray-50 rounded-xl">
                  <X size={20} />
                </button>
              </div>
              
              <div className="flex flex-col gap-2">
                <Link href="#" className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl font-bold text-gray-900">
                  New Decor Drops <ShoppingBag size={18} className="text-primary" />
                </Link>
                <Link href="#" className="p-4 rounded-2xl font-bold text-gray-600 hover:bg-gray-50">Trending Aesthetics</Link>
                <Link href="#" className="p-4 rounded-2xl font-bold text-gray-600 hover:bg-gray-50">Sustainable Living</Link>
                <Link href="#" className="p-4 rounded-2xl font-bold text-gray-600 hover:bg-gray-50">Slikk Pass Membership</Link>
                <hr className="my-4 border-gray-100" />
                <Link href="#" className="p-4 rounded-2xl font-bold text-gray-600 hover:bg-gray-50">My Orders</Link>
                <Link href="#" className="p-4 rounded-2xl font-bold text-gray-600 hover:bg-gray-50">Account Settings</Link>
                <Link href="#" className="p-4 rounded-2xl font-bold text-red-500 hover:bg-red-50">Logout</Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
