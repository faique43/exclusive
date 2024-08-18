import { CartItem } from "@/types/cartItem";
import { Product } from "@/types/product";
import { create } from "zustand";

type Store = {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  decreaseProductQuantity: (product: Product) => void;
};

export const cartStore = create<Store>((set) => ({
  cart: [],
  addToCart: (product: Product) =>
    set((state) => {
      const existingProduct = state.cart.find(
        (item) => item.product.id === product.id
      );

      if (existingProduct) {
        return {
          cart: state.cart.map((item) =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }

      return { cart: [...state.cart, { product, quantity: 1 }] };
    }),
  removeFromCart: (product: Product) =>
    set((state) => ({
      cart: state.cart.filter((item) => product.id !== item.product.id)
    })),
  decreaseProductQuantity: (product: Product) =>
    set((state) => {
      const existingProduct = state.cart.find(
        (item) => item.product.id === product.id
      );

      if (existingProduct && existingProduct.quantity > 1) {
        return {
          cart: state.cart.map((item) =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
        };
      }

      return {
        cart: state.cart.filter((item) => item.product.id !== product.id)
      };
    })
}));
