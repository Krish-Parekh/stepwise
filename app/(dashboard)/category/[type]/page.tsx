"use client";
import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/Dashboard/Navbar";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Footer from "@/components/Dashboard/Footer";
import { PRODUCT_CARD_DATA } from "@/data/ProductMock";
import Link from "next/link";
import ProductCard from "@/components/Dashboard/ProductCard";

export default function CategoryPage({ params }: { params: { type: string } }) {
  console.log(params);
  return (
    <div className="h-screen space-y-8">
      <Navbar />
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={15}>
          <div className="h-screen space-y-4 p-4">
            <div className="flex justify-between">
              <h1 className="font-medium">Filters</h1>
              <span className="cursor-pointer text-sm text-slate-500 underline">
                Clear all
              </span>
            </div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Gender</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-x-4">
                      <Checkbox />
                      <Label>Men</Label>
                    </div>
                    <div className="flex items-center gap-x-4">
                      <Checkbox />
                      <Label>Women</Label>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Category</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-x-4">
                      <Checkbox />
                      <Label>Casual Shoes</Label>
                    </div>
                    <div className="flex items-center gap-x-4">
                      <Checkbox />
                      <Label>Sport Shoes</Label>
                    </div>
                    <div className="flex items-center gap-x-4">
                      <Checkbox />
                      <Label>Sneakers</Label>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Sizes</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-x-4">
                      <Checkbox />
                      <Label>10 UK</Label>
                    </div>
                    <div className="flex items-center gap-x-4">
                      <Checkbox />
                      <Label>9 UK</Label>
                    </div>
                    <div className="flex items-center gap-x-4">
                      <Checkbox />
                      <Label>8 UK</Label>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Price</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-x-4">
                      <Checkbox />
                      <Label>High to Low</Label>
                    </div>
                    <div className="flex items-center gap-x-4">
                      <Checkbox />
                      <Label>Low to High</Label>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Ratings</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-x-4">
                      <Checkbox />
                      <Label>5</Label>
                    </div>
                    <div className="flex items-center gap-x-4">
                      <Checkbox />
                      <Label>4</Label>
                    </div>
                    <div className="flex items-center gap-x-4">
                      <Checkbox />
                      <Label>3</Label>
                    </div>
                    <div className="flex items-center gap-x-4">
                      <Checkbox />
                      <Label>2</Label>
                    </div>
                    <div className="flex items-center gap-x-4">
                      <Checkbox />
                      <Label>1</Label>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={75}>
          <div className="space-y-4 p-4">
            <h1 className="text-center text-xl font-semibold uppercase">
              {params.type}
            </h1>
            <div className="grid grid-cols-4 gap-8">
              {PRODUCT_CARD_DATA.map((product) => (
                <Link key={product.id} href={`/product/${product.id}`}>
                  <ProductCard product={product} />
                </Link>
              ))}
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
      <Footer />
    </div>
  );
}
