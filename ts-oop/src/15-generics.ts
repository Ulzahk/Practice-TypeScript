// function getValue(value: unknown) {
//   return value
// }

// import axios from "axios";
import { Dog } from "./08-inheritance";

function getValue<T>(value: T) {
  const array: T[] = [value];
  return value
}

// getValue<number, string>(12).toFixed();
getValue<number>(12).toFixed();
getValue<string>('12').toLowerCase();
getValue<number[]>([1, 2, 3]).forEach;
const fifi = new Dog('fifi', 'John');
getValue<Dog>(fifi).greeting();
// Promise<boolean>
// axios.get<string[]>