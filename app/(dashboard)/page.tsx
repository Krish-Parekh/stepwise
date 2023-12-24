import Footer from "@/components/Dashboard/Footer";
import Navbar from "@/components/Dashboard/Navbar";
import ProductCard from "@/components/Dashboard/ProductCard";
import { Button } from "@/components/ui/button";
import { PRODUCT_CARD_DATA } from "@/data/ProductMock";
import Link from "next/link";

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
            <Link key={product.id} href={`/product/${product.id}`}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
