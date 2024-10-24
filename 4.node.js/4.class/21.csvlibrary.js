const fs = require("fs");

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

function writefile(filePath) {
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

writeCSV(filePath, content, (rer) => {
  if (err) {
    console.error("파일쓰기실패", err.message);
    return;
  }
  console.log("데이터");
});
