import Image from "next/image";

import { ToastProps } from "@/types/toast";

const Toast = ({ image, heading, subheading }: ToastProps) => {
  return (
    <div className=" w-[500px] rounded-lg p-1 flex items-center justify-start gap-4">
      <div className=" w-[50px] h-[50px] relative">
        <Image
          src={image}
          alt={heading}
          layout="fixed"
          className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
          objectFit="contain"
        />
      </div>
      <div className="flex flex-col items-start justify-start gap-4">
        <p className="text-text2 title-14px-medium">{heading}</p>
        <p className="text-text1 title-12px-regular">{subheading}</p>
      </div>
    </div>
  );
};

export default Toast;
