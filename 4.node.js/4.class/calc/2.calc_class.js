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

class UserInput{
    constructor(calculator){
        this.calculator=calculator;
        this.readline=require('require').createInterface({
            input:process.stdin,
            output:process.stdout
        })
    }

    getUserInput () {
        this.readline.question("첫번째 숫자를 입력하시요:", (num1) => {
            this.readline.question("연산자를 입력하시오(+,-,*,/): ", (operator) => {
          readline.question("두번째 숫자를 입력하시오:", (num2) => {
            const number1 = parseInt(num1);
            const number2 = parseInt(num2);
    
            const result = this.calculator.calculate(num1, operator, num2);
            console.log(`결과: ${result}`);
            readline.close();
          });
        });
      });
      start(){
        this.getUserInput
      }
    };
}


class Calculator{
    add(num1, num2) {
        return num1 + num2;
      }
      subtract(num1, num2) {
        return num1 - num2;
      }
    multiply(num1, num2){
        return num1 * num2;
      }
    divide(num1, num2){
        if(num2===0){
            return "Error:Division by zero is not allowed";
        }
        return num1 / num2;
      }

}

const calculator= new calculator();
const UserInput=new UserInput(calculator);

userlnput.start();

calculate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return this.add(num1, num2);
    case "-":
      return this.subtract(num1, num2);
    case "*":
      return this.multiply(num1, num2);
    case "/":
      return this.divide(num1, num2);
    default:
      return "Invalid operator";
  }
};




UserInput();
