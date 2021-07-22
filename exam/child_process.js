//.on("이벤트명", 이벤트핸들러) -> 대기상태에 있다가 실행되면 출력해주는 것

//child_process - 외부 프로그램을 실행
//2 - > stdout - data 이벤트(실행 성공시 출력 결과물), stderr - data(실행 실패시 에러 메세지)

//const childProcess = require("child_process");
const {exec} = require('child_process');

//const result = childProcess.exec("dir");
const result = exec('dir');

result.stdout.on("data", (data) => {
	console.log(data);
});

result.stderr.on("data",(data) => {
	console.log(data);
});