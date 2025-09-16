import type { Product } from "@/app/shared/types";

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  return (
    <article className="flex flex-col items-center relative bg-content rounded-lg">
      {product.images.length > 0 && (
        <div className="w-full relative overflow-hidden rounded-t-lg max-h-[500px]">
          <img
            src={product.images[0].src}
            alt={product.title}
            className="object-contain w-full max-h-[500px]"
          />
        </div>
      )}

      <div className="text-center p-3">
        <h2 className="text-2xl">{product.title}</h2>
        <p className="grange font-light">${product.variants?.[0].price}</p>
      </div>
    </article>
  );
}
