export class MyDate {
  constructor(
    private year: number = 2000,
    private month: number = 7,
    private _day: number = 9,
  ) { }

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
      this._day += ammount;
    }
    if (type === 'months') {
      this.month += ammount;
    }
    if (type === 'year') {
      this.year += ammount;
    }
  }

  get day() {
    return this._day;
  }

  get isLeadYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return true;
    return this.year % 4 === 0;
  }
}

const myDate = new MyDate(1997, 1, 2);
console.log(myDate.printFormat());
// console.log(myDate.getDay());
console.log(myDate.day);
console.log(myDate.isLeadYear);

const myDate2 = new MyDate(2000, 1, 2);
console.log('2000', myDate2.isLeadYear);

const myDate3 = new MyDate(2001, 1, 2);
console.log('2001', myDate3.isLeadYear);

const myDate4 = new MyDate(2004, 1, 2);
console.log('2004', myDate4.isLeadYear);