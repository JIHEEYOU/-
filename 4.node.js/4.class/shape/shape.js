class Shape {
  constructor(type) {}

  getArea() {
    throw new Error("getArea() must be implemented by a subclass");
  }

  getInfo() {
    throw new Error("getInfo() must be implemented by a subclass");
  }

  toString() {
    return `${this.constructor.name} - Area: ${this.getArea().toFixed(2)} m²`;
  }
}

class Square extends Shape {
  constructor(sideLength) {
    super();
    this.length = sideLength;
  }

  getArea() {
    return this.length ** 2;
  }

  getInfo() {
    return `Square with side length ${this.length}`;
  }
  toString() {
    return `${this.type}- 넓이:${this.getArea().toFixed(2)}m2`;
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }

  getArea() {
    return this.base * this.height * 0.5; // this.height로 수정
  }

  getInfo() {
    return `Triangle with base ${this.base} and height ${this.height}`;
  }
}

class Trapezium extends Shape {
  constructor(base1, base2, height) {
    super();
    this.base1 = base1;
    this.base2 = base2; // base2l에서 base2로 수정
    this.height = height;
  }

  getArea() {
    return ((this.base1 + this.base2) * this.height) / 2;
  }

  getInfo() {
    return `Trapezium은 밑변/높이  ${this.base1}/${this.base2}, 높이 ${this.height}를 갖고 있습니다`;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }

  getInfo() {
    return `Circle은 반지름 ${this.radius}를 갖고 있습니다.`;
  }
}

// 사용 예시
const square = new Square(5);
const triangle = new Triangle(4, 3);
const trapezium = new Trapezium(4, 6, 5);
const circle = new Circle(3);

console.log("Square Area:", square.getArea()); // 출력: 25
console.log("Triangle Area:", triangle.getArea()); // 출력: 6
console.log("Trapezium Area:", trapezium.getArea()); // 출력: 25
console.log("Circle Area:", circle.getArea().toFixed(2)); // 출력: 28.27

// 객체들의 정보 출력
console.log(square.getInfo(), "Area:", square.getArea()); // 출력: Square with side length 5. Area: 25
console.log(triangle.getInfo(), "Area:", triangle.getArea()); // 출력: Triangle with base 4 and height 3. Area: 6
console.log(trapezium.getInfo(), "Area:", trapezium.getArea()); // 출력: Trapezium with base1 4, base2 6, and height 5. Area: 25
console.log(circle.getInfo(), "Area:", circle.getArea().toFixed(2)); // 출력: Circle with radius 3. Area: 28.27

// toString() 메소드를 이용한 출력
console.log(`${square}`); // 출력: Square - Area: 25.00 m²
console.log(`${triangle}`); // 출력: Triangle - Area: 6.00 m²
console.log(`${trapezium}`); // 출력: Trapezium - Area: 25.00 m²
console.log(`${circle}`); // 출력: Circle - Area: 28.27 m²
