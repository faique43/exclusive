import Image from "next/image";

import {
  footerAccountLinks,
  footerQuickLinks,
  footerSocialLinks
} from "@/constants/links";

import sendIcon from "../../public/assets/icons/icon-send.svg";
import qrCode from "../../public/assets/images/Qr Code.jpg";
import appleStore from "../../public/assets/images/download-appstore.png";
import googlePlay from "../../public/assets/images/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png";
import copyRight from "@/public/assets/icons/icon-copyright.svg";

const Footer = () => {
  return (
    <div className="bg-button pt-20 w-full flex flex-col items-center justify-center gap-[76px] pb-6">
      <div className=" flex items-start justify-center gap-[87px] w-full">
        <div className="flex flex-col items-start justify-start gap-6">
          <p className="text-text text-24px-bold">Exclusive</p>
          <div className="flex flex-col items-start justify-start gap-4">
            <p className="text-text title-20px-medium">Subscribe</p>
            <p className="text-text title-16px-regular pt-2">
              Get 10% off your first order
            </p>
            <div className="flex items-center justify-between gap-2 px-4 py-3 border-[1.5px] w-[217px] border-text rounded">
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-transparent w-full placeholder:text-text title-16px-regular placeholder:opacity-40 text-text focus:outline-0"
              />
              <Image
                width={24}
                height={24}
                src={sendIcon}
                alt="send icon"
                className="cursor-pointer invert"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-6">
          <p className="text-text text-24px-bold">Support</p>
          <div className="flex flex-col items-start justify-start gap-4">
            <p className="text-text title-16px-regular max-w-[175px]">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </p>
            <a
              href="mailto:exclusive@gmail.com"
              className="text-text title-16px-regular cursor-pointer"
            >
              exclusive@gmail.com
            </a>
            <p className="text-text title-16px-regular">+88015-88888-9999</p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-6">
          <p className="text-text text-24px-bold">Account</p>
          <div className="flex flex-col items-start justify-start gap-4">
            {footerAccountLinks.map((link) => (
              <p
                key={link}
                className="text-text title-16px-regular max-w-[175px] cursor-pointer"
              >
                {link}
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-6">
          <p className="text-text text-24px-bold">Quick Link</p>
          <div className="flex flex-col items-start justify-start gap-4">
            {footerQuickLinks.map((link) => (
              <p
                key={link}
                className="text-text title-16px-regular max-w-[175px] cursor-pointer"
              >
                {link}
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-6">
          <p className="text-text text-24px-bold">Download App</p>
          <div className="flex flex-col items-start justify-start gap-2.5">
            <p className="text-text title-12px-medium opacity-70">
              Save $3 with App New User Only
            </p>
            <div className="flex items-center justify-start gap-2">
              <Image width={80} height={80} src={qrCode} alt="QR Code" />
              <div className="flex flex-col items-start justify-start gap-1">
                <div className="px-[3px] py-[5px]">
                  <Image
                    width={104}
                    height={30}
                    src={googlePlay}
                    alt="Google Play Store"
                  />
                </div>
                <div className="px-[3px] py-[5px]">
                  <Image
                    width={104}
                    height={30}
                    src={appleStore}
                    alt="Apple Store"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-start gap-6">
            {footerSocialLinks.map((link) => (
              <Image
                key={link.name}
                width={24}
                height={24}
                src={link.icon}
                alt={link.name}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-1.5 opacity-60">
        <Image
          width={20}
          height={20}
          src={copyRight}
          alt="Copy Right"
          className="invert"
        />
        <p className="text-primary title-16px-regular">
          Copyright Rimel 2022. All right reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
