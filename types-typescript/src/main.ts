console.log('Hola TypeScript con Platzi');

// Number

// Explicito
let phone: Number;
phone = 1;
phone = 54234567;
//phone = 'Hola'; // Error

// Inferido
let phoneNumber = 5423844571;
phoneNumber = 123;
//phoneNumber = 'asdc0' // Error

let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o7144;

// Tipo: Boolean
// Explicito
let isPro: boolean;
isPro = true;
// isPro = 1 // Error

// Inferido
let isUserPro = false;
// isUserPro = 10 // Error

// Tipo: String
let username: string = 'ulzahk';
username = 'Francisco';
// username = true; // Error

// Template-String
// Uso de back-tick
let userInfo: string;
userInfo = `
  User info:
  username: ${username}
  firstname: ${username + ' Suarez'}
  phone: ${phone}
  isPro: ${isPro}
`;
console.log('userInfo: ', userInfo)