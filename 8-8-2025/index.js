const http=require('http');
const url=require('url');
const myServer=http.createServer((req,res)=>{
    let myUrl=url.parse(req.url,true);

    switch(myUrl.pathname){
        case '/':
            res.end('Welcome to the Home Page');
            break;
        case '/simpleInterest':
            let a=myUrl.query.a;
            let b=myUrl.query.b;
            let t=myUrl.query.t;
            if(a && b && t) {
                let interest = (a * b * t) / 100;
                res.end(`The Simple Interest is: ${interest}`);
            }
            break;
        case '/average':
            let a1=myUrl.query.a;
            let b2=myUrl.query.b;    
            if(a1 && b2) {
                let average = (parseFloat(a1) + parseFloat(b2)) / 2;
                res.end(`The Average is: ${average}`);
            }
            break;
        default:
            res.end('404 Not Found');
            break;           
    }
});

myServer.listen(3000,()=>{
    console.log('Server is running on port 3000');
});