import facebook from "../public/assets/icons/Icon-Facebook.svg";
import instagram from "../public/assets/icons/icon-instagram.svg";
import twitter from "../public/assets/icons/Icon-Twitter.svg";
import linkedin from "../public/assets/icons/Icon-Linkedin.svg";
import cart from "@/public/assets/icons/Cart1.svg";
import userIcon from "@/public/assets/icons/User=Off.svg";
import wishListIcon from "@/public/assets/icons/heart small.svg";

export const footerAccountLinks = [
  "My Account",
  "Login / Register",
  "Cart",
  "Wishlist",
  "Shop"
];

export const footerQuickLinks = [
  "Privacy Policy",
  "Terms Of Use",
  "FAQ",
  "Contact"
];

export const footerSocialLinks = [
  {
    name: "Facebook",
    icon: facebook
  },
  {
    name: "Instagram",
    icon: instagram
  },
  {
    name: "Twitter",
    icon: twitter
  },
  {
    name: "Linkedin",
    icon: linkedin
  }
];

export const headerLinks = [
  { title: "Home", link: "/" },
  { title: "Contact", link: "/contact" },
  { title: "About", link: "/about" },
  { title: "Sign Up", link: "/signup" }
];

export const headerIconLinks = [
  {
    title: "Wishlist",
    link: "/wishlist",
    icon: wishListIcon
  },
  { title: "Cart", link: "/", icon: cart },
  {
    title: "User",
    link: "/account",
    icon: userIcon
  }
];
