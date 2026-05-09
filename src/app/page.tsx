"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/shared/Navbar";
import { BottomNav } from "@/components/shared/BottomNav";
import { CategoryRail } from "@/components/commerce/CategoryRail";
import { FeaturedSection } from "@/components/commerce/FeaturedSection";
import { SlikkPassSection } from "@/components/commerce/SlikkPassSection";
import { FeatureStrip } from "@/components/commerce/FeatureStrip";
import { Footer } from "@/components/shared/Footer";
import { TopCategoryRail } from "@/components/commerce/TopCategoryRail";
import { HeroBanner } from "@/components/commerce/HeroBanner";
import { DiscoveryGrid } from "@/components/commerce/DiscoveryGrid";
import { FloatingDeliveryBar } from "@/components/commerce/FloatingDeliveryBar";
import { LifestyleCollections } from "@/components/commerce/LifestyleCollections";
import { FurnitureShowcase } from "@/components/commerce/FurnitureShowcase";
import { AppDownloadBanner } from "@/components/commerce/AppDownloadBanner";

export default function Home() {
  return (
    <main className="min-h-screen bg-white pb-32">
      <Navbar />
      
      {/* Editorial Category System */}
      <CategoryRail />
      
      {/* Lifestyle Hero Experience */}
      <HeroBanner />
      
      {/* Curated Home Decor Drops */}
      <FeaturedSection />
      
      {/* Room Aesthetic & Desk Setup Essentials */}
      <LifestyleCollections />
      
      {/* Visual Discovery Grid & Creator Picks */}
      <DiscoveryGrid />
      
      {/* Top Product Rail */}
      <TopCategoryRail />
      
      {/* Curated Furniture Showcase */}
      <FurnitureShowcase />
      
      {/* Trust & Membership */}
      <SlikkPassSection />
      <FeatureStrip />
      
      {/* Marketing Conversion */}
      <AppDownloadBanner />
      
      {/* Global Footer */}
      <Footer />
      
      {/* Floating Real-time Delivery Tracker */}
      <FloatingDeliveryBar />

      {/* Spacer for Bottom Nav */}
      <div className="h-24 md:h-0" />
      
      <BottomNav />
    </main>
  );
}
