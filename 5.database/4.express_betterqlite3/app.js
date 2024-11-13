const express = require("express");
const splite3 = require("sqlite3");
const fs = require("fs");

const app = express();
const port = 3000;
const dbFile = "mydb.db";

const db = new sqlite3.Database(dbFile);

app.use(express.urlencoded({ extended: true }));

function initilizeDatabase() {
  const sql = fs.readFileSync("init_dataase.sql", "utf8");
  const statement = sql.split(";");
  //console.log(statement);
  try {
    db.transcation(() => {
      //실행을 원하는 퀴리문
      for (const statement of statements) {
        db.exec(statement);
      }
    })(); //트랜젝션은 성공하면 자동 커밋, 실패하면 자동 롤백
    console.log("초기화 성공!");
  } catch (err) {
    console.err("초기화 오류!");
  }
}

initilizeDatabase();

app.get("/users", (req, res) => {
    //여러개 반납
    try{
        const users=db.prepare('SELECT * FROM users').all();
    res.json(users);
    }catch(err){
        res.status(500).send('내부오류');
    }
});

app.get("/users/:id", (req, res) => {
    const userId = req.params.id;

    const user=db.prepare('SELECT * FROM users WHERE id= ?').get(userId);
res.json(user);});

 

app.post("/users", (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);

  db.run(
    `INSERT INTO users (username,password)VALUES (?,?)`,
    [username, password],
    function (err) {
      if (err) {
        console.err("오류!", err);
        return res.status(500).send("내부 오류");
      }
      res.send(`사용자 추가 완료: ${this.last}`);
    }
  );
});

app.put("/users/:id", (req, res) => {
    const userID = req.params.id;
  const { username, password } = req.body;

  //동적으로 이렇게 오는 입력값을 아래의 쿼리문으로 잘 ~~만들려면 어떻게 해야할까?
  //힌트: "username=?,password=?" <--이걸 입력값에 따라서 잘~만들려면?

  //입력값 받아올 변수
  let fields=[];
  let values=[];

  if(username !== undefined){
    fields.push("username=?");
    values.push(username);
  }

  if(password !== undefined){
    fields.push("username=?");
    values.push(username);
  }

  if(fields.length == 0){
    return res.status(400).send("변경할 필드가 없다!")
  }
values.push(userID);
  console.log(fields.join(", "),values);

  db.run(`UPDATE users SET ${fields.join(", ")} WHERE id=?`, [values, (err)]=>{
    if(err){
        console.log(err.message);
        return res.status(500).send('내부오류');
    }
    res.send(`사용자 (${userId}) 정보 업데이트 완료`);
});

app.delete("/users/:id", (req, res) => {
    const userID = req.params.id;
  
    //동적으로 이렇게 오는 입력값을 아래의 쿼리문으로 잘 ~~만들려면 어떻게 해야할까?
    //힌트: "username=?,password=?" <--이걸 입력값에 따라서 잘~만들려면?
    db.run('DELETE FROM users WHERE id=?',[userId, (err)]=>{
        if (err) {
            console.error(err.message);
            return res.status(500).send("내부 오류");
          }
          res.send(`사용자(${username}) 정보 삭제 완료`);
    })
});

app.get("/:table", (req, res) => {
  const db_table = req.params.table;

  try {
    const query = db.prepare(`SELECT * FROM ${db_table}`);
    const rows = query.all();
    res.json(rows);
  } catch (err) {
    res.send(`테이블이 없다: ${db_table}`);
  }
});

app.listen(port, () => {
  console.log("서버레디");
});
