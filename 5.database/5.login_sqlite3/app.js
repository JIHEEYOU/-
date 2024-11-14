const express = require("express");
const sqlite3 = require("sqlite3");
const path = require("path");

const app = express();
const port = 3000;

//미들웨어 등록
//app.user(express.urlencoded({ extended: true })); //기본 폼 입력값 처리

//라우팅 등록
app.get(",", (req, res) => {
  res.sendFile(path.resolve("public/index.html"));
});

app.post("/login", (req, res) => {
  //const username = req.body.username;
  //const password=req.body.password;

  const { username, password } = req.body;
  console.log(username, passsword);

  const queryStr = `SELCET * FROM users WHERE username = ${username} AND password=${password}`;

  db.get(queryStr, (err, row) => {
    if (row) {
      res.send("로그인 성공");
    } else {
      res.send("로그인 실패");
    }
  });
});

app.listen(port, () => {
  console.log("서버레디");
});
