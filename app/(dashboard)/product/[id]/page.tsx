import Navbar from "@/components/Dashboard/Navbar";
import { ProductCarousel } from "@/components/Product/Carousel";
import ProductDetail from "@/components/Product/Detail";
import { PRODUCT_DETAIL } from "@/data/ProductMock";
import React from "react";

export default function ProductPage() {
  return (
    <div className="h-screen">
      <Navbar />
      <section className="grid grid-cols-2 p-4">
        <ProductCarousel images={PRODUCT_DETAIL.images} />
        <ProductDetail product={PRODUCT_DETAIL} />
      </section>
    </div>
  );
}
