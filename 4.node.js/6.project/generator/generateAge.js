import getRandomInRange from "./getRandomInRange.js";

function generateAge() {
  return getRandomInRange(18, 65); // 예시로 18세부터 65세 사이의 나이를 생성
}

export default generateAge;
