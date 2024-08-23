import Image from "next/image";

import AppleLogo from "@/public/assets/icons/Apple Logo.svg";
import ArrowRight from "@/public/assets/icons/icons arrow-right.svg";
import iphone from "@/public/assets/images/iphone.png";

const BannerApple = () => {
  return (
    <div className="w-full bg-text2 relative flex items-start justify-start overflow-hidden">
      <div className="flex flex-col items-start justify-center gap-5 pt-[58px] pl-16 h-full">
        <div className="flex items-center justify-center gap-6">
          <Image src={AppleLogo} alt="Apple Logo" width={40} height={49} />
          <p className="title-16px-regular text-text">iPhone 14 Series</p>
        </div>
        <p className="text-48px-semibold text-text max-w-[294px]">
          Up to 10% off Voucher
        </p>
        <div className="flex items-center justify-center gap-2 pb-[47px]">
          <p className="title-16px-regular text-text cursor-pointer underline underline-offset-8">
            Shop Now
          </p>
          <Image
            src={ArrowRight}
            alt="Arrow Right"
            width={24}
            height={24}
            className="invert"
          />
        </div>
      </div>
      <div className="absolute top-4 right-0">
        <Image src={iphone} alt="Iphone" width={496} height={352} />
      </div>
    </div>
  );
};

export default BannerApple;
