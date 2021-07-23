const fs = require('fs');

const readStream = fs.createReadStream('./readme_stream.txt');
const writeStream = fs.createWriteStream('./readme_stream.copied.txt');

readStream.pipe(writeStream);