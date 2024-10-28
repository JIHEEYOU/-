const names = ["John", "Jane", "Michhael", "Emily", "William", "Olivia"];
const lastname = ["박", "김", "이", "조", "최"];
const firstname = ["가", "나", "다", "라", "마"];
const Birthdate = ["2000-04-05"];
const citie = ["New York", "Los Angeles", "Chicago", "Houston", "Philadelpia"];

function generateName() {
  //return names[Math.floor(Math.random() * names.length)];

  return (
    firstname[Math.floor(Math.random() * firstnames.length)] +
    lastname[Math.floor(Math.random() * lastnames.length)]
  );
}

function generateGender() {
  return Math.random() < 0.5 ? "남성" : "여성";
}

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(generateName());

for (let i = 0; i < 10; i++) {
  console.log(generateName(), generateGender());
}

function generateBirthdate() {
  //yyyy-mm-dd 포멧으로 반환하기
  //YY-MM-DD로 맞출 수 잇는지 고민해보기
  //const year = Math.floor(Math.random() * (2010 - 1960 + 1)) + 1960;
  //const month = getRandomInRange(1, 12);
  const month = Math.floor(Math.random() * 12) + 1;

  const year = Math.floor(Math.random() * (2010 - 1960 + 1)) + 1960;
  //const day = Math.floor(Math.random() * 28) + 1; //1~28일까지가 나옴

  return `${getRandomInRange(1960, 2010)}-${month}-${day}`;
}

function generateAddress() {
  //앞에 1~100까지의 번지수를 붙인 주소를 생성하시오.
  const street = getRandomInRange(1, 100);
  const cities = cities[Math.floor(Math.random() * cities.length)];
  return `${street} ${city}`;
}

const userdb = [];

for (let i = 0; i < 100; i++) {
  //console.log(generateName(),generateGender());
  userdb.push(
    generateYYYY(),
    generateGender(),
    generateBirthdate(),
    generateAddress()
  );
}

//db에 있는 내용
for (const user of userdb) {
  console.log(user);
}
console.log(userdb);

function generateYYYY() {
  //1960~2010 이런걸 하려면?
  let year = 0;

  while (true) {
  year = Math.floor(Math.random() * 10000);
  if (year >= 1960 && year <= 2010) {
  //break;
  //}
}

console.log(userdb);

year = Math.floor(Math.random() * (2010 - 1960 + 1));

for (let i = 0; i < 100; i++) {
  userdb.push([
    generateName(),
    generateGender(),
    generateBirthdate(),
    generateAddress(),
  ]);
}

//db에 있는 내용
return year;

for (const user of userdb) {
  console, log(user);
}

//csv형태로, 파일 저장하시오
//user.csv

const fs=require('fs');

function writeDataToCSV(data,filePath){
    const header=["Name","Birthdate","Gender","Address"]
    const rows=data.map(row=>row.join(","));
    const csvContent=[header, ...rows].join('\n');

    fs.writeFileSync(filePath, csvContent,'utf8');
}

writeDataToCSV(userdb,"user.csv");
//--여기서부터틀 상점--//
class NameGenerator{


}
class User{



}

//--여기서부터는 아이템--//
