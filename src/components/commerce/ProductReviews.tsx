"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ThumbsUp, MessageSquare, CheckCircle2, Filter, ChevronDown, Camera } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface Review {
  id: string;
  user: string;
  rating: number;
  date: string;
  comment: string;
  isVerified: boolean;
  helpfulCount: number;
  images?: string[];
  avatarColor: string;
}

const MOCK_REVIEWS: Review[] = [
  {
    id: "r1",
    user: "Rahul S.",
    rating: 5,
    date: "2 days ago",
    comment: "The quality is absolutely insane for the price. The 400GSM fabric feels super heavy and premium. Definitely my new favorite hoodie for the winter.",
    isVerified: true,
    helpfulCount: 24,
    images: ["https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=200&h=200&q=80"],
    avatarColor: "bg-purple-500"
  },
  {
    id: "r2",
    user: "Ananya M.",
    rating: 5,
    date: "1 week ago",
    comment: "Delivery was surprisingly fast! Got it in 12 minutes. The fit is perfectly oversized, just what I was looking for. Love the Aura Purple color.",
    isVerified: true,
    helpfulCount: 12,
    avatarColor: "bg-blue-500"
  },
  {
    id: "r3",
    user: "Vikram K.",
    rating: 4,
    date: "2 weeks ago",
    comment: "Great quality, but the sleeves are a bit longer than expected even for an oversized fit. Still keeping it though because it looks dope.",
    isVerified: true,
    helpfulCount: 8,
    avatarColor: "bg-orange-500"
  }
];

const RATING_STATS = [
  { stars: 5, count: 85, percentage: 85 },
  { stars: 4, count: 10, percentage: 10 },
  { stars: 3, count: 3, percentage: 3 },
  { stars: 2, count: 2, percentage: 2 },
  { stars: 1, count: 0, percentage: 0 },
];

export function ProductReviews() {
  const [activeFilter, setActiveFilter] = useState("Most Recent");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <section className="py-16 border-t border-gray-100">
      <div className="flex flex-col lg:flex-row gap-16">
        
        {/* Left: Summary Stats */}
        <div className="lg:w-1/3 flex flex-col gap-8">
          <div>
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-6">Ratings & Reviews</h2>
            <div className="flex items-end gap-4 mb-2">
              <span className="text-6xl font-black text-gray-900 leading-none">4.8</span>
              <div className="flex flex-col gap-1 pb-1">
                <div className="flex items-center gap-0.5 text-amber-500">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={18} fill={s <= 4 ? "currentColor" : "none"} strokeWidth={2} />
                  ))}
                </div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Based on 124 reviews</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {RATING_STATS.map((stat) => (
              <div key={stat.stars} className="flex items-center gap-4">
                <div className="flex items-center gap-1 w-8">
                  <span className="text-xs font-black text-gray-900">{stat.stars}</span>
                  <Star size={10} fill="currentColor" className="text-gray-400" />
                </div>
                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${stat.percentage}%` }}
                    viewport={{ once: true }}
                    className="h-full bg-gray-900 rounded-full"
                  />
                </div>
                <span className="text-xs font-bold text-gray-400 w-8 text-right">{stat.count}</span>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100">
            <p className="text-sm font-bold text-gray-900 mb-4">Review this product</p>
            <p className="text-xs text-gray-500 leading-relaxed mb-6">
              Share your thoughts with other customers and get a chance to be featured in our Slikk Style gallery.
            </p>
            <Button variant="outline" className="w-full rounded-2xl h-12 border-gray-200 font-black uppercase tracking-widest text-[10px]">
              Write a Review
            </Button>
          </div>
        </div>

        {/* Right: Reviews List */}
        <div className="flex-1">
          {/* Filters & Header */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
            <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest">Customer Reviews</h3>
            
            <div className="relative">
              <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-100 rounded-xl text-[10px] font-black uppercase tracking-widest hover:border-primary transition-all shadow-sm"
              >
                <Filter size={14} />
                {activeFilter}
                <ChevronDown size={14} className={cn("transition-transform", isFilterOpen && "rotate-180")} />
              </button>

              <AnimatePresence>
                {isFilterOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-premium border border-gray-100 p-2 z-20"
                  >
                    {["Most Recent", "Highest Rating", "Lowest Rating", "Most Helpful"].map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          setActiveFilter(option);
                          setIsFilterOpen(false);
                        }}
                        className={cn(
                          "w-full text-left px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-colors",
                          activeFilter === option ? "bg-primary/5 text-primary" : "text-gray-500 hover:bg-gray-50"
                        )}
                      >
                        {option}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Individual Reviews */}
          <div className="space-y-10">
            {MOCK_REVIEWS.map((review) => (
              <motion.div 
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col gap-4 pb-8 border-b border-gray-50 last:border-0"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={cn("w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-xs", review.avatarColor)}>
                      {review.user.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-black text-gray-900 tracking-tight">{review.user}</p>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-0.5 text-amber-500 scale-75 origin-left">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <Star key={s} size={14} fill={s <= review.rating ? "currentColor" : "none"} />
                          ))}
                        </div>
                        <span className="text-[10px] font-bold text-gray-400">{review.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  {review.isVerified && (
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-green-50 rounded-full border border-green-100">
                      <CheckCircle2 size={12} className="text-green-600" />
                      <span className="text-[9px] font-black text-green-700 uppercase tracking-wider">Verified Purchase</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-4 pl-13">
                  <p className="text-gray-600 font-medium leading-relaxed italic">
                    "{review.comment}"
                  </p>
                  
                  {review.images && (
                    <div className="flex gap-2">
                      {review.images.map((img, i) => (
                        <div key={i} className="relative w-20 h-20 rounded-2xl overflow-hidden border border-gray-100 group cursor-zoom-in">
                          <img src={img} alt="User review" className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <Camera size={16} className="text-white" />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center gap-6 mt-2">
                    <button className="flex items-center gap-2 group">
                      <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:text-primary group-hover:bg-primary/5 transition-all">
                        <ThumbsUp size={14} />
                      </div>
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest group-hover:text-gray-900 transition-colors">
                        Helpful ({review.helpfulCount})
                      </span>
                    </button>
                    <button className="flex items-center gap-2 group">
                      <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:text-primary group-hover:bg-primary/5 transition-all">
                        <MessageSquare size={14} />
                      </div>
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest group-hover:text-gray-900 transition-colors">
                        Reply
                      </span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <button className="w-full mt-12 py-4 rounded-2xl border border-gray-100 text-[11px] font-black uppercase tracking-widest text-gray-400 hover:text-primary hover:border-primary transition-all">
            Load More Reviews
          </button>
        </div>
      </div>
    </section>
  );
}
