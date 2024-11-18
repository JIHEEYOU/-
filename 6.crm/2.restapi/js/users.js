const { response } = require("express");

const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("seacrch-name");

searchButton.addEventListener("click", () => {
  searchName = searchInput.value;
  fetchUsers(searchName);
});

function fetchUsers(searchName) {
  fetch(`/api/users`)
    .then((reponse) => reponse.json())
    .then((data) => {
      //렌더링 코드 작성
      renderTable(data);
      console.log(data);
    });

  //esponse= await fetch(`/api/users`);
  //const data = await response.json();
}

function renderTable(data) {
  const tableHeader = document.getElementById("table-header");
  const tableBody = document.getElementById("table-body");

  //지우고 출발하자..
  tableHeader.innerHTML = "";
  tableBody.innerHTML = "";

  //헤더 그리기 tr안에 th그리기
  const headerRow = document.createElement("tr");
  const fileds = Object.keys(data[0]);

  fileds.forEach((f) => {
    if (f !== "Id" && f !== "Address") {
      const th = document.createElement("th");
      th.textContent = f;
      headerRow.appendChild(th);
    }
  });

  tableHeader.appendChild(headerRow);
  console.log(fields);

  //바디 그리기 : tr 안에 td그리기
  //Object.entries() 이걸 통해서 td 추가한다.

  data.forEach((row) => {
    const bodyRow = document.createElement("tr");
    bodyRow.addEventListener("click", () => {
      window.location = `/user/${row.Id}`;
    });

    for (const [key, value] of Object.entries(row)) {
      if (key !== "Id" && key !== "Address") {
        const td = document.createElement("td");
        td.textContent = value;
        bodyRow.appendChild(td);
      }
    }
    tableBody.appendChild(bodyRow);
  });
}

fetchUsers(""); //시작할 때는 그냥 빈값으로 검색, 즉 모든 사용자 다 출력
