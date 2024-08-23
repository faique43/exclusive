import Image from "next/image";

import DropDown from "@/public/assets/icons/DropDown.svg";

import { productCategories } from "@/constants/products";
import BannerApple from "@/components/homepage/BannerApple";
import AllProducts from "@/components/homepage/AllProducts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-32 w-full">
      <div className="flex items-stretch justify-center gap-4 px-[135px] w-full">
        <div className="flex flex-col items-start justify-center gap-4 pt-10 w-[271px]">
          {productCategories.slice(0, 2).map((category) => (
            <div
              key={category}
              className="flex items-center justify-between w-full gap-4"
            >
              <p className="title-16px-regular text-text2">{category}</p>
              <Image
                src={DropDown}
                alt="Drop Down"
                width={24}
                height={24}
                className="rotate-[270deg]"
              />
            </div>
          ))}
          {productCategories
            .slice(2, productCategories.length)
            .map((category) => (
              <p key={category} className="title-16px-regular text-text2">
                {category}
              </p>
            ))}
        </div>
        <div className="flex items-center">
          <div className="h-full w-[0.5px] bg-button opacity-30"></div>{" "}
        </div>
        <div className="flex flex-col items-start justify-center w-full gap-4 pl-7 pt-10">
          <BannerApple />
        </div>
      </div>
      <AllProducts />
    </main>
  );
}
