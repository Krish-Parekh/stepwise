import Footer from "@/components/Dashboard/Footer";
import Navbar from "@/components/Dashboard/Navbar";
import ProductCard from "@/components/Dashboard/ProductCard";
import { ProductCarousel } from "@/components/Product/Carousel";
import ProductDetail from "@/components/Product/Detail";
import { PRODUCT_CARD_DATA, PRODUCT_DETAIL } from "@/data/ProductMock";
import React from "react";

export default function ProductPage() {
  return (
    <div className="h-screen space-y-8">
      <Navbar />
      <section className="grid grid-cols-2 p-4">
        <ProductCarousel images={PRODUCT_DETAIL.images} />
        <ProductDetail product={PRODUCT_DETAIL} />
      </section>
      <section className="space-y-6 p-4">
        <h2 className="text-center text-xl font-medium">You may also like</h2>
        <div className="grid grid-cols-4 gap-8">
          {PRODUCT_CARD_DATA.slice(4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
