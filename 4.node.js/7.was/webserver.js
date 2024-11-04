import http from "http";
import fs from "fs/promises";
import path from "path";
import { parse } from "querystring"; // require 대신 import로 변경

const server = http.createServer(async (req, res) => {
  try {
    // GET
    if (req.method === "GET") {
      if (req.url === "/") {
        const data = await fs.readFile("./index.html");
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(data);
      } else if (req.url === "/about") {
        const data = await fs.readFile("./about.html");
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(data);
      } else if (req.url.startsWith("/image/")) {
        const imageName = path.basename(req.url);
        const imagePath = path.join("static", imageName);
        const imageData = await fs.readFile(imagePath);
        res.writeHead(200, { "Content-Type": "image/jpg" }); // 헤더 수정
        res.end(imageData);
      } else {
        res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
        res.end("Not Found");
      }

      // POST
    } else if (req.method === "POST") {
      if (req.url === "/user") {
        let body = "";
        req.on("data", (data) => {
          body += data;
        });
        req.on("end", () => {
          const formData = parse(body);
          const username = formData.name;
          console.log("받은 데이터:", formData);
          console.log("받은 이름:", username);
          res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
          res.end(`Hello, ${username}`);
        });
      } else {
        res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
        res.end("Not Found");
      }
    } else {
      res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
      res.end("Not Found");
    }
  } catch (err) {
    console.error(err);
    res.writeHead(500, { "Content-Type": "text/html; charset=utf-8" });
    res.end("알 수 없는 오류.. 관리자에게 문의..");
  }
});

server.listen(3001, () => {
  console.log("서버 대기중.. on 3001");
});
