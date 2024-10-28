const prompt = require("prompt-sync")(); // prompt-sync 모듈을 불러옵니다.

const random = Math.floor(Math.random() * 100) + 1;
let min = 1; // 최소 범위
let max = 100; // 최대 범위
let attempts = 0; // 시도 횟수 기록

console.log("정답: ", random); // 테스트용으로 콘솔에 정답 출력

function startProgress() {
  while (true) {
    // 사용자 입력을 받습니다.
    const userNum = parseInt(
      prompt(`숫자를 입력하세요 (범위: ${min} ~ ${max}): `)
    );

    // 입력값이 유효한지 확인합니다.
    if (isNaN(userNum) || userNum < min || userNum > max) {
      console.log(`유효한 숫자를 입력하세요 (범위: ${min} ~ ${max})`);
      continue;
    }

    attempts++; // 시도 횟수 증가

    // 입력한 숫자와 랜덤 숫자를 비교합니다.
    if (userNum > random) {
      console.log(`Too High! (현재 시도 횟수: ${attempts})`);
      max = userNum - 1; // 범위 조정 (입력한 값이 랜덤값보다 크면)
    } else if (userNum < random) {
      console.log(`Too Low! (현재 시도 횟수: ${attempts})`);
      min = userNum + 1; // 범위 조정 (입력한 값이 랜덤값보다 작으면)
    } else {
      console.log(`Correct! ${attempts}번 만에 맞췄습니다!`);
      break; // 정답을 맞추면 반복 종료
    }

    // 다음 제안: 중간값을 제안합니다.
    const suggestedGuess = Math.floor((min + max) / 2); // min과 max의 중간값 계산
    console.log(`다음 제안: ${suggestedGuess}를 시도해 보세요.`);
  }
}

// 게임 시작
startProgress();
