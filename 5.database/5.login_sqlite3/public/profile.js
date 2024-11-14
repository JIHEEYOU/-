document.addEventListener("DOMContentLoaded", () => {
  loadProfileData();
});

async function loadProfileData() {
  const response = await fetch("/profile-data");
  if (response.ok) {
    const data = await response.json();
    document.getElementsById("username").textContent = data.username;
    document.getElementsById("email").textContent = data.email;
    document.getElementsById("created_at").textContent = data.created_at;
    document.getElementsById("role").textContent = data.role;
    //document.getElementById('username').textContend=data.username;
  } else {
    console.log(response.status);
  }
}

async function logout() {
  const response = await fetch("/logout");
  if (response.ok) {
    window.location.href = "/"; //로그아웃 후 홈페이지 이동
    alert("로그아웃 성공");
  } else {
    console.error("로그아웃 실패");
  }
}
