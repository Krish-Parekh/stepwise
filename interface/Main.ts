export interface IProductCard {
    id: number;
    name: string;
    category: string;
    percentageOff?: string;
    price: number;
    originalPrice?: number;
    hasDiscount?: boolean;
}
export interface IProductReview {
    id: number;
    name: string;
    rating: number;
    comment: string;
}

export interface IProductSize {
    id: number;
    size: number;
    unit: string;
}

export interface IProductDetail {
    id: number;
    name: string;
    category: string;
    price: number;
    originalPrice: number;
    hasDiscount: boolean;
    percentageOff: string;
    images: string[];
    sizes: IProductSize[];
    available_quantity: number[];
    description: string;
    rating: number;
    reviews: IProductReview[];
}
