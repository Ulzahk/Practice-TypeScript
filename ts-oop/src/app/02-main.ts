import { ProductMemoryService } from "./services/product-memory.service";


const productService = new ProductMemoryService();
productService.create({
  title: 'product1',
  price: 100,
  description: 'text',
  categoryId: '0e08d193-467b-49fd-a698-691b12c19ce4',
  images: []
});

const products = productService.getAll();
const productId = products[0].id;

productService.update(productId, {
  title: 'new title'
})
const rta = productService.findOne(productId);
console.log(rta);
