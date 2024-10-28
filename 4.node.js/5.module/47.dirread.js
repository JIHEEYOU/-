const fs = require("fs");
const path = require("path");

const directoryPath = "./";

function checkFileSync(filePath) {
  //파일에 대한 정보를 가져다가, 준비가 되면?나를 불러줘X
  //당장 파일 정보를 가져와서, 그 결과를 나에게 보고해줘O
  const stats = fs.statSync(filePath);
  if (stats.isFile()) {
    console.log(`${filePath}이것은 파일입니다.`);
  } else if (stats.isDirectory()) {
    console.log(`${filePath}이것은 디렉토리입니다.`);
  } else {
    console.log(`${filePath}은 모르겠습니다.`);
  }
}

//동기함수로 고치기
fs.readdirSync(directoryPath, function (err) {
  //콜백함수 내용-디렉토리읽는게 끝났을 때 호출할 내용
  if (err) {
    console.log("읽기오류");
    return;
  }

  //console.log(files);
  files.forEach((file) => {
    const filePath = path.join(directoryPath, file);
    console.log("파일: ", filePath);
    checkFileSync(filePath);
    return;
  });
  console.log(files);
});
