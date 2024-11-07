//npm i express nunjucks

// 모듈 가져오기
const express = require("express");
const nunjucks = require("nunjucks");

// express 애플리케이션 생성
const app = express();

// 뷰 엔진 설정
app.set("view engine", "html");

// Nunjucks 설정

nunjucks.configure("views", {
  autoescape: true, // XSS 방지
  express: app,
});

// 라우터 설정
app.get("/", (req, res) => {
  // index.html을 렌더링, 필요한 경우 확장자 조정 가능
  res.render("index", {
    title: "익스프레스웹",
    menubar: "웰컴투 Nunjucks",
    message: "Nunjucks에서 전달된 메시지입니다",
  });
});

app.get("/fruits", (req, res) => {
  const fruits = ["사과", "바나나", "오렌지", "포도"];
  res.render("fruits", { fruits: fruits });
});

app.get("/greeting", (req, res) => {
  const username = "shpark"; //실제로는 이건 DB에서 가져오는 로직이 있을거고
  res.render("greeting", { username: username });
});

app.get("/welcome", (req, res) => {
  const isAdmin = true; //나중에는 실제 사용자 권한으로
  res.render("welcome", { isAdmin: isAdmin });
});

// 서버 시작
app.listen(3000, () => {
  console.log("서버레디");
});
