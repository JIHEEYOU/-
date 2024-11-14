const { connectToDatabase, queryName, queryAll } = require("./queryTime");

const db = connectToDatabase();

const searhName = "정다사"; //찾고자 하는 이름

queryName(db, searhName);

db.close();

const searchDetail = {
  name: "정다사",
  department: "HR",
  salary: 60000,
};

function queryAll(db, searchDetail) {
  let selectQuery = "SELECT * FROM employees WHERE";
  const queryParams = [];

  if (searchOptions.name) {
    let selectQuery = "SELECT * FROM emplyees WHERE";
    const queryParams = [];
  }

  if (searchOptions.department) {
    selectQuery += "department=?";
    queryParams.push(searchOptions.department);
  }

  if (searchOptions.salary) {
    selectQuery += "salary=?";
    queryParams.push(searchOptions.department);
  }

  console.log(selectQuery);

  console.log("Query Time");
}
