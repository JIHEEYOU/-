const { read } = require("fs");
const { start } = require("repl");

//사용자로부터 입력받는다.. 숫자와 부호와 숫자를 입력받아서 연산
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*const calculator = (num1, operator, num2) => {
  return 0;
};*/

class Calculator{
    function add(num1, num2) => {
        return num1 + num2;
      }
      function subtract(num1, num2) =>{
        return num1 - num2;
      }
      function multiply(num1, num2) =>{
        return num1 * num2;
      }
      function divide(num1, num2) =>{
        return num1 / num2;
      }

};

const calculator= new Calculator();
const UserInput=new UserInput(calculator);

userlnput.start();

const calculator = (operator, num1, num2) => {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      return "Invalid operator";
  }
};

class StandardCalculator extends GenericCalculator{
    //제곱근,반올림, 등등..
}

class ProgrammerCalculator extends GenericCalculator{
    //q비트연산, 논린연산, 등등
}
class UserInput{
    constructor(calculator){
        this.calculator=calculator;
        this.readline=require('readline').createInterface({
        input:process.stdin,
        output:process.stdout});
    }

    getCalculator(){
        console.log("계산기 모드를 선택해주세요:");
        console.log("1. 공학용 계산기");
        console.log("2. 일반 계산기");
        console.log("3. 프로그래머 계산기");

    }

getUserInput () {
    this.readline.question("첫번째 숫자를 입력하시요:", (num1) => {
        this.readline.question("연산자를 입력하시오(+,-,*,/): ", (operator) => {
      readline.question("두번째 숫자를 입력사이오:", (num2) => {
        const number1 = parseInt(num1);
        const number2 = parseInt(num2);

        const result = calculator(num1, operator, num2);
        console.log(`결과: ${result}`);
        readline.close();
      });
    });
  });
  start(){
    this.getUserInput();
  }
}}

UserInput();
