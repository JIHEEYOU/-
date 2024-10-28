console.log("0. 타이머를 통한 비동기처리");

function setTimeoutSync(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, delay);
  });
}

/*setTimeoutSync("1. 첫번째 작업:1초 후 실행", 1000).then(() => {
  setTimeoutSync("2.두번째 작업:2초 후 실행", 1000).then(() => {
    setTimeoutSync("3.첫번째 작업:3초후 실행", 3000).then(() => {
      setTimeoutSync("4.첫번째 작업:4초후 실행", 4000);
    });
  });
});
*/

//프로미스 체이닝
setTimeoutSync("1. 첫번째 작업:1초 후 실행", 1000).then(() => {
  setTimeoutSync("2.두번째 작업:2초 후 실행", 1000).then(() => {
    setTimeoutSync("3.첫번째 작업:3초후 실행", 3000).then(() => {
      setTimeoutSync("4. 모든 작업이 완료되었습니다.");
    });
  });
});

//const result = setTimeoutSync("1.첫번째 작업:1초후 실행");
//console.log(result);

/*setTimeout(() => {
  console.log("1.첫번째 작업:1초후 실행");
}, 1000); //1초

//기다리고 싶으면?

setTimeout(() => {
  console.log("2.두번째 작업:2초후 실행");
}, 2000); //2초

setTimeout(() => {
  console.log("3.첫번째 작업:3초후 실행");
}, 3000); //3초

console.log("4.첫번째 작업:4초후 실행");*/
