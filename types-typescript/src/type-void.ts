// Void

// Tipo Explicito
function showInfo(user: any) {
  console.log('User Info', user.id, user.username, user.firstName);
  // return 'Hola';
}

showInfo({id: 1, username: 'ulzahk', firstName: 'Francisco'})

// Tipo Inferido
const showFormattedInfo = (user: any) => {
  console.log('User Info', `
    id: ${user.id},
    username: ${user.username},
    firstName: ${user.firstName}
  `);
};

showFormattedInfo({id: 1, username: 'ulzahk', firstName: 'Francisco'});

// Tipo Void, como tipo de dato de una variable
let unusable: void;
// unusable = null;
unusable = undefined;

// Tipo: Never
function handleError(code: number, message: string) {
  // Proceso de tu código
  // Generar un mensaje
  try {
    throw new Error(`${message}. Code: ${code}`);
  } catch (error) {
    
  }
}
handleError(404, 'Not Found');

function sumNumber(limit: number): never {
  let sum = 0;
  while(true){
    sum++
  }
}

sumNumber(10); //Ciclo infinito;
