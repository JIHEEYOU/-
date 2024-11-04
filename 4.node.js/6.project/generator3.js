//order.csv Id, OrderAt,Store,UserId

import generateId from "./generator/generateId.js";
import generateOrderAt from "./generator/generateOrderAt.js";
import getRandomInRange from "./generator/getRandomInRange.js";
import writeDataToCSV from "./generator/writeDataToCSV.js";

getRandomInRange();

const fs = require("fs");
const util = require("util");
const path = require("path");
const FILE_NcAME = "user.csv";
const orderdb = [];

fs.readFile("./users.csv", "utf-8", (err, Id) => {
  const rowToId = Id.split("\n");
  const Id2Key = rowToId[0].split(",");
  const postArray = [];
  const userArray = [];
  const userPostArray = [];

  for (let j = 0; j < rowToId.length - 1; j++) {
    const dataObject = {};
    for (let i = 0; i < rowToId.length - 1; i++) {
      dataObject[Id2Key[i]] = rowToId[j + 1].split(",")[i];
      ㄴ;
    }
    userArray.push(dataObject);
  }
});

for (let i = 0; i < 100; i++) {
  orderdb.push([generateId(), generateOrderAt()]);
}
const header = ["Id", "Name", "Gender", "Age", "Birthdate", "Address"];

writeDataToCSV(orderdb, "user.csv", header);
console.log("Data has been written to user.csv");
