(() => {
  let prices = [1, 2, 3, 4, 5, '', true];
  prices.push('asd');
  prices.push(true);
  // prices.push({});
  prices.push(6);

  let products = ['hello', true];
  products.push(false);

  let mixed: (number | string | boolean | Object)[] = ['hello', true];
  mixed.push(12);
  mixed.push('12');
  mixed.push(true);
  mixed.push({});
  mixed.push([]);

  // let numbers = ['as'];
  let numbers = [1, 2, 3];
  numbers.map(item => item * 2);
})();