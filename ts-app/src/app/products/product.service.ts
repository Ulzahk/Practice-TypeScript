import { Product } from "./product.model";
import { CreateProductDto } from "./product.dto";
import { faker } from "@faker-js/faker";

export const products: Product[] = [];

export const addProducts = (data: CreateProductDto): Product => {
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: faker.datatype.uuid(),
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    }
  }
  products.push(newProduct);
  return newProduct;
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