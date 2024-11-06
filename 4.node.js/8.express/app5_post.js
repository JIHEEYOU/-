const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.useb(bodyParser.json()); //이 미들웨어가 body 안에 있는 내용중에 json을 처리해서 body라는 변수를 사용

app.get("/", (req, res) => {
  res.send("루트");
});

app.post("/submit", (req, es) => {
  let data = "";

  req.on("data", (chunk) => (data += chunk));
  req.on("end", () => {
    try {
      const jsonData = JSON.parse(data);
      res.json({ receivedData: jsonData });
    } catch (error) {
      res.status(400).json({ error: "잘못된 형식의 JSON을 보냈냐.." });
    }
  });
});

app.post("/submit2", (req, res) => {
  const jsonData = req.body; //req.body에 파싱된 JSON데이터를 담아서 보내줌
  res.json({ receivedData: jsonData });
});

app.listen(3000, () => {
  console.log("서버 레디");
});
