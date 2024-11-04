//order.csv Id, OrderAt,Store,UserId
import Papa from "papaparse";
import generateId from "./generator/generateId.js";
import generateOrderAt from "./generator/generateOrderAt.js";
import getRandomInRange from "./generator/getRandomInRange.js";
import writeDataToCSV from "./generator/writeDataToCSV.js";
import fs from "fs";

const orderdb = [];

//
getRandomInRange();

// 사용자 데이터 읽기
function readUserData() {
  try {
    const file = fs.readFileSync("./user.csv", "utf-8");

    let users;
    Papa.parse(file, {
      header: true,
      complete: (result) => {
        const columnName = "Id";
        users = result.data.map((row) => row[columnName]);
        console.log("Parsed user data:", users);
      },
    });

    //console.log("Parsed user data:", users);

    const user = users[getRandomInRange(0, users.length - 1)];

    return user;
  } catch (err) {
    console.error("Error reading users.csv:", err);
  }
}

/*function readStoreData() {
  try {
    const data = fs.readFile("./store.csv", "utf-8");
    const rows = data.split("\n");
    const headers = rows[0].split(",");
    const users = [];

    for (let j = 1; j < rows.length; j++) {
      const user = {};
      const values = rows[j].split(",");

      for (let i = 0; i < headers.length; i++) {
        user[headers[i]] = values[i];
      }

      users.push(store);
    }

    console.log("Parsed store data:", stores);
    return stores;
  } catch (err) {
    console.error("Error reading users.csv:", err);
  }
}*/

for (let i = 0; i < 100; i++) {
  orderdb.push([
    generateId(),
    generateOrderAt(),
    readUserData(),
    //readStoreData(),
  ]);
}
const header = ["Id", "OrderAt", "Store", "UserId"];
writeDataToCSV(orderdb, "order.csv", header);
console.log("Data has been written to order.csv");
