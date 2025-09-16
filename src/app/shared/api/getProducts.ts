import type { Product, ProductsResponse } from "../types";

export async function getProducts(page = 1): Promise<Product[]> {
  const url = new URL(
    "https://jeval.com.au/collections/hair-care/products.json"
  );

  url.searchParams.set("page", page.toString());

  const response = await fetch(url);

  const data: ProductsResponse = await response.json();

  return data.products;
}
