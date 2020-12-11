// Void

// Tipo Explicito
function showInfo(user: any) {
  console.log('User Info', user.id, user.username, user.firstName);
  // return 'Hola';
}

showInfo({id: 1, username: 'ulzahk', firstName: 'Francisco'})