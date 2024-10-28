import getRandomInRange from "./getRandomInRange.js";

const City = [
  "부산",
  "광주",
  "일산",
  "대전",
  "서울",
  "인천",
  "고양",
  "하남",
  "성남",
  "강릉",
  "동해",
  "춘천",
  "양양",
  "울산",
  "대구",
  "제주",
];
const Gu = [
  "강남",
  "강동",
  "강북",
  "강서",
  "관악",
  "노원",
  "도봉",
  "동대문",
  "동작",
  "마포",
  "서대문",
  "서초",
  "성동",
  "성북",
  "송파",
  "양천",
  "영등포",
  "용산",
  "은평",
  "종로",
  "중",
  "중랑",
];
function generateRoad() {
  const Area = City[Math.floor(Math.random() * City.length)];
  const location = Gu[Math.floor(Math.random() * Gu.length)];
  const road = getRandomInRange(1, 100);
  const num = getRandomInRange(1, 100);
  return `${Area} ${location}구 ${road} ${
    Math.random() < 0.5 ? "길" : "로"
  } ${num}`;
}

export default generateRoad;
