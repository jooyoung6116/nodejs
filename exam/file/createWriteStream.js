const fs = require('fs');
const writeStream = fs.createWriteStream("./writeme_stream.txt");
writeStream.on("finish",() => {
	console.log("스크림방식 파일쓰기 완료!");
});

writeStream.write("가나다라마바사");
writeStream.write("abcdefg");
writeStream.end(); // 스크림을 닫기