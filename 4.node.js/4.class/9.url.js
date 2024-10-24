const url = require("url");

const myURL = "http://www.example.com/path?query=value";
//원시타입(Primitive type), string 문자열 타입

//url 파싱

//1.호스트명 출력하기(hostname)
console.log(myURL.hostname);
console.log(typeof myURL);

const myURLObj = new URL(myURL);
console.log(typeof myURLObj);
console.log(myURLObj instanceof URL);

console.log(myURLObj.hostname);

//2. 경로 출력하기
console.log(myURLObj.pathname);

//3. 쿼리 파라미터 출력하기
console.log(myURLObj.search);
console.log(myURLObj.searchParams);

//URL파싱 #2
const parsedURL = url.parse(myURL);
console.log(parsedURL);
console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.hostname);
console.log(parsedURL.search);
console.log(parsedURL.query);
