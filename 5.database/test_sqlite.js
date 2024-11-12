// sqlite3 패키지 가져오기
const sqlite3 = require("sqlite3").verbose();

// 메모리 데이터베이스에 연결
let db = new sqlite3.Database(":memory:", (err) => {
  if (err) {
    return console.error("데이터베이스 연결 오류:", err.message);
  }
  console.log("메모리 데이터베이스에 연결되었습니다.");
});

// 테이블 생성 및 데이터 삽입
db.serialize(() => {
  // 테이블 생성
  db.run("CREATE TABLE test_table (id INT, name TEXT)");

  // 데이터 삽입
  const stmt = db.prepare("INSERT INTO test_table VALUES (?, ?)");
  stmt.run(1, "Alice");
  stmt.run(2, "Bob");
  stmt.finalize();

  // 데이터 조회
  db.each("SELECT id, name FROM test_table", (err, row) => {
    if (err) {
      console.error("데이터 조회 오류:", err.message);
    } else {
      console.log(`ID: ${row.id}, 이름: ${row.name}`);
    }
  });
});

// 데이터베이스 연결 종료
db.close((err) => {
  if (err) {
    return console.error("데이터베이스 종료 오류:", err.message);
  }
  console.log("데이터베이스 연결이 종료되었습니다.");
});
