import { Product } from "../models/product.model";
import { CreateProductDto, UpdateProductDto } from "../dtos/product.dtos";
import { faker } from "@faker-js/faker";
import { ProductService } from "../models/product-service.model";


export class ProductMemoryService implements ProductService {
  private products: Product[] = [];

  create(data: CreateProductDto): Product {
    const newProduct = {
      ...data,
      id: faker.datatype.uuid(),
      category: {
        id: faker.datatype.uuid(),
        name: faker.commerce.department(),
        image: faker.image.imageUrl(),
      }
    }

    return this.add(newProduct);
  };

  add(product: Product) {
    this.products.push(product);
    return product;
  }

  update(id: Product['id'], changes: UpdateProductDto): Product {
    const index = this.products.findIndex((item) => item.id === id);
    const previousData = this.products[index];

    this.products[index] = {
      ...previousData,
      ...changes,
    }

    return this.products[index];
  }

  findOne(id: Product['id']) {
    return this.products.find(item => item.id === id);
  }

  getAll() {
    return this.products;
  }
}