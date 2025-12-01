import { IBaseEntity } from "./IBaseEntity";

interface IProductPrice {
  calculated_price: {
    calculated_amount: number;
  };
}

export interface IProduct extends IBaseEntity {
  title: string;
  description: string;
  thumbnail: string;
  variants: IProductPrice[];
}