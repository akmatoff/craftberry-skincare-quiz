import type { Product } from "@/app/shared/types";

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  return (
    <article className="flex flex-col items-center relative bg-content rounded-lg aspect-[1/1]">
      {product.images.length > 0 && (
        <img
          src={product.images[0].src}
          alt={product.title}
          className="bg-cover h-[354px] rounded-t-lg"
        />
      )}

      <div className="text-center">
        <h2 className="text-2xl">{product.title}</h2>
        <p>${product.variants?.[0].price}</p>
      </div>
    </article>
  );
}
