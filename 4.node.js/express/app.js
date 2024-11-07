// 외부 모듈 import
const express = require("express");
const path = require("path");

// 변수 정의
const app = express();
const PORT = 3000;
const users = {};

// 미들웨어
app.use("/static", express.static("static"));
app.use("/image", express.static("static/image"));

app.use(express.json());
app.use(express.text());

// 라우트
// GET
app.get("/", (req, res) => {
  const filePath = path.resolve(__dirname, "index.html");
  res.sendFile(filePath);
});

app.get("/about", (req, res) => {
  res.sendFile(path.resolve(__dirname, "about.html"));
});

app.get("/user", (req, res) => {
  res.json(users);
});

// POST
app.post("/user", (req, res) => {
  const { name } = req.body;
  users[name] = name;
  res.status(201).send("등록 성공");
});

// PUT
app.put("/user/:id", (req, res) => {
  const userId = req.params.id;

  if (userId in users) {
    users[userId] = req.body;
    res.status(200).send("수정 성공");
  } else {
    res.status(400).send("수정 실패");
  }
});

// DELETE
app.delete("/user/:id", (req, res) => {
  const userId = req.params.id;
  if (userId in users) {
    delete users[userId];
    res.status(200).send("삭제 성공");
  } else {
    // 에러 처리
    // 해당 사용자 없음
  }
});

// 오류미들웨어

//서버 시작
app.listen(PORT, () => {
  console.log(`서버가 ${PORT}에서 대기 중입니다.`);
});
