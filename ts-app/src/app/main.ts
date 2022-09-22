import { addProducts } from './products/product.service';

addProducts({
  id: '1',
  title: 'p1',
  createdAt: new Date(),
  updatedAt: new Date(),
  stock: 90,
  category: {
    id: 'id',
    name: 'categoryOne',
    createdAt: new Date(),
    updatedAt: new Date(),
  }
});
