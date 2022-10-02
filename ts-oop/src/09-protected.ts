export class Animal {
  constructor(
    protected name: string
  ) { }

  move() {
    console.log('Moving along!');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }

  protected doSomething() {
    console.log('Dooo');
  }
}

export class Dog extends Animal {

  constructor(
    name: string,
    public owner: string,
  ) {
    super(name);
  }

  woof(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log(`Woof! ${this.name}`);
    }

    this.doSomething();
  }

  move(): void {
    // code
    console.log('Moving as a dog');
    super.move();
  }

}

const fifi = new Animal('Fifi');
fifi.move();
console.log(fifi.greeting());

const cheis = new Dog('Cheis', 'John');
cheis.move();
console.log(cheis.greeting());
cheis.woof(1);
console.log(cheis.owner);
// cheis.name = 'another name';
cheis.woof(1);
cheis.move();