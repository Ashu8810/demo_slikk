"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  Mail,
  ShieldCheck,
  CreditCard,
  Truck,
  RotateCcw
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const FOOTER_LINKS = {
  shop: {
    title: "Shop",
    links: [
      { label: "New Decor", href: "#" },
      { label: "Best Sellers", href: "#" },
      { label: "Trending Now", href: "#" },
      { label: "Sustainable Living", href: "#" },
      { label: "Collections", href: "#" },
    ]
  },
  categories: {
    title: "Categories",
    links: [
      { label: "Wall Art", href: "#" },
      { label: "Rugs", href: "#" },
      { label: "Furniture", href: "#" },
      { label: "Lighting", href: "#" },
      { label: "Vases", href: "#" },
    ]
  },
  support: {
    title: "Customer Support",
    links: [
      { label: "Shipping Info", href: "#" },
      { label: "Returns & Refunds", href: "#" },
      { label: "Track Your Order", href: "#" },
      { label: "FAQs", href: "#" },
      { label: "Contact Us", href: "#" },
    ]
  }
};

const SOCIAL_LINKS = [
  { label: "Instagram", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "Youtube", href: "#" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
        
        {/* Top Section: Newsletter & Branding */}
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link href="/" className="relative h-12 w-48 mb-8">
              <Image 
                src="https://pnghdpro.com/wp-content/themes/pnghdpro/download/social-media-and-brands/slikk-logo.png" 
                alt="Slikk" 
                fill 
                className="object-contain object-left"
              />
            </Link>
            <p className="text-gray-500 text-lg font-medium leading-relaxed max-w-md mb-8">
              Redefining quick-commerce with style. Premium home decor and essentials delivered to your doorstep in 60 minutes.
            </p>
            
            <div className="flex gap-6">
              {SOCIAL_LINKS.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ x: 3 }}
                  className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] hover:text-primary transition-all"
                >
                  {social.label}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-gray-50 rounded-[40px] p-8 md:p-12 relative overflow-hidden group">
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-gray-900 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                <Mail size={200} strokeWidth={0.5} />
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tight mb-4">
                  Join the Slikk Club
                </h3>
                <p className="text-gray-500 font-bold mb-8 max-w-sm">
                  Subscribe for early access to drops, exclusive offers, and the latest trends.
                </p>
                
                <form className="flex flex-col sm:flex-row gap-3 max-w-xl">
                  <div className="relative flex-1">
                    <input 
                      type="email" 
                      placeholder="Enter your email"
                      className="w-full h-14 bg-white rounded-2xl px-6 font-bold text-gray-900 placeholder:text-gray-400 outline-none border border-transparent focus:border-primary/20 transition-all shadow-sm"
                    />
                  </div>
                  <button className="h-14 px-8 bg-gray-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-primary transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 group/btn">
                    Subscribe
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-12 py-16 border-t border-gray-100">
          {Object.values(FOOTER_LINKS).map((section) => (
            <div key={section.title} className="flex flex-col gap-6">
              <h4 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] leading-none">
                {section.title}
              </h4>
              <ul className="flex flex-col gap-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="text-gray-900 font-bold hover:text-primary transition-colors tracking-tight"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Slikk Trust Markers */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 flex flex-col gap-6">
            <h4 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] leading-none">
              Operational Trust
            </h4>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400">
                  <Truck size={16} />
                </div>
                <span className="text-[11px] font-black text-gray-900 uppercase tracking-wider">Rapid Delivery</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400">
                  <ShieldCheck size={16} />
                </div>
                <span className="text-[11px] font-black text-gray-900 uppercase tracking-wider">100% Genuine</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400">
                  <RotateCcw size={16} />
                </div>
                <span className="text-[11px] font-black text-gray-900 uppercase tracking-wider">Easy Exchange</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Legal & Payments */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-8 gap-y-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            <p>&copy; {currentYear} Slikk Commerce. All rights reserved.</p>
            <Link href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gray-900 transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-gray-900 transition-colors">Cookie Policy</Link>
          </div>

          <div className="flex items-center gap-4 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {/* Payment Icons Placeholder */}
            <div className="flex items-center gap-4 text-gray-400">
              <div className="flex flex-col items-center gap-1">
                <CreditCard size={24} strokeWidth={1.5} />
                <span className="text-[8px] font-bold uppercase tracking-tighter">Visa</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <CreditCard size={24} strokeWidth={1.5} />
                <span className="text-[8px] font-bold uppercase tracking-tighter">Mastercard</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <CreditCard size={24} strokeWidth={1.5} />
                <span className="text-[8px] font-bold uppercase tracking-tighter">Amex</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <CreditCard size={24} strokeWidth={1.5} />
                <span className="text-[8px] font-bold uppercase tracking-tighter">Apple Pay</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
