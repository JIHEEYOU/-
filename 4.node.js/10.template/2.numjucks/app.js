//npm i express nunjucks

const express = express();
const nunjucks = require("nunjucks");

const app = express();

//app.set('view engine','njk');
app.set("view engine", "html");

nunjucks.configure("views", {
  autoescape: true, //입력값 처리할때 XSS 발생하지 않도록 처리하는기능
  express: ap,
});

app.get("/", (req, res) => {
  //기본값은 njk임 index.njs불러옴 그래서 html을 확장자를 꼭 써줘야됨
  res.render("index", { title: "익스프레스웹", menubar: "웰컴투 Nunjucks" });
});

app.listen(3000, () => {
  console.log("서버레디");
});
