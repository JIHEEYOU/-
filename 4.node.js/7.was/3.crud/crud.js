const { hasSubscribers } = require("diagnostics_channel");
const http = require("http");
const { url } = require("inspector");
const fs = require("fs").promises;
const path = require("path");

const users={};

const server = http.createServer((req, res) => {
  console.log(req.method, req.url);

  if (req.method === "GET") {
    handleGetRequest(req, res);
  } else if (req.method === "POST") {
    handlePostRequest(req, res);
  } else if (req.method === "PUT") {
    handlePostRequest(req, res);
  } else if (req.method === "DELETE") {
    handlePostRequest(req, res);
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

async function handleGetRequest(req, res) {
  if (req / url === "/") {
    const data=await fs. readFile('./index.html')
    res.end("GET요청/ 응답완료");
  } else if (req.url === "/about") {
    res.end("GET요청/ 응답완료");
  } else if (req.url === "/user"){
        res.writeHead(200,{'Content-Type':'application/json;charset=utf-8'})
        res.end(JSON.stringify(users));
    }
  }else {
    res.writeHead(404);
    res.end("NotFound");
  }
  catch{
    console.error(err);
    res.writeHead(500);
    res.end("알수 없는 오류");
  }
}



function handlePostRequest(req, res) {
    if(req.url==='/user'){
        let body='';
        req.on('data',(dat)=>(body+=data));
        //req.on('data',function readData(data))

req.on('end',function name (){
    //데이터가 다 쌓였을 때 할일 여기에 작성
    if(req.headers['content-type']==='text/plain'){
        return res.end('plaintext로 데이터를 줬구나..')
    }else if(req.headers['content-type']==='application/json'){
        const parsedData = JSON.parse(body);
        const username=parsedData.name;
        users[username]=username;
        return res.end(`application/json이구나..body:${body} json:${parsedData}`);
    }else{
        res.writeHead(404);
        return res.end('모르는 타입임')
    }
})

    } 
  //return res.end("Post요청 응답완료");
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
