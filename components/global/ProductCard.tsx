"use client";

import { useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";

import { Product } from "@/types/product";
import { ToastProps } from "@/types/toast";
import { useStore } from "@/store/wishlist/wishlist";
import { cartStore } from "@/store/cart/cart";

import Toast from "./Toast";

import likeIcon from "@/public/assets/icons/heart small.svg";
import eyeIcon from "@/public/assets/icons/Quick View.svg";
import fourStar from "@/public/assets/icons/Four Star.svg";
import fiveStar from "@/public/assets/icons/Five Star.svg";
import fourHalfStar from "@/public/assets/icons/Four Half Star.svg";
import threeStar from "@/public/assets/icons/Three Star.svg";
import twoStar from "@/public/assets/icons/Two Star.svg";
import oneStar from "@/public/assets/icons/One Star.svg";

const ProductCard = ({
  id,
  name,
  price,
  image,
  rating,
  discount,
  numberOfReviews,
  new: isNew
}: Product) => {
  const [hover, setHover] = useState(false);

  const wishlist = useStore((state) => state.wishlist);
  const addToWishlist = useStore((state) => state.addToWishlist);
  const removeFromWishlist = useStore((state) => state.removeFromWishlist);

  const cart = cartStore((state) => state.cart);
  const addToCart = cartStore((state) => state.addToCart);
  const removeFromCart = cartStore((state) => state.removeFromCart);
  const decreaseProductQuantity = cartStore(
    (state) => state.decreaseProductQuantity
  );

  const isInWishlist = wishlist.some((product) => product.id === id);

  const handleWishlistClick = () => {
    if (isInWishlist) {
      removeFromWishlist({
        id,
        name,
        price,
        image,
        rating,
        discount,
        numberOfReviews,
        new: isNew
      });
      showToast({ image, heading: "Removed from Wishlist", subheading: name });
    } else {
      addToWishlist({
        id,
        name,
        price,
        image,
        rating,
        discount,
        numberOfReviews,
        new: isNew
      });
      showToast({ image, heading: "Added to Wishlist", subheading: name });
    }
  };

  const existingProduct = cart.find((item) => item.product.id === id);
  const handleAddToCartClick = () => {
    addToCart({
      id,
      name,
      price,
      image,
      rating,
      discount,
      numberOfReviews,
      new: isNew
    });
    showToast({ image, heading: "Added to Cart", subheading: name });
  };

  const removeFromCartClick = () => {
    removeFromCart({
      id,
      name,
      price,
      image,
      rating,
      discount,
      numberOfReviews,
      new: isNew
    });
    showToast({ image, heading: "Removed from Cart", subheading: name });
  };

  const handleDecreaseProductQuantity = () => {
    decreaseProductQuantity({
      id,
      name,
      price,
      image,
      rating,
      discount,
      numberOfReviews,
      new: isNew
    });
    showToast({ image, heading: "Removed from Cart", subheading: name });
  };

  const showToast = ({ image, heading, subheading }: ToastProps) => {
    toast(<Toast image={image} heading={heading} subheading={subheading} />);
  };

  return (
    <div className="flex flex-col items-start justify-center gap-4">
      <div
        className="bg-secondary relative w-[270px] h-[250px] rounded overflow-hidden"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="absolute top-1/2 left-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/2">
          <Image
            src={image}
            alt={name}
            layout="fixed"
            className="object-contain absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>

        {isNew ? (
          <div className="absolute top-3 left-3 bg-button1 px-3 py-1 title-12px-regular text-text rounded">
            NEW
          </div>
        ) : (
          discount > 0 && (
            <div className="absolute top-3 left-3 bg-secondary2 px-3 py-1 title-12px-regular text-text rounded">
              -{discount.toFixed(0)}%
            </div>
          )
        )}

        {!existingProduct ? (
          <div
            className={`absolute bottom-0 left-0 bg-button flex items-center justify-center title-12px-regular w-full text-white transition-all duration-300 overflow-hidden cursor-pointer ${
              hover ? "h-[41px]" : "h-0"
            }`}
            onClick={handleAddToCartClick}
          >
            Add To Cart
          </div>
        ) : (
          <div
            className={`absolute bottom-0 left-0 flex items-center justify-between w-full text-white transition-all duration-300 overflow-hidden cursor-pointer h-[41px]`}
          >
            <p
              className="w-1/3 text-center text-white bg-button h-full title-20px-semibold flex items-center justify-center"
              onClick={handleDecreaseProductQuantity}
            >
              -
            </p>
            <p className="w-1/3 text-center text-button">
              {existingProduct.quantity}
            </p>
            <p
              className="w-1/3 text-center text-white bg-button h-full title-20px-semibold flex items-center justify-center"
              onClick={handleAddToCartClick}
            >
              +
            </p>
          </div>
        )}

        <div className="absolute top-3 right-3 flex flex-col items-center justify-center gap-2">
          <div
            className={`p-[5px] rounded-full cursor-pointer ${
              isInWishlist ? "bg-button2" : "bg-primary"
            }`}
            onClick={handleWishlistClick}
            aria-label={
              isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"
            }
          >
            <Image src={likeIcon} alt="Like Icon" />
          </div>
          <div className="bg-primary p-[5px] rounded-full cursor-pointer">
            <Image src={eyeIcon} alt="Quick View" />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start justify-center gap-2">
        <p className="text-black title-16px-medium">{name}</p>
        {discount > 0 ? (
          <div className="flex items-center gap-3">
            <p className="text-secondary2 title-16px-medium">
              ${(price - price * (discount / 100)).toFixed(2)}
            </p>
            <p className="text-button opacity-50 title-16px-medium font-poppins line-through">
              ${price.toFixed(2)}
            </p>
          </div>
        ) : (
          <p className="text-secondary2 title-16px-medium">
            ${price.toFixed(2)}
          </p>
        )}
        <div className="flex items-center gap-2">
          {rating === 5 ? (
            <Image src={fiveStar} alt="Five Star Rating" />
          ) : rating === 4.5 ? (
            <Image src={fourHalfStar} alt="Four and a Half Star Rating" />
          ) : rating === 4 ? (
            <Image src={fourStar} alt="Four Star Rating" />
          ) : rating === 3 ? (
            <Image src={threeStar} alt="Three Star Rating" />
          ) : rating === 2 ? (
            <Image src={twoStar} alt="Two Star Rating" />
          ) : (
            <Image src={oneStar} alt="One Star Rating" />
          )}
          <p className="text-text2 opacity-50 title-14px-bold">
            ({numberOfReviews})
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
