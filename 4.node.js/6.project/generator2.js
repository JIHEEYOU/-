import getRandomInRange from "./generator/getRandomInRange.js";
import generateId from "./generator/generateId.js";
import generateRoad from "./generator/generateRoad.js";
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
const storedb = [];

getRandomInRange();

function generateName() {
  const cafe = cafeBrand[Math.floor(Math.random() * cafeBrand.length)];
  const region = JijumName[Math.floor(Math.random() * JijumName.length)];
  const HoNum = getRandomInRange(1, 10);
  const location = `${cafe} ${region} ${HoNum}호점`;
  const cf = [location, cafe];
  return cf;
}

for (let i = 0; i < 100; i++) {
  const getcf = generateName();
  storedb.push([generateId(), getcf[0], getcf[1], generateRoad()]);
}

const header = ["Id", "Name", "Type", "Address"];

writeDataToCSV(storedb, "store.csv", header);

console.log("Data has been written to store.csv");
export const userdb = [];
