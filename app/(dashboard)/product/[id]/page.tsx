"use client";
import Footer from "@/components/Dashboard/Footer";
import Navbar from "@/components/Dashboard/Navbar";
import ProductCard from "@/components/Dashboard/ProductCard";
import { CarouselDemo } from "@/components/Product/Carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PRODUCT_CARD_DATA } from "@/data/ProductMock";
import { Heart, Minus, Plus } from "lucide-react";
import React from "react";

interface IProductPagePrams {
  id: string;
}

interface IProductPageProps {
  params: IProductPagePrams;
}

export default function ProductPage({ params }: IProductPageProps) {
  console.log(params);
  return (
    <div className="h-screen space-y-16">
      <Navbar />
      <div className="grid grid-cols-3 p-4">
        <div className=" col-span-2 justify-self-center">
          <CarouselDemo />
        </div>
        <div className="max-w-xl space-y-4">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-medium">Nike Vomero 5</h2>
              <p className="text-slate-500">Men Shoes</p>
            </div>
            <div className="flex items-center gap-x-4">
              <h2 className="text-xl font-bold">₹ 7,499.00</h2>
              <span className="text-slate-500 line-through">₹ 14,999.00</span>
              <p className="text-md text-orange-500">50% off</p>
            </div>
            <span className="text-sm text-green-500">
              inclusive of all taxes
            </span>
          </div>
          <div>
            <h2 className="text-lg font-medium">Select Size</h2>
            <Select>
              <SelectTrigger className="max-w-md">
                <SelectValue placeholder="Select a size" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="6">6 UK</SelectItem>
                  <SelectItem value="9">9 UK</SelectItem>
                  <SelectItem value="10">10 UK</SelectItem>
                  <SelectItem value="11">11 UK</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <h2>Select Quantity</h2>
            <div className="flex items-center gap-x-4">
              <Button variant="outline">
                <Plus />
              </Button>
              <span>1</span>
              <Button variant="outline">
                <Minus />
              </Button>
            </div>
          </div>

          <div className="flex space-x-6 ">
            <Button className="flex-1">Add to Cart</Button>
            <Button variant="outline">
              <Heart />
            </Button>
          </div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Description</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Review</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="space-y-16 p-4">
        <h2 className="text-center text-2xl font-medium">You May Also Like</h2>

        <div className="grid grid-cols-4 gap-8">
          {PRODUCT_CARD_DATA.slice(4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
