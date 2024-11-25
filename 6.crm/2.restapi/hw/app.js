const express = require("express");
const fs = require("fs");
const csvParser = require("csv-parser");
const app = express();
const PORT = 3000;

let users = [];

// CSV 데이터 로드
fs.createReadStream("user.csv")
  .pipe(csvParser())
  .on("data", (row) => {
    users.push(row);
  })
  .on("end", () => {
    console.log("CSV 파일 데이터를 성공적으로 로드했습니다:", users);
  });

// API 엔드포인트
app.get("/api/users", (req, res) => {
  res.json(users);
});

// 정적 파일 제공
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`서버가 실행 중입니다: http://localhost:${PORT}`);
});

app.get("/api/users", (req, res) => {
  const { name, gender } = req.query;

  let filteredUsers = users;

  if (name) {
    filteredUsers = filteredUsers.filter((user) => user.Name.includes(name));
  }

  if (gender) {
    filteredUsers = filteredUsers.filter((user) => user.Gender === gender);
  }

  res.json(filteredUsers);
});
