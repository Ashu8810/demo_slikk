"use client";

import { create } from "zustand";

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  brand: string;
  quantity: number;
  size?: string;
  eta: string;
}

interface CartStore {
  isOpen: boolean;
  items: CartItem[];
  openCart: () => void;
  closeCart: () => void;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  getTotal: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  isOpen: false,
  items: [
    {
      id: "p1",
      name: "Minimalist Arc Floor Lamp",
      brand: "Lumiere Lifestyle",
      price: 4299,
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=200&h=200&q=80",
      quantity: 1,
      size: "Standard",
      eta: "15 mins"
    },
    {
      id: "p2",
      name: "Velvet Throw Pillow",
      brand: "Nordic Soft",
      price: 1299,
      image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=200&h=200&q=80",
      quantity: 1,
      size: "L",
      eta: "12 mins"
    }
  ],
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  addItem: (item) => set((state) => {
    const existing = state.items.find((i) => i.id === item.id);
    if (existing) {
      return {
        items: state.items.map((i) => 
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        ),
        isOpen: true
      };
    }
    return { items: [...state.items, item], isOpen: true };
  }),
  removeItem: (id) => set((state) => ({
    items: state.items.filter((i) => i.id !== id)
  })),
  updateQuantity: (id, delta) => set((state) => ({
    items: state.items.map((i) => 
      i.id === id ? { ...i, quantity: Math.max(1, i.quantity + delta) } : i
    )
  })),
  getTotal: () => {
    return get().items.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}));
