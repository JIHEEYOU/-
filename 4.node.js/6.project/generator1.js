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
  const year = Math.floor(Math.random() * (2010 - 1960 + 1)) + 1960;
  const year = getRandomInRange(1960, 2010);

  const month = getRandomInRange(1, 12);
  const month = Math.floor(Math.random() * 12) + 1;

  const day = Math.floor(Math.random() * 28) + 1; //1~28일까지가 나옴

  return `${year}-${month}-${day}`;
}

function generateAddress() {
  //앞에 1~100까지의 번지수를 붙인 주소를 생성하시오.
  const street = getRandomInRange(1, 100);
  const cities = cities[Math.floor(Math.random() * cities.length)];
  return `${street} ${city}`;
}

for (let i = 0; i < 10; i++) {
  //console.log(generateName(),generateGender());
  console.log(
    generateYYYY(),
    generateGender(),
    generateBirthdate(),
    generateAddress
  );
}

function generateYYYY() {
  //1960~2010 이런걸 하려면?
  let year = 0;

  //while (true) {
  // year = Math.floor(Math.random() * 10000);
  //if (year >= 1960 && year <= 2010) {
  //break;
  //}
}

year = Math.floor(Math.random() * (2010 - 1960 + 1));

return year;
