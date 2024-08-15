import Image from "next/image";

import sideImage from "@/public/assets/images/Side Image.png";

const layout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="pt-[60px] pb-[140px] w-full flex items-center justify-between">
      <Image
        src={sideImage}
        alt="Side Image"
        height={781}
        width={805}
        className="w-1/2"
      />
      <div className="flex flex-col items-center justify-center w-1/2">
        {children}
      </div>
    </div>
  );
};

export default layout;
