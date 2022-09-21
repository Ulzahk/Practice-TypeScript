export const createProduct = (
  id: string | number,
  isNew: boolean = true,
  stock: number = 10,
) => {
  return {
    id,
    stock,
    isNew
  }
};

const productOne = createProduct(1, true, 12);
const productTwo = createProduct(1, true);
const productThree = createProduct(1, false, 0);
const productFour = createProduct(1, true, 100);
const productFive = createProduct(1, true);
console.log(productOne, productTwo, productThree, productFour, productFive)