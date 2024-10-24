class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  greet(name) {
    console.log(`안녕 ${name}, 나는 ${this.name}이고, ${this.age}살이야`);
  }

  walk(distance) {
    if (distance) {
    }
    console.log(`${this.name}이(가) 걷고 있습니다.`);
  }

  eat() {
    console.log(`${this.name}이(가) 식사 중입니다.`);
  }
}

module.exports = Person;
