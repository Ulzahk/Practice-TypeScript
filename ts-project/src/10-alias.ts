(() => {
  type UserID = string | number;
  let userId: UserID;

  //Literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSizes: Sizes;
  shirtSizes = 'S';
  shirtSizes = 'L';
  shirtSizes = 'XL';
  // shirtSizes = 's';

  function greeting(userId: UserID, size: Sizes) {
    if (typeof userId === 'string') {
      console.log(`string ${userId.toLowerCase()}`);
    }
  }

  greeting(111, 'S');
})();