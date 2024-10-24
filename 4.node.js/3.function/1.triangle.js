//1.먼저 함수로 각각 출력한다.
//1-2. 함수로 row를 입력받는다.

function leftTriangle() {
  for (let i = 0; i < 6; i++) {
    console.log("*".repeat(i)); // 문자열.repeat(n)이라는 함수로 문자열을 n번 만큼 반복할 수 있다.
  }
}
leftTriangle();
console.log("");

function rightTriangle() {
  for (let i = 5; i > 0; i--) {
    console.log("*".repeat(i));
  }
}
rightTriangle();
console.log("");

function leftInvertTriangle() {
  for (let i = 0; i < 6; i++) {
    console.log(" ".repeat(6 - i) + "*".repeat(i)); // 문자열.repeat(n)이라는 함수로 문자열을 n번 만큼 반복할 수 있다.
  }
}
leftInvertTriangle();
console.log("");

function rightInvertTriangle() {
  for (let i = 5; i > 0; i--) {
    console.log(" ".repeat(6 - i) + "*".repeat(i)); // 문자열.repeat(n)이라는 함수로 문자열을 n번 만큼 반복할 수 있다.
  }
}
rightInvertTriangle();
console.log("");

function centerTriangle() {
  for (let i = 1; i < 10; i++) {
    if (i % 2 == 1) {
      console.log(" ".repeat((9 - i) / 2) + "*".repeat(i));
    }
    continue;
  }
}
centerTriangle();
console.log("");

function centerInvertTriangle() {
  for (let i = 10; i >= 1; i--) {
    if (i % 2 == 1) {
      console.log(" ".repeat((9 - i) / 2) + "*".repeat(i));
    }
    continue;
  }
}
centerInvertTriangle();
console.log("");
