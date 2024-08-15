"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import Logo from "./Logo";

import { headerLinks, headerIconLinks } from "@/constants/links";
import searchIcon from "@/public/assets/icons/Component 2.svg";

const Header = () => {
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
            {headerIconLinks.map(({ title, link, icon }) => (
              <Link key={link} href={link} className="cursor-pointer">
                <Image src={icon} alt={title} width={24} height={24} />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-[0.5px] bg-button opacity-30" />
    </div>
  );
};

export default Header;
