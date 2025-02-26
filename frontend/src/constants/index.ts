import { bookshelf, camera, cellphone, chair, cpuCooler, curologySet, customerService, delivery, dogFood, electricCar, emmaWatson, facebook, footballBoot, gamepad, gpPad, gucciBag, instagram, jacket, keyboard, laptop, linkedin, monitor, satinJacket, tomCruse, twitter, willSmith } from "../assets"
import { beautyAd, electronicsAd, globalAd, nabilBankAd, powderAd } from "../assets"

export const footerData = [
  {
    title: "Support",
    links: [
      {
        title: "Bafal-13, Kathmandu",
        link: null,
      },
      {
        title: "sabin.shrestha.er@gmail.com",
        link: null,
      },
      {
        title: "9841234567",
        link: null,
      }
    ]
  },
  {
    title: "Account",
    links: [
      {
        title: "My Account",
        link: "/account",
      },
      {
        title: "Login / Register",
        link: "/signup",
      },
      {
        title: "Cart",
        link: "/cart",
      },
      {
        title: "Wishlist",
        link: "/wishlist",
      },
      {
        title: "Shop",
        link: "/shop",
      }
    ]
  },
  {
    title: "Quick Link",
    links: [
      {
        title: "Privacy Policy",
        link: "/privacy-policy",
      },
      {
        title: "Terms of Use",
        link: "/terms-of-use",
      },
      {
        title: "FAQ",
        link: "/faq",
      },
      {
        title: "Contact",
        link: "/contact",
      }
    ]
  },

]

export const socials = [
  {
    title: "Facebook",
    link: "https://www.facebook.com",
    icon: facebook
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com",
    icon: instagram
  },
  {
    title: "Twitter",
    link: "https://www.twitter.com",
    icon: twitter

  },
  {
    title: "Linkedin",
    link: "https://www.linkedin.com",
    icon: linkedin
  },
]

export const sidebarData = [
  {
    title: "Women's Fashion",
    link: "/shop/womens-fashion"
  },
  {
    title: "Men's Fashion",
    link: "/shop/mens-fashion"
  },
  {
    title: "Electronics",
    link: "/shop/electronics"
  },
  {
    title: "Home & Lifestyle",
    link: "/shop/home-lifestyle"
  },
  {
    title: "Medicine",
    link: "/shop/medicine"
  },
  {
    title: "Sports & Outdoor",
    link: "/shop/sports-outdoor"
  },
  {
    title: "Baby's & Toys",
    link: "/shop/baby-toys"
  },
  {
    title: "Groceries & Pets",
    link: "/shop/groceries-pets"
  },
  {
    title: "Health & Beauty",
    link: "/shop/health-beauty"
  },
]


export const heroImages = [
  {
    link: "/shop/nabil-bank",
    src: nabilBankAd
  },
  {
    link: "/shop/beauty-products",
    src: beautyAd
  },
  {
    link: "/shop/global-products",
    src: globalAd
  },
  {
    link: "/shop/powders",
    src: powderAd
  },
  {
    link: "/shop/electronics",
    src: electronicsAd
  }
];

export const flashSales = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    price: 160,
    discount: 25, // Random Discount Percentage
    rating: 4.5,
    reviews: 88,
    stock: 30, // Random stock value
    image: gamepad
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    price: 1160,
    discount: 15,
    rating: 4.3,
    reviews: 75,
    stock: 20,
    image: keyboard
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    price: 400,
    discount: 8,
    rating: 4.7,
    reviews: 99,
    stock: 15,
    image: monitor
  },
  {
    id: 4,
    name: "S-Series Comfort Chair",
    price: 400,
    discount: 6,
    rating: 4.7,
    reviews: 99,
    stock: 25,
    image: chair
  }
];

export const categories = [
  {
    name: 'Phones',
    image: cellphone,
  },
  {
    name: 'Computers',
    image: cellphone,
  },
  {
    name: 'Smartwatch',
    image: cellphone,
  },
  {
    name: 'Camera',
    image: cellphone,
  },
  {
    name: 'Headphones',
    image: cellphone,
  },
  {
    name: 'Gaming',
    image: cellphone,
  },
]

export const bestSellers = [
  {
    id: 1,
    name: "The North Coat",
    price: 360,
    discount: 28, // Random Discount Percentage
    rating: 4.5,
    reviews: 65,
    stock: 40,
    image: jacket
  },
  {
    id: 2,
    name: "Gucci Duffle Bag",
    price: 1160,
    discount: 18,
    rating: 4.6,
    reviews: 65,
    stock: 18,
    image: gucciBag
  },
  {
    id: 3,
    name: "RGB Liquid CPU Cooler",
    price: 160,
    discount: 0, // No discount
    rating: 4.7,
    reviews: 65,
    stock: 22,
    image: cpuCooler
  },
  {
    id: 4,
    name: "Small Bookshelf",
    price: 360,
    discount: 20,
    rating: 4.5,
    reviews: 65,
    stock: 35,
    image: bookshelf
  }
];

export const exploreProducts = [
  {
    id: 1,
    name: "Breed Dry Dog Food",
    price: 100,
    discount: 0, // No discount
    rating: 4.5,
    reviews: 95,
    stock: 50,
    image: dogFood
  },
  {
    id: 2,
    name: "CANON EOS DSLR Camera",
    price: 360,
    discount: 0,
    rating: 4.6,
    reviews: 35,
    stock: 12,
    image: camera
  },
  {
    id: 3,
    name: "ASUS FHD Gaming Laptop",
    price: 700,
    discount: 0,
    rating: 4.7,
    reviews: 65,
    stock: 8,
    image: laptop
  },
  {
    id: 4,
    name: "Curology Product Set",
    price: 500,
    discount: 0,
    rating: 4.8,
    reviews: 145,
    stock: 20,
    image: curologySet
  },
  {
    id: 5,
    name: "Kids Electric Car",
    price: 960,
    discount: 0,
    rating: 4.5,
    reviews: 65,
    stock: 14,
    image: electricCar
  },
  {
    id: 6,
    name: "Jr. Zoom Soccer Cleats",
    price: 1160,
    discount: 0,
    rating: 4.6,
    reviews: 35,
    stock: 25,
    image: footballBoot
  },
  {
    id: 7,
    name: "GP11 Shooter USB Gamepad",
    price: 660,
    discount: 0,
    rating: 4.4,
    reviews: 55,
    stock: 30,
    image: gpPad
  },
  {
    id: 8,
    name: "Quilted Satin Jacket",
    price: 660,
    discount: 0,
    rating: 4.5,
    reviews: 55,
    stock: 19,
    image: satinJacket
  }
];

export const services = [
  {
    title: "Free and fast delivery",
    desc: "Free delivery for all orders over $140",
    image: delivery,
  },
  {
    title: "24/7 Customer Service",
    desc: "Friendly customer service available 24/7",
    image: customerService,
  },
  {
    title: "Money Back Guarantee",
    desc: "We return money within 30 days.",
    image: delivery,
  }
]

export const aboutUs = [
  {
    icon: customerService,
    amount: "10.5k",
    desc: "Sellers active on our site."
  },
  {
    icon: customerService,
    amount: "33k",
    desc: "Monthly Product Sale."
  },
  {
    icon: customerService,
    amount: "45.5k",
    desc: "Customers active in our site."
  },
  {
    icon: customerService,
    amount: "25k",
    desc: "Annual gross in our site."
  }
]

export const people = [
  {
    image: tomCruse,
    name: "Tom Cruise",
    position: "Founder & Chairman",
    twitterLink: "https://www.twitter.com",
    instagramLink: "https://www.instagram.com",
    linkedinLink: "https://www.linkedin.com",
  },
  {
    image: emmaWatson,
    name: "Emma Watson",
    position: "Managing Director",
    twitterLink: "https://www.twitter.com",
    instagramLink: "https://www.instagram.com",
    linkedinLink: "https://www.linkedin.com",
  },
  {
    image: willSmith,
    name: "Will Smith",
    position: "Prodcut Manager",
    twitterLink: "https://www.twitter.com",
    instagramLink: "https://www.instagram.com",
    linkedinLink: "https://www.linkedin.com",
  },
]