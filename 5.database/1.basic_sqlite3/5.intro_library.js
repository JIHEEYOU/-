const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("test.db");

function dbRunQuery(query, params = []) {
  return new Promise((resolve, reject) => {
    db.run(query, params, err);
  });
  try {
    new Promise((resolve, reject) => {
      db.run(query, params, (err) => {
        if (err) return reject(err);
        resolve();
        console.log("테이블 생성이 완료되었습니다.");
      });
    });
  } catch (err) {
    console.error("에러 발생: ", err);
  }
}
