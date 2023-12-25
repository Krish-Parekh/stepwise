import { IProductCard, IProductDetail, IProductReview, IProductSize } from "@/interface/Main";
export const PRODUCT_CARD_DATA: IProductCard[] = [
  {
    id: 1,
    name: "Nike Vomero 5",
    category: "Men's shoes",
    percentageOff: "50%",
    price: 7999,
    originalPrice: 14999,
    hasDiscount: true,
  },
  {
    id: 2,
    name: "Fier Nitro Women's Sneakers",
    category: "Women's shoes",
    percentageOff: "16%",
    price: 6799,
    originalPrice: 7999,
    hasDiscount: true,
  },
  {
    id: 3,
    name: "Rider Future Vintage Unisex Sneakers",
    category: "Unisex shoes",
    percentageOff: "30%",
    price: 6299,
    originalPrice: 8999,
    hasDiscount: true,
  },
  {
    id: 4,
    name: "Nike Precision 6",
    category: "Basket ball Men's Shoes",
    price: 5695,
    hasDiscount: false,
  },
  {
    id: 5,
    name: "Nike Vomero 5",
    category: "Men's shoes",
    percentageOff: "50%",
    price: 7999,
    originalPrice: 14999,
    hasDiscount: true,
  },
  {
    id: 6,
    name: "Fier Nitro Women's Sneakers",
    category: "Women's shoes",
    percentageOff: "16%",
    price: 6799,
    originalPrice: 7999,
    hasDiscount: true,
  },
  {
    id: 7,
    name: "Rider Future Vintage Unisex Sneakers",
    category: "Unisex shoes",
    percentageOff: "30%",
    price: 6299,
    originalPrice: 8999,
    hasDiscount: true,
  },
  {
    id: 8,
    name: "Nike Precision 6",
    category: "Basket ball Men's Shoes",
    price: 5695,
    hasDiscount: false,
  },
];


export const PRODUCT_DESCRIPTION = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."

export const PRODUCT_IMAGES = [
  "https://picsum.photos/300",
  "https://picsum.photos/300",
  "https://picsum.photos/300",
  "https://picsum.photos/300",
  "https://picsum.photos/300",
];

export const PRODUCT_SIZES: IProductSize[] = [
  {
    id: 1,
    size: 6,
    unit: "UK",
  },
  {
    id: 2,
    size: 7,
    unit: "UK",
  },
  {
    id: 3,
    size: 8,
    unit: "UK",
  },
  {
    id: 4,
    size: 9,
    unit: "UK",
  },
  {
    id: 5,
    size: 10,
    unit: "UK",
  }
];
export const PRODUCT_AVAILABLE_QUANTITY = [1, 2, 3, 4, 5];
export const PRODUCT_REVIEW: IProductReview[] = [
  {
    id: 1,
    name: "John Doe",
    rating: 4.5,
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    name: "John Doe",
    rating: 4.5,
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  }
]

export const PRODUCT_DETAIL: IProductDetail = {
  id: 1,
  name: "Nike Vomero 5",
  category: "Men's Shoes",
  price: 7499,
  originalPrice: 9999,
  hasDiscount: true,
  percentageOff: "25%",
  images: PRODUCT_IMAGES,
  sizes: PRODUCT_SIZES,
  available_quantity: PRODUCT_AVAILABLE_QUANTITY,
  description: PRODUCT_DESCRIPTION,
  rating: 4.5,
  reviews: PRODUCT_REVIEW,
};