document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("startButton");
  const resetButton = document.getElementById("resetButton");
  const progressBar = document.getElementById("progress");
  const timeInput = document.getElementById("timeInput");

  let interval; //타이머 인터벌을 저장할 변수
  let duration = parseInt(timeInput.value); //현재 진행 시점을 저장할 변수

  function startProgress() {
    console.log("시작");

    let timePassed = 0;
    duration = parseInt(timeInput.value, 10); //10진수 계산
    progressBar.style.width = "0%"; //초기에 0으로 시작해서 매초마다 이걸 증가

    interval = setInterval(function () {
      timePassed++; ///경과된 시간 저장

      let progress = (timePassed / duration) * 100; //진행율 계산
      progressBar.style.width = `${progress}%`; //진행율 바 업데이트
      progressText.textContent = `${progress}%`;

      if (timePassed >= duration) {
        //지정된 시간이 초과
        clearInterval(interval); //동작시켜둔 타이머를 중지
      }
    }, 1000); //매 1초(1000ms)마다 이 안에 함수를 반복 실행
  }
  function resetProgress() {
    console.log("리셋");
    progressBar.style.width = "0%"; //그래프 초기화
    timeInput.value = ""; //입력필드 초기화
    clearInterval(interval); //타이머 초기화
  }

  startButton.addEventListener("click", startProgress);
  resetButton.addEventListener("click", resetProgress);
});
