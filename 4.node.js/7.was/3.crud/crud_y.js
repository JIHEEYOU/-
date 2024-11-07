const http = require("http");
const fs = require("fs").promises;

const users = {};
const server = http.createServer((req, res) => {
  console.log(req.method, req.url);

  if (req.method === "GET") {
    handleGetRequest(req, res);
  } else if (req.method === "POST") {
    handleGetRequest(req, res);
  } else if (req.method === "PUT") {
    handleGetRequest(req, res);
  } else if (req.method === "DELETE") {
    handleGetRequest(req, res);
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

server.listen(3000, () => {
  console.log("서버가 3000번 포트에서 대기중입니다.");
});

async function handleGetRequest(req,res) {
    try{
        if(req.url === "/"){
            const data=await fs.readFile(".index.html");
            res.end(data);
        } else if(req.url === "/about"){
            const data= await fs.readFile("./about.html");
            res.end(data);
        }else if(req.url==="/user"){
            const filePath=path.join()
        } }
}

server.on("request", (req, res) => {});

cons;
