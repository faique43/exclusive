import Image from "next/image";

import googleIcon from "@/public/assets/icons/Icon-Google.svg";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12 w-full px-[135px]">
      <div className="flex flex-col items-center justify-center w-full gap-6">
        <p className="text-36px-medium text-text2 w-full text-left">
          Log in to Exclusive
        </p>
        <p className="title-16px-regular text-text2 w-full text-left">
          Enter your details below
        </p>
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-10">
        <input
          type="text"
          placeholder="Email or Phone Number"
          className="w-full border-b border-text2 text-text2 title-16px-regular placeholder:opacity-40 focus:outline-none py-2"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border-b border-text2 text-text2 title-16px-regular placeholder:opacity-40 focus:outline-none py-2"
        />
        <div className="flex items-center justify-between w-full gap-8">
          <button className="bg-button2 hover:bg-hover1 py-4 px-12 cursor-pointer rounded text-text">
            Log In
          </button>
          <p className="text-secondary2 cursor-pointer title-16px-regular hover:text-hover1">
            Forget Password?
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
