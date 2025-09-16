import type { Product } from "@/app/shared/types";

type Props = {
  products: Product[];
};

export default function ProductSlider({ products }: Props) {
  return <div className="relative"></div>;
}
