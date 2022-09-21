// User => [U,s,e,r] || string => string[]
// [U,s,e,r] => User || string[] => string

export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;

export function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join('') // string
  } else if (typeof input === 'string') {
    return input.split('') // string[]
  } else if (typeof input === 'number') {
    return true;
  }
}

const rtaArray = parseStr('User');
console.log({ rtaArray });
rtaArray.join();

const rtaString = parseStr(['U', 's', 'e', 'r']);
console.log({ rtaString });
rtaString.toLowerCase();

const rtaNumber = parseStr(123);
console.log({ rtaNumber });