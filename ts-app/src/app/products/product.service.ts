import { Product } from "./product.model";
import { CreateProductDto, FindProductDto, UpdateProductDto } from "./product.dto";
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


export const findProducts = (dto: FindProductDto): Product[] => {
  // code
  // dto.color = 'red'
  return products;
}

export const updateProduct = (id: string, changes: UpdateProductDto): Product => {
  const index = products.findIndex((item) => item.id === id);
  const previousData = products[index];

  products[index] = {
    ...previousData,
    ...changes,
  }

  return products[index];
}

export const deleteProduct = (id: string, data: Product) => {
  // code
}