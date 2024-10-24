//1. 참고 오류 예제
try {
  console.log(undefined);
} catch (error) {
  if (error instanceof ReferenceError) {
    console.log("참조 오류가 발생했습니다.", error.message);
  } else {
    console.log("알수 없는 오류가 발생했습니다.");
  }
}

//2. 구문오류예제 (SyntaxError)
try {
  sum = eval("1++2");
  console.log(sum);
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log("입력받은 문법에 오류가 있습니다.", error.message);
  } else {
    console.log("알 수 없는 오류가 발생했습니다.", error);
  }
}

//3. 타입오류(TypeError)
try {
  let obj = { a: 1 };
  obj.method();
} catch (error) {
  if (error instanceof TypeError) {
    console.log("타입 오류가 발생했습니다.", error.message);
  } else {
    console.log("알 수 없는 오류가 발생했습니다.", error);
  }
}

//4. 범위오류(RangeError)
try {
  let array = new Array(10);
} catch (error) {
  if (error instanceof RangeError) {
    console.log("버뮈 오류가 발생...", error.message);
  } else {
    console.log("알수 없는 오류가 발생했습니다.", error);
  }
}
