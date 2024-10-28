import getRandomInRange from "./generator/getRandomInRange.js";
import generateId from "./generator/generateId.js";
import generateName from "./generator/generateName.js";
import generateRoad from "./generator/generateRoad.js";
import writeDataToCSV from "./generator/writeDataToCSV.js";

const storedb = [];

function generateType() {
  const cafe = generateName();
  return `${cafe}`;
}

for (let i = 0; i < 100; i++) {
  storedb.push([generateId(), generateName(), generateType(), generateRoad()]);
}

const header = ["Id", "Name", "Type", "Address"];

writeDataToCSV(storedb, "store.csv", header);

console.log("Data has been written to store.csv");
