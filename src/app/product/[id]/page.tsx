"use client";

import React from "react";
import { useParams } from "next/navigation";
import { Navbar } from "@/components/shared/Navbar";
import { BottomNav } from "@/components/shared/BottomNav";
import { ProductGallery } from "@/components/commerce/ProductGallery";
import { ProductReviews } from "@/components/commerce/ProductReviews";
import { ProductDetailsInfo } from "@/components/commerce/ProductDetailsInfo";
import { LifestyleShowcase } from "@/components/commerce/LifestyleShowcase";
import { SimilarProducts } from "@/components/commerce/SimilarProducts";
import { FloatingDeliveryBar } from "@/components/commerce/FloatingDeliveryBar";
import { Footer } from "@/components/shared/Footer";
import { motion, useScroll, useSpring } from "framer-motion";

// Enhanced Mock Data with Editorial Images
const PRODUCT = {
  id: "p1",
  name: "Minimalist Arc Floor Lamp",
  brand: "Lumiere Lifestyle",
  price: 4299,
  originalPrice: 6499,
  rating: 4.8,
  reviews: 124,
  description: "A statement piece for the modern sanctuary. The Minimalist Arc Lamp combines architectural precision with soft, atmospheric lighting. Crafted from sandblasted aluminum with a weighted marble base.",
  images: [
    "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&h=1000&q=80",
    "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?auto=format&fit=crop&w=800&h=1000&q=80",
    "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&h=1000&q=80",
    "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&h=1000&q=80"
  ],
  sizes: ["Standard", "Tall", "Tabletop"],
  eta: "15-18 mins",
  store: "Lumiere Dark Store - Sector 42",
};

export default function ProductPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="min-h-screen bg-white selection:bg-primary selection:text-white">
      {/* Scroll Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX }}
      />

      <Navbar />

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-32 pb-24">
        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24">
          
          {/* Left: Gallery (Sticky on Desktop) */}
          <div className="lg:col-span-7">
             <div className="lg:sticky lg:top-32">
                <ProductGallery images={PRODUCT.images} />
             </div>
          </div>

          {/* Right: Info Panel */}
          <div className="lg:col-span-5">
            <ProductDetailsInfo product={PRODUCT} />
            
            {/* Editorial Description Section */}
            <div className="mt-16 pt-12 border-t border-gray-100">
               <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.3em] mb-6">The Narrative</h3>
               <div className="space-y-6">
                 <p className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                    Lighting is the silent architect of atmosphere.
                 </p>
                 <p className="text-base text-gray-500 font-medium leading-relaxed">
                   {PRODUCT.description}
                 </p>
                 <div className="grid grid-cols-2 gap-8 pt-4">
                    <div>
                       <p className="text-[10px] font-black text-gray-900 uppercase tracking-widest mb-2">Material</p>
                       <p className="text-sm text-gray-500 font-medium">Sandblasted Aluminum, Italian Carrara Marble</p>
                    </div>
                    <div>
                       <p className="text-[10px] font-black text-gray-900 uppercase tracking-widest mb-2">Dimensions</p>
                       <p className="text-sm text-gray-500 font-medium">H: 180cm, W: 120cm, Base: 35cm</p>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Lifestyle Showcase */}
        <LifestyleShowcase />

        {/* Customer Reviews */}
        <ProductReviews />

        {/* Similar Products */}
        <SimilarProducts />
      </div>

      <Footer />
      <BottomNav />
      <FloatingDeliveryBar />

      {/* Sticky Mobile Add To Cart (Only on small screens) */}
      <div className="fixed bottom-20 inset-x-0 p-4 lg:hidden z-40">
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="bg-white/80 backdrop-blur-xl border border-gray-100 p-4 rounded-[32px] shadow-2xl flex items-center justify-between gap-4"
        >
          <div className="flex flex-col">
            <span className="text-[10px] font-black text-gray-400 uppercase">Total Price</span>
            <span className="text-xl font-black text-gray-900">₹{PRODUCT.price}</span>
          </div>
          <button className="flex-1 h-14 bg-gray-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-lg shadow-gray-900/20 active:scale-95 transition-all">
             Add to Bag
          </button>
        </motion.div>
      </div>
    </main>
  );
}
