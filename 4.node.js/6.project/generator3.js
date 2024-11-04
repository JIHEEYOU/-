//order.csv Id, OrderAt,Store,UserId

import generateId from "./generator/generateId.js";
import generateOrderAt from "./generator/generateOrderAt.js";
import getRandomInRange from "./generator/getRandomInRange.js";
import writeDataToCSV from "./generator/writeDataToCSV.js";

const cafeBrand = [
  "카페베네",
  "스타벅스",
  "투썸",
  "이디야",
  "커피빈",
  "빽다방",
  "메가커피",
  "컴포즈",
  "할리스",
  "공차",
];
const JijumName = [
  "용산",
  "신촌",
  "강남",
  "잠실",
  "노원",
  "성수",
  "익선",
  "한남",
  "망원",
  "성수",
];

getRandomInRange();

f;

for (let i = 0; i < 100; i++) {
  const getcf = generateName();
  storedb.push([generateId(), getcf[0], getcf[1], generateRoad()]);
}

const orderdb = [];

for (let i = 0; i < 100; i++) {
  orderdb.push([generateId(), generateOrderAt()]);
}
const header = ["Id", "Name", "Gender", "Age", "Birthdate", "Address"];

writeDataToCSV(orderdb, "user.csv", header);
console.log("Data has been written to user.csv");
