const { resolve } = require("path");
const readline = require("readline");

console.log("입력값 받기전");

function askQuestion(query) {
  return new Promise((resolve) => {
    rl.question("원하는 값을 입력하세요: ", query, (answer) => {
      //console.log(`입력한 값은: ${answer}`);
      rl.close();
      resolve(answer);
    });
  });
}

/*askQuestion("원하는 값을 입력하세요: ").then((answer) => {
  console.log(`입력한 값은: ${answer}`);
  console.log("입력값 받은 후");
});*/

//내 안에 비동기있다.
async function askQuestion() {
  const answer1 = await askQuestion("원하는 값1을 입력하세요: ");
  console.log(`입력한 값은: ${answer1}`);
  const answer2 = await askQuestion("원하는 값2을 입력하세요: ");
  console.log(`입력한 값은: ${answer2}`);
}

askQuestion();
console.log("프로그램 끝 ");

/*.then((answer) => {
    console.log(`입력한 값1은: ${answer}`);
    return askQuestion("원하는 값2을 입력하세요: ");
  })
  .then((answer) => {
    console.log(`입력한 값2은: ${answer}`);
    console.log(`입력 모두 종료`);
  });

console.log("입력값 받은 후");

console.log("프로그램 끝");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});*/
