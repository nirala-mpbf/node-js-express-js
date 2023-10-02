const path = require('path')

console.log(path.sep);

//file path
const filePath = path.join('/content','subfolder','text.txt');
const filePath1 = path.join('/content','/subfolder','text.txt');
const filePath2 = path.join('/content/','subfolder/','/text.txt');
const filePath3 = path.join('content','subfolder','text.txt');
console.log(filePath);
console.log(filePath1);
console.log(filePath2);
console.log(filePath3);

//base path
const base = path.basename(filePath);
const base1 = path.basename(filePath1);
const base2 = path.basename(filePath2);
const base3 = path.basename(filePath3);
console.log(base);
console.log(base1);
console.log(base2);
console.log(base3);

//absolute path
const absolutePath = path.resolve(__dirname,'content','subfolder','text.txt');
console.log(absolute);

