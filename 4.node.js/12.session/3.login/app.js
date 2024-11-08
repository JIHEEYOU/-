const exp = require("constants");
const express = require("express");
const session = require("express-session");
const path = require("path");

const app = express();
const port = 3000;

//미들웨어
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "my-secret-key", //내 메모리에 저장할 데이터의 암호화키
    resave: false, //세션 데이터가 변경되지 않았어도 계속 재저장할거냐
    saveUninitialized: true, //초기화되지 않은 세션을 저장소에 저장할거냐
    cookie: {
      maxAge: 60000, //세션의 유효시간을 60초=1분
    },
  })
);

//static폴더 정의
app.use("/static", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});

const users = [
  { id: 1, username: "user1", password: "pass1", hobby: "sleeping" },
  { id: 2, username: "user2", password: "pass2", hobby: "studying" },
  { id: 3, username: "user3", password: "pass3", hobby: "walking" },
];

app.post("/login", (req, res) => {
  //로그인 코드개발
  const { username, password } = req.body; //미들웨어로 파서 추가해야함.
  console.log(`Attempted login: ${username}, ${password}`);
  //사용자가 입력한 id/pw를 위의 users자료구조에서 검색
  /*let user=null;
for (let i=0;i<user.length;i++){
console.log(users[i];
if(users[i].username==username&&users[i].password==password){
user=users[i];
break;}} */

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    // 세션에 로그인 정보를 저장
    req.session.user = user; // 로그인한 사용자 정보를 세션에 저장
    res.status(200).json({ message: "로그인성공" });
  } else {
    res.status(401).json({ message: "로그인실패" });
  }
});

app.get("/profile", (req, res) => {
  const user = req.session.user;
  console.log(req.session);

  if (user) {
    res.json({ username: user.username, message: "프로필 정보" });
  } else {
    res.status(401).json({ message: "인증되지 않은 사용자임" });
  }
});

//로그아웃어떻게?
app.get("/logout", (req, res) => {
  const user = req.session.user;
  //좀더 디테일한 로그아웃코드
  if (user && user.username) {
    req.session.destroy();
    res.json({ message: "로그아웃성공" });
  } else {
    res.json({ message: "잉? 로그인 한적 업슨ㄴ데?" });
  }
  //세션에서 사용자 정보를 삭제. 어떻게?찾아본다
  /*req.session.destroy();
  res.json({ message: "로그아웃성공" });*/
});

app.get("check-login", (req, res) => {
  //세션 체크해서 사용자에게 username 반납
  const user = req.session.user;
  if (user) {
    res.json({ username: user.username });
  } else {
    res.status(401).json({ message: "로그인 안됨" });
  }
});

app.listen(port, () => {
  console.log("서버레디");
});
//시크릿창에서 세션바뀐것도 확인해보기 각 사이트에는 고유의 값을 가짐
