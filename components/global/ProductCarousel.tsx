"use client";

import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ProductCard from "./ProductCard";
import { Product } from "@/types/product";

type ProductCarouselProps = {
  products: Product[];
};

const ProductCarousel = ({ products }: ProductCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    containScroll: "trimSnaps"
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.reInit();
  }, [emblaApi, products]);

  return (
    <div className="embla no-scrollbar">
      <div className="embla__viewport no-scrollbar" ref={emblaRef}>
        <div className="embla__container">
          {products.map((product) => (
            <div className="embla__slide" key={product.id}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
      <button
        className="embla__button embla__button--prev"
        onClick={scrollPrev}
      >
        Prev
      </button>
      <button
        className="embla__button embla__button--next"
        onClick={scrollNext}
      >
        Next
      </button>
    </div>
  );
};

export default ProductCarousel;
