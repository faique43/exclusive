import { StaticImageData } from "next/image";

export type Product = {
  id: number;
  name: string;
  price: number;
  image: StaticImageData;
  rating: number;
  discount: number;
  numberOfReviews: number;
  new: boolean;
};
