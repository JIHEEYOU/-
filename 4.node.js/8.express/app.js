const express = require("express");
const app = express();
const port = 3000;

//라우트 '/'생성

app.get("/admin", (req, res) => {
  res.send("<H1>여기는 사용자 페이지입니다.</H1>");
});

app.post("/", (req, res) => {
  res.send("POST요청이 /에 날라왔음");
});

app.post("/user", (req, res) => {
  res.send("POST요청이 /user에 날라왔음");
});

app.put("/user", (req, res) => {
  res.send("PUT요청이 /user에 날라왔음");
});

app.delete("/user", (req, res) => {
  res.send("DELETE요청이 /user에 날라왔음");
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port}에서 실행 중입니다.`);
});
