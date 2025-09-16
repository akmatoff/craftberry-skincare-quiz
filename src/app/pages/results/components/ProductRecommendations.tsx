import { useProductRecommendations } from "@/app/shared/services/useProductRecommendations";
import { useLoaderData } from "react-router";
import ProductSlider from "./ProductSlider";

export default function ProductRecommendations() {
  const { allProducts } = useLoaderData();

  const productRecommendations = useProductRecommendations(allProducts);

  return (
    <section>
      <ProductSlider products={productRecommendations} />
    </section>
  );
}
