const fs = require(`fs`);

//파일읽기
try {
  const data = fs.readFileSync("example2.txt", "utf8");
  console.log(data);
} catch (error) {
  console.log("파일을 읽는데 실패함", error.message);
}
const content = "이것이 파일에 쓰여질 내용입니다2222.";
fs.writeFileSync(`newfile.txt`, "이것이 파일에 쓰여질 내용입니다.");

console.log(`쓰기 완료`);
//오류남
