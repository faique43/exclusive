import facebook from "../public/assets/icons/Icon-Facebook.svg";
import instagram from "../public/assets/icons/icon-instagram.svg";
import twitter from "../public/assets/icons/Icon-Twitter.svg";
import linkedin from "../public/assets/icons/Icon-Linkedin.svg";
import userIcon from "@/public/assets/icons/User=Off.svg";
import bag from "@/public/assets/icons/icon-mallbag.svg";
import cancelIcon from "@/public/assets/icons/icon-cancel.svg";
import starIcon from "@/public/assets/icons/Icon-Reviews.svg";
import logoutIcon from "@/public/assets/icons/Icon-logout.svg";

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

export const headerProfileDropDownLinks = [
  { title: "Manage My Account", link: "/account", icon: userIcon },
  { title: "My Order", link: "/cart", icon: bag },
  { title: "My Cancellations", link: "/cancellations", icon: cancelIcon },
  { title: "My Reviews", link: "/reviews", icon: starIcon },
  { title: "Logout", link: "/login", icon: logoutIcon }
];
