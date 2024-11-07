// user.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const username = document.getElementById("username");

  updateUsers(); // 기존에 등록된 사용자 업데이트

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = username.value;

    if (!name) {
      alert("이름을 입력하세요");
      return;
    }

    registerUser(name);
  });
});

// 사용자 등록 함수
function registerUser(name) {
  fetch("/user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  })
    .then((response) => {
      if (response.ok) {
        alert("등록 성공");
        username.value = ""; // 성공하면 입력 필드 초기화
        updateUsers(); // 새로고침하여 사용자 업데이트
      } else {
        alert("등록 실패");
      }
    })
    .catch((error) => {
      alert(`등록 중 오류 발생: ${error.message}`);
    });
}

// 사용자 목록 업데이트 함수
function updateUsers() {
  fetch("/user")
    .then((response) => response.json())
    .then((users) => {
      const userTable = document.getElementById("userTable");
      userTable.innerText = ""; // 테이블 초기화

      if (Object.keys(users).length === 0) {
        const noUsersMessage = document.createElement("div");
        noUsersMessage.innerText = "등록된 사용자가 없습니다";
        userTable.appendChild(noUsersMessage);
      } else {
        for (const key in users) {
          const row = document.createElement("div");
          row.innerText = `ID: ${key}, Name: ${users[key]}`;

          // 수정 버튼 추가
          const modifyButton = document.createElement("button");
          modifyButton.textContent = "수정";
          row.appendChild(modifyButton);

          // 삭제 버튼 추가
          const deleteButton = document.createElement("button");
          deleteButton.textContent = "삭제";
          deleteButton.addEventListener("click", () => deleteUser(key));
          row.appendChild(deleteButton);

          // 테이블에 행 추가
          userTable.appendChild(row);
        }
      }
    })
    .catch((error) => {
      console.error("사용자를 불러오는 데 실패하였습니다.", error.message);
      alert("사용자 로딩 오류");
    });
}

// 사용자 삭제 함수
function deleteUser(userId) {
  fetch(`/user/${userId}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        alert("삭제 성공");
        updateUsers(); // 성공 시 목록 업데이트
      } else {
        alert("삭제 실패");
      }
    })
    .catch((error) => {
      console.error("삭제 중 오류 발생", error.message);
      alert("삭제 중 오류가 발생했습니다.");
    });
}
