import generateAddress from "./generator/generateAddress.js";
import generateAge from "./generator/generateAge.js";
import generateBirthdate from "./generator/generateBirthdate.js";
import generateGender from "./generator/generateGender.js";
import generateId from "./generator/generateId.js";
import getRandomInRange from "./generator/getRandomInRange.js";
import writeDataToCSV from "./generator/writeDataToCSV.js";

getRandomInRange();

function generateName() {
  const lastname = ["박", "김", "이", "조", "최"];
  const firstname = ["가", "나", "다", "라", "마"];
  return (
    firstname[Math.floor(Math.random() * firstname.length)] +
    lastname[Math.floor(Math.random() * lastname.length)]
  );
}
const userdb = [];
for (let i = 0; i < 100; i++) {
  userdb.push([
    generateId(),
    generateName(),
    generateGender(),
    generateAge(),
    generateBirthdate(),
    generateAddress(),
  ]);
}
const header = ["Id", "Name", "Gender", "Age", "Birthdate", "Address"];

writeDataToCSV(userdb, "./user.csv", header);
console.log("Data has been written to user.csv");
