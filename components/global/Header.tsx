"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import Logo from "./Logo";

import { useStore } from "@/store/profile/profile";
import { useStore as wishlistStore } from "@/store/wishlist/wishlist";

import {
  headerLinks,
  headerIconLinks,
  headerProfileDropDownLinks
} from "@/constants/links";
import searchIcon from "@/public/assets/icons/Component 2.svg";
import userOffIcon from "@/public/assets/icons/User=Off.svg";
import userOnIcon from "@/public/assets/icons/User=On.svg";
import wishListIcon from "@/public/assets/icons/heart small.svg";

const Header = () => {
  const profile = useStore((state) => state.showProfile);
  const setShowProfile = useStore((state) => state.setShowProfile);
  const { wishlist } = wishlistStore((state) => state);
  const pathName = usePathname();

  return (
    <div className="sticky top-0 left-0 z-50 flex flex-col items-center justify-center w-full">
      <div className="bg-bg flex items-center justify-between w-full px-[135px] pt-[45px] pb-[23px]">
        <Logo />
        <div className="flex items-center justify-center gap-12">
          {headerLinks.map(({ title, link }) => (
            <Link
              key={link}
              href={link}
              className={`title-16px-regular cursor-pointer text-text2 ${
                pathName === link && "underline underline-offset-4"
              }`}
            >
              {title}
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-center gap-6">
          <div className="flex items-center justify-between bg-secondary gap-2 pl-5 pr-3 py-[7px] w-[243px]">
            <input
              type="text"
              className="title-12px-regular text-text2 bg-transparent w-full placeholder:opacity-50 focus:outline-0"
              placeholder="Search for products"
            />
            <Image
              src={searchIcon}
              alt="search icon"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </div>
          <div
            className={`flex items-center justify-center gap-4 ${
              (pathName === "/login" || pathName === "/signup") && "hidden"
            }`}
          >
            <div className="relative">
              <Image
                src={wishListIcon}
                alt="Wishlist"
                width={24}
                height={24}
                className="cursor-pointer"
              />
              <p className="absolute -top-2 -right-2 bg-button2 text-white title-12px-regular text-center w-4 h-4 rounded-full">
                {wishlist.length}
              </p>
            </div>
            {headerIconLinks.map(({ title, link, icon }) => (
              <Link key={link} href={link} className="cursor-pointer">
                <Image src={icon} alt={title} width={24} height={24} />
              </Link>
            ))}
            {profile ? (
              <Image
                src={userOnIcon}
                alt="Account"
                width={24}
                height={24}
                className="cursor-pointer"
                onClick={() => setShowProfile(false)}
              />
            ) : (
              <Image
                src={userOffIcon}
                alt="Account"
                width={24}
                height={24}
                className="cursor-pointer"
                onClick={() => setShowProfile(true)}
              />
            )}
            {/* dropdown */}
            {profile && (
              <div className="absolute top-[80px] right-[135px] bg-black bg-opacity-[0.4] backdrop-blur-3xl flex flex-col items-start justify-start rounded">
                {headerProfileDropDownLinks.map(({ title, link, icon }) => (
                  <Link
                    key={link}
                    href={link}
                    className="flex items-center justify-start gap-4 title-16px-regular text-text cursor-pointer w-full px-5 py-3 hover:bg-opacity-20"
                  >
                    <Image
                      src={icon}
                      alt={title}
                      width={24}
                      height={24}
                      className="invert"
                    />
                    {title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-full h-[0.5px] bg-button opacity-30" />
    </div>
  );
};

export default Header;
