import { Product } from "./product.model";

export const products: Product[] = [];

export const addProducts = (data: Product) => {
  // data.id = 'abc';
  products.push(data);
};

export const getProduct = (id: string) => {
  // code
}

export const updateProduct = (id: string, data: Product) => {
  // code
}

export const deleteProduct = (id: string, data: Product) => {
  // code
}