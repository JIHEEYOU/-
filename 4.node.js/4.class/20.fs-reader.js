const fs = require("fs");

const filePath = "hello.csv";

function csv_readfile(filePath, callback) {
  fs.readFileSync(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("파일 읽는 도중 오류 발생", err);
    }
  });

  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.error("파일 읽는 도중 오류 발생", err.message);
      return;
    }
    callback();
  });
}

console.log(content);
console.log(typeof content);

const csvContent = content.map((row) => row.join(",")).join("\n");
console.log(csvContent);
console.log(typeof csvContent);

function csv_writefile(filePath) {
  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.error("파일 쓰기 오류 발생", err.message);
      return;
    }
    console.log(data);
    console.log(typeof data);

    /*const rows = data.split("\n");

    for (let i = 0; i < rows.length; i++) {
      const row = row[i];
      const columns = row.split(",");
      console.log(columns);
    }*/
  });
}

const content = [
  ["이름", "나이", "직업"],
  ["홍길동", "30", "개발자"],
  ["김철수", "25", "디자이너"],
  ["이영희", "28", "기획자"],
];

csv_writerfile(filePath, (data) => {
  console.log("csv파일 내용: ", data);
});
