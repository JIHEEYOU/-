const { response } = require("express");

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("loginButton").addEventListener("click", login);
  document.getElementById("logoutButton").addEventListener("click", logout);

  checkLoginStatus();
});

function checkLoginStatus() {
  //나 로그인중? 어떻게 알지? 우리의 서버가 앎
  fetch(".check-login")
    .then((response) => {
      //나머지 코드 구현
      //백엔드에게 내 세션이 살아있는지 보고, 살아있으면 사용자에게 받음
      if (response.ok) {
        //showProfile(username);
        return response.json();
      } else {
        console.log("로그인 안된 사용자임");
      }
    })
    .then((data) => {
      if (data && data.username) {
        console.log(data.username);
        showProfile(data.username);
      }
    });
}

function logout() {
  fetch("/logout").then((response) => {
    if (response.ok) {
      showLoginForm();
    }
  });
}

async function checkLoginStatusAsyncAwait() {
  try {
    const response = await fetch("/check-login");
    const data = await response.data;

    if (data && data.username) {
      console.log(data.name);
      showProfile(data.username);
    } else {
      showLoginForm();
      showLoginForm();
    }
  } catch {
    console.log("로그인 안 된 사용자였음");
  }
}

function login(e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  console.log("로그인 버튼클릭");

  fetch("/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  }).then((response) => {
    if (response.ok) {
      console.log("로그인 성공");
      window.location.href = "/profile";
    } else {
      console.log("로그인 실패");
    }
  });
}

function showProfile(username) {
  document.getElementById("loginFormContatainer").style.display = "none";
  document.getElementById("profile").style.display = "block";
  document.getElementById("usernameSpan").innerText = username;
}

function showLoginForm() {
  document.getElementById("loginFormContatainer").style.display = "block";
  document.getElementById("profile").style.display = "none";
}
