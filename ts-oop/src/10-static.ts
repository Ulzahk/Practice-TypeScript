console.log('Math.PI', Math.PI);
console.log('Math.max', Math.max(1, 2, 3, 10));

class MyMath {
  static readonly PI = 3.14;

  static max(...numbers: number[]) {
    console.log(numbers);
    return numbers.reduce((max, item) => max > item ? max : item);
  }
}

// const math = new myMath();
// math.PI;
console.log('MyMath', MyMath.PI);
console.log('MyMath', MyMath.max(1, 2, 3, 1112, 4, 5));
console.log('MyMath', MyMath.max(-1, -9, -8));
