import { Suspense } from "react";
import ProductRecommendations from "./components/ProductRecommendations";
import { ResultsSection } from "./components/ResultsSection";
import { Await, useLoaderData } from "react-router";
import ProductsLoaderFallback from "@/shared/components/ProductsLoaderFallback";

export default function ResultsPage() {
  const { allProducts } = useLoaderData();

  return (
    <div className="pb-20">
      <ResultsSection />
      <Suspense fallback={<ProductsLoaderFallback />}>
        <Await resolve={allProducts}>
          {(products) => (
            <div className="-mt-20 relative">
              <ProductRecommendations allProducts={products} />
            </div>
          )}
        </Await>
      </Suspense>
    </div>
  );
}
