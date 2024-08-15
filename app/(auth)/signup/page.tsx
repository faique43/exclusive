import Image from "next/image";

import googleIcon from "@/public/assets/icons/Icon-Google.svg";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12 w-full px-[135px]">
      <div className="flex flex-col items-center justify-center w-full gap-6">
        <p className="text-36px-medium text-text2 w-full text-left">
          Create an account
        </p>
        <p className="title-16px-regular text-text2 w-full text-left">
          Enter your details below
        </p>
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-10">
        <input
          type="text"
          placeholder="Name"
          className="w-full border-b border-text2 text-text2 title-16px-regular placeholder:opacity-40 focus:outline-none py-2"
        />
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
        <div className="flex flex-col items-center justify-center w-full gap-8">
          <div className="flex flex-col items-center justify-center w-full gap-4">
            <button className="bg-button2 hover:bg-hover1 w-full py-4 cursor-pointer rounded text-text">
              Create Account
            </button>
            <button className="bg-transparent border border-text2 border-opacity-40 w-full py-4 cursor-pointer rounded flex items-center justify-center gap-4">
              <Image src={googleIcon} alt="Google Icon" />
              <p className="title-16px-regular text-text2">
                Sign up with Google
              </p>
            </button>
          </div>
          <div className="flex items-center justify-center w-full gap-4">
            <p className="title-16px-regular text-text2 opacity-70">
              Already have an account?
            </p>
            <Link
              href="/login"
              className="title-16px-regular text-text2 underline cursor-pointer underline-offset-8"
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
