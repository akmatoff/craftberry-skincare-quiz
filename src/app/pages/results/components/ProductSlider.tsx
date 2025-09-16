import type { Product } from "@/app/shared/types";
import { ProductCard } from "./ProductCard";
import DailyRoutineCard from "./DailyRoutineCard";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import Button from "@/app/shared/components/Button";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";

type Props = {
  products: Product[];
};

export default function ProductSlider({ products }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateButtons = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    updateButtons();
    emblaApi.on("select", updateButtons);
    emblaApi.on("reInit", updateButtons);
  }, [emblaApi, updateButtons]);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    const currentIndex = emblaApi.selectedScrollSnap();
    const targetIndex = Math.max(currentIndex - 3, 0);
    emblaApi.scrollTo(targetIndex);
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    const currentIndex = emblaApi.selectedScrollSnap();
    const lastIndex = emblaApi.scrollSnapList().length - 1;
    const targetIndex = Math.min(currentIndex + 3, lastIndex);
    emblaApi.scrollTo(targetIndex);
  }, [emblaApi]);

  return (
    <div className="relative lg:px-56">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          <div className="flex-[0_0_33%] p-4">
            <DailyRoutineCard />
          </div>

          {products.map((product) => (
            <div key={product.id} className="flex-[0_0_33%] p-4">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      {canScrollPrev && (
        <Button
          variant="circle"
          onClick={scrollPrev}
          className="absolute left-32 top-1/2 -translate-y-1/2"
        >
          <MdOutlineChevronLeft className="text-4xl text-foreground" />
        </Button>
      )}

      {canScrollNext && (
        <Button
          variant="circle"
          onClick={scrollNext}
          className="absolute right-32 top-1/2 -translate-y-1/2"
        >
          <MdOutlineChevronRight className="text-4xl text-foreground" />
        </Button>
      )}
    </div>
  );
}
