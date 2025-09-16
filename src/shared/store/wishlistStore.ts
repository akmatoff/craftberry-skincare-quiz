import { create } from "zustand";
import type { Product } from "../types";
import { persist } from "zustand/middleware";

type WhishlistState = {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (product: Product) => void;
};

export const useWishlistStore = create(
  persist<WhishlistState>(
    (set) => ({
      products: [],
      addProduct: (product) =>
        set((state) => ({ products: [...state.products, product] })),
      removeProduct: (product) =>
        set((state) => ({
          products: state.products.filter((p) => p.id !== product.id),
        })),
    }),
    {
      name: "wishlist",
    }
  )
);
