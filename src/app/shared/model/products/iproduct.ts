import { Ireview } from './ireview';
import { Ispecifications } from './ispecifications';
export interface Iproduct {
  id:string;
  category: string;
  currentPrice: number;
  description: string;
  details: string[]; // مصفوفة من التفاصيل
  discount: number;
  price:number;
  gender: string;
  brand:string;
  stock:number;
  made:string;
  qty:any;
  color:string[]
  model:string;
  images: string[];
  name: string;
  oldPrice: number;
  isBestSeller: boolean;
  isFeatured: boolean;
  isFlashSale: boolean;
  reviews: Ireview[];
  rating:number
  specifications: Ispecifications[];
}
