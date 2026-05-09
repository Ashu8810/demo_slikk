"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Heart, Star, ShoppingBag, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SizeSelector } from "@/components/ui/ecommerce-controls";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  eta: string;
  rating: number;
  isNew?: boolean;
  isTrending?: boolean;
  stockCount?: number;
}

export function ProductCard({
  id,
  name,
  brand,
  price,
  originalPrice,
  category,
  image,
  eta,
  rating,
  isNew,
  isTrending,
  stockCount
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedSize, setSelectedSize] = useState("M");
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <motion.div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-card hover:shadow-premium transition-all duration-500"
    >
      <Link href={`/product/${id}`} className="block">
        {/* Action Buttons Overlay */}
        <div className="absolute top-3 right-3 z-20 flex flex-col gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
          <button className="w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors">
            <Heart size={20} />
          </button>
          <button className="w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center text-gray-400 hover:text-primary transition-colors">
            <Eye size={20} />
          </button>
        </div>

        {/* Operational Badges */}
        <div className="absolute top-3 left-3 z-20 flex flex-col gap-2">
          {isNew && <Badge variant="premium" icon="new">New Drop</Badge>}
          {isTrending && <Badge variant="primary" icon="fast">Trending</Badge>}
          {stockCount && stockCount < 5 && <Badge variant="danger" icon="stock">Only {stockCount} Left</Badge>}
          <Badge variant="success" icon="eta">{eta}</Badge>
        </div>

        {/* Image Gallery Container */}
        <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Quick Size Selector Overlay */}
          <AnimatePresence>
            {isHovered && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 via-black/20 to-transparent pt-12"
              >
                <p className="text-[10px] font-bold text-white uppercase tracking-widest mb-2 opacity-80 text-center">Select Size</p>
                <div className="flex justify-center" onClick={(e) => e.preventDefault()}>
                  <SizeSelector 
                    sizes={["S", "M", "L", "XL"]} 
                    selected={selectedSize} 
                    onChange={setSelectedSize} 
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Content Area */}
        <div className="p-4">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{brand || "Slikk Original"}</span>
            <div className="flex items-center gap-1 text-xs font-bold text-amber-500">
              <Star size={10} fill="currentColor" />
              <span>{rating}</span>
            </div>
          </div>
          
          <h3 className="font-bold text-gray-900 text-sm mb-3 line-clamp-1 group-hover:text-primary transition-colors">{name}</h3>
          
          <div className="flex items-center justify-baseline">
            <div className="flex flex-col flex-1">
              <span className="text-lg font-black text-gray-900 leading-none">₹{price}</span>
              {originalPrice && (
                <span className="text-[10px] text-gray-400 line-through mt-1">₹{originalPrice}</span>
              )}
            </div>
          </div>
        </div>
      </Link>

      {/* Quick Add Button (Floating above link) */}
      <div className="absolute bottom-4 right-4 z-30">
        <Button 
          onClick={(e) => {
            e.preventDefault();
            handleAddToCart();
          }}
          isLoading={isAdded}
          className={cn(
            "h-10 rounded-xl px-4 transition-all duration-300",
            isAdded ? "bg-green-500" : "shadow-premium"
          )}
        >
          {isAdded ? "Added!" : <><Plus size={18} className="mr-1" /> Add</>}
        </Button>
      </div>
    </motion.div>
  );
}
