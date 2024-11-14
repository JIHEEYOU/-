const express = require("express");
const session = require("express-session");
const sqlite3 = require("sqlite3");
const path = require("path");
//onst fetch = require("node-fetch"); // node-fetch 불러오기

//내부에서 사용할 변수를 정의
const app = express();
const port = 3000;
const db = new sqlite3.Database("user.db");

// 세션 초기화
app.use(
  session({
    secret: "my-secret-1234",
    resave: false,
    saveUninitialized: true,
  })
);

// 미들웨어 등록
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// static 폴더 정의
app.use("/static", express.static(path.join(__dirname, "public")));

// 라우팅
app.get("/", (req, res) => {
  res.sendFile(path.resolve("public/index.html"));
});

app.get("/profile", (req, res) => {
  res.sendFile(path.resolve("public/profile.html"));
});
app.get("/profiel-data", (req, res) => {
  db.get("SELECT * FROM users WHERE id=?", [emp]);
});

app.get("/profile-data", (req, res) => {
  const username = req.session.username;

  // 로그인 여부 확인
  if (!username) {
    return res.status(401).json({ error: "로그인 필요" });
  }

  // 사용자 정보 조회
  const queryStr = "SELECT * FROM users WHERE username = ?";
  db.get(queryStr, [username], (err, row) => {
    if (err) {
      console.error("프로필 데이터 조회 오류:", err);
      return res.status(500).json({ error: "데이터 조회 실패" });
    }

    if (row) {
      res.json({
        username: row.username,
        id: row.id,
      });
    } else {
      res.status(404).json({ error: "사용자 정보 없음" });
    }
  });
});

// fetch 예제 라우트
app.get("/fetch-example", async (req, res) => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log("외부 API 데이터:", data);
    res.json(data);
  } catch (error) {
    console.error("fetch 요청 오류:", error);
    res.status(500).send("fetch 요청에 실패했습니다.");
  }
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);

  const queryStr = `SELECT * FROM users WHERE username = ? AND password = ?`;
  const row = db.prepare(queryStr).get(username, password);

  db.get(queryStr, [username, password], (err, row) => {
    if (row) {
      // 로그인 성공 시 세션에 사용자 정보 저장
      console.log("사용자 조회", row);
      req.session.username = row;
      console.log("로그인 완료이후");
      res.redirect("/profile");
    } else {
      res.send("로그인 실패");
    }
  });
});

app.get("/logout", (req, res) => {
  const user1 = req.session.user;
  console.log("로그아웃 완료1: ", user1);

  res.session.destroy();
  //에러처리 아무것도 안했음.

  //const user2= req.session.user;
  //console.log('로그아웃 완료: ',user);
  res.send();
});

app.listen(port, () => {
  console.log("서버 레디");
});
