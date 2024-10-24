//1.숫자형 변수
let a = 10;

//부동소수점
let pi = 3.14;

let sum = a + pi;
console.log(sum);

//상수=변경할 수 없음
const gravity = 9.81;
//gravity=10;

console.log("오류난이후");

//불리언(boolean)
let isLogged = true;

if (isLogged) {
  console.log("사용자가 로그인 하였습니다.");
} else {
  console.log("로그인이 필요합니다.");
}

//변수의 scope
var globalA = 10; //FE에서 변수를 어디서나 쉽게 선언해서 쓸려고
let globalB = 20; //BE에서의 글로벌 변수..

function myfunction() {
  let localC = 30; //로컬변수
  console.log(`글로벎:${globalA}, 글러벌B:${globalB}, 글로벌C;${localC}`);
}

myfunction();

globalA = globalB + 20;

console.log(`글로벎:${globalA}, 글러벌B:${globalB}`);
