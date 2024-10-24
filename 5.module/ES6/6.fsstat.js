const fs = require("fs");

const directoryPath = "./"; // 현재 디렉토리

try {
  const files = fs.readdirSync(directoryPath); // 동기 처리
  files.forEach((file) => {
    try {
      const stats = fs.statSync(file); // 동기 처리
      if (stats.isDirectory()) {
        console.log(`이 파일 ${file}은 디렉토리 입니다.`);
      }
      if (stats.isFile()) {
        console.log(`이 파일 ${file}은 파일 입니다.`);
      }
    } catch (err) {
      console.log("파일 읽기 오류:", err);
    }
  });
} catch (err) {
  console.log("디렉토리 읽기 오류:", err);
}
