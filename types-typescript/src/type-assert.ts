export = {};
// <> //Angle Bracket Syntax
let username: any;
username = 'ulzahk';
username = 'luis';

// Tenemos una cadena, TS confia en mi!
let message: string = (<string>username).length > 5 ?
  `Welcome ${username}`:
  'Username is too short';
  
console.log('message', message);

let usernameWithId: any = 'ulzahk 1';
// Como obtener el username?
username = (<string>usernameWithId).substring(0, 6);
console.log('Username only', username);

// Sintaxis "as"
message = (username as string).length > 5 ?
`Welcome ${username}`:
'Username is too short';

let helloUser: any;
helloUser = 'Hello Carlos';
username = (helloUser as string).substring(6);
console.log('username',username)
