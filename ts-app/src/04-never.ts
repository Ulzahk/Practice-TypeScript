const withoutEnd = () => {
  while (true) {
    console.log('Nuever stop learning');
  }
};

const fail = (message: string) => {
  throw new Error(message);
};

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'It\'s a string';
  } else if (Array.isArray(input)) {
    return 'It\s an array';
  }
  return fail('not match');
}

console.log(example('Hello'));
console.log(example([1, 2, 3]));
console.log(example(123));
console.log(example('Hello after error'));
