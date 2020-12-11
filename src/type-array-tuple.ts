// Corchetes []

// Explicito
let users: string[];
users = ['ulzahk', 'francisco', 'juan'];
// users = [1, true, 'hola']; // Error

// Inferido
let otherUsers = ['ulzahk', 'francisco', 'juan'];
// otherUsers = [1, true, 'hola']; // Error

// Array<Tipo>
let pictureTitles: Array<string>;
pictureTitles = ['Favorite Sunset', 'Vacation Time', 'Landscape'];

// Accediendo a los valores en un Array
console.log('firstUser', users[0]);
console.log('firstTitle', pictureTitles[0]);

// Propiedades en Array
console.log('users.length', users.length);

// Usos de funciones en Array
users.push('PlatziUser');
users.sort();
console.log('users', users);
