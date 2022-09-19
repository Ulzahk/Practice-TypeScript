const prices: (number | string)[] = [1, 2, 3, 'as'];
prices.push(1);
prices.push('1');

let user: [string, number] = ['user1', 15];
user = ['user2', 47];

const [username, age] = user;
console.log({ username, age });