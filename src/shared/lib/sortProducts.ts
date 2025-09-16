import { useWishlistStore } from "@/shared/store/wishlistStore";
import type { Product } from "@/shared/types";

export function sortProducts(products: Product[]) {
  const { products: wishlist } = useWishlistStore.getState();

  const wishlistIds = new Set(wishlist.map((p) => p.id));

  return [
    ...products.filter((p) => wishlistIds.has(p.id)),
    ...products.filter((p) => !wishlistIds.has(p.id)),
  ];
}
