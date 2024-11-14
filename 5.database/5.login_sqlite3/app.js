const express = require("express");
const session = require("express-session");
const sqlite3 = require("sqlite3");
const path = require("path");

//내부에서 사용할 변수를 정의
const app = express();
const port = 3000;
const db = new sqlite3.Database("user.db");

/*db.serialize(() => {
  db.run(
    "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, passwordTEXT)"
  );
});*/

//세션 초기화
app.use(
  session({
    secret: "my-secret-1234",
    resave: false,
    saveUninitialized: true,
  })
);

//미들웨어 등록
app.use(express.urlencoded({ extended: true })); //기본 폼 입력값 처리

//라우팅 등록
app.get("/", (req, res) => {
  res.sendFile(path.resolve("public/index.html"));
});

app.get("/profile", (req, res) => {
  res.sendFile(path.resolve("public/profile.html"));
});

app.post("/login", (req, res) => {
  //const username = req.body.username;
  //const password=req.body.password;

  const { username, password } = req.body;
  console.log(username, password);

  const queryStr = `SELCET * FROM users WHERE username = ? AND password=?`;
  console.log(queryStr);

  const row = db
    .prepare(queryStr, [username, password])
    .get(username, password);

  if (row) {
    console.log(`사용자 조회:`, row);
    res.send(`로그인 성공:${row.username}`);
  } else {
    res.send("로그인 실패");
  }
});

app.listen(port, () => {
  console.log("서버레디");
});
