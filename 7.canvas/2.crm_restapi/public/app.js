const express = require("express");
const sqlite3 = require("sqlite3");
const path = require("path");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "revenue.html"));
});

app.get("/revenue_data", (req, res) => {
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
`
    [],(err, rows) => {
      if (err) {
        console.error("쿼리 실패!!");
      } else {
        console.log(rows);

        // console.log(JSON.stringify(labels));
        // console.log(JSON.stringify(revenues));

        //프런트가 원하는 데이터 형태로 가공해ㅓㅅ 주면 좋지 않을까?
        //친절한 김백엔드씨가 데이터를 잘 가공해주겠습니다.

        const labels = [];
        const revenue = [];

        for (const row of rows) {
          //우리는 모두 김백엔드씨가 되어서.. 데이터를 가공하면됨
          labels.push(row.YearMonth);
          revenue.push(row.MonthlyRevenue);
        }
        const charData = {
          labels: labels,
          revenues:revenues,
        };
        
        res.json(charData);
    }
 
});

app.listen(port, () => {
  console.log("서버 시작");
});
  res.json();
});

app.listen(port, () => {
  console.log("서버 레디");
});
