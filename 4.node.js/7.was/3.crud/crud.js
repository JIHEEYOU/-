const http = require("http");
const fs = require("fs").promises;
const path = require("path");

const users = {};

const server = http.createServer((req, res) => {
  console.log(req.method, req.url);

  if (req.method === "GET") {
    handleGetRequest(req, res);
  } else if (req.method === "POST") {
    handlePostRequest(req, res);
  } else if (req.method === "PUT") {
    handlePutRequest(req, res);
  } else if (req.method === "DELETE") {
    handleDeleteRequest(req, res);
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

async function handleGetRequest(req, res) {
  if (req.url === "/") {
    const data = await fs.readFile("./index.html");
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(data);
  } else if (req.url === "/about") {
    const data = await fs.readFile("./about.html");
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(data);
  } else if (req.url === "/user") {
    res.writeHead(200, { "Content-Type": "application/json;charset=utf-8" });
    res.end(JSON.stringify(users));
  } else if (req.url.startsWith("/image/")) {
    const imageName = path.basename(req.url); // "cat2.jpg"
    // 아래 경로를 실제 이미지가 있는 경로로 수정
    const imagePath = path.join(__dirname, "static", imageName); // 'static' 폴더가 crud.js와 같은 위치에 있어야 함
    try {
      const imageData = await fs.readFile(imagePath); // 이미지 파일 읽기
      res.writeHead(200, { "Content-Type": "image/jpeg" });
      res.end(imageData); // 이미지 데이터 응답
    } catch (error) {
      console.error("이미지 파일을 찾을 수 없습니다:", error); // 오류 로그 추가
      res.writeHead(404);
      res.end("Image Not Found");
    }
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
}

function handlePostRequest(req, res) {
  if (req.url === "/user") {
    let body = "";
    req.on("data", (data) => (body += data));
    //req.on('data',function readData(data))

    req.on("end", function name() {
      //데이터가 다 쌓였을 때 할일 여기에 작성
      if (req.headers["content-type"] === "text/plain") {
        return res.end("plaintext로 데이터를 줬구나..");
      } else if (req.headers["content-type"] === "application/json") {
        const parsedData = JSON.parse(body);
        const username = parsedData.name;
        users[username] = username;
        return res.end(
          `application/json이구나..body:${body} json:${parsedData}`
        );
      } else {
        res.writeHead(404);
        return res.end("모르는 타입임");
      }
    });
  }
  //return res.end("Post요청 응답완료");
}

function handleDeleteRequest(req, res) {
  if (req.url === "/user") {
    let body = "";
    req.on("data", (data) => (body += data));

    return req.on("end", () => {
      if (req.headers["content-type"] === "application/json") {
        const parsedData = JSON.parse(body);
        const username = parsedData.name;
        // users[username] = "";
        delete users[username];
        return res.end(
          `application/json 삭제성공,
            users: ${JSON.stringify(users)}`
        );
      } else {
        res.writeHead(404);
        return res.end("모르는 타입임");
      }
    });
  }
}

function handlePutRequest(req, res) {
  res.end("Put요청 응답완료");
}
function handleDeleteRequest(req, res) {
  res.end("Delete요청 응답완료");
}

server.listen(3000, () => {
  console.log("서버가 3000포트에서 대기 중입니다");
});
