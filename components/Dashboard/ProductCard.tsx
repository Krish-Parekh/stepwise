import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import AirMax from "@/public/air_max.svg";

interface IProductCard {
  id: number;
  name: string;
  category: string;
  percentageOff?: string;
  price: number;
  originalPrice?: number;
  hasDiscount?: boolean;
}

interface IProductCardProps {
  product: IProductCard;
}

export default function ProductCard({ product }: IProductCardProps) {
  return (
    <Card className="cursor-pointer shadow-xl">
      <CardContent className="space-y-4 p-0">
        <div className="flex items-center justify-center bg-slate-100">
          <Image src={AirMax} height={300} width={300} alt="air-max" />
        </div>
        <div className="px-4">
          {product.hasDiscount ? (
            <p className="text-md text-orange-500">
              {product.percentageOff} off
            </p>
          ) : null}
          <h2 className="text-lg font-medium">{product.name}</h2>
          <p className="text-slate-500">{product.category}</p>
          <div className="my-4 flex items-center gap-x-2">
            <h2 className="text-xl font-bold">₹ {product.price}</h2>
            {product.hasDiscount ? (
              <span className="text-slate-500 line-through">
                ₹ {product.originalPrice}
              </span>
            ) : null}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
