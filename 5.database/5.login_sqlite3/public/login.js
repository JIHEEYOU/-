document.addEventListener("DOMContentLoaded", () => {
  //폼잡아다가 폼의 기본기능 못하게 하고
  document
    .getElementById("login-form")
    .addEventListener("submit", async (e) => {
      e.preventDefault(); //폼의 기본 기능 무력화

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      const response = await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ username: username, password: password }),
      });

      if (response.redirected) {
        const data = await response.text();
        console.log(response.url);
        window.location.href = response.url;
      } else {
        const message = await response.json();
        document.getElementById("login-message").textContent = data;
      }
    });
  //fetcg로 login 요청해서 결과받아서
  //실패->이 DOM의 어딘가에 결과를 출력
  //tjdrhd->원래 하던데로 rediret로 /profile로 이동
});
