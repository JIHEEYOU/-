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

const person1 = new Person("철수", 25, "남성"); // 변수명을 소문자로 변경
person1.greet("길동");
person1.walk(10);
person1.eat();

class Employee extends Person {
  constructor(name, age, gender, jobTitle, salary) {
    super(name, age, gender);
    this.jobTitle = jobTitle;
    this.salary = salary;
  }

  displayInfo() {
    console.log(
      `직원 ${this.name}의 직위는 ${this.jobTitle}이며, 급여는 ${this.salary}원 입니다. `
    );
  }

  work() {
    console.log(`${this.name}이(가) 업무 중입니다.`);
  }
}

const employee1 = new Employee("영희", 30, "여성", "매니저", 50000); // 변수명을 소문자로 변경
const employee2 = new Employee("영수", 31, "여성", null, 50000);
employee1.greet();
employee2.greet();
employee1.displayInfo();
employee2.displayInfo();
employee1.walk();
employee1.work();

console.log("직원1이 직원객체인가?", employee1 instanceof Employee);
console.log("직원1이 사람인가?", employee1 instanceof Person);

console.log("사람1이 직원인가요?", person1 instanceof Employee);
console.log("사람1이 사람인가요?", person1 instanceof Person);

console.log("직원1이라는 변수는?", typeof employee1);
console.log("사람1이라는 변수는?", typeof person1);

class Manager extends Employee {
  constructor(name, age, gender, jobTitle, salary, team) {
    super(name, age, gender, jobTitle, salary);
    this.team = team;
  }

  assignTask() {
    console.log(
      `${this.name} 매니저가 ${this.team}에 업무를 배분하고 있습니다.`
    );
  }
}

const manager1 = new Manager("수현", 35, "남성", "팀장", 60000, "개발");
manager1.assignTask();

class Student extends Person {
  constructor(name, age, gender, studentID, major) {
    super(name, age, gender);
    this.studentID = studentID;
    this.major = major;
  }
  study() {
    console.log(
      `${this.name} 학생은 ${this.age}이고, ${this.major}를 공부하고 있습니다.`
    );
  }
}

class Customer extends Person {
  constructor(name, age, gender, CustomerID, orderHistory) {
    super(name, age, gender);
    this.CustomerID = CustomerID;
    this.orderHistory = orderHistory;
  }
  PlaceOrder(product) {
    console.log(`${this.name} 고객이 ${product}를 주문하였습니다`);
    this.orderHistory.push(product);
  }
  PrintOrderHistory() {
    console.log("주목목록: ");
    for (let i = 0; i < this.orderHistory.length; i++) {
      console.log(" - " + this.orderHistory[i]);
    }
    this.orderHistory.forEach((orderItem) => {
      console.log(`<li>${orderItem}</li>`);
    });
    console.log(`주문 내역 : ${this.orderHistory.join("<BR>")}`);
  }
}

/*class Customer extends Person {
  constructor(name, orderHistory) {}
  PrintOrder(orderHistory) {
    console.log(`${this.name} 고객이 ${orderHistory}를 주문하였습니다`);
  }
}*/

const Student1 = new Student("지연", 20, "여성", "20240101", "컴퓨터공학");
Student1.study();

const Customer1 = new Customer("지민", 22, "여성", "C1001", ["커피", "라떼"]);
Customer1.PlaceOrder("생크림케익");
Customer1.PrintOrderHistory(); // 이사람이 지금까지 주문한 내역을 모두 출력하시오

console.log(`-----`);
console.log("-".repeat(20));

const people = [manager1, Student1, Customer1, employee1, employee2];
introduce(people);

function introduce(people) {
  //for(let i =0; i<people.length;i++) 아래와 같은 반복문!
  for (const Person of people) {
    Person.greet("철수");
  }

  for (let i = 0; i < people.length; i++) {
    people[i].walk(Math.floor(Math.random() * 10 + 1, -2));
  }

  people.forEach((Person) => {
    if (person instanceof Employee) {
      person.work();
    } else if (person instanceof Student) {
      person.study();
    }
  });
}
