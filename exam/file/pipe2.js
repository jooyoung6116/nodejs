const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream("./readme_stream.txt");
const writeStream = fs.createWriteStream("./readme_stream.txt.gz");

const zlibStream = zlib.createGzip();

readStream.pipe(zlibStream).pipe(writeStream);
