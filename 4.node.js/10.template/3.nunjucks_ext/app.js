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
  const data = {
    title: "My Page",
    content: "This is my content page",
  };
  res.render("main", data);
});

app.get("/user", (req, res) => {
  // index.html을 렌더링, 필요한 경우 확장자 조정 가능
  const data = {
    title: "사용자 Page",
    content: "This is 사용자 content page",
  };
  res.render("main", data);
});

app.get("/product", (req, res) => {
  // index.html을 렌더링, 필요한 경우 확장자 조정 가능
  const data = {
    title: "상품 Page",
    content: "This is 상품 content page",
  };
  res.render("main", data);
});

app.get("/page1", (req, res) => {
  // index.html을 렌더링, 필요한 경우 확장자 조정 가능
  const data = {
    title: "상속하는 스타일",
    content: "This is 상속받는 page1의  content page",
  };
  res.render("page1", data);
});

app.get("/page2", (req, res) => {
  // index.html을 렌더링, 필요한 경우 확장자 조정 가능
  const data = {
    title: "상속하는 스타일",
    content: "This is 상속받는 page1의  content page",
  };
  res.render("page2", data);
});

app.get("/page3", (req, res) => {
  // index.html을 렌더링, 필요한 경우 확장자 조정 가능
  const data = {
    title: "상속하는 스타일",
    content: "This is 상속받는 page3의  content page",
  };
  res.render("page3", data);
});

// 서버 시작
app.listen(3000, () => {
  console.log("서버레디");
});
