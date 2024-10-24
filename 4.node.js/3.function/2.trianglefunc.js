//1.먼저 함수로 각각 출력한다.
//1-2. 함수로 row를 입력받는다.

function leftTriangle(rows) {
  for (let i = 1; i <= rows; i++) {
    console.log("*".repeat(i)); // 문자열.repeat(n)이라는 함수로 문자열을 n번 만큼 반복할 수 있다.
  }
}

function rightTriangle(rows) {
  for (let i = rows; i >= 1; i--) {
    console.log("*".repeat(i));
  }
}

function leftInvertTriangle(rows) {
  for (let i = 1; i <= rows; i++) {
    console.log(" ".repeat(6 - i) + "*".repeat(i)); // 문자열.repeat(n)이라는 함수로 문자열을 n번 만큼 반복할 수 있다.
  }
}

function rightInvertTriangle(rows) {
  for (let i = rows; i >= 1; i--) {
    console.log(" ".repeat(6 - i) + "*".repeat(i)); // 문자열.repeat(n)이라는 함수로 문자열을 n번 만큼 반복할 수 있다.
  }
}

function centerTriangle(rows) {
  for (let i = 1; i < rows; i++) {
    if (i % 2 == 1) {
      console.log(" ".repeat((9 - i) / 2) + "*".repeat(i));
    }
    continue;
  }
}

function centerInvertTriangle(rows) {
  for (let i = rows; i >= 1; i--) {
    if (i % 2 == 1) {
      console.log(" ".repeat((9 - i) / 2) + "*".repeat(i));
    }
    continue;
  }
}

leftTriangle(5);
console.log("");

rightTriangle(5);
console.log("");

leftInvertTriangle(5);
console.log("");

rightInvertTriangle(5);
console.log("");

centerTriangle(5);
console.log("");

centerInvertTriangle(5);
console.log("");
