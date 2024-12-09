//const fetch=require('node-fetch');
import fetch from "node-fetch";

function fetchexample() {
    try{
        const respose = fetch("http://jsonplaceholder.typicode.com/posts/1");
  if (!respose.ok) {
    console.log("에러");
    return;
  }
  const data= await respose.json();
  console.log('가져온데이터:',data);
    }catch(erro){
        console.log('통신오류');
    }
}

fetchexample();
