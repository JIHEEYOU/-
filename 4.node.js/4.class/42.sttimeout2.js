const { error } = require("console");

function asyncLooongtast(callback) {
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber >= 0.5) {
      callback(null, "작업이 완료되었습니다.");
    } else {
      callback("작업이 실패하였습니다.", null);
    }
  }, 2000); //2초 지연 후 작업실행
}

asyncLooongtast((error, result) => {
  if (error) {
    console.error("실패: ", error);
    return;
  }
  console.log("성공: ", result);
});
s;
