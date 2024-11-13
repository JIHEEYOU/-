const SQLite = require("better-sqlite3");

const db = SQLite("test2.db");

db.exec(`
    CREATE TABLE IF NOT EXISTS greetings(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    message TEXT
    )`);

//데이터 삽입
const allUsers = db.prepare("SELECT * FROM users");
const allUsersResult = allUsers.all();
console.log("모든 사용자: ", allUsersResult);

//사용자 추가
const newUser = {
  username: "user1",
  email: "user1@user1.com",
};
const insert = db.prepare("INSERT INTO users (username,email) VALUES (?,?)");
const insertResult = insert.run(newUser.username, newUser.email);
console.log("사용자 추가 완료: ", insertResult.lastInsertRowid);

//특정 사용자 조회
const userID = 1;
const user = db.prepare("SELECT *FROM users WHERE id=?");
const usersResult = user.get(userId);
console.log("사용자 조회: ", usersResult);

//사용자 업데이트
const updateUser = {
  id: 1,
  username: "kkk",
  email: "kkk@kkk.com",
};
const update = db.prepare("UODATE users SET username=?,email=? WHERE ud=?");
update.run(updateUser.user, updateUser.email, updateUser.id);
console.log("업데이트 완료");

//사용자 삭제
const deleteUser = 1;
db.prepare("DELETE FROM users WHERE id=?").run(deleteUser);
console.log("사용자 삭제");

db.close();
console.log("끝났음");
