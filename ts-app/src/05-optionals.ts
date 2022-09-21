export const createProduct = (
  id: string | number,
  isNew: boolean,
  stock?: number,
) => {
  return {
    id,
    stock: stock ?? 10,
    isNew: isNew ?? true,
  }
};

const productOne = createProduct(1, true, 12);
const productTwo = createProduct(1, true);
const productThree = createProduct(1, false, 0);
console.log(productOne, productTwo, productThree)