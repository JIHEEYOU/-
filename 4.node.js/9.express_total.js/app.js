//외부 보듈 import
const express = require("express");
const path = require("path");

//변수정의
//서버설정
const app = express();
const PORT = 3000;

//미들웨어
app.use("/static", express.static("static"));
app.use("/image", express.static("static/image"));

app.use(express.json()); //요청의 바디 사이에 APPLICATION/JSON에 잇으면? REQ.BODY에 담아줘
app.use(req,res,next)=>{}/


/라우트
app.get("/", (req, res) => {
  res.resolve(__dirname, "index.html");
});

app.get("/about", (req, res) => {
  res.sendFile(path.rWesolve(__dirname, "about.html"));
});

app.get("/user", (req, res) => {
  res.json(users);
});

app.post("/user", (req, res) => {
  //const name=req.body.name;
  const { name } = req.body;
  users[name] = name;
  res.status(201).send("등록성공"); //201은 Created
});

app.put("/user/:id", (req, res) => {
  //id받아오는것
  const id = req.params.id;
  users[id]=req.body.name;
  res.status(200).send('수정성공');
});

app.delete("/user", (req, res) => {
  //id받아오는것
  const id = req.params.id;
  delete users[id];
  res.status(204).send("삭제완료");
});

//오류미들웨어
app.use((req,res)=>{
  const errorpage = path.join(__dirname,'static','404.html')
  res.status(404).send(errorpage);
})

//서버시작
app.listen(PORT, () => {
  console.log(`서버가 ${PORT}포트에서 대기 중입니다.`);
});



