import BlackController from "@/public/assets/products/BlackController.png";
import CanonCamera from "@/public/assets/products/CanonCamera.png";
import Chair from "@/public/assets/products/Chair.png";
import CPUCooler from "@/public/assets/products/CPUCooler.png";
import DogFood from "@/public/assets/products/DogFood.png";
import GamingLaptop from "@/public/assets/products/GamingLaptop.png";
import GreenJacket from "@/public/assets/products/GreenJacket.png";
import Grippers from "@/public/assets/products/Grippers.png";
import GucciBag from "@/public/assets/products/GucciBag.png";
import KidsCar from "@/public/assets/products/KidsCar.png";
import MechanicalKeyboard from "@/public/assets/products/MechanicalKeyboard.png";
import Monitor from "@/public/assets/products/Monitor.png";
import RedCoat from "@/public/assets/products/RedCoat.png";
import RedController from "@/public/assets/products/RedController.png";
import Shelf from "@/public/assets/products/Shelf.png";

export const allProducts = [
  {
    id: 1,
    name: "GP11 Shooter USB Gamepad",
    price: 660,
    image: BlackController,
    rating: 4.5,
    discount: 0,
    numberOfReviews: 55,
    new: true
  },
  {
    id: 2,
    name: "Canon EOS 80D DSLR Camera",
    price: 360,
    image: CanonCamera,
    rating: 4,
    discount: 0,
    numberOfReviews: 95,
    new: false
  },
  {
    id: 3,
    name: "S-Series Comfort Chair ",
    price: 400,
    image: Chair,
    rating: 4.5,
    discount: 25,
    numberOfReviews: 99,
    new: false
  },
  {
    id: 4,
    name: "RGB liquid CPU Cooler",
    price: 170,
    image: CPUCooler,
    rating: 4.5,
    discount: (10 / 170) * 100,
    numberOfReviews: 65,
    new: false
  },
  {
    id: 5,
    name: "Pedigree Adult Dry Dog Food",
    price: 60,
    image: DogFood,
    rating: 5,
    discount: 0,
    numberOfReviews: 25,
    new: false
  },
  {
    id: 6,
    name: "ASUS TUF Gaming Laptop",
    price: 1200,
    image: GamingLaptop,
    rating: 4.5,
    discount: 0,
    numberOfReviews: 28,
    new: false
  },
  {
    id: 7,
    name: "Quilted Satin Jacket",
    price: 660,
    image: GreenJacket,
    rating: 3.5,
    discount: 0,
    numberOfReviews: 55,
    new: false
  },
  {
    id: 8,
    name: "Jr. Zoom Soccer Cleats",
    price: 60,
    image: Grippers,
    rating: 4.5,
    discount: 0,
    numberOfReviews: 55,
    new: false
  },
  {
    id: 9,
    name: "Gucci duffle bag",
    price: 1200,
    image: GucciBag,
    rating: 4.5,
    discount: 0,
    numberOfReviews: 55,
    new: false
  },
  {
    id: 10,
    name: "Kids Ride On Car",
    price: 120,
    image: KidsCar,
    rating: 4.5,
    discount: 0,
    numberOfReviews: 55,
    new: false
  },
  {
    id: 11,
    name: "AK-900 Wired Keyboard",
    price: 120,
    image: MechanicalKeyboard,
    rating: 4.5,
    discount: 0,
    numberOfReviews: 55,
    new: false
  },
  {
    id: 12,
    name: "IPS LCD Gaming Monitor",
    price: 1200,
    image: Monitor,
    rating: 4.5,
    discount: 0,
    numberOfReviews: 55,
    new: false
  },
  {
    id: 13,
    name: "The north coat",
    price: 360,
    image: RedCoat,
    rating: 5,
    discount: (100 / 360) * 100,
    numberOfReviews: 55,
    new: false
  },
  {
    id: 14,
    name: "GP11 Shooter USB Gamepad",
    price: 660,
    image: RedController,
    rating: 4.5,
    discount: 0,
    numberOfReviews: 55,
    new: false
  },
  {
    id: 15,
    name: "Small BookSelf",
    price: 360,
    image: Shelf,
    rating: 5,
    discount: 0,
    numberOfReviews: 65,
    new: false
  }
];
