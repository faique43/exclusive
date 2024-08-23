import SectionLabels from "../global/SectionLabels";
import SaleTimer from "../global/SaleTimer";

import { allProducts } from "@/constants/products";
import { EmblaOptionsType } from "embla-carousel";
import ProductCarousel from "../global/ProductCarousel";

const AllProducts = () => {
  const OPTIONS: EmblaOptionsType = { containScroll: false };
  return (
    <div className="px-[135px] py-10  flex flex-col items-start justify-start w-full gap-6">
      <SectionLabels text="Today's" />
      <SaleTimer label="Flash Sales" deadline="August, 25, 2024" />
      <div className="flex items-start justify-start gap-[30px] flex-wrap w-full">
        <ProductCarousel products={allProducts} />
      </div>
    </div>
  );
};

export default AllProducts;
