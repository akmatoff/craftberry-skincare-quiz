import { useWishlist } from "@/shared/services/useWishlist";
import type { Product } from "@/shared/types";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  const { isProductInWishlist, toggleProduct } = useWishlist();

  return (
    <article className="flex flex-col items-center relative bg-content rounded-lg">
      {product.images.length > 0 && (
        <div className="w-full relative overflow-hidden rounded-lg max-h-[500px] bg-muted-content">
          <img
            src={product.images[0].src}
            alt={product.title}
            className="object-cover w-full max-h-[500px]"
          />
        </div>
      )}

      <div className="text-center p-3">
        <h2 className="text-2xl">{product.title}</h2>
        <p className="grange font-light">${product.variants?.[0].price}</p>
      </div>

      <button
        className="absolute top-4 right-4"
        onClick={() => toggleProduct(product)}
      >
        {isProductInWishlist(product.id) ? (
          <MdFavorite className="text-3xl text-red-400" />
        ) : (
          <MdFavoriteBorder className="text-3xl" />
        )}
      </button>
    </article>
  );
}
