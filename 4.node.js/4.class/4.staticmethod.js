class MathOperations {
  add(x, y) {
    return x + y;
  }
  static sub(x, y) {
    return x - y;
  }
}

const sum = new MathOperations.add(2, 4); //객체를 생성, 실체화(instantiation)
console.log(sum);

const diff = new MathOperations.sub(2, 4); //객체를 생성, 실체화(instantiation)
console.log(diff);

const assembledURL = url.format(myURL2);
console.log("내 주소는:");
