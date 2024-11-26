const express = require("express");
const sqlite3 = require("sqlite3");
const path = require("path");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "revenue.html"));
});

app.get("/gender_dist_data", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "revenue.html"));
});

app.get("/revenue_data", (req, res) => {
  //원하는 쿼리문
  db.all(
    `SELECT 
    CASE
            WHEN age BETWEEN 10 AND 19 as 10대
            WHEN age BETWEEN 20 AND 29 as 20대
            WHEN age BETWEEN 30 AND 39 as 30대
            WHEN age BETWEEN 40 AND 49 as 40대
            WHEN age BETWEEN 50 AND 59 as 50대
            WHEN age >= 60대 THEN '60대 이상'
        END AS AgeGroup,
        Gender,
        COUNT(*) AS UserCount
    FROM users
    GROUP BY AgeGroup,Gender;`,
    [],
    (err, rows) => {
      if (err) {
        console.error("쿼리 실패!!");
      } else {
        console.log(rows);

        //TODO 우리의 코드로 아래 내용 만든다 숙제..!!
        //데이터를 가공... 원하는 걸로...
        //labels:['10대', '20대', '30대', '40대', '50대']
        //maleCount:[100,124,128,107,29]
        //femaleCount:[101,135,126,117,33]

        const charData={
            labels:['10대', '20대', '30대', '40대', '50대']
            maleCount:[100,124,128,107,29]
            femaleCount:[101,135,126,117,33]
        }

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
          revenues: revenues,
        };

        res.json(charData);
      }
    }
  );

  app.listen(port, () => {
    console.log("서버 시작");
  });
  res.json();
});

app.listen(port, () => {
  console.log("서버 레디");
});
