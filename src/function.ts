// Crear una fotografái
/* function createPicture(title, date, size){
  // title
} */

type SquareSize = '100x100' | '500x500' | '1000x1000'

// Usamos TS, definimos tipos para parametros
// function createPicture(title: string, date: string, size: SquareSize){
//   //Se crea la fotografia
//   console.log('create Picture using', title, date, size)
// }

// createPicture('My Birthday', '2020-03-10','500x500');
// createPicture('Colombia Trip', '2020-03-01');

// Parametros opcionales
function createPicture(title?: string, date?: string, size?: SquareSize){
  //Se crea la fotografia
  console.log('create Picture using', title, date, size)
}

createPicture('My Birthday', '2020-03-10','500x500');
createPicture('Colombia Trip', '2020-03-01');
createPicture('Colombia Trip');
createPicture();

// Flat Array Function
let createPic = (title: string, date: string, size: SquareSize):object =>{
  // return {
  //   title: title,
  //   date: date,
  //   size: size
  // };
  return {title, date, size};
};

const picture = createPic('Platzi session', '2020-03-10', '100x100');
console.log('picture', picture)