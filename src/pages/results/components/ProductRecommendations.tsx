import { useProductRecommendations } from "@/shared/services/useProductRecommendations";
import ProductSlider from "./ProductSlider";
import { sortProducts } from "@/shared/lib/sortProducts";
import type { Product } from "@/shared/types";

type Props = {
  allProducts: Product[];
};
export default function ProductRecommendations({ allProducts }: Props) {
  const productRecommendations = useProductRecommendations(allProducts);

  const productsSorted = sortProducts(productRecommendations);

  return (
    <section>
      <ProductSlider products={productsSorted} />
    </section>
  );
}
