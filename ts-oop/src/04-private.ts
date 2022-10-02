export class MyDate {
  private year: number;
  private month: number;
  private day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
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

  getDay() {
    return this.day;
  }
}

const myDate = new MyDate(2000, 1, 2);
console.log(myDate.printFormat());
console.log(myDate.getDay());
