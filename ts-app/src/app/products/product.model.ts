import { Category } from '../categories/category.model';
import { BaseModel } from '../base.model';

export type Sizes = 'S' | 'M' | 'L' | 'XL';
export type userId = string | number;

export interface Product extends BaseModel {
  title: string;
  stock: number;
  size?: Sizes;
  category: Category
}