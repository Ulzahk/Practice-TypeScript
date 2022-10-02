export class MyDate {
  public year: number;
  public month: number;
  public day: number;

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
console.log(myDate.day);
myDate.day = 12;
console.log(myDate.day);
