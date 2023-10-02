const {readFile, writeFile} = require('fs');

readFile('./content/first.txt', 'utf8', (err,result)=>{
    if(err){
        console.log(err);
        return ;
    }
    // console.log(result);
    const first = result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;

        //will override the privious content
        // writeFile('./content/result-asynch.txt',`Here is the result(from async): ${first} and ${second}`, (err,result)=>{

        //append in privious text
        writeFile('./content/result-asynch.txt',`Here is the result(from async): ${first} and ${second} \n`, {flag:'a'} , (err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log(result);
        })
    })
})