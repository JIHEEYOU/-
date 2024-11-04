const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    fs.readFile(".index.html/", (err, data) => {
      if (err) {
        console.log(err);
        res.end("오류가 발생했습니다: ", err.message);
        return; //일단 에러찍고 무시
      } else {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(data);
      }
    });
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    //파일로부터 컨텐츠를 읽어와서.. 그 내용을 여기에서 전달해주면 끝~
    res.write("<H1>안녕</H1>");
    res.write("<H1>안녕</H1>");
    res.write("<H1>안녕</H1>");
    res.write("<H1>안녕</H1>");
    res.write("<H1>안녕</H1>");
    res.write("<H1>안녕</H1>");
    res.write("<H1>안녕</H1>");
    res.end("<p>헬로우 어게인3000</p>");
  })
  .listen(3000, () => {
    console.log("서버 대기중.. on 3000번에서");
  });
