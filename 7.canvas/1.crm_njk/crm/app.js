const express = require("express");
const sqlite3 = require("sqlite3");
const nunjucks = require("nunjucks");

const app = express();
const port = 3000;

// 눈적스 초기화
nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

app.set("view engine", "njk"); // 눈적스 기본 확장자 njk -> html 로 변경 다시 html에서 njk로 바꿈

app.get("/", (req, res) => {
  const db = new sqlite3.Database("user-sample.db", (err) => {
    if (err) {
      console.error("파일없다!");
    } else {
      console.log("DB 로딩 성공");
    }
  });

  // 원하는 쿼리문
  db.all(
    `SELECT 
            strftime('%Y-%m', "orders"."OrderAt") AS YearMonth,
            SUM(items.UnitPrice) AS 'Total Revenue', COUNT(*) AS 'Item Count',
            SUM(items.UnitPrice) AS MonthlyRevenue
        FROM 
            "orders"
        JOIN 
            "order_items" ON "orders"."Id" = "order_items"."OrderId"
        JOIN 
            "items" ON "order_items"."ItemId" = "items"."Id"
        WHERE 
            "orders"."OrderAt" >= '2023-01-01' AND "orders"."OrderAt" <= '2023-12-31'
        GROUP BY 
            strftime('%Y-%m', "orders"."OrderAt")
        ORDER BY 
            strftime('%Y-%m', "orders"."OrderAt")
    `,
    [],
    (err, rows) => {
      if (err) {
        console.error("쿼리 실패!!");
      } else {
        console.log(rows);


        const labels = rows.map((row) => row.YearMonth);
        const revenues = rows.map((row) => row.MonthlyRevenue);
        // console.log(JSON.stringify(labels));
        // console.log(JSON.stringify(revenues));

        //프런트가 원하는 데이터 형태로 가공해ㅓㅅ 주면 좋지 않을까?
        //친절한 김백엔드씨가 데이터를 잘 가공해주겠습니다.

        const labels = [];
        const revenue = [];

        for (const row of rows) {
          //우리는 모두 김백엔드씨가 되어서.. 데이터를 가공하면됨
        }
        const charData = {
          labels: JSON.stringify(labels),
          revenues: JSON.stringify(revenues),
        };
      }
    }
  );
  //res.json();
});

app.listen(port, () => {
  console.log("서버 시작");
});

db.close((err) => {
  if (err) {
    console.log("DB닫기 실패.. 왜?", err.message);
  } else {
    console.log("DB닫기 성공");
  }
});
