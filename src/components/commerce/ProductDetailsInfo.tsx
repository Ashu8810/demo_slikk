"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Star, 
  Heart, 
  Share2, 
  ShoppingBag, 
  Truck, 
  ShieldCheck, 
  RotateCcw, 
  Clock, 
  MapPin,
  Zap,
  Check
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SizeSelector, QuantitySelector } from "@/components/ui/ecommerce-controls";
import { cn } from "@/lib/utils";

interface ProductDetailsInfoProps {
  product: any;
}

export function ProductDetailsInfo({ product }: ProductDetailsInfoProps) {
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToCart = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Header Info */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Badge variant="premium" className="bg-primary/10 text-primary border-none font-black px-3 py-1">New Drop</Badge>
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-green-50 rounded-full border border-green-100">
               <Zap size={10} className="text-green-600 fill-green-600" />
               <span className="text-[9px] font-black text-green-700 uppercase tracking-tight">In Stock</span>
            </div>
          </div>
          <div className="flex gap-3">
            <motion.button 
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsWishlisted(!isWishlisted)}
              className={cn(
                "w-10 h-10 rounded-full border flex items-center justify-center transition-all",
                isWishlisted ? "bg-red-50 border-red-100 text-red-500" : "bg-white border-gray-100 text-gray-400 hover:text-primary"
              )}
            >
              <Heart size={20} fill={isWishlisted ? "currentColor" : "none"} />
            </motion.button>
            <button className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-primary transition-all">
              <Share2 size={20} />
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-xs font-black text-primary uppercase tracking-[0.3em]">{product.brand}</p>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tight leading-[0.9]">
            {product.name}
          </h1>
        </div>

        <div className="flex items-center gap-6 pb-6 border-b border-gray-100">
          <div className="flex items-center gap-1.5">
            <div className="flex items-center gap-0.5 text-amber-500">
              {[1, 2, 3, 4].map((s) => <Star key={s} size={16} fill="currentColor" />)}
              <Star size={16} fill="none" strokeWidth={2.5} />
            </div>
            <span className="text-sm font-black text-gray-900">{product.rating}</span>
          </div>
          <div className="w-px h-4 bg-gray-200" />
          <button className="text-[10px] font-black text-gray-400 uppercase tracking-widest hover:text-primary transition-colors">
            {product.reviews} Reviews
          </button>
        </div>

        <div className="flex items-baseline gap-4">
          <span className="text-5xl font-black text-gray-900 tracking-tight">₹{product.price}</span>
          {product.originalPrice && (
            <span className="text-xl text-gray-300 line-through font-medium">₹{product.originalPrice}</span>
          )}
          <span className="px-3 py-1 bg-primary text-white text-[10px] font-black rounded-lg uppercase tracking-widest shadow-lg shadow-primary/20">
            40% OFF
          </span>
        </div>
      </div>

      {/* Selectors */}
      <div className="space-y-8 py-8 px-8 bg-gray-50 rounded-[40px] border border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-gray-900 pointer-events-none">
          <ShoppingBag size={120} strokeWidth={0.5} />
        </div>

        <div className="space-y-4 relative z-10">
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Select Size</span>
            <button className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline">Size Guide</button>
          </div>
          <SizeSelector 
            sizes={product.sizes} 
            selected={selectedSize} 
            onChange={setSelectedSize} 
          />
        </div>

        <div className="space-y-4 relative z-10">
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Quantity</span>
          <QuantitySelector value={quantity} onChange={setQuantity} />
        </div>
      </div>

      {/* Quick Commerce Signals */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white border border-gray-100 p-5 rounded-[32px] flex items-center gap-4 shadow-sm group hover:border-primary/20 transition-all">
           <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary transition-transform group-hover:scale-110">
              <Clock size={24} />
           </div>
           <div>
             <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Delivery in</p>
             <p className="text-lg font-black text-gray-900 tracking-tight">{product.eta}</p>
           </div>
        </div>
        <div className="bg-white border border-gray-100 p-5 rounded-[32px] flex items-center gap-4 shadow-sm group hover:border-purple-200 transition-all">
           <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 transition-transform group-hover:scale-110">
              <MapPin size={24} />
           </div>
           <div>
             <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Pickup Point</p>
             <p className="text-lg font-black text-gray-900 tracking-tight line-clamp-1">{product.store.split("-")[0]}</p>
           </div>
        </div>
      </div>

      {/* CTAs */}
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <Button 
            onClick={handleAddToCart}
            size="lg" 
            className={cn(
              "flex-[2] rounded-[24px] h-18 text-base font-black uppercase tracking-widest shadow-xl transition-all",
              isAdded ? "bg-green-600 hover:bg-green-700" : "bg-gray-900 hover:bg-primary shadow-primary/20"
            )}
          >
            {isAdded ? (
              <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} className="flex items-center gap-2">
                <Check size={20} />
                Added to Bag
              </motion.div>
            ) : "Add to Bag"}
          </Button>
          <Button variant="outline" size="lg" className="flex-1 rounded-[24px] h-18 border-gray-200 font-black uppercase tracking-widest hover:border-primary hover:text-primary transition-all">
            Buy Now
          </Button>
        </div>
      </div>

      {/* Trust & Features */}
      <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-100">
        {[
          { icon: ShieldCheck, label: "100% Genuine" },
          { icon: RotateCcw, label: "7 Day Returns" },
          { icon: Truck, label: "Free Shipping" }
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col items-center gap-3 text-center group">
            <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 group-hover:text-primary group-hover:bg-primary/5 transition-all">
               <item.icon size={20} />
            </div>
            <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest group-hover:text-gray-900">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
