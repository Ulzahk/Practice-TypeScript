(() => {
  const login = (data: { email: string, password: number }) => {
    console.log(data.email, data.password);
  }

  // login('example@example.com', 12345*);
  login({
    email: 'example@example.com',
    password: 12345
  })

  type Sizes = 'S' | 'M' | 'L' | 'XL';
  const products: any[] = [];

  const addProduct = (
    data: {
      title: string,
      createdAt: Date,
      stock: number,
      size?: Sizes
    }
  ) => {
    products.push(data);
  }
  addProduct({
    title: 'Prod1',
    createdAt: new Date(),
    stock: 12,
    size: 'XL'
  });

  console.log({ products });
})();