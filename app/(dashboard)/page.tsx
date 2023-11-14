import Footer from "@/components/Dashboard/Footer";
import Navbar from "@/components/Dashboard/Navbar";
import ProductCard from "@/components/Dashboard/ProductCard";
import { Button } from "@/components/ui/button";

interface IProductCard {
  id: number;
  name: string;
  category: string;
  percentageOff?: string;
  price: number;
  originalPrice?: number;
  hasDiscount?: boolean;
}

const PRODUCT_CARD_DATA: IProductCard[] = [
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

export default function HomePage() {
  return (
    <div className="h-screen">
      <Navbar />
      <section className="flex h-full flex-col items-center justify-center gap-y-4 bg-black text-center text-white">
        <h1 className="text-6xl font-bold uppercase">New Collection</h1>
        <p className="text-lg text-slate-300">
          Explore wide range of collection for both men and women, <br />{" "}
          blending style and performance seamlessly
        </p>
        <Button className="mt-8 bg-white text-black">Explore Now</Button>
      </section>
      <section className="h-full space-y-8 p-8">
        <h1 className="text-center text-2xl font-bold uppercase text-black">
          Trending Collections
        </h1>
        <div className="grid grid-cols-4 gap-8">
          {PRODUCT_CARD_DATA.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
