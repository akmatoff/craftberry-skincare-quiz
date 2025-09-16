import type { Product } from "../types";
import { getProducts } from "./getProducts";

export async function getAllProducts(): Promise<Product[]> {
  let page = 1;
  let allProducts: Product[] = [];

  while (true) {
    const products = await getProducts(page);

    if (products.length === 0) {
      break;
    }

    allProducts = [...allProducts, ...products];
    page++;
  }

  return allProducts;
}
