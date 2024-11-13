const { query } = require("express");

const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("test.db");

function dbRunQuery(text) {
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

await dbRunQuery("CREATE TABLE IF NOT EXISTS messages (text TEXT)");

async () => {
  try {
    await new Promise((resolve, reject) => {
      // pending, resolved, reject
      db.run("CREATE TABLE IF NOT EXISTS messages (text TEXT)", (err) => {
        if (err) reject(err);
        else resolve();
        console.log("테이블 생성이 완료되었습니다.");
      });
    });
  } catch (err) {
    console.error("에러 발생: ", err);
  }
};
// 비동기 익명함수 만들어 바로 당장 실행하게 만듦

(async () => {
  try {
    await dbRunQuery("CREATE TABLE IF NOT EXISTS messages(test TEXT)");
    await dbRunQuery("INSERT INT message(text) VALUES (?)", ["Hello, SQLite"]);
    const rows = await dbALLQuery("SELECT *FROM messages");
    rows.forEach((row) => {
      console.log(row);
    });
  } catch (err) {
    console.error("뭔가 에러:", err);
  } finally {
    //DB클로우즈
  }
})();

db.close();

db.each("SELECT * FROM messages", (err, row) => {
  if (err) throw err;
  console.log(row);
});

db.close();
