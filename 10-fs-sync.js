const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');

console.log(first,second);

//writeFileSync will create the file if the file is not persent in specified path

// it will override if any content will be there
writeFileSync('./content/result-sync.txt' , `Here is the result : ${first} and ${second}`);

//set a flag as 'a', it is denoting that that it will append in privious content
writeFileSync('./content/result-sync-append.txt' , `Here is the result : ${first} and ${second}`,{flag:'a'});
