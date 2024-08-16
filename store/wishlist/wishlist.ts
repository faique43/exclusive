import { create } from "zustand";

import { Product } from "@/types/product";

type Store = {
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (product: Product) => void;
};

export const useStore = create<Store>((set) => ({
  wishlist: [],
  addToWishlist: (product: Product) =>
    set((state) => ({
      wishlist: [...state.wishlist, product]
    })),
  removeFromWishlist: (product: Product) =>
    set((state) => ({
      wishlist: state.wishlist.filter((prod) => prod.id !== product.id)
    }))
}));
