export {};

// [1, 'user']
let user: [number, string];
user = [1, 'ulzahk'];

console.log('user', user);
console.log('username', user[1]);
console.log('username', user[1].length);
console.log('id', user[0]);

// Tuplas con varios valores
// id, username, isPro
let userInfo: [number, string, boolean]
userInfo = [2, 'Javier', true];
console.log('userInfo', userInfo);

// Arreglo de Tuplas
let array: [number, string][] = [];
array.push([1, 'ulzahk']); //1
array.push([2, 'Pedro']);//2
array.push([3, 'Mario']);//3
console.log('array', array);

// Uso de funciones Array
// Mario -> Mario001

array[2][1] = array[2][1].concat('001');
console.log('array', array);