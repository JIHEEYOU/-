// 데이터 페이징을 위한 변수 설정
const ITEMS_PER_PAGE = 10; // 한 페이지에 표시할 항목 수

// URL에서 검색 파라미터를 추출하는 함수
function getSearchParams() {
  const urlParams = new URLSearchParams(window.location.search);
  return {
    name: urlParams.get("name") || "",
    gender: urlParams.get("gender") || "",
    page: parseInt(urlParams.get("page")) || 1, // 기본 페이지는 1
  };
}

// URL에 검색 파라미터를 업데이트하는 함수
function updateURLParams(name, gender, page) {
  const urlParams = new URLSearchParams();
  if (name) urlParams.set("name", name);
  if (gender) urlParams.set("gender", gender);
  urlParams.set("page", page);

  window.history.replaceState(
    {},
    "",
    `${window.location.pathname}?${urlParams.toString()}`
  );
}

// 데이터 필터링 및 페이징 처리
function filterData(data, name, gender) {
  // 이름 검색: 이름에 'name'이 포함되는지 확인
  const nameSearch = name.toLowerCase();
  // 성별 검색: 선택한 성별과 일치하는지 확인
  return data.filter((user) => {
    const nameMatch = user.Name.toLowerCase().includes(nameSearch);
    const genderMatch = gender ? user.Gender === gender : true; // 성별이 선택되지 않으면 모든 성별을 허용
    return nameMatch && genderMatch;
  });
}

// 데이터를 페이징 처리
function paginateData(data, currentPage) {
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  return data.slice(start, end);
}

// 현재 페이지에 맞게 테이블을 렌더링
function renderTable(data) {
  const tableBody = document.getElementById("table-body");

  // 기존 테이블 데이터를 초기화
  tableBody.innerHTML = "";

  if (!data || data.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="6">데이터가 없습니다.</td></tr>`;
    return;
  }

  // 데이터 삽입
  data.forEach((user) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${user.Id}</td>
      <td>${user.Name}</td>
      <td>${user.Gender}</td>
      <td>${user.Age}</td>
      <td>${user.Birthdate}</td>
      <td>${user.Address}</td>
    `;
    tableBody.appendChild(row);
  });
}

// 페이지 버튼 상태 업데이트
function updatePagination(totalItems, currentPage) {
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");
  const currentPageSpan = document.getElementById("current-page");
  const totalPagesSpan = document.getElementById("total-pages");

  // 페이지 표시
  currentPageSpan.textContent = currentPage;
  totalPagesSpan.textContent = totalPages;

  // 이전/다음 버튼 상태 업데이트
  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage === totalPages;
}

// 페이지 로드 함수
function loadPage(page) {
  const { name, gender } = getSearchParams();

  fetch("/api/users")
    .then((response) => response.json())
    .then((data) => {
      const filteredData = filterData(data, name, gender); // 필터링된 데이터
      const paginatedData = paginateData(filteredData, page); // 페이징된 데이터
      renderTable(paginatedData); // 테이블 렌더링

      // 페이지 버튼 상태 업데이트
      updatePagination(filteredData.length, page);

      // URL 파라미터 업데이트
      updateURLParams(name, gender, page);
    })
    .catch((error) => {
      console.error("데이터 로드 오류:", error);
    });
}

// 검색 버튼 클릭 시 데이터 갱신
document.getElementById("search-button").addEventListener("click", () => {
  const name = document.getElementById("search-name").value;
  const gender = document.getElementById("search-gender").value;

  // 첫 페이지로 이동
  loadPage(1); // 검색 후 첫 페이지로 이동
  updateURLParams(name, gender, 1); // URL 파라미터 갱신
});

// 이전/다음 버튼 클릭 시 페이지 이동
document.getElementById("prev-button").addEventListener("click", () => {
  const { page } = getSearchParams();
  if (page > 1) {
    loadPage(page - 1); // 이전 페이지로 이동
  }
});

document.getElementById("next-button").addEventListener("click", () => {
  const { page } = getSearchParams();
  loadPage(page + 1); // 다음 페이지로 이동
});

// 초기 페이지 로드 시 URL에서 파라미터 읽고 데이터 로드
window.onload = () => {
  const { page } = getSearchParams();
  loadPage(page); // 페이지 로드 시 필터와 검색 조건을 반영하여 데이터 표시
};
