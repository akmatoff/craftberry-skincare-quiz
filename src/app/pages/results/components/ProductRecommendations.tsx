import { useProductRecommendations } from "@/app/shared/services/useProductRecommendations";
import { useLoaderData } from "react-router";
import { ProductCard } from "./ProductCard";
import DailyRoutineCard from "./DailyRoutineCard";

export default function ProductRecommendations() {
  const { allProducts } = useLoaderData();

  const productRecommendations = useProductRecommendations(allProducts);

  console.log(productRecommendations);

  return (
    <section>
      <div className="grid grid-cols-3 gap-8 mx-[10vw]">
        <DailyRoutineCard />
        {productRecommendations.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
