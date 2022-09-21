// User => [U,s,e,r] || string => string[]
// [U,s,e,r] => User || string[] => string

function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join('') // string
  }
  return input.split('') // string[]
}

const rtaArray = parseStr('User');
console.log({ rtaArray });
if (Array.isArray(rtaArray)) {
  rtaArray.join();
}
const rtaString = parseStr(['U', 's', 'e', 'r']) as string;
console.log({ rtaString });
rtaString.toLowerCase();