"use client";

import { IProductDetail } from "@/interface/Main";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import React, { useState } from "react";
import { Heart, Minus, Plus } from "lucide-react";

interface IProductDetailProps {
  product: IProductDetail;
}
export default function ProductDetail({ product }: IProductDetailProps) {
  const [counter, setCounter] = useState(0);
  const [favorite, setFavorite] = useState(false);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const handleFavorite = () => {
    console.log("favorite", favorite);
    setFavorite(!favorite);
  };

  return (
    <div className="max-w-xl space-y-6">
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-medium">{product.name}</h2>
          <p className="text-slate-500">{product.category}</p>
        </div>

        <div className="flex items-center gap-x-4">
          <h2 className="text-xl font-bold">₹ {product.price}</h2>
          {product.hasDiscount ? (
            <>
              <span className="text-slate-500 line-through">
                ₹ {product.originalPrice}
              </span>
              <span className="text-md text-orange-500">
                {product.percentageOff} off
              </span>
            </>
          ) : null}
        </div>

        <span className="text-sm font-semibold text-green-500">
          inclusive all taxes
        </span>
      </div>
      <div className="space-y-4">
        <Label>Select Size</Label>
        <Select>
          <SelectTrigger>
            <SelectValue>Select Size</SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {product.sizes.map((sizeCategory) => {
                const { id, size, unit } = sizeCategory;
                return (
                  <SelectItem
                    key={id}
                    value={id.toString()}
                  >{`${size} ${unit}`}</SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-4">
        <Label>Select Quantity</Label>
        <div className="flex items-center gap-x-4">
          <Button variant="outline" onClick={handleDecrement}>
            <Minus size={16} />
          </Button>
          <span className="text-lg font-medium">{counter}</span>
          <Button variant="outline">
            <Plus size={16} onClick={handleIncrement} />
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-x-4">
        <Button className="flex-1">Add to cart</Button>
        <Button variant="outline" onClick={handleFavorite}>
          {favorite ? <Heart size={16} fill="black" /> : <Heart size={16} />}
        </Button>
      </div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Description</AccordionTrigger>
          <AccordionContent>{product.description}</AccordionContent>
        </AccordionItem>
      </Accordion>
      {/* Review Accordian */}
    </div>
  );
}
