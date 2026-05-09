"use client";

import React from "react";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { BottomNav } from "@/components/shared/BottomNav";
import { ListingHeader } from "@/components/commerce/ListingHeader";
import { FilterBar } from "@/components/commerce/FilterBar";
import { ProductListingGrid } from "@/components/commerce/ProductListingGrid";
import { FloatingDeliveryBar } from "@/components/commerce/FloatingDeliveryBar";

export default function Home() {
  const [activeFilter, setActiveFilter] = React.useState("All Decor");

  return (
    <main className="min-h-screen bg-white pb-32">
      <Navbar />

      {/* Editorial Category Header */}
      <ListingHeader 
        title={activeFilter === "All Decor" ? "Modern Desk Setup" : activeFilter}
        description="Transform your productivity with our curated collection of aesthetic workspace essentials, ergonomic furniture, and smart desk accessories. Delivered to your doorstep in minutes."
        count={124}
        image="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=1920&h=1080&q=80"
      />

      {/* Sticky Filter & Sort Experience */}
      <FilterBar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

      {/* Main Product Listing Grid */}
      <ProductListingGrid activeFilter={activeFilter} />

      {/* Global Real-time Delivery Tracker */}
      <FloatingDeliveryBar />

      <Footer />
      
      {/* Spacer for Bottom Nav */}
      <div className="h-24 md:h-0" />
      <BottomNav />
    </main>
  );
}
