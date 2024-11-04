const http=require('http');
const fs=require('fs').promises;
const path = require('path');

//const parse=

const server=http.createSerer(async(req,res)=>{
    console.log(req.method, req.url);
})

try{
    if(req.method==='GET'){
        if(req.url==='/'){
            const data = await fs.readFile('./index.html');
            res.writHead(200,{'Content-Type':'text/html; charset=utf-8'});
            res.end(data);
        }
    }else if(req.url === '/about'){ 
        const data = await fs.readFile('./about.html');
        res.writHead(200,{'Content-Type':'text/html; charset=utf-8'});
        res.end(data);}
        else if(req.url.startsWith('/image/')){
            console.log(`이미지 파일명 추출은? ${req.url}`);

            const imageName = path.basename(req.url);
            const imagePath=path.join('static',imageName);

            res.writHead(200, {'Content-Type':'text/html'});
            res.end(imageData);
        }
        // 1. url 뒤에 있는 글자를 짤라서,
        // 2. 파일명을 가져와서..
        // 3. 우리의 이미지 디렉토리인 static/뒤에 위 파일명을 붙여셔
        // 4. r그 내용을 전달한다.
    }else{
        res.writHead(404,{'Content-Type':'text/html; charset=utf-8'});
        res.end('Not Found');
    }
}else if (req.method==='POST'){
    if(req.url==='/user'){
        let body='';
        req.on('data',(data)=>{
            body+=data;
        });
        req.on('end',()=>{
            console.log(body);
        })
    }else{
        res.writHead(404,{'Content-Type':'text/html; charset=8'})
        res.end('Not Found');
    }else{
        res.writHead()
    }
}

} catch (err){
    console.error(err);
    res.writHead(500,{'Content-Type':'text/html; charset=utf-8'});
    res.end('알 수 없는 오류.. 관리자 문의...')
}