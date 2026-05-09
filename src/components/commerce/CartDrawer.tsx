"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  ShoppingBag, 
  Plus, 
  Minus, 
  Trash2, 
  Zap, 
  ArrowRight, 
  Clock, 
  Ticket,
  ChevronRight,
  ShieldCheck
} from "lucide-react";
import { useCartStore } from "@/hooks/use-cart-store";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CartDrawer() {
  const { isOpen, closeCart, items, updateQuantity, removeItem, getTotal } = useCartStore();
  const [promoCode, setPromoCode] = useState("");
  const subtotal = getTotal();
  const deliveryFee = subtotal > 1000 ? 0 : 49;
  const discount = 0;
  const total = subtotal + deliveryFee - discount;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-[101] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <ShoppingBag size={20} strokeWidth={2.5} />
                </div>
                <div>
                  <h2 className="text-lg font-black text-gray-900 uppercase tracking-tight leading-none">Your Bag</h2>
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{items.length} items</span>
                </div>
              </div>
              <button 
                onClick={closeCart}
                className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:text-primary transition-all hover:rotate-90"
              >
                <X size={20} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4 no-scrollbar">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-8">
                  <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center text-gray-200 mb-6">
                    <ShoppingBag size={48} />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-2">Empty Sanctuary</h3>
                  <p className="text-sm text-gray-400 font-medium mb-8">Your curated lifestyle list is waiting to be built.</p>
                  <Button onClick={closeCart} className="rounded-2xl px-8 h-12 bg-gray-900 font-black uppercase tracking-widest text-[10px]">
                    Continue Discovery
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <motion.div 
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="group flex gap-4 p-3 bg-white border border-gray-50 rounded-[24px] hover:border-primary/20 hover:shadow-premium transition-all"
                    >
                      <div className="relative w-24 aspect-[4/5] rounded-xl overflow-hidden bg-gray-50 shrink-0">
                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                      </div>
                      
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div>
                          <div className="flex justify-between items-start mb-1">
                            <div>
                              <p className="text-[8px] font-black text-primary uppercase tracking-[0.2em]">{item.brand}</p>
                              <h4 className="text-sm font-black text-gray-900 uppercase tracking-tight line-clamp-1">{item.name}</h4>
                            </div>
                            <button 
                              onClick={() => removeItem(item.id)}
                              className="text-gray-300 hover:text-red-500 transition-colors"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                          
                          {item.size && (
                            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Size: {item.size}</span>
                          )}
                          
                          <div className="flex items-center gap-1.5 mt-1">
                             <Clock size={10} className="text-green-500" />
                             <span className="text-[9px] font-black text-green-600 uppercase tracking-tight">Arrives in {item.eta}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center bg-gray-50 rounded-lg p-0.5 border border-gray-100">
                            <button 
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-primary hover:bg-white rounded-md transition-all"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="w-6 text-center text-xs font-black text-gray-900">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-primary hover:bg-white rounded-md transition-all"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          <span className="text-base font-black text-gray-900 tracking-tight">₹{item.price * item.quantity}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer Summary */}
            {items.length > 0 && (
              <div className="p-6 bg-white border-t border-gray-100 space-y-6">
                {/* Promo Code */}
                <div className="flex items-center gap-2 p-1.5 bg-gray-50 rounded-2xl border border-gray-100">
                   <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center text-gray-400">
                      <Ticket size={16} />
                   </div>
                   <input 
                    type="text" 
                    placeholder="Enter Promo Code" 
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1 bg-transparent border-none focus:ring-0 text-xs font-bold uppercase tracking-widest text-gray-900 placeholder:text-gray-300"
                   />
                   <button className="px-4 py-2 bg-white text-primary text-[9px] font-black uppercase tracking-widest rounded-xl border border-primary/10 shadow-sm hover:bg-primary hover:text-white transition-all">
                      Apply
                   </button>
                </div>

                {/* Summary Table */}
                <div className="space-y-3">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                    <span className="text-gray-400">Subtotal</span>
                    <span className="text-gray-900">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400">Delivery Fee</span>
                      {deliveryFee === 0 && <span className="text-[8px] bg-green-50 text-green-600 px-1.5 py-0.5 rounded-md">FREE</span>}
                    </div>
                    <span className="text-gray-900">₹{deliveryFee}</span>
                  </div>
                  <div className="pt-3 border-t border-gray-100 flex justify-between">
                    <span className="text-base font-black text-gray-900 uppercase tracking-tight">Final Total</span>
                    <span className="text-xl font-black text-gray-900 tracking-tight">₹{total}</span>
                  </div>
                </div>

                {/* Checkout CTA */}
                <div className="space-y-3">
                  <Button className="w-full h-16 rounded-[24px] bg-gray-900 hover:bg-primary shadow-xl shadow-primary/10 group transition-all">
                    <span className="flex-1 text-center font-black uppercase tracking-widest text-xs">Proceed to Checkout</span>
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-all">
                      <ArrowRight size={18} />
                    </div>
                  </Button>
                  
                  <div className="flex items-center justify-center gap-2 opacity-40">
                     <ShieldCheck size={12} />
                     <span className="text-[8px] font-black uppercase tracking-[0.2em]">Secure Checkout • encrypted & safe</span>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
