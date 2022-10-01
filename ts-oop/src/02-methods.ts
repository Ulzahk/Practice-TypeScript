export class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
  }

  add(ammount: number, type: 'days' | 'months' | 'year') {
    if (type === 'days') {
      this.day += ammount;
    }
    if (type === 'months') {
      this.month += ammount;
    }
    if (type === 'year') {
      this.year += ammount;
    }
  }
}

const myDate = new MyDate(2000, 1, 2);
console.log(myDate.printFormat());
myDate.add(3, 'days');
console.log(myDate.printFormat());
myDate.add(1, 'months');
console.log(myDate.printFormat());
console.log(myDate.day);
console.log(myDate.month);
console.log(myDate.year);