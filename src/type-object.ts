// Type: object
let user: object;
user = {} //Object

user = {
  id: 1,
  username: 'paparazzi',
  firstName: 'Pablo',
  isPro: true
};

console.log('user', user);
// Object vs object


const myObj = {
  id: 1,
  username: 'paparazzi',
  firstName: 'Pablo',
  isPro: true
};

const isIntance = myObj instanceof Object; //clase Object de JavaScript
console.log('isInstance', isIntance)

console.log('user.username', myObj.username);
