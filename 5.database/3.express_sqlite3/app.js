const express = require("express");
const splite3 = require("sqlite3");
const fs = require("fs");
const { allowedNodeEnvironmentFlags } = require("process");

const app = express();
const port = 3000;
const dbFile = "mydb.db";

const db = new sqlite3.Database(dbFile);

app.use(express.urlencoded({extended:true}));

function initilizeDatabase() {
  const sql = fs.readFileSync("init_database.sql", "utf8");

  db.exec(sql, (err) => {
    if (err) {
      if (err.errno === 19) {
        console.warn("초기화 이미 이전에 완료");
      } else {
        console.log("초기화 오류", err);
      }
    } else {
      console.log("초기화 성공");
    }
  });
}
initilizeDatabase();

app.put('/users',(req,res)=>{
    //사용자 정보를 바꾸려면 어떻게 해야될까
})

app.post('/users',(req,res))=>{
    const{username, password}= req.body;
    console.log(username, password);
    
    db.run('INSERT INTO users (username,password)VALUES (?,?)',[username,password], function(err){
    if(err){
        console.err('오류!',err);
        return res.status(500).send('내부 오류')
    }res.send('사용자 추가 완료: ${this. last}') 
})}

app.get("/:table", (req, res) => {
    const db_table=req.params.table
   
  if (!allowedTables.includes(db_table)) {
    return res.status(401).send("Invalid table name");
  }
  const query = `SELECT * FROM ${db_table}`;
  db.all(query, (err, rows) => {
    if (err) {
      return res.send("DB조회 오류");
    }

    res.json(rows);
  });
});

app.get("/:table/:id", (req, res) => {
  const db_table = req.params.table;
  const id = req.params.id;

  if (!allowedTables.includes(db_table)) {
    return res.status(401).send("Invalid table name");
  }
  const query = `SELECT * FROM ${db_table}`;
  db.all(query, (err, rows) => {
    if (err) {
      return res.send("DB조회 오류");
    }
    if (!row) {
      return res.status(404).send(`Invalid ID:${id}`);
    }
    res.json(rows);
  });
});

app.listen(port, () => {
  console.log("서버레디");
});
