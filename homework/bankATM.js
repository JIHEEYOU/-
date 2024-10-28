// prompt-sync 모듈 불러오기
const prompt = require("prompt-sync")();

let balance = 100; // 초기 잔액 설정

function bankATM() {
  while (true) {
    console.log("\nATM 메뉴:");
    console.log("1. 잔액 확인");
    console.log("2. 입금");
    console.log("3. 출금");
    console.log("4. 종료");

    const choice = parseInt(prompt("원하는 기능을 선택하세요: "));

    if (isNaN(choice)) {
      console.log("올바른 번호를 입력하세요.");
      continue;
    }

    switch (choice) {
      case 1:
        console.log(`현재 잔액은 ${balance}입니다.`);
        break;

      case 2:
        const deposit = parseInt(prompt("입금할 금액을 입력하세요: "));
        if (isNaN(deposit) || deposit <= 0) {
          console.log("올바른 금액을 입력하세요.");
        } else {
          balance += deposit;
          console.log(
            `${deposit}원이 입금되었습니다. 현재 잔액은 ${balance}입니다.`
          );
        }
        break;

      case 3:
        const withdraw = parseInt(prompt("출금할 금액을 입력하세요: "));
        if (isNaN(withdraw) || withdraw <= 0) {
          console.log("올바른 금액을 입력하세요.");
        } else if (withdraw > balance) {
          console.log("잔액이 부족합니다.");
        } else {
          balance -= withdraw;
          console.log(
            `${withdraw}원이 출금되었습니다. 현재 잔액은 ${balance}입니다.`
          );
        }
        break;

      case 4:
        console.log("=> ATM을 종료합니다.");
        return; // 함수 종료

      default:
        console.log("올바른 번호를 입력하세요.");
    }
  }
}

// 함수 실행
bankATM();
