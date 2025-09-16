import { useWishlistStore } from "../store/wishlistStore";
import type { Product } from "../types";

export function useWishlist() {
  const { addProduct, removeProduct, products } = useWishlistStore();

  const isProductInWishlist = (productId: number) => {
    return products.some((p) => p.id === productId);
  };

  const toggleProduct = (product: Product) => {
    if (isProductInWishlist(product.id)) {
      removeProduct(product);
    } else {
      addProduct(product);
    }
  };

  return {
    addProduct,
    removeProduct,
    products,
    isProductInWishlist,
    toggleProduct,
  };
}
