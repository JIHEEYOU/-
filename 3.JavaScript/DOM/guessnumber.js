// 1. 랜덤 숫자 1~100까지를 생성한다.
const random = Math.floor(Math.random() * 100) + 1;
let min = 1; // 최소 범위
let max = 100; // 최대 범위
let attempts = 0; // 시도 횟수 기록

console.log("정답: ", random); // 테스트용으로 콘솔에 정답 출력

function startProgress() {
  const userNum = parseInt(document.getElementById("userNum").value); // 사용자 입력값
  const result = document.getElementById("result");
  const historyList = document.getElementById("historyList");

  if (isNaN(userNum) || userNum < min || userNum > max) {
    // 잘못된 입력에 대한 처리
    result.innerHTML = `유효한 숫자를 입력하세요 (범위: ${min} ~ ${max})`;
    return;
  }

  attempts++; // 시도 횟수 증가

  // 2. 입력한 숫자와 랜덤 숫자를 비교한다.
  if (userNum > random) {
    result.innerHTML = `<b>Too High!</b> (현재 시도 횟수: ${attempts})`;
    max = userNum - 1; // 범위 조정 (사용자가 입력한 값이 랜덤값보다 크면)
  } else if (userNum < random) {
    result.innerHTML = `<b>Too Low!</b> (현재 시도 횟수: ${attempts})`;
    min = userNum + 1; // 범위 조정 (사용자가 입력한 값이 랜덤값보다 작으면)
  } else {
    result.innerHTML = `<b>Correct!</b> ${attempts}번 만에 맞췄습니다!`;
    return; // 정답을 맞추면 함수 종료
  }

  // 3. 추측 기록을 출력한다.
  const listItem = document.createElement("li");
  listItem.textContent = `예측 숫자: ${userNum}`;
  historyList.appendChild(listItem);

  // 4. 다음 제안: 중간값을 제안한다.
  const suggestedGuess = Math.floor((min + max) / 2); // min과 max의 중간값 계산
  result.innerHTML += `<br>다음 제안: ${suggestedGuess}를 시도해 보세요.`;
}

// Guess 버튼 클릭 시 게임 진행
document.getElementById("guessButton").addEventListener("click", startProgress);
