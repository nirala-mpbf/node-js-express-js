const http = require('http');

//Concept:1
// const myServer = http.createServer((req,res)=>{
//     console.log("hi");
//     console.log(req);

//     res.write('Welcome to our home page');
//     res.end();
// })
// myServer.listen(5000);




// concept2:
const myServer = http.createServer((req,res)=>{
    
    if(req.url==='/'){
        console.log("IN Home")
        res.end('Welcome to our home page in end');
        return;
    }
    if(req.url==='/about'){
        console.log("IN About")
        res.end('Here is our short histrory')
        return;
    }
    console.log("Some Invalid URL is requested!")
    res.end(`
        <h1> Invalid URL </h1>
        <p> You have entered some Invalid URL </p>
        <a href='/'> Back to Home </a>       
        <br/>
        <a href='/about'> Back to About </a>       
    `);
    
})
myServer.listen(5000);
