(() => {
  let productTitle = 'My amazing project';
  // productTitle = null;
  // productTitle = () => {};
  // productTitle = 123;
  productTitle = 'My amazing project changed';
  console.log({ productTitle });

  const productDescription = "I'm bla bla bla";
  console.log({ productDescription });

  let productPrice = 100;
  let isNew: boolean = true;

  const summary = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${productPrice}
    isNew: ${isNew}
  `;
  console.log({ summary })

  // const myString: String = '';
  const myString: string = '';
})();