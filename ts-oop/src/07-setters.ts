export class MyDate {
  constructor(
    private year: number = 2000,
    private _month: number = 7,
    private _day: number = 9,
  ) { }

  printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this._month);
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
      this._month += ammount;
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

  get month() {
    return this._month
  }

  set month(newValue) {
    if (newValue >= 1 && newValue <= 12) {
      this._month = newValue;
    } else {
      throw new Error('month out of range');
    }
  }
}

const myDate = new MyDate(1997, 1, 2);
console.log(myDate.printFormat());
myDate.month = 4;
console.log('run', myDate.month);
myDate.month = 78;
console.log('This is not going to be shown', myDate.month);