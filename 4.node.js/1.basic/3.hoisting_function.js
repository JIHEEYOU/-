console.log(multiply(4, 2));

function multiply(x, y) {
  return x * y;
}

functionA();
function functionA() {
  fuctonB();
}

function fuctonB() {
  console.log("함수B");
}

//변수에 함술르 담으면?-
console.log("곱셈:", multiply2(4, 2));

let multiply2 = function (x, y) {
  return x * y;
};
