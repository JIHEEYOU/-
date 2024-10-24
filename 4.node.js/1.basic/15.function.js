//입력값을 인자로 받아서 처리한다.
//함수명을 sum_to_n()으로 바꾸고, 입력인자를 입력 받아서, 함수 내에서는 그 인자로 처리하게 코드를 변경할것
let max = 10;
function sum_to_n(max) {
  //1부터 100까지의 합산을 반납한다.
  let sum = 0;
  for (let num = 1; num <= max; num++) {
    sum += num;
  }
  return sum;
}

function sum2_to_100(max) {
  //1부터 100까지의 합산을 반납한다.
  var i = 1;
  sum = 0;
  while (i <= 100) {
    sum += i;
    i++;
  }
  return sum;
}

function sum3_to_100() {
  //1부터 100까지의 합산을 반납한다.
  let n;
  let sum = (n * (n + 1)) / 2;
  return sum;
}

console.log(sum_to_n());

console.time("for");
console.log(sum_to_n(max));
console.timeEnd("for");

console.time("while");
console.log(sum2_to_100(max));
console.timeEnd("while");

console.time("gauss");
console.log(sum3_to_100());
console.timeEnd("gauss");
