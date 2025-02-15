import { Iaddress } from '../components/address/model/iaddress';

export interface Iorder {
  id: string;
  img: string;
  userId: string;
  createAt: Date;
  step: string;
  address: Iaddress;
  selectedDelivery: string;
  selectedPayment: string;
  totalPrice: number;
  products: { id: string; qty: number; img: string }[];
  
}
