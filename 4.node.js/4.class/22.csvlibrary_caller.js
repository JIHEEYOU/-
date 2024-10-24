const { readCSV, writeCSV } = require("./21.csvlibrary");

const filePath = "hello3.csv";

/*const content = [
  ["이름", "나이", "직업"],
  ["홍길동", "30", "개발자"],
  ["김철수", "25", "디자이너"],
  ["이영희", "28", "기획자"],
];

writeCSV(filePath, sampleData);*/

readCSV(filePath, (data) => {
  if (err) {
    console.log("파일 ");
  }
  console.log("파일 내의 결과는: ".data);
});
