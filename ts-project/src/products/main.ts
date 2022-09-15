import { products, createProduct, calcStock } from './product.service'

createProduct({
  name: 'Prod1',
  createdAt: new Date(),
  stock: 12,
});
createProduct({
  name: 'Prod2',
  createdAt: new Date(),
  stock: 12,
  size: 'XL'
});

const total = calcStock(products);
console.log({ products, total });