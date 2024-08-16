import { StaticImageData } from "next/image";

export interface ToastProps {
  image: StaticImageData;
  heading: string;
  subheading: string;
}
