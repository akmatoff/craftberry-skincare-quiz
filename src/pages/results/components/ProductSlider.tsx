import type { Product } from "@/shared/types";
import { ProductCard } from "./ProductCard";
import DailyRoutineCard from "./DailyRoutineCard";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import Button from "@/shared/components/Button";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";

type Props = {
  products: Product[];
};

export default function ProductSlider({ products }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 3;

  const pagesCount = Math.ceil((products.length + 1) / 3);

  const updateButtons = useCallback(() => {
    if (!emblaApi) return;

    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setCurrentPage(Math.floor(emblaApi.selectedScrollSnap() / itemsPerPage));
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
    const targetIndex = Math.max(currentIndex - itemsPerPage, 0);

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
          <div className="flex-1 md:flex-[0_0_50%] xl:flex-[0_0_33%] p-4">
            <DailyRoutineCard />
          </div>

          {products.map((product) => (
            <div
              key={product.id}
              className="flex-1 md:flex-[0_0_50%] xl:flex-[0_0_33%] p-4"
            >
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

      <div className="flex justify-center mt-14 gap-2">
        {Array.from({ length: pagesCount }).map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentPage ? "bg-border" : "bg-inactive"
            }`}
            onClick={() => emblaApi?.scrollTo(index * itemsPerPage)}
          />
        ))}
      </div>
    </div>
  );
}
