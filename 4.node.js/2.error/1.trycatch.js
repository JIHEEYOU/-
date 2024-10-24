const undefinedVariable = 10;

try {
  const result = undefinedVariable * 2;
  console.log(result);
  console.log("여기는 다른 코드1");
} catch (e) {
  console.error("오류가 발생했음.. 아물랑..", e.message);
}

console.log("여기는 다른 코드2");
