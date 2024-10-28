const os = require("os");

const hostname = os.hostname();
console.log("내PC의 호스트 명은??", hostname);

const tmpDir = os.tmpdir();
console.log("임시 폴더 경로는?", tmpDir);

const freeme = os.freemem();
console.log("잔여 메모리는?", freeme);

console.log("CPU는? ", os.cpus());
