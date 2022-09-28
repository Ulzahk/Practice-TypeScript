import { addProducts, products, updateProduct, findProducts } from './products/product.service';
import { faker } from '@faker-js/faker';

for (let index = 0; index < 50; index++) {
  addProducts({
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.commerce.color(),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    title: faker.color.human(),
    price: parseInt(faker.commerce.price()),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(['tag1', 'tag2', 'tag3']),
    stock: faker.datatype.number({ min: 10, max: 100 }),
    categoryId: faker.datatype.uuid(),
  });

  console.log(products);
  const product = products[0];
  updateProduct(product.id, {
    title: 'New title',
    stock: 80
  })

  findProducts({
    stock: 10,
    color: 'red',
  })
}
