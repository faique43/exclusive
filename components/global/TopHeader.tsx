import Image from "next/image";

import DropDown from "../../public/assets/icons/DropDown.svg";

const TopHeader = () => {
  return (
    <>
      <div className="bg-button h-12 w-full px-[136px] py-3 flex items-center justify-center ">
        <div className="flex items-center justify-normal gap-2">
          <p className="text-text title-14px-regular">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <p className="font-poppins text-text font-semibold text-sm leading-6 underline cursor-pointer underline-offset-2">
            ShopNow
          </p>
        </div>
      </div>
      <div className="absolute top-3 right-[136px] flex items-center justify-normal gap-2">
        <p className="text-text title-14px-regular">English</p>
        <Image
          src={DropDown}
          alt="Drop Down"
          width={24}
          height={24}
          className="invert cursor-pointer"
        />
      </div>
    </>
  );
};

export default TopHeader;
