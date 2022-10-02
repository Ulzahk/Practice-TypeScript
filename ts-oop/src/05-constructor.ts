export class MyDate {
  constructor(
    private year: number = 2000,
    private month: number = 7,
    private day: number = 9,
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

const myDate = new MyDate(1998, 1, 2);
console.log(myDate.printFormat());
console.log(myDate.getDay());

const myDate2 = new MyDate();
console.log('() =>', myDate2.printFormat());

const myDate3 = new MyDate(2022);
console.log('(2022) =>', myDate3.printFormat());


const myDate4 = new MyDate(2022, 3);
console.log('(2022, 3) =>', myDate4.printFormat());