export interface IProductCard {
    id: number;
    name: string;
    category: string;
    percentageOff?: string;
    price: number;
    originalPrice?: number;
    hasDiscount?: boolean;
}