const http=require("http");

const server=http.createServer((req,res)=>{
    
    console.log("one request received");
    // console.log(req)
    res.end("Hello, World!");
});

server.listen(3000,(err) => {
  if(err) console.error("Server failed to start:", err);
  else console.log("Server is running on port 3000");
});